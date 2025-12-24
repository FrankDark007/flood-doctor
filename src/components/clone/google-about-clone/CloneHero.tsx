import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CloneHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

const CloneHero: React.FC<CloneHeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
}) => {
  return (
    <section className="bg-subtle">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Content */}
          <div className="flex-1 max-w-[616px] text-center md:text-left">
            <h1 className="font-display text-4xl md:text-[60px] md:leading-[72px] font-normal text-text tracking-[-0.5px] mb-6">
              {title}
            </h1>
            <p className="text-lg leading-7 text-muted mb-8">
              {subtitle}
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
                w-full md:w-auto
              "
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Visual Placeholder - Abstract Dots Pattern */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Animated dot pattern - representing water/restoration */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#34a853" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Generate dot pattern */}
                {Array.from({ length: 15 }).map((_, row) =>
                  Array.from({ length: 15 }).map((_, col) => {
                    const x = 40 + col * 22;
                    const y = 40 + row * 22;
                    const distance = Math.sqrt(Math.pow(x - 200, 2) + Math.pow(y - 200, 2));
                    const opacity = Math.max(0.15, 1 - distance / 200);
                    const size = Math.max(2, 4 - distance / 100);

                    // Create wave-like pattern
                    if (distance < 180 && distance > 50) {
                      return (
                        <circle
                          key={`${row}-${col}`}
                          cx={x}
                          cy={y}
                          r={size}
                          fill="url(#dotGradient)"
                          opacity={opacity}
                        />
                      );
                    }
                    return null;
                  })
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloneHero;
