import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Animated Blog Components
 *
 * Drop-in replacements for static blog elements that add
 * scroll-triggered animations and micro-interactions.
 */

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

/**
 * AnimatedHero - Animated blog hero section
 */
export const AnimatedHero: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedHeroContent - Staggered animation for hero content elements
 */
export const AnimatedHeroContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          variants={staggerItem}
          custom={index}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * AnimatedSection - Section with scroll-triggered reveal
 */
export const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </motion.section>
  );
};

/**
 * AnimatedSectionHeader - Section heading with border reveal animation
 */
export const AnimatedSectionHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.h2
      ref={ref}
      className={`font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8] ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-1 bg-[#1a73e8]"
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.h2>
  );
};

/**
 * AnimatedCard - Card with hover effects and scroll reveal
 */
export const AnimatedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'info' | 'warning' | 'success' | 'emergency';
}> = ({ children, className = '', delay = 0, variant = 'default' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const variantStyles = {
    default: 'bg-white border border-gray-100',
    info: 'bg-blue-50 border-2 border-blue-200',
    warning: 'bg-amber-50 border-2 border-amber-200',
    success: 'bg-green-50 border-2 border-green-200',
    emergency: 'bg-red-50 border-2 border-red-200'
  };

  return (
    <motion.div
      ref={ref}
      className={`rounded-2xl p-6 ${variantStyles[variant]} ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedList - Staggered list animation
 */
export const AnimatedList: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          variants={staggerItem}
          custom={index}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * AnimatedStep - Numbered step with animation
 */
export const AnimatedStep: React.FC<{
  number: string;
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ number, title, icon: Icon, children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={`relative bg-white border border-gray-200 rounded-3xl p-8 ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      whileHover={{
        boxShadow: '0 20px 50px -15px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex items-start gap-6">
        <motion.div
          className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white items-center justify-center shrink-0 shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ delay: delay + 0.2, type: 'spring', stiffness: 200, damping: 15 }}
        >
          <span className="text-xl font-bold">{number}</span>
        </motion.div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {Icon && <Icon size={20} className="text-primary sm:hidden" />}
            <h3 className="font-display text-xl font-medium text-text">{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * AnimatedTimeline - Timeline with animated entries
 */
export const AnimatedTimeline: React.FC<{
  items: Array<{
    time: string;
    severity?: string;
    color?: string;
    events: string[];
  }>;
  className?: string;
}> = ({ items, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={`space-y-6 ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`relative pl-8 border-l-4 ${item.color ? `border-gradient-to-b ${item.color}` : 'border-gray-200'}`}
          variants={staggerItem}
        >
          <motion.div
            className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 -translate-x-[10px]"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 300 }}
          />
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="font-bold text-lg text-text mb-2">{item.time}</div>
            {item.severity && (
              <span className="inline-block px-2 py-1 text-xs font-bold uppercase rounded-full bg-red-100 text-red-700 mb-2">
                {item.severity}
              </span>
            )}
            <ul className="space-y-1">
              {item.events.map((event, i) => (
                <li key={i} className="text-sm text-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * AnimatedInfoBox - Callout box with icon and animated entrance
 */
export const AnimatedInfoBox: React.FC<{
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'success' | 'emergency';
  className?: string;
}> = ({ icon: Icon, title, children, variant = 'info', className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      textColor: 'text-blue-800'
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-900',
      textColor: 'text-amber-800'
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      textColor: 'text-green-800'
    },
    emergency: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
      textColor: 'text-red-800'
    }
  };

  const s = styles[variant];

  return (
    <motion.div
      ref={ref}
      className={`${s.bg} border-2 ${s.border} rounded-2xl p-6 ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={scaleIn}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`${s.iconBg} p-3 rounded-xl shrink-0`}
          initial={{ rotate: -180, scale: 0 }}
          animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
        >
          <Icon className={s.iconColor} size={24} />
        </motion.div>
        <div>
          <h3 className={`font-bold ${s.titleColor} mb-2`}>{title}</h3>
          <div className={`${s.textColor} text-sm leading-relaxed`}>{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * AnimatedStatGrid - Animated statistics grid
 */
export const AnimatedStatGrid: React.FC<{
  stats: Array<{
    value: string;
    label: string;
    color?: string;
  }>;
  className?: string;
}> = ({ stats, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className={`${stat.color || 'bg-gray-50'} rounded-xl p-4 text-center border border-gray-100`}
          variants={staggerItem}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className="text-2xl font-bold text-text mb-1">{stat.value}</div>
          <div className="text-xs text-muted">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * AnimatedCheckList - Checklist with animated checkmarks
 */
export const AnimatedCheckList: React.FC<{
  items: string[];
  className?: string;
}> = ({ items, className = '' }) => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.ul
      ref={ref}
      className={`space-y-3 ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-start gap-3"
          variants={staggerItem}
        >
          <motion.div
            className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 400, damping: 15 }}
          >
            <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              />
            </svg>
          </motion.div>
          <span className="text-muted">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default {
  AnimatedHero,
  AnimatedHeroContent,
  AnimatedSection,
  AnimatedSectionHeader,
  AnimatedCard,
  AnimatedList,
  AnimatedStep,
  AnimatedTimeline,
  AnimatedInfoBox,
  AnimatedStatGrid,
  AnimatedCheckList
};
