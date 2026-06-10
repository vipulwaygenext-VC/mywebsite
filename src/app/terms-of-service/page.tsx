import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Vaktel',
  description: 'Read the Terms of Service governing your use of Vaktel products and services by Waygenext Technologies Pvt Ltd.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using any Vaktel product or service (&ldquo;Services&rdquo;), you agree to be bound by
          these Terms of Service (&ldquo;Terms&rdquo;). These Terms constitute a legally binding agreement between
          you and <strong>Waygenext Technologies Pvt Ltd</strong> (&ldquo;Vaktel,&rdquo; &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; &ldquo;us&rdquo;). If you do not agree, do not use the Services.
        </p>

        <h2>2. Services</h2>
        <p>
          Vaktel provides cloud-based communication services including Interactive Voice Response (IVR), Bulk SMS,
          AI Voice Bots, WhatsApp Business automation, RCS (Rich Communication Services), and Outbound Dialing (OBD) campaigns. Specific features,
          limits, and SLAs are defined in the applicable service agreement or order form.
        </p>

        <h2>3. Account Registration</h2>
        <p>
          You must provide accurate and complete information when creating an account. You are responsible for
          maintaining the confidentiality of your credentials and for all activities that occur under your account.
          Notify us immediately at <a href="mailto:support@vaktel.in">support@vaktel.in</a> of any unauthorised use.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to use our Services to:</p>
        <ul>
          <li>Send unsolicited communications (spam) or messages to DND-registered numbers without consent.</li>
          <li>Transmit content that is illegal, harmful, abusive, defamatory, or infringes third-party rights.</li>
          <li>Conduct phishing, fraud, or any activity that violates applicable law.</li>
          <li>Circumvent TRAI regulations, DLT registration requirements, or any telecom regulatory framework.</li>
          <li>Attempt to gain unauthorised access to Vaktel infrastructure or other users&apos; accounts.</li>
        </ul>
        <p>Violation of this clause may result in immediate suspension without refund.</p>

        <h2>5. TRAI Compliance</h2>
        <p>
          All promotional SMS and voice broadcasts must comply with TRAI Telecom Commercial Communications Customer
          Preference Regulations. You are responsible for obtaining DLT registration of sender IDs and message
          templates. Vaktel will assist with DLT onboarding but bears no liability for regulatory violations
          arising from your content or targeting choices.
        </p>

        <h2>6. Payment Terms</h2>
        <p>
          Subscription fees are billed in advance on a monthly or annual basis. All prices are exclusive of GST.
          Payments are non-refundable except as specified in our refund policy. We reserve the right to suspend
          Services upon non-payment after a 7-day grace period.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          Vaktel and its licensors own all intellectual property in the Services, including software, trademarks,
          and documentation. Nothing in these Terms grants you ownership of any Vaktel IP. You retain ownership
          of data you upload to the Services.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Vaktel&apos;s aggregate liability for any claim arising out of
          or related to these Terms shall not exceed the fees paid by you in the three months preceding the claim.
          In no event shall Vaktel be liable for indirect, incidental, consequential, or punitive damages.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Vaktel, its officers, employees, and affiliates from any claims,
          damages, or expenses (including reasonable legal fees) arising from your use of the Services, violation
          of these Terms, or infringement of any third-party rights.
        </p>

        <h2>10. Termination</h2>
        <p>
          Either party may terminate a subscription at the end of the current billing cycle with 30 days&apos;
          notice. Vaktel may terminate immediately for material breach of these Terms. Upon termination, access
          to the Services will cease and data will be retained for 30 days before deletion.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
          jurisdiction of the courts of Gurugram, Haryana.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Continued use of the Services after the effective date of changes
          constitutes acceptance. Material changes will be communicated with at least 14 days&apos; notice.
        </p>

        <h2>13. Contact</h2>
        <p>
          For questions about these Terms, contact us at{' '}
          <a href="mailto:support@vaktel.in">support@vaktel.in</a> or write to Waygenext Technologies Pvt Ltd,
          Orchid Business Park, Sector 48, Gurugram, Haryana 122018.
        </p>
      </div>
    </div>
  );
}
