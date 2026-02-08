/**
 * Service Detail Page Types
 * Based on Google Keyword Planner design
 */

export interface ServiceHeroContent {
  /** Service title (e.g., "Water Damage Restoration") */
  title: string;
  /** Compelling headline for the hero */
  headline: string;
  /** Service description */
  description: string;
  /** Hero image path (JPG) */
  heroImage: string;
  /** Hero image WebP path */
  heroImageWebp: string;
  /** Alt text for hero image */
  heroImageAlt: string;
  /** Primary CTA text */
  ctaText: string;
  /** Primary CTA href */
  ctaHref: string;
  /** Emergency phone number */
  phone: string;
  /** Trust badges */
  badges: Array<{
    icon: 'clock' | 'shield' | 'star' | 'phone' | 'check';
    text: string;
  }>;
}

export interface ProcessTab {
  id: string;
  title: string;
  headline: string;
  description: string;
  /** Icon name for the tab visual */
  icon: 'search' | 'droplet' | 'wind' | 'check' | 'clipboard' | 'tool';
  /** Stats or highlights for this step */
  highlights?: Array<{
    label: string;
    value: string;
  }>;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  /** Icon for the step */
  icon?: 'phone' | 'clipboard' | 'tool' | 'home' | 'check';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

/**
 * WhyChooseTab - For ServiceTabs "Why Choose Flood Doctor?" section
 * Maps to TabItem from generated-layouts/service-page/types.ts
 */
export interface WhyChooseTab {
  id: string;
  icon: 'Cpu' | 'FileText' | 'Users' | 'Shield';
  label: string;
  title: string;
  description: string;
  listItems: string[];
}

/**
 * RelatedService - For related services cards
 */
export interface RelatedService {
  title: string;
  slug: string;
  description: string;
  icon?: string;
}

/**
 * GettingStartedContent - For Getting Started section
 */
export interface GettingStartedContent {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  ctaText: string;
  ctaHref: string;
  phone: string;
}

/**
 * ExpertPartnershipContent - For Expert Partnership CTA section
 */
export interface ExpertPartnershipContent {
  title: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  phone: string;
}

export interface ServicePageContent {
  /** Service slug for ProcessFlow component */
  serviceSlug: string;
  hero: ServiceHeroContent;
  /** Auto-cycling process tabs (like Google's Discover/Research/Estimate/Plan) */
  processTabs: ProcessTab[];
  /** Why Choose Flood Doctor tabs (for ServiceTabs component) */
  whyChooseTabs: WhyChooseTab[];
  /** Getting Started section content */
  gettingStarted: GettingStartedContent;
  /** Expert Partnership CTA content */
  expertPartnership: ExpertPartnershipContent;
  /** FAQ items */
  faqs: FAQ[];
  /** Customer testimonials */
  testimonials?: Testimonial[];
  /** Related services */
  relatedServices: RelatedService[];
  /** SEO */
  meta: {
    title: string;
    description: string;
  };
}
