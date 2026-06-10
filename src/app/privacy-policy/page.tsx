import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Vaktel',
  description: 'Learn how Vaktel (Waygenext Technologies Pvt Ltd) collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <h2>1. Who We Are</h2>
        <p>
          Vaktel is a brand of <strong>Waygenext Technologies Pvt Ltd</strong>, a company incorporated under the laws
          of India. Our registered office is at Orchid Business Park, Badshahpur Sohna Rd, Near Subhash Chowk,
          Central Park II, Sector 48, Gurugram, Haryana 122018. For privacy-related queries, contact us at{' '}
          <a href="mailto:support@vaktel.in">support@vaktel.in</a>.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We collect information you provide directly to us:</p>
        <ul>
          <li><strong>Contact information</strong> — name, email address, phone number, company name.</li>
          <li><strong>Usage data</strong> — pages visited, browser type, IP address, and referring URLs.</li>
          <li><strong>Communications</strong> — messages you send via our contact form or email.</li>
          <li><strong>Service data</strong> — call logs, message delivery reports, and campaign analytics generated through use of our products.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and improve our services.</li>
          <li>Respond to enquiries and provide customer support.</li>
          <li>Send transactional and service-related communications.</li>
          <li>Send marketing communications where you have consented.</li>
          <li>Comply with legal obligations, including TRAI regulations.</li>
          <li>Detect and prevent fraud or abuse.</li>
        </ul>

        <h2>4. Legal Basis for Processing (GDPR)</h2>
        <p>
          Where GDPR applies, we rely on: (a) your consent; (b) performance of a contract; (c) compliance with a
          legal obligation; or (d) our legitimate interests, such as preventing fraud and improving our services.
        </p>

        <h2>5. Sharing of Information</h2>
        <p>
          We do not sell your personal data. We may share data with trusted third-party service providers who
          assist us in operating our business (e.g., cloud infrastructure, email delivery) under strict
          confidentiality obligations. We may also disclose data when required by law or to protect rights and safety.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain personal data only as long as necessary to fulfil the purposes described in this policy or as
          required by applicable law. Service data (call logs, delivery reports) is retained for a minimum of 90
          days as required by TRAI and may be retained longer for dispute resolution.
        </p>

        <h2>7. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience. See our{' '}
          <Link href="/cookies" className="text-brand-600 hover:underline">Cookie Policy</Link> for details.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal
          data, or to object to or restrict processing. To exercise these rights, email{' '}
          <a href="mailto:support@vaktel.in">support@vaktel.in</a>. We will respond within 30 days.
        </p>

        <h2>9. Security</h2>
        <p>
          We implement industry-standard technical and organisational measures to protect your data, including
          TLS encryption in transit and AES-256 encryption at rest. However, no method of transmission over the
          internet is 100% secure.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be notified via email or a
          prominent notice on our website at least 14 days before they take effect.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          For any privacy concerns, please contact our Data Protection Officer at{' '}
          <a href="mailto:support@vaktel.in">support@vaktel.in</a> or call{' '}
          <a href="tel:+918882222324">+91 88822 22324</a>.
        </p>
      </div>
    </div>
  );
}
