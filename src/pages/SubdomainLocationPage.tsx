import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getLocationForSubdomain, isLocationSubdomain } from '../utils/subdomain';
import type { ExtendedLocationData } from '../types';
import LocationDetailGoogle from './templates/LocationDetailGoogle';
import Home from './Home';

/**
 * SubdomainLocationPage
 *
 * Root page component that detects subdomain and renders:
 * - Location-specific content for recognized subdomains (fairfax.flood.doctor)
 * - Main homepage for main domain (flood.doctor)
 * - Fallback/redirect for unrecognized subdomains
 *
 * This enables single-build multi-subdomain architecture.
 */
const SubdomainLocationPage: React.FC = () => {
  const [location, setLocation] = useState<ExtendedLocationData | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Check subdomain on mount
    const detectedLocation = getLocationForSubdomain();
    setLocation(detectedLocation);
    setIsChecked(true);
  }, []);

  // Still determining subdomain
  if (!isChecked) {
    return (
      <div className="flex-grow flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-2 border-[#1a73e8] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Location subdomain detected - render location page
  if (location) {
    return <LocationDetailGoogle location={location} />;
  }

  // Not a subdomain or unrecognized - show main homepage
  // (App.tsx routing will handle this, but this is a safety fallback)
  if (!isLocationSubdomain()) {
    return <Home />;
  }

  // Unrecognized subdomain - redirect to main site
  return <Navigate to="/" replace />;
};

export default SubdomainLocationPage;
