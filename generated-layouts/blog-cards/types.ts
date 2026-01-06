import { LucideIcon } from 'lucide-react';

export type Category = 'Tips' | 'Emergency Guide' | 'Insurance' | 'Prevention';

export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: string; // e.g., "5 min read"
  date: string;
  imageUrl: string;
  slug: string;
  author?: Author;
}

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export interface ResourceCardProps extends BlogCardProps {
  icon?: LucideIcon;
}