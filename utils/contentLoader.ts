// utils/contentLoader.ts
// Utility to load city-specific content dynamically

import type { ServicePageContent } from '../components/city/ServicePageRenderer';
import type { NeighborhoodPageContent } from '../components/city/NeighborhoodPageRenderer';

// City phone numbers mapping
export const CITY_PHONES: Record<string, string> = {
  mclean: '(703) 656-0101',
  arlington: '(703) 656-0102',
  alexandria: '(703) 656-0103',
  fairfax: '(703) 656-0104',
  vienna: '(703) 656-0105',
  tysons: '(703) 656-0106',
  reston: '(703) 656-0107',
  herndon: '(703) 656-0108',
  ashburn: '(703) 656-0109',
  springfield: '(703) 656-0110',
  fallschurch: '(703) 656-0111',
  greatfalls: '(703) 656-0112',
  lorton: '(703) 656-0113',
};

// City display names
export const CITY_NAMES: Record<string, string> = {
  mclean: 'McLean',
  arlington: 'Arlington',
  alexandria: 'Alexandria',
  fairfax: 'Fairfax',
  vienna: 'Vienna',
  tysons: 'Tysons',
  reston: 'Reston',
  herndon: 'Herndon',
  ashburn: 'Ashburn',
  springfield: 'Springfield',
  fallschurch: 'Falls Church',
  greatfalls: 'Great Falls',
  lorton: 'Lorton',
};

// Service slugs to file names mapping
export const SERVICE_FILES: Record<string, string> = {
  'water-damage': 'water-damage',
  'water-damage-restoration': 'water-damage',
  'basement-flooding': 'basement-flooding',
  'burst-pipe': 'burst-pipe',
  'burst-pipes': 'burst-pipe',
  'flood-cleanup': 'flood-cleanup',
  'mold-remediation': 'mold-remediation',
  'sewage-cleanup': 'sewage-cleanup',
  'storm-damage': 'storm-damage',
  'fire-damage': 'fire-damage',
};

// Async service content loader
export async function loadServiceContent(
  citySlug: string,
  serviceSlug: string
): Promise<ServicePageContent | null> {
  const serviceFile = SERVICE_FILES[serviceSlug] || serviceSlug;

  try {
    const module = await import(`../src/content/cities/${citySlug}/services/${serviceFile}.ts`);
    // Content is exported as the main export with naming convention like mcleanWaterDamageContent
    const exportName = Object.keys(module).find(key => key.includes('Content'));
    if (exportName) {
      return module[exportName] as ServicePageContent;
    }
    return null;
  } catch (error) {
    console.error(`Failed to load service content for ${citySlug}/${serviceSlug}:`, error);
    return null;
  }
}

// Async neighborhood content loader
export async function loadNeighborhoodContent(
  citySlug: string,
  neighborhoodSlug: string
): Promise<NeighborhoodPageContent | null> {
  try {
    const module = await import(`../src/content/cities/${citySlug}/neighborhoods/${neighborhoodSlug}.ts`);
    // Content is exported as the main export
    const exportName = Object.keys(module).find(key => key.includes('Content') || key.includes('Neighborhood'));
    if (exportName) {
      return module[exportName] as NeighborhoodPageContent;
    }
    return null;
  } catch (error) {
    console.error(`Failed to load neighborhood content for ${citySlug}/${neighborhoodSlug}:`, error);
    return null;
  }
}

// Get all available cities
export function getAvailableCities(): string[] {
  return Object.keys(CITY_PHONES);
}

// Get city info
export function getCityInfo(citySlug: string) {
  return {
    slug: citySlug,
    name: CITY_NAMES[citySlug] || citySlug,
    phone: CITY_PHONES[citySlug] || '(877) 497-0007',
  };
}

// Get available services for a city
export function getAvailableServices(): string[] {
  return Object.values(SERVICE_FILES).filter((v, i, a) => a.indexOf(v) === i);
}
