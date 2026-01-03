import React from 'react';
import { useParams } from 'react-router-dom';
import CityServicesHub from './CityServicesHub';
import CityServiceDetail from './CityServiceDetail';
import { getCityBySlug } from '../../config/cities';

// Main router component for city services
const CityServices: React.FC = () => {
  const { citySlug, serviceSlug } = useParams<{ citySlug: string; serviceSlug?: string }>();

  const city = getCityBySlug(citySlug || '');

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">City not found</p>
      </div>
    );
  }

  // If serviceSlug is provided, show service detail page
  if (serviceSlug) {
    return <CityServiceDetail city={city} serviceSlug={serviceSlug} />;
  }

  // Otherwise show services hub
  return <CityServicesHub city={city} />;
};

export default CityServices;
