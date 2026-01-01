
export type ServiceAudience = 'RESIDENTIAL' | 'COMMERCIAL';
export type ServiceCategory = 'RESTORATION' | 'CLEANUP' | 'SPECIALTY' | 'TECHNICAL';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSectionCard {
  title: string;
  content: string;
  icon?: string;
}

export interface ServiceContentSections {
  heading: string;
  intro: string;
  cards: ContentSectionCard[];
}

export interface ServiceData {
  id: string;
  title: string;
  slug: string; // Full path
  shortDescription: string;
  audience: ServiceAudience;
  category: ServiceCategory;
  
  // SEO Fields
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  
  // Rich Content Fields
  heroHeading?: string; // Custom H1
  heroIntro?: string; // First paragraph content
  heroVisualKey?: string; // Key to map to SVG component in ServiceDetail
  thumbVisualKey?: string; // Key to map to SVG component in Service Cards (Archive)
  
  // Content Sections with Optional Intros
  intro_whenToCall?: string;
  whenToCall?: string[]; // Bullets
  
  // New SEO Content Section (Sticky Scroll)
  contentSections?: ServiceContentSections;
  
  intro_whatWeDo?: string;
  whatWeDo?: string[]; // Bullets
  
  whatToExpect?: {
    timeline: string;
    arrival: string;
    daily: string;
    noise?: string;
  };
  
  intro_safety?: string;
  safety?: {
    head?: string;
    items: string[];
    kidsPets?: string;
  };
  
  intro_scenarios?: string;
  scenarios?: string[]; // Bullets
  
  saveVsRemove?: {
    save: string[];
    remove: string[];
  };

  faqs?: FAQItem[];
  relatedSearchTerms?: string[];
  
  infographicType?: 'DRYING_TREND' | 'FLOOD_TIMELINE' | 'SEWAGE_CONTAINMENT' | 'MOLD_AIRFLOW' | 'STRUCTURAL_DRYING';
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface LocationData {
  title: string;
  slug: string; // Internal path (e.g., /locations/ashburn/)
  url: string; // External subdomain
  region: 'NOVA' | 'NEARBY';
  path?: string; // Internal fallback (deprecated, use slug)
  county?: string;
  zip?: string;
  population?: string;
  responseTime?: string;
  description?: string;
  faqs?: FAQItem[];
  // Geo data for schema.org LocalBusiness
  geo?: GeoCoordinates;
}

/**
 * Extended location data for subdomain architecture
 * Includes rich local content for SEO
 */
export interface ExtendedLocationData extends LocationData {
  // Subdomain key (e.g., 'fairfax' -> fairfax.flood.doctor)
  subdomain: string;

  // Local context for SEO content
  neighborhoods?: string[];
  landmarks?: string[];
  commonIssues?: string[];

  // Top services for this area (prioritized)
  topServices?: Array<{
    title: string;
    path: string;
    reason?: string;
  }>;

  // Local testimonials
  testimonials?: Array<{
    quote: string;
    author: string;
    neighborhood?: string;
    service?: string;
  }>;

  // SEO meta overrides
  metaTitle?: string;
  metaDescription?: string;
}

export interface NavItem {
  label: string;
  path?: string;
  type?: 'link' | 'dropdown' | 'action';
  dropdownId?: string;
}

export interface NavSection {
  heading: string;
  link?: string;
  items: { label: string; path: string }[];
}
