'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Play, CheckCircle, Bot, TrendingUp, Shield } from 'lucide-react';

const STATS = [
  { value: '1,000+', label: 'Enterprises Served' },
  { value: '15+',    label: 'Years of Excellence' },
  { value: '99.9%',  label: 'Uptime SLA' },
];

const floatingCards = [
  {
    icon: CheckCircle,
    color: 'bg-green-500',
    title: 'Campaign Live',
    sub: '4,200 calls delivered',
    pos: 'top-4 -right-6 lg:-right-10',
  },
  {
    icon: Bot,
    color: 'bg-blue-500',
    title: 'AI Bot Active',
    sub: 'Response rate: 98.7%',
    pos: '-bottom-4 -left-6 lg:-left-10',
  },
];

const chartBars = [30, 55, 42, 70, 50, 88, 65, 82, 58, 95, 72, 90];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const a = (props: object) => mounted ? props : {};

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060d20]">
      {/* Gradient orbs */}
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-brand-800/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              {...a({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
              AI-Powered Business Communication Platform
            </motion.div>

            <motion.h1
              {...a({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Intelligent
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500">
                Communication.
              </span>
              <br />
              Infinite Scale.
            </motion.h1>

            <motion.p
              {...a({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed"
            >
              Transform your enterprise with AI voice bots, smart IVR, automated SMS, and
              WhatsApp solutions — all on one platform trusted by 1,000+ businesses since 2009.
            </motion.p>

            <motion.div
              {...a({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } })}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-brand-lg text-base"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all text-base"
              >
                <Play className="w-4 h-4" />
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...a({ initial: { opacity: 0 }, animate: { opacity: 1 } })}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            {...a({ initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 } })}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Interactions Today</p>
                  <p className="text-3xl font-bold text-white">24,891</p>
                  <p className="text-xs text-brand-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +18.4% vs yesterday
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'IVR Calls',  value: '12.4K', pct: '+14%', clr: 'text-blue-400'  },
                  { label: 'SMS Sent',   value: '8.2K',  pct: '+7%',  clr: 'text-purple-400' },
                  { label: 'WhatsApp',   value: '4.3K',  pct: '+22%', clr: 'text-brand-400' },
                ].map((m) => (
                  <div key={m.label} className="bg-white/5 rounded-xl p-3">
                    <p className="text-[11px] text-gray-500">{m.label}</p>
                    <p className="text-lg font-bold text-white mt-1">{m.value}</p>
                    <p className={`text-[11px] mt-0.5 font-medium ${m.clr}`}>{m.pct}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[11px] text-gray-500 mb-3">Call Volume (Last 12h)</p>
                <div className="flex items-end gap-1 h-20">
                  {chartBars.map((h, i) => (
                    <motion.div
                      key={i}
                      {...a({ initial: { scaleY: 0 }, animate: { scaleY: 1 } })}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.4, ease: 'easeOut' }}
                      style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                      className="flex-1 bg-gradient-to-t from-brand-600/60 to-brand-400/40 rounded-sm hover:from-brand-500/80 hover:to-brand-300/60 transition-colors"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/5">
                <Shield className="w-3.5 h-3.5 text-brand-400" />
                <p className="text-[11px] text-gray-500">ISO 27001 Certified · End-to-end Encrypted</p>
              </div>
            </div>

            {floatingCards.map((card) => (
              <motion.div
                key={card.title}
                {...a({ initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } })}
                transition={{ delay: 1, duration: 0.5, ease: 'backOut' }}
                className={`absolute ${card.pos} bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3`}
              >
                <div className={`w-8 h-8 ${card.color} rounded-lg flex items-center justify-center shrink-0`}>
                  <card.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">{card.title}</p>
                  <p className="text-[11px] text-gray-500">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
