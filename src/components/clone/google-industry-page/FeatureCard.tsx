import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

/**
 * Feature Card Component
 * Based on: workspace.google.com/industries/healthcare
 *
 * Features:
 * - Horizontal layout with 50/50 split
 * - Large border radius (24px) on image
 * - Configurable image position
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
}) => {
  return (
    <div
      className={`
        flex flex-col gap-8
        ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}
    >
      {/* Image */}
      <div className="flex-1 w-full md:w-1/2">
        {imageSrc ? (
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-subtle">
            <img
              src={imageSrc}
              alt={imageAlt || ''}
              className="w-full h-full object-cover heading-section"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] rounded-3xl bg-subtle flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="font-display text-xl font-medium text-text mb-3">
          {title}
        </h3>
        <p className="text-base text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
