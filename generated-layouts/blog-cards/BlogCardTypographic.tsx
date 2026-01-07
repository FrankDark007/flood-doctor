import React from 'react';
import { ArrowUpRight, Quote, Zap, Shield, Heart } from 'lucide-react';
import { BlogCardProps, Category } from './types';

const getTheme = (category: Category) => {
  switch (category) {
    case 'Emergency Guide':
      return { bg: 'bg-rose-500', icon: Zap, text: 'text-white', sub: 'text-rose-100' };
    case 'Insurance':
      return { bg: 'bg-blue-600', icon: Shield, text: 'text-white', sub: 'text-blue-100' };
    case 'Prevention':
      return { bg: 'bg-emerald-500', icon: Heart, text: 'text-white', sub: 'text-emerald-100' };
    default:
      return { bg: 'bg-indigo-600', icon: Quote, text: 'text-white', sub: 'text-indigo-100' };
  }
};

const BlogCardTypographic: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  const theme = getTheme(post.category);
  const Icon = theme.icon;

  return (
    <a 
      href={`/blog/${post.slug}`}
      className={`group relative flex flex-col justify-between p-8 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${theme.bg} ${className}`}
    >
      {/* Background decoration */}
      <Icon 
        className="absolute -bottom-8 -right-8 w-48 h-48 opacity-10 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500" 
        color="currentColor"
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className={`px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider ${theme.text}`}>
            {post.category}
          </span>
          <ArrowUpRight className={`${theme.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
        </div>

        <h3 className={`text-2xl sm:text-3xl font-bold leading-tight mb-4 ${theme.text}`}>
          {post.title}
        </h3>
      </div>

      <div className={`relative z-10 flex items-center gap-4 mt-4 text-sm font-medium ${theme.sub}`}>
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-current opacity-50" />
        <span>{post.readTime}</span>
      </div>
    </a>
  );
};

export default BlogCardTypographic;