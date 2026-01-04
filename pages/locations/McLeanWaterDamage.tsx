// pages/locations/McLeanWaterDamage.tsx
// McLean Water Damage - Estate Archetype
// Hyper-differentiated page using localHooks data and estate-specific components

import React from 'react';
import { CityPageEstate } from '@/components/archetypes/estate';
import { useArchetypeContent } from '@/hooks/useArchetypeContent';

const McLeanWaterDamage: React.FC = () => {
  // Get merged franchise + archetype content
  const content = useArchetypeContent('mclean');

  return <CityPageEstate content={content} service="water-damage" />;
};

export default McLeanWaterDamage;
