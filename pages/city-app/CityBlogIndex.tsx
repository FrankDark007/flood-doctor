/**
 * CityBlogIndex - Blog Index for City Subdomain Sites
 *
 * Lists blog articles relevant to the city.
 * Route: /blog/
 */

import React from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import DynamicBlogIndex from '@/pages/city/DynamicBlogIndex';

const CityBlogIndex: React.FC = () => {
  const franchise = useCityFranchise();

  // DynamicBlogIndex will use the city context to filter/display city-relevant articles
  return <DynamicBlogIndex />;
};

export default CityBlogIndex;
