// components/seo/BlogPostingSchema.tsx
// JSON-LD BlogPosting schema for SEO

import React from 'react';

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  publisherName?: string;
  publisherLogo?: string;
  image?: string;
  articleBody?: string;
  wordCount?: number;
  keywords?: string[];
}

const BlogPostingSchema: React.FC<BlogPostingSchemaProps> = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  publisherName = 'Flood Doctor',
  publisherLogo = 'https://flood.doctor/logo.png',
  image = 'https://flood.doctor/images/blog-default.jpg',
  articleBody,
  wordCount,
  keywords = []
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://flood.doctor'
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo
      }
    },
    image: {
      '@type': 'ImageObject',
      url: image
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    ...(articleBody && { articleBody }),
    ...(wordCount && { wordCount }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') })
  };

  // Create script element safely
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'blog-posting-schema';

    // Remove existing schema if present
    const existing = document.getElementById('blog-posting-schema');
    if (existing) existing.remove();

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('blog-posting-schema');
      if (el) el.remove();
    };
  }, [schema]);

  return null;
};

export default BlogPostingSchema;
