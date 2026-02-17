/**
 * McLean City Homepage -> LandingPageA Props Mapper
 *
 * Maps McLean-specific content (homepage.ts + franchise data) into
 * the generic LandingPageA template props.
 */

import React from 'react';
import {
  Droplets,
  Flame,
  Wind,
  Bug,
  Hammer,
  ShieldCheck,
} from 'lucide-react';
import type { FranchiseData } from '@/data/franchises';
import { mcleanHomepageContent } from '@/src/content/cities/mclean/homepage';

function formatPhone(raw: string): { label: string; href: string } {
  const digits = raw.replace(/\D/g, '');
  return { label: raw, href: `tel:${digits}` };
}

export function getMcLeanLandingProps(franchise: FranchiseData) {
  const phone = formatPhone(franchise.phone);

  return {
    // Meta
    pageTitle: `Water Damage Restoration McLean VA | Flood Doctor of McLean`,
    pageDescription: `24/7 water damage restoration in McLean, VA. 30-minute response to Langley, Chesterbrook & all McLean neighborhoods. Call ${franchise.phone}.`,

    // Hero
    // T4: Urgency eyebrow with lightning bolt and "Available Now"
    heroEyebrow: `\u26A1 30-Minute McLean Response \u2022 Available Now`,
    heroTitle: (
      <>
        Water damage in{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
          McLean
        </span>
        ? We're on our way.
      </>
    ),
    heroSubtitle: mcleanHomepageContent.heroSubheadline,
    heroCTAPrimary: phone,
    heroCTASecondary: { label: 'Request Service', to: '/request/' },
    showVideo: false,

    // T3: Hero image — professional restoration photo
    heroImage: '/images/services/residential/water-damage-restoration.webp',

    // Stats
    stats: [
      { value: 30, suffix: ' min', label: 'McLean Response' },
      { value: 10000, suffix: '+', label: 'Projects Completed' },
      { value: 15, suffix: '+', label: 'Years Experience' },
      { value: 4.9, suffix: '/5', label: 'Customer Rating' },
    ],

    // Services
    servicesTitle: 'Complete restoration for McLean homes',
    servicesSubtitle:
      'From emergency water extraction to full reconstruction of estate properties.',
    services: [
      {
        icon: Droplets,
        title: 'Water Damage Restoration',
        description:
          'Emergency water extraction, structural drying, and complete restoration for McLean estates and family homes.',
        color: 'from-blue-500 to-blue-600',
        link: '/services/water-damage/',
      },
      {
        icon: Flame,
        title: 'Fire & Smoke Restoration',
        description:
          'Comprehensive fire damage repair, smoke odor removal, and structural reconstruction.',
        color: 'from-orange-500 to-red-500',
        link: '/services/fire-damage/',
      },
      {
        icon: Bug,
        title: 'Mold Remediation',
        description:
          'Certified mold testing, containment, and remediation to protect your family and property value.',
        color: 'from-emerald-500 to-green-600',
        link: '/services/mold-remediation/',
      },
      {
        icon: Wind,
        title: 'Storm Damage Repair',
        description:
          "McLean's mature tree canopy increases storm risk. We handle wind, rain, and tree-fall damage.",
        color: 'from-slate-500 to-slate-700',
        link: '/services/storm-damage/',
      },
      {
        icon: ShieldCheck,
        title: 'Insurance Claims Support',
        description:
          'Direct billing with all major carriers. We document, file, and negotiate so you don\u2019t have to.',
        color: 'from-indigo-500 to-purple-600',
        link: '/services/insurance-claims/',
      },
      {
        icon: Hammer,
        title: 'Reconstruction',
        description:
          'Full rebuild services matching your home\u2019s custom finishes\u2014Italian marble, hardwoods, millwork.',
        color: 'from-amber-500 to-amber-600',
        link: '/services/reconstruction/',
      },
    ],

    // T5: Features with actual images
    featuresTitle: mcleanHomepageContent.whyChooseUs.headline,
    featuresSubtitle:
      'Estate-level restoration from a team that knows McLean inside and out.',
    features: mcleanHomepageContent.whyChooseUs.points.slice(0, 3).map((p, idx) => ({
      title: p.title,
      description: p.description,
      visual: [
        '/images/process-tiles/process-05-water-extraction.png',
        '/images/services/residential/burst-pipe-water-damage.webp',
        '/images/process-tiles/process-13-antimicrobial-treatment.png',
      ][idx],
    })),

    // T10: Enriched testimonials with McLean neighborhood names and varied projects
    testimonialsTitle: mcleanHomepageContent.localTestimonialIntro,
    testimonials: [
      {
        quote: "Our sump pump failed during a July thunderstorm and the finished basement was under 3 inches of water. Flood Doctor arrived in 25 minutes and saved our home theater and wine cellar. They worked with our insurance adjuster directly\u2014we barely had to lift a finger.",
        author: 'David & Karen L.',
        location: 'Langley, McLean',
        rating: 5,
        project: 'Basement Flood Recovery',
      },
      {
        quote: "A burst pipe behind the dishwasher destroyed our kitchen hardwood floors. The Flood Doctor team was professional, discreet, and incredibly thorough. They matched our custom white oak flooring perfectly during reconstruction.",
        author: 'Patricia W.',
        location: 'Chesterbrook, McLean',
        rating: 5,
        project: 'Kitchen Water Damage',
      },
      {
        quote: "After discovering mold in our lower level, Flood Doctor contained and remediated the entire area in under a week. Their daily moisture readings and updates kept us informed every step of the way. True professionals.",
        author: 'James & Sarah T.',
        location: 'The Reserve, McLean',
        rating: 5,
        project: 'Mold Remediation',
      },
      {
        quote: "Ice dam damage sent water through our master bedroom ceiling in February. The crew arrived before sunrise and had industrial dryers running within an hour. They saved our plaster ceiling and hardwood floors.",
        author: 'Robert M.',
        location: 'Woodside Estates, McLean',
        rating: 5,
        project: 'Ice Dam Restoration',
      },
    ],

    // T6: Service Areas with neighborhood count + grid
    serviceAreasTitle: `Serving All McLean Neighborhoods`,
    serviceAreasSubtitle: `Our response vehicles cover every corner of McLean with 30-minute response times, 24/7. From the estates along Georgetown Pike to family homes near McLean Community Center.`,
    serviceAreas: [
      'Langley',
      'Chesterbrook',
      'The Reserve',
      'Woodside Estates',
      'Salona Village',
      'McLean Hamlet',
      'Balls Hill',
      'El Nido',
      'Franklin Park',
      'Ingleside',
      'Evermay',
      'Georgetown Pike',
    ],
    serviceAreasCount: 12,

    // Bottom CTA
    ctaTitle: mcleanHomepageContent.emergencyCTA.headline,
    ctaSubtitle: mcleanHomepageContent.emergencyCTA.subtext,
    ctaPhone: phone,

    // Certifications
    certifications: [
      { name: 'IICRC Certified', abbrev: 'IICRC' },
      { name: 'BBB A+ Rated', abbrev: 'BBB' },
      { name: 'EPA Lead-Safe', abbrev: 'EPA' },
      { name: 'Licensed & Insured', abbrev: 'L&I' },
    ],

    // T7: FAQ — all 7 McLean-specific questions from homepage.ts
    faq: mcleanHomepageContent.faqSection,

    // T8: Local expertise callout
    localExpertise: {
      headline: mcleanHomepageContent.localExpertise.headline,
      paragraph: mcleanHomepageContent.localExpertise.paragraph.split('\n\n')[0],
      commonIssues: mcleanHomepageContent.localExpertise.commonIssues,
    },
  };
}
