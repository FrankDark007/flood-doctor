// components/city/CityBlogArticle.tsx
// City-specific blog article page renderer

import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../ui/PageMeta';
import BlogPostingSchema from '../seo/BlogPostingSchema';
import { Clock, Phone, ArrowLeft } from 'lucide-react';

interface BlogArticle {
  meta: {
    title: string;
    description: string;
    canonical: string;
    publishDate: string;
    author: string;
    category: string;
  };
  h1: string;
  heroSection: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
  };
  content: {
    introduction: string;
    sections: Array<{ heading: string; content: string }>;
    conclusion: string;
  };
  callToAction: {
    headline: string;
    text: string;
    phone: string;
  };
  breadcrumbs: Array<{ label: string; url: string }>;
}

interface CityBlogArticleProps {
  article: BlogArticle;
  cityName: string;
  citySlug: string;
  relatedArticles?: BlogArticle[];
}

// Safe markdown parser that returns React elements
const parseMarkdownContent = (content: string): React.ReactNode[] => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const flushList = () => {
    if (listItems.length > 0 && listType) {
      const ListTag = listType === 'ul' ? 'ul' : 'ol';
      elements.push(
        <ListTag key={`list-${elements.length}`} className={listType === 'ul' ? 'list-disc ml-6 mb-4' : 'list-decimal ml-6 mb-4'}>
          {listItems.map((item, i) => (
            <li key={i} className="mb-1">{parseBoldText(item)}</li>
          ))}
        </ListTag>
      );
      listItems = [];
      listType = null;
    }
  };

  const parseBoldText = (text: string): React.ReactNode => {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  };

  lines.forEach((line, i) => {
    // Unordered list items
    if (line.startsWith('- ')) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(line.substring(2));
      return;
    }

    // Ordered list items
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)/);
    if (numberedMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(numberedMatch[2]);
      return;
    }

    // Not a list item - flush any pending list
    flushList();

    // Regular paragraph
    if (line.trim()) {
      elements.push(
        <p key={`p-${i}`} className="mb-4">{parseBoldText(line)}</p>
      );
    }
  });

  // Flush any remaining list items
  flushList();

  return elements;
};

const CityBlogArticle: React.FC<CityBlogArticleProps> = ({
  article,
  cityName,
  citySlug,
  relatedArticles = []
}) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadTime = () => {
    const text = article.content.introduction +
      article.content.sections.map(s => s.content).join(' ') +
      article.content.conclusion;
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  const getWordCount = () => {
    const text = article.content.introduction +
      article.content.sections.map(s => s.content).join(' ') +
      article.content.conclusion;
    return text.split(/\s+/).length;
  };

  const getSlugFromCanonical = (canonical: string) => {
    const parts = canonical.split('/');
    return parts[parts.length - 1];
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={article.meta.title}
        description={article.meta.description}
        canonical={article.meta.canonical}
      />

      <BlogPostingSchema
        title={article.meta.title}
        description={article.meta.description}
        url={article.meta.canonical}
        datePublished={article.meta.publishDate}
        authorName={article.meta.author}
        wordCount={getWordCount()}
        keywords={[cityName, 'water damage', article.meta.category]}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px]">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8 flex-wrap">
            {article.breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span>/</span>}
                {i === article.breadcrumbs.length - 1 ? (
                  <span className="text-[#202124]">{crumb.label}</span>
                ) : (
                  <Link to={crumb.url} className="hover:text-[#1a73e8]">{crumb.label}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1.5 bg-[#e8f0fe] text-[#1a73e8] rounded-full text-[12px] font-medium">
              {article.meta.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[32px] lg:text-[48px] font-normal text-[#202124] leading-[1.15] tracking-[-0.5px] mb-6">
            {article.h1}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-[14px] text-[#5f6368] mb-8">
            <span>{formatDate(article.meta.publishDate)}</span>
            <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {estimateReadTime()}
            </span>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 border-b border-[#dadce0]">
            <div className="w-12 h-12 rounded-full bg-[#e8f0fe] flex items-center justify-center">
              <span className="text-[16px] font-medium text-[#1a73e8]">FD</span>
            </div>
            <div>
              <div className="text-[15px] font-medium text-[#202124]">{article.meta.author}</div>
              <div className="text-[13px] text-[#5f6368]">IICRC Certified Restoration Professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#fef7e0] border-y border-[#fdd835]/30">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px] py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[14px] text-[#202124]">
              <strong>Water emergency in {cityName}?</strong> We respond 24/7.
            </p>
            <a
              href={`tel:${article.callToAction.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a73e8] text-white rounded-full text-[14px] font-medium hover:bg-[#1557b0] transition-colors"
            >
              <Phone size={16} />
              {article.callToAction.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px]">
          {/* Introduction */}
          <div className="text-[18px] lg:text-[20px] text-[#202124] leading-relaxed mb-10">
            {article.content.introduction.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </div>

          {/* Sections */}
          {article.content.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-[24px] lg:text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b-4 border-[#1a73e8]">
                {section.heading}
              </h2>
              <div className="text-[16px] text-[#202124] leading-relaxed">
                {parseMarkdownContent(section.content)}
              </div>
            </section>
          ))}

          {/* Conclusion */}
          <section className="mb-10 p-6 bg-[#f8f9fa] rounded-xl">
            <h2 className="text-[20px] font-medium text-[#202124] mb-4">Key Takeaways</h2>
            <div className="text-[16px] text-[#202124] leading-relaxed">
              {article.content.conclusion.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4 last:mb-0">{para}</p>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h2 className="text-[32px] lg:text-[40px] font-normal text-white leading-[1.2] tracking-[-0.25px] mb-6">
            {article.callToAction.headline}
          </h2>
          <p className="text-[18px] text-white/80 mb-8">
            {article.callToAction.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${article.callToAction.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
            >
              <Phone size={18} className="mr-2" />
              {article.callToAction.phone}
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium px-8 h-12 rounded-full transition-colors"
            >
              Request service online
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 lg:py-24 bg-[#f8f9fa]">
          <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
            <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-8">
              More from {cityName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((related, i) => (
                <Link
                  key={i}
                  to={`/city/${citySlug}/blog/${getSlugFromCanonical(related.meta.canonical)}`}
                  className="group bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <span className="inline-block px-2 py-1 bg-[#f8f9fa] text-[#5f6368] rounded text-[11px] font-medium mb-3">
                    {related.meta.category}
                  </span>
                  <h3 className="text-[16px] font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors line-clamp-2">
                    {related.h1}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8 bg-white border-t border-[#dadce0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px]">
          <Link
            to={`/city/${citySlug}/blog`}
            className="inline-flex items-center gap-2 text-[#1a73e8] hover:text-[#1557b0] text-[14px] font-medium"
          >
            <ArrowLeft size={16} />
            Back to {cityName} Blog
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CityBlogArticle;
