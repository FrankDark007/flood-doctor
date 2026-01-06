import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
}

/**
 * FadeIn - Scroll-triggered fade animation component
 *
 * Google-style reveal animation that triggers when element enters viewport.
 * Uses Framer Motion's whileInView for performance.
 */
const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 24,
  once = true,
  className = '',
  as = 'div',
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 };
      case 'down': return { y: -distance, x: 0 };
      case 'left': return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      case 'none': return { x: 0, y: 0 };
      default: return { y: distance, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Google's standard easing
      },
    },
  };

  const MotionComponent = motion[as] as React.FC<HTMLMotionProps<typeof as>>;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
