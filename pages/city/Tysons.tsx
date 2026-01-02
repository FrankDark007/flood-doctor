import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const TysonsPage: React.FC = () => {
  const city = getCityBySlug('tysons');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default TysonsPage;
