import { LucideIcon } from 'lucide-react';

export interface TrustItem {
  id: string;
  label: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
  variant?: 'primary' | 'success' | 'warning' | 'neutral';
}

export interface ReviewData {
  author: string;
  rating: number;
  text: string;
  date: string;
  platform: 'Google' | 'Yelp' | 'Facebook';
}