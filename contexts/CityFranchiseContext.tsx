/**
 * CityFranchiseContext - Static City Provider for Independent Subdomain Sites
 *
 * Unlike the main FranchiseContext which uses runtime subdomain detection,
 * this context expects the city ID to be set at BUILD TIME via window.__FLOOD_DOCTOR_CITY__.
 *
 * Each city subdomain (mclean.flood.doctor, arlington.flood.doctor, etc.) gets its own
 * independent build with the city ID baked in. No runtime detection needed.
 *
 * Usage:
 * 1. build-cities.ts sets window.__FLOOD_DOCTOR_CITY__ = 'mclean' in the HTML
 * 2. CityFranchiseProvider reads this once at mount
 * 3. Components use useCityFranchise() to access city data
 */

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { franchises, FranchiseData } from '@/data/franchises';

// Declare global window property for TypeScript
declare global {
  interface Window {
    __FLOOD_DOCTOR_CITY__?: string;
  }
}

const CityFranchiseContext = createContext<FranchiseData | null>(null);

interface CityFranchiseProviderProps {
  children: ReactNode;
  /** Optional override for testing - normally reads from window.__FLOOD_DOCTOR_CITY__ */
  cityOverride?: string;
}

/**
 * Provider that loads city franchise data from the build-time city ID.
 *
 * IMPORTANT: This provider assumes window.__FLOOD_DOCTOR_CITY__ is set before React renders.
 * In production builds, the build-cities.ts script injects this into each city's index.html.
 * In development, city.html defaults to 'mclean' for testing.
 */
export function CityFranchiseProvider({ children, cityOverride }: CityFranchiseProviderProps) {
  const franchise = useMemo(() => {
    // Priority 1: Explicit override (for testing)
    if (cityOverride && franchises[cityOverride]) {
      return franchises[cityOverride];
    }

    // Priority 2: Build-time city ID from window global
    const cityId = typeof window !== 'undefined' ? window.__FLOOD_DOCTOR_CITY__ : undefined;

    if (!cityId) {
      throw new Error(
        '[CityFranchiseProvider] window.__FLOOD_DOCTOR_CITY__ is not set. ' +
        'This build may be misconfigured. City sites require the city ID to be ' +
        'injected at build time.'
      );
    }

    const data = franchises[cityId];
    if (!data) {
      throw new Error(
        `[CityFranchiseProvider] City "${cityId}" not found in franchise data. ` +
        `Available cities: ${Object.keys(franchises).join(', ')}`
      );
    }

    return data;
  }, [cityOverride]);

  return (
    <CityFranchiseContext.Provider value={franchise}>
      {children}
    </CityFranchiseContext.Provider>
  );
}

/**
 * Hook to access the current city's franchise data.
 *
 * Unlike useFranchise() which may fall back to HQ, this hook expects a valid city
 * to always be set. Throws an error if used outside of CityFranchiseProvider.
 *
 * @returns The franchise data for the current city (never null)
 * @throws Error if used outside of CityFranchiseProvider or if city data is missing
 */
export function useCityFranchise(): FranchiseData {
  const context = useContext(CityFranchiseContext);

  if (!context) {
    throw new Error(
      'useCityFranchise must be used within a CityFranchiseProvider. ' +
      'Make sure your component is wrapped in <CityFranchiseProvider>.'
    );
  }

  return context;
}

/**
 * Get the current city ID from the context.
 * Convenience hook when you only need the city ID string.
 */
export function useCityId(): string {
  const franchise = useCityFranchise();
  return franchise.id;
}

/**
 * Get the current city name for display.
 * Convenience hook for UI rendering.
 */
export function useCityName(): string {
  const franchise = useCityFranchise();
  return franchise.city;
}
