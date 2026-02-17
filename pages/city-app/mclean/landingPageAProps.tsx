/**
 * McLean City Homepage → LandingPageA Props Mapper
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
    heroEyebrow: `24/7 Emergency Response \u2022 ${franchise.serviceAreaLabel}`,
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

    // Features — pick 3 from whyChooseUs
    featuresTitle: mcleanHomepageContent.whyChooseUs.headline,
    featuresSubtitle:
      'Estate-level restoration from a team that knows McLean inside and out.',
    features: mcleanHomepageContent.whyChooseUs.points.slice(0, 3).map((p) => ({
      title: p.title,
      description: p.description,
    })),

    // Testimonials — merge franchise testimonials with homepage context
    testimonialsTitle: mcleanHomepageContent.localTestimonialIntro,
    testimonials: (franchise.testimonials || []).map((t) => ({
      quote: t.quote,
      author: t.author,
      location: `${t.location}, VA`,
      rating: t.rating || 5,
      project: 'Water Damage Restoration',
    })),

    // Service Areas
    serviceAreasTitle: `Serving ${franchise.city} & Surrounding Areas`,
    serviceAreasSubtitle: `Our response vehicles cover all of ${franchise.city} with 30-minute response times, 24 hours a day.`,
    serviceAreas: franchise.localHooks.neighborhoods,

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
  };
}
