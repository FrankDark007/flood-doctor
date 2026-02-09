
import React from 'react';

const steps = [
  { num: 1, title: "Call Us", desc: "Contact our 24/7 emergency line at (703) 968-8158. We'll gather details about your water damage situation and dispatch a team immediately." },
  { num: 2, title: "We Respond", desc: "Our IICRC-certified technicians arrive within 60 minutes with professional-grade extraction and drying equipment to begin mitigation." },
  { num: 3, title: "Full Restoration", desc: "From water extraction to structural drying to repairs—we restore your property to pre-loss condition and handle insurance documentation." }
];

export const FinalSteps: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-[#202124] mb-6">How Our Water Damage Restoration Works</h2>
      <p className="text-[#5f6368] mb-10">From emergency call to complete restoration—here's what to expect when you choose Flood Doctor.</p>
      <a href="/request/" className="hidden md:inline-flex items-center justify-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white h-14 px-10 rounded-full font-semibold text-lg transition-all mb-24">
        Request Service
      </a>
      <div className="mb-24 md:hidden"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map(step => (
          <div key={step.num} className="flex flex-col items-center">
            <div className="text-7xl font-light text-[#1a73e8] mb-6">{step.num}</div>
            <h3 className="text-2xl font-bold text-[#202124] mb-4">{step.title}</h3>
            <p className="text-sm text-[#5f6368] leading-relaxed max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
