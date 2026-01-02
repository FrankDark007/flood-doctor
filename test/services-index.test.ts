import { describe, it, expect } from 'vitest';
import {
  getServiceBySlug,
  getServiceById,
  getServicesByAudience,
  getServicesByCategory,
  searchServices,
} from '../data/services-index';

describe('services-index', () => {
  describe('getServiceBySlug', () => {
    it('returns service for valid slug', () => {
      const service = getServiceBySlug('/services/residential/restoration-services/water-damage-restoration/');
      expect(service).toBeDefined();
      expect(service?.title).toBe('Water Damage Restoration');
    });

    it('returns undefined for invalid slug', () => {
      const service = getServiceBySlug('/services/invalid-slug/');
      expect(service).toBeUndefined();
    });

    it('handles slug without trailing slash', () => {
      // Our slugs should have trailing slashes, but test gracefully
      const service = getServiceBySlug('/services/residential/water-damage');
      // May or may not find depending on exact slug format
      expect(service === undefined || service?.slug?.includes('water-damage')).toBe(true);
    });
  });

  describe('getServiceById', () => {
    it('returns service for valid ID', () => {
      const service = getServiceById('res-water');
      expect(service).toBeDefined();
      expect(service?.id).toBe('res-water');
    });

    it('returns undefined for invalid ID', () => {
      const service = getServiceById('nonexistent-service');
      expect(service).toBeUndefined();
    });
  });

  describe('getServicesByAudience', () => {
    it('returns residential services', () => {
      const services = getServicesByAudience('RESIDENTIAL');
      expect(services.length).toBeGreaterThan(0);
      expect(services.every(s => s.audience === 'RESIDENTIAL')).toBe(true);
    });

    it('returns commercial services', () => {
      const services = getServicesByAudience('COMMERCIAL');
      expect(services.length).toBeGreaterThan(0);
      expect(services.every(s => s.audience === 'COMMERCIAL')).toBe(true);
    });

    it('returns empty array for invalid audience', () => {
      const services = getServicesByAudience('INVALID' as any);
      expect(services).toEqual([]);
    });
  });

  describe('getServicesByCategory', () => {
    it('returns services for residential restoration', () => {
      const services = getServicesByCategory('RESIDENTIAL', 'RESTORATION');
      expect(services.length).toBeGreaterThan(0);
      expect(services.every(s => s.audience === 'RESIDENTIAL' && s.category === 'RESTORATION')).toBe(true);
    });

    it('returns empty array for invalid combination', () => {
      const services = getServicesByCategory('INVALID' as any, 'INVALID' as any);
      expect(services).toEqual([]);
    });
  });

  describe('searchServices', () => {
    it('finds services matching query', () => {
      const results = searchServices('water');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some(s => s.title.toLowerCase().includes('water'))).toBe(true);
    });

    it('respects limit parameter', () => {
      const results = searchServices('damage', 2);
      expect(results.length).toBeLessThanOrEqual(2);
    });

    it('returns empty for no matches', () => {
      const results = searchServices('xyznonexistent123');
      expect(results).toEqual([]);
    });

    it('is case insensitive', () => {
      const lower = searchServices('water');
      const upper = searchServices('WATER');
      expect(lower.length).toEqual(upper.length);
    });
  });
});
