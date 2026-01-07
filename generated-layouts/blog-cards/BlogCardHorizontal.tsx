import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogCardProps } from './types';

const BlogCardHorizontal: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <article className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-100 grid md:grid-cols-2 ${className}`}>
      
      {/* Image Side */}
      <div className="relative h-56 md:h-full overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Content Side */}
      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h3>

        <p className="text-slate-600 mb-6 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center text-indigo-600 font-semibold group/link">
          Read full story
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default BlogCardHorizontal;