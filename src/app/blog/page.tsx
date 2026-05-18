import type { Metadata } from 'next';
import { Badge }        from '@/components/ui/Badge';
import { BlogListing }  from '@/components/blog/BlogListing';
import { CTASection }   from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, guides, and case studies on AI communication, IVR solutions, WhatsApp automation, SMS marketing, and enterprise business communication from the Vaktel team.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060d20] pt-40 pb-24 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-brand-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-brand-500/30 text-brand-400 bg-transparent">
            Vaktel Blog
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Insights for the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              modern enterprise
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert articles on AI voice bots, IVR design, WhatsApp automation, SMS best
            practices, and enterprise communication strategy.
          </p>
        </div>
      </section>

      <BlogListing />
      <CTASection />
    </>
  );
}
