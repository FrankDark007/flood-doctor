import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const SpringfieldPage: React.FC = () => {
  const city = getCityBySlug('springfield');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default SpringfieldPage;
