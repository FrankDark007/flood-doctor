import { LucideIcon } from 'lucide-react';

export interface Badge {
  text: string;
  icon: string; // Identifying string for icon mapping
}

export interface QuickFact {
  label: string;
  value: string;
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface PricingItem {
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  disclaimer?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProblemSolution {
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    points: string[];
  };
}

export interface TabItem {
  id: string;
  label: string;
  title: string;
  description: string;
  listItems: string[];
  icon: string;
}

export interface ContentSection {
  heading: string;
  content: string[]; // Array of paragraphs
}

export interface Testimonial {
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface ServicePageData {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  badges: Badge[];
  quickFacts: QuickFact[];
  problemSolution: ProblemSolution;
  tabs: TabItem[];
  process: ProcessStep[];
  detailedContent: ContentSection[];
  testimonials: Testimonial[];
  pricing: PricingItem;
  faqs: FAQItem[];
  emergencyPhone: string;
}