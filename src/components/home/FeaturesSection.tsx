'use client';

import { motion } from 'framer-motion';
import {
  Phone, MessageSquare, Bot, MessageCircle, Send,
  BarChart3, Shield, Zap, Globe, Headphones,
} from 'lucide-react';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';

const FEATURES = [
  {
    icon: Bot,
    title: 'AI Voice Bots',
    description:
      'Deploy human-like AI voice agents that handle thousands of calls simultaneously — for support, surveys, reminders, and more.',
    tag: 'AI-Powered',
    wide: true,
  },
  {
    icon: Phone,
    title: 'IVR Solutions',
    description:
      'Intelligent call routing with multi-level IVR trees. Reduce wait times and improve first-call resolution.',
    tag: 'Cloud-based',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    description:
      'Engage customers on WhatsApp with rich media bots — FAQs, order updates, appointment booking, and more.',
    tag: 'Popular',
  },
  {
    icon: MessageSquare,
    title: 'SMS Services',
    description:
      'Transactional and promotional SMS delivered at scale. 99%+ delivery rate with real-time tracking.',
    tag: 'Reliable',
  },
  {
    icon: Send,
    title: 'Bulk SMS / OBD',
    description:
      'Reach millions of customers with outbound dialing and bulk messaging campaigns — fast, compliant, and measurable.',
    tag: 'High Volume',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description:
      'Deep real-time analytics dashboards. Track every call, message, and bot interaction with actionable intelligence.',
    tag: 'Real-time',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'ISO 27001 certified. End-to-end encryption, TRAI compliant, DND scrubbing, and audit logs.',
    tag: 'ISO Certified',
  },
  {
    icon: Globe,
    title: 'Multi-channel Platform',
    description:
      'Orchestrate seamless customer journeys across voice, SMS, WhatsApp, and email from one unified dashboard.',
    tag: 'Unified',
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#f5f5f7] section-padding">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge className="mb-4">Platform Features</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Everything your business
            <span className="text-gradient"> needs to connect</span>
          </h2>
          <p className="text-lg text-gray-500">
            One platform, five powerful communication channels. Built for enterprise scale,
            designed for simplicity.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              variants={staggerItem}
              className={`group bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:shadow-glass transition-all duration-300 hover:-translate-y-1 ${
                feat.wide ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center transition-colors">
                  <feat.icon className="w-5 h-5 text-brand-600" />
                </div>
                <span className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                  {feat.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
