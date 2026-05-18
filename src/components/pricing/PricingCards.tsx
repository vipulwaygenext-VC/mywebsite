'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, ArrowRight, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    description: 'Perfect for small businesses getting started with automated communication.',
    cta: 'Start Free Trial',
    highlight: false,
    features: [
      '5,000 SMS per month',
      'Basic IVR (2-level)',
      'WhatsApp Bot (up to 1,000 messages)',
      'Standard SMS gateway',
      'Email support',
      'Basic analytics dashboard',
      'API access',
      '1 dedicated sender ID',
    ],
    notIncluded: ['AI Voice Bot', 'OBD campaigns', 'Priority support', 'Custom integrations'],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    description: 'For growing businesses that need advanced automation and AI capabilities.',
    cta: 'Start Free Trial',
    highlight: true,
    badge: 'Most Popular',
    features: [
      '10,000 SMS per month',
      'Advanced IVR (10-level)',
      'WhatsApp Bot (unlimited messages)',
      'AI Voice Bot (500 minutes/mo)',
      'OBD campaigns (4000 Pulse – 30 Seconds)',
      'Priority email + chat support',
      'Advanced analytics & CDR',
      '3 dedicated sender IDs',
      'CRM integration',
      'Customized solutions',
    ],
    notIncluded: ['Dedicated account manager', 'On-premise deployment'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Unlimited scale for large enterprises with dedicated support and custom SLAs.',
    cta: 'Contact Sales',
    ctaHref: '/contact',
    highlight: false,
    features: [
      'Unlimited SMS',
      'Unlimited IVR channels',
      'Unlimited WhatsApp messages',
      'AI Voice Bot (unlimited minutes)',
      'Unlimited OBD campaigns',
      'Dedicated account manager',
      'SLA-backed 99.9% uptime',
      'Unlimited sender IDs',
      'Custom CRM / ERP integration',
      'On-premise deployment option',
      'VAPT & compliance reports',
      '24/7 phone & priority support',
    ],
    notIncluded: [],
  },
];

export function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge className="mb-4">Simple Pricing</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transparent plans,
            <span className="text-gradient"> zero surprises</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Scale up or down as your business grows. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!yearly ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? 'bg-brand-600' : 'bg-gray-200'}`}
              aria-label="Toggle yearly billing"
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  yearly ? 'left-7' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${yearly ? 'text-gray-900' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${
                plan.highlight
                  ? 'bg-[#060d20] border-brand-600 shadow-brand-lg lg:scale-105'
                  : 'bg-white border-gray-100 hover:border-brand-200 hover:shadow-glass'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1 bg-brand-600 text-white text-xs font-bold rounded-full shadow-brand-sm">
                    <Zap className="w-3 h-3" /> {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={yearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.monthlyPrice ? (
                      <>
                        <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                          ₹{(yearly ? plan.yearlyPrice! / 12 : plan.monthlyPrice).toLocaleString('en-IN')}
                        </span>
                        <span className={`text-sm ml-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
                        {yearly && (
                          <p className={`text-xs mt-1 ${plan.highlight ? 'text-brand-400' : 'text-brand-600'}`}>
                            Billed ₹{plan.yearlyPrice!.toLocaleString('en-IN')}/year
                          </p>
                        )}
                      </>
                    ) : (
                      <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                        Custom
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <Link
                href={plan.ctaHref ?? '/contact'}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm mb-8 transition-all ${
                  plan.highlight
                    ? 'bg-brand-600 hover:bg-brand-500 text-white hover:shadow-brand-md'
                    : 'border-2 border-gray-200 hover:border-brand-500 text-gray-700 hover:text-brand-600 hover:bg-brand-50'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex-1">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-brand-400' : 'text-brand-500'}`} />
                      <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            All prices are exclusive of GST. Need a custom quote?{' '}
            <a href="tel:+918882222324" className="text-brand-600 font-semibold hover:underline inline-flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> Call us at +91 88822 22324
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
