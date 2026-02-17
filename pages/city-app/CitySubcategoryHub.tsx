/**
 * CitySubcategoryHub - Subcategory Landing for City Subdomains
 * Route: /services/residential/:subcategory/ or /services/commercial/:subcategory/
 *
 * CONTENT-GATED: Only shows services that have city content files.
 * Uses getCityServiceMap() to filter — no dead-end 404 clicks from hub cards.
 */
import React, { useMemo } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import CategoryLanding from '@/pages/templates/CategoryLanding';
import { getCityServiceMap } from '@/hooks/useCityApp';
import type { ServiceAudience, ServiceCategory } from '@/types';

const SUBCATEGORY_TO_CATEGORY: Record<string, ServiceCategory> = {
  'restoration-services': 'RESTORATION',
  'cleanup-services': 'CLEANUP',
  'specialty-services': 'SPECIALTY',
  'technical-services': 'TECHNICAL',
};

const SUBCATEGORY_TITLES: Record<string, string> = {
  'restoration-services': 'Restoration Services',
  'cleanup-services': 'Cleanup Services',
  'specialty-services': 'Specialty Services',
  'technical-services': 'Technical Services',
};

const CitySubcategoryHub: React.FC = () => {
  const { subcategory } = useParams<{ subcategory: string }>();
  const location = useLocation();

  if (!subcategory || !SUBCATEGORY_TO_CATEGORY[subcategory]) {
    return <Navigate to="/services/" replace />;
  }

  // Determine audience from URL path
  const isCommercial = location.pathname.startsWith('/services/commercial/');
  const audience: ServiceAudience = isCommercial ? 'COMMERCIAL' : 'RESIDENTIAL';
  const category = SUBCATEGORY_TO_CATEGORY[subcategory];
  const title = SUBCATEGORY_TITLES[subcategory];
  const audienceLabel = isCommercial ? 'Commercial' : 'Residential';

  // Content-gated: only show services with city content
  const allowedServiceIds = useMemo(() => {
    return new Set(
      getCityServiceMap()
        .filter(m => m.audience === audience.toLowerCase() && m.subcategory === subcategory)
        .map(m => m.serviceId)
    );
  }, [audience, subcategory]);

  // If no services have content in this subcategory, redirect to parent audience hub
  if (allowedServiceIds.size === 0) {
    return <Navigate to={`/services/${audienceLabel.toLowerCase()}/`} replace />;
  }

  return (
    <CategoryLanding
      audience={audience}
      category={category}
      title={`${audienceLabel} ${title}`}
      description={`Professional ${title.toLowerCase()} for ${audienceLabel.toLowerCase()} properties.`}
      filterServiceIds={allowedServiceIds}
    />
  );
};

export default CitySubcategoryHub;
