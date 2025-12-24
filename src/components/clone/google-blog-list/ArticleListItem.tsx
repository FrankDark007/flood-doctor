import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleListItemProps {
  title: string;
  category: string;
  author: string;
  readTime: string;
  href: string;
  thumbnailSrc?: string;
  categoryIcon?: React.ReactNode;
}

/**
 * Article List Item Component
 * Based on: workspace.google.com/blog/gmail
 *
 * Features:
 * - Horizontal layout with thumbnail
 * - Category badge
 * - Author and read time meta
 */
const ArticleListItem: React.FC<ArticleListItemProps> = ({
  title,
  category,
  author,
  readTime,
  href,
  thumbnailSrc,
  categoryIcon,
}) => {
  return (
    <Link
      to={href}
      className="
        group flex flex-col md:flex-row gap-6 md:gap-8
        py-8 border-b border-border
        hover:bg-subtle/50 -mx-4 px-4 rounded-lg
        transition-colors duration-200
      "
    >
      {/* Content */}
      <div className="flex-1">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded mb-4">
          {categoryIcon && <span className="w-5 h-5">{categoryIcon}</span>}
          <span className="text-sm font-medium text-muted">{category}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-[28px] leading-tight font-normal text-text mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Meta */}
        <p className="text-sm text-muted">
          By {author} • {readTime}
        </p>
      </div>

      {/* Thumbnail */}
      {thumbnailSrc && (
        <div className="w-full md:w-[220px] shrink-0">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-subtle">
            <img
              src={thumbnailSrc}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </Link>
  );
};

export default ArticleListItem;
