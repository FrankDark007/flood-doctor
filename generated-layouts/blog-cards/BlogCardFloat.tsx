import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogCardProps } from '../types';

const BlogCardFloat: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <div className={`group flex flex-col ${className}`}>
      {/* Image Block */}
      <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-sm">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Floating Content Block */}
      <div className="relative z-10 -mt-16 mx-4 p-6 bg-white rounded-xl shadow-lg border border-slate-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
          <a href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
            {post.title}
          </a>
        </h3>

        <p className="text-slate-500 text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <a href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
          Read More <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default BlogCardFloat;