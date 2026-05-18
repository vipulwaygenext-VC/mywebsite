'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';

const CATEGORIES = ['All', 'AI & Voice', 'IVR', 'WhatsApp', 'SMS', 'Case Study'];

const POSTS = [
  {
    slug: 'ai-voice-bots-transforming-customer-service',
    title: 'How AI Voice Bots Are Transforming Customer Service in India',
    excerpt: 'Discover how leading Indian enterprises are deploying AI voice agents to handle millions of customer interactions daily — reducing costs by 60% and improving satisfaction.',
    category: 'AI & Voice',
    readTime: '6 min read',
    date: 'May 10, 2025',
    featured: true,
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    slug: 'complete-guide-ivr-solutions-india',
    title: 'The Complete Guide to IVR Solutions for Indian Businesses',
    excerpt: 'Everything you need to know about deploying cloud-based IVR — from architecture decisions and TRAI compliance to integration with your existing CRM.',
    category: 'IVR',
    readTime: '9 min read',
    date: 'May 3, 2025',
    featured: true,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    slug: 'whatsapp-business-automation-roi',
    title: 'WhatsApp Business Automation: 10 Use Cases That Drive ROI',
    excerpt: 'Real-world WhatsApp bot use cases — from e-commerce order tracking to BFSI loan collections — with actual ROI numbers from Vaktel clients.',
    category: 'WhatsApp',
    readTime: '7 min read',
    date: 'April 25, 2025',
    featured: false,
    gradient: 'from-brand-500 to-teal-600',
  },
  {
    slug: 'sms-marketing-best-practices-2024',
    title: 'SMS Marketing in 2025: Best Practices for Indian Enterprises',
    excerpt: 'Navigate TRAI DLT regulations, DND scrubbing, optimal send times, and A/B testing to maximise the ROI of your SMS campaigns.',
    category: 'SMS',
    readTime: '5 min read',
    date: 'April 18, 2025',
    featured: false,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    slug: 'obd-vs-ivr-which-is-right',
    title: 'OBD vs. IVR: Which Is Right for Your Business?',
    excerpt: 'A deep-dive comparison of Outbound Dialing (OBD) and Interactive Voice Response (IVR) — when to use each, cost differences, and decision framework.',
    category: 'IVR',
    readTime: '6 min read',
    date: 'April 12, 2025',
    featured: false,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    slug: 'bfsi-ai-communication-case-study',
    title: 'How a Leading NBFC Improved Collections by 35% with AI Calling',
    excerpt: 'Case study: How an Indus Finance deployed Vaktel\'s AI Voice Bot for loan reminder campaigns and achieved a 35% improvement in collections efficiency.',
    category: 'Case Study',
    readTime: '8 min read',
    date: 'April 5, 2025',
    featured: false,
    gradient: 'from-yellow-500 to-orange-600',
  },
];

export function BlogListing() {
  const [search, setSearch]     = useState('');
  const [activecat, setActivecat] = useState('All');

  const filtered = POSTS.filter((p) => {
    const matchCat  = activecat === 'All' || p.category === activecat;
    const matchSrch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSrch;
  });

  const featured  = filtered.filter((p) => p.featured);
  const regular   = filtered.filter((p) => !p.featured);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActivecat(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activecat === cat
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">No articles match your search.</p>
          </div>
        ) : (
          <>
            {/* Featured posts */}
            {featured.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-200 hover:shadow-glass transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center p-8`}>
                      <div className="text-center">
                        <Tag className="w-10 h-10 text-white/80 mx-auto mb-2" />
                        <span className="text-white/90 text-sm font-semibold">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge>{post.category}</Badge>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Regular posts */}
            {regular.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {regular.map((post) => (
                  <motion.div key={post.slug} variants={staggerItem}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-glass transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
                    >
                      <div className={`h-28 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                        <Tag className="w-7 h-7 text-white/80" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>{post.category}</Badge>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug flex-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-3">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                          <span>·</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
