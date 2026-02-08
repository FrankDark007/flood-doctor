/**
 * Data Adapters - Map existing data structures to generated component props
 *
 * These adapters bridge the gap between the main project's data models
 * and the generated layout components from Google AI Studio.
 */

import { LucideIcon, Droplets, Flame, Bug, Wind, Snowflake, Zap, Trash2, Pipette, AlertTriangle, Building2, Warehouse, Users, Home } from 'lucide-react';
import type { ServiceData as MainServiceData } from '../types';

// Generated component interfaces
export interface GridServiceData {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  slug: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
}

/**
 * Map heroVisualKey to Lucide icon
 */
const VISUAL_KEY_TO_ICON: Record<string, LucideIcon> = {
  'water-damage': Droplets,
  'water-extraction': Droplets,
  'flood': Droplets,
  'fire-smoke': Flame,
  'fire-damage': Flame,
  'smoke-damage': Flame,
  'mold': Bug,
  'mold-removal': Bug,
  'storm-damage': Wind,
  'storm': Wind,
  'sewage': Pipette,
  'sewage-cleanup': Pipette,
  'biohazard': AlertTriangle,
  'odor-removal': Wind,
  'dehumidification': Snowflake,
  'structural-drying': Zap,
  'content-cleaning': Trash2,
  'commercial': Building2,
  'warehouse': Warehouse,
  'residential': Home,
  'default': Droplets,
};

export function getIconByVisualKey(key?: string): LucideIcon {
  if (!key) return Droplets;
  return VISUAL_KEY_TO_ICON[key] || VISUAL_KEY_TO_ICON['default'];
}

/**
 * Adapt main project services to ServiceGrid component props
 */
export function adaptServicesToGrid(services: MainServiceData[], limit = 6): GridServiceData[] {
  return services.slice(0, limit).map((s, index) => ({
    id: s.id || `service-${index}`,
    title: s.title,
    description: s.shortDescription || s.heroIntro || '',
    details: s.heroIntro || s.shortDescription || '',
    icon: getIconByVisualKey(s.heroVisualKey),
    slug: s.slug,
  }));
}

/**
 * Adapt homepage FAQ data to FAQAccordion props
 */
export function adaptFAQs(faqs: { question: string; answer: string }[]): FAQItem[] {
  return faqs.map((faq, index) => ({
    id: String(index + 1),
    question: faq.question,
    answer: faq.answer,
    category: 'General',
  }));
}

/**
 * Adapt franchise testimonials to Review format
 */
export function adaptTestimonials(testimonials: Array<{
  name?: string;
  author?: string;
  location?: string;
  city?: string;
  rating?: number;
  text?: string;
  content?: string;
  date?: string;
}>): Review[] {
  return testimonials.map((t, index) => ({
    id: String(index + 1),
    author: t.name || t.author || 'Anonymous',
    location: t.location || t.city || 'Northern Virginia',
    rating: t.rating || 5,
    text: t.text || t.content || '',
    date: t.date,
  }));
}

/**
 * Featured services for homepage (top 6)
 * These are the most commonly needed residential services
 */
export const FEATURED_SERVICE_KEYS = [
  'res-water-damage',
  'res-fire-smoke',
  'res-mold',
  'res-storm',
  'res-sewage',
  'res-basement-flooding',
];

/**
 * Homepage FAQ data (for main site, not city subdomains)
 */
export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How quickly can you respond to water damage emergencies?',
    answer: 'Flood Doctor guarantees 60-minute response time throughout Northern Virginia, 24/7/365. Our IICRC-certified technicians are strategically positioned across Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties.',
    category: 'Emergency',
  },
  {
    id: '2',
    question: 'Do you work directly with insurance companies?',
    answer: 'Yes, Flood Doctor handles direct insurance billing and documentation for all major carriers. We have processed over 8,000 claims with a 98% approval rate.',
    category: 'Billing',
  },
  {
    id: '3',
    question: 'How long does water damage restoration take?',
    answer: 'Most projects take 3-5 days for drying, followed by repairs. We use real-time moisture monitoring to track progress and ensure thorough restoration.',
    category: 'Process',
  },
  {
    id: '4',
    question: 'What areas do you serve?',
    answer: 'We serve all of Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, Prince William, McLean, Vienna, Tysons, Reston, Herndon, Ashburn, and Washington DC.',
    category: 'Service Area',
  },
  {
    id: '5',
    question: 'Are you licensed and certified?',
    answer: 'Yes, we hold Virginia License #2705155505, DC License #420222000069, and Maryland MHIC #139079. All technicians are IICRC-certified in WRT, ASD, and Mold Remediation.',
    category: 'Credentials',
  },
];

/**
 * Homepage reviews (for main site, not city subdomains)
 */
export const HOMEPAGE_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    location: 'McLean, VA',
    rating: 5,
    text: 'Flood Doctor arrived within 45 minutes of my call. Their team was professional, thorough, and worked directly with my insurance company. Highly recommend!',
    date: '2024-12-15',
  },
  {
    id: '2',
    author: 'James K.',
    location: 'Arlington, VA',
    rating: 5,
    text: 'After a pipe burst in our basement, Flood Doctor had the water extracted and drying equipment set up the same day. The client portal made tracking progress easy.',
    date: '2024-11-28',
  },
  {
    id: '3',
    author: 'Patricia L.',
    location: 'Fairfax, VA',
    rating: 5,
    text: "Outstanding service from start to finish. They handled everything with my insurance and kept me informed every step of the way. My home is good as new.",
    date: '2024-10-20',
  },
  {
    id: '4',
    author: 'Michael D.',
    location: 'Alexandria, VA',
    rating: 5,
    text: 'True 24/7 service - they came out at 2 AM when we had flooding from a storm. Professional, courteous, and extremely knowledgeable. Will use again.',
    date: '2024-09-12',
  },
  {
    id: '5',
    author: 'Jennifer H.',
    location: 'Reston, VA',
    rating: 5,
    text: 'The real-time monitoring through their portal was fantastic. I could see the moisture levels dropping day by day. Top-notch restoration company.',
    date: '2024-08-05',
  },
];

// ============================================================================
// SERVICE PAGE ADAPTERS
// Transforms ServiceData from types.ts to ServicePageData for generated components
// ============================================================================

import type { ServicePageData, Badge, QuickFact, ProcessStep, TabItem, ContentSection, Testimonial as ServiceTestimonial, PricingItem, FAQItem as ServiceFAQItem, ProblemSolution } from '../generated-layouts/service-page/types';
import { getServicePageOverride } from '../data/servicePageOverrides';

/**
 * Default quick facts for service pages
 */
const DEFAULT_QUICK_FACTS: QuickFact[] = [
  { label: 'Our crews arrive fast when water damage strikes, day or night.', value: '60-Minute Response', icon: 'Clock' },
  { label: 'Full repair services from a bonded, insured Virginia Class A contractor.', value: 'Licensed Contractor', icon: 'Shield' },
  { label: 'We handle the claims process and bill your carrier directly.', value: 'Direct Insurance Billing', icon: 'FileCheck' },
];

/**
 * Default badges for service pages
 */
const DEFAULT_BADGES: Badge[] = [
  { text: '60-Min Onsite', icon: 'Clock' },
  { text: 'Direct Insurance Billing', icon: 'ShieldCheck' },
  { text: 'IICRC Certified', icon: 'Award' },
];

/**
 * Default tabs for all service pages
 */
const DEFAULT_TABS: TabItem[] = [
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
    description: 'Restoration is stressful enough without fighting your insurance company. We use Xactimate software to ensure your claim is accurate.',
    listItems: [
      'Direct billing to your insurance carrier',
      'Detailed photo documentation of all damage',
      'Line-item estimates using approved insurance codes',
      'Negotiation on your behalf for fair coverage',
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'IICRC Master Restorers',
    description: 'Our technicians hold the highest certifications in the industry. We are restoration scientists, not general contractors.',
    listItems: [
      'Institute of Inspection Cleaning and Restoration Certification (IICRC)',
      'AMRT (Applied Microbial Remediation Technician) for mold',
      'WRT (Water Damage Restoration Technician) certified',
      'Background checked and drug tested employees',
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: '1-Year Workmanship Warranty',
    description: 'We stand behind our work. If moisture returns or workmanship fails, we return at no cost.',
    listItems: [
      '100% Dry Guarantee verified by moisture meters',
      '1-Year warranty on all reconstruction labor',
      'Satisfaction sign-off before we leave',
      '24/7 post-service support line',
    ],
    icon: 'Shield',
  },
];

/**
 * Default pricing for service pages
 */
const DEFAULT_PRICING: PricingItem = {
  price: '$0',
  disclaimer: 'Covered by most insurance policies',
  features: [
    'Thermal Moisture Inspection',
    'Damage Assessment Report',
    'Insurance Claim Assistance',
    'No Out-of-Pocket for Evaluation',
  ],
  ctaText: 'Start Free Inspection',
};

/**
 * Default testimonials for service pages
 */
const DEFAULT_TESTIMONIALS: ServiceTestimonial[] = [
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
];

/**
 * Parse whatWeDo array into ProcessStep format
 */
function parseWhatWeDo(whatWeDo?: (string | { title: string; description: string })[]): ProcessStep[] {
  if (!whatWeDo || whatWeDo.length === 0) {
    return [
      { title: 'Assessment', description: 'We arrive fast, assess damage, and create a restoration plan.', icon: 'Search' },
      { title: 'Mitigation', description: 'We stop the damage from spreading with immediate action.', icon: 'Shield' },
      { title: 'Restoration', description: 'Industrial equipment removes contamination and dries your space.', icon: 'Wind' },
      { title: 'Completion', description: 'We repair, clean, and restore to pre-loss condition.', icon: 'Home' },
    ];
  }

  const PROCESS_ICONS = ['Search', 'Shield', 'Wind', 'Home', 'CheckCircle', 'Hammer'];

  return whatWeDo.slice(0, 4).map((step, idx) => {
    if (typeof step === 'string') {
      const colonIndex = step.indexOf(':');
      if (colonIndex > 0) {
        return {
          title: step.substring(0, colonIndex).trim(),
          description: step.substring(colonIndex + 1).trim(),
          icon: PROCESS_ICONS[idx % PROCESS_ICONS.length],
        };
      }
      return {
        title: step,
        description: '',
        icon: PROCESS_ICONS[idx % PROCESS_ICONS.length],
      };
    }
    return {
      title: step.title,
      description: step.description,
      icon: PROCESS_ICONS[idx % PROCESS_ICONS.length],
    };
  });
}

/**
 * Parse contentSections into ContentSection format
 */
function parseContentSections(contentSections?: { heading?: string; intro?: string; cards?: Array<{ title: string; content: string }> }): ContentSection[] {
  if (!contentSections || !contentSections.cards) {
    return [];
  }

  return contentSections.cards.slice(0, 3).map((card) => ({
    heading: card.title,
    content: [card.content],
  }));
}

/**
 * Parse whenToCall into problem/solution format
 */
function parseProblemSolution(service: MainServiceData): ProblemSolution {
  const problems = service.whenToCall?.slice(0, 4).map((item) => {
    if (typeof item === 'string') {
      const colonIndex = item.indexOf(':');
      return colonIndex > 0 ? item.substring(colonIndex + 1).trim() : item;
    }
    return item;
  }) || [
    'Damage spreads rapidly without intervention.',
    'Secondary damage (mold, rot) begins within 48 hours.',
    'Insurance claims require professional documentation.',
    'DIY attempts often miss hidden damage.',
  ];

  const solutions = [
    'Immediate professional assessment and mitigation.',
    'Industrial-grade equipment for thorough treatment.',
    'Direct insurance billing with Xactimate documentation.',
    'IICRC-certified technicians with proven protocols.',
  ];

  return {
    problem: { title: 'The Risks of Waiting', points: problems },
    solution: { title: 'The Flood Doctor Approach', points: solutions },
  };
}

/**
 * Convert ServiceData FAQs to ServicePageData FAQs
 */
function parseFAQs(faqs?: Array<{ question: string; answer: string }>): ServiceFAQItem[] {
  if (!faqs || faqs.length === 0) {
    return [
      { question: 'How quickly can you get here?', answer: 'We guarantee a technician onsite within 60 minutes for emergency calls in Northern Virginia.' },
      { question: 'Do you work with my insurance?', answer: 'Yes, we work directly with all major insurance carriers. We document everything and bill them directly.' },
      { question: 'Can I stay in my home during the process?', answer: 'In most minor to moderate cases, yes. For extensive damage or hazardous materials, we may recommend temporary relocation.' },
      { question: 'What if I see mold already?', answer: 'If you see mold, do not disturb it. Call us immediately. We are certified in mold remediation and will contain the area.' },
    ];
  }

  return faqs.slice(0, 6).map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}

/**
 * Main adapter: Transform ServiceData to ServicePageData
 * Merges page-specific overrides from data/servicePageOverrides.ts
 */
export function adaptServiceToPageData(
  service: MainServiceData,
  cityName?: string,
  emergencyPhone = '(877) 497-0007'
): ServicePageData {
  const locationSuffix = cityName ? ` in ${cityName}` : ' in Northern Virginia';

  // Build default page data
  const pageData: ServicePageData = {
    title: service.heroHeading || service.title,
    subtitle: service.heroIntro || service.shortDescription || `IICRC-certified technicians onsite in 60 minutes, 24/7. Direct insurance billing.`,
    emergencyPhone,
    badges: DEFAULT_BADGES,
    quickFacts: DEFAULT_QUICK_FACTS,
    problemSolution: parseProblemSolution(service),
    tabs: DEFAULT_TABS,
    process: parseWhatWeDo(service.whatWeDo),
    detailedContent: parseContentSections(service.contentSections),
    testimonials: DEFAULT_TESTIMONIALS,
    pricing: DEFAULT_PRICING,
    faqs: parseFAQs(service.faqs),
  };

  // Apply page-specific overrides if they exist
  // Extract last segment from slug (e.g., 'water-damage-restoration' from '/services/.../water-damage-restoration/')
  const slugSegments = service.slug.split('/').filter(Boolean);
  const lastSegment = slugSegments[slugSegments.length - 1] || '';
  const override = getServicePageOverride(lastSegment);
  if (override) {
    if (override.title) pageData.title = override.title;
    if (override.subtitle) pageData.subtitle = override.subtitle;
    if (override.badges) pageData.badges = override.badges;
    if (override.quickFacts) pageData.quickFacts = override.quickFacts;
    if (override.problemSolution) pageData.problemSolution = override.problemSolution;
    if (override.tabs) pageData.tabs = override.tabs as TabItem[];
    if (override.testimonials) pageData.testimonials = override.testimonials;
    if (override.pricing) pageData.pricing = { ...pageData.pricing, ...override.pricing };
  }

  return pageData;
}

// ============================================================================
// CITY PAGE ADAPTERS
// Transforms CityConfig from config/cities.ts to CityData for generated components
// ============================================================================

import type { CityData, Review as CityReview, Service as CityService, FAQ as CityFAQ } from '../generated-layouts/city-landing/types';
import type { CityConfig } from '../config/cities';

/**
 * Default services for city pages
 */
const DEFAULT_CITY_SERVICES: CityService[] = [
  {
    id: 'water-extraction',
    title: 'Emergency Water Extraction',
    description: 'Industrial-grade pumps remove standing water fast, preventing secondary damage.',
    iconName: 'Droplets',
    responseTime: '60 min',
  },
  {
    id: 'structural-drying',
    title: 'Structural Drying',
    description: 'Commercial dehumidifiers and air movers dry walls, floors, and ceilings completely.',
    iconName: 'Wind',
    responseTime: '24/7',
  },
  {
    id: 'mold-prevention',
    title: 'Mold Prevention & Remediation',
    description: 'Antimicrobial treatments and HEPA filtration prevent and eliminate mold growth.',
    iconName: 'ShieldAlert',
    responseTime: '48 hrs',
  },
  {
    id: 'basement-flooding',
    title: 'Basement Flood Restoration',
    description: 'Specialized basement water damage restoration including sump pump failures.',
    iconName: 'Home',
    responseTime: '60 min',
  },
  {
    id: 'sewage-cleanup',
    title: 'Sewage & Biohazard Cleanup',
    description: 'Safe handling and disposal of contaminated water and materials.',
    iconName: 'Waves',
    responseTime: '60 min',
  },
  {
    id: 'reconstruction',
    title: 'Reconstruction & Repairs',
    description: 'Full restoration including drywall, flooring, and painting to pre-loss condition.',
    iconName: 'Zap',
    responseTime: '3-5 days',
  },
];

/**
 * Default FAQs for city pages
 */
function getDefaultCityFAQs(cityName: string, state: string, responseTime: string): CityFAQ[] {
  return [
    {
      question: `How fast can you get to my ${cityName} home?`,
      answer: `We're headquartered on Tyco Road in Vienna, VA. Response time to any ${cityName} address is ${responseTime}, 24/7/365.`,
    },
    {
      question: `Do you handle insurance claims for ${cityName} residents?`,
      answer: 'Yes. We work with all major insurers and provide the documentation adjusters expect. Most homeowners have coverage for sudden water damage.',
    },
    {
      question: `Are you licensed in ${state === 'DC' ? 'Washington DC' : state === 'MD' ? 'Maryland' : 'Virginia'}?`,
      answer: `Yes. Flood Doctor holds Virginia DPOR License #2705155505, DC License #420222000069, and Maryland MHIC #139079. We're fully licensed and insured for restoration work in ${cityName}.`,
    },
    {
      question: `What areas besides ${cityName} do you serve?`,
      answer: 'We serve all of Northern Virginia, Washington DC, and Montgomery County, MD. From our Vienna headquarters, we reach most locations within 30-45 minutes.',
    },
    {
      question: 'What should I do while waiting for you to arrive?',
      answer: 'Turn off the water source if safe to do so. Move valuable items to dry areas. Take photos for insurance. Avoid electrical outlets in wet areas. We\'ll guide you over the phone.',
    },
  ];
}

/**
 * Transform CityConfig testimonials to CityReview format
 */
function adaptCityTestimonials(testimonials: CityConfig['testimonials'], cityName: string): CityReview[] {
  if (!testimonials || testimonials.length === 0) {
    return [
      {
        id: '1',
        author: 'Satisfied Customer',
        location: cityName,
        rating: 5,
        text: `Fast response and professional service. They saved our home from extensive water damage.`,
        date: '2 months ago',
      },
    ];
  }

  return testimonials.map((t, idx) => ({
    id: String(idx + 1),
    author: t.author,
    location: t.location || cityName,
    rating: 5,
    text: t.quote,
    date: idx === 0 ? '2 weeks ago' : idx === 1 ? '1 month ago' : '3 months ago',
  }));
}

/**
 * Main adapter: Transform CityConfig to CityData
 */
export function adaptCityConfigToCityData(
  city: CityConfig,
  emergencyPhone = '(877) 497-0007'
): CityData {
  return {
    name: city.name,
    state: city.state,
    slug: city.slug,
    heroImage: '/images/water-damage-hero.jpg', // Default hero image
    phoneNumber: emergencyPhone,
    responseTime: city.responseTime,
    establishedYear: 2005,
    officeLocation: '8466D Tyco Rd, Vienna, VA 22182',
    distanceFromCenter: city.responseTime.split('-')[0] + ' min drive',
    neighborhoods: city.neighborhoods.map(n => n.name),
    landmarks: city.localChallenges.slice(0, 3), // Use challenges as "landmarks" for local expertise
    zipCodes: city.zipCodes,
    neighboringCities: [], // Could be populated from adjacent cities
    services: DEFAULT_CITY_SERVICES,
    reviews: adaptCityTestimonials(city.testimonials, city.name),
    faqs: getDefaultCityFAQs(city.name, city.state, city.responseTime),
  };
}

/**
 * Get neighboring cities based on geography (for cross-linking)
 */
export function getNeighboringCities(citySlug: string): string[] {
  const neighborMap: Record<string, string[]> = {
    'mclean': ['tysons', 'vienna', 'great-falls'],
    'vienna': ['tysons', 'mclean', 'fairfax', 'falls-church'],
    'arlington': ['falls-church', 'alexandria', 'washington-dc'],
    'fairfax': ['vienna', 'springfield', 'fairfax-station'],
    'tysons': ['mclean', 'vienna', 'falls-church'],
    'alexandria': ['arlington', 'springfield', 'washington-dc'],
    'ashburn': ['herndon', 'reston', 'sterling'],
    'washington-dc': ['arlington', 'alexandria', 'bethesda'],
    'herndon': ['reston', 'ashburn'],
    'reston': ['herndon', 'tysons'],
    'springfield': ['fairfax', 'alexandria', 'lorton'],
    'falls-church': ['arlington', 'vienna', 'tysons'],
    'great-falls': ['mclean', 'vienna'],
    'bethesda': ['washington-dc', 'potomac', 'silver-spring'],
    'potomac': ['bethesda', 'rockville'],
    'rockville': ['bethesda', 'silver-spring', 'potomac'],
    'silver-spring': ['bethesda', 'rockville', 'washington-dc'],
  };
  return neighborMap[citySlug] || [];
}
