'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-[#060d20] section-padding relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-brand-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-brand-700/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
            Ready to get started?
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform your business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              communication today
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Join 1,000+ enterprises that trust Vaktel to power their IVR, SMS, AI bots, and
            WhatsApp communication. Get a free demo — no commitment required.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-brand-lg text-base"
            >
              Get a Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+918882222324"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all text-base"
            >
              <Phone className="w-5 h-5" />
              Call +91 88822 22324
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            Free setup · No credit card required · 24/7 support
          </p>
        </motion.div>
      </div>
    </section>
  );
}
