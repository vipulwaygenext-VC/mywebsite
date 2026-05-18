import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ---------------------------------------------------------------------------
// In-memory rate limiter  (sliding window, per IP)
// NOTE: resets across serverless cold starts — upgrade to Redis for multi-node
// ---------------------------------------------------------------------------
interface RateRecord { hits: number; resetAt: number }
const rl = new Map<string, RateRecord>();
const WINDOW_MS   = 60_000; // 1 minute
const MAX_HITS    = 5;      // 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Occasional cleanup to prevent unbounded memory growth
  if (Math.random() < 0.02) {
    rl.forEach((v, k) => { if (now > v.resetAt) rl.delete(k); });
  }

  const entry = rl.get(ip);
  if (!entry || now > entry.resetAt) {
    rl.set(ip, { hits: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.hits >= MAX_HITS) return true;
  entry.hits++;
  return false;
}

// ---------------------------------------------------------------------------
// Input sanitization
// ---------------------------------------------------------------------------
function sanitize(raw: unknown, maxLen = 2_000): string {
  return String(raw ?? '')
    .trim()
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // control chars
    .replace(/<[^>]*>/g, '')                              // strip HTML tags
    .slice(0, maxLen);
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

function validate(p: ContactPayload): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!p.name)                                         errors.name    = 'Full name is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))   errors.email   = 'Valid email is required';
  if (!/^[6-9]\d{9}$/.test(p.phone))                  errors.phone   = 'Valid 10-digit Indian mobile is required';
  if (!p.message)                                      errors.message = 'Message is required';
  return errors;
}

// ---------------------------------------------------------------------------
// Email HTML builder
// ---------------------------------------------------------------------------
function buildHtml(p: ContactPayload, ip: string, ts: string): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;white-space:nowrap;color:#374151;width:130px;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <div style="max-width:620px;margin:32px auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#16a34a,#15803d);padding:28px 32px;">
      <p style="margin:0;color:rgba(255,255,255,0.8);font-size:12px;letter-spacing:1px;text-transform:uppercase;">Vaktel Website</p>
      <h1 style="margin:6px 0 0;color:white;font-size:22px;font-weight:700;">New Enquiry Received</h1>
    </div>

    <!-- Details table -->
    <div style="padding:28px 32px 0;">
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        ${row('Name',         p.name)}
        ${row('Email',        `<a href="mailto:${p.email}" style="color:#16a34a;">${p.email}</a>`)}
        ${row('Phone',        `<a href="tel:+91${p.phone}" style="color:#16a34a;">+91 ${p.phone}</a>`)}
        ${row('Company',      p.company || '—')}
        ${row('Subject',      p.subject || '—')}
        ${row('Submitted At', ts + ' IST')}
        ${row('IP Address',   ip)}
      </table>
    </div>

    <!-- Message body -->
    <div style="padding:24px 32px;">
      <p style="margin:0 0 10px;font-weight:600;color:#374151;font-size:14px;">Message</p>
      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;font-size:14px;color:#374151;white-space:pre-wrap;line-height:1.6;">
${p.message}
      </div>
    </div>

    <!-- Reply CTA -->
    <div style="padding:0 32px 28px;">
      <a href="mailto:${p.email}?subject=Re: ${encodeURIComponent(p.subject || 'Your Vaktel Enquiry')}"
         style="display:inline-block;background:#16a34a;color:white;font-weight:600;font-size:14px;padding:12px 24px;border-radius:8px;text-decoration:none;">
        Reply to ${p.name}
      </a>
    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 32px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">
        Vaktel · Waygenext Technologies Pvt Ltd · support@vaktel.in
      </p>
    </div>
  </div>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Extract client IP
  const ip =
    (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  // 2. Rate limiting
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute before trying again.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }

  // 3. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // 4. Sanitize
  const payload: ContactPayload = {
    name:    sanitize(body.name,    100),
    email:   sanitize(body.email,   320),
    phone:   sanitize(body.phone,   10),
    company: sanitize(body.company, 200),
    subject: sanitize(body.subject, 200),
    message: sanitize(body.message, 5_000),
  };

  // 5. Validate
  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Validation failed', errors }, { status: 422 });
  }

  // 6. Guard: SMTP must be configured
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[contact] SMTP env vars not configured');
    return NextResponse.json(
      { error: 'Email service is not configured. Please call us at +91 92899 02218.' },
      { status: 503 }
    );
  }

  // 7. Build and send email
  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone:    'Asia/Kolkata',
    year:        'numeric',
    month:       'long',
    day:         'numeric',
    hour:        '2-digit',
    minute:      '2-digit',
    hour12:      true,
  });

  const emailSubject = `New Enquiry: ${payload.subject || 'General'} — ${payload.name}`;

  try {
    await transporter.sendMail({
      from:    `"Vaktel Website" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to:      ['support@vaktel.in', 'vipul.waygenext@gmail.com'],
      replyTo: payload.email,
      subject: emailSubject,
      html:    buildHtml(payload, ip, timestamp),
      text: [
        `New enquiry from Vaktel website`,
        `Name:    ${payload.name}`,
        `Email:   ${payload.email}`,
        `Phone:   +91 ${payload.phone}`,
        `Company: ${payload.company || '—'}`,
        `Subject: ${payload.subject || '—'}`,
        `Time:    ${timestamp} IST`,
        `IP:      ${ip}`,
        ``,
        `Message:`,
        payload.message,
      ].join('\n'),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[contact] sendMail error:', err);
    return NextResponse.json(
      { error: 'Failed to send your message. Please call us directly at +91 92899 02218.' },
      { status: 500 }
    );
  }
}

// Disallow other HTTP methods
export function GET()    { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
export function PUT()    { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
export function DELETE() { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
