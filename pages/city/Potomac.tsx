import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const PotomacPage: React.FC = () => {
  const city = getCityBySlug('potomac');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default PotomacPage;
