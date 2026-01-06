import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { BlogCardProps } from '../types';

const BlogCardStandard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 ${className}`}>
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase bg-indigo-600/90 rounded-full backdrop-blur-sm shadow-sm">
            {post.category}
          </span>
        </div>
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
          <a href={`/blog/${post.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </a>
        </h3>

        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>

        <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between">
          {post.author && (
            <div className="flex items-center gap-2">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-xs font-medium text-slate-700">{post.author.name}</span>
            </div>
          )}
           <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 inline-flex items-center gap-1">
             Read Article
           </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCardStandard;