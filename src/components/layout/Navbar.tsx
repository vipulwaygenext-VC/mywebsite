'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown,
  Phone, MessageSquare, Bot, MessageCircle, Send,
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing',  label: 'Pricing' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Contact' },
];

const LOGIN_PORTALS = [
  { label: 'IVR Login',      href: 'https://app.vaktel.in/',           icon: Phone,         desc: 'Access your IVR dashboard',     external: true  },
  { label: 'Bulk SMS Login', href: 'https://console.vaktel.in/login',  icon: MessageSquare, desc: 'Manage bulk SMS campaigns',      external: true  },
  { label: 'AI Bot Login',   href: 'https://bot.vaktel.in/',           icon: Bot,           desc: 'Control AI voice bots',          external: true  },
  { label: 'WhatsApp Login', href: 'https://whatsapp.vaktel.in/',      icon: MessageCircle, desc: 'WhatsApp automation portal',     external: true  },
  { label: 'OBD Login',      href: '#',                                icon: Send,          desc: 'Bulk OBD messaging platform',    external: false },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen]   = useState(false);
  const pathname                    = usePathname();
  const loginRef                    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOut = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOut);
    return () => document.removeEventListener('mousedown', handleOut);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLoginOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/main-logo.png"
                alt="Vaktel"
                width={192}
                height={64}
                className="h-10 sm:h-12 lg:h-14 w-auto max-w-[180px] object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-brand-500'
                      : scrolled
                      ? 'text-gray-600 hover:text-brand-600'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Login dropdown */}
              <div className="relative" ref={loginRef}>
                <button
                  onClick={() => setLoginOpen(!loginOpen)}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    scrolled ? 'text-gray-600 hover:text-brand-600' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Login
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${loginOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {loginOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute right-0 top-full mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-2">
                        <p className="px-3 py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                          Portal Access
                        </p>
                        {LOGIN_PORTALS.map((portal) => (
                          <a
                            key={portal.label}
                            href={portal.href}
                            {...(portal.external
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-brand-50 group transition-colors"
                          >
                            <div className="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-brand-200">
                              <portal.icon className="w-4 h-4 text-brand-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{portal.label}</p>
                              <p className="text-xs text-gray-500">{portal.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-brand-md"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-[320px] bg-white shadow-2xl lg:hidden flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <Link href="/">
                <Image
                  src="/main-logo.png"
                  alt="Vaktel"
                  width={160}
                  height={54}
                  className="h-10 sm:h-12 w-auto max-w-[160px] object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4">
                <p className="px-4 pb-2 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                  Portal Access
                </p>
                {LOGIN_PORTALS.map((portal) => (
                  <a
                    key={portal.label}
                    href={portal.href}
                    {...(portal.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                      <portal.icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{portal.label}</span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Drawer CTA */}
            <div className="p-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Get Started Free
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
