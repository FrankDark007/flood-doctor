import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Hero from '../components/sections/Hero';

const BlogIndex: React.FC = () => {
  const posts = [
      {
          title: "What to do immediately after a pipe burst",
          excerpt: "Time is critical. Follow these 5 steps to minimize water damage before the professionals arrive.",
          date: "Oct 12, 2023",
          category: "Guides"
      },
      {
          title: "Understanding mold growth in basements",
          excerpt: "Why mold loves Northern Virginia basements and how to prevent it permanently.",
          date: "Sep 28, 2023",
          category: "Prevention"
      },
      {
          title: "Does homeowners insurance cover flooding?",
          excerpt: "A breakdown of standard policies versus flood insurance and what you need to know.",
          date: "Sep 15, 2023",
          category: "Insurance"
      }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Restoration Blog" description="Tips, guides, and news about water damage restoration and home maintenance." />
      
      <Hero 
        title="The Restoration Blog" 
        subtitle="Expert advice on protecting your property from water, mold, and storm damage."
      />

      <div className="py-20 bg-subtle/30 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {posts.map((post, i) => (
                      <article key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="h-48 bg-gray-100"></div>
                          <div className="p-6">
                              <div className="flex items-center gap-3 mb-3 text-xs font-medium uppercase tracking-wide">
                                  <span className="text-primary">{post.category}</span>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-gray-500">{post.date}</span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary cursor-pointer">
                                  {post.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                  {post.excerpt}
                              </p>
                              <span className="text-sm font-medium text-primary cursor-pointer">Read article &rarr;</span>
                          </div>
                      </article>
                  ))}
              </div>
          </div>
      </div>
    </main>
  );
};

export default BlogIndex;