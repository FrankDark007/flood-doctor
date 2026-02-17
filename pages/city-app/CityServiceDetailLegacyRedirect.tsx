/**
 * CityServiceDetailLegacyRedirect
 *
 * Handles old flat city service URLs: /services/:serviceSlug/
 * Redirects to the new nested URL structure.
 * Only fires for SPA navigation (prerendered pages use .htaccess 301).
 */

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCityServiceMap } from '@/hooks/useCityApp';

const CityServiceDetailLegacyRedirect: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const serviceMap = getCityServiceMap();

  // Try to find by city slug (flat filename)
  const mapping = serviceMap.find(m => m.citySlug === serviceSlug);
  if (mapping) {
    return <Navigate to={mapping.nestedPath} replace />;
  }

  // Try to find by main slug (already nested-style slug)
  const mappingByMain = serviceMap.find(m => m.mainSlug === serviceSlug);
  if (mappingByMain) {
    return <Navigate to={mappingByMain.nestedPath} replace />;
  }

  // No match — go to services hub
  return <Navigate to="/services/" replace />;
};

export default CityServiceDetailLegacyRedirect;
