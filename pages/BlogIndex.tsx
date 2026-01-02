import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import Hero from '../components/sections/Hero';
import { Clock, ArrowRight, Filter } from 'lucide-react';
import { BLOG_ARTICLES, getCategories } from '../data/blog-articles';

const BlogIndex: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = useMemo(() => ['All', ...getCategories()], []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return BLOG_ARTICLES;
    return BLOG_ARTICLES.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Blog | Expert Guides & Prevention Tips"
        description="Expert guides on water damage restoration, mold prevention, insurance claims, and home protection. Written by IICRC-certified professionals serving Northern Virginia since 2009."
      />

      <Hero
        title="The Restoration Blog"
        subtitle="Expert advice on protecting your property from water, mold, and storm damage."
      />

      {/* Category Filter */}
      <div className="border-b border-gray-100 bg-white sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            <Filter size={16} className="text-gray-400 shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-12 bg-subtle/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-500">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, i) => (
              <Link
                key={i}
                to={article.slug}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                {/* Image placeholder with gradient based on category */}
                <div className={`h-48 relative overflow-hidden ${
                  article.category === 'Emergency' ? 'bg-gradient-to-br from-red-500 to-orange-500' :
                  article.category === 'Mold' ? 'bg-gradient-to-br from-emerald-500 to-teal-500' :
                  article.category === 'Insurance' ? 'bg-gradient-to-br from-purple-500 to-indigo-500' :
                  article.category === 'Commercial' ? 'bg-gradient-to-br from-slate-600 to-slate-700' :
                  article.category === 'Prevention' ? 'bg-gradient-to-br from-amber-500 to-yellow-500' :
                  article.category === 'Biohazard' ? 'bg-gradient-to-br from-rose-600 to-red-700' :
                  'bg-gradient-to-br from-blue-500 to-blue-600'
                }`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read article
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Emergency Water Damage Help?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our IICRC-certified crews respond 24/7. Call now for immediate assistance
            or request a free damage assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-colors"
            >
              Call (877) 497-0007
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogIndex;
