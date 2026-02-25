import React from 'react';
import CityLandingV2 from './CityLandingV2';
import { getCityBySlug } from '../../config/cities';

const CityLandingV2Preview: React.FC = () => {
  const city = getCityBySlug('vienna');
  if (!city) return <div>City not found</div>;
  return <CityLandingV2 city={city} />;
};

export default CityLandingV2Preview;
