/**
 * Service Hero Tiles Mapping
 *
 * Maps service slugs to custom hero images for service detail pages.
 * Services not listed here will use the default ServiceDetailHeroAnimation SVG.
 */

const HERO_IMAGES = '/images/services';

export interface ServiceHeroTile {
  /** Path to the hero image (JPG) */
  image: string;
  /** Path to WebP version for modern browsers */
  webp: string;
  /** Alt text for accessibility */
  alt: string;
}

/**
 * Maps service slugs to their hero images.
 * All images have both JPG and WebP versions for optimal loading.
 */
export const serviceHeroTiles: Record<string, ServiceHeroTile> = {
  // ============================================
  // RESIDENTIAL SERVICES
  // ============================================

  // ============================================
  // RESIDENTIAL SERVICES
  // ============================================

  // --- Services with dedicated images ---

  'water-damage-restoration': {
    image: `${HERO_IMAGES}/residential/water-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/water-damage-restoration.webp`,
    alt: 'Professional water damage restoration - technicians extracting water and drying flooded home'
  },
  'water-damage': {
    image: `${HERO_IMAGES}/residential/water-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/water-damage-restoration.webp`,
    alt: 'Water damage restoration - emergency water extraction and structural drying'
  },

  'burst-pipe-water-damage': {
    image: `${HERO_IMAGES}/residential/burst-pipe-water-damage.jpg`,
    webp: `${HERO_IMAGES}/residential/burst-pipe-water-damage.webp`,
    alt: 'Burst pipe water damage cleanup - emergency water extraction and pipe repair'
  },
  'burst-pipe': {
    image: `${HERO_IMAGES}/residential/burst-pipe-water-damage.jpg`,
    webp: `${HERO_IMAGES}/residential/burst-pipe-water-damage.webp`,
    alt: 'Burst pipe cleanup - emergency frozen pipe water damage repair'
  },

  'burst-pipe-cleanup': {
    image: `${HERO_IMAGES}/residential/burst-pipe-water-damage.jpg`,
    webp: `${HERO_IMAGES}/residential/burst-pipe-water-damage.webp`,
    alt: 'Burst pipe cleanup - emergency water extraction for frozen and burst pipes'
  },

  'fire-damage-restoration': {
    image: `${HERO_IMAGES}/residential/fire-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/fire-damage-restoration.webp`,
    alt: 'Fire and smoke damage restoration - professional cleanup and restoration services'
  },
  'fire-smoke': {
    image: `${HERO_IMAGES}/residential/fire-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/fire-damage-restoration.webp`,
    alt: 'Fire and smoke damage cleanup - soot removal and smoke odor elimination'
  },

  'flood-damage-cleanup': {
    image: `${HERO_IMAGES}/residential/flood-damage-cleanup.jpg`,
    webp: `${HERO_IMAGES}/residential/flood-damage-cleanup.webp`,
    alt: 'Flood damage cleanup - emergency water removal and property restoration'
  },
  'flood-cleanup': {
    image: `${HERO_IMAGES}/residential/flood-damage-cleanup.jpg`,
    webp: `${HERO_IMAGES}/residential/flood-damage-cleanup.webp`,
    alt: 'Flood cleanup - emergency flood water removal and restoration'
  },

  'mold-remediation': {
    image: `${HERO_IMAGES}/residential/mold-remediation.jpg`,
    webp: `${HERO_IMAGES}/residential/mold-remediation.webp`,
    alt: 'Professional mold remediation - certified technicians removing mold safely'
  },

  'roof-leak-water-damage': {
    image: `${HERO_IMAGES}/residential/roof-leak-water-damage.jpg`,
    webp: `${HERO_IMAGES}/residential/roof-leak-water-damage.webp`,
    alt: 'Roof leak water damage repair - emergency tarping and interior water damage restoration'
  },
  'roof-leak': {
    image: `${HERO_IMAGES}/residential/roof-leak-water-damage.jpg`,
    webp: `${HERO_IMAGES}/residential/roof-leak-water-damage.webp`,
    alt: 'Roof leak water damage - ceiling and attic restoration'
  },

  'sewage-cleanup': {
    image: `${HERO_IMAGES}/residential/sewage-cleanup.jpg`,
    webp: `${HERO_IMAGES}/residential/sewage-cleanup.webp`,
    alt: 'Sewage cleanup and sanitization - biohazard remediation by certified professionals'
  },

  'storm-damage-restoration': {
    image: `${HERO_IMAGES}/residential/storm-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/storm-damage-restoration.webp`,
    alt: 'Storm damage restoration - emergency response for wind, rain, and flood damage'
  },
  'storm-damage': {
    image: `${HERO_IMAGES}/residential/storm-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/storm-damage-restoration.webp`,
    alt: 'Storm damage restoration - wind, hail, and hurricane damage repair'
  },

  'structural-drying': {
    image: `${HERO_IMAGES}/residential/structural-drying.jpg`,
    webp: `${HERO_IMAGES}/residential/structural-drying.webp`,
    alt: 'Structural drying services - industrial dehumidifiers and air movers drying water-damaged structure'
  },

  'contents-restoration': {
    image: `${HERO_IMAGES}/residential/contents-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/contents-restoration.webp`,
    alt: 'Contents restoration - professional cleaning and restoration of water-damaged belongings'
  },
  'contents-packout': {
    image: `${HERO_IMAGES}/residential/contents-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/contents-restoration.webp`,
    alt: 'Contents pack-out and cleaning - inventory-tracked belongings restoration'
  },

  // --- Residential services reusing closest related image ---

  'odor-removal': {
    image: `${HERO_IMAGES}/residential/fire-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/fire-damage-restoration.webp`,
    alt: 'Professional odor removal - smoke, pet, mold, and sewage odor elimination'
  },

  'basement-flooding': {
    image: `${HERO_IMAGES}/residential/flood-damage-cleanup.jpg`,
    webp: `${HERO_IMAGES}/residential/flood-damage-cleanup.webp`,
    alt: 'Basement flooding cleanup - emergency water removal and drying'
  },

  'crawl-space': {
    image: `${HERO_IMAGES}/residential/structural-drying.jpg`,
    webp: `${HERO_IMAGES}/residential/structural-drying.webp`,
    alt: 'Crawl space drying and moisture control - encapsulation and dehumidification'
  },

  'hardwood-drying': {
    image: `${HERO_IMAGES}/residential/water-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/water-damage-restoration.webp`,
    alt: 'Hardwood floor drying - specialty injection drying to save water-damaged floors'
  },

  // ============================================
  // COMMERCIAL SERVICES
  // ============================================

  // --- Services with dedicated images ---

  'commercial-water-damage': {
    image: `${HERO_IMAGES}/commercial/commercial-water-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-water-damage.webp`,
    alt: 'Commercial water damage restoration - large-scale water extraction for businesses'
  },
  'com-water': {
    image: `${HERO_IMAGES}/commercial/commercial-water-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-water-damage.webp`,
    alt: 'Commercial water damage restoration - rapid business water extraction'
  },

  'commercial-flood-cleanup': {
    image: `${HERO_IMAGES}/commercial/commercial-flood-cleanup.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-flood-cleanup.webp`,
    alt: 'Commercial flood cleanup - emergency response for flooded commercial properties'
  },
  'com-flood': {
    image: `${HERO_IMAGES}/commercial/commercial-flood-cleanup.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-flood-cleanup.webp`,
    alt: 'Commercial flood cleanup - warehouse and office flood water removal'
  },

  'commercial-storm-damage': {
    image: `${HERO_IMAGES}/commercial/commercial-storm-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-storm-damage.webp`,
    alt: 'Commercial storm damage restoration - rapid response for business storm damage'
  },

  'commercial-roof-leak': {
    image: `${HERO_IMAGES}/commercial/commercial-roof-leak.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-roof-leak.webp`,
    alt: 'Commercial roof leak repair - emergency tarping and water damage mitigation'
  },

  'commercial-fire-damage': {
    image: `${HERO_IMAGES}/commercial/commercial-fire-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-fire-damage.webp`,
    alt: 'Commercial fire damage restoration - professional fire and smoke damage cleanup'
  },
  'com-fire': {
    image: `${HERO_IMAGES}/commercial/commercial-fire-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-fire-damage.webp`,
    alt: 'Commercial fire and smoke damage restoration for businesses'
  },

  'large-loss-restoration': {
    image: `${HERO_IMAGES}/commercial/large-loss-restoration.jpg`,
    webp: `${HERO_IMAGES}/commercial/large-loss-restoration.webp`,
    alt: 'Large loss restoration - comprehensive disaster recovery for major property damage'
  },
  'large-loss': {
    image: `${HERO_IMAGES}/commercial/large-loss-restoration.jpg`,
    webp: `${HERO_IMAGES}/commercial/large-loss-restoration.webp`,
    alt: 'Large loss disaster recovery for major commercial facilities'
  },

  // --- Commercial services reusing closest related image ---

  'com-sewage': {
    image: `${HERO_IMAGES}/residential/sewage-cleanup.jpg`,
    webp: `${HERO_IMAGES}/residential/sewage-cleanup.webp`,
    alt: 'Commercial sewage cleanup - biohazard containment and decontamination'
  },

  'com-mold': {
    image: `${HERO_IMAGES}/residential/mold-remediation.jpg`,
    webp: `${HERO_IMAGES}/residential/mold-remediation.webp`,
    alt: 'Commercial mold remediation - containment, removal, and clearance testing'
  },

  'healthcare': {
    image: `${HERO_IMAGES}/commercial/commercial-water-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-water-damage.webp`,
    alt: 'Healthcare facility restoration - ICRA-compliant water and fire damage repair'
  },

  'hospitality': {
    image: `${HERO_IMAGES}/commercial/commercial-water-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-water-damage.webp`,
    alt: 'Hospitality restoration - discreet water damage repair for hotels and restaurants'
  },

  'municipal': {
    image: `${HERO_IMAGES}/commercial/commercial-water-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-water-damage.webp`,
    alt: 'Municipal and education restoration - school and public building water damage repair'
  },

  'industrial': {
    image: `${HERO_IMAGES}/commercial/large-loss-restoration.jpg`,
    webp: `${HERO_IMAGES}/commercial/large-loss-restoration.webp`,
    alt: 'Industrial restoration - factory and warehouse water damage recovery'
  },

  // ============================================
  // TECHNICAL SERVICES
  // ============================================

  'moisture-mapping': {
    image: `${HERO_IMAGES}/residential/structural-drying.jpg`,
    webp: `${HERO_IMAGES}/residential/structural-drying.webp`,
    alt: 'Moisture mapping - thermal imaging and probe diagnostics for hidden water damage'
  },

  'iaq': {
    image: `${HERO_IMAGES}/residential/mold-remediation.jpg`,
    webp: `${HERO_IMAGES}/residential/mold-remediation.webp`,
    alt: 'Indoor air quality testing - mold spore sampling and particulate monitoring'
  },

  'env-testing': {
    image: `${HERO_IMAGES}/residential/mold-remediation.jpg`,
    webp: `${HERO_IMAGES}/residential/mold-remediation.webp`,
    alt: 'Environmental testing - asbestos, lead, and hazardous materials inspection'
  },
};

/**
 * Get hero tile for a service by slug
 * @returns ServiceHeroTile if exists, undefined if service should use default SVG
 */
export function getHeroTileBySlug(slug: string): ServiceHeroTile | undefined {
  return serviceHeroTiles[slug];
}

/**
 * Check if a service has a custom hero tile
 */
export function hasHeroTile(slug: string): boolean {
  return slug in serviceHeroTiles;
}
