import React from 'react';

interface Benefit {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

/**
 * Benefits Section Component
 * Based on: workspace.google.com/industries/healthcare
 *
 * Features:
 * - Section title (40px centered)
 * - Alternating horizontal cards
 * - 50/50 image/content split
 */
const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  benefits,
}) => {
  return (
    <section className="py-16 md:py-24 bg-subtle">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <h2 className="font-display text-3xl md:text-[40px] md:leading-[50px] font-medium text-text text-center mb-12 md:mb-16">
          {title}
        </h2>

        {/* Benefits List */}
        <div className="space-y-12 md:space-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                flex flex-col gap-8
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Image */}
              <div className="flex-1">
                {benefit.imageSrc ? (
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white">
                    <img
                      src={benefit.imageSrc}
                      alt={benefit.imageAlt || ''}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-3xl bg-white flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-medium text-text mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
