import React from 'react';

interface EnhancedSectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'subtle' | 'accent' | 'dark';
  className?: string;
  id?: string;
  narrow?: boolean;
}

/**
 * EnhancedSection - A reusable section wrapper with visual variants
 * for creating engaging page layouts with varying backgrounds
 */
const EnhancedSection: React.FC<EnhancedSectionProps> = ({
  children,
  variant = 'default',
  className = '',
  id,
  narrow = false
}) => {
  const variantStyles: Record<string, string> = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30',
    subtle: 'bg-slate-50/70',
    accent: 'bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/30',
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${variantStyles[variant]} ${className}`}
    >
      <div className={`mx-auto px-6 ${narrow ? 'max-w-4xl' : 'max-w-6xl'}`}>
        {children}
      </div>
    </section>
  );
};

export default EnhancedSection;
