/**
 * useCityApp - Detect if running inside a city subdomain build
 *
 * City builds set window.__FLOOD_DOCTOR_CITY__ at build time.
 * When true, shared layout components (Header, Footer, MobileMenu)
 * should point main-domain-only links to https://flood.doctor/...
 * instead of relative paths that would 404 on the subdomain.
 */

const MAIN_DOMAIN = 'https://flood.doctor';

/**
 * Returns true if this is a city subdomain app (not the main site).
 */
export function isCityApp(): boolean {
  return typeof window !== 'undefined' && !!window.__FLOOD_DOCTOR_CITY__;
}

/**
 * For paths that only exist on the main domain, returns the absolute
 * main-domain URL when in city context, or the relative path when on main site.
 *
 * Usage:
 *   mainDomainUrl('/services/') → '/services/' (main site)
 *   mainDomainUrl('/services/') → 'https://flood.doctor/services/' (city site)
 */
export function mainDomainUrl(path: string): string {
  if (isCityApp()) {
    return `${MAIN_DOMAIN}${path}`;
  }
  return path;
}
