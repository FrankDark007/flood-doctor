import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  bgColor?: string;
  className?: string;
  delay?: number;
  animation?: 'scale' | 'rotate' | 'bounce' | 'pulse';
}

/**
 * AnimatedIcon - Icon with entrance animation
 *
 * Perfect for feature lists, process steps, and highlights.
 */
const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  size = 24,
  color = '#1a73e8',
  bgColor,
  className = '',
  delay = 0,
  animation = 'scale',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const animations = {
    scale: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { type: 'spring', stiffness: 200, damping: 15, delay },
    },
    rotate: {
      initial: { rotate: -180, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
    bounce: {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: 'spring', stiffness: 300, damping: 10, delay },
    },
    pulse: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: [0.8, 1.1, 1], opacity: 1 },
      transition: { duration: 0.5, ease: 'easeOut', delay },
    },
  };

  const { initial, animate, transition } = animations[animation];

  return (
    <motion.div
      ref={ref}
      className={`inline-flex items-center justify-center ${bgColor ? 'rounded-full' : ''} ${className}`}
      style={{ backgroundColor: bgColor }}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};

/**
 * PulsingDot - Animated availability indicator
 */
export const PulsingDot: React.FC<{
  color?: string;
  size?: number;
  className?: string;
}> = ({
  color = '#137333',
  size = 8,
  className = '',
}) => {
  return (
    <span className={`relative inline-flex ${className}`}>
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative inline-flex rounded-full"
        style={{ backgroundColor: color, width: size, height: size }}
      />
    </span>
  );
};

/**
 * SpinningLoader - Loading spinner
 */
export const SpinningLoader: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({
  size = 24,
  color = '#1a73e8',
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      style={{
        width: size,
        height: size,
        border: `2px solid ${color}20`,
        borderTopColor: color,
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default AnimatedIcon;
