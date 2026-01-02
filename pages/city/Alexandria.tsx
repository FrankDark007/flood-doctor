import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const AlexandriaPage: React.FC = () => {
  const city = getCityBySlug('alexandria');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default AlexandriaPage;
