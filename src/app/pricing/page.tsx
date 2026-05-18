import type { Metadata } from 'next';
import { Badge }         from '@/components/ui/Badge';
import { PricingCards }  from '@/components/pricing/PricingCards';
import { CTASection }    from '@/components/home/CTASection';
import { Testimonials }  from '@/components/home/Testimonials';
import { Check }         from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent, flexible pricing for Vaktel\'s enterprise communication platform. Starter, Growth, and Enterprise plans with monthly/yearly billing. 14-day free trial included.',
};

const GUARANTEES = [
  '14-day free trial, no credit card needed',
  'No setup fees or hidden charges',
  '99.9% uptime SLA on all paid plans',
  'Cancel or change plan anytime',
  'Dedicated onboarding for Growth & Enterprise',
  'Free migration from existing provider',
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060d20] pt-40 pb-24 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-[500px] h-[400px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-brand-500/30 text-brand-400 bg-transparent">
            Pricing
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, honest pricing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              for every stage of growth
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, scale confidently. No surprises, no lock-in — just powerful
            communication tools at a price that makes sense.
          </p>
        </div>
      </section>

      {/* Guarantees bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {GUARANTEES.map((g) => (
              <div key={g} className="flex items-start gap-2 text-xs text-gray-600">
                <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingCards />
      <Testimonials />
      <CTASection />
    </>
  );
}
