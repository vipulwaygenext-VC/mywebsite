import type { Metadata } from 'next';
import { Badge }         from '@/components/ui/Badge';
import { MissionVision } from '@/components/about/MissionVision';
import { FounderCards }  from '@/components/about/FounderCards';
import { CTASection }    from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Vaktel, a unit of Waygenext Technologies Pvt Ltd, has been empowering enterprises with intelligent communication solutions since 2009. Meet our founders and learn our story.',
};

const STATS = [
  { value: '2009',   label: 'Founded' },
  { value: '1,000+', label: 'Clients Served' },
  { value: '15+',    label: 'Years of Expertise' },
  { value: '6',      label: 'Industries Served' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060d20] pt-40 pb-24 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-brand-500/30 text-brand-400 bg-transparent">
            About Vaktel
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powering enterprise communication
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              since 2009
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vaktel, a unit of Waygenext Technologies Pvt Ltd, has served 1,000+ enterprises
            across India with battle-tested IVR, SMS, AI Voice Bot, and WhatsApp automation.
          </p>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About body */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vaktel was born from a simple observation: Indian enterprises were underserved by
              complex, expensive, and unreliable communication technology. In 2009, Sunil Chawla
              and Vipul Chawla founded Waygenext Technologies Pvt Ltd with a mission to change
              that — building robust, affordable, and genuinely intelligent communication
              infrastructure for India&apos;s fastest-growing businesses.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What started as a focused IVR and SMS business grew rapidly into a full-stack
              communication platform. Today, Vaktel serves clients in Hospitality, Airlines,
              Government Departments, BFSI, Real Estate, and large Enterprise sectors — handling
              millions of calls, messages, and bot interactions every day.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In 2018, we made a significant bet on Artificial Intelligence, developing our
              proprietary AI Voice Bot platform. In 2020, we launched WhatsApp Business
              automation. And in 2024, we integrated GPT-powered conversational AI — always
              staying ahead of the technology curve while maintaining the reliability and trust
              that has been our hallmark for 15+ years.
            </p>
          </div>
        </div>
      </section>

      <MissionVision />
      <FounderCards />
      <CTASection />
    </>
  );
}
