import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Shield, FileText, BookOpen, Sparkles } from 'lucide-react';

const SERVICES = [
  { label: 'IVR Solutions',           href: '/services#ivr'      },
  { label: 'SMS Services',            href: '/services#sms'      },
  { label: 'AI Voice Bots',           href: '/services#ai-bot'   },
  { label: 'WhatsApp Bot Solutions',  href: '/services#whatsapp' },
  { label: 'Bulk SMS / OBD Services', href: '/services#bulk-sms' },
];

const COMPANY = [
  { label: 'About Us', href: '/about'   },
  { label: 'Services', href: '/services'},
  { label: 'Pricing',  href: '/pricing' },
  { label: 'Blog',     href: '/blog'    },
  { label: 'Contact',  href: '/contact' },
];

const LEGAL = [
  { label: 'Privacy Policy',   href: '/privacy-policy',   icon: Shield,   desc: 'How we use your data'  },
  { label: 'Terms of Service', href: '/terms-of-service', icon: FileText, desc: 'Usage terms & SLAs'    },
  { label: 'Cookie Policy',    href: '/cookies',           icon: BookOpen, desc: 'Cookies & tracking'    },
];

const CONTACT_INFO = [
  { icon: Phone, label: '+91 88822 22324', href: 'tel:+918882222324',         external: false },
  { icon: Mail,  label: 'support@vaktel.in', href: 'mailto:support@vaktel.in', external: false },
  { icon: Mail,  label: 'sales@vaktel.in',   href: 'mailto:sales@vaktel.in',   external: false },
];

export function Footer() {
  return (
    <footer className="bg-[#060d20] text-gray-400">

      {/* ── Top CTA strip ───────────────────────────────────────────────── */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-brand-900/40 via-brand-800/20 to-brand-900/40 border border-brand-500/10 px-8 py-8">
            {/* Glow blob */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-32 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
                    Enterprise Ready
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  Ready to transform your business communication?
                </h3>
                <p className="text-gray-400 text-sm mt-1.5">
                  Talk to our experts and get a custom solution for your enterprise.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg shrink-0 text-sm"
              >
                Get a Free Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/main-logo.png"
                alt="Vaktel"
                width={192}
                height={64}
                className="h-12 w-auto max-w-[180px] object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-xs text-gray-500">
              A unit of Waygenext Technologies Pvt Ltd. Empowering businesses with intelligent
              communication solutions since 2009.
            </p>

            {/* Contact cards */}
            <div className="space-y-2 mb-5">
              {CONTACT_INFO.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-500/10 group-hover:bg-brand-500/20 flex items-center justify-center shrink-0 transition-colors">
                    <c.icon className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                    {c.label}
                  </span>
                </a>
              ))}

              {/* Address — slightly different treatment (no href) */}
              <div className="flex items-start gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Orchid Business Park, Badshahpur Sohna Rd,<br />
                  Near Subhash Chowk, Central Park II,<br />
                  Sector 48, Gurugram, Haryana 122018
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: Facebook,  href: '#', label: 'Facebook'  },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin,  href: '#', label: 'LinkedIn'  },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.04] hover:bg-brand-600 border border-white/[0.06] hover:border-brand-500/40 rounded-xl flex items-center justify-center transition-all duration-200 text-gray-500 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-1">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2 py-1.5 text-sm text-gray-500 hover:text-white transition-colors duration-150"
                  >
                    <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-brand-500 transition-all duration-200 shrink-0 overflow-hidden" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-1">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-2 py-1.5 text-sm text-gray-500 hover:text-white transition-colors duration-150"
                  >
                    <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-brand-500 transition-all duration-200 shrink-0 overflow-hidden" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-5 flex items-center gap-2">
              <Shield className="w-3 h-3 text-brand-400" />
              Legal
            </h4>
            <div className="space-y-2">
              {LEGAL.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.06] hover:border-brand-500/30 transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-500/10 group-hover:bg-brand-500/20 flex items-center justify-center transition-colors shrink-0">
                    <l.icon className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors leading-tight">{l.label}</p>
                    <p className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors mt-0.5 leading-tight">{l.desc}</p>
                  </div>
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-brand-400 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Waygenext Technologies Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Vaktel — <span className="text-brand-700">Built for Enterprise.</span> Trusted Since 2009.
          </p>
        </div>
      </div>

    </footer>
  );
}
