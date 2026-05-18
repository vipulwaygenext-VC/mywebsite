'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Plane, Landmark, Banknote, Home, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const INDUSTRIES = [
  {
    id: 'hospitality',
    icon: Building2,
    label: 'Hospitality',
    headline: 'Delight guests at every touchpoint',
    description:
      'Automate reservation confirmations, room service requests, and loyalty program updates. Our IVR and WhatsApp bots give hotels a 24/7 concierge experience without adding headcount.',
    useCases: ['Reservation confirmation via SMS/WhatsApp', 'AI voice check-in & check-out', 'Guest feedback surveys', 'Loyalty point notifications'],
  },
  {
    id: 'airlines',
    icon: Plane,
    label: 'Airlines',
    headline: 'Seamless passenger communication',
    description:
      'From flight status alerts to web check-in reminders, keep passengers informed at every step of their journey with automated, real-time communications.',
    useCases: ['Flight delay & gate change alerts', 'Web check-in reminders', 'Baggage claim notifications', 'Feedback after travel'],
  },
  {
    id: 'government',
    icon: Landmark,
    label: 'Government',
    headline: 'Citizen services, digitally delivered',
    description:
      'Enable government departments to reach millions of citizens efficiently with automated IVR helplines, bulk SMS alerts, and multilingual voice bots.',
    useCases: ['Citizen helpline IVR', 'Scheme & benefit alerts via SMS', 'Election / census campaigns', 'Emergency broadcast OBD'],
  },
  {
    id: 'bfsi',
    icon: Banknote,
    label: 'BFSI',
    headline: 'Secure, compliant financial communication',
    description:
      'Banks, insurance companies, and NBFCs rely on Vaktel for OTP delivery, loan alerts, KYC reminders, and AI-powered collections — all within regulatory frameworks.',
    useCases: ['OTP & transaction alerts', 'Loan due date reminders', 'KYC & e-NACH campaigns', 'AI-powered collections calling'],
  },
  {
    id: 'real-estate',
    icon: Home,
    label: 'Real Estate',
    headline: 'Connect buyers and sellers at scale',
    description:
      'Real estate companies use Vaktel to nurture leads, schedule site visits, and send payment reminders — keeping prospects engaged throughout their buying journey.',
    useCases: ['Lead qualification IVR', 'Site visit scheduling via WhatsApp', 'Payment due reminders', 'New property launch campaigns'],
  },
  {
    id: 'enterprise',
    icon: BarChart3,
    label: 'Enterprise',
    headline: 'Enterprise communication, reinvented',
    description:
      'Large enterprises depend on Vaktel for internal helpdesks, customer support automation, employee surveys, and multi-region campaign management.',
    useCases: ['Internal IT helpdesk IVR', 'Customer support AI bot', 'Employee pulse surveys', 'Multi-region SMS campaigns'],
  },
];

export function IndustryUseCases() {
  const [active, setActive] = useState(INDUSTRIES[0].id);
  const current = INDUSTRIES.find((i) => i.id === active)!;

  return (
    <section className="bg-[#f5f5f7] section-padding">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge className="mb-4">Industry Solutions</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Designed for your
            <span className="text-gradient"> industry</span>
          </h2>
          <p className="text-lg text-gray-500">
            15+ years of deep domain expertise across six major verticals. We speak your industry&apos;s language.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === ind.id
                  ? 'bg-brand-600 text-white shadow-brand-sm'
                  : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-600'
              }`}
            >
              <ind.icon className="w-4 h-4" />
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-glass"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center">
                    <current.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    {current.label}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{current.headline}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{current.description}</p>

                <ul className="space-y-3">
                  {current.useCases.map((uc) => (
                    <li key={uc} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 bg-brand-500 rounded-full" />
                      </span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 rounded-2xl p-8 flex items-center justify-center min-h-[260px]">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <current.icon className="w-10 h-10 text-brand-500" />
                  </div>
                  <p className="text-brand-700 font-semibold text-lg">{current.label} Solutions</p>
                  <p className="text-brand-500 text-sm mt-1">Powered by Vaktel</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
