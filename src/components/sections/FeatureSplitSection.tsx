import React, { useRef, useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Subtle parallax on scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = sectionRef.current;
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const offset = (elementCenter - viewportCenter) * 0.08;
          setParallaxOffset(offset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 items-center">

        {/* Content Column */}
        <div
          className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'} mb-12 lg:mb-0 text-center lg:text-left`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'translateX(0)'
              : imageLeft ? 'translateX(40px)' : 'translateX(-40px)',
            transition: 'opacity 0.8s cubic-bezier(0.05, 0.7, 0.1, 1), transform 0.8s cubic-bezier(0.05, 0.7, 0.1, 1)',
          }}
        >
          <h2 className="text-[28px] lg:text-[40px] leading-[36px] lg:leading-[48px] font-normal text-[#202124] mb-5 heading-section">
            {heading}
          </h2>
          <p className="text-lg text-[#5f6368] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            {description}
          </p>
          {ctaLabel && (
            <div className="flex justify-center lg:justify-start">
              <Button
                to={ctaLink || '/'}
                variant="text"
                className="group text-[#1a73e8] text-base font-medium hover:bg-transparent px-0"
              >
                {ctaLabel}
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>

        {/* Visual Column with parallax */}
        <div
          className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'} w-full`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? `translateY(${parallaxOffset}px) scale(1)`
              : 'translateY(60px) scale(0.95)',
            transition: 'opacity 0.8s cubic-bezier(0.05, 0.7, 0.1, 1), transform 0.8s cubic-bezier(0.05, 0.7, 0.1, 1)',
            transitionDelay: '150ms',
          }}
        >
          <div className="relative">
            {visual}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSplitSection;