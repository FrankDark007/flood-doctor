import { ServiceLocation, Proximity } from './types';

// Helper to determine color based on proximity
export const getProximityColor = (proximity: Proximity) => {
  switch (proximity) {
    case 'Closest':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 icon-emerald-600';
    case 'Near':
      return 'bg-lime-100 text-lime-800 border-lime-200 icon-lime-600';
    case 'Mid':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 icon-yellow-600';
    case 'Farthest':
      return 'bg-orange-100 text-orange-800 border-orange-200 icon-orange-600';
    default:
      return 'bg-slate-100 text-slate-800 border-slate-200 icon-slate-600';
  }
};

export const getPinColor = (proximity: Proximity) => {
    switch (proximity) {
      case 'Closest': return 'bg-emerald-500 ring-emerald-300';
      case 'Near': return 'bg-lime-500 ring-lime-300';
      case 'Mid': return 'bg-yellow-500 ring-yellow-300';
      case 'Farthest': return 'bg-orange-500 ring-orange-300';
      default: return 'bg-slate-500 ring-slate-300';
    }
}

export const serviceLocations: ServiceLocation[] = [
  // Closest (40-60 min)
  { id: 'falls-church', name: 'Falls Church', slug: 'falls-church', region: 'Northern VA', proximity: 'Closest', responseTime: '40-60 min', coordinates: { x: 52, y: 55 } },
  { id: 'tysons', name: 'Tysons', slug: 'tysons', region: 'Northern VA', proximity: 'Closest', responseTime: '40-60 min', coordinates: { x: 45, y: 48 } },
  { id: 'vienna', name: 'Vienna', slug: 'vienna', region: 'Northern VA', proximity: 'Closest', responseTime: '40-60 min', coordinates: { x: 42, y: 52 } },

  // Near (45-70 min)
  { id: 'mclean', name: 'McLean', slug: 'mclean', region: 'Northern VA', proximity: 'Near', responseTime: '45-70 min', coordinates: { x: 55, y: 45 } },
  { id: 'arlington', name: 'Arlington', slug: 'arlington', region: 'Northern VA', proximity: 'Near', responseTime: '45-70 min', coordinates: { x: 60, y: 58 } },
  { id: 'fairfax', name: 'Fairfax', slug: 'fairfax', region: 'Northern VA', proximity: 'Near', responseTime: '45-70 min', coordinates: { x: 38, y: 60 } },

  // Mid (50-75 min)
  { id: 'alexandria', name: 'Alexandria', slug: 'alexandria', region: 'Northern VA', proximity: 'Mid', responseTime: '50-75 min', coordinates: { x: 62, y: 70 } },
  { id: 'reston', name: 'Reston', slug: 'reston', region: 'Northern VA', proximity: 'Mid', responseTime: '50-75 min', coordinates: { x: 35, y: 42 } },
  { id: 'herndon', name: 'Herndon', slug: 'herndon', region: 'Northern VA', proximity: 'Mid', responseTime: '50-75 min', coordinates: { x: 30, y: 40 } },
  { id: 'springfield', name: 'Springfield', slug: 'springfield', region: 'Northern VA', proximity: 'Mid', responseTime: '50-75 min', coordinates: { x: 45, y: 75 } },

  // Farthest (55-80 min)
  { id: 'ashburn', name: 'Ashburn', slug: 'ashburn', region: 'Northern VA', proximity: 'Farthest', responseTime: '55-80 min', coordinates: { x: 20, y: 35 } },
  { id: 'great-falls', name: 'Great Falls', slug: 'great-falls', region: 'Northern VA', proximity: 'Farthest', responseTime: '55-80 min', coordinates: { x: 40, y: 30 } },
  { id: 'lorton', name: 'Lorton', slug: 'lorton', region: 'Northern VA', proximity: 'Farthest', responseTime: '55-80 min', coordinates: { x: 48, y: 85 } },

  // DC & MD (Estimating proximity for demo purposes)
  { id: 'washington-dc', name: 'Washington DC', slug: 'washington-dc', region: 'Washington DC', proximity: 'Near', responseTime: '45-70 min', coordinates: { x: 68, y: 55 } },
  { id: 'bethesda', name: 'Bethesda', slug: 'bethesda', region: 'Maryland', proximity: 'Mid', responseTime: '50-75 min', coordinates: { x: 60, y: 35 } },
  { id: 'silver-spring', name: 'Silver Spring', slug: 'silver-spring', region: 'Maryland', proximity: 'Mid', responseTime: '50-75 min', coordinates: { x: 70, y: 30 } },
];