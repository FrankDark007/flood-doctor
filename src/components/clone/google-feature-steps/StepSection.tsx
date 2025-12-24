import React from 'react';

interface StepSectionProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSide?: 'left' | 'right';
  children?: React.ReactNode; // For custom illustration
}

/**
 * Step Section Component
 * Based on: business.google.com/us/google-ads/how-ads-work/
 *
 * Features:
 * - Numbered step badge
 * - Alternating image/content layout
 * - Illustration card with colored background
 */
const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  title,
  description,
  imageSide = 'right',
  children,
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className={`
            flex flex-col gap-8 md:gap-16 items-center
            ${imageSide === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}
          `}
        >
          {/* Content Side */}
          <div className="flex-1 max-w-[500px]">
            {/* Step Badge */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e8f0fe] text-primary text-xl font-medium mb-6">
              {stepNumber}
            </div>

            <h2 className="font-display text-[40px] leading-[48px] font-normal text-text mb-4">
              {title}
            </h2>

            <p className="text-lg leading-7 text-muted">
              {description}
            </p>
          </div>

          {/* Illustration Side */}
          <div className="flex-1 w-full">
            <div className="bg-[#e9eef6] rounded-[28px] aspect-[4/3] flex items-center justify-center overflow-hidden">
              {children || (
                <div className="w-32 h-32 rounded-2xl bg-white/50 flex items-center justify-center">
                  <span className="text-4xl text-primary/40">{stepNumber}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSection;
