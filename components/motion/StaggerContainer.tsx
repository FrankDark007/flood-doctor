import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface StaggerContainerProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  className?: string;
  as?: 'div' | 'ul' | 'section' | 'article';
}

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}

/**
 * StaggerContainer - Parent wrapper for staggered child animations
 *
 * Wrap children in StaggerItem components for automatic staggered reveals.
 * Google-style sequential entrance animation.
 */
const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  once = true,
  className = '',
  as = 'div',
  ...props
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren: staggerDelay,
      },
    },
  };

  const MotionComponent = motion[as] as React.FC<HTMLMotionProps<typeof as>>;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

/**
 * StaggerItem - Child component for staggered animations
 *
 * Must be used inside a StaggerContainer for automatic staggering.
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  as = 'div',
  ...props
}) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const MotionComponent = motion[as] as React.FC<HTMLMotionProps<typeof as>>;

  return (
    <MotionComponent variants={itemVariants} className={className} {...props}>
      {children}
    </MotionComponent>
  );
};

export default StaggerContainer;
