import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const FairfaxPage: React.FC = () => {
  const city = getCityBySlug('fairfax');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default FairfaxPage;
