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

declare global {
  interface Window {
    __FLOOD_DOCTOR_CITY__?: string;
    __FLOOD_DOCTOR_CITY_SERVICES__?: string[];
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
 * For paths that only exist on the main domain, returns the absolute
 * main-domain URL when in city context, or the relative path when on main site.
 */
export function mainDomainUrl(path: string): string {
  if (isCityApp()) {
    return `${MAIN_DOMAIN}${path}`;
  }
  return path;
}
