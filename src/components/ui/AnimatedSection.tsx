import React, { useRef, useEffect, useState, ElementType } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-right' | 'scale';
  as?: ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  as: Component = 'div',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      initial: 'opacity-0',
      visible: 'opacity-100',
    },
    'slide-right': {
      initial: 'opacity-0 -translate-x-8',
      visible: 'opacity-100 translate-x-0',
    },
    scale: {
      initial: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
  };

  const { initial, visible } = animations[animation];
  const transitionClasses = 'transition-all duration-700 ease-[cubic-bezier(0.05,0.7,0.1,1)]';

  return React.createElement(
    Component,
    {
      ref,
      className: `${transitionClasses} ${isVisible ? visible : initial} ${className}`,
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
};

export default AnimatedSection;
