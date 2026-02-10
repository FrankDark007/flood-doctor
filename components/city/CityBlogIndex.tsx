// components/city/CityBlogIndex.tsx
// City-specific blog listing page component

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../ui/PageMeta';
import { Clock, ArrowRight, Phone } from 'lucide-react';

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

interface CityBlogIndexProps {
  cityName: string;
  citySlug: string;
  articles: BlogArticle[];
  phone: string;
}

// Map categories to relevant Unsplash images
const categoryImages: Record<string, string> = {
  'Emergency Response': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  'Mold Prevention': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  'Water Damage Prevention': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'Insurance': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  'New Construction': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  'Commercial': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  'Basement Flooding': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  'Plumbing': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  'Default': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
};

const CityBlogIndex: React.FC<CityBlogIndexProps> = ({
  cityName,
  citySlug,
  articles,
  phone
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = [...new Set(articles.map(a => a.meta.category))];
    return ['All', ...cats.sort()];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return articles;
    return articles.filter(a => a.meta.category === selectedCategory);
  }, [selectedCategory, articles]);

  const getImageForCategory = (category: string) => {
    return categoryImages[category] || categoryImages['Default'];
  };

  const getSlugFromCanonical = (canonical: string) => {
    const parts = canonical.split('/');
    return parts[parts.length - 1];
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadTime = (article: BlogArticle) => {
    const text = article.content.introduction +
      article.content.sections.map(s => s.content).join(' ') +
      article.content.conclusion;
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Water Damage Blog | ${cityName} Restoration Tips | Flood Doctor`}
        description={`Expert water damage restoration guides for ${cityName} homeowners. Prevention tips, emergency response, mold prevention, and local insights from IICRC-certified professionals.`}
      />

      {/* Hero Section - Google Style */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8">
            <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
            <span>/</span>
            <Link to={`/${citySlug}`} className="hover:text-[#1a73e8]">{cityName}</Link>
            <span>/</span>
            <span className="text-[#202124]">Blog</span>
          </nav>

          <h1 className="text-[40px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] tracking-[-0.5px] mb-6">
            {cityName} Water Damage Blog
          </h1>
          <p className="text-[18px] lg:text-[20px] text-[#5f6368] max-w-2xl">
            Local insights on water damage prevention, emergency response, and home protection for {cityName} homeowners.
          </p>
        </div>
      </section>

      {/* Category Filter - Google Style Pills */}
      <div className="border-b border-[#dadce0] bg-white sticky top-20 z-10">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1a73e8] text-white'
                    : 'bg-[#f8f9fa] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-20 lg:py-24 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="mb-8">
            <p className="text-[14px] text-[#5f6368]">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <Link
                key={i}
                to={`/city/${citySlug}/blog/${getSlugFromCanonical(article.meta.canonical)}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={getImageForCategory(article.meta.category)}
                    alt={article.h1}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[12px] font-medium text-[#202124]">
                      {article.meta.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3 text-[12px] text-[#5f6368]">
                    <span>{formatDate(article.meta.publishDate)}</span>
                    <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {estimateReadTime(article)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-medium text-[#202124] mb-3 group-hover:text-[#1a73e8] transition-colors line-clamp-2">
                    {article.h1}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[14px] text-[#5f6368] leading-relaxed mb-4 line-clamp-2">
                    {article.content.introduction.substring(0, 150)}...
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#dadce0]">
                    <div className="w-8 h-8 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                      <span className="text-[12px] font-medium text-[#1a73e8]">FD</span>
                    </div>
                    <div>
                      <div className="text-[12px] font-medium text-[#202124]">{article.meta.author}</div>
                      <div className="text-[11px] text-[#5f6368]">IICRC Certified</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Google Blue */}
      <section className="py-20 lg:py-24 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h2 className="text-[36px] lg:text-[44px] font-normal text-white leading-[1.2] tracking-[-0.25px] mb-6">
            Water emergency in {cityName}?
          </h2>
          <p className="text-[18px] text-white/80 mb-10">
            Our IICRC-certified crews respond 24/7 throughout {cityName}. Call now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
            >
              <Phone size={18} className="mr-2" />
              {phone}
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium px-8 h-12 rounded-full transition-colors"
            >
              Request service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CityBlogIndex;
