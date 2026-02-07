/**
 * CityServicesHub - Services Hub for City Subdomain Sites
 *
 * Lists all services available in the city.
 * Route: /services/
 */

import React from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import ServicesHub from '@/pages/ServicesHub';

const CityServicesHub: React.FC = () => {
  const franchise = useCityFranchise();

  // ServicesHub already uses the franchise context for city-aware content
  // It will automatically display the correct city name and phone
  return (
    <ServicesHub
      title={`Water Damage Restoration Services in ${franchise.city}`}
      subtitle={`Emergency restoration, cleanup, and repair services for ${franchise.city}, ${franchise.state} homeowners and businesses.`}
    />
  );
};

export default CityServicesHub;
