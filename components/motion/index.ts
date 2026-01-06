// Motion Components - Framer Motion based animations
// Google-style scroll reveals, transitions, and micro-interactions

// Core Animation Components
export { default as FadeIn } from './FadeIn';
export { default as SlideUp } from './SlideUp';
export { default as ScaleIn } from './ScaleIn';
export { default as StaggerContainer, StaggerItem } from './StaggerContainer';

// Text Animations
export { default as RevealText, TypewriterText } from './RevealText';

// Counter & Progress
export { default as CountUp } from './CountUp';
export { default as ScrollProgress, SectionProgress } from './ScrollProgress';

// Parallax Effects
export { default as ParallaxSection, ParallaxImage, ParallaxBackground } from './ParallaxSection';

// SVG & Drawing
export { default as DrawLine, DrawPath, AnimatedCheckmark } from './DrawLine';

// Interactive Components
export { default as HoverCard, HoverButton, HoverLink } from './HoverCard';
export { default as AnimatedIcon, PulsingDot, SpinningLoader } from './AnimatedIcon';

// Re-export Framer Motion essentials for convenience
export { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
