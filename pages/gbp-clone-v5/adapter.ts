/**
 * Service Data Adapter
 * Transforms ServiceData from data/services.ts into ServicePageContent for the template
 */

import { ServiceData } from '../../types';
import {
  ServicePageContent,
  ServiceHeroContent,
  ProcessTab,
  WhyChooseTab,
  ProcessStep,
  FAQ,
  RelatedService,
  GettingStartedContent,
  ExpertPartnershipContent,
} from './types';

// Hero image mappings for residential services
const serviceHeroImages: Record<string, { jpg: string; webp: string; alt: string }> = {
  'water-damage-restoration': {
    jpg: '/images/services/hero/water-damage-restoration-hero.jpg',
    webp: '/images/services/hero/water-damage-restoration-hero.webp',
    alt: 'Professional water damage restoration technician extracting water from flooded home',
  },
  'flood-cleanup': {
    jpg: '/images/services/hero/flood-cleanup-hero.jpg',
    webp: '/images/services/hero/flood-cleanup-hero.webp',
    alt: 'Flood cleanup crew removing standing water from basement',
  },
  'mold-remediation': {
    jpg: '/images/services/hero/mold-remediation-hero.jpg',
    webp: '/images/services/hero/mold-remediation-hero.webp',
    alt: 'Certified mold remediation specialist in protective gear removing mold',
  },
  'sewage-cleanup': {
    jpg: '/images/services/hero/sewage-cleanup-hero.jpg',
    webp: '/images/services/hero/sewage-cleanup-hero.webp',
    alt: 'Hazmat-suited technician performing sewage cleanup and sanitation',
  },
  'fire-damage-restoration': {
    jpg: '/images/services/hero/fire-damage-restoration-hero.jpg',
    webp: '/images/services/hero/fire-damage-restoration-hero.webp',
    alt: 'Fire damage restoration team assessing smoke and fire damage',
  },
  'storm-damage-restoration': {
    jpg: '/images/services/hero/storm-damage-restoration-hero.jpg',
    webp: '/images/services/hero/storm-damage-restoration-hero.webp',
    alt: 'Storm damage restoration crew securing damaged property',
  },
  'structural-drying': {
    jpg: '/images/services/hero/structural-drying-hero.jpg',
    webp: '/images/services/hero/structural-drying-hero.webp',
    alt: 'Industrial dehumidifiers and air movers for structural drying',
  },
  'content-restoration': {
    jpg: '/images/services/hero/content-restoration-hero.jpg',
    webp: '/images/services/hero/content-restoration-hero.webp',
    alt: 'Technician carefully restoring water-damaged personal belongings',
  },
  'odor-removal': {
    jpg: '/images/services/hero/odor-removal-hero.jpg',
    webp: '/images/services/hero/odor-removal-hero.webp',
    alt: 'Professional odor removal equipment treating smoke-damaged home',
  },
  'emergency-board-up': {
    jpg: '/images/services/hero/emergency-board-up-hero.jpg',
    webp: '/images/services/hero/emergency-board-up-hero.webp',
    alt: 'Emergency board-up crew securing storm-damaged property',
  },
};

// Default hero image for services without specific images
const defaultHeroImage = {
  jpg: '/images/services/hero/default-service-hero.jpg',
  webp: '/images/services/hero/default-service-hero.webp',
  alt: 'Professional restoration technician at work',
};

// Default "Why Choose" tabs for all services
const defaultWhyChooseTabs: WhyChooseTab[] = [
  {
    id: 'technology',
    icon: 'Cpu',
    label: 'Technology',
    title: 'Advanced Restoration Technology',
    description:
      'We invest in cutting-edge equipment to deliver faster, more thorough results. Our thermal imaging cameras detect hidden moisture, and our commercial-grade dehumidifiers restore your property to pre-loss condition.',
    listItems: [
      'FLIR thermal imaging cameras',
      'LGR commercial dehumidifiers',
      'HEPA air scrubbers',
      'Hydroxyl generators for odor removal',
    ],
  },
  {
    id: 'insurance',
    icon: 'FileText',
    label: 'Insurance',
    title: 'Direct Insurance Billing',
    description:
      'We work directly with all major insurance companies to simplify your claim process. Our detailed documentation meets insurance requirements, and we bill them directly so you can focus on getting back to normal.',
    listItems: [
      'Direct billing to all major insurers',
      'Detailed photo documentation',
      'Itemized scope of work',
      'Xactimate estimates accepted',
    ],
  },
  {
    id: 'team',
    icon: 'Users',
    label: 'Our Team',
    title: 'IICRC Certified Technicians',
    description:
      'Every technician on our team holds IICRC certifications in water damage restoration. We undergo continuous training to stay current with industry best practices and manufacturer specifications.',
    listItems: [
      'IICRC WRT certified',
      'Background checked & drug tested',
      'Continuous education program',
      'Local to Northern Virginia',
    ],
  },
  {
    id: 'guarantee',
    icon: 'Shield',
    label: 'Guarantee',
    title: 'Our Satisfaction Guarantee',
    description:
      "We stand behind our work. If you're not completely satisfied with our restoration services, we'll make it right at no additional cost. Your peace of mind is our priority.",
    listItems: [
      '100% satisfaction guarantee',
      '5-year workmanship warranty',
      'Licensed, bonded & insured',
      '24/7 emergency support',
    ],
  },
];

// Icon mapping for process tabs based on content
function getProcessTabIcon(title: string): ProcessTab['icon'] {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('assess') || titleLower.includes('inspect')) return 'search';
  if (titleLower.includes('extract') || titleLower.includes('water') || titleLower.includes('flood')) return 'droplet';
  if (titleLower.includes('dry') || titleLower.includes('air')) return 'wind';
  if (titleLower.includes('complete') || titleLower.includes('final') || titleLower.includes('restore')) return 'check';
  if (titleLower.includes('plan') || titleLower.includes('document')) return 'clipboard';
  return 'tool';
}

/**
 * Extract service slug from full URL path
 * e.g., "/services/residential/restoration/water-damage-restoration/" → "water-damage-restoration"
 */
export function extractServiceSlug(fullSlug: string): string {
  const parts = fullSlug.split('/').filter(Boolean);
  return parts[parts.length - 1] || 'water-damage-restoration';
}

/**
 * Map ServiceData.faqs to template FAQ format
 */
function adaptFaqs(service: ServiceData): FAQ[] {
  return (service.faqs || []).map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}

/**
 * Create ProcessTabs from service content
 * Uses processMap data or generates from whatWeDo content
 */
function adaptProcessTabs(service: ServiceData): ProcessTab[] {
  // Try to generate from whatWeDo array (first 4 items)
  if (service.whatWeDo && service.whatWeDo.length >= 4) {
    return service.whatWeDo.slice(0, 4).map((item, index) => {
      const isString = typeof item === 'string';
      const title = isString ? item.split(':')[0] : item.title;
      const description = isString ? item.split(':').slice(1).join(':').trim() : item.description;

      return {
        id: `step-${index + 1}`,
        title: title || `Step ${index + 1}`,
        headline: title || `Step ${index + 1}`,
        description: description || '',
        icon: getProcessTabIcon(title || ''),
      };
    });
  }

  // Default generic process tabs
  return [
    {
      id: 'assess',
      title: 'Assessment',
      headline: 'Comprehensive Damage Assessment',
      description:
        'Our certified technicians arrive within 60 minutes to assess the damage, document conditions, and create a detailed restoration plan.',
      icon: 'search',
    },
    {
      id: 'mitigate',
      title: 'Mitigation',
      headline: 'Immediate Damage Mitigation',
      description:
        'We stop the damage from spreading, extract water, remove debris, and begin the restoration process immediately.',
      icon: 'droplet',
    },
    {
      id: 'restore',
      title: 'Restoration',
      headline: 'Professional Restoration',
      description:
        'Using commercial-grade equipment and proven techniques, we restore your property to its pre-loss condition.',
      icon: 'tool',
    },
    {
      id: 'complete',
      title: 'Completion',
      headline: 'Final Inspection & Warranty',
      description:
        'We conduct a final walk-through, ensure your complete satisfaction, and provide documentation for insurance.',
      icon: 'check',
    },
  ];
}

/**
 * Create Hero content from ServiceData
 */
function adaptHero(service: ServiceData): ServiceHeroContent {
  const slug = extractServiceSlug(service.slug);
  const heroImages = serviceHeroImages[slug] || defaultHeroImage;

  return {
    title: service.title,
    headline: service.heroHeading || `Professional ${service.title}`,
    description: service.heroIntro || service.shortDescription,
    heroImage: heroImages.jpg,
    heroImageWebp: heroImages.webp,
    heroImageAlt: heroImages.alt,
    ctaText: 'Get Free Estimate',
    ctaHref: '#contact',
    phone: '(703) 425-6155',
    badges: [
      { icon: 'clock', text: '60-Minute Response' },
      { icon: 'shield', text: 'IICRC Certified' },
      { icon: 'star', text: '4.9★ Rating' },
      { icon: 'check', text: 'Licensed & Insured' },
      { icon: 'phone', text: '24/7 Emergency' },
    ],
  };
}

/**
 * Create Getting Started content
 */
function adaptGettingStarted(service: ServiceData): GettingStartedContent {
  return {
    title: `Getting Started with ${service.title}`,
    subtitle: "Don't wait for damage to get worse. Contact us now for immediate assistance.",
    steps: [
      {
        number: 1,
        title: 'Call Our Emergency Line',
        description:
          'Call (703) 425-6155 any time, day or night. Our team is standing by 24/7 to respond to your emergency.',
        icon: 'phone',
      },
      {
        number: 2,
        title: 'Get a Free Assessment',
        description:
          "We'll arrive within 60 minutes to assess the damage, explain our process, and provide a detailed estimate.",
        icon: 'clipboard',
      },
      {
        number: 3,
        title: 'Restoration Begins',
        description:
          "Once you approve the plan, we start work immediately. We handle insurance directly so you don't have to.",
        icon: 'tool',
      },
    ],
    ctaText: 'Get Started',
    ctaHref: '#contact',
    phone: '(703) 425-6155',
  };
}

/**
 * Create Expert Partnership content
 */
function adaptExpertPartnership(service: ServiceData): ExpertPartnershipContent {
  return {
    title: `Partner with ${service.title} Experts`,
    bullets: [
      "We'll assess the damage and create a comprehensive restoration plan",
      "We'll work directly with your insurance to maximize your coverage",
      "We'll restore your property to pre-loss condition with guaranteed results",
    ],
    ctaText: 'Schedule Assessment',
    ctaHref: '#contact',
    phone: '(703) 425-6155',
  };
}

/**
 * Get related services based on category and audience
 */
function getRelatedServices(service: ServiceData, allServices: ServiceData[]): RelatedService[] {
  // Filter services in same audience, different from current
  const related = allServices
    .filter(
      (s) =>
        s.audience === service.audience &&
        s.id !== service.id &&
        s.category === service.category
    )
    .slice(0, 3);

  // If not enough in same category, add from same audience
  if (related.length < 3) {
    const additional = allServices
      .filter(
        (s) =>
          s.audience === service.audience &&
          s.id !== service.id &&
          !related.includes(s)
      )
      .slice(0, 3 - related.length);
    related.push(...additional);
  }

  return related.map((s) => ({
    title: s.title,
    slug: s.slug,
    description: s.shortDescription,
  }));
}

/**
 * Main adapter function
 * Transforms ServiceData into ServicePageContent for the template
 */
export function adaptServiceToPageContent(
  service: ServiceData,
  allServices: ServiceData[] = []
): ServicePageContent {
  const slug = extractServiceSlug(service.slug);

  return {
    serviceSlug: slug,
    hero: adaptHero(service),
    processTabs: adaptProcessTabs(service),
    whyChooseTabs: defaultWhyChooseTabs,
    gettingStarted: adaptGettingStarted(service),
    expertPartnership: adaptExpertPartnership(service),
    faqs: adaptFaqs(service),
    relatedServices: getRelatedServices(service, allServices),
    meta: {
      title: `${service.title} | Flood Doctor | Northern Virginia`,
      description:
        service.metaDescription ||
        service.shortDescription ||
        `Professional ${service.title.toLowerCase()} services in Northern Virginia, Maryland, and Washington DC. 24/7 emergency response. IICRC certified. Call (703) 425-6155.`,
    },
  };
}

/**
 * Get ServicePageContent by slug
 * Convenience function that finds the service and adapts it
 */
export function getServicePageContent(
  slug: string,
  services: ServiceData[]
): ServicePageContent | null {
  const service = services.find(
    (s) => extractServiceSlug(s.slug) === slug || s.slug.includes(slug)
  );

  if (!service) return null;

  return adaptServiceToPageContent(service, services);
}
