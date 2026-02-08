
import React from 'react';
import { ExpertPartnershipContent } from './types';

export interface ExpertPartnershipProps {
  content: ExpertPartnershipContent;
}

export const ExpertPartnership: React.FC<ExpertPartnershipProps> = ({ content }) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#e8f0fe] rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-6">
                {/* Expert avatar */}
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#1a73e8] to-[#4285f4] flex items-center justify-center">
                  <svg className="w-12 h-12 lg:w-16 lg:h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                {/* Chat bubbles */}
                <div className="flex-1 space-y-3">
                  <div className="bg-white rounded-2xl rounded-bl-sm p-4 shadow-sm max-w-[200px]">
                    <p className="text-[13px] text-[#5f6368]">I need help with water damage...</p>
                  </div>
                  <div className="bg-[#1a73e8] rounded-2xl rounded-br-sm p-4 shadow-sm max-w-[220px] ml-auto">
                    <p className="text-[13px] text-white">We can have a technician there in 60 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[28px] lg:text-[36px] font-medium text-[#5f6368] leading-[1.2] mb-6">
              {content.title}
            </h2>

            {/* Bullet list */}
            <ul className="space-y-3 mb-8 text-[16px] text-[#5f6368] leading-[1.6]">
              {content.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5f6368] mt-2.5 flex-shrink-0"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${content.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a73e8] text-white font-medium rounded-full text-[14px] hover:bg-[#1557b0] transition-colors shadow-lg shadow-[#1a73e8]/25"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {content.phone}
              </a>
              <a
                href={content.ctaHref}
                className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#1a73e8] text-[#1a73e8] font-medium rounded text-[14px] hover:bg-[#e8f0fe] transition-colors"
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

export default ExpertPartnership;
