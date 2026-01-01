import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export interface StatItem {
  value: string | number;
  label: string;
  sublabel?: string;
  icon?: LucideIcon;
}

interface StatGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'compact' | 'card';
  className?: string;
}

const StatGrid: React.FC<StatGridProps> = ({
  stats,
  columns = 4,
  variant = 'default',
  className = '',
}) => {
  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  if (variant === 'card') {
    return (
      <div className={`grid ${columnClasses[columns]} gap-4 lg:gap-6 ${className}`}>
        {stats.map((stat, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6 text-center">
              {stat.icon && (
                <stat.icon size={32} className="mx-auto text-[#1a73e8] mb-3" />
              )}
              <div className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-none mb-1 font-display">
                {stat.value}
              </div>
              <div className="text-sm text-[#5f6368]">{stat.label}</div>
              {stat.sublabel && (
                <div className="text-xs text-[#5f6368] mt-1">{stat.sublabel}</div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap justify-center gap-6 lg:gap-12 ${className}`}>
        {stats.map((stat, index) => (
          <AnimatedSection key={index} delay={index * 50}>
            <div className="text-center">
              <div className="text-[24px] lg:text-[28px] font-medium text-[#1a73e8] leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#5f6368]">{stat.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`grid ${columnClasses[columns]} gap-8 text-center ${className}`}>
      {stats.map((stat, index) => (
        <AnimatedSection key={index} delay={index * 100}>
          <div className="flex flex-col items-center">
            {stat.icon && (
              <stat.icon size={32} className="text-[#1a73e8] mb-3" />
            )}
            <div className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-none mb-1 font-display">
              {stat.value}
            </div>
            <div className="text-sm text-[#5f6368]">{stat.label}</div>
            {stat.sublabel && (
              <div className="text-xs text-[#5f6368] mt-1">{stat.sublabel}</div>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default StatGrid;
