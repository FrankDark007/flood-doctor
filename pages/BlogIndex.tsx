import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import { combineSchemas, generateBreadcrumbSchema, generateOrganizationSchema } from '../utils/schema';
import { Clock, ArrowRight, Phone } from 'lucide-react';
import { BLOG_ARTICLES, getCategories } from '../data/blog-articles';

/**
 * BlogIndex - Google Workspace Blog Style Redesign
 *
 * Key changes:
 * - Real Unsplash images instead of gradient placeholders
 * - Google typography (font-normal, tracking-[-0.5px])
 * - Google colors (#202124, #5f6368, #1a73e8)
 * - 72px side margins
 * - Clean category pills
 * - Author information on cards
 */

// Map categories to relevant Unsplash images
const categoryImages: Record<string, string> = {
  'Emergency': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  'Mold': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  'Insurance': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  'Commercial': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  'Prevention': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'Biohazard': 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
  'Water Damage': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  'Default': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
};

const BlogIndex: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = useMemo(() => ['All', ...getCategories()], []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return BLOG_ARTICLES;
    return BLOG_ARTICLES.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

  const getImageForCategory = (category: string) => {
    return categoryImages[category] || categoryImages['Default'];
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Blog | Expert Guides & Prevention Tips"
        description="Expert guides on water damage restoration, mold prevention, insurance claims, and home protection. Written by IICRC-certified professionals serving Northern Virginia since 2009."
        schema={combineSchemas(
          generateBreadcrumbSchema([{ label: 'Blog', path: '/blog/' }]),
          generateOrganizationSchema()
        )}
      />

      {/* Hero Section - Google Style */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8">
            <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
            <span>/</span>
            <span className="text-[#202124]">Blog</span>
          </nav>

          <h1 className="text-[40px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] tracking-[-0.5px] mb-6">
            The Restoration Blog
          </h1>
          <p className="text-[18px] lg:text-[20px] text-[#5f6368] max-w-2xl">
            Expert advice on protecting your property from water, mold, and storm damage.
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
      <section className="py-12 lg:py-16 bg-[#f8f9fa]">
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
                to={article.slug}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Real Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={getImageForCategory(article.category)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[12px] font-medium text-[#202124]">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3 text-[12px] text-[#5f6368]">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#dadce0]" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-medium text-[#202124] mb-3 group-hover:text-[#1a73e8] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[14px] text-[#5f6368] leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#dadce0]">
                    <div className="w-8 h-8 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                      <span className="text-[12px] font-medium text-[#1a73e8]">FD</span>
                    </div>
                    <div>
                      <div className="text-[12px] font-medium text-[#202124]">Flood Doctor Team</div>
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
      <section className="py-20 lg:py-28 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h2 className="text-[36px] lg:text-[44px] font-normal text-white leading-[1.2] tracking-[-0.25px] mb-6">
            Need emergency help?
          </h2>
          <p className="text-[18px] text-white/80 mb-10">
            Our IICRC-certified crews respond 24/7. Call now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (877) 497-0007
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

export default BlogIndex;
