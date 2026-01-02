import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const McLeanPage: React.FC = () => {
  const city = getCityBySlug('mclean');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default McLeanPage;
