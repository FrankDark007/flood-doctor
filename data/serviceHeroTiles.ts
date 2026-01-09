/**
 * Service Hero Tiles Mapping
 *
 * Maps service slugs to custom isometric PNG tile images for hero sections.
 * Services not listed here will use the default ServiceDetailHeroAnimation SVG.
 */

const HERO_TILES = '/images/process-tiles';

export interface ServiceHeroTile {
  /** Path to the isometric PNG tile */
  image: string;
  /** Alt text for accessibility */
  alt: string;
}

/**
 * Maps service slugs to their hero tile images.
 * Add services here to use isometric tiles instead of SVG animations.
 */
export const serviceHeroTiles: Record<string, ServiceHeroTile> = {
  // Storm Damage - Custom isometric tile with Flood Doctor van, blue tarps, workers (PNG transparent)
  'storm-damage-restoration': {
    image: `${HERO_TILES}/storm-damage-hero.png`,
    alt: 'Storm damage restoration - workers repairing roof with blue tarp, Flood Doctor service van'
  },
  'commercial-storm-damage': {
    image: `${HERO_TILES}/storm-damage-hero.png`,
    alt: 'Commercial storm damage restoration services'
  },

  // Add more services as hero tiles are created:
  // 'water-damage-restoration': {
  //   image: `${HERO_TILES}/water-damage-hero.png`,
  //   alt: 'Water damage restoration in progress'
  // },
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
