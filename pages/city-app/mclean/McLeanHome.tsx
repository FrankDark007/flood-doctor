/**
 * McLeanHome - LandingPageA template wired to McLean franchise data
 *
 * Single-city pilot: only McLean renders this template.
 * All other cities continue using CityLandingNew.
 */

import React from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import LandingPageA from '@/pages/templates/LandingPageA';
import { getMcLeanLandingProps } from './landingPageAProps';

const McLeanHome: React.FC = () => {
  const franchise = useCityFranchise();
  const props = getMcLeanLandingProps(franchise);

  return <LandingPageA {...props} />;
};

export default McLeanHome;
