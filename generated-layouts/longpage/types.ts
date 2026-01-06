import { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  details?: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}
