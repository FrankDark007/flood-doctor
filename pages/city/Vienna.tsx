import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const ViennaPage: React.FC = () => {
  const city = getCityBySlug('vienna');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default ViennaPage;
