import React from 'react';

interface NewsletterSidebarProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onSubscribe?: () => void;
}

/**
 * Newsletter Sidebar Component
 * Based on: workspace.google.com/blog article template
 *
 * Features:
 * - Fixed position on left side (desktop only)
 * - Newsletter signup CTA
 * - Primary button
 */
const NewsletterSidebar: React.FC<NewsletterSidebarProps> = ({
  title = 'Get the latest updates',
  description = 'Subscribe to our newsletter for tips and insights.',
  buttonText = 'Sign up',
  onSubscribe,
}) => {
  return (
    <aside className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-[240px] z-10">
      <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
        <h3 className="font-display text-xl font-medium text-text mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted mb-4">
          {description}
        </p>
        <button
          onClick={onSubscribe}
          className="
            w-full h-10 px-4
            bg-primary hover:bg-primary-hover
            text-white text-sm font-medium uppercase tracking-wide
            rounded-full
            transition-colors duration-200
          "
        >
          {buttonText}
        </button>
      </div>
    </aside>
  );
};

export default NewsletterSidebar;
