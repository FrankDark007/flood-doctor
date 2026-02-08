import React from 'react';
import { Clock, Shield, Star, ChevronRight } from 'lucide-react';
import { Badge } from './types';

interface ServiceHeroCompactProps {
  title: string;
  subtitle: string;
  badges: Badge[];
  emergencyPhone: string;
  onCtaClick: () => void;
  /** Optional visual element to display instead of trust card */
  visual?: React.ReactNode;
}

/**
 * Split title so all words except the last are blue (Google style).
 * "Water Damage Restoration" → ["Water Damage", "Restoration"]
 * "Mold Remediation" → ["Mold", "Remediation"]
 */
function splitTitle(title: string): [string, string] {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return [title, ''];
  const last = words.pop()!;
  return [words.join(' '), last];
}

const ServiceHeroCompact: React.FC<ServiceHeroCompactProps> = ({
  title,
  subtitle,
  badges,
  emergencyPhone,
  onCtaClick,
  visual
}) => {
  const [blueWords, darkWord] = splitTitle(title);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div>
            {/* Availability indicator */}
            <div className="flex items-center gap-2 text-sm text-[#5f6368] mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>Technicians available now</span>
            </div>

            {/* Headline — Google style: blue accent + dark */}
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.15] mb-6">
              <span className="text-[#1a73e8]">{blueWords}</span>
              {darkWord && <> <span className="text-[#202124]">{darkWord}</span></>}
            </h1>

            <h2 className="text-lg font-normal text-[#5f6368] leading-relaxed max-w-[540px] mb-10">
              {subtitle}
            </h2>

            {/* CTA — desktop only, mobile uses floating sticky */}
            <div className="hidden md:block">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white h-14 px-10 rounded-full font-semibold text-lg transition-all"
              >
                Request Service
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Visual or Trust Card */}
          <div className="lg:pl-8">
            {visual ? (
              <div className="w-full h-full flex items-center justify-center">
                {visual}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-[#1a73e8] mb-1">60</div>
                    <div className="text-xs text-[#5f6368] font-medium uppercase tracking-wide">Min Response</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-[#202124] mb-1">24/7</div>
                    <div className="text-xs text-[#5f6368] font-medium uppercase tracking-wide">Available</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-[#202124] mb-1">4.9</div>
                    <div className="text-xs text-[#5f6368] font-medium uppercase tracking-wide">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-[#202124] mb-1">5k+</div>
                    <div className="text-xs text-[#5f6368] font-medium uppercase tracking-wide">Jobs Done</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-center gap-6 text-slate-400">
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="w-6 h-6" />
                      <span className="text-[10px] font-medium uppercase tracking-wide">IICRC</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Star className="w-6 h-6" />
                      <span className="text-[10px] font-medium uppercase tracking-wide">A+ BBB</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Clock className="w-6 h-6" />
                      <span className="text-[10px] font-medium uppercase tracking-wide">20+ Yrs</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#202124]">4.9 on Google</span>
                  </div>
                  <p className="text-sm text-[#5f6368] italic">
                    "Arrived in 45 minutes and saved our hardwood floors..."
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHeroCompact;
