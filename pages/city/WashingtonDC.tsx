import React from 'react';
import CityLanding from './CityLanding';
import { getCityBySlug } from '../../config/cities';

const WashingtonDCPage: React.FC = () => {
  const city = getCityBySlug('washington-dc');
  if (!city) return null;
  return <CityLanding city={city} />;
};

export default WashingtonDCPage;
