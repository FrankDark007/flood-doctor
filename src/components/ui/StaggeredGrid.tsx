import React, { useRef, useEffect, useState, Children, cloneElement, isValidElement, ReactElement } from 'react';

interface StaggeredGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-up';
  threshold?: number;
}

/**
 * StaggeredGrid - Grid container that animates children one by one
 * Creates Google-style cascading reveal effect
 */
const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = '',
  staggerDelay = 100,
  animation = 'fade-up',
  threshold = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [hasTriggered, setHasTriggered] = useState(false);

  const childArray = Children.toArray(children);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);

          // Stagger the reveal of each child
          childArray.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(index));
            }, index * staggerDelay);
          });

          observer.unobserve(container);
        }
      },
      { threshold, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [childArray.length, staggerDelay, hasTriggered, threshold]);

  const animations = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(32px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-in': {
      initial: { opacity: 0, transform: 'none' },
      visible: { opacity: 1, transform: 'none' },
    },
    scale: {
      initial: { opacity: 0, transform: 'scale(0.9)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    'slide-up': {
      initial: { opacity: 0, transform: 'translateY(48px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
  };

  return (
    <div ref={containerRef} className={className}>
      {childArray.map((child, index) => {
        if (!isValidElement(child)) return child;

        const isVisible = visibleItems.has(index);
        const { initial, visible } = animations[animation];

        const style: React.CSSProperties = {
          ...initial,
          ...(isVisible ? visible : {}),
          transition: `opacity 0.7s cubic-bezier(0.05, 0.7, 0.1, 1), transform 0.7s cubic-bezier(0.05, 0.7, 0.1, 1)`,
          transitionDelay: `${index * 50}ms`,
          willChange: 'opacity, transform',
        };

        return cloneElement(child as ReactElement, {
          style: { ...((child as ReactElement).props.style || {}), ...style },
          key: index,
        });
      })}
    </div>
  );
};

export default StaggeredGrid;
