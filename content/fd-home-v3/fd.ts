/**
 * Flood Doctor production content
 * Used with ?__content=fd (default in production)
 */

import type { HomeV3Content } from './types';

export const fdContent: HomeV3Content = {
  // Header/Footer removed - using existing FD components from components/layout/
  // Body content only

  hero: {
    headline: 'Emergency Water Damage Restoration',
    subheadline: '24/7 response, water extraction, drying, cleanup, and rebuild coordination across Northern Virginia, DC, and Maryland.',
    ctaPrimary: {
      label: 'Call Now',
      href: 'tel:703-498-1581',
      variant: 'primary',
    },
    ctaSecondary: {
      label: 'Request Service',
      href: '/request/',
      variant: 'outline',
    },
  },

  tabSection: {
    sectionTitle: 'Our Services',
    tabs: [
      {
        id: 'water-damage',
        label: 'Water Damage',
        title: 'Water Damage Restoration',
        bullets: [
          '24/7 emergency response within 60 minutes',
          'Professional water extraction and structural drying',
          'Moisture mapping and thermal imaging',
          'Insurance claim assistance and documentation',
          'Complete rebuild coordination',
        ],
        image: {
          src: '/assets/fd-home-v3/water-damage-hero.jpg',
          alt: 'Water damage restoration technician extracting water',
        },
      },
      {
        id: 'sewage-cleanup',
        label: 'Sewage Cleanup',
        title: 'Sewage & Black Water Cleanup',
        bullets: [
          'Category 3 water remediation specialists',
          'Biohazard containment and removal',
          'Complete sanitization and decontamination',
          'Odor elimination and air quality restoration',
        ],
        image: {
          src: '/assets/fd-home-v3/sewage-cleanup-hero.jpg',
          alt: 'Sewage cleanup with protective equipment',
        },
      },
      {
        id: 'mold-remediation',
        label: 'Mold Remediation',
        title: 'Mold Inspection & Remediation',
        bullets: [
          'IICRC-certified mold remediation',
          'Air quality testing and spore sampling',
          'Containment and HEPA filtration',
          'Source identification and prevention',
        ],
        image: {
          src: '/assets/fd-home-v3/mold-remediation-hero.jpg',
          alt: 'Mold inspection with specialized equipment',
        },
      },
      {
        id: 'leak-detection',
        label: 'Leak Detection',
        title: 'Non-Invasive Leak Detection',
        bullets: [
          'Thermal imaging and acoustic detection',
          'Slab leak and pipe leak locating',
          'Moisture mapping behind walls',
          'Prevent costly water damage',
        ],
        image: {
          src: '/assets/fd-home-v3/leak-detection-hero.jpg',
          alt: 'Thermal imaging for leak detection',
        },
      },
    ],
  },

  // Gate 3: Animated Text List sections
  atlSections: [
    {
      id: 'atl-why-choose',
      sectionTitle: 'Why homeowners trust Flood Doctor',
      theme: 'light',
      autoAdvanceMs: 8000,
      items: [
        {
          id: 'response-time',
          title: '60-minute emergency response',
          description: 'When water damage strikes, every minute counts. Our technicians arrive within 60 minutes to begin extraction and prevent secondary damage like mold growth.',
        },
        {
          id: 'certified-team',
          title: 'IICRC-certified technicians',
          description: 'Our team holds the highest industry certifications for water damage restoration, mold remediation, and structural drying—ensuring work done right the first time.',
        },
        {
          id: 'insurance-help',
          title: 'Direct insurance billing',
          description: 'We work directly with your insurance company, handling documentation, photos, and moisture readings so you can focus on getting your life back to normal.',
        },
      ],
      cta: {
        label: 'Call Now',
        href: 'tel:703-498-1581',
        variant: 'primary',
      },
    },
    {
      id: 'atl-our-process',
      sectionTitle: 'What to expect when you call',
      theme: 'dark',
      autoAdvanceMs: 8000,
      items: [
        {
          id: 'step-inspect',
          title: 'Rapid inspection & assessment',
          description: 'We arrive fast, assess the damage using thermal imaging and moisture meters, and provide a clear scope of work with transparent pricing.',
        },
        {
          id: 'step-extract',
          title: 'Water extraction & drying',
          description: 'Industrial-grade pumps remove standing water while commercial dehumidifiers and air movers dry your structure to IICRC standards.',
        },
        {
          id: 'step-restore',
          title: 'Cleanup & restoration',
          description: 'We sanitize affected areas, remove damaged materials, and coordinate rebuild services to restore your property to pre-loss condition.',
        },
      ],
      cta: {
        label: 'Request Service',
        href: '/request/',
        variant: 'outline',
      },
    },
  ],

  // Gate 4: Scrolling 3-up Cards - Flood Doctor Services
  scrollingCardsSection: {
    sectionTitle: 'Complete water damage solutions for every situation',
    sectionDescription: 'From burst pipes to flooding, sewage backups to mold infestations—we handle it all. Our certified technicians arrive within 60 minutes with industrial-grade equipment.',
    cards: [
      {
        id: 'water-extraction',
        title: 'Emergency Water Extraction',
        description: 'Industrial pumps remove thousands of gallons per hour. We start extraction immediately to minimize damage.',
        image: {
          src: '/assets/fd-home-v3/water-extraction-card.jpg',
          alt: 'Water extraction equipment in action',
        },
      },
      {
        id: 'structural-drying',
        title: 'Structural Drying',
        description: 'Commercial dehumidifiers and air movers dry walls, floors, and ceilings to prevent mold growth.',
        image: {
          src: '/assets/fd-home-v3/structural-drying-card.jpg',
          alt: 'Structural drying equipment setup',
        },
      },
      {
        id: 'mold-prevention',
        title: 'Mold Prevention & Remediation',
        description: 'HEPA air scrubbers and antimicrobial treatments stop mold before it starts.',
        image: {
          src: '/assets/fd-home-v3/mold-prevention-card.jpg',
          alt: 'Mold remediation specialist at work',
        },
      },
    ],
    cta: {
      label: 'Call Now',
      href: 'tel:703-498-1581',
      variant: 'primary',
    },
  },

  // Gate 4: Two-up Media/Text - Flood Doctor Stats
  twoUpSection: {
    headline: 'Trusted by homeowners across Northern Virginia',
    description: 'For over 15 years, Flood Doctor has been the first call for water emergencies in Northern Virginia, DC, and Maryland. Our rapid response and thorough restoration process has earned us hundreds of 5-star reviews.',
    image: {
      src: '/assets/fd-home-v3/team-photo.jpg',
      alt: 'Flood Doctor team with restoration equipment',
    },
    layout: 'image-left',
    stats: [
      { value: '15+', label: 'years serving NoVA' },
      { value: '4.9', label: 'star rating' },
      { value: '24/7', label: 'emergency response' },
    ],
  },

  // Gate 4: Case Studies - Real Customer Testimonials
  caseStudiesSection: {
    sectionTitle: 'What our customers say',
    caseStudies: [
      {
        id: 'mclean-basement',
        companyName: 'McLean Homeowner',
        quote: 'Our basement flooded at 2 AM. Flood Doctor was here within the hour and had the water out by sunrise. They saved our finished basement.',
        attribution: 'Sarah K., McLean',
        image: {
          src: '/assets/fd-home-v3/testimonial-basement.jpg',
          alt: 'Restored basement in McLean home',
        },
        stat: {
          value: '45 min',
          label: 'response time',
        },
      },
      {
        id: 'arlington-burst-pipe',
        companyName: 'Arlington Business Owner',
        quote: 'A burst pipe flooded our office over the weekend. Flood Doctor worked through the night so we could open Monday. Incredible service.',
        attribution: 'Michael R., Arlington',
        image: {
          src: '/assets/fd-home-v3/testimonial-office.jpg',
          alt: 'Commercial water damage restoration',
        },
        stat: {
          value: '100%',
          label: 'insurance claim covered',
        },
      },
    ],
  },
};

export default fdContent;
