import React from 'react';

interface ArticleBodyProps {
  children: React.ReactNode;
}

/**
 * Article Body Component
 * Based on: workspace.google.com/blog article template
 *
 * Features:
 * - Max width 843px centered
 * - Typography styles for paragraphs, headings, links
 * - Proper spacing between elements
 */
const ArticleBody: React.FC<ArticleBodyProps> = ({ children }) => {
  return (
    <article
      className="
        max-w-[843px] mx-auto px-6 pb-16
        prose prose-lg
        prose-p:text-lg prose-p:leading-7 prose-p:text-muted prose-p:mb-6
        prose-h2:font-display prose-h2:text-[28px] prose-h2:font-medium prose-h2:text-text prose-h2:mt-12 prose-h2:mb-6
        prose-h3:font-display prose-h3:text-xl prose-h3:font-medium prose-h3:text-text prose-h3:mt-8 prose-h3:mb-4
        prose-a:text-primary prose-a:underline prose-a:font-normal
        prose-ul:my-6 prose-ul:pl-6
        prose-li:text-lg prose-li:leading-7 prose-li:text-muted prose-li:mb-2
        prose-img:rounded-2xl prose-img:my-8
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted
      "
    >
      {children}
    </article>
  );
};

export default ArticleBody;
