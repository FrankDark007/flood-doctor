import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  category: string;
  categoryIcon?: React.ReactNode;
  contentType: string; // "Article", "Video", "Guide"
  href: string;
  imageSrc?: string;
  imageBg?: string;
  featured?: boolean;
}

/**
 * Resource Card Component
 * Based on: business.google.com/us/resources/
 *
 * Features:
 * - Category badge with icon
 * - Content type label with arrow
 * - Hover state with subtle interaction
 */
const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  category,
  categoryIcon,
  contentType,
  href,
  imageSrc,
  imageBg = 'bg-[#e8f0fe]',
  featured = false,
}) => {
  const cardSize = featured
    ? 'md:col-span-2 md:row-span-1'
    : '';

  const titleSize = featured
    ? 'text-3xl md:text-[48px] md:leading-[56px]'
    : 'text-xl leading-7';

  return (
    <Link
      to={href}
      className={`
        group block rounded-[20px] overflow-hidden bg-white
        hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]
        transition-shadow duration-250
        ${cardSize}
      `}
    >
      {/* Image Area */}
      {!featured && imageSrc ? (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className={`${featured ? 'h-full min-h-[280px]' : 'aspect-video'} ${imageBg} flex items-center justify-center p-8`}>
          {categoryIcon && (
            <div className="text-primary/60 scale-150">
              {categoryIcon}
            </div>
          )}
        </div>
      )}

      {/* Content Area */}
      <div className={`p-6 ${featured ? 'absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/20 to-transparent' : ''}`}>
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          {categoryIcon && !featured && (
            <span className="w-6 h-6">{categoryIcon}</span>
          )}
          <span className="text-sm font-medium text-muted uppercase tracking-wide">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-display font-normal text-text mb-4 ${titleSize}`}>
          {title}
        </h3>

        {/* Content Type with Arrow */}
        <div className="flex items-center justify-between text-muted">
          <span className="text-base">{contentType}</span>
          <ArrowRight
            size={20}
            className="transform group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;
