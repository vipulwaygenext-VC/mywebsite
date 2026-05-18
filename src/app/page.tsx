import { Hero }              from '@/components/home/Hero';
import { TrustTicker }       from '@/components/home/TrustTicker';
import { FeaturesSection }   from '@/components/home/FeaturesSection';
import { WhyVaktel }         from '@/components/home/WhyVaktel';
import { IndustryUseCases }  from '@/components/home/IndustryUseCases';
import { Testimonials }      from '@/components/home/Testimonials';
import { CTASection }        from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustTicker />
      <FeaturesSection />
      <WhyVaktel />
      <IndustryUseCases />
      <Testimonials />
      <CTASection />
    </>
  );
}
