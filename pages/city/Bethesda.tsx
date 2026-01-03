import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const BethesdaPage: React.FC = () => {
  const city = getCityBySlug('bethesda');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default BethesdaPage;
