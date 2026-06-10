'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, AlertCircle, X } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  name: '', email: '', phone: '', company: '', subject: '', message: '',
};

const SERVICES_LIST = [
  'IVR Solutions',
  'Bulk SMS Services',
  'AI Voice Bot',
  'WhatsApp Bot',
  'RCS Messaging',
  'OBD Campaigns',
  'Location / Target Based Lead Generation',
  'Multiple Services',
  'General Inquiry',
];

export function ContactForm() {
  const [formState, setFormState]     = useState<FormState>('idle');
  const [errors, setErrors]           = useState<Partial<FormData>>({});
  const [toast, setToast]             = useState<string | null>(null);
  const [data, setData]               = useState<FormData>(EMPTY_FORM);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [privacyError, setPrivacyError]   = useState<string | undefined>(undefined);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!data.name.trim())
      e.name = 'Full name is required';
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = 'A valid email address is required';
    if (!data.phone.match(/^[6-9]\d{9}$/))
      e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!data.message.trim())
      e.message = 'Please write your message';
    setErrors(e);
    if (!privacyAgreed)
      setPrivacyError('Please provide your consent before submitting the form.');
    return Object.keys(e).length === 0 && privacyAgreed;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (toast) setToast(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');
    setToast(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState('success');
      } else {
        const json = await res.json().catch(() => ({}));
        const msg =
          res.status === 429
            ? 'Too many requests. Please wait a minute and try again.'
            : json.error || 'Something went wrong. Please call us directly.';
        setToast(msg);
        setFormState('idle');
      }
    } catch {
      setToast('Network error. Please check your connection or call +91 88822 22324.');
      setFormState('idle');
    }
  };

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-10 border border-gray-100 text-center"
      >
        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-brand-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
        <p className="text-gray-500 mb-6 leading-relaxed">
          Thank you, <strong>{data.name}</strong>. We&apos;ve received your enquiry and will
          reach out to <strong>{data.email}</strong> within 4 business hours.
        </p>
        <button
          onClick={() => {
            setFormState('idle');
            setData(EMPTY_FORM);
            setErrors({});
            setPrivacyAgreed(false);
            setPrivacyError(undefined);
          }}
          className="text-sm font-semibold text-brand-600 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const fieldClass = (field: keyof FormData) =>
    `w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white placeholder:text-gray-400 ${
      errors[field] ? 'border-red-400 bg-red-50 focus:ring-red-400' : 'border-gray-200'
    }`;

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-glass">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
      <p className="text-gray-500 text-sm mb-8">
        We typically respond within 4 business hours.
      </p>

      {/* Error toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-3 mb-6 px-4 py-3.5 bg-red-50 border border-red-200 rounded-xl"
          >
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 flex-1">{toast}</p>
            <button
              onClick={() => setToast(null)}
              className="text-red-400 hover:text-red-600 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Rajesh Mehta"
              value={data.name}
              onChange={handleChange}
              autoComplete="name"
              className={fieldClass('name')}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="rajesh@company.com"
              value={data.email}
              onChange={handleChange}
              autoComplete="email"
              className={fieldClass('email')}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Phone + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="9876543210"
              value={data.phone}
              onChange={handleChange}
              autoComplete="tel"
              maxLength={10}
              className={fieldClass('phone')}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Company <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              name="company"
              type="text"
              placeholder="Acme Corp"
              value={data.company}
              onChange={handleChange}
              autoComplete="organization"
              className={fieldClass('company')}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject</label>
          <select
            name="subject"
            value={data.subject}
            onChange={handleChange}
            className={fieldClass('subject')}
          >
            <option value="">Select a topic...</option>
            {SERVICES_LIST.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirements — volume, use case, timeline..."
            value={data.message}
            onChange={handleChange}
            className={`${fieldClass('message')} resize-none`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Privacy Policy checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer select-none group">
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                checked={privacyAgreed}
                onChange={(e) => {
                  setPrivacyAgreed(e.target.checked);
                  if (e.target.checked) setPrivacyError(undefined);
                }}
                className="sr-only peer"
              />
              <div
                className={`w-[18px] h-[18px] rounded-[5px] border-2 transition-all duration-150 flex items-center justify-center
                  ${privacyAgreed
                    ? 'bg-brand-600 border-brand-600'
                    : privacyError
                      ? 'border-red-400 bg-red-50'
                      : 'border-gray-300 bg-gray-50 group-hover:border-brand-400'
                  }`}
              >
                {privacyAgreed && (
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-600 leading-snug">
              By clicking on 'Send Message', I agree to receive updates, offers, and promotional communications via SMS, RCS, and WhatsApp, and I accept the{' '}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Privacy Policy
              </a>
              <span className="text-red-500 ml-0.5">*</span>
            </span>
          </label>
          {privacyError && (
            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 ml-[calc(18px+12px)]">
              <AlertCircle className="w-3 h-3 shrink-0" /> {privacyError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-brand-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {formState === 'loading' ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Sending your message...</>
          ) : (
            <><Send className="w-5 h-5" /> Send Message</>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          We never share your data with third parties.
        </p>
      </form>
    </div>
  );
}
