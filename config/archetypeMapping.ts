// config/archetypeMapping.ts
// City-to-Archetype mapping for hyper-differentiated pages

export type Archetype = 'estate' | 'historic' | 'urban' | 'suburban';

export interface ArchetypeConfig {
  id: Archetype;
  label: string;
  description: string;
  colorAccent: string;
  heroStyle: 'aerial' | 'street' | 'skyline' | 'neighborhood';
  cities: string[];
  features: string[];
}

export const archetypeMapping: Record<string, Archetype> = {
  // Estate/Luxury - High-value homes, wine cellars, discretion focus
  mclean: 'estate',
  greatfalls: 'estate',

  // Historic/Urban - BAR compliance, original materials, preservation
  alexandria: 'historic',
  fallschurch: 'historic',
  vienna: 'historic',

  // High-Rise/Urban - HOA coordination, multi-unit, commercial capability
  arlington: 'urban',
  tysons: 'urban',
  reston: 'urban',

  // Suburban/Family - Split-levels, sump pumps, family-focused
  fairfax: 'suburban',
  springfield: 'suburban',
  herndon: 'suburban',
  ashburn: 'suburban',
  lorton: 'suburban',

  // HQ defaults to suburban (most common)
  hq: 'suburban',
};

export const archetypeConfigs: Record<Archetype, ArchetypeConfig> = {
  estate: {
    id: 'estate',
    label: 'Estate & Luxury',
    description: 'Specialized service for high-value properties with premium finishes',
    colorAccent: '#1a365d', // Deep navy - luxury feel
    heroStyle: 'aerial',
    cities: ['mclean', 'greatfalls'],
    features: [
      'Wine cellar protection',
      'Art & antique safeguarding',
      'Home theater restoration',
      'Discrete unmarked vehicles',
      'Private well/septic expertise',
      'Equestrian facility response',
    ],
  },
  historic: {
    id: 'historic',
    label: 'Historic Preservation',
    description: 'Restoration expertise for historic buildings and original materials',
    colorAccent: '#744210', // Warm brown - heritage feel
    heroStyle: 'street',
    cities: ['alexandria', 'fallschurch', 'vienna'],
    features: [
      'BAR compliance coordination',
      'Original plaster restoration',
      'Historic hardwood preservation',
      'Cast iron pipe expertise',
      'Period-appropriate repairs',
      'Historic district permits',
    ],
  },
  urban: {
    id: 'urban',
    label: 'High-Rise & Urban',
    description: 'Multi-unit coordination and commercial building expertise',
    colorAccent: '#2c5282', // Modern blue - urban feel
    heroStyle: 'skyline',
    cities: ['arlington', 'tysons', 'reston'],
    features: [
      'HOA/property management coordination',
      'Multi-unit cascade prevention',
      'Underground parking extraction',
      'Commercial building response',
      'High-rise building systems',
      'Elevator access coordination',
    ],
  },
  suburban: {
    id: 'suburban',
    label: 'Suburban & Family',
    description: 'Family-focused service for suburban homes and communities',
    colorAccent: '#276749', // Forest green - neighborhood feel
    heroStyle: 'neighborhood',
    cities: ['fairfax', 'springfield', 'herndon', 'ashburn', 'lorton'],
    features: [
      'Split-level specialists',
      'Finished basement expertise',
      'Sump pump failure response',
      'New construction defects',
      'HOA community coordination',
      'Military family support',
    ],
  },
};

export function getArchetype(cityId: string): Archetype {
  return archetypeMapping[cityId] || 'suburban';
}

export function getArchetypeConfig(cityId: string): ArchetypeConfig {
  const archetype = getArchetype(cityId);
  return archetypeConfigs[archetype];
}

// City-specific feature overrides (for hybrid cities)
export const cityFeatureOverrides: Record<string, string[]> = {
  // Vienna has some luxury Oakton properties
  vienna: ['Wolf Trap area estates', 'Oakton luxury homes'],

  // Reston has townhome clusters (suburban-adjacent)
  reston: ['Townhome cluster coordination', 'Lake-adjacent properties'],

  // Falls Church has Lake Barcroft (estate-adjacent)
  fallschurch: ['Lake Barcroft waterfront', 'Eden Center commercial'],

  // Springfield has military family focus
  springfield: ['Fort Belvoir proximity', 'USAA claims expertise', 'PCS timeline urgency'],

  // Great Falls has equestrian focus
  greatfalls: ['Horse barn restoration', 'Arena flooding', 'Tack room protection'],
};

export function getCityFeatures(cityId: string): string[] {
  const baseFeatures = getArchetypeConfig(cityId).features;
  const overrides = cityFeatureOverrides[cityId] || [];
  return [...baseFeatures, ...overrides];
}
