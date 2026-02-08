
import React from 'react';
import { ServiceHeroContent } from './types';

interface ServiceHeroProps {
  content: ServiceHeroContent;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ content }) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual - LEFT side */}
          <div className="relative order-2 lg:order-1">
            {/* Hero image with overflow effect */}
            {content.heroImage && (
              <div className="relative pt-16">
                {/* Pastel background card */}
                <div className="bg-[#e8f0fe] rounded-[32px] overflow-hidden">
                  <div className="aspect-[4/3]" />
                </div>
                {/* Image floating above card */}
                <img
                  src={content.heroImage}
                  alt={content.headline}
                  className="absolute inset-0 w-full h-full object-cover object-top -top-16 rounded-t-[32px]"
                />
              </div>
            )}

            {/* Floating badge - top left */}
            <div className="absolute top-0 left-0 z-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#dadce0] rounded-full px-4 py-2 shadow-sm">
                <svg className="w-4 h-4 text-[#ea4335]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-[14px] text-[#202124]">24/7 Emergency Response</span>
              </div>
            </div>

            {/* Floating service card - bottom right */}
            <div className="absolute bottom-4 right-0 z-10 bg-white rounded-2xl shadow-lg p-5 max-w-[280px]">
              {/* Top row - icons */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1a73e8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#202124]">IICRC Certified</div>
                  <div className="text-[12px] text-[#5f6368]">Licensed & Insured</div>
                </div>
              </div>

              {/* Checklist items */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-[#1a73e8] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#1a73e8]">60-Minute Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-[#1a73e8] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#1a73e8]">Direct Insurance Billing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-[#1a73e8] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#1a73e8]">Free Estimates</span>
                </div>
              </div>

              {/* CTA button */}
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-[#1a73e8] text-white text-[13px] font-medium rounded hover:bg-[#1557b0] transition-colors">
                  Get Help Now
                </button>
              </div>
            </div>
          </div>

          {/* Copy - RIGHT side */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.5px] text-[#202124] mb-6">
              {content.headline}
            </h1>
            <p className="text-[18px] lg:text-[20px] text-[#5f6368] leading-[1.5] mb-8">
              {content.description}
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href={content.ctaHref}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1a73e8] text-white font-medium rounded-[20px] text-[15px] hover:bg-[#1557b0] transition-colors shadow-sm"
              >
                {content.ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
