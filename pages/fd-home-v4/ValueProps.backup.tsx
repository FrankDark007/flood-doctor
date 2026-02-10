
import React from 'react';

const props = [
  {
    title: "24/7 Emergency",
    desc: "Water damage doesn't wait—neither do we. On-site within 60 minutes, any time day or night.",
    icon: (
      <svg className="w-10 h-10 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    )
  },
  {
    title: "IICRC Certified",
    desc: "Our technicians hold IICRC certifications in water damage restoration, mold remediation, and structural drying.",
    icon: (
      <svg className="w-10 h-10 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    )
  },
  {
    title: "Insurance Experts",
    desc: "We work directly with your insurance company, handling claims documentation and billing so you can focus on recovery.",
    icon: (
      <svg className="w-10 h-10 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    )
  },
];

export const ValueProps: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 mb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
        {props.map((p) => (
          <div key={p.title} className="flex flex-col items-center text-center group">
            <div className="w-[112px] h-[112px] rounded-[28px] bg-[#d2e3fc] mb-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
              {p.icon}
            </div>
            <h3 className="text-[32px] font-bold text-[#202124] mb-4 google-sans tracking-tight">{p.title}</h3>
            <p className="text-[#5f6368] text-[16px] leading-relaxed max-w-[260px]">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
