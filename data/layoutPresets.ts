/**
 * Layout Presets
 * Defines component combinations for different page types
 */

export interface LayoutPreset {
  id: string;
  name: string;
  description: string;
  sections: LayoutSection[];
}

export interface LayoutSection {
  id: string;
  componentPath: string;
  componentName: string;
  order: number;
  props?: Record<string, unknown>;
}

/**
 * HOME_PRESET
 * Homepage layout using generated-layouts components
 */
export const HOME_PRESET: LayoutPreset = {
  id: 'home',
  name: 'Homepage',
  description: 'Main landing page with hero, services, process, trust, and CTA',
  sections: [
    {
      id: 'hero',
      componentPath: 'heroes/HeroInteractive',
      componentName: 'HeroInteractive',
      order: 1,
    },
    {
      id: 'services',
      componentPath: 'service-grids/ServiceGridBento',
      componentName: 'ServiceGridBento',
      order: 2,
    },
    {
      id: 'process',
      componentPath: 'process/ProcessTimeline',
      componentName: 'ProcessTimeline',
      order: 3,
    },
    {
      id: 'trust',
      componentPath: 'trust-suite/TrustBadgeBar',
      componentName: 'TrustBadgeBar',
      order: 4,
    },
    {
      id: 'faq',
      componentPath: 'faqs/FAQAccordion',
      componentName: 'FAQAccordion',
      order: 5,
    },
    {
      id: 'cta',
      componentPath: 'ctas/CTAGradient',
      componentName: 'CTAGradient',
      order: 6,
    },
  ],
};

/**
 * SERVICE_PRESET
 * Service detail page layout
 */
export const SERVICE_PRESET: LayoutPreset = {
  id: 'service',
  name: 'Service Page',
  description: 'Service detail page with hero, process, trust, FAQ, and emergency CTA',
  sections: [
    {
      id: 'hero',
      componentPath: 'heroes/HeroMagazine',
      componentName: 'HeroMagazine',
      order: 1,
    },
    {
      id: 'process',
      componentPath: 'process/ProcessTimeline',
      componentName: 'ProcessTimeline',
      order: 2,
    },
    {
      id: 'trust',
      componentPath: 'trust-suite/StatsGrid',
      componentName: 'StatsGrid',
      order: 3,
    },
    {
      id: 'faq',
      componentPath: 'faqs/FAQCards',
      componentName: 'FAQCards',
      order: 4,
    },
    {
      id: 'cta',
      componentPath: 'ctas/CTAEmergency',
      componentName: 'CTAEmergency',
      order: 5,
    },
  ],
};

/**
 * CITY_PRESET
 * City landing page layout for franchise/location pages
 */
export const CITY_PRESET: LayoutPreset = {
  id: 'city',
  name: 'City Landing Page',
  description: 'City-specific landing page with local focus',
  sections: [
    {
      id: 'hero',
      componentPath: 'heroes/HeroTestimonial',
      componentName: 'HeroTestimonial',
      order: 1,
    },
    {
      id: 'services',
      componentPath: 'service-grids/ServiceGridStandard',
      componentName: 'ServiceGridStandard',
      order: 2,
    },
    {
      id: 'trust',
      componentPath: 'trust-suite/TrustBadgeBar',
      componentName: 'TrustBadgeBar',
      order: 3,
    },
    {
      id: 'process',
      componentPath: 'process/ProcessTimeline',
      componentName: 'ProcessTimeline',
      order: 4,
    },
    {
      id: 'faq',
      componentPath: 'faqs/FAQAccordion',
      componentName: 'FAQAccordion',
      order: 5,
    },
    {
      id: 'cta',
      componentPath: 'ctas/CTASplit',
      componentName: 'CTASplit',
      order: 6,
    },
  ],
};

/**
 * All presets indexed by ID
 */
export const LAYOUT_PRESETS: Record<string, LayoutPreset> = {
  home: HOME_PRESET,
  service: SERVICE_PRESET,
  city: CITY_PRESET,
};

/**
 * Get preset by ID
 */
export function getPreset(id: string): LayoutPreset | undefined {
  return LAYOUT_PRESETS[id];
}

/**
 * List all available presets
 */
export function listPresets(): LayoutPreset[] {
  return Object.values(LAYOUT_PRESETS);
}
