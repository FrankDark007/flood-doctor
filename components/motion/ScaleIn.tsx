import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface ScaleInProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  once?: boolean;
  className?: string;
}

/**
 * ScaleIn - Scale entrance animation
 *
 * Perfect for cards, images, and dashboard mockups.
 * Material Design 3 inspired scale + fade combination.
 */
const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.95,
  once = true,
  className = '',
  ...props
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: initialScale,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
