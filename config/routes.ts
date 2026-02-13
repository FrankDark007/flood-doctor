/**
 * Single source of truth for all route enumeration.
 * Used by: scripts/prerender.ts, scripts/generate-sitemaps.ts, scripts/verify-prerender.ts
 */

import { SERVICES } from '../data/services';

// ── Core Pages ──────────────────────────────────────────────────────────────

export const CORE_ROUTES: string[] = [
  '/',
  '/about/',
  '/contact/',
  '/request/',
  '/reviews/',
  '/awards/',
  '/locations/',
  '/sign/',
  '/work-authorization/',
  '/contract/',
  '/emergency/',
];

// ── Service Hubs & Category Pages ───────────────────────────────────────────

export const SERVICE_HUB_ROUTES: string[] = [
  '/services/',
  '/services/residential/',
  '/services/commercial/',
  '/services/residential/restoration-services/',
  '/services/residential/cleanup-services/',
  '/services/residential/specialty-services/',
  '/services/residential/variant-a/',
  '/services/commercial/restoration-services/',
  '/services/commercial/cleanup-services/',
  '/services/commercial/technical-services/',
  '/services/commercial/specialty-services/',
  '/commercial/healthcare/',
];

// ── Dynamic Service Leaf Pages (derived from data) ──────────────────────────

export const SERVICE_LEAF_ROUTES: string[] = SERVICES.map(s => s.slug);

// ── Location Pages ──────────────────────────────────────────────────────────

export const LOCATION_ROUTES: string[] = [
  // Alexandria
  '/locations/alexandria-water-damage/',
  '/locations/alexandria-mold-removal/',
  '/locations/alexandria-flood-cleanup/',
  '/locations/alexandria-basement-flooding/',
  // Arlington
  '/locations/arlington-water-damage/',
  '/locations/arlington-mold-removal/',
  '/locations/arlington-flood-cleanup/',
  '/locations/arlington-basement-flooding/',
  // Fairfax
  '/locations/fairfax-water-damage/',
  '/locations/fairfax-mold-removal/',
  '/locations/fairfax-flood-cleanup/',
  '/locations/fairfax-basement-flooding/',
  // McLean
  '/locations/mclean-water-damage/',
  '/locations/mclean-mold-removal/',
  '/locations/mclean-flood-cleanup/',
  '/locations/mclean-basement-flooding/',
  // Tysons
  '/locations/tysons-water-damage/',
  // Reston
  '/locations/reston-water-damage/',
  '/locations/reston-mold-removal/',
  // Ashburn
  '/locations/ashburn-water-damage/',
  '/locations/ashburn-mold-removal/',
  // Herndon
  '/locations/herndon-water-damage/',
  '/locations/herndon-mold-removal/',
  '/locations/herndon-flood-cleanup/',
  '/locations/herndon-basement-flooding/',
  // Springfield
  '/locations/springfield-water-damage/',
  '/locations/springfield-mold-removal/',
  // Falls Church
  '/locations/falls-church-water-damage/',
  '/locations/falls-church-mold-removal/',
];

// ── Keyword Landing Pages ───────────────────────────────────────────────────

export const KEYWORD_LANDING_ROUTES: string[] = [
  // Location-specific
  '/water-damage-restoration-arlington-va/',
  '/water-damage-restoration-fairfax-va/',
  '/water-damage-restoration-alexandria-va/',
  '/water-damage-restoration-springfield-va/',
  '/water-damage-restoration-reston-va/',
  '/water-damage-restoration-ashburn-va/',
  '/water-damage-restoration-mclean-va/',
  '/water-damage-restoration-great-falls-va/',
  '/water-damage-restoration-falls-church-va/',
  '/water-damage-restoration-vienna-va/',
  // Service-specific
  '/water-damage-restoration-services/',
  '/water-damage-cleanup/',
  '/water-damage-repair/',
  '/flood-damage-restoration/',
  '/water-restoration/',
  '/flood-damage-cleanup/',
  '/emergency-water-damage-restoration/',
  '/water-damage-restoration-company/',
  '/water-mitigation/',
  '/basement-flood-restoration/',
  '/flood-cleanup-services/',
  '/water-remediation/',
  // Near Me
  '/nearme/water-damage-restoration/',
];

// ── Blog Routes ─────────────────────────────────────────────────────────────

export const BLOG_ROUTES: string[] = [
  '/blog/',
  '/blog/emergency-water-damage-response-virginia/',
  '/blog/mold-after-water-damage-virginia/',
  '/blog/sump-pump-failure-basement-flooding-nova/',
  '/blog/commercial-water-damage-business-continuity/',
  '/blog/crawl-space-moisture-virginia-homes/',
  '/blog/appliance-water-damage-dishwasher-washing-machine/',
  '/blog/roof-leak-water-damage-virginia-storms/',
  '/blog/sewage-backup-cleanup-health-risks-virginia/',
  '/blog/water-damage-restoration-timeline/',
  '/blog/basement-flooding-loudoun-county/',
  '/blog/water-damage-northern-virginia-guide/',
  '/blog/homeowners-insurance-water-damage-virginia/',
  '/blog/water-damage-restoration-cost-fairfax/',
  '/blog/commercial-water-damage-restoration-dc/',
  '/blog/hidden-water-damage-signs-arlington/',
  '/blog/burst-pipe-emergency-response/',
  '/blog/mold-growth-after-water-damage-timeline/',
  '/blog/sewage-cleanup-alexandria-va/',
  '/blog/basement-flooding-guide/',
  '/blog/bathroom-water-damage-guide/',
  '/blog/water-damage-home-selling-disclosure/',
  '/blog/hvac-water-damage-guide/',
  '/blog/hidden-water-damage-signs/',
  '/blog/drywall-water-damage-guide/',
  '/blog/frozen-burst-pipes-guide/',
  '/blog/hardwood-floor-water-damage/',
  '/blog/ceiling-water-damage-guide/',
  '/blog/kitchen-water-damage-guide/',
  '/blog/attic-water-damage-guide/',
  '/blog/rental-property-water-damage-virginia/',
  '/blog/water-damaged-furniture-restoration/',
  '/blog/professional-drying-dehumidification/',
  '/blog/musty-smell-odor-removal-guide/',
  '/blog/water-heater-flooding-guide/',
  '/blog/window-door-water-intrusion/',
  '/blog/water-damage-home-warranty-coverage/',
  '/blog/vacation-water-damage-prevention/',
  '/blog/condo-water-damage-hoa-guide/',
  '/blog/water-damaged-electronics-guide/',
  '/blog/laundry-room-washing-machine-flood/',
  '/blog/wet-carpet-water-damage/',
  // SEO Phase 3
  '/blog/what-does-black-mold-look-like/',
  '/blog/mildew-vs-mold-difference/',
  '/blog/does-vinegar-kill-mold/',
  '/blog/signs-of-water-damage-behind-walls/',
];

// ── Resource Routes ─────────────────────────────────────────────────────────

export const RESOURCE_ROUTES: string[] = [
  '/resources/',
  '/resources/faq/',
  '/resources/insurance-guide/',
  '/resources/homeowner-guides/',
  '/resources/emergency-checklists/',
  '/resources/technology/',
  '/resources/communication/',
  '/resources/insurance-claims-guide/',
  '/resources/water-damage-cost-guide/',
  '/resources/mold-prevention-guide/',
  '/resources/water-damage-categories/',
  '/resources/signs-of-water-damage/',
  '/resources/cost-calculator/',
  '/resources/water-damage-classes-guide/',
  '/resources/virginia-insurance-guide/',
  '/resources/structural-drying-guide/',
  '/resources/mold-remediation-standards/',
  '/resources/emergency-preparedness-northern-va/',
  '/resources/emergency-checklist/',
  '/resources/choosing-restoration-company/',
  '/resources/home-waterproofing-guide/',
  '/resources/insurance-documentation-guide/',
  '/resources/restoration-timeline-guide/',
  '/resources/winter-pipe-protection/',
  '/resources/basement-flooding-prevention/',
  '/resources/types-of-mold/',
];

// ── Guide Routes ────────────────────────────────────────────────────────────

export const GUIDE_ROUTES: string[] = [
  '/guides/',
  '/guides/water-damage-cleanup/',
  '/guides/mold-remediation/',
  '/guides/water-damage-insurance-claim/',
  '/guides/basement-waterproofing/',
  '/guides/burst-pipe-emergency/',
  '/guides/flood-preparation/',
  // Insurance company guides
  '/guides/insurance/',
  '/guides/insurance/usaa-water-damage-claim/',
  '/guides/insurance/state-farm-water-damage-claim/',
  '/guides/insurance/allstate-water-damage-claim/',
  '/guides/insurance/nationwide-water-damage-claim/',
  '/guides/insurance/geico-water-damage-claim/',
  // City-specific guides
  '/guides/emergency-response/',
  '/guides/prevention/',
  '/guides/insurance-claims/',
  '/guides/city/',
];

// ── Legal & Misc ────────────────────────────────────────────────────────────

export const LEGAL_ROUTES: string[] = [
  '/careers/',
  '/privacy-policy/',
  '/terms/',
];

export const MISC_ROUTES: string[] = [
  '/portal-demo/',
];

// ── Composite: All production routes to pre-render ──────────────────────────

export const ALL_PRERENDER_ROUTES: string[] = [
  ...CORE_ROUTES,
  ...SERVICE_HUB_ROUTES,
  ...SERVICE_LEAF_ROUTES,
  ...LOCATION_ROUTES,
  ...KEYWORD_LANDING_ROUTES,
  ...BLOG_ROUTES,
  ...RESOURCE_ROUTES,
  ...GUIDE_ROUTES,
  ...LEGAL_ROUTES,
  ...MISC_ROUTES,
];

// ── City Subdomain Data (used by generate-sitemaps.ts) ──────────────────────

export const CITY_SUBDOMAINS: { slug: string; name: string }[] = [
  { slug: 'mclean', name: 'McLean' },
  { slug: 'arlington', name: 'Arlington' },
  { slug: 'alexandria', name: 'Alexandria' },
  { slug: 'fairfax', name: 'Fairfax' },
  { slug: 'vienna', name: 'Vienna' },
  { slug: 'tysons', name: 'Tysons' },
  { slug: 'reston', name: 'Reston' },
  { slug: 'herndon', name: 'Herndon' },
  { slug: 'ashburn', name: 'Ashburn' },
  { slug: 'springfield', name: 'Springfield' },
  { slug: 'fallschurch', name: 'Falls Church' },
  { slug: 'greatfalls', name: 'Great Falls' },
  { slug: 'lorton', name: 'Lorton' },
];

export const CITY_SERVICES: string[] = [
  'water-damage',
  'basement-flooding',
  'burst-pipe',
  'flood-cleanup',
  'mold-remediation',
  'sewage-cleanup',
  'storm-damage',
  'fire-damage',
];

export const CITY_NEIGHBORHOODS: Record<string, string[]> = {
  mclean: ['chesterbrook', 'langley', 'salona-village', 'the-reserve', 'woodside-estates'],
  arlington: ['ballston', 'clarendon', 'crystal-city', 'pentagon-city', 'rosslyn', 'shirlington'],
  alexandria: ['belle-haven', 'carlyle', 'del-ray', 'kingstowne', 'old-town', 'rosemont'],
  fairfax: ['burke', 'burke-centre', 'fairfax-city', 'kings-park', 'mantua'],
  vienna: ['clarks-crossing', 'dunn-loring', 'oakton', 'tysons-woods', 'vienna-town', 'wolftrap'],
  tysons: ['scotts-run', 'the-boro', 'the-mile', 'tysons-central', 'tysons-corner'],
  reston: ['hunters-woods', 'lake-anne', 'north-point', 'reston-town-center', 'south-lakes'],
  herndon: ['downtown-herndon', 'fox-mill', 'franklin-farm', 'mcnair', 'worldgate'],
  ashburn: ['ashburn-farm', 'belmont', 'brambleton', 'broadlands', 'one-loudoun'],
  springfield: ['franconia', 'kingstowne', 'newington', 'rolling-valley', 'west-springfield'],
  fallschurch: ['baileys-crossroads', 'falls-church-city', 'lake-barcroft', 'pimmit-hills', 'seven-corners'],
  greatfalls: ['forestville', 'great-falls-village', 'hickory-farms', 'riverbend', 'seneca-estates'],
  lorton: ['gunston', 'laurel-hill', 'mason-neck', 'occoquan', 'south-county'],
};

export const CITY_BLOG_ARTICLES: Record<string, string[]> = {
  mclean: [
    'mclean-basement-flooding-prevention-guide',
    'mclean-hidden-mold-risk-signs-prevention',
    'protecting-mclean-investment-water-damage-property-values',
    'what-to-do-when-your-mclean-home-floods',
    'why-mclean-homes-face-unique-water-damage-risks',
  ],
  arlington: [
    'arlington-condo-hoa-water-damage-guide',
    'arlington-mold-high-rise-guide',
    'high-rise-water-damage-prevention-guide',
    'underground-parking-flooding-response',
    'what-to-do-condo-flooding-emergency',
  ],
  alexandria: [
    'alexandria-basement-waterproofing-guide',
    'alexandria-mold-prevention-guide',
    'old-town-alexandria-water-damage-historic-homes',
    'potomac-river-flooding-alexandria-guide',
    'what-to-do-burst-pipe-alexandria',
  ],
  fairfax: [
    'fairfax-basement-flooding-causes-solutions',
    'fairfax-mold-after-water-damage',
    'fairfax-sump-pump-failure-prevention',
    'fairfax-water-damage-emergency-guide',
    'fairfax-water-damage-insurance-claims',
  ],
  vienna: [
    'vienna-basement-flooding-solutions',
    'vienna-mold-prevention-tips',
    'vienna-older-home-water-damage',
    'vienna-plumbing-failure-prevention',
    'vienna-water-damage-emergency-guide',
  ],
  tysons: [
    'tysons-commercial-water-damage-guide',
    'tysons-high-rise-water-damage-guide',
    'tysons-new-construction-water-damage',
    'tysons-underground-parking-flooding',
    'tysons-water-damage-prevention-condos',
  ],
  reston: [
    'reston-basement-flooding-prevention',
    'reston-mold-prevention-humid-climate',
    'reston-townhome-water-damage-guide',
    'reston-water-damage-emergency-response',
    'reston-water-heater-failure-prevention',
  ],
  herndon: [
    'herndon-basement-waterproofing-guide',
    'herndon-mold-prevention-guide',
    'herndon-water-damage-emergency-guide',
  ],
  ashburn: [
    'ashburn-basement-flooding-solutions',
    'ashburn-mold-prevention-guide',
    'ashburn-new-construction-water-damage',
    'ashburn-water-damage-emergency-guide',
    'ashburn-water-damage-insurance-guide',
  ],
  springfield: [
    'springfield-basement-flooding-prevention',
    'springfield-mold-prevention-guide',
    'springfield-water-damage-emergency-guide',
  ],
  fallschurch: [
    'falls-church-basement-moisture-control',
    'falls-church-older-home-plumbing',
    'falls-church-water-damage-emergency-guide',
  ],
  greatfalls: [
    'great-falls-basement-water-protection',
    'great-falls-storm-damage-preparation',
    'great-falls-water-damage-luxury-homes',
  ],
  lorton: [
    'lorton-basement-mold-prevention',
    'lorton-new-construction-water-damage',
    'lorton-water-damage-emergency-guide',
  ],
};
