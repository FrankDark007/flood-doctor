/**
 * Subdomain Detection and Routing Utilities
 *
 * Handles subdomain-based location routing for *.flood.doctor
 * Single build serves all subdomains with dynamic content loading.
 */

import { LOCATIONS } from '../data/locations';
import type { ExtendedLocationData } from '../types';

/**
 * Map of subdomain keys to location slugs
 * Subdomain (lowercase, no dots) -> location data lookup
 */
export const SUBDOMAIN_MAP: Record<string, string> = {
  'fairfax': 'fairfax',
  'arlington': 'arlington',
  'alexandria': 'alexandria',
  'mclean': 'mclean',
  'vienna': 'vienna',
  'tysons': 'tysons',
  'reston': 'reston',
  'herndon': 'herndon',
  'ashburn': 'ashburn',
  'leesburg': 'leesburg',
  'manassas': 'manassas',
  'woodbridge': 'woodbridge',
  'springfield': 'springfield',
  'annandale': 'annandale',
  'fallschurch': 'falls-church',
  'greatfalls': 'great-falls',
  'lorton': 'lorton',
};

/**
 * Extract subdomain from current hostname
 * Handles: subdomain.flood.doctor, subdomain.localhost, localhost:port
 */
export function getSubdomain(): string | null {
  if (typeof window === 'undefined') return null;

  const hostname = window.location.hostname;

  // Development: subdomain.localhost or subdomain.localhost:3000
  // Production: subdomain.flood.doctor

  // List of known root domains (including lvh.me for local testing)
  const rootDomains = ['flood.doctor', 'flooddoctor.com', 'localhost', '127.0.0.1', 'lvh.me'];

  for (const root of rootDomains) {
    if (hostname === root || hostname === `www.${root}`) {
      // No subdomain (main site)
      return null;
    }

    if (hostname.endsWith(`.${root}`)) {
      // Extract subdomain
      const subdomain = hostname.slice(0, hostname.lastIndexOf(`.${root}`));
      // Handle nested subdomains (take first part)
      return subdomain.split('.')[0].toLowerCase();
    }
  }

  // Fallback for IP addresses or unknown hosts
  return null;
}

/**
 * Get location data for current subdomain
 * Returns null if on main site or subdomain not recognized
 */
export function getLocationForSubdomain(): ExtendedLocationData | null {
  const subdomain = getSubdomain();

  if (!subdomain) return null;

  const locationSlug = SUBDOMAIN_MAP[subdomain];
  if (!locationSlug) return null;

  return LOCATIONS.find(loc => loc.slug === `/locations/${locationSlug}/`) || null;
}

/**
 * Check if current request is for a location subdomain
 */
export function isLocationSubdomain(): boolean {
  return getSubdomain() !== null && getLocationForSubdomain() !== null;
}

/**
 * Get canonical URL for current page
 * Ensures proper canonical for SEO across subdomains
 */
export function getCanonicalUrl(path: string = '/'): string {
  const location = getLocationForSubdomain();

  if (location) {
    // Location subdomain: canonical is the subdomain root
    return `https://${getSubdomain()}.flood.doctor${path}`;
  }

  // Main site
  return `https://flood.doctor${path}`;
}

/**
 * Generate hreflang links for all location variants
 * For SEO to signal location-specific content
 */
export function getHreflangLinks(): Array<{ lang: string; href: string }> {
  const links: Array<{ lang: string; href: string }> = [
    { lang: 'en', href: 'https://flood.doctor/' },
    { lang: 'x-default', href: 'https://flood.doctor/' },
  ];

  // Add each location subdomain
  Object.keys(SUBDOMAIN_MAP).forEach(subdomain => {
    links.push({
      lang: `en-US-${subdomain}`,
      href: `https://${subdomain}.flood.doctor/`,
    });
  });

  return links;
}
