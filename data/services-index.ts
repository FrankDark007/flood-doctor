/**
 * Services Index - Pre-computed lookups for O(1) access
 *
 * Instead of filtering SERVICES array on every render, we pre-compute
 * lookup maps at module load time. This eliminates O(n) operations.
 *
 * Usage:
 *   import { getServicesByAudience, getServicesByCategory, getServiceBySlug } from './services-index';
 *
 *   const residentialServices = getServicesByAudience('RESIDENTIAL');
 *   const restorationServices = getServicesByCategory('RESIDENTIAL', 'RESTORATION');
 *   const service = getServiceBySlug('/services/residential/restoration-services/water-damage-restoration/');
 */

import { SERVICES } from './services';
import type { ServiceData, ServiceAudience, ServiceCategory } from '../types';

// ============================================================================
// Pre-computed indices (computed once at module load)
// ============================================================================

// Index by slug for O(1) lookup
const bySlug = new Map<string, ServiceData>();

// Index by audience for O(1) lookup
const byAudience = new Map<ServiceAudience, ServiceData[]>();

// Index by audience + category for O(1) lookup
const byAudienceCategory = new Map<string, ServiceData[]>();

// Index by ID for O(1) lookup
const byId = new Map<string, ServiceData>();

// Build indices at module load time (runs once)
function buildIndices() {
  // Initialize audience maps
  byAudience.set('RESIDENTIAL', []);
  byAudience.set('COMMERCIAL', []);

  for (const service of SERVICES) {
    // Index by slug
    bySlug.set(service.slug, service);

    // Index by ID
    byId.set(service.id, service);

    // Index by audience
    const audienceList = byAudience.get(service.audience);
    if (audienceList) {
      audienceList.push(service);
    }

    // Index by audience + category
    const key = `${service.audience}:${service.category}`;
    if (!byAudienceCategory.has(key)) {
      byAudienceCategory.set(key, []);
    }
    byAudienceCategory.get(key)!.push(service);
  }
}

// Build indices immediately
buildIndices();

// ============================================================================
// Public API - O(1) lookup functions
// ============================================================================

/**
 * Get a service by its slug - O(1)
 */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return bySlug.get(slug);
}

/**
 * Get a service by its ID - O(1)
 */
export function getServiceById(id: string): ServiceData | undefined {
  return byId.get(id);
}

/**
 * Get all services for an audience - O(1)
 */
export function getServicesByAudience(audience: ServiceAudience): ServiceData[] {
  return byAudience.get(audience) || [];
}

/**
 * Get services by audience and category - O(1)
 */
export function getServicesByCategory(
  audience: ServiceAudience,
  category: ServiceCategory
): ServiceData[] {
  const key = `${audience}:${category}`;
  return byAudienceCategory.get(key) || [];
}

// ============================================================================
// Minimal service data for lists/grids (reduces bundle for non-detail views)
// ============================================================================

export interface ServiceIndexItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  audience: ServiceAudience;
  category: ServiceCategory;
  thumbVisualKey?: string;
}

/**
 * Get minimal service data for lists - prevents loading full content
 */
export function getServiceIndex(): ServiceIndexItem[] {
  return SERVICES.map(s => ({
    id: s.id,
    title: s.title,
    slug: s.slug,
    shortDescription: s.shortDescription,
    audience: s.audience,
    category: s.category,
    thumbVisualKey: s.thumbVisualKey,
  }));
}

/**
 * Get minimal service data by audience
 */
export function getServiceIndexByAudience(audience: ServiceAudience): ServiceIndexItem[] {
  return getServicesByAudience(audience).map(s => ({
    id: s.id,
    title: s.title,
    slug: s.slug,
    shortDescription: s.shortDescription,
    audience: s.audience,
    category: s.category,
    thumbVisualKey: s.thumbVisualKey,
  }));
}

// ============================================================================
// Grouped services for navigation
// ============================================================================

export interface GroupedServices {
  RESTORATION: ServiceIndexItem[];
  CLEANUP: ServiceIndexItem[];
  SPECIALTY: ServiceIndexItem[];
  TECHNICAL: ServiceIndexItem[];
}

/**
 * Get services grouped by category for an audience - used in navigation
 */
export function getGroupedServices(audience: ServiceAudience): GroupedServices {
  const categories: ServiceCategory[] = ['RESTORATION', 'CLEANUP', 'SPECIALTY', 'TECHNICAL'];
  const result: GroupedServices = {
    RESTORATION: [],
    CLEANUP: [],
    SPECIALTY: [],
    TECHNICAL: [],
  };

  for (const category of categories) {
    const services = getServicesByCategory(audience, category);
    result[category] = services.map(s => ({
      id: s.id,
      title: s.title,
      slug: s.slug,
      shortDescription: s.shortDescription,
      audience: s.audience,
      category: s.category,
      thumbVisualKey: s.thumbVisualKey,
    }));
  }

  return result;
}

// ============================================================================
// Search support (for CommandPalette)
// ============================================================================

/**
 * Search services by title/description - still O(n) but with early termination
 */
export function searchServices(query: string, limit = 10): ServiceIndexItem[] {
  if (!query || query.length < 2) return [];

  const lowerQuery = query.toLowerCase();
  const results: ServiceIndexItem[] = [];

  for (const service of SERVICES) {
    if (results.length >= limit) break;

    if (
      service.title.toLowerCase().includes(lowerQuery) ||
      service.shortDescription.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: service.id,
        title: service.title,
        slug: service.slug,
        shortDescription: service.shortDescription,
        audience: service.audience,
        category: service.category,
        thumbVisualKey: service.thumbVisualKey,
      });
    }
  }

  return results;
}
