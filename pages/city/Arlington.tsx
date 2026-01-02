import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const ArlingtonPage: React.FC = () => {
  const city = getCityBySlug('arlington');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default ArlingtonPage;
