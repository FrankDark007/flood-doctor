import React from 'react';
import { Calendar } from 'lucide-react';
import { BlogCardProps } from './types';

const BlogCardCompact: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <article className={`group flex gap-4 bg-white p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 border border-transparent hover:border-slate-200 ${className}`}>
      <div className="shrink-0 relative w-24 h-24 rounded-lg overflow-hidden bg-slate-100">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
            {post.category}
          </span>
          <span className="text-[10px] text-slate-400 flex items-center gap-1">
            <span className="w-0.5 h-0.5 bg-slate-300 rounded-full" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h3>

        <div className="mt-auto flex items-center gap-1.5 text-xs text-slate-500">
          <Calendar size={12} />
          {post.date}
        </div>
      </div>
    </article>
  );
};

export default BlogCardCompact;