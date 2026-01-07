import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BlogCardProps } from './types';

const BlogCardMinimal: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <a 
      href={`/blog/${post.slug}`}
      className={`group block p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:ring-2 hover:ring-indigo-100 transition-all duration-300 ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
          {post.category}
        </span>
        <span className="text-xs text-slate-400">
          {post.readTime}
        </span>
      </div>
      
      <div className="mb-2">
        <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors pr-6">
          {post.title}
        </h3>
      </div>
      
      <p className="text-sm text-slate-600 line-clamp-2 mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-end">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </a>
  );
};

export default BlogCardMinimal;