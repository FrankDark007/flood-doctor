import React from 'react';

interface CategoryHeaderProps {
  title: string;
  productIcons?: React.ReactNode[];
}

/**
 * Category Header Component
 * Based on: workspace.google.com/blog/gmail
 *
 * Features:
 * - Product icons row
 * - Centered category title
 */
const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  productIcons,
}) => {
  return (
    <header className="py-12 md:py-16 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Product Icons */}
        {productIcons && productIcons.length > 0 && (
          <div className="flex items-center justify-center gap-4 mb-6">
            {productIcons.map((icon, i) => (
              <span key={i} className="w-12 h-12">{icon}</span>
            ))}
          </div>
        )}

        <h1 className="font-display text-4xl md:text-5xl font-bold text-text">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default CategoryHeader;
