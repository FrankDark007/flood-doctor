import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const HerndonPage: React.FC = () => {
  const city = getCityBySlug('herndon');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default HerndonPage;
