import React from 'react';
import { ShieldCheck, Award, ThumbsUp, Star } from 'lucide-react';

const CertificationCloud: React.FC = () => {
  // Mocking "Logos" using CSS styled divs since we don't have images
  const Logos = [
    {
      name: "IICRC",
      sub: "Certified Firm",
      icon: ShieldCheck,
      color: "#6366f1"
    },
    {
        name: "BBB",
        sub: "Accredited",
        icon: Award,
        color: "#0f172a"
    },
    {
        name: "EPA",
        sub: "Lead-Safe",
        icon: ShieldCheck,
        color: "#16a34a"
    },
    {
        name: "Google",
        sub: "Guaranteed",
        icon: Star,
        color: "#ea4335"
    },
    {
        name: "HomeAdvisor",
        sub: "Screened",
        icon: ThumbsUp,
        color: "#f97316"
    }
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="w-full md:w-1/4 text-center md:text-left flex-shrink-0">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
              Industry Recognized
            </h3>
            <p className="text-lg font-semibold text-slate-800 leading-tight">
              Licensed, insured, and certified by leading authorities.
            </p>
          </div>

          <div className="w-full md:w-3/4 flex flex-nowrap items-center justify-start md:justify-end gap-8 md:gap-12 opacity-80 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {Logos.map((logo, idx) => (
              <div 
                key={idx} 
                className="group flex-shrink-0 flex items-center space-x-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100 transform hover:scale-105"
              >
                {/* Logo Mock */}
                <div className="relative">
                    <logo.icon 
                        size={32} 
                        className="transition-colors"
                        style={{ color: logo.color }} // Note: will only show color when grayscale is removed
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black leading-none" style={{ fontFamily: 'serif' }}>{logo.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{logo.sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CertificationCloud;