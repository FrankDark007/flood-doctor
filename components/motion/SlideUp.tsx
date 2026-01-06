import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface SlideUpProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

/**
 * SlideUp - Elegant slide-up animation
 *
 * Material Design 3 style entrance with smooth easing.
 * Perfect for cards, text blocks, and content sections.
 */
const SlideUp: React.FC<SlideUpProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  className = '',
  ...props
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom ease for smooth deceleration
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
