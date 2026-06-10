'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Bot, MessageCircle, Send, ArrowRight, Check, ChevronDown } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';

const FEATURE_LIMIT = 6;

const SERVICES = [
  {
    id: 'ivr',
    icon: Phone,
    title: 'IVR Solutions',
    tagline: 'Smart call routing for the modern enterprise',
    description:
      'Our cloud-based Interactive Voice Response platform enables multi-level call trees, language selection, queue management, and real-time analytics — all without a single hardware investment.',
    features: [
      'Multi-level IVR with DTMF & speech recognition',
      'Intelligent call routing & overflow handling',
      'Real-time live agent transfer',
      'Multilingual support (10+ languages)',
      'CDR reports & call recordings',
      'CRM integration via REST API',
      'Scheduled callbacks & voicemail',
      'Sticky agent assignment',
      'Virtual receptionist & holiday routing',
      'IVR analytics with visual heatmaps',
      'Queue announcements & hold music',
      'Number masking & caller anonymisation',
    ],
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    tag: 'Most Popular',
  },
  {
    id: 'sms',
    icon: MessageSquare,
    title: 'SMS Services',
    tagline: 'Transactional & promotional SMS at enterprise scale',
    description:
      'Deliver OTPs, alerts, and marketing messages with 99%+ delivery rates. DND scrubbing, sender ID management, real-time delivery reports, and full TRAI compliance built in.',
    features: [
      'Transactional & promotional SMS',
      'DLT registered templates',
      'Real-time delivery tracking',
      'DND scrubbing & TRAI compliance',
      'Unicode (multilingual) SMS',
      'REST API & SMPP gateway',
      'Delivery through priority route available',
    ],
    gradient: 'from-green-500 to-teal-600',
    bg: 'bg-green-50',
    tag: 'Reliable',
  },
  {
    id: 'ai-bot',
    icon: Bot,
    title: 'AI Voice Bots',
    tagline: 'Human-like AI conversations, at infinite scale',
    description:
      'Deploy GPT-powered voice agents that handle customer queries, surveys, reminders, and collections with natural language understanding — 24/7, in any language, without agent fatigue.',
    features: [
      'NLP-powered conversational AI',
      'Dynamic scripting & fallback handling',
      'Emotion detection & sentiment analysis',
      'Seamless live agent handoff',
      'Voice biometrics support',
      'Custom voice & persona branding',
    ],
    gradient: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-50',
    tag: 'AI-Powered',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    title: 'WhatsApp Bot Solutions',
    tagline: 'Engage customers on the world\'s #1 messaging app',
    description:
      'Build intelligent WhatsApp chatbots for support, lead qualification, order tracking, and appointment scheduling. Rich media, quick replies, and seamless human handoff included.',
    features: [
      'WhatsApp Business API (official)',
      'Rich media: images, PDFs, buttons',
      'Chatbot flows with live agent transfer',
      'Broadcast messaging & templates',
      'CRM & payment gateway integration',
      'Read receipts & analytics',
    ],
    gradient: 'from-brand-500 to-emerald-600',
    bg: 'bg-brand-50',
    tag: 'WhatsApp Official',
  },
  {
    id: 'bulk-sms',
    icon: Send,
    title: 'Bulk SMS / OBD Services',
    tagline: 'Reach millions instantly with voice & text campaigns',
    description:
      'Launch massive outreach campaigns with OBD (Outbound Dialing) and Bulk SMS. Ideal for elections, product launches, loan drives, and citizen campaigns requiring scale and speed.',
    features: [
      'Up to 10 lakh calls/messages per hour',
      'Pre-recorded & text-to-speech OBD',
      'Real-time campaign dashboards',
      'Retry logic for non-connects',
      'Demographic targeting & segmentation',
      'Post-campaign analytics & reporting',
    ],
    gradient: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    tag: 'High Volume',
  },
];

export function ServiceCards() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-8"
        >
          {SERVICES.map((svc, i) => {
            const isExpanded = expanded.has(svc.id);
            const hasMore = svc.features.length > FEATURE_LIMIT;
            const visibleFeatures = isExpanded ? svc.features : svc.features.slice(0, FEATURE_LIMIT);
            const hiddenCount = svc.features.length - FEATURE_LIMIT;

            return (
              <motion.div
                key={svc.id}
                id={svc.id}
                variants={staggerItem}
                className="scroll-mt-24 group rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-glass overflow-hidden transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center shadow-lg`}>
                        <svc.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full">
                        {svc.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{svc.title}</h3>
                    <p className="text-brand-600 text-sm font-semibold mb-4">{svc.tagline}</p>
                    <p className="text-gray-500 leading-relaxed mb-8">{svc.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
                      {visibleFeatures.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-brand-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {hasMore && (
                      <button
                        onClick={() => toggle(svc.id)}
                        className="flex items-center gap-1.5 mt-3 mb-6 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors self-start"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                        {isExpanded ? 'Show less' : `Show ${hiddenCount} more features`}
                      </button>
                    )}

                    {!hasMore && <div className="mb-8" />}

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group/link"
                    >
                      Get started with {svc.title}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  {/* Visual panel */}
                  <div className={`${svc.bg} p-8 lg:p-12 flex items-center justify-center min-h-[280px]`}>
                    <div className="text-center">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mx-auto mb-5 shadow-xl`}>
                        <svc.icon className="w-12 h-12 text-white" />
                      </div>
                      <p className="font-bold text-gray-800 text-lg">{svc.title}</p>
                      <p className="text-gray-500 text-sm mt-1">by Vaktel</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
