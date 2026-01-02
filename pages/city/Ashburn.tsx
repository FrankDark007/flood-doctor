import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const AshburnPage: React.FC = () => {
  const city = getCityBySlug('ashburn');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default AshburnPage;
