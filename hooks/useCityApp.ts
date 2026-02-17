/**
 * useCityApp - Detect if running inside a city subdomain build
 *
 * City builds inject at build time:
 *   window.__FLOOD_DOCTOR_CITY__ = 'mclean'
 *   window.__FLOOD_DOCTOR_CITY_SERVICES__ = ['water-damage', 'mold-remediation', ...]
 *
 * Shared layout components (Header, Footer, MobileMenu) use these to:
 * - Show only city-local nav items (no cross-domain links)
 * - List only services that have city-specific content
 */

export interface CityServiceMapEntry {
  citySlug: string;
  mainSlug: string;
  serviceId: string;
  audience: 'residential' | 'commercial';
  subcategory: string;
  nestedPath: string;
  title: string;
}

declare global {
  interface Window {
    __FLOOD_DOCTOR_CITY__?: string;
    __FLOOD_DOCTOR_CITY_SERVICES__?: string[];
    __FLOOD_DOCTOR_CITY_SERVICE_MAP__?: CityServiceMapEntry[];
  }
}

export const MAIN_DOMAIN = 'https://flood.doctor';

/**
 * Returns true if this is a city subdomain app (not the main site).
 */
export function isCityApp(): boolean {
  return typeof window !== 'undefined' && !!window.__FLOOD_DOCTOR_CITY__;
}

/**
 * Returns the city ID (e.g., 'mclean') or null if on main site.
 */
export function getCityId(): string | null {
  if (typeof window !== 'undefined' && window.__FLOOD_DOCTOR_CITY__) {
    return window.__FLOOD_DOCTOR_CITY__;
  }
  return null;
}

/**
 * Returns the list of service slugs available for this city.
 * These are flat slugs like 'water-damage', 'mold-remediation', etc.
 * Returns empty array on main site.
 */
export function getCityServiceSlugs(): string[] {
  if (typeof window !== 'undefined' && window.__FLOOD_DOCTOR_CITY_SERVICES__) {
    return window.__FLOOD_DOCTOR_CITY_SERVICES__;
  }
  return [];
}

/**
 * Returns the full service map for this city (with nested path info).
 * Empty array on main site.
 */
export function getCityServiceMap(): CityServiceMapEntry[] {
  if (typeof window !== 'undefined' && window.__FLOOD_DOCTOR_CITY_SERVICE_MAP__) {
    return window.__FLOOD_DOCTOR_CITY_SERVICE_MAP__;
  }
  return [];
}

/**
 * Check if a service (by main slug) has city content.
 */
export function hasCityServiceContent(mainSlug: string): boolean {
  return getCityServiceMap().some(m => m.mainSlug === mainSlug);
}

/**
 * For paths that only exist on the main domain, returns the absolute
 * main-domain URL when in city context, or the relative path when on main site.
 */
export function mainDomainUrl(path: string): string {
  if (isCityApp()) {
    return `${MAIN_DOMAIN}${path}`;
  }
  return path;
}
