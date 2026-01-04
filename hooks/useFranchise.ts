import { useMemo } from 'react';
import { franchises, FranchiseData } from '@/data/franchises';

// Declare global window property for TypeScript
declare global {
  interface Window {
    __FLOOD_DOCTOR_CITY__?: string;
  }
}

export function useFranchise(): FranchiseData {
  return useMemo(() => {
    // V3 UPGRADE: Priority 1 - Build-time city selection
    // This is set in the index.html during static site generation
    // Each city subdomain gets its own build with this pre-set
    const buildTimeCity = typeof window !== 'undefined' ? window.__FLOOD_DOCTOR_CITY__ : undefined;
    if (buildTimeCity && franchises[buildTimeCity]) {
      return franchises[buildTimeCity];
    }

    const hostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost';

    // Priority 2: Development mode with ?city= query param
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      const params = new URLSearchParams(window.location.search);
      const cityParam = params.get('city');
      if (cityParam && franchises[cityParam]) {
        console.log(`[useFranchise] Dev mode: Using city=${cityParam}`);
        return franchises[cityParam];
      }
      console.log('[useFranchise] Dev mode: Using HQ franchise');
      return franchises['hq'];
    }

    // Priority 3: Production subdomain detection (fallback)
    const parts = hostname.split('.');
    const subdomain = parts[0];

    // Handle Main Site / HQ explicitly
    if (subdomain === 'www' || subdomain === 'flood' || parts.length < 3) {
      return franchises['hq'];
    }

    // Reserved subdomains route to HQ
    const reserved = ['mail', 'ftp', 'api', 'admin', 'staging', 'dev', 'test'];
    if (reserved.includes(subdomain)) {
      return franchises['hq'];
    }

    // Check if subdomain matches a franchise
    if (franchises[subdomain]) {
      return franchises[subdomain];
    }

    // Fallback to HQ
    console.warn(`[useFranchise] Unknown subdomain: ${subdomain}, using HQ`);
    return franchises['hq'];
  }, []);
}

export function useSubdomainId(): string {
  const franchise = useFranchise();
  return franchise.id;
}
