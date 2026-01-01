import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: 'white' | 'gray' | 'subtle';
  width?: 'full' | 'standard' | 'narrow';
  borderTop?: boolean;
  borderBottom?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = '', 
  bg = 'white', 
  width = 'standard',
  borderTop = false,
  borderBottom = false
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    subtle: 'bg-subtle/30',
  };

  const widthClasses = {
    full: 'w-full',
    standard: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  };

  const borderClasses = `
    ${borderTop ? 'border-t border-gray-100' : ''}
    ${borderBottom ? 'border-b border-gray-100' : ''}
  `.trim();

  return (
    <section 
      id={id} 
      className={`py-12 md:py-20 lg:py-24 ${bgClasses[bg]} ${borderClasses} ${className}`}
    >
      <div className={widthClasses[width]}>
        {children}
      </div>
    </section>
  );
};

export default Section;