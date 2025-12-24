import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import { ArrowRight, Clock } from 'lucide-react';

// Blog categories
const CATEGORIES = [
  { id: 'all', label: 'All articles' },
  { id: 'water-damage', label: 'Water Damage' },
  { id: 'mold', label: 'Mold' },
  { id: 'prevention', label: 'Prevention' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'tips', label: 'Tips & Guides' },
];

// Sample blog posts (in production, this would come from a CMS)
const BLOG_POSTS = [
  {
    id: '1',
    slug: 'signs-of-water-damage',
    title: '7 Warning Signs of Hidden Water Damage in Your Home',
    excerpt: 'Water damage isn\'t always obvious. Learn to recognize the subtle signs that could indicate a serious problem lurking behind your walls.',
    category: 'water-damage',
    author: 'Dr. James Wilson',
    authorRole: 'Restoration Specialist',
    date: 'December 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: '2',
    slug: 'mold-prevention-tips',
    title: 'How to Prevent Mold Growth After Water Damage',
    excerpt: 'Quick action is crucial. Follow these steps within the first 24-48 hours to prevent mold from taking hold in your home.',
    category: 'mold',
    author: 'Sarah Chen',
    authorRole: 'Mold Remediation Expert',
    date: 'December 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: '3',
    slug: 'insurance-claims-guide',
    title: 'Complete Guide to Filing Water Damage Insurance Claims',
    excerpt: 'Navigate the insurance claims process with confidence. Everything you need to know about documentation, timing, and getting fair coverage.',
    category: 'insurance',
    author: 'Mike Thompson',
    authorRole: 'Claims Specialist',
    date: 'December 5, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: '4',
    slug: 'basement-waterproofing',
    title: 'Basement Waterproofing: Prevention vs. Reaction',
    excerpt: 'Is it better to waterproof your basement before problems occur? We break down the costs and benefits of proactive vs. reactive approaches.',
    category: 'prevention',
    author: 'Dr. James Wilson',
    authorRole: 'Restoration Specialist',
    date: 'November 28, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: '5',
    slug: 'emergency-water-shutoff',
    title: 'How to Find and Use Your Emergency Water Shutoff',
    excerpt: 'Every homeowner should know where their main water shutoff is. This quick guide could save you thousands in water damage.',
    category: 'tips',
    author: 'Sarah Chen',
    authorRole: 'Mold Remediation Expert',
    date: 'November 20, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: '6',
    slug: 'winter-pipe-protection',
    title: 'Protecting Your Pipes This Winter: A Complete Guide',
    excerpt: 'Frozen pipes are a leading cause of water damage in winter. Learn how to protect your home when temperatures drop.',
    category: 'prevention',
    author: 'Mike Thompson',
    authorRole: 'Claims Specialist',
    date: 'November 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=600&h=400&fit=crop',
    featured: false,
  },
];

const BlogIndexGoogle: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Blog & Resources | Flood Doctor"
        description="Expert insights on water damage restoration, mold prevention, insurance claims, and home maintenance from the Flood Doctor team."
      />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1
                className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-6"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Insights & guides
              </h1>
              <p className="text-lg lg:text-xl text-[#5f6368] leading-relaxed">
                Expert advice on water damage restoration, prevention tips, and industry insights from our certified specialists.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'all' && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <Link
                    to={`/blog/${post.slug}/`}
                    className="group bg-[#f8f9fa] rounded-[24px] overflow-hidden hover:shadow-lg transition-all duration-300 block h-full"
                  >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 text-xs font-medium bg-[#e8f0fe] text-[#1a73e8] rounded">
                        {CATEGORIES.find(c => c.id === post.category)?.label}
                      </span>
                      <span className="text-xs text-[#5f6368] flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-medium text-[#202124] mb-3 group-hover:text-[#1a73e8] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-[#5f6368] mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#5f6368]">
                        <span className="font-medium text-[#202124]">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <ArrowRight size={18} className="text-[#1a73e8] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="sticky top-[104px] z-20 bg-white border-b border-[#dadce0] py-4">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#202124] text-white'
                    : 'bg-[#f1f3f4] text-[#3c4043] hover:bg-[#e8eaed]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 lg:py-16 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={Math.min(index * 50, 300)}>
                <Link
                  to={`/blog/${post.slug}/`}
                  className="group bg-white rounded-[16px] overflow-hidden hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200 block h-full"
                >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 text-xs font-medium bg-[#e8f0fe] text-[#1a73e8] rounded">
                      {CATEGORIES.find(c => c.id === post.category)?.label}
                    </span>
                    <span className="text-xs text-[#5f6368]">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#5f6368] line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-[#5f6368]">
                    {post.author} • {post.date}
                  </div>
                </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-[#1a73e8] font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors">
              Load more articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[600px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4"
              style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
            >
              Stay informed
            </h2>
            <p className="text-lg text-[#5f6368] mb-8">
              Subscribe to receive the latest restoration tips, prevention guides, and industry updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-[#dadce0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#1a73e8] text-white font-medium rounded-full hover:bg-[#1557b0] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default BlogIndexGoogle;
