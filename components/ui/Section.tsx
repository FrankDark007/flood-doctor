import React from 'react';

type SectionBackground = 'white' | 'gray' | 'subtle' | 'dark' | 'primary' | 'gradient';
type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type SectionWidth = 'narrow' | 'standard' | 'wide' | 'full';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  // Legacy props (backward compatible)
  bg?: SectionBackground;
  width?: SectionWidth;
  borderTop?: boolean;
  borderBottom?: boolean;
  // New enhanced props
  background?: SectionBackground;
  padding?: SectionPadding;
  border?: 'none' | 'top' | 'bottom' | 'both';
  as?: 'section' | 'div' | 'article' | 'aside';
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  subtle: 'bg-subtle/30',
  dark: 'bg-text text-white',
  primary: 'bg-primary text-white',
  gradient: 'bg-gradient-to-br from-slate-50 to-white',
};

const paddingStyles: Record<SectionPadding, string> = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-12 md:py-20 lg:py-24',
  xl: 'py-20 md:py-24 lg:py-32',
};

const widthStyles: Record<SectionWidth, string> = {
  narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  standard: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  wide: 'max-w-[1440px] mx-auto px-6',
  full: 'w-full px-6',
};

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  // Legacy props with defaults
  bg,
  width = 'standard',
  borderTop = false,
  borderBottom = false,
  // New props
  background,
  padding = 'lg',
  border = 'none',
  as: Component = 'section',
}) => {
  // Use new props if provided, fall back to legacy
  const bgClass = backgroundStyles[background || bg || 'white'];
  const paddingClass = paddingStyles[padding];
  const widthClass = widthStyles[width];

  // Handle border styles (support both legacy and new API)
  let borderClass = '';
  if (border !== 'none') {
    borderClass = {
      top: 'border-t border-gray-100',
      bottom: 'border-b border-gray-100',
      both: 'border-y border-gray-100',
    }[border];
  } else {
    // Legacy border handling
    if (borderTop) borderClass += ' border-t border-gray-100';
    if (borderBottom) borderClass += ' border-b border-gray-100';
  }

  return (
    <Component
      id={id}
      className={`${paddingClass} ${bgClass} ${borderClass.trim()} ${className}`}
    >
      <div className={widthClass}>
        {children}
      </div>
    </Component>
  );
};

export default Section;

// Section header component for consistent headings
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  accent?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'left',
  size = 'md',
  accent = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  const maxWidth = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
  };

  const accentBorder = accent ? 'pb-4 border-b-4 border-[#1a73e8]' : '';

  return (
    <div className={`${alignClass} ${maxWidth} mb-12 ${className}`}>
      <h2 className={`font-display ${titleSizes[size]} font-medium text-text mb-4 ${accentBorder}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-lg text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Grid layouts for common patterns
interface SectionGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SectionGrid: React.FC<SectionGridProps> = ({
  children,
  columns = 3,
  gap = 'md',
  className = '',
}) => {
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  };

  return (
    <div className={`grid ${columnStyles[columns]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
};
