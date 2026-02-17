/**
 * McLean City Homepage -> LandingPageA Props Mapper
 *
 * Maps McLean-specific content (homepage.ts + franchise data) into
 * the generic LandingPageA template props.
 *
 * Premium 2026 redesign with custom photography:
 * - hero4.jpeg as cinematic hero background
 * - Alex D. project manager trust card + FAQ sidebar
 * - Before/after gallery with real McLean projects
 * - Truck on Georgetown Pike as local expertise background
 * - Truck arriving in rain as bottom CTA background
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

    // Hero — cinematic full-bleed with restoration photo
    heroEyebrow: `\u26A1 30-Minute McLean Response \u2022 Available Now`,
    heroTitle: (
      <>
        Water damage in{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
          McLean
        </span>
        ? We&rsquo;re on our way.
      </>
    ),
    heroSubtitle: mcleanHomepageContent.heroSubheadline,
    heroCTAPrimary: phone,
    heroCTASecondary: { label: 'Request Service', to: '/request/' },
    showVideo: false,
    heroImage: '/images/mclean/hero4.jpeg',

    // Alex D. project manager trust card in hero
    managerCard: {
      name: 'Alex D.',
      title: 'McLean Project Manager \u2022 15+ Years',
      image: '/images/mclean/alex-d-project-manager.jpeg',
      phone,
    },

    // Stats
    stats: [
      { value: 30, suffix: ' min', label: 'McLean Response' },
      { value: 10000, suffix: '+', label: 'Projects Completed' },
      { value: 15, suffix: '+', label: 'Years Experience' },
      { value: 4.9, suffix: '/5', label: 'Customer Rating' },
    ],

    // Services — 3-col grid with photos
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
        image: '/images/mclean/team-carpet-removal.jpeg',
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
          "McLean\u2019s mature tree canopy increases storm risk. We handle wind, rain, and tree-fall damage.",
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

    // Before/After Gallery — real McLean project photos
    beforeAfterTitle: 'Real McLean restoration results',
    beforeAfterSubtitle: 'Drag the slider to see the transformation. Every project completed by our McLean team.',
    beforeAfterItems: [
      {
        before: '/images/mclean/before-after-1.jpeg',
        after: '/images/mclean/before-after-1.jpeg',
        label: 'Living Room Water Damage \u2014 Langley Estate',
      },
      {
        before: '/images/mclean/before-during-livingroom.jpeg',
        after: '/images/mclean/before-during-livingroom.jpeg',
        label: 'Estate Great Room \u2014 Stone Fireplace Restoration',
      },
      {
        before: '/images/mclean/before-after-3.jpeg',
        after: '/images/mclean/before-after-3.jpeg',
        label: 'Luxury Kitchen \u2014 Penthouse Water Damage',
      },
      {
        before: '/images/mclean/before-after-5.jpeg',
        after: '/images/mclean/before-after-5.jpeg',
        label: 'Double-Height Living \u2014 Full Structural Dry',
      },
    ],

    // Features with real restoration photos
    featuresTitle: mcleanHomepageContent.whyChooseUs.headline,
    featuresSubtitle:
      'Estate-level restoration from a team that knows McLean inside and out.',
    features: mcleanHomepageContent.whyChooseUs.points.slice(0, 3).map((p, idx) => ({
      title: p.title,
      description: p.description,
      visual: [
        '/images/mclean/technician-moisture-meter.jpeg',
        '/images/mclean/team-carpet-removal.jpeg',
        '/images/mclean/truck-georgetown-pike.jpeg',
      ][idx],
    })),

    // Testimonials — asymmetric grid
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

    // Service Areas
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

    // Bottom CTA — truck arriving in rain as background
    ctaTitle: mcleanHomepageContent.emergencyCTA.headline,
    ctaSubtitle: mcleanHomepageContent.emergencyCTA.subtext,
    ctaPhone: phone,
    ctaBackgroundImage: '/images/mclean/truck-arriving-rain.jpeg',

    // Certifications
    certifications: [
      { name: 'IICRC Certified', abbrev: 'IICRC' },
      { name: 'BBB A+ Rated', abbrev: 'BBB' },
      { name: 'EPA Lead-Safe', abbrev: 'EPA' },
      { name: 'Licensed & Insured', abbrev: 'L&I' },
    ],

    // FAQ with sidebar proof card
    faq: mcleanHomepageContent.faqSection,
    faqSidebarCard: {
      name: 'Alex D.',
      title: 'McLean Project Manager',
      image: '/images/mclean/alex-d-project-manager.jpeg',
      phone,
    },

    // Local Expertise — Georgetown Pike truck as background
    localExpertise: {
      headline: mcleanHomepageContent.localExpertise.headline,
      paragraph: mcleanHomepageContent.localExpertise.paragraph.split('\n\n')[0],
      commonIssues: mcleanHomepageContent.localExpertise.commonIssues,
    },
    localExpertiseImage: '/images/mclean/truck-georgetown-pike.jpeg',
  };
}
