import type { Metadata } from 'next';
import { Badge }        from '@/components/ui/Badge';
import { ServiceCards } from '@/components/services/ServiceCards';
import { CTASection }   from '@/components/home/CTASection';
import { TrustTicker }  from '@/components/home/TrustTicker';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Vaktel\'s full suite of enterprise communication services: IVR solutions, SMS services, AI Voice Bots, WhatsApp Bot automation, and Bulk SMS / OBD campaigns.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060d20] pt-40 pb-24 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-brand-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-800/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-brand-500/30 text-brand-400 bg-transparent">
            Our Services
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Five channels.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              One powerful platform.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From intelligent IVR to GPT-powered voice bots — every service designed to drive
            real business results at enterprise scale.
          </p>
        </div>
      </section>

      <TrustTicker />
      <ServiceCards />
      <CTASection />
    </>
  );
}
