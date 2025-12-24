import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  visual?: React.ReactNode;
  eyebrow?: string;
  variant?: 'split' | 'centered' | 'stacked';
  background?: 'white' | 'subtle' | 'gradient';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  visual,
  eyebrow = '24/7 Emergency Response',
  variant = 'split',
  background = 'white'
}) => {
  const bgClasses = {
    white: 'bg-white',
    subtle: 'bg-[#f8f9fa]',
    gradient: 'bg-gradient-to-br from-white via-blue-50/30 to-white'
  };

  if (variant === 'centered') {
    return (
      <section className={`${bgClasses[background]} overflow-hidden`}>
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Display heading - Google: 60px/72px desktop, 44px/52px tablet, 32px/40px mobile */}
            <h1 className="text-[32px] md:text-[44px] lg:text-[60px] leading-[40px] md:leading-[52px] lg:leading-[72px] font-normal tracking-[-0.5px] text-[#202124] mb-6">
              {title}
            </h1>

            {/* Subtitle - Google: 16px/24px body text */}
            <p className="text-base text-[#3c4043] leading-6 mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* CTAs - Hidden on mobile, single sticky CTA at bottom */}
            <div className="hidden lg:flex flex-row items-center justify-center gap-4">
              <Button to="/request/" variant="primary" size="lg">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="tel:8774970007" variant="ghost" size="lg" className="group">
                <Phone size={18} className="mr-2" />
                (877) 497-0007
              </Button>
            </div>
          </div>

          {/* Visual below */}
          {visual && (
            <div className="mt-16 lg:mt-24 flex justify-center">
              <div className="w-full max-w-4xl">
                {visual}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Default: Split layout (Google Business Profile style)
  return (
    <section className={`${bgClasses[background]} overflow-hidden`}>
      <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[calc(100vh-64px)] lg:min-h-[640px]">

          {/* Left: Content */}
          <div className="flex flex-col justify-center py-12 lg:py-20">
            <div className="max-w-xl">
              {/* Eyebrow chip */}
              {eyebrow && (
                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 bg-[#e8f0fe] text-primary text-sm font-medium px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {eyebrow}
                  </span>
                </div>
              )}

              {/* Display Large heading - Google: 60px/72px desktop, 44px/52px tablet, 32px/40px mobile */}
              <h1 className="text-[32px] md:text-[44px] lg:text-[60px] leading-[40px] md:leading-[52px] lg:leading-[72px] font-normal tracking-[-0.5px] text-[#202124] mb-6">
                {title}
              </h1>

              {/* Body text - Google: 16px/24px */}
              <p className="text-base text-[#3c4043] leading-6 mb-10 max-w-md">
                {subtitle}
              </p>

              {/* Actions - Hidden on mobile, single sticky CTA at bottom */}
              <div className="hidden lg:flex flex-row gap-4">
                <Button to="/request/" variant="primary" size="lg">
                  Request Service
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button href="tel:8774970007" variant="secondary" size="lg" className="group">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>

              {/* Trust indicators - Hidden on mobile */}
              <div className="hidden lg:block mt-10 pt-8 border-t border-[#dadce0]">
                <div className="flex flex-wrap items-center gap-6 text-sm text-[#5f6368]">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#34a853]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>60-min response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#34a853]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>IICRC Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#34a853]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Insurance direct billing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex items-center justify-center lg:pr-10 py-8 lg:py-16">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Subtle background shape */}
              <div className="absolute inset-0 bg-[#f8f9fa] rounded-[32px] -rotate-3 scale-105 opacity-50" />
              <div className="relative z-10">
                {visual}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
