
import React from 'react';
import { GettingStartedStep } from './types';

interface GettingStartedProps {
  headline: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  steps: GettingStartedStep[];
}

export const GettingStarted: React.FC<GettingStartedProps> = ({
  headline,
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  steps
}) => {
  return (
    <section className="bg-[#f8f9fa]">
      {/* Header Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[36px] lg:text-[48px] font-medium text-[#202124] leading-[1.2] mb-4">
              {headline}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#5f6368] mb-8">
              {description}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#1a73e8] text-[#1a73e8] font-medium rounded-[20px] text-[14px] hover:bg-[#e8f0fe] transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                {/* Large step number */}
                <div className="mb-6">
                  <span className="text-[80px] lg:text-[100px] font-bold text-[#1a73e8] leading-none">{step.number}</span>
                </div>
                <h3 className="text-[20px] lg:text-[24px] font-medium text-[#202124] mb-3">{step.title}</h3>
                <p className="text-[15px] lg:text-[16px] text-[#5f6368] leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
