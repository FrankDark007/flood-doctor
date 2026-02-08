/**
 * Service Page Template Types
 * Google-inspired layout with Flood Doctor content
 */

export interface ServiceHeroContent {
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  phoneNumber?: string;
  heroImage?: string;
}

export interface ProcessStep {
  title: string;
  image: string;
  tasks: string[];
  color: string;
}

export interface ServiceFeatureTab {
  id: string;
  title: string;
  headline: string;
  description: string;
  image: string;
}

export interface WhyChooseItem {
  text: string;
}

export interface RelatedService {
  title: string;
  description: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GettingStartedStep {
  number: number;
  title: string;
  description: string;
}

export interface GettingStartedContent {
  headline: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  steps: GettingStartedStep[];
}

export interface ServicePageContent {
  hero: ServiceHeroContent;
  featureTabs: ServiceFeatureTab[];
  whyChooseHeadline: string;
  whyChooseItems: WhyChooseItem[];
  gettingStarted: GettingStartedContent;
  relatedServices: RelatedService[];
  faqs: FAQItem[];
}
