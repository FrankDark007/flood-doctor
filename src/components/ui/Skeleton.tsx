import React from 'react';

// Google-style skeleton loading component with shimmer animation

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'wave'
}) => {
  const baseClasses = 'bg-[#dadce0]';

  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: '',
    rounded: 'rounded-[8px]'
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent',
    none: ''
  };

  const style: React.CSSProperties = {
    width: width,
    height: height
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  );
};

// Skeleton for service cards
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-[8px] overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)]">
    <Skeleton variant="rectangular" className="aspect-square" />
    <div className="p-4 space-y-3">
      <Skeleton variant="text" width="40%" height={12} />
      <Skeleton variant="text" width="80%" height={16} />
      <Skeleton variant="text" width="100%" height={14} />
      <Skeleton variant="text" width="60%" height={14} />
      <Skeleton variant="text" width="30%" height={14} />
    </div>
  </div>
);

// Skeleton for resource cards
export const ResourceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-[16px] border border-[#dadce0] overflow-hidden">
    <div className="aspect-[16/9] bg-[#f8f9fa] flex items-center justify-center">
      <Skeleton variant="circular" width={64} height={64} />
    </div>
    <div className="p-5 space-y-3">
      <Skeleton variant="text" width="30%" height={12} />
      <Skeleton variant="text" width="90%" height={16} />
      <Skeleton variant="text" width="100%" height={14} />
      <Skeleton variant="text" width="70%" height={14} />
      <Skeleton variant="text" width="25%" height={14} className="mt-2" />
    </div>
  </div>
);

// Skeleton for hero sections
export const HeroSkeleton: React.FC = () => (
  <div className="py-16 lg:py-24">
    <div className="max-w-2xl space-y-6">
      <Skeleton variant="text" width="80%" height={48} className="rounded" />
      <Skeleton variant="text" width="60%" height={48} className="rounded" />
      <div className="space-y-2 pt-4">
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="85%" height={20} />
      </div>
      <div className="flex gap-4 pt-4">
        <Skeleton variant="rounded" width={140} height={48} />
        <Skeleton variant="rounded" width={140} height={48} />
      </div>
    </div>
  </div>
);

// Skeleton for content sections
export const SectionSkeleton: React.FC<{ cards?: number }> = ({ cards = 3 }) => (
  <div className="py-16">
    <div className="text-center mb-12 space-y-4">
      <Skeleton variant="text" width="40%" height={32} className="mx-auto rounded" />
      <Skeleton variant="text" width="60%" height={20} className="mx-auto" />
    </div>
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cards} gap-6`}>
      {Array.from({ length: cards }).map((_, i) => (
        <div key={i} className="bg-white rounded-[16px] p-6 border border-[#dadce0]">
          <Skeleton variant="circular" width={48} height={48} className="mb-4" />
          <Skeleton variant="text" width="70%" height={20} className="mb-3" />
          <Skeleton variant="text" width="100%" height={14} />
          <Skeleton variant="text" width="90%" height={14} />
        </div>
      ))}
    </div>
  </div>
);

// Skeleton for FAQ items
export const FAQSkeleton: React.FC<{ items?: number }> = ({ items = 4 }) => (
  <div className="border-t border-[#dadce0]">
    {Array.from({ length: items }).map((_, i) => (
      <div key={i} className="border-b border-[#dadce0] py-5">
        <div className="flex justify-between items-center">
          <Skeleton variant="text" width="70%" height={20} />
          <Skeleton variant="circular" width={20} height={20} />
        </div>
      </div>
    ))}
  </div>
);

// Add shimmer keyframes to global styles (you'll need to add this to tailwind.config.js)
// Or use inline style for the animation
export const shimmerKeyframes = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export default Skeleton;
