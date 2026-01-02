import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const FallsChurchPage: React.FC = () => {
  const city = getCityBySlug('falls-church');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default FallsChurchPage;
