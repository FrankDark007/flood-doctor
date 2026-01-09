/**
 * Service Page Overrides
 *
 * Page-specific content overrides for service detail pages.
 * Keyed by service slug (last segment of URL path).
 *
 * These overrides are merged with defaults in adapters.ts
 * Override wins over default for any specified field.
 */

import type { Badge, QuickFact, ProblemSolution, TabItem, Testimonial, PricingItem } from '../generated-layouts/service-page/types';

export interface ServicePageOverride {
  slug: string;

  // Hero overrides
  title?: string;
  subtitle?: string;
  badges?: Badge[];

  // Quick facts overrides
  quickFacts?: QuickFact[];

  // Problem/Solution overrides
  problemSolution?: ProblemSolution;

  // Tabs overrides (can override individual tabs by id)
  tabs?: Partial<TabItem>[];

  // Testimonials overrides
  testimonials?: Testimonial[];

  // Pricing overrides
  pricing?: Partial<PricingItem>;
}

// =============================================================================
// WATER DAMAGE RESTORATION - Primary Service Page
// =============================================================================
const waterDamageOverride: ServicePageOverride = {
  slug: 'water-damage-restoration',

  title: 'Water Damage Restoration in Fairfax & Northern Virginia',
  subtitle: "Water damage doesn't wait for convenient times. Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage within hours. Flood Doctor provides comprehensive water damage restoration throughout Fairfax County, Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians respond 24/7, arriving within 60 minutes with professional equipment. Free damage assessment. Direct insurance billing.",

  badges: [
    { text: '60-Min Onsite', icon: 'Clock' },
    { text: 'Direct Insurance Billing', icon: 'ShieldCheck' },
    { text: 'IICRC Certified', icon: 'Award' },
  ],

  quickFacts: [
    { label: 'Response Time', value: '< 60 Mins', icon: 'Timer' },
    { label: 'Service Area', value: 'NoVA & DC', icon: 'MapPin' },
    { label: 'Guarantee', value: '100% Satisfied', icon: 'ThumbsUp' },
    { label: 'Availability', value: '24/7/365', icon: 'CalendarClock' },
  ],

  problemSolution: {
    problem: {
      title: 'The Risks of Waiting',
      points: [
        'Pools of water forming in your basement or kitchen.',
        'Water dripping from the ceiling or light fixtures.',
        'Carpet feels squishy or hardwood is starting to cup.',
        'Paint is bubbling, peeling, or drywall feels soft.',
      ],
    },
    solution: {
      title: 'The Flood Doctor Approach',
      points: [
        'Immediate professional assessment and mitigation.',
        'Industrial-grade equipment for thorough treatment.',
        'Direct insurance billing with Xactimate documentation.',
        'IICRC-certified technicians with proven protocols.',
      ],
    },
  },

  tabs: [
    {
      id: 'technology',
      label: 'Our Technology',
      title: 'Hospital-Grade Restoration Equipment',
      description: 'We deploy industrial-grade technology to find every drop of moisture and restore your property faster.',
      listItems: [
        'FLIR Thermal Imaging Cameras to see behind walls',
        'Truck-mounted extraction units for rapid water removal',
        'LGR Dehumidifiers that pull 16 gallons of water per day',
        'HEPA Air Scrubbers to remove mold spores and dust',
      ],
      icon: 'Cpu',
    },
    {
      id: 'insurance',
      label: 'Insurance Process',
      title: 'We Handle The Paperwork',
      description: 'Water damage restoration is stressful enough without fighting your insurance company. We use Xactimate software—the same system adjusters use—to ensure your claim is accurate and comprehensive.',
      listItems: [
        'Direct billing to your insurance carrier',
        'Detailed photo documentation of all water damage',
        'Line-item estimates using approved insurance codes',
        'Negotiation on your behalf for fair coverage',
      ],
      icon: 'FileText',
    },
    {
      id: 'team',
      label: 'Certified Team',
      title: 'IICRC Master Restorers',
      description: 'Our technicians hold the highest certifications in water damage restoration. We are restoration scientists, not general contractors.',
      listItems: [
        'WRT (Water Damage Restoration Technician) certified',
        'ASD (Applied Structural Drying) certified',
        'AMRT (Applied Microbial Remediation Technician) for mold',
        'Background checked and drug tested employees',
      ],
      icon: 'Users',
    },
    {
      id: 'guarantee',
      label: 'Our Guarantee',
      title: '1-Year Workmanship Warranty',
      description: 'We stand behind our water damage restoration work. If moisture returns or workmanship fails within one year, we return at no cost.',
      listItems: [
        '100% Dry Guarantee verified by moisture meters',
        '1-Year warranty on all reconstruction labor',
        'Satisfaction sign-off before we leave',
        '24/7 post-service support line',
      ],
      icon: 'Shield',
    },
  ],

  testimonials: [
    {
      author: 'Sarah M.',
      location: 'Arlington, VA',
      rating: 5,
      date: '2 weeks ago',
      text: 'Flood Doctor arrived within an hour and had everything under control. Professional, thorough, and they handled my insurance claim perfectly.',
    },
    {
      author: 'Michael C.',
      location: 'Fairfax, VA',
      rating: 5,
      date: '1 month ago',
      text: 'Incredible service. They handled the insurance claim entirely. The reconstruction team made it look like nothing happened.',
    },
    {
      author: 'Jennifer L.',
      location: 'Alexandria, VA',
      rating: 5,
      date: '3 months ago',
      text: 'Highly recommended. Very respectful of my home, wore shoe covers every time, and kept me informed throughout the entire process.',
    },
  ],

  pricing: {
    price: '$0',
    disclaimer: 'Covered by most insurance policies',
    features: [
      'Thermal Moisture Inspection',
      'Damage Assessment Report',
      'Insurance Claim Assistance',
      'No Out-of-Pocket for Evaluation',
    ],
    ctaText: 'Start Free Inspection',
  },
};

// =============================================================================
// EXPORT ALL OVERRIDES
// =============================================================================

export const SERVICE_PAGE_OVERRIDES: Record<string, ServicePageOverride> = {
  'water-damage-restoration': waterDamageOverride,
  // Add more service overrides here as needed:
  // 'fire-smoke-cleanup': fireSmokekOverride,
  // 'mold-remediation': moldOverride,
  // etc.
};

/**
 * Get override for a specific service slug
 */
export function getServicePageOverride(slug: string): ServicePageOverride | undefined {
  return SERVICE_PAGE_OVERRIDES[slug];
}
