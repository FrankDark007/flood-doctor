import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Negative = slower, Positive = faster
  direction?: 'up' | 'down';
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: boolean;
}

/**
 * ParallaxSection - Scroll-linked parallax effect
 *
 * Creates depth by moving content at different speeds.
 * Google-style subtle parallax for visual interest.
 */
const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

/**
 * ParallaxImage - Parallax background image
 *
 * Perfect for hero sections and visual breaks.
 * Includes optional scale effect for dramatic reveals.
 */
export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.3,
  scale = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          y,
          scale: scale ? scaleValue : 1,
        }}
      />
    </div>
  );
};

/**
 * ParallaxBackground - Full-width parallax background section
 */
export const ParallaxBackground: React.FC<{
  children: React.ReactNode;
  imageUrl: string;
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
  minHeight?: string;
}> = ({
  children,
  imageUrl,
  overlayColor = '#000',
  overlayOpacity = 0.5,
  className = '',
  minHeight = '500px',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      <motion.div
        className="absolute inset-0 w-full h-[130%]"
        style={{
          y,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
