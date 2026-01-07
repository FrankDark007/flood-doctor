import React from 'react';
import { ArrowRight, BookOpen, Shield, AlertTriangle, LifeBuoy, LucideIcon } from 'lucide-react';
import { ResourceCardProps, Category } from './types';

// Helper to map categories to icons
const getCategoryIcon = (category: Category): LucideIcon => {
  switch (category) {
    case 'Tips':
      return BookOpen;
    case 'Emergency Guide':
      return AlertTriangle;
    case 'Insurance':
      return Shield;
    case 'Prevention':
      return LifeBuoy;
    default:
      return BookOpen;
  }
};

// Helper for icon colors
const getCategoryColor = (category: Category) => {
  switch (category) {
    case 'Emergency Guide':
      return 'bg-red-50 text-red-600 group-hover:bg-red-100';
    case 'Insurance':
      return 'bg-blue-50 text-blue-600 group-hover:bg-blue-100';
    case 'Prevention':
      return 'bg-green-50 text-green-600 group-hover:bg-green-100';
    default:
      return 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100';
  }
};

const ResourceCard: React.FC<ResourceCardProps> = ({ post, className = '' }) => {
  const Icon = getCategoryIcon(post.category);
  const colorClass = getCategoryColor(post.category);

  return (
    <div className={`group flex flex-col p-6 bg-white rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-lg transition-all duration-300 ${className}`}>
      
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 rounded-xl transition-colors duration-300 ${colorClass}`}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
          {post.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
        {post.title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {post.excerpt}
      </p>

      <a 
        href={`/guides/${post.slug}`} 
        className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
      >
        Read Guide
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default ResourceCard;