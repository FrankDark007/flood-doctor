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
// FLOOD CLEANUP - Emergency Flood Response
// =============================================================================
const floodCleanupOverride: ServicePageOverride = {
  slug: 'flood-cleanup',

  title: 'Emergency Flood Cleanup in Northern Virginia & DC',
  subtitle: 'Standing water causes irreversible damage within hours. Our truck-mounted extractors remove thousands of gallons per hour, preventing structural damage and mold growth. 24/7 emergency response across Fairfax, Arlington, Alexandria, and the DC Metro.',

  badges: [
    { text: '24/7 Emergency', icon: 'Siren' },
    { text: 'Industrial Equipment', icon: 'Truck' },
    { text: 'Same-Day Service', icon: 'Clock' },
  ],

  quickFacts: [
    { label: 'Capacity', value: '500+ GPH', icon: 'Droplets' },
    { label: 'Response', value: '< 60 Mins', icon: 'Timer' },
    { label: 'Coverage', value: 'NoVA & DC', icon: 'MapPin' },
    { label: 'Available', value: '24/7/365', icon: 'CalendarClock' },
  ],

  problemSolution: {
    problem: {
      title: 'Every Minute Matters',
      points: [
        'Water pooling on floors, seeping into subfloor and joists.',
        'Carpet padding acting like a sponge, trapping moisture.',
        'Water wicking up drywall, spreading damage higher.',
        'Furniture and belongings absorbing contaminated water.',
      ],
    },
    solution: {
      title: 'Rapid Extraction Protocol',
      points: [
        'Truck-mounted units extract 500+ gallons per hour.',
        'Weighted extraction tools pull water from carpet and pad.',
        'Hardwood floor drying mats prevent cupping and warping.',
        'Moisture meters verify complete water removal.',
      ],
    },
  },

  tabs: [
    {
      id: 'technology',
      label: 'Technology',
      title: 'Truck-Mounted Extraction Systems',
      description: 'Our extraction equipment removes water 10x faster than portable units, minimizing damage and drying time.',
      listItems: [
        'Truck-mounted extractors with 500+ GPH capacity',
        'Weighted wands for deep carpet extraction',
        'Hardwood floor drying systems to prevent warping',
        'Submersible pumps for flood-level water removal',
        'Moisture detection to verify complete extraction',
      ],
      icon: 'Cpu',
    },
    {
      id: 'insurance',
      label: 'Insurance',
      title: 'Direct Insurance Billing',
      description: 'Emergency extraction is covered by most homeowner policies. We document everything for your claim.',
      listItems: [
        'Direct billing to all major carriers',
        'Photo documentation of water levels',
        'Moisture readings before and after extraction',
        'Xactimate line-item estimates',
      ],
      icon: 'FileText',
    },
    {
      id: 'team',
      label: 'Team',
      title: 'Certified Extraction Technicians',
      description: 'Our crews are trained specifically in emergency water removal and structural drying protocols.',
      listItems: [
        'IICRC WRT certified technicians',
        'Experienced with all water categories',
        'Trained in safety protocols for contaminated water',
        'Background checked and uniformed crews',
      ],
      icon: 'Users',
    },
    {
      id: 'guarantee',
      label: 'Guarantee',
      title: 'Complete Water Removal Guaranteed',
      description: 'We verify extraction with moisture meters. If water remains, we return at no additional cost.',
      listItems: [
        'Moisture meter verification included',
        'Follow-up inspection within 24 hours',
        'No hidden fees on emergency calls',
        '100% satisfaction guarantee',
      ],
      icon: 'Shield',
    },
  ],

  testimonials: [
    {
      author: 'David R.',
      location: 'McLean, VA',
      rating: 5,
      date: '1 week ago',
      text: 'Basement flooded at 2 AM. They arrived in 45 minutes and had all the water out by sunrise. Incredible response.',
    },
    {
      author: 'Patricia K.',
      location: 'Bethesda, MD',
      rating: 5,
      date: '3 weeks ago',
      text: 'The extraction team was fast and thorough. They saved our hardwood floors from complete replacement.',
    },
    {
      author: 'James T.',
      location: 'Falls Church, VA',
      rating: 5,
      date: '2 months ago',
      text: 'Professional crew, serious equipment. They extracted water from three rooms in under two hours.',
    },
  ],

  pricing: {
    price: '$0',
    disclaimer: 'Emergency extraction covered by most policies',
    features: [
      'Emergency Response',
      'Water Level Documentation',
      'Complete Extraction Service',
      'Moisture Verification',
    ],
    ctaText: 'Request Flood Cleanup',
  },
};

// =============================================================================
// SEWAGE CLEANUP - Biohazard Water Damage
// =============================================================================
const sewageCleanupOverride: ServicePageOverride = {
  slug: 'sewage-cleanup',

  title: 'Sewage Cleanup & Biohazard Remediation in Northern Virginia',
  subtitle: 'Sewage backups contain dangerous bacteria, viruses, and parasites. Our IICRC-certified crews follow strict Category 3 protocols to safely remove contamination and restore your property. 24/7 emergency service throughout Northern Virginia and DC.',

  badges: [
    { text: 'Biohazard Certified', icon: 'Biohazard' },
    { text: 'Full Sanitization', icon: 'Sparkles' },
    { text: '24/7 Emergency', icon: 'Siren' },
  ],

  quickFacts: [
    { label: 'Category', value: 'Cat 3 Certified', icon: 'AlertTriangle' },
    { label: 'Response', value: '< 60 Mins', icon: 'Timer' },
    { label: 'Protocol', value: 'IICRC S500', icon: 'ClipboardCheck' },
    { label: 'Available', value: '24/7/365', icon: 'CalendarClock' },
  ],

  problemSolution: {
    problem: {
      title: 'Sewage Is a Health Emergency',
      points: [
        'Raw sewage backing up through drains and toilets.',
        'Foul odor spreading throughout the property.',
        'Contaminated water soaking into porous materials.',
        'Risk of E. coli, Hepatitis, and other pathogens.',
      ],
    },
    solution: {
      title: 'Category 3 Remediation Protocol',
      points: [
        'Full PPE and containment to prevent cross-contamination.',
        'Removal and disposal of all contaminated materials.',
        'Hospital-grade antimicrobial treatment of affected areas.',
        'Air scrubbing and deodorization for complete restoration.',
      ],
    },
  },

  tabs: [
    {
      id: 'technology',
      label: 'Technology',
      title: 'Biohazard-Grade Equipment',
      description: 'Sewage cleanup requires specialized equipment to safely remove contamination and sanitize affected areas.',
      listItems: [
        'Negative air machines to contain contamination',
        'HEPA air scrubbers for airborne pathogen removal',
        'Hospital-grade antimicrobial fogging systems',
        'ATP testing to verify surface sanitization',
        'Thermal foggers for odor neutralization',
      ],
      icon: 'Cpu',
    },
    {
      id: 'insurance',
      label: 'Insurance',
      title: 'Sewage Backup Coverage',
      description: 'Most policies cover sewage backup with proper documentation. We handle the entire claims process.',
      listItems: [
        'Detailed contamination documentation',
        'Material disposal manifests for insurance',
        'Before/after photo documentation',
        'Direct billing to your carrier',
      ],
      icon: 'FileText',
    },
    {
      id: 'team',
      label: 'Team',
      title: 'Biohazard-Certified Technicians',
      description: 'Our crews hold specialized certifications for handling Category 3 contaminated water safely.',
      listItems: [
        'IICRC AMRT (Applied Microbial Remediation) certified',
        'OSHA bloodborne pathogen trained',
        'Full PPE protocols followed on every job',
        'Hepatitis B vaccinated technicians',
      ],
      icon: 'Users',
    },
    {
      id: 'guarantee',
      label: 'Guarantee',
      title: 'Complete Sanitization Verified',
      description: 'We test surfaces after treatment to verify contamination has been eliminated.',
      listItems: [
        'ATP testing to verify sanitization',
        'Clearance documentation provided',
        'Odor elimination guaranteed',
        'Follow-up inspection included',
      ],
      icon: 'Shield',
    },
  ],

  testimonials: [
    {
      author: 'Robert M.',
      location: 'Vienna, VA',
      rating: 5,
      date: '2 weeks ago',
      text: 'Sewage backup in our basement was a nightmare. Flood Doctor handled everything safely and professionally. No smell, no trace.',
    },
    {
      author: 'Linda S.',
      location: 'Reston, VA',
      rating: 5,
      date: '1 month ago',
      text: 'They arrived in full protective gear and contained the area immediately. Very reassuring during a stressful situation.',
    },
    {
      author: 'Thomas B.',
      location: 'Springfield, VA',
      rating: 5,
      date: '6 weeks ago',
      text: 'Complete professionals. They removed contaminated materials, sanitized everything, and the insurance claim was seamless.',
    },
  ],

  pricing: {
    price: '$0',
    disclaimer: 'Sewage backup covered by most policies',
    features: [
      'Emergency Containment',
      'Contamination Assessment',
      'Material Disposal',
      'Sanitization & Clearance Testing',
    ],
    ctaText: 'Request Sewage Cleanup',
  },
};

// =============================================================================
// BURST PIPE CLEANUP - Emergency Plumbing Damage
// =============================================================================
const burstPipeOverride: ServicePageOverride = {
  slug: 'burst-pipe-cleanup',

  title: 'Burst Pipe Emergency Response in Northern Virginia & DC',
  subtitle: 'A burst pipe can release hundreds of gallons per hour, causing catastrophic damage in minutes. Our 24/7 crews arrive within 60 minutes to stop the water, extract the flooding, and begin structural drying. Direct insurance billing available.',

  badges: [
    { text: '60-Min Response', icon: 'Clock' },
    { text: 'Water Shutoff', icon: 'Droplet' },
    { text: 'Full Restoration', icon: 'Wrench' },
  ],

  quickFacts: [
    { label: 'Response', value: '< 60 Mins', icon: 'Timer' },
    { label: 'Service', value: 'Shutoff + Dry', icon: 'Droplets' },
    { label: 'Coverage', value: 'NoVA & DC', icon: 'MapPin' },
    { label: 'Available', value: '24/7/365', icon: 'CalendarClock' },
  ],

  problemSolution: {
    problem: {
      title: 'Burst Pipes Cause Rapid Damage',
      points: [
        'Water spraying from walls, ceilings, or under sinks.',
        'Supply lines releasing 8+ gallons per minute.',
        'Multiple rooms flooding before shutoff is found.',
        'Ceiling collapse risk from water weight above.',
      ],
    },
    solution: {
      title: 'Emergency Pipe Response',
      points: [
        'Immediate water shutoff and source isolation.',
        'Rapid extraction before water spreads further.',
        'Structural drying to prevent mold and warping.',
        'Coordination with plumber for permanent repair.',
      ],
    },
  },

  tabs: [
    {
      id: 'technology',
      label: 'Technology',
      title: 'Rapid Response Equipment',
      description: 'We deploy extraction and drying equipment immediately to minimize damage from burst pipes.',
      listItems: [
        'Truck-mounted extractors for rapid water removal',
        'Thermal cameras to trace water migration',
        'Injectidry systems for wall cavity drying',
        'LGR dehumidifiers for structural drying',
        'Air movers for accelerated evaporation',
      ],
      icon: 'Cpu',
    },
    {
      id: 'insurance',
      label: 'Insurance',
      title: 'Pipe Burst Coverage',
      description: 'Sudden pipe bursts are typically covered by homeowner insurance. We document everything for your claim.',
      listItems: [
        'Cause and origin documentation',
        'Water migration mapping with thermal imaging',
        'Xactimate estimates for insurance approval',
        'Direct billing to major carriers',
      ],
      icon: 'FileText',
    },
    {
      id: 'team',
      label: 'Team',
      title: 'Emergency Response Crews',
      description: 'Our technicians are trained to respond quickly and efficiently to active water emergencies.',
      listItems: [
        'IICRC WRT certified technicians',
        'Trained in emergency water shutoff',
        'Experience with supply and drain line failures',
        '24/7 dispatch with GPS-tracked crews',
      ],
      icon: 'Users',
    },
    {
      id: 'guarantee',
      label: 'Guarantee',
      title: 'Dry Structure Guaranteed',
      description: 'We monitor drying progress daily and guarantee your structure meets dry standard before we leave.',
      listItems: [
        'Daily moisture monitoring included',
        'Dry standard verification with meters',
        '1-year workmanship warranty',
        'Post-project follow-up inspection',
      ],
      icon: 'Shield',
    },
  ],

  testimonials: [
    {
      author: 'Nancy W.',
      location: 'Arlington, VA',
      rating: 5,
      date: '1 week ago',
      text: 'Pipe burst in the upstairs bathroom and water was pouring through the ceiling. They arrived in 40 minutes and saved our first floor.',
    },
    {
      author: 'Kevin H.',
      location: 'Fairfax, VA',
      rating: 5,
      date: '3 weeks ago',
      text: 'Supply line to the fridge failed while we were at work. Flood Doctor extracted water from three rooms and handled our insurance claim.',
    },
    {
      author: 'Angela D.',
      location: 'Tysons, VA',
      rating: 5,
      date: '2 months ago',
      text: 'Fast, professional, thorough. They dried everything properly and there was no mold. Highly recommend for any pipe emergency.',
    },
  ],

  pricing: {
    price: '$0',
    disclaimer: 'Sudden pipe bursts covered by most policies',
    features: [
      'Emergency Water Shutoff',
      'Rapid Extraction Service',
      'Structural Drying',
      'Insurance Documentation',
    ],
    ctaText: 'Request Burst Pipe Help',
  },
};

// =============================================================================
// BASEMENT FLOODING - Below-Grade Water Damage
// =============================================================================
const basementFloodingOverride: ServicePageOverride = {
  slug: 'basement-flooding',

  title: 'Basement Flooding Restoration in Northern Virginia & DC',
  subtitle: 'Basement floods require specialized below-grade drying techniques. Whether from groundwater intrusion, sump pump failure, or storm flooding, our crews extract water and dry your basement properly. 24/7 emergency response throughout the DC Metro.',

  badges: [
    { text: '24/7 Emergency', icon: 'Siren' },
    { text: 'Below-Grade Expert', icon: 'ArrowDownToLine' },
    { text: 'Mold Prevention', icon: 'Shield' },
  ],

  quickFacts: [
    { label: 'Response', value: '< 60 Mins', icon: 'Timer' },
    { label: 'Specialty', value: 'Below-Grade', icon: 'ArrowDownToLine' },
    { label: 'Coverage', value: 'NoVA & DC', icon: 'MapPin' },
    { label: 'Available', value: '24/7/365', icon: 'CalendarClock' },
  ],

  problemSolution: {
    problem: {
      title: 'Basements Trap Moisture',
      points: [
        'Standing water from sump pump failure or storms.',
        'Groundwater seeping through foundation walls.',
        'High humidity causing mold growth within 24-48 hours.',
        'Finished basement materials absorbing water rapidly.',
      ],
    },
    solution: {
      title: 'Below-Grade Drying Protocol',
      points: [
        'Submersible pumps remove standing water quickly.',
        'Targeted drying for concrete and foundation walls.',
        'Antimicrobial treatment to prevent mold growth.',
        'Dehumidification to control basement humidity.',
      ],
    },
  },

  tabs: [
    {
      id: 'technology',
      label: 'Technology',
      title: 'Below-Grade Drying Systems',
      description: 'Basements require specialized equipment designed for high-humidity, below-grade environments.',
      listItems: [
        'Submersible pumps for deep water extraction',
        'LGR dehumidifiers rated for basement conditions',
        'Injectidry wall drying systems',
        'Concrete drying mats for slab moisture',
        'Thermal imaging to find hidden moisture',
      ],
      icon: 'Cpu',
    },
    {
      id: 'insurance',
      label: 'Insurance',
      title: 'Basement Flood Coverage',
      description: 'Coverage depends on flood source. We document cause and origin to support your claim.',
      listItems: [
        'Cause and origin investigation',
        'Sump pump failure documentation',
        'Storm damage vs. groundwater assessment',
        'Flood insurance claim assistance',
      ],
      icon: 'FileText',
    },
    {
      id: 'team',
      label: 'Team',
      title: 'Basement Restoration Specialists',
      description: 'Our crews have extensive experience with finished and unfinished basement restoration.',
      listItems: [
        'IICRC WRT and ASD certified',
        'Experienced with all basement types',
        'Foundation moisture assessment training',
        'Mold prevention specialists',
      ],
      icon: 'Users',
    },
    {
      id: 'guarantee',
      label: 'Guarantee',
      title: 'Dry Basement Guaranteed',
      description: 'We verify drying with moisture meters and provide documentation for your records.',
      listItems: [
        'Moisture verification before equipment removal',
        'Humidity monitoring throughout drying',
        'Mold prevention treatment included',
        'Follow-up inspection available',
      ],
      icon: 'Shield',
    },
  ],

  testimonials: [
    {
      author: 'Steven G.',
      location: 'Herndon, VA',
      rating: 5,
      date: '2 weeks ago',
      text: 'Sump pump failed during a storm. Flood Doctor pumped out 6 inches of water and saved our finished basement.',
    },
    {
      author: 'Maria L.',
      location: 'Alexandria, VA',
      rating: 5,
      date: '1 month ago',
      text: 'Groundwater came through the foundation walls. They dried everything properly and no mold developed. Very thorough.',
    },
    {
      author: 'Richard P.',
      location: 'Ashburn, VA',
      rating: 5,
      date: '6 weeks ago',
      text: 'Professional basement flood restoration. They explained everything, worked with our insurance, and the basement is better than before.',
    },
  ],

  pricing: {
    price: '$0',
    disclaimer: 'Coverage varies by flood source',
    features: [
      'Emergency Pumping',
      'Cause Investigation',
      'Below-Grade Drying',
      'Mold Prevention Treatment',
    ],
    ctaText: 'Request Basement Help',
  },
};

// =============================================================================
// MOLD REMEDIATION - Professional Mold Removal
// =============================================================================
const moldRemediationOverride: ServicePageOverride = {
  slug: 'mold-remediation',

  title: 'Mold Remediation & Removal in Northern Virginia & DC',
  subtitle: 'Mold spreads rapidly and poses serious health risks. Our IICRC-certified crews follow strict containment protocols to safely remove mold and restore healthy indoor air quality. Serving Fairfax, Arlington, Alexandria, and the entire DC Metro.',

  badges: [
    { text: 'IICRC Certified', icon: 'Award' },
    { text: 'Full Containment', icon: 'ShieldCheck' },
    { text: 'Clearance Testing', icon: 'ClipboardCheck' },
  ],

  quickFacts: [
    { label: 'Protocol', value: 'IICRC S520', icon: 'ClipboardCheck' },
    { label: 'Testing', value: 'Clearance Incl.', icon: 'TestTube' },
    { label: 'Coverage', value: 'NoVA & DC', icon: 'MapPin' },
    { label: 'Response', value: '24-48 Hours', icon: 'Timer' },
  ],

  problemSolution: {
    problem: {
      title: 'Mold Is a Health Hazard',
      points: [
        'Visible mold growth on walls, ceilings, or belongings.',
        'Musty odors indicating hidden mold colonies.',
        'Respiratory symptoms or allergic reactions.',
        'Previous water damage that was not properly dried.',
      ],
    },
    solution: {
      title: 'Professional Remediation Protocol',
      points: [
        'Full containment to prevent spore spread.',
        'HEPA filtration to capture airborne mold.',
        'Safe removal of contaminated materials.',
        'Third-party clearance testing to verify success.',
      ],
    },
  },

  tabs: [
    {
      id: 'technology',
      label: 'Technology',
      title: 'Mold Remediation Equipment',
      description: 'We use professional-grade equipment to contain, remove, and verify mold elimination.',
      listItems: [
        'Negative air machines for full containment',
        'HEPA air scrubbers capturing 99.97% of spores',
        'Antimicrobial treatments for affected surfaces',
        'Moisture meters to address the source',
        'Air quality testing equipment',
      ],
      icon: 'Cpu',
    },
    {
      id: 'insurance',
      label: 'Insurance',
      title: 'Mold Coverage Guidance',
      description: 'Mold coverage varies by policy. We provide documentation and work with your carrier.',
      listItems: [
        'Cause and origin documentation',
        'Photo evidence of contamination',
        'Scope of work documentation',
        'Clearance test results for claim support',
      ],
      icon: 'FileText',
    },
    {
      id: 'team',
      label: 'Team',
      title: 'AMRT Certified Technicians',
      description: 'Our mold remediation crews hold the highest industry certifications for safe mold removal.',
      listItems: [
        'IICRC AMRT (Applied Microbial Remediation) certified',
        'Full PPE protocols on every project',
        'Trained in containment and negative pressure',
        'Experience with all mold species',
      ],
      icon: 'Users',
    },
    {
      id: 'guarantee',
      label: 'Guarantee',
      title: 'Clearance Testing Included',
      description: 'We include post-remediation verification to ensure mold has been successfully eliminated.',
      listItems: [
        'Third-party clearance testing available',
        'Visual inspection and moisture verification',
        'Written clearance documentation',
        '1-year warranty on remediation work',
      ],
      icon: 'Shield',
    },
  ],

  testimonials: [
    {
      author: 'Christine R.',
      location: 'McLean, VA',
      rating: 5,
      date: '2 weeks ago',
      text: 'Found mold behind our bathroom vanity. Flood Doctor contained the area, removed the mold, and passed clearance testing. Very professional.',
    },
    {
      author: 'Daniel K.',
      location: 'Fairfax, VA',
      rating: 5,
      date: '1 month ago',
      text: 'They explained the entire process, set up proper containment, and my allergies improved immediately after remediation.',
    },
    {
      author: 'Susan M.',
      location: 'Vienna, VA',
      rating: 5,
      date: '2 months ago',
      text: 'Thorough mold remediation after a leak we did not know about. They found the source, fixed it, and cleared the mold. Highly recommend.',
    },
  ],

  pricing: {
    price: 'Free Assessment',
    disclaimer: 'Coverage varies by policy',
    features: [
      'Mold Inspection',
      'Containment Setup',
      'Safe Mold Removal',
      'Clearance Verification',
    ],
    ctaText: 'Request Mold Assessment',
  },
};

// =============================================================================
// EXPORT ALL OVERRIDES
// =============================================================================

export const SERVICE_PAGE_OVERRIDES: Record<string, ServicePageOverride> = {
  'water-damage-restoration': waterDamageOverride,
  'flood-cleanup': floodCleanupOverride,
  'sewage-cleanup': sewageCleanupOverride,
  'burst-pipe-cleanup': burstPipeOverride,
  'basement-flooding': basementFloodingOverride,
  'mold-remediation': moldRemediationOverride,
};

/**
 * Get override for a specific service slug
 */
export function getServicePageOverride(slug: string): ServicePageOverride | undefined {
  return SERVICE_PAGE_OVERRIDES[slug];
}
