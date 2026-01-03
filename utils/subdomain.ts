/**
 * Subdomain Detection Utility
 *
 * Detects city subdomains (e.g., mclean.flood.doctor) and provides
 * city-specific data for dynamic content rendering.
 */

import { LOCATIONS } from '../data/locations';

export interface SubdomainInfo {
  isSubdomain: boolean;
  subdomain: string | null;
  cityName: string;
  cityData: typeof LOCATIONS[0] | null;
  baseUrl: string;
}

/**
 * Detects the current subdomain and returns city information
 */
export function getSubdomainInfo(): SubdomainInfo {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://flood.doctor';

  // Development fallback
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return {
      isSubdomain: false,
      subdomain: null,
      cityName: 'Northern Virginia',
      cityData: null,
      baseUrl: origin,
    };
  }

  // Check if it's a subdomain (e.g., mclean.flood.doctor)
  const parts = hostname.split('.');

  // Main domain: flood.doctor (2 parts)
  // Subdomain: mclean.flood.doctor (3 parts)
  if (parts.length >= 3 && parts[parts.length - 2] === 'flood' && parts[parts.length - 1] === 'doctor') {
    const subdomain = parts[0].toLowerCase();

    // Find matching city in LOCATIONS data
    const cityData = LOCATIONS.find(loc => {
      const locSubdomain = new URL(loc.url).hostname.split('.')[0].toLowerCase();
      return locSubdomain === subdomain;
    });

    return {
      isSubdomain: true,
      subdomain,
      cityName: cityData?.title || formatSubdomainToCity(subdomain),
      cityData: cityData || null,
      baseUrl: origin,
    };
  }

  // Main domain (flood.doctor)
  return {
    isSubdomain: false,
    subdomain: null,
    cityName: 'Northern Virginia',
    cityData: null,
    baseUrl: origin,
  };
}

/**
 * Formats a subdomain to a readable city name
 * e.g., "fallschurch" -> "Falls Church"
 */
function formatSubdomainToCity(subdomain: string): string {
  const cityMap: Record<string, string> = {
    ashburn: 'Ashburn',
    arlington: 'Arlington',
    alexandria: 'Alexandria',
    fallschurch: 'Falls Church',
    'falls-church': 'Falls Church',
    fairfax: 'Fairfax',
    greatfalls: 'Great Falls',
    'great-falls': 'Great Falls',
    herndon: 'Herndon',
    lorton: 'Lorton',
    mclean: 'McLean',
    reston: 'Reston',
    springfield: 'Springfield',
    tysons: 'Tysons',
  };

  return cityMap[subdomain] || subdomain.charAt(0).toUpperCase() + subdomain.slice(1);
}

/**
 * Gets the canonical base URL for the current context
 * Uses window.location.origin to support subdomains
 */
export function getCanonicalBase(): string {
  if (typeof window === 'undefined') {
    return 'https://flood.doctor';
  }
  return window.location.origin;
}

/**
 * React hook-friendly version that can be used in components
 */
export function useSubdomainInfo(): SubdomainInfo {
  return getSubdomainInfo();
}
