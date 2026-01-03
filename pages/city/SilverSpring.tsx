import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const SilverSpringPage: React.FC = () => {
  const city = getCityBySlug('silver-spring');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default SilverSpringPage;
