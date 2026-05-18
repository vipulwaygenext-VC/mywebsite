import type { Metadata } from 'next';
import { Badge }         from '@/components/ui/Badge';
import { ContactForm }   from '@/components/contact/ContactForm';
import { ContactInfo }   from '@/components/contact/ContactInfo';
import { FAQAccordion }  from '@/components/contact/FAQAccordion';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Vaktel team. Call +91 88822 22324, email support@vaktel.in or sales@vaktel.in, or fill out our contact form for a free demo.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060d20] pt-40 pb-24 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-[500px] h-[400px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-brand-500/30 text-brand-400 bg-transparent">
            Get in Touch
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s talk about your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              communication needs
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our team typically responds within 4 business hours. Tell us what you need
            and we&apos;ll build a solution tailored to your business.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-[#f5f5f7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form — larger column */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            {/* Info — smaller column */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
            <p className="text-gray-500">
              Quick answers to questions we hear often. Don&apos;t see yours?{' '}
              <a href="tel:+918882222324" className="text-brand-600 font-semibold hover:underline">
                Call us directly.
              </a>
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
