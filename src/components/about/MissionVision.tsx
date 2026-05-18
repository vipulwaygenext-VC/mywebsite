'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';

const CARDS = [
  {
    icon: Target,
    label: 'Our Mission',
    text: 'To empower every Indian enterprise with intelligent, affordable, and reliable communication technology that drives real business outcomes — from the first call to the final conversion.',
    color: 'bg-brand-600',
  },
  {
    icon: Eye,
    label: 'Our Vision',
    text: 'To become India\'s most trusted AI-powered business communication platform, enabling seamless, human-like customer experiences at any scale across every industry.',
    color: 'bg-indigo-600',
  },
  {
    icon: Heart,
    label: 'Our Values',
    text: 'Trust, innovation, customer obsession, and long-term partnership. We do not just deliver software — we build relationships that last decades.',
    color: 'bg-rose-500',
  },
];

const MILESTONES = [
  { year: '2009', event: 'Vaktel founded under Waygenext Technologies Pvt Ltd' },
  { year: '2012', event: 'Launched cloud-based IVR platform for BFSI clients' },
  { year: '2015', event: 'Crossed 100+ enterprise customer milestone' },
  { year: '2018', event: 'Introduced AI Voice Bot capabilities' },
  { year: '2020', event: 'Launched WhatsApp Business automation suite' },
  { year: '2023', event: 'Reached 1,000+ certified customers across 6 industries' },
  { year: '2024', event: 'Next-gen AI platform with GPT-powered voice agents launched' },
];

export function MissionVision() {
  return (
    <>
      {/* Mission / Vision / Values */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What drives <span className="text-gradient">everything we do</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CARDS.map((c) => (
              <motion.div
                key={c.label}
                variants={staggerItem}
                className="rounded-2xl p-8 border border-gray-100 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center mb-5 shadow-md`}>
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#f5f5f7] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">journey</span>
            </h2>
            <p className="text-gray-500">15+ years of relentless innovation and growth.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-100" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  variants={staggerItem}
                  className="relative flex items-start gap-6 pl-14"
                >
                  <div className="absolute left-0 w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center shrink-0 shadow-brand-sm">
                    <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 border border-gray-100">
                    <span className="text-brand-600 text-sm font-bold">{m.year}</span>
                    <p className="text-gray-700 text-sm mt-1">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
