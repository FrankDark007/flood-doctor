
import React from 'react';
import { WhyChooseItem } from './types';

interface WhyChooseUsProps {
  headline: string;
  items: WhyChooseItem[];
  ctaText?: string;
  ctaHref?: string;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  headline,
  items,
  ctaText = 'Get a Free Quote',
  ctaHref = '/contact'
}) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual - LEFT side */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#e8f0fe] rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-6">
                {/* Certification badges mockup */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium text-[#5f6368]">IICRC Certified</span>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#188038]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium text-[#5f6368]">Licensed & Insured</span>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#ea4335]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium text-[#5f6368]">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - RIGHT side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[28px] lg:text-[36px] font-medium text-[#5f6368] leading-[1.2] mb-6">
              {headline}
            </h2>

            {/* Bullet list */}
            <ul className="space-y-3 mb-8 text-[16px] text-[#5f6368] leading-[1.6]">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5f6368] mt-2.5 flex-shrink-0"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <a
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#1a73e8] text-[#1a73e8] font-medium rounded-[20px] text-[14px] hover:bg-[#e8f0fe] transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
