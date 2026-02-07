/**
 * CityHome - Homepage for City Subdomain Sites
 *
 * This is the "/" route for independent city sites (mclean.flood.doctor, etc.)
 * Uses useCityFranchise() to get the city context (set at build time).
 */

import React from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import { getCityBySlug } from '@/config/cities';
import CityLandingNew from '@/pages/city/CityLandingNew';

const CityHome: React.FC = () => {
  const franchise = useCityFranchise();

  // Get CityConfig from the franchise ID
  // The franchise.id matches the city slug (e.g., 'mclean', 'arlington')
  const cityConfig = getCityBySlug(franchise.id);

  if (!cityConfig) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            City Not Found
          </h1>
          <p className="text-gray-600">
            Configuration for "{franchise.city}" is not available.
          </p>
        </div>
      </div>
    );
  }

  // Render the city landing page with the config
  return <CityLandingNew city={cityConfig} />;
};

export default CityHome;
