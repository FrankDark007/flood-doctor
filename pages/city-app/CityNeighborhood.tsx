/**
 * CityNeighborhood - Neighborhood Landing Page for City Subdomain Sites
 *
 * Displays information about a specific neighborhood within the city.
 * Route: /neighborhoods/:neighborhood/
 */

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import DynamicNeighborhoodPage from '@/pages/city/DynamicNeighborhoodPage';

const CityNeighborhood: React.FC = () => {
  const { neighborhood } = useParams<{ neighborhood: string }>();
  const franchise = useCityFranchise();

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  // Check if this neighborhood exists in the franchise data
  const hasNeighborhood = franchise.localHooks?.neighborhoods?.some(
    n => n.toLowerCase().replace(/\s+/g, '-') === neighborhood.toLowerCase()
  );

  if (!hasNeighborhood) {
    // Show a generic neighborhood page or 404
    // For now, still render DynamicNeighborhoodPage which handles missing data
  }

  // DynamicNeighborhoodPage expects city param from URL
  // In city subdomain context, we provide the city from franchise context
  return <DynamicNeighborhoodPage />;
};

export default CityNeighborhood;
