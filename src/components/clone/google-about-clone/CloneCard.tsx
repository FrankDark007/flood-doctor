import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface CloneCardProps {
  title: string;
  description: string;
  href: string;
  imageBg?: string; // Tailwind bg color class or gradient
  imageIcon?: React.ReactNode;
  external?: boolean;
}

const CloneCard: React.FC<CloneCardProps> = ({
  title,
  description,
  href,
  imageBg = 'bg-gradient-to-br from-primary/20 to-primary/5',
  imageIcon,
  external = false,
}) => {
  const CardWrapper = external ? 'a' : Link;
  const cardProps = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: href };

  return (
    <CardWrapper
      {...(cardProps as any)}
      className="
        group block
        bg-white rounded-lg
        overflow-hidden
        transition-shadow duration-250
        hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
      "
    >
      {/* Image Area */}
      <div className={`aspect-video ${imageBg} flex items-center justify-center rounded-t-lg`}>
        {imageIcon && (
          <div className="text-primary/60 group-hover:scale-105 transition-transform duration-300">
            {imageIcon}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4">
        <p className="text-xl leading-7 text-text font-normal mb-3">
          {description}
        </p>

        {/* Link indicator */}
        <div className="flex items-center justify-end text-primary">
          <ExternalLink size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </CardWrapper>
  );
};

export default CloneCard;
