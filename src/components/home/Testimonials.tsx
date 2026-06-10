'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';

const TESTIMONIALS = [
  {
    name: 'Rajesh Mehta',
    role: 'VP Operations',
    company: 'Sunrise Hotels & Resorts',
    industry: 'Hospitality',
    avatar: 'RM',
    color: 'from-orange-400 to-red-500',
    text: 'Vaktel\'s IVR and WhatsApp automation transformed our guest communication. We saw a 40% reduction in front-desk call volume within the first month, and our guest satisfaction scores improved dramatically.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Customer Experience',
    company: 'Indus Finance Ltd',
    industry: 'BFSI',
    avatar: 'PS',
    color: 'from-blue-400 to-indigo-600',
    text: 'The AI voice bot handles our loan reminder calls with remarkable accuracy. TRAI compliance is seamless, and our collections efficiency improved by 35%. The Vaktel team was incredibly supportive during onboarding.',
  },
  {
    name: 'Ankit Verma',
    role: 'Digital Transformation Lead',
    company: 'StateWorks Department',
    industry: 'Government',
    avatar: 'AV',
    color: 'from-green-400 to-teal-600',
    text: 'We deployed Vaktel\'s bulk SMS and OBD system for a citizen awareness campaign reaching 2 million people in 48 hours. The reliability and delivery rates were outstanding. Truly enterprise-grade.',
  },
  {
    name: 'Deepa Nair',
    role: 'COO',
    company: 'MetroProperties Group',
    industry: 'Real Estate',
    avatar: 'DN',
    color: 'from-purple-400 to-pink-600',
    text: 'Vaktel\'s WhatsApp bot qualifies our property leads automatically and books site visits. Our sales team now spends time on hot leads only. It has genuinely changed how we operate.',
  },
  {
    name: 'Sanjay Kapoor',
    role: 'IT Director',
    company: 'National Airways',
    industry: 'Airlines',
    avatar: 'SK',
    color: 'from-cyan-400 to-blue-600',
    text: 'Flight status alerts, check-in reminders, and gate change notifications — all automated via Vaktel. Passenger complaints about missing information dropped by 60%. Exceptional platform.',
  },
  {
    name: 'Kavitha Rajan',
    role: 'General Manager — Technology',
    company: 'RetailMax India',
    industry: 'Enterprise',
    avatar: 'KR',
    color: 'from-yellow-400 to-orange-500',
    text: 'We integrated Vaktel\'s SMS gateway with our ERP in just two days. The API is clean, documentation is excellent, and the uptime has been flawless over 18 months. Best communication partner we have had.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge className="mb-4">Customer Stories</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by industry
            <span className="text-gradient"> leaders</span>
          </h2>
          <p className="text-lg text-gray-500">
            Hear from enterprises across India who rely on Vaktel every day.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:shadow-glass transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-brand-200" />
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{t.text}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role}, {t.company}</p>
                </div>
                <span className="ml-auto text-[10px] font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
