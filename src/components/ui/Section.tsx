import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'blue-light' | 'gradient';
  container?: 'max' | 'content' | 'narrow' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'hero';
  as?: 'section' | 'div' | 'article';
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  container = 'max',
  padding = 'lg',
  as: Component = 'section',
}) => {
  // Background colors - Exact Google values
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-[#f8f9fa]',
    'blue-light': 'bg-[#e9eef6]',
    gradient: 'bg-gradient-to-b from-white to-[#f8f9fa]',
  };

  // Container widths - Exact Google values
  // max: 1296px, content: 1069px, narrow: 567px
  const containerClasses = {
    max: `
      max-w-[1296px] mx-auto
      px-4 sm:px-8 lg:px-16
    `,
    content: `
      max-w-[1069px] mx-auto
      px-4 sm:px-6 lg:px-8
    `,
    narrow: `
      max-w-[567px] mx-auto
      px-4 sm:px-6
    `,
    none: '',
  };

  // Vertical padding - Exact Google values
  // Desktop: 96px, Tablet: 64px, Mobile: 48px
  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12 lg:py-16',
    md: 'py-12 md:py-16 lg:py-20',
    lg: 'py-12 md:py-16 lg:py-24', // 48px / 64px / 96px
    hero: 'py-12 md:py-16 lg:py-20', // 48px / 64px / 80px
  };

  return (
    <Component
      id={id}
      className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`.trim()}
    >
      <div className={containerClasses[container].replace(/\s+/g, ' ').trim()}>
        {children}
      </div>
    </Component>
  );
};

export default Section;
