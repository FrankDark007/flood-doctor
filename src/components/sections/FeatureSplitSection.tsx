import React from 'react';
import Button from '../ui/Button';

interface FeatureSplitSectionProps {
  heading: string;
  description: string;
  imageLeft?: boolean;
  visual: React.ReactNode;
  bg?: 'white' | 'subtle';
  ctaLabel?: string;
  ctaLink?: string;
}

const FeatureSplitSection: React.FC<FeatureSplitSectionProps> = ({
  heading,
  description,
  imageLeft = false,
  visual,
  bg = 'white',
  ctaLabel,
  ctaLink
}) => {
  return (
    <div className="overflow-hidden">
      {/* Grid with 64px gap - Google's exact grid gap value */}
      <div className={`flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center`}>

        {/* Content Column */}
        <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'} mb-12 lg:mb-0 text-center lg:text-left`}>
          {/* H2 - Google: 36px/44px */}
          <h2 className="text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[44px] font-normal text-[#202124] mb-4">
            {heading}
          </h2>
          {/* Body text - Google: 16px/24px */}
          <p className="text-base text-[#3c4043] leading-6 mb-6 max-w-2xl mx-auto lg:mx-0">
            {description}
          </p>
          {ctaLabel && (
            <div className="hidden lg:flex justify-center lg:justify-start">
              <Button to={ctaLink || '/'} variant="text" className="text-[#1a73e8] text-base font-medium hover:bg-transparent px-0 hover:underline">
                {ctaLabel}
              </Button>
            </div>
          )}
        </div>

        {/* Visual Column */}
        <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'} w-full`}>
          <div className="relative">
            {visual}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSplitSection;