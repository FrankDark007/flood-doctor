// hooks/useArchetypeContent.ts
// Merges franchise data with archetype configuration for hyper-differentiated pages

import { useMemo } from 'react';
import { useFranchise } from './useFranchise';
import { FranchiseData } from '@/data/franchises';
import {
  Archetype,
  ArchetypeConfig,
  getArchetype,
  getArchetypeConfig,
  getCityFeatures,
} from '@/config/archetypeMapping';

export interface ArchetypeContent {
  // Franchise data
  franchise: FranchiseData;
  cityId: string;
  cityName: string;

  // Archetype data
  archetype: Archetype;
  archetypeConfig: ArchetypeConfig;

  // Merged features (base + city-specific overrides)
  features: string[];

  // Local hooks for easy access
  neighborhoods: string[];
  landmarks: string[];
  commonIssues: string[];
  architectureNotes: string;

  // Computed values
  isEstate: boolean;
  isHistoric: boolean;
  isUrban: boolean;
  isSuburban: boolean;

  // City-specific flags
  hasWineCellarContent: boolean;
  hasBARCompliance: boolean;
  hasMultiUnitContent: boolean;
  hasMilitaryFocus: boolean;
  hasEquestrianFacilities: boolean;
}

export function useArchetypeContent(overrideCityId?: string): ArchetypeContent {
  const franchise = useFranchise();

  return useMemo(() => {
    // Allow override for static page generation
    const cityId = overrideCityId || franchise.id;
    const archetype = getArchetype(cityId);
    const archetypeConfig = getArchetypeConfig(cityId);
    const features = getCityFeatures(cityId);

    return {
      // Franchise data
      franchise,
      cityId,
      cityName: franchise.city,

      // Archetype data
      archetype,
      archetypeConfig,

      // Merged features
      features,

      // Local hooks for easy access
      neighborhoods: franchise.localHooks.neighborhoods,
      landmarks: franchise.localHooks.landmarks,
      commonIssues: franchise.localHooks.commonIssues,
      architectureNotes: franchise.localHooks.architectureNotes,

      // Computed archetype booleans
      isEstate: archetype === 'estate',
      isHistoric: archetype === 'historic',
      isUrban: archetype === 'urban',
      isSuburban: archetype === 'suburban',

      // City-specific content flags
      hasWineCellarContent: ['mclean', 'greatfalls'].includes(cityId),
      hasBARCompliance: cityId === 'alexandria',
      hasMultiUnitContent: ['arlington', 'tysons', 'reston'].includes(cityId),
      hasMilitaryFocus: cityId === 'springfield',
      hasEquestrianFacilities: cityId === 'greatfalls',
    };
  }, [franchise, overrideCityId]);
}

// Static helper for build-time usage (non-hook)
export function getArchetypeContentStatic(cityId: string, franchiseData: FranchiseData): ArchetypeContent {
  const archetype = getArchetype(cityId);
  const archetypeConfig = getArchetypeConfig(cityId);
  const features = getCityFeatures(cityId);

  return {
    franchise: franchiseData,
    cityId,
    cityName: franchiseData.city,
    archetype,
    archetypeConfig,
    features,
    neighborhoods: franchiseData.localHooks.neighborhoods,
    landmarks: franchiseData.localHooks.landmarks,
    commonIssues: franchiseData.localHooks.commonIssues,
    architectureNotes: franchiseData.localHooks.architectureNotes,
    isEstate: archetype === 'estate',
    isHistoric: archetype === 'historic',
    isUrban: archetype === 'urban',
    isSuburban: archetype === 'suburban',
    hasWineCellarContent: ['mclean', 'greatfalls'].includes(cityId),
    hasBARCompliance: cityId === 'alexandria',
    hasMultiUnitContent: ['arlington', 'tysons', 'reston'].includes(cityId),
    hasMilitaryFocus: cityId === 'springfield',
    hasEquestrianFacilities: cityId === 'greatfalls',
  };
}
