'use client';

import { useState } from 'react';
import { Building2, Plane, Landmark, Banknote, Home, BarChart3, Heart, GraduationCap, ShoppingBag, Truck } from 'lucide-react';

const INDUSTRIES = [
  { label: 'Hospitality',  icon: Building2    },
  { label: 'Airlines',     icon: Plane        },
  { label: 'Government',   icon: Landmark     },
  { label: 'BFSI',         icon: Banknote     },
  { label: 'Real Estate',  icon: Home         },
  { label: 'Enterprise',   icon: BarChart3    },
  { label: 'Healthcare',   icon: Heart        },
  { label: 'Education',    icon: GraduationCap},
  { label: 'Retail',       icon: ShoppingBag  },
  { label: 'Logistics',    icon: Truck        },
];

const tripled = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

export function TrustTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-white border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase">
          Trusted across industries
        </p>
      </div>

      <div
        className="ticker-wrap relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade masks — smooth edge blend */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div
          className="ticker-track"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {tripled.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex items-center gap-3 mx-4 shrink-0 px-5 py-3 rounded-2xl border border-gray-100 bg-white hover:border-brand-200 hover:shadow-brand-sm group transition-all duration-300 cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-gray-50 group-hover:bg-brand-50 flex items-center justify-center transition-colors shrink-0">
                <item.icon className="w-[18px] h-[18px] text-gray-400 group-hover:text-brand-600 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-900 whitespace-nowrap transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
