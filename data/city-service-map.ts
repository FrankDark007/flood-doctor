/**
 * City Service Slug Mapping
 *
 * Maps city content filenames (flat slugs like 'water-damage')
 * to main site taxonomy (nested paths like '/services/residential/restoration-services/water-damage-restoration/').
 *
 * This is the SINGLE SOURCE OF TRUTH for:
 * - Build-time route generation
 * - Runtime nav link construction
 * - Flat-to-nested 301 redirect generation
 * - Content-present checks
 */

import { SERVICES } from './services';
import type { ServiceData } from '../types';

export interface CityServiceMapping {
  /** City content filename without extension (e.g., 'water-damage') */
  citySlug: string;
  /** Main taxonomy service ID (e.g., 'res-water') */
  serviceId: string;
  /** Last segment of main site slug (e.g., 'water-damage-restoration') */
  mainSlug: string;
  /** Audience lowercase (e.g., 'residential') */
  audience: 'residential' | 'commercial';
  /** Subcategory path segment (e.g., 'restoration-services') */
  subcategory: string;
  /** Full nested path (e.g., '/services/residential/restoration-services/water-damage-restoration/') */
  nestedPath: string;
  /** Full ServiceData reference */
  service: ServiceData;
}

/**
 * Explicit overrides for city slugs that don't match main taxonomy last-segment.
 * Key = city content filename, Value = main service ID
 */
const CITY_SLUG_OVERRIDES: Record<string, string> = {
  'water-damage': 'res-water',           // water-damage → water-damage-restoration
  'fire-damage': 'res-fire',             // fire-damage → fire-smoke-cleanup
  'storm-damage': 'res-storm',           // storm-damage → storm-damage-restoration
  'burst-pipe': 'res-burst',             // burst-pipe → burst-pipe-cleanup
  'emergency-water-removal': 'res-water', // Arlington-only alias → water-damage-restoration
};

/**
 * Category enum to URL segment mapping
 */
const CATEGORY_TO_SEGMENT: Record<string, string> = {
  'RESTORATION': 'restoration-services',
  'CLEANUP': 'cleanup-services',
  'SPECIALTY': 'specialty-services',
  'TECHNICAL': 'technical-services',
};

/**
 * Build the complete mapping for a given city slug.
 * Returns null if the slug can't be mapped to a main service.
 */
export function mapCitySlug(citySlug: string): CityServiceMapping | null {
  let service: ServiceData | undefined;

  // Check explicit overrides first
  if (CITY_SLUG_OVERRIDES[citySlug]) {
    service = SERVICES.find(s => s.id === CITY_SLUG_OVERRIDES[citySlug]);
  }

  // Fall back to matching last segment of main slug
  if (!service) {
    service = SERVICES.find(s => {
      const segments = s.slug.split('/').filter(Boolean);
      return segments[segments.length - 1] === citySlug;
    });
  }

  if (!service) return null;

  const segments = service.slug.split('/').filter(Boolean);
  const mainSlug = segments[segments.length - 1];
  const audience = service.audience.toLowerCase() as 'residential' | 'commercial';
  const subcategory = CATEGORY_TO_SEGMENT[service.category];

  return {
    citySlug,
    serviceId: service.id,
    mainSlug,
    audience,
    subcategory,
    nestedPath: `/services/${audience}/${subcategory}/${mainSlug}/`,
    service,
  };
}

/**
 * Build mappings for an array of city slugs.
 * Filters out any that can't be mapped.
 */
export function mapCitySlugs(citySlugs: string[]): CityServiceMapping[] {
  return citySlugs
    .map(mapCitySlug)
    .filter((m): m is CityServiceMapping => m !== null);
}

/**
 * Get the nested city path for a flat city slug.
 * Returns null if unmappable.
 */
export function getCityNestedPath(citySlug: string): string | null {
  const mapping = mapCitySlug(citySlug);
  return mapping ? mapping.nestedPath : null;
}

/**
 * Get the flat redirect mapping: old flat path → new nested path.
 * Used by build-cities.ts to generate .htaccess 301 rules.
 */
export function getFlatToNestedRedirects(citySlugs: string[]): { from: string; to: string }[] {
  return mapCitySlugs(citySlugs).map(m => ({
    from: `/services/${m.citySlug}/`,
    to: m.nestedPath,
  }));
}

/**
 * Build the complete set of nested service routes for a city.
 * Only includes services that have content (citySlugs).
 * Includes hub routes only if they have at least one child service.
 */
export function getCityServiceRoutes(citySlugs: string[]): string[] {
  const mappings = mapCitySlugs(citySlugs);
  const routes: string[] = [];

  // Service detail routes
  for (const m of mappings) {
    routes.push(m.nestedPath);
  }

  // Audience hubs: only if at least one service exists for that audience
  const audiences = new Set(mappings.map(m => m.audience));
  for (const aud of audiences) {
    routes.push(`/services/${aud}/`);
  }

  // Subcategory hubs: only if at least one service exists in that subcategory
  const subcategories = new Set(mappings.map(m => `${m.audience}/${m.subcategory}`));
  for (const sub of subcategories) {
    routes.push(`/services/${sub}/`);
  }

  return routes;
}
