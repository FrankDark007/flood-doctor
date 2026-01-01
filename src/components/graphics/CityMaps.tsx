import React from 'react';

/**
 * Individual City Map Graphics
 * Google Maps-style city-focused maps for location pages
 */

// City data with relative positions and nearby landmarks
const cityData: Record<string, {
  name: string;
  region: 'nova' | 'dc' | 'md';
  landmarks: string[];
  nearbyRoads: string[];
}> = {
  ashburn: {
    name: 'Ashburn',
    region: 'nova',
    landmarks: ['One Loudoun', 'Dulles Airport'],
    nearbyRoads: ['Route 7', 'Route 28'],
  },
  arlington: {
    name: 'Arlington',
    region: 'nova',
    landmarks: ['Pentagon', 'Rosslyn'],
    nearbyRoads: ['I-66', 'Route 50'],
  },
  alexandria: {
    name: 'Alexandria',
    region: 'nova',
    landmarks: ['Old Town', 'King Street'],
    nearbyRoads: ['I-495', 'I-95'],
  },
  fallsChurch: {
    name: 'Falls Church',
    region: 'nova',
    landmarks: ['Falls Church City', 'Eden Center'],
    nearbyRoads: ['I-66', 'Route 7'],
  },
  fairfax: {
    name: 'Fairfax',
    region: 'nova',
    landmarks: ['Fairfax Corner', 'GMU'],
    nearbyRoads: ['I-66', 'Route 50'],
  },
  greatFalls: {
    name: 'Great Falls',
    region: 'nova',
    landmarks: ['Great Falls Park', 'Georgetown Pike'],
    nearbyRoads: ['Route 193', 'Route 7'],
  },
  herndon: {
    name: 'Herndon',
    region: 'nova',
    landmarks: ['Reston Town Center', 'Dulles Corridor'],
    nearbyRoads: ['Route 28', 'Dulles Toll Road'],
  },
  lorton: {
    name: 'Lorton',
    region: 'nova',
    landmarks: ['Workhouse Arts', 'Occoquan'],
    nearbyRoads: ['I-95', 'Route 1'],
  },
  mclean: {
    name: 'McLean',
    region: 'nova',
    landmarks: ['Tysons Corner', 'CIA'],
    nearbyRoads: ['I-495', 'Route 123'],
  },
  reston: {
    name: 'Reston',
    region: 'nova',
    landmarks: ['Reston Town Center', 'Lake Anne'],
    nearbyRoads: ['Dulles Toll Road', 'Route 7'],
  },
  springfield: {
    name: 'Springfield',
    region: 'nova',
    landmarks: ['Springfield Mall', 'Mixing Bowl'],
    nearbyRoads: ['I-95', 'I-395', 'I-495'],
  },
  tysons: {
    name: 'Tysons',
    region: 'nova',
    landmarks: ['Tysons Corner Center', 'Tysons Galleria'],
    nearbyRoads: ['I-495', 'Route 7', 'Route 123'],
  },
  vienna: {
    name: 'Vienna',
    region: 'nova',
    landmarks: ['Vienna Town Green', 'Maple Avenue'],
    nearbyRoads: ['I-66', 'Route 123'],
  },
  washingtonDC: {
    name: 'Washington DC',
    region: 'dc',
    landmarks: ['Capitol Hill', 'Downtown'],
    nearbyRoads: ['I-395', 'I-295'],
  },
  bethesda: {
    name: 'Bethesda',
    region: 'md',
    landmarks: ['NIH', 'Bethesda Row'],
    nearbyRoads: ['I-495', 'I-270'],
  },
  silverSpring: {
    name: 'Silver Spring',
    region: 'md',
    landmarks: ['Downtown Silver Spring', 'AFI'],
    nearbyRoads: ['I-495', 'Route 29'],
  },
};

interface CityMapProps {
  city: keyof typeof cityData;
  className?: string;
  showDetails?: boolean;
  animated?: boolean;
}

/**
 * Individual City Map Component
 */
export const CityMap: React.FC<CityMapProps> = ({
  city,
  className = '',
  showDetails = true,
  animated = true,
}) => {
  const data = cityData[city];
  if (!data) return null;

  const regionColors = {
    nova: '#81c784',
    dc: '#90caf9',
    md: '#ce93d8',
  };

  return (
    <svg viewBox="0 0 300 280" fill="none" className={className}>
      <defs>
        <filter id={`cityShadow-${city}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
        </filter>

        <radialGradient id={`cityGlow-${city}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={regionColors[data.region]} stopOpacity="0.3" />
          <stop offset="100%" stopColor={regionColors[data.region]} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="300" height="280" rx="16" fill="#e8f0fe" />

      {/* Service area glow */}
      <circle cx="150" cy="130" r="80" fill={`url(#cityGlow-${city})`} />

      {/* Grid pattern */}
      <g stroke="#dadce0" strokeWidth="1" opacity="0.4">
        <line x1="60" y1="80" x2="240" y2="80" />
        <line x1="60" y1="130" x2="240" y2="130" />
        <line x1="60" y1="180" x2="240" y2="180" />
        <line x1="100" y1="40" x2="100" y2="220" />
        <line x1="150" y1="40" x2="150" y2="220" />
        <line x1="200" y1="40" x2="200" y2="220" />
      </g>

      {/* Roads */}
      <g stroke="white" strokeWidth="3" strokeLinecap="round">
        <path d="M 40 130 L 260 130" />
        <path d="M 150 40 L 150 220" />
        <path d="M 80 80 Q 150 100, 220 80" />
        <path d="M 80 180 Q 150 160, 220 180" />
      </g>

      {/* City center marker */}
      <g transform="translate(150, 130)">
        {/* Pulse effect */}
        {animated && (
          <circle r="30" fill={regionColors[data.region]} opacity="0.2">
            <animate attributeName="r" values="30;45;30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Service area circle */}
        <circle r="25" fill={regionColors[data.region]} opacity="0.3" />

        {/* Main pin */}
        <ellipse cy="20" rx="10" ry="5" fill="#000" opacity="0.1" />
        <path
          d="M 0 -30 C 18 -30, 24 -12, 24 5 C 24 20, 0 35, 0 35 C 0 35, -24 20, -24 5 C -24 -12, -18 -30, 0 -30 Z"
          fill="#ea4335"
          transform="translate(0, -10) scale(0.7)"
          filter={`url(#cityShadow-${city})`}
        />
        <circle cy="-18" r="7" fill="white" />

        {/* Checkmark in pin */}
        <path
          d="M -3 -20 L -1 -17 L 4 -23"
          stroke="#ea4335"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Nearby pins */}
      {[
        { x: 90, y: 100 },
        { x: 200, y: 90 },
        { x: 100, y: 170 },
        { x: 210, y: 160 },
      ].map((pos, i) => (
        <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
          <circle r="6" fill="#4285f4" opacity="0.7" />
          <circle r="3" fill="white" />
        </g>
      ))}

      {/* City name card */}
      {showDetails && (
        <g transform="translate(15, 225)">
          <rect width="270" height="45" rx="10" fill="white" filter={`url(#cityShadow-${city})`} />

          {/* City name */}
          <text x="15" y="22" fill="#202124" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
            {data.name}
          </text>

          {/* Service badge */}
          <rect x="15" y="28" width="60" height="14" rx="7" fill="#e8f5e9" />
          <text x="45" y="38" textAnchor="middle" fill="#1e7e34" fontSize="8" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
            We Serve
          </text>

          {/* Response time */}
          <g transform="translate(200, 10)">
            <circle r="15" fill="#34a853" />
            <text x="0" y="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
              60
            </text>
          </g>
          <text x="220" y="28" fill="#5f6368" fontSize="8" fontFamily="Plus Jakarta Sans, Inter, system-ui">
            min
          </text>
          <text x="220" y="38" fill="#5f6368" fontSize="8" fontFamily="Plus Jakarta Sans, Inter, system-ui">
            response
          </text>
        </g>
      )}

      {/* Region indicator */}
      <g transform="translate(240, 15)">
        <rect width="50" height="20" rx="10" fill={regionColors[data.region]} />
        <text x="25" y="14" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          {data.region === 'nova' ? 'NOVA' : data.region === 'dc' ? 'DC' : 'MD'}
        </text>
      </g>
    </svg>
  );
};

/**
 * Mini City Badge - for lists and compact displays
 */
export const CityBadge: React.FC<{ city: keyof typeof cityData; className?: string }> = ({
  city,
  className = '',
}) => {
  const data = cityData[city];
  if (!data) return null;

  return (
    <svg viewBox="0 0 140 50" fill="none" className={className}>
      <rect width="140" height="50" rx="25" fill="#e8f0fe" />

      {/* Pin icon */}
      <g transform="translate(25, 25)">
        <path
          d="M 0 -10 C 6 -10, 8 -4, 8 2 C 8 6, 0 12, 0 12 C 0 12, -8 6, -8 2 C -8 -4, -6 -10, 0 -10 Z"
          fill="#ea4335"
        />
        <circle cy="-5" r="3" fill="white" />
      </g>

      {/* City name */}
      <text x="50" y="30" fill="#202124" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        {data.name}
      </text>
    </svg>
  );
};

/**
 * City List Map - shows all cities in a region
 */
export const CityListMap: React.FC<{
  cities: (keyof typeof cityData)[];
  className?: string;
  title?: string;
}> = ({ cities: cityList, className = '', title = 'Service Areas' }) => (
  <svg viewBox="0 0 400 300" fill="none" className={className}>
    <defs>
      <filter id="listMapShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="400" height="300" rx="20" fill="#f8f9fa" />

    {/* Header */}
    <rect x="20" y="20" width="360" height="50" rx="12" fill="white" filter="url(#listMapShadow)" />
    <text x="40" y="52" fill="#202124" fontSize="16" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
      {title}
    </text>
    <rect x="300" y="35" width="60" height="20" rx="10" fill="#e8f5e9" />
    <text x="330" y="49" textAnchor="middle" fill="#1e7e34" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
      {cityList.length} cities
    </text>

    {/* City grid */}
    <g transform="translate(20, 85)">
      {cityList.slice(0, 12).map((city, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const x = col * 120;
        const y = row * 50;
        const data = cityData[city];
        if (!data) return null;

        return (
          <g key={city} transform={`translate(${x}, ${y})`}>
            <rect width="115" height="42" rx="8" fill="white" filter="url(#listMapShadow)" />

            {/* Pin */}
            <g transform="translate(18, 21)">
              <path
                d="M 0 -7 C 4 -7, 6 -3, 6 1 C 6 4, 0 8, 0 8 C 0 8, -6 4, -6 1 C -6 -3, -4 -7, 0 -7 Z"
                fill="#ea4335"
              />
              <circle cy="-4" r="2" fill="white" />
            </g>

            {/* Name */}
            <text x="34" y="25" fill="#202124" fontSize="11" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
              {data.name}
            </text>
          </g>
        );
      })}
    </g>
  </svg>
);

// Export all city keys for type safety
export const allCities = Object.keys(cityData) as (keyof typeof cityData)[];
export const novaCities = allCities.filter(c => cityData[c].region === 'nova');
export const dcCities = allCities.filter(c => cityData[c].region === 'dc');
export const mdCities = allCities.filter(c => cityData[c].region === 'md');

export default CityMap;
