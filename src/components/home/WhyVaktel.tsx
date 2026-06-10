'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Users, Headphones, ShieldCheck, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';

const REASONS = [
  {
    icon: Award,
    title: '15+ Years of Expertise',
    description:
      'Founded in 2009, we have helped over 1,000 enterprises solve their communication challenges across every major industry.',
  },
  {
    icon: ShieldCheck,
    title: 'ISO Certified & TRAI Compliant',
    description:
      'ISO 27001 certified security practices, TRAI DND compliance, and robust data protection for your peace of mind.',
  },
  {
    icon: Clock,
    title: '99.9% Uptime SLA',
    description:
      'Enterprise-grade infrastructure with redundant failover ensures your communication channels are always operational.',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description:
      'A dedicated support team available around the clock — by phone, email, or live chat — whenever you need us.',
  },
  {
    icon: Users,
    title: '1,000+ Certified Customers',
    description:
      'A diverse portfolio of certified clients spanning Hospitality, Airlines, BFSI, Government, and Enterprise sectors.',
  },
  {
    icon: Cpu,
    title: 'Next-Gen AI Technology',
    description:
      'Powered by the latest in natural language processing and voice AI, delivering human-like interactions at machine scale.',
  },
];

export function WhyVaktel() {
  return (
    <section className="bg-white section-padding">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Visual accent */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-[#060d20] rounded-3xl p-10 relative overflow-hidden">
              {/* Background orbs */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-700/15 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
                  Why 1,000+ businesses choose us
                </p>
                <h3 className="text-4xl font-bold text-white leading-tight">
                  The platform built
                  <br />
                  <span className="text-gradient-light">for enterprise</span>
                  <br />
                  from day one.
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Vaktel is not just a vendor — we are a long-term communication partner. We have
                  been trusted by some of India&apos;s most demanding enterprises since 2009.
                </p>

                {/* Inline stat grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  {[
                    { n: '1,000+', l: 'Clients' },
                    { n: '15+',    l: 'Years' },
                    { n: '99.9%',  l: 'Uptime' },
                    { n: '24/7',   l: 'Support' },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/5 rounded-xl p-4">
                      <p className="text-2xl font-bold text-white">{s.n}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Reasons grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <Badge className="mb-4">Why Vaktel</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built on trust,
                <span className="text-gradient"> powered by AI</span>
              </h2>
              <p className="text-gray-500">
                A decade and a half of experience, enterprise-grade reliability, and cutting-edge
                AI — all in one platform.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {REASONS.map((r) => (
                <motion.div
                  key={r.title}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-100 group-hover:bg-brand-200 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                    <r.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{r.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
