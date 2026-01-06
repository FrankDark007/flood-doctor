import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
  className?: string;
}

/**
 * ScrollProgress - Page scroll progress indicator
 *
 * Fixed bar showing read progress on long pages.
 * Perfect for blog articles and guides.
 */
const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = '#1a73e8',
  height = 3,
  position = 'top',
  className = '',
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed left-0 right-0 z-50 origin-left ${className}`}
      style={{
        [position]: 0,
        height,
        backgroundColor: color,
        scaleX,
      }}
    />
  );
};

/**
 * SectionProgress - Progress indicator for specific container
 */
export const SectionProgress: React.FC<{
  containerRef: React.RefObject<HTMLElement>;
  color?: string;
  className?: string;
}> = ({
  containerRef,
  color = '#1a73e8',
  className = '',
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className={`w-full h-1 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full rounded-full origin-left"
        style={{
          backgroundColor: color,
          scaleX,
        }}
      />
    </div>
  );
};

export default ScrollProgress;
