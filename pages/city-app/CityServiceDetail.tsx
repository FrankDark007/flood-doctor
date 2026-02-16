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

  // CityApp route captures single segment: /services/:serviceSlug/
  // SERVICES[].slug is a nested path like "/services/residential/cleanup-services/mold-remediation/"
  // Match by extracting the last segment from each service's slug
  const service = SERVICES.find(s => {
    const segments = s.slug.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return lastSegment === serviceSlug;
  });

  if (!service) {
    // Redirect to services hub if service not found
    return <Navigate to="/services/" replace />;
  }

  // ServiceDetail component handles city-aware rendering via useFranchise
  // For city subdomains, it will use the CityFranchiseContext
  return <ServiceDetail service={service} />;
};

export default CityServiceDetail;
