import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  services: ServiceData[];
  columns?: 2 | 3 | 4;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, columns = 3 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          // Stagger reveal each card
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(index));
            }, index * 100);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [services.length, hasTriggered]);

  if (services.length === 0) return null;

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div ref={containerRef} className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {services.map((service, index) => {
        const isVisible = visibleItems.has(index);

        return (
          <Link
            key={service.id}
            to={service.slug}
            className="
              group block
              bg-white
              p-8
              rounded-[24px]
              text-center
              card-hover-lift
            "
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.6s cubic-bezier(0.05, 0.7, 0.1, 1), transform 0.6s cubic-bezier(0.05, 0.7, 0.1, 1)`,
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {/* Icon placeholder */}
            <div className="w-14 h-14 mx-auto mb-5 bg-[#e8f0fe] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 bg-[#1a73e8] rounded-lg opacity-60" />
            </div>

            {/* Title */}
            <h3 className="text-[20px] font-medium text-[#202124] mb-3 leading-7 group-hover:text-[#1a73e8] transition-colors heading-card">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-base text-[#5f6368] leading-6 mb-6 line-clamp-2">
              {service.shortDescription}
            </p>

            {/* Learn more link */}
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] group-hover:gap-3 transition-all">
              Learn more
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
