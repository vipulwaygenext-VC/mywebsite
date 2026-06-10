import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy — Vaktel',
  description: 'Understand how Vaktel uses cookies and similar technologies on its website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-400">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites remember
          your preferences, understand how you use the site, and deliver relevant content. Similar technologies
          include localStorage, sessionStorage, and tracking pixels.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>Vaktel&apos;s website uses the following categories of cookies:</p>

        <h3>2.1 Strictly Necessary Cookies</h3>
        <p>
          These are essential for the website to function and cannot be disabled. They include cookies that
          remember your session, security tokens, and load-balancing preferences. No personal data is stored
          beyond what is necessary for the site to operate.
        </p>

        <h3>2.2 Analytics Cookies</h3>
        <p>
          We use analytics tools (such as Google Analytics) to understand how visitors interact with our website.
          These cookies collect aggregated, anonymised data such as pages visited, time on page, and traffic
          sources. This information helps us improve our website and content.
        </p>

        <h3>2.3 Functional Cookies</h3>
        <p>
          Functional cookies remember your preferences (e.g., language, region) to provide a personalised
          experience. Disabling these cookies may affect website functionality.
        </p>

        <h3>2.4 Marketing Cookies</h3>
        <p>
          With your consent, marketing cookies track your browsing activity to deliver relevant advertisements
          across the web. We may use third-party advertising partners who set these cookies on our behalf.
        </p>

        <h2>3. Specific Cookies We Use</h2>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>24 hours</td>
            </tr>
            <tr>
              <td>_gat</td>
              <td>Google Analytics</td>
              <td>Throttles request rate</td>
              <td>1 minute</td>
            </tr>
            <tr>
              <td>vaktel_session</td>
              <td>Vaktel</td>
              <td>Session management</td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Managing Cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Most browsers allow you to refuse all
          cookies, accept only certain types, or delete existing cookies. Please note that disabling certain cookies
          may impair the functionality of our website.
        </p>
        <p>Browser-specific instructions:</p>
        <ul>
          <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
          <li><strong>Firefox:</strong> Preferences → Privacy &amp; Security → Cookies and Site Data</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
        </ul>

        <h2>5. Third-Party Cookies</h2>
        <p>
          Some pages on our website embed content or functionality from third parties (such as YouTube videos,
          Google Maps, or LinkedIn widgets) that may set their own cookies. We do not control these cookies.
          Please refer to the respective third parties&apos; privacy and cookie policies.
        </p>

        <h2>6. Do Not Track</h2>
        <p>
          Some browsers transmit &ldquo;Do Not Track&rdquo; (DNT) signals. We currently do not alter our data
          collection practices in response to DNT signals, but we will update this policy if we do so in future.
        </p>

        <h2>7. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy to reflect changes in the technologies we use or regulatory
          requirements. Check this page periodically for updates.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For questions about cookies, email us at{' '}
          <a href="mailto:support@vaktel.in">support@vaktel.in</a>. For broader privacy matters, see our{' '}
          <Link href="/privacy-policy" className="text-brand-600 hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
