import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface HoverCardProps extends Omit<HTMLMotionProps<'div'>, 'whileHover' | 'whileTap'> {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
  shadowOnHover?: boolean;
  borderOnHover?: boolean;
  onClick?: () => void;
}

/**
 * HoverCard - Interactive card with hover effects
 *
 * Material Design 3 inspired hover lift and shadow.
 * Perfect for service cards, feature blocks, and clickable items.
 */
const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className = '',
  hoverScale = 1.02,
  hoverY = -4,
  shadowOnHover = true,
  borderOnHover = false,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      className={`transition-shadow duration-300 ${shadowOnHover ? 'hover:shadow-lg' : ''} ${borderOnHover ? 'hover:border-[#1a73e8]' : ''} ${className}`}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
      }}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * HoverButton - Button with micro-interactions
 */
export const HoverButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors';

  const variantStyles = {
    primary: 'bg-[#1a73e8] text-white hover:bg-[#1557b0]',
    secondary: 'border border-[#dadce0] text-[#1a73e8] hover:bg-[#f8f9fa]',
    ghost: 'text-[#1a73e8] hover:bg-[#e8f0fe]',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

/**
 * HoverLink - Link with underline animation
 */
export const HoverLink: React.FC<{
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}> = ({
  children,
  href,
  className = '',
  external = false,
}) => {
  return (
    <motion.a
      href={href}
      className={`relative inline-block text-[#1a73e8] ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover="hover"
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 h-0.5 bg-[#1a73e8]"
        initial={{ width: 0 }}
        variants={{
          hover: { width: '100%' },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
};

export default HoverCard;
