// components/graphics/AnimatedStats.tsx
// Animated statistics display with counter effect

import React, { useEffect, useState, useRef } from 'react';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
  color?: string;
}

interface AnimatedStatsProps {
  stats?: Stat[];
  className?: string;
  variant?: 'cards' | 'inline' | 'hero';
}

const defaultStats: Stat[] = [
  { value: 60, suffix: ' min', label: 'Average Response Time', color: 'blue' },
  { value: 25, suffix: '+', label: 'Years of Experience', color: 'emerald' },
  { value: 15000, suffix: '+', label: 'Projects Completed', color: 'violet' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction', color: 'amber' },
];

const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const step = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      setCount(Math.floor(start + (end - start) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start, isVisible]);

  return { count, ref, isVisible };
};

const AnimatedStats: React.FC<AnimatedStatsProps> = ({
  stats = defaultStats,
  className = '',
  variant = 'cards'
}) => {
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
    slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
  };

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 ${className}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref, isVisible } = useCountUp(stat.value);
            return (
              <div
                key={index}
                ref={ref}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.prefix}
                  <span className={isVisible ? 'transition-all duration-300' : ''}>
                    {count.toLocaleString()}
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap justify-center gap-8 md:gap-12 ${className}`}>
        {stats.map((stat, index) => {
          const { count, ref, isVisible } = useCountUp(stat.value);
          const colors = colorClasses[stat.color || 'blue'];
          return (
            <div
              key={index}
              ref={ref}
              className="text-center group"
            >
              <div className={`text-4xl md:text-5xl font-bold ${colors.text} mb-1 transition-transform group-hover:scale-110`}>
                {stat.prefix}
                {count.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-slate-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Cards variant (default)
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {stats.map((stat, index) => {
        const { count, ref, isVisible } = useCountUp(stat.value);
        const colors = colorClasses[stat.color || 'blue'];
        return (
          <div
            key={index}
            ref={ref}
            className={`${colors.bg} ${colors.border} border rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
          >
            {stat.icon && (
              <div className={`w-12 h-12 mx-auto mb-4 ${colors.bg} rounded-xl flex items-center justify-center`}>
                {stat.icon}
              </div>
            )}
            <div className={`text-3xl md:text-4xl font-bold ${colors.text} mb-2`}>
              {stat.prefix}
              <span className={isVisible ? 'transition-all duration-300' : ''}>
                {count.toLocaleString()}
              </span>
              {stat.suffix}
            </div>
            <div className="text-slate-600 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedStats;
