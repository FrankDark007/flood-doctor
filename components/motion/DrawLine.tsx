import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface DrawLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  direction?: 'horizontal' | 'vertical';
  length?: string;
}

interface DrawPathProps {
  d: string;
  className?: string;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  viewBox?: string;
  width?: number;
  height?: number;
}

/**
 * DrawLine - Animated line draw effect
 *
 * Perfect for underlines, dividers, and visual accents.
 * Google-style line animation.
 */
const DrawLine: React.FC<DrawLineProps> = ({
  className = '',
  color = '#1a73e8',
  strokeWidth = 2,
  duration = 0.8,
  delay = 0,
  direction = 'horizontal',
  length = '100%',
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const isHorizontal = direction === 'horizontal';

  return (
    <svg
      ref={ref}
      className={className}
      width={isHorizontal ? length : strokeWidth}
      height={isHorizontal ? strokeWidth : length}
      viewBox={isHorizontal ? `0 0 100 ${strokeWidth}` : `0 0 ${strokeWidth} 100`}
      preserveAspectRatio="none"
    >
      <motion.line
        x1={isHorizontal ? 0 : strokeWidth / 2}
        y1={isHorizontal ? strokeWidth / 2 : 0}
        x2={isHorizontal ? 100 : strokeWidth / 2}
        y2={isHorizontal ? strokeWidth / 2 : 100}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </svg>
  );
};

/**
 * DrawPath - Animated SVG path draw
 *
 * For complex SVG path animations like icons and illustrations.
 */
export const DrawPath: React.FC<DrawPathProps> = ({
  d,
  className = '',
  color = '#1a73e8',
  strokeWidth = 2,
  duration = 1.5,
  delay = 0,
  viewBox = '0 0 100 100',
  width = 100,
  height = 100,
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <svg
      ref={ref}
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration, delay, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.3, delay },
        }}
      />
    </svg>
  );
};

/**
 * AnimatedCheckmark - Checkmark that draws itself
 */
export const AnimatedCheckmark: React.FC<{
  size?: number;
  color?: string;
  strokeWidth?: number;
  delay?: number;
  className?: string;
}> = ({
  size = 24,
  color = '#137333',
  strokeWidth = 2,
  delay = 0,
  className = '',
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg
      ref={ref}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.path
        d="M5 13l4 4L19 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </svg>
  );
};

export default DrawLine;
