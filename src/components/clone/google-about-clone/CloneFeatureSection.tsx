import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CloneFeatureSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSide?: 'left' | 'right';
  bgColor?: 'white' | 'subtle';
  children?: React.ReactNode; // For custom visual/illustration
}

const CloneFeatureSection: React.FC<CloneFeatureSectionProps> = ({
  eyebrow,
  title,
  description,
  ctaText,
  ctaHref,
  imageSide = 'left',
  bgColor = 'subtle',
  children,
}) => {
  const bgClass = bgColor === 'subtle' ? 'bg-subtle' : 'bg-white';

  return (
    <section className={bgClass}>
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div
          className={`
            flex flex-col gap-8 md:gap-16 items-center
            ${imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}
          `}
        >
          {/* Image/Visual Side */}
          <div className="flex-1 w-full">
            <div className="aspect-video md:aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              {children || (
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/40" />
                </div>
              )}
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 w-full">
            {eyebrow && (
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-3xl md:text-4xl leading-tight font-normal text-text mb-4">
              {title}
            </h2>
            <p className="text-lg leading-7 text-muted mb-6">
              {description}
            </p>
            <Link
              to={ctaHref}
              className="
                inline-flex items-center justify-center gap-2
                h-[50px] px-6
                bg-primary hover:bg-primary-hover
                text-white text-base font-medium
                rounded-[48px]
                transition-all duration-200
                hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]
              "
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloneFeatureSection;
