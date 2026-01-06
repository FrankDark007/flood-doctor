export type Region = 'Northern VA' | 'Washington DC' | 'Maryland';

export type Proximity = 'Closest' | 'Near' | 'Mid' | 'Farthest';

export interface ServiceLocation {
  id: string;
  name: string;
  slug: string;
  region: Region;
  proximity: Proximity;
  responseTime: string; // e.g. "40-60 min"
  coordinates?: { x: number; y: number }; // Percentage 0-100 for the map
}