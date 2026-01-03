import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const RockvillePage: React.FC = () => {
  const city = getCityBySlug('rockville');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default RockvillePage;
