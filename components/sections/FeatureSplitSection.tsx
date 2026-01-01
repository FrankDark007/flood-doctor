
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
    <div className={`py-24 lg:py-32 overflow-hidden ${bg === 'subtle' ? 'bg-[#f8fafc]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:grid lg:grid-cols-12 lg:gap-24 items-center ${imageLeft ? '' : ''}`}>
          
          {/* Content Column */}
          <div className={`lg:col-span-6 ${imageLeft ? 'lg:order-2' : 'lg:order-1'} mb-12 lg:mb-0 text-center lg:text-left`}>
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 leading-[1.2] tracking-tight">
              {heading}
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
            {ctaLabel && (
                <div className="flex justify-center lg:justify-start">
                    <Button to={ctaLink || '/'} variant="text" className="text-primary text-lg font-medium hover:bg-transparent px-0 hover:underline">
                        {ctaLabel}
                    </Button>
                </div>
            )}
          </div>

          {/* Visual Column */}
          <div className={`lg:col-span-6 ${imageLeft ? 'lg:order-1' : 'lg:order-2'} w-full`}>
             <div className="relative">
                {visual}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureSplitSection;
