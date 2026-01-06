import React from 'react';
import { BlogCardProps } from '../types';

const BlogCardBrutalist: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <a 
      href={`/blog/${post.slug}`}
      className={`group block bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 ${className}`}
    >
      <div className="relative h-48 border-b-2 border-slate-900 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute top-0 right-0 bg-yellow-300 border-l-2 border-b-2 border-slate-900 px-3 py-1.5">
          <span className="text-xs font-black uppercase tracking-widest text-slate-900">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3 border-b-2 border-slate-100 pb-2">
          <span className="text-xs font-mono font-bold text-slate-500">
            {post.date}
          </span>
          <span className="text-xs font-mono font-bold text-slate-500">
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">
          {post.title}
        </h3>
        
        <p className="text-sm font-medium text-slate-600 line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
};

export default BlogCardBrutalist;