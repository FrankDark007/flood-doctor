/**
 * Flood Doctor Homepage V4 - Content Types
 * Google Business Profile inspired design
 */

// ============================================
// SHARED TYPES
// ============================================

export interface CTAButton {
  label: string;
  href: string;
}

// ============================================
// HERO SECTION
// ============================================

export interface HeroContent {
  headline: string;
  subheadline: string;
  searchText: string;
  ctaPrimary: CTAButton;
  ctaSecondary?: CTAButton;
}

// ============================================
// VALUE PROPS SECTION
// ============================================

export type ValuePropIcon = 'tag' | 'refresh' | 'settings';

export interface ValuePropItem {
  icon: ValuePropIcon;
  title: string;
  description: string;
}

// ============================================
// FEATURE SECTION (used twice: light + dark themes)
// ============================================

export interface FeatureListItem {
  id: string;
  title: string;
  description: string;
}

export type FeatureVisualType = 'attributes' | 'posts';

export interface FeatureSectionContent {
  title: string;
  subtitle: string;
  items: FeatureListItem[];
  visualType: FeatureVisualType;
}

// ============================================
// PRODUCT OFFERINGS SECTION
// ============================================

export type ProductType = 'services' | 'products' | 'food';

export interface ProductCard {
  id: string;
  type: ProductType;
  title: string;
  description: string;
}

// ============================================
// INSIGHTS SECTION
// ============================================

export interface InsightsContent {
  headline: string;
  description: string;
  statValue: string;
  statLabel: string;
}

// ============================================
// SUCCESS STORY / TESTIMONIALS
// ============================================

export interface Testimonial {
  id: string;
  quote: string;
  company: string;
  location: string;
  videoLabel?: string;
}

// ============================================
// FINAL STEPS SECTION
// ============================================

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface FinalStepsContent {
  headline: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  steps: StepItem[];
}

// ============================================
// FAQ SECTION
// ============================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ============================================
// ROOT CONTENT TYPE
// ============================================

export interface HomeV4Content {
  hero: HeroContent;
  valueProps: ValuePropItem[];
  feature1: FeatureSectionContent;
  feature2: FeatureSectionContent;
  products: ProductCard[];
  insights: InsightsContent;
  testimonials: Testimonial[];
  finalSteps: FinalStepsContent;
  faq: FAQItem[];
}
