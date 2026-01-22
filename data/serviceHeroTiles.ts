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

  'water-damage-restoration': {
    image: `${HERO_IMAGES}/residential/water-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/water-damage-restoration.webp`,
    alt: 'Professional water damage restoration - technicians extracting water and drying flooded home'
  },

  'burst-pipe-water-damage': {
    image: `${HERO_IMAGES}/residential/burst-pipe-water-damage.jpg`,
    webp: `${HERO_IMAGES}/residential/burst-pipe-water-damage.webp`,
    alt: 'Burst pipe water damage cleanup - emergency water extraction and pipe repair'
  },

  'fire-damage-restoration': {
    image: `${HERO_IMAGES}/residential/fire-damage-restoration.jpg`,
    webp: `${HERO_IMAGES}/residential/fire-damage-restoration.webp`,
    alt: 'Fire and smoke damage restoration - professional cleanup and restoration services'
  },

  'flood-damage-cleanup': {
    image: `${HERO_IMAGES}/residential/flood-damage-cleanup.jpg`,
    webp: `${HERO_IMAGES}/residential/flood-damage-cleanup.webp`,
    alt: 'Flood damage cleanup - emergency water removal and property restoration'
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

  // ============================================
  // COMMERCIAL SERVICES
  // ============================================

  'commercial-water-damage': {
    image: `${HERO_IMAGES}/commercial/commercial-water-damage.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-water-damage.webp`,
    alt: 'Commercial water damage restoration - large-scale water extraction for businesses'
  },

  'commercial-flood-cleanup': {
    image: `${HERO_IMAGES}/commercial/commercial-flood-cleanup.jpg`,
    webp: `${HERO_IMAGES}/commercial/commercial-flood-cleanup.webp`,
    alt: 'Commercial flood cleanup - emergency response for flooded commercial properties'
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

  'large-loss-restoration': {
    image: `${HERO_IMAGES}/commercial/large-loss-restoration.jpg`,
    webp: `${HERO_IMAGES}/commercial/large-loss-restoration.webp`,
    alt: 'Large loss restoration - comprehensive disaster recovery for major property damage'
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
