
import React from 'react';
import { RelatedService } from './types';

interface RelatedServicesProps {
  title?: string;
  subtitle?: string;
  services: RelatedService[];
}

// Card mockup backgrounds - matching Google's colorful illustrated style
const cardStyles = [
  'bg-gradient-to-br from-[#fce8e6] to-[#f8d7da]', // Light salmon/pink
  'bg-gradient-to-br from-[#e6f4ea] to-[#ceead6]', // Light mint/teal
  'bg-gradient-to-br from-[#e8f0fe] to-[#d2e3fc]', // Light blue
];

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  title = 'Related Services',
  subtitle = 'Explore our other restoration and cleanup services to address all your property damage needs.',
  services
}) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-[32px] lg:text-[40px] font-medium text-[#202124] leading-[1.2] mb-4">
            {title}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#5f6368]">
            {subtitle}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="text-center"
            >
              {/* Illustrated Card */}
              <div className={`${cardStyles[i % cardStyles.length]} rounded-3xl p-6 lg:p-8 mb-6 aspect-[4/3] flex items-center justify-center`}>
                {/* Mockup content inside card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[200px]">
                  {i === 0 && (
                    // Mold inspection mockup
                    <>
                      <div className="text-[12px] font-medium text-[#202124] mb-2">Mold Inspection</div>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] text-[#5f6368]">Air Quality</span>
                          <span className="text-[11px] text-[#188038] font-medium">Clear</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] text-[#5f6368]">Surface Test</span>
                          <span className="text-[11px] text-[#ea4335] font-medium">Detected</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-[#1a73e8]">View full report</div>
                    </>
                  )}
                  {i === 1 && (
                    // Water extraction mockup
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-[#1a73e8]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
                        </svg>
                        <span className="text-[12px] font-medium text-[#202124]">Water Level</span>
                      </div>
                      <div className="h-2 bg-[#e8f0fe] rounded-full mb-2">
                        <div className="h-2 bg-[#1a73e8] rounded-full w-1/4"></div>
                      </div>
                      <div className="text-[11px] text-[#5f6368]">75% extracted</div>
                    </>
                  )}
                  {i === 2 && (
                    // Drying progress mockup
                    <>
                      <div className="text-[12px] font-medium text-[#202124] mb-2">Drying Status</div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                          <span className="text-[10px] font-medium text-[#1a73e8]">Day 3</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-1.5 bg-[#e8f0fe] rounded-full">
                            <div className="h-1.5 bg-[#188038] rounded-full w-3/5"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-[#188038]">On track for completion</div>
                    </>
                  )}
                </div>
              </div>

              {/* Text content - centered */}
              <h3 className="text-[18px] font-medium text-[#202124] mb-2">
                {service.title}
              </h3>
              <p className="text-[15px] text-[#5f6368] leading-[1.6] mb-4">
                {service.description}
              </p>
              <a
                href={service.href}
                className="text-[#1a73e8] font-medium text-[14px] hover:underline"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
