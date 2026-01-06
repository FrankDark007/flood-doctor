import React from 'react';
import { motion, Variants } from 'framer-motion';

interface RevealTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  type?: 'words' | 'chars' | 'lines';
  once?: boolean;
}

/**
 * RevealText - Animated text reveal
 *
 * Word-by-word or character-by-character reveal animation.
 * Google-style text entrance for headlines.
 */
const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = '',
  as: Component = 'p',
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.03,
  type = 'words',
  once = true,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const getElements = () => {
    if (type === 'chars') {
      return children.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ));
    }

    if (type === 'lines') {
      return children.split('\n').map((line, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="block"
        >
          {line}
        </motion.span>
      ));
    }

    // Default: words
    return children.split(' ').map((word, index) => (
      <motion.span
        key={index}
        variants={itemVariants}
        className="inline-block mr-[0.25em]"
      >
        {word}
      </motion.span>
    ));
  };

  // Create the motion component
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={containerVariants}
      className={className}
    >
      {getElements()}
    </MotionComponent>
  );
};

/**
 * TypewriterText - Typewriter effect
 *
 * Characters appear one by one like typing.
 */
export const TypewriterText: React.FC<{
  children: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}> = ({
  children,
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
}) => {
  const characters = children.split('');

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + (index * speed) / 1000,
            duration: 0.01,
          }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="inline-block ml-0.5 w-0.5 h-[1em] bg-current"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </motion.span>
  );
};

export default RevealText;
