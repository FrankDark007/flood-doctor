import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogCardProps } from './types';

const BlogCardOverlay: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <div className={`group relative h-96 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Background Image */}
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2 py-1 text-xs font-bold text-black bg-white rounded-md uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-300 font-medium">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            <a href={`/blog/${post.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>

          <p className="text-slate-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Read Article <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardOverlay;