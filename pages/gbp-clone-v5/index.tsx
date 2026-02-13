/**
 * GBP Clone V5 - Dev Page
 *
 * This page serves as:
 * 1. A dev preview at /dev/keyword-planner
 * 2. A demonstration of the ServiceDetailTemplate with water damage restoration content
 *
 * For production use, import ServiceDetailTemplate directly with a slug prop
 * or use it via the router at /services/:slug
 */

import React from 'react';
import { ServiceDetailTemplate } from './ServiceDetailTemplate';
import { ServicePageContent } from './types';

// Sample content for water damage restoration (dev preview)
const waterDamageContent: ServicePageContent = {
  serviceSlug: 'water-damage-restoration',
  hero: {
    // Title: 3 words (matching primary SEO keyword)
    title: 'Water Damage Restoration',
    // Headline used as H1: 3 words for clean layout
    headline: 'Water Damage Restoration',
    // Subtitle: 21 words (matches Google Keyword Planner line length)
    description:
      'When water damage strikes, our certified technicians respond within 60 minutes to extract water, dry your property, and restore your home.',
    heroImage: '/images/services/residential/water-damage-restoration.jpg',
    heroImageWebp: '/images/services/residential/water-damage-restoration.webp',
    heroImageAlt: 'Professional water damage restoration technician extracting water from flooded home in Northern Virginia',
    // Single CTA (Google parity)
    ctaText: 'Request Services',
    ctaHref: '#contact',
    phone: '(703) 425-6155',
    // Badges kept for data model compatibility (not rendered in pixel-perfect hero)
    badges: [
      { icon: 'clock', text: '60-Minute Response' },
      { icon: 'shield', text: 'IICRC Certified' },
      { icon: 'star', text: '4.9★ Rating' },
      { icon: 'check', text: 'Licensed & Insured' },
      { icon: 'phone', text: '24/7 Emergency' },
    ],
  },
  processTabs: [
    {
      id: 'assess',
      title: 'Assessment',
      headline: 'Comprehensive Damage Assessment',
      description:
        'Our certified technicians arrive within 60 minutes equipped with thermal imaging cameras and moisture meters. We document all damage, identify the water source, and create a detailed restoration plan.',
      icon: 'search',
      highlights: [
        { label: 'Response Time', value: '60 min' },
        { label: 'Assessment Fee', value: 'Free' },
        { label: 'Documentation', value: 'Photos + Report' },
      ],
    },
    {
      id: 'extract',
      title: 'Extraction',
      headline: 'Rapid Water Extraction',
      description:
        'Using truck-mounted extraction units and commercial pumps, we remove standing water quickly. Our submersible pumps can extract up to 25 gallons per minute, preventing further damage to your property.',
      icon: 'droplet',
      highlights: [
        { label: 'Pump Capacity', value: '25 GPM' },
        { label: 'Equipment', value: 'Truck-Mount' },
        { label: 'Carpet Extraction', value: 'Included' },
      ],
    },
    {
      id: 'dry',
      title: 'Drying',
      headline: 'Structural Drying & Monitoring',
      description:
        'We deploy commercial LGR dehumidifiers and high-velocity air movers strategically throughout your property. Daily moisture readings ensure we achieve complete drying before restoration begins.',
      icon: 'wind',
      highlights: [
        { label: 'Dehumidifiers', value: 'LGR Commercial' },
        { label: 'Air Movers', value: 'High-Velocity' },
        { label: 'Monitoring', value: 'Daily Readings' },
      ],
    },
    {
      id: 'restore',
      title: 'Restoration',
      headline: 'Complete Property Restoration',
      description:
        'Once drying is verified, we handle all repairs—from drywall replacement to floor restoration. We provide final documentation for your insurance and walk through the completed work with you.',
      icon: 'check',
      highlights: [
        { label: 'Warranty', value: '5 Years' },
        { label: 'Insurance', value: 'Direct Billing' },
        { label: 'Satisfaction', value: 'Guaranteed' },
      ],
    },
  ],
  whyChooseTabs: [
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
        'Truck-mounted extraction units',
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
  ],
  gettingStarted: {
    title: 'Getting Started with Water Damage Restoration',
    subtitle: "Don't wait for water damage to get worse. Contact us now for immediate assistance.",
    steps: [
      {
        number: 1,
        title: 'Call Our Emergency Line',
        description:
          'Call (703) 425-6155 any time, day or night. Our team is standing by 24/7 to respond to your water damage emergency.',
        icon: 'phone',
      },
      {
        number: 2,
        title: 'Get a Free Assessment',
        description:
          "We'll arrive within 60 minutes to assess the damage, explain our process, and provide a detailed estimate—completely free.",
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
  },
  expertPartnership: {
    title: 'Partner with Water Damage Restoration Experts',
    bullets: [
      "We'll assess the damage and create a comprehensive restoration plan",
      "We'll work directly with your insurance to maximize your coverage",
      "We'll restore your property to pre-loss condition with guaranteed results",
    ],
    ctaText: 'Schedule Assessment',
    ctaHref: '#contact',
    phone: '(703) 425-6155',
  },
  faqs: [
    {
      question: 'How quickly can you respond to a water damage emergency?',
      answer:
        'We respond to water damage emergencies within 60 minutes, 24 hours a day, 7 days a week. Our technicians are strategically located throughout Northern Virginia, Maryland, and Washington DC to ensure rapid response times.',
    },
    {
      question: 'Will my insurance cover water damage restoration?',
      answer:
        'Most homeowner insurance policies cover sudden and accidental water damage, such as burst pipes or appliance failures. We work directly with all major insurance companies and can help you navigate the claims process. Gradual damage from neglected maintenance is typically not covered.',
    },
    {
      question: 'How long does water damage restoration take?',
      answer:
        'The timeline depends on the extent of damage. Water extraction typically takes 1-2 days, while structural drying usually requires 3-5 days. Complete restoration, including any repairs, can take 1-2 weeks for moderate damage. We provide daily updates throughout the process.',
    },
    {
      question: 'Do I need to leave my home during restoration?',
      answer:
        "In most cases, you can remain in your home during restoration. We'll section off affected areas and use containment barriers. However, for severe damage or if there are health concerns (like sewage contamination), we may recommend temporary relocation.",
    },
    {
      question: 'What should I do while waiting for your technicians?',
      answer:
        "Turn off the water source if possible and move valuables to dry areas. If safe, open windows for ventilation. Don't use household fans as they can spread contaminants. Document damage with photos for insurance. Most importantly, don't wait—call us immediately at (703) 425-6155.",
    },
  ],
  relatedServices: [
    {
      title: 'Flood Cleanup',
      slug: '/services/residential/restoration/flood-cleanup/',
      description: 'Emergency flood water removal and property restoration services.',
    },
    {
      title: 'Mold Remediation',
      slug: '/services/residential/cleanup-services/mold-remediation/',
      description: 'Professional mold removal and prevention to protect your health.',
    },
    {
      title: 'Structural Drying',
      slug: '/services/residential/technical-services/structural-drying/',
      description: 'Commercial-grade drying to prevent secondary damage.',
    },
  ],
  meta: {
    title: 'Water Damage Restoration | Northern Virginia',
    description:
      'Professional water damage restoration in Northern Virginia, Maryland & DC. 60-minute emergency response, IICRC certified, direct insurance billing. Call (703) 425-6155.',
  },
};

/**
 * KeywordPlannerClone - Dev preview page
 * Shows the ServiceDetailTemplate with water damage restoration content
 */
const KeywordPlannerClone: React.FC = () => {
  return <ServiceDetailTemplate content={waterDamageContent} />;
};

export default KeywordPlannerClone;

// Export components for use in other pages
export { ServiceDetailTemplate } from './ServiceDetailTemplate';
export { Hero } from './Hero';
export { FeatureTabs } from './FeatureTabs';
export { GettingStarted } from './GettingStarted';
export { FAQ } from './FAQ';
export { ExpertPartnership } from './ExpertPartnership';
export { RelatedTools } from './RelatedTools';

// Export types
export type {
  ServicePageContent,
  ServiceHeroContent,
  ProcessTab,
  ProcessStep,
  FAQ as FAQType,
  WhyChooseTab,
  RelatedService,
  GettingStartedContent,
  ExpertPartnershipContent,
} from './types';

// Export adapter functions
export { adaptServiceToPageContent, getServicePageContent, extractServiceSlug } from './adapter';
