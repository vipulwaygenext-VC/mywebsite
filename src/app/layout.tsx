import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vaktel',
  description:
    'Vaktel by Waygenext Technologies delivers AI-powered IVR, SMS, WhatsApp Bot, and Voice Bot solutions for enterprise businesses across India. Serving clients since 2009.',
  keywords: [
    'IVR solutions India',
    'SMS services',
    'AI voice bot',
    'WhatsApp business bot',
    'bulk SMS OBD',
    'business communication',
    'Vaktel',
    'Waygenext Technologies',
    'enterprise communication',
  ],
  authors: [{ name: 'Vaktel — Waygenext Technologies Pvt Ltd' }],
  creator: 'Waygenext Technologies Pvt Ltd',
  metadataBase: new URL('https://vaktel.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vaktel.in',
    title: 'Vaktel — Intelligent Business Communication Solutions',
    description:
      'AI-powered IVR, SMS, WhatsApp Bot, and Voice Bot solutions for enterprise businesses across India.',
    siteName: 'Vaktel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaktel — Intelligent Business Communication Solutions',
    description:
      'AI-powered IVR, SMS, WhatsApp Bot, and Voice Bot solutions for enterprise businesses.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/1.png',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vaktel',
  legalName: 'Waygenext Technologies Pvt Ltd',
  url: 'https://vaktel.in',
  logo: 'https://vaktel.in/logo.png',
  foundingDate: '2009',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8882222324',
    email: 'support@vaktel.in',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/vaktel',
    'https://www.instagram.com/vaktel',
    'https://www.linkedin.com/company/vaktel',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
