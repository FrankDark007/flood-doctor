/**
 * CityRequest - Request Service Page for City Subdomain Sites
 *
 * Service request form with city context pre-filled.
 * Route: /request/
 */

import React from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import RequestService from '@/pages/RequestService';

const CityRequest: React.FC = () => {
  const franchise = useCityFranchise();

  // RequestService component should use the franchise context
  // to pre-fill location information and show the correct phone number
  return <RequestService />;
};

export default CityRequest;
