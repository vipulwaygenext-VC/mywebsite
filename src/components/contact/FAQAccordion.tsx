'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is an IVR solution and how does it work?',
    a: 'IVR (Interactive Voice Response) is a telephony technology that lets customers interact with your system using their phone keypad or voice. When a customer calls, the IVR plays a recorded menu, routes them to the right department, or resolves queries automatically — without a live agent.',
  },
  {
    q: 'Is Vaktel TRAI compliant for SMS and OBD campaigns?',
    a: 'Yes. All our SMS campaigns go through DLT-registered templates and DND scrubbing as mandated by TRAI. Our OBD campaigns adhere to calling time restrictions and opt-out management. We handle compliance so you can focus on campaigns.',
  },
  {
    q: 'How long does it take to go live with your platform?',
    a: 'For standard SMS and IVR, you can be live within 24–48 hours. WhatsApp Bot and AI Voice Bot deployment typically takes 3–7 business days, depending on the complexity of your flows and WhatsApp Business API approval.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve Hospitality, Airlines, Government Departments, BFSI (Banking, Financial Services & Insurance), Real Estate, and large Enterprise clients. Our team has deep domain expertise across all these verticals.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes! All plans include a 14-day free trial with full platform access. No credit card required to start. Contact our sales team and we will set up a demo environment configured for your specific use case.',
  },
  {
    q: 'Can I integrate Vaktel with my existing CRM or ERP?',
    a: 'Absolutely. We provide REST APIs, webhooks, and pre-built integrations for popular platforms like Salesforce, Zoho CRM, SAP, and custom ERP systems. Our technical team can assist with custom integration development.',
  },
  {
    q: 'Is my data secure on Vaktel\'s platform?',
    a: 'Security is our top priority. We are ISO 27001 certified, use end-to-end encryption for all data in transit and at rest, maintain audit logs, and conduct regular VAPT audits. Your data is never shared with third parties.',
  },
  {
    q: 'What languages does your AI Voice Bot support?',
    a: 'Our AI Voice Bot supports Hindi, English, and 8+ regional Indian languages including Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati, Malayalam, and Punjabi — with more being added regularly.',
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brand-200 transition-colors"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                open === i ? 'rotate-180 text-brand-600' : ''
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
