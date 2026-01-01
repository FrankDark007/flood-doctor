import { useState, useEffect } from 'react';
import { getSubdomain, getLocationForSubdomain } from '../utils/subdomain';
import type { ExtendedLocationData } from '../types';

/**
 * Hook to detect and provide subdomain context throughout the app
 *
 * Usage:
 * const { subdomain, location, isLocationSite, isMainSite } = useSubdomain();
 */
export function useSubdomain() {
  const [subdomain, setSubdomain] = useState<string | null>(null);
  const [location, setLocation] = useState<ExtendedLocationData | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const detected = getSubdomain();
    const detectedLocation = getLocationForSubdomain();

    setSubdomain(detected);
    setLocation(detectedLocation);
    setIsReady(true);
  }, []);

  return {
    subdomain,
    location,
    isReady,
    isLocationSite: subdomain !== null && location !== null,
    isMainSite: subdomain === null,
    isUnknownSubdomain: subdomain !== null && location === null,
  };
}

/**
 * Get the base URL for the current context
 * On subdomains, returns the subdomain URL
 * On main site, returns main URL
 */
export function useBaseUrl(): string {
  const { subdomain, isLocationSite } = useSubdomain();

  if (isLocationSite && subdomain) {
    return `https://${subdomain}.flood.doctor`;
  }

  return 'https://flood.doctor';
}

export default useSubdomain;
