/**
 * CityServiceDetail - Service Detail Page for City Subdomain Sites
 *
 * Displays detailed information about a specific service.
 * Route: /services/:serviceSlug/
 */

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import { SERVICES } from '@/data/services';
import ServiceDetail from '@/pages/templates/ServiceDetailNew';

const CityServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const franchise = useCityFranchise();

  // Find the service by slug
  // Service slugs in SERVICES are formatted as "/services/water-damage/" etc.
  const service = SERVICES.find(s =>
    s.slug === `/services/${serviceSlug}/` ||
    s.slug === serviceSlug ||
    s.id === serviceSlug
  );

  if (!service) {
    // Redirect to services hub if service not found
    return <Navigate to="/services/" replace />;
  }

  // ServiceDetail component handles city-aware rendering via useFranchise
  // For city subdomains, it will use the CityFranchiseContext
  return <ServiceDetail service={service} />;
};

export default CityServiceDetail;
