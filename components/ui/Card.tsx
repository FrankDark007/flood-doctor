import React from 'react';

type CardVariant = 'default' | 'elevated' | 'outlined' | 'ghost' | 'interactive';
type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type CardRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  radius?: CardRadius;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: 'div' | 'article' | 'section' | 'a';
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white border border-gray-200 shadow-sm',
  elevated: 'bg-white border border-gray-100 shadow-google hover:shadow-google-hover',
  outlined: 'bg-white border border-gray-200',
  ghost: 'bg-gray-50 border border-transparent',
  interactive: 'bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer',
};

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10 md:p-12',
};

const radiusStyles: Record<CardRadius, string> = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-[32px]',
  '3xl': 'rounded-[40px]',
};

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  className = '',
  href,
  onClick,
  as = 'div',
}) => {
  const baseStyles = `${variantStyles[variant]} ${paddingStyles[padding]} ${radiusStyles[radius]}`;
  const combinedStyles = `${baseStyles} ${className}`.trim();

  // Handle link cards
  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  // Handle clickable cards
  if (onClick) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        className={combinedStyles}
      >
        {children}
      </div>
    );
  }

  // Standard card
  const Component = as;
  return <Component className={combinedStyles}>{children}</Component>;
};

export default Card;

// Preset card styles for common patterns
export const CardPresets = {
  // Service card with hover effect
  service: 'bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all',
  // Feature card with shadow
  feature: 'bg-white border border-gray-200 rounded-2xl p-8 shadow-google hover:shadow-google-hover transition-shadow',
  // Stat card (compact)
  stat: 'bg-white border border-gray-100 rounded-xl p-4 shadow-sm',
  // Info card (subtle background)
  info: 'bg-gray-50 border border-gray-100 rounded-xl p-6',
  // Alert card
  alert: 'bg-red-50 border border-red-200 rounded-xl p-6',
  // Success card
  success: 'bg-green-50 border border-green-200 rounded-xl p-6',
  // Warning card
  warning: 'bg-amber-50 border border-amber-200 rounded-xl p-6',
} as const;
