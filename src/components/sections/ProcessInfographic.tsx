import React from 'react';
import { ProcessStep, getOptimizedTilePaths } from '../../data/processTileMapping';
import AnimatedSection from '../ui/AnimatedSection';

interface ProcessInfographicProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

/**
 * ProcessInfographic - Visual step-by-step process display using isometric tiles
 *
 * Displays restoration process as a horizontal timeline on desktop with
 * beautiful isometric diorama tiles, step numbers, and descriptions.
 * Responsive layout stacks vertically on mobile.
 */
const ProcessInfographic: React.FC<ProcessInfographicProps> = ({
  steps,
  title = 'How it works',
  subtitle = 'A proven, systematic approach to complete restoration.',
}) => {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section"
              
            >
              {title}
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[140px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-[#e8f0fe] via-[#1a73e8] to-[#e8f0fe] z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                animation="fade-up"
                className="relative z-10 heading-section"
              >
                <div className="flex flex-col items-center text-center group">
                  {/* Tile Container */}
                  <div className="relative mb-4">
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -left-2 z-20 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center text-sm font-medium shadow-md">
                      {index + 1}
                    </div>

                    {/* Tile Image - Optimized WebP with responsive srcset */}
                    <div className="relative w-full max-w-[200px] aspect-square bg-white rounded-2xl shadow-sm overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                      {(() => {
                        const paths = getOptimizedTilePaths(step.tile);
                        return (
                          <picture>
                            <source
                              type="image/webp"
                              srcSet={paths.srcSet}
                              sizes="(max-width: 640px) 160px, 200px"
                            />
                            <img
                              src={paths.webp}
                              alt={step.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
                        );
                      })()}

                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-medium text-[#202124] mb-1 leading-tight">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#5f6368] leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Connection Lines */}
        <style>{`
          @media (max-width: 639px) {
            .process-step:not(:last-child)::after {
              content: '';
              position: absolute;
              left: 50%;
              bottom: -1.5rem;
              width: 2px;
              height: 1.5rem;
              background: linear-gradient(to bottom, #1a73e8, #e8f0fe);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProcessInfographic;
