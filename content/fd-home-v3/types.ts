/**
 * Content model types for FloodDoctorHomeV3
 * Shared between ref.ts (parity testing) and fd.ts (production)
 */

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
}

export interface HeaderContent {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  navLinks: NavLink[];
  ctaPrimary: CTAButton;
  ctaSecondary?: CTAButton;
  skipToContentLabel: string;
  menuAriaLabel: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: CTAButton;
  ctaSecondary: CTAButton;
  backgroundImage?: string;
}

export interface TabItem {
  id: string;
  label: string;
  title: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface TabSectionContent {
  sectionTitle: string;
  tabs: TabItem[];
}

// Animated Text List (ATL) - Gate 3
// Matches GBP ion-animated-text-list structure
export interface ATLItem {
  id: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface AnimatedTextListSection {
  id: string;
  sectionTitle: string;
  theme: 'light' | 'dark';
  autoAdvanceMs?: number; // Default 8000ms per GBP
  items: ATLItem[];
  cta?: CTAButton;
}

// Gate 4: Scrolling 3-up Cards (ion-scrolling-3up-cards-list)
export interface ScrollingCard {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  cta?: CTAButton;
}

export interface ScrollingCardsSection {
  sectionTitle: string;
  sectionDescription: string;
  cards: ScrollingCard[];
  cta?: CTAButton;
}

// Gate 4: Two-up Media/Text (ion-twoup)
export interface TwoUpSection {
  headline: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  layout: 'image-left' | 'image-right';
  stats?: {
    value: string;
    label: string;
  }[];
}

// Gate 4: Case Studies (ion-case-study-module)
export interface CaseStudy {
  id: string;
  companyName: string;
  quote: string;
  attribution?: string;
  image: {
    src: string;
    alt: string;
  };
  stat?: {
    value: string;
    label: string;
  };
}

export interface CaseStudiesSection {
  sectionTitle: string;
  caseStudies: CaseStudy[];
}

// TILES section (ion-standard-3up-stacked-list) - after Hero
export interface TileItem {
  id: string;
  icon: string; // SVG icon name or path
  title: string;
  description: string;
  cta?: CTAButton;
}

export interface TilesSection {
  sectionTitle?: string;
  tiles: TileItem[];
}

// CTA HEADER section (ion-section-header) - after Case Studies
export interface CTAHeaderSection {
  headline: string;
  description?: string;
  cta?: CTAButton;
}

// STEPS section (ion-standard-3up-stacked-list) - after CTA HEADER
export interface StepItem {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
}

export interface StepsSection {
  sectionTitle?: string;
  steps: StepItem[];
  cta?: CTAButton;
}

// FAQ section (ion-accordion) - at end
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSection {
  sectionTitle: string;
  anchorId: string; // e.g., "your-questions-answered"
  items: FAQItem[];
}

export interface FooterContent {
  logo: {
    src: string;
    alt: string;
  };
  columns: {
    title: string;
    links: NavLink[];
  }[];
  legal: {
    copyright: string;
    links: NavLink[];
  };
}

/**
 * HomeV3Content - Body-only content model
 * Header/Footer use existing FD components from components/layout/
 * Only body sections are content-driven for parity testing
 *
 * SECTION ORDER (must match snapshot):
 * 1. Hero (ion-hero)
 * 2. Tiles (ion-standard-3up-stacked-list)
 * 3. ATL1 light (ion-animated-text-list--fill-light)
 * 4. ATL2 dark (ion-animated-text-list--fill-dark)
 * 5. Scrolling cards (ion-scrolling-3up-cards-list)
 * 6. TwoUp (ion-twoup)
 * 7. Case Studies (ion-case-study-module)
 * 8. CTA Header (ion-section-header)
 * 9. Steps (ion-standard-3up-stacked-list)
 * 10. FAQ (ion-accordion)
 */
export interface HomeV3Content {
  hero: HeroContent;
  tabSection: TabSectionContent;
  tilesSection?: TilesSection; // After Hero
  atlSections: AnimatedTextListSection[]; // ATL1 (light), ATL2 (dark)
  scrollingCardsSection?: ScrollingCardsSection; // 3-up cards
  twoUpSection?: TwoUpSection; // Media/text
  caseStudiesSection?: CaseStudiesSection; // Case studies
  ctaHeaderSection?: CTAHeaderSection; // After Case Studies
  stepsSection?: StepsSection; // After CTA Header
  faqSection?: FAQSection; // At end
}
