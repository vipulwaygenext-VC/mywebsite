'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';

const FOUNDERS = [
  {
    name: 'Sunil Chawla',
    role: 'Co-Founder & Director',
    initials: 'SC',
    gradient: 'from-brand-500 to-teal-600',
    bio: 'With over two decades of experience in enterprise communication technology, Sunil leads the strategic vision at Vaktel. He has been instrumental in building partnerships across hospitality, airlines, and government sectors, driving the company\'s growth from a regional player to a pan-India communication powerhouse.',
    expertise: ['Strategic Leadership', 'Enterprise Partnerships', 'Telecom Infrastructure'],
    linkedin: '#',
    email: 'sunil@vaktel.in',
  },
  {
    name: 'Vipul Chawla',
    role: 'Co-Founder & Director',
    initials: 'VC',
    gradient: 'from-indigo-500 to-brand-600',
    bio: 'Vipul brings deep technical expertise in AI, voice technology, and cloud infrastructure. He spearheads Vaktel\'s product development — from next-gen AI voice bots to scalable SMS gateways — ensuring the platform remains at the forefront of business communication innovation.',
    expertise: ['AI & Voice Technology', 'Product Development', 'Cloud Architecture'],
    linkedin: '#',
    email: 'vipul@vaktel.in',
  },
];

export function FounderCards() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the <span className="text-gradient">founders</span>
          </h2>
          <p className="text-gray-500">
            Two visionaries who built Vaktel with a singular mission: making enterprise
            communication intelligent, reliable, and accessible.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {FOUNDERS.map((f) => (
            <motion.div
              key={f.name}
              variants={staggerItem}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-brand-200 hover:shadow-glass transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                >
                  {f.initials}
                </div>
                <div className="flex gap-2">
                  <a
                    href={f.linkedin}
                    aria-label={`${f.name} on LinkedIn`}
                    className="w-9 h-9 bg-gray-100 hover:bg-[#0077B5] text-gray-500 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${f.email}`}
                    aria-label={`Email ${f.name}`}
                    className="w-9 h-9 bg-gray-100 hover:bg-brand-600 text-gray-500 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{f.name}</h3>
              <p className="text-brand-600 text-sm font-semibold mb-4">{f.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{f.bio}</p>

              <div className="flex flex-wrap gap-2">
                {f.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-brand-50 text-brand-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
