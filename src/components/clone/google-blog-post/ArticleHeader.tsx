import React from 'react';

interface ArticleHeaderProps {
  category: string;
  title: string;
  date: string;
  categoryIcon?: React.ReactNode;
}

/**
 * Article Header Component
 * Based on: workspace.google.com/blog article template
 *
 * Features:
 * - Centered layout
 * - Category badge with optional icon
 * - Large title (48px)
 * - Date display
 */
const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  category,
  title,
  date,
  categoryIcon,
}) => {
  return (
    <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-8 text-center">
      {/* Category Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border rounded mb-6">
        {categoryIcon && <span className="w-5 h-5">{categoryIcon}</span>}
        <span className="text-base font-medium text-muted">{category}</span>
      </div>

      {/* Title */}
      <h1 className="font-display text-4xl md:text-[48px] md:leading-[56px] font-bold text-text max-w-[1070px] mx-auto mb-4">
        {title}
      </h1>

      {/* Date */}
      <p className="text-sm text-muted">{date}</p>
    </header>
  );
};

export default ArticleHeader;
