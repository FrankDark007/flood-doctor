import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
}

/**
 * Hero Image Component
 * Based on: workspace.google.com/blog article template
 *
 * Features:
 * - Max width 1296px
 * - 2:1 aspect ratio
 * - Large border radius (32px)
 */
const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <div className="max-w-[1296px] mx-auto px-6 mb-12">
      <div className="aspect-[2/1] rounded-[32px] overflow-hidden bg-subtle">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
