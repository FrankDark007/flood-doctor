import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const RestonPage: React.FC = () => {
  const city = getCityBySlug('reston');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default RestonPage;
