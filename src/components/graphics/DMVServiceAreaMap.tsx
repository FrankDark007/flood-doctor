import React from 'react';

/**
 * DMV Service Area Map Graphics
 * Google Maps-style isometric map showing service coverage
 * Based on Google Maps Platform maps.svg design
 */

// City location data with approximate positions on the map
const cities = {
  ashburn: { x: 120, y: 140, name: 'Ashburn' },
  arlington: { x: 310, y: 260, name: 'Arlington' },
  alexandria: { x: 350, y: 320, name: 'Alexandria' },
  fallsChurch: { x: 280, y: 240, name: 'Falls Church' },
  fairfax: { x: 200, y: 260, name: 'Fairfax' },
  greatFalls: { x: 220, y: 170, name: 'Great Falls' },
  herndon: { x: 160, y: 180, name: 'Herndon' },
  lorton: { x: 340, y: 380, name: 'Lorton' },
  mclean: { x: 260, y: 200, name: 'McLean' },
  reston: { x: 140, y: 200, name: 'Reston' },
  springfield: { x: 290, y: 350, name: 'Springfield' },
  tysons: { x: 240, y: 220, name: 'Tysons' },
  vienna: { x: 210, y: 230, name: 'Vienna' },
  washingtonDC: { x: 380, y: 280, name: 'Washington DC' },
  bethesda: { x: 320, y: 180, name: 'Bethesda' },
  silverSpring: { x: 380, y: 160, name: 'Silver Spring' },
};

interface MapProps {
  className?: string;
  highlightCity?: keyof typeof cities;
  showAllPins?: boolean;
  animated?: boolean;
}

/**
 * Main DMV Service Area Map - Full Version
 */
export const DMVServiceAreaMap: React.FC<MapProps> = ({
  className = '',
  highlightCity,
  showAllPins = true,
  animated = true
}) => (
  <svg viewBox="0 0 500 450" fill="none" className={className}>
    <defs>
      {/* Map shadow */}
      <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
      </filter>

      {/* Pin shadow */}
      <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
      </filter>

      {/* Route dash pattern */}
      <pattern id="routePattern" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="2" fill="#4285f4" />
      </pattern>
    </defs>

    {/* Background */}
    <rect width="500" height="450" rx="24" fill="#e8f0fe" />

    {/* Map base - isometric grid sections */}
    <g filter="url(#mapShadow)">
      {/* Northern Virginia region - green highlight */}
      <path
        d="M 80 200 L 180 120 L 300 150 L 360 200 L 380 280 L 340 380 L 200 400 L 100 340 Z"
        fill="#81c784"
        opacity="0.6"
      />

      {/* DC region */}
      <path
        d="M 360 200 L 420 180 L 440 250 L 400 320 L 380 280 Z"
        fill="#a5d6a7"
        opacity="0.5"
      />

      {/* Maryland region */}
      <path
        d="M 300 150 L 420 120 L 440 180 L 420 180 L 360 200 Z"
        fill="#c8e6c9"
        opacity="0.4"
      />
    </g>

    {/* Grid lines */}
    <g stroke="#dadce0" strokeWidth="1" opacity="0.5">
      <line x1="100" y1="150" x2="400" y2="150" />
      <line x1="80" y1="220" x2="440" y2="220" />
      <line x1="100" y1="290" x2="420" y2="290" />
      <line x1="120" y1="360" x2="380" y2="360" />
      <line x1="150" y1="100" x2="150" y2="400" />
      <line x1="250" y1="100" x2="250" y2="400" />
      <line x1="350" y1="100" x2="350" y2="400" />
    </g>

    {/* Major roads */}
    <g stroke="white" strokeWidth="3" strokeLinecap="round">
      {/* I-66 */}
      <path d="M 80 260 Q 200 250, 380 270" />
      {/* I-495 Beltway */}
      <path d="M 160 140 Q 100 280, 180 400" />
      <path d="M 160 140 Q 300 100, 420 200" />
      {/* I-95 */}
      <path d="M 350 120 L 350 400" />
    </g>

    {/* Route connections */}
    {animated && (
      <g stroke="#4285f4" strokeWidth="3" strokeDasharray="8 4" fill="none">
        <path d="M 140 200 L 220 170 L 260 200 L 240 220">
          <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 240 220 L 280 240 L 310 260 L 350 280">
          <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
    )}

    {/* City pins */}
    {showAllPins && Object.entries(cities).map(([key, city]) => {
      const isHighlighted = highlightCity === key;
      const pinColor = isHighlighted ? '#ea4335' : '#4285f4';
      const scale = isHighlighted ? 1.2 : 1;

      return (
        <g
          key={key}
          transform={`translate(${city.x}, ${city.y}) scale(${scale})`}
          filter="url(#pinShadow)"
        >
          {/* Pin drop shadow ellipse */}
          <ellipse cx="0" cy="8" rx="6" ry="3" fill="#000" opacity="0.15" />

          {/* Pin shape */}
          <path
            d="M 0 -20 C 12 -20, 18 -8, 18 4 C 18 14, 0 24, 0 24 C 0 24, -18 14, -18 4 C -18 -8, -12 -20, 0 -20 Z"
            fill={pinColor}
            transform="translate(0, -8) scale(0.6)"
          />

          {/* Pin center dot */}
          <circle cy="-12" r="4" fill="white" />

          {/* Pulse animation for highlighted */}
          {isHighlighted && (
            <circle cy="-12" r="8" fill={pinColor} opacity="0.3">
              <animate attributeName="r" values="8;16;8" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      );
    })}

    {/* Info card overlay */}
    <g transform="translate(320, 30)">
      <rect width="160" height="80" rx="12" fill="white" filter="url(#mapShadow)" />
      <rect x="12" y="12" width="40" height="24" rx="4" fill="#4285f4" />
      <text x="32" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        DMV
      </text>
      <text x="12" y="52" fill="#202124" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Service Area
      </text>
      <text x="12" y="68" fill="#34a853" fontSize="10" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        13 cities covered
      </text>
    </g>

    {/* Legend */}
    <g transform="translate(20, 400)">
      <circle cx="8" cy="8" r="5" fill="#4285f4" />
      <text x="20" y="12" fill="#5f6368" fontSize="10" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Service location
      </text>
      <circle cx="108" cy="8" r="5" fill="#34a853" />
      <text x="120" y="12" fill="#5f6368" fontSize="10" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Coverage area
      </text>
    </g>
  </svg>
);

/**
 * Compact Map Version - for cards and smaller spaces
 */
export const DMVMapCompact: React.FC<MapProps> = ({ className = '', animated = true }) => (
  <svg viewBox="0 0 200 180" fill="none" className={className}>
    <defs>
      <filter id="compactMapShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="200" height="180" rx="16" fill="#e8f0fe" />

    {/* Service region */}
    <path
      d="M 30 90 L 80 50 L 140 60 L 170 100 L 160 140 L 100 160 L 40 130 Z"
      fill="#81c784"
      opacity="0.5"
    />

    {/* Roads */}
    <g stroke="white" strokeWidth="2" strokeLinecap="round">
      <path d="M 20 100 Q 100 90, 180 100" />
      <path d="M 80 30 L 80 160" />
      <path d="M 140 40 L 140 160" />
    </g>

    {/* Pins - simplified positions */}
    {[
      { x: 50, y: 70 },
      { x: 80, y: 90 },
      { x: 110, y: 80 },
      { x: 140, y: 100 },
      { x: 100, y: 120 },
      { x: 70, y: 110 },
    ].map((pos, i) => (
      <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
        <circle r="4" fill="#4285f4" />
        {animated && i === 3 && (
          <circle r="6" fill="#4285f4" opacity="0.3">
            <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        )}
      </g>
    ))}

    {/* Badge */}
    <g transform="translate(130, 12)">
      <rect width="60" height="24" rx="12" fill="white" filter="url(#compactMapShadow)" />
      <text x="30" y="16" textAnchor="middle" fill="#34a853" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        13 cities
      </text>
    </g>
  </svg>
);

/**
 * Route Animation Map - shows dispatch route
 */
export const DMVRouteMap: React.FC<MapProps> = ({ className = '', highlightCity }) => (
  <svg viewBox="0 0 400 350" fill="none" className={className}>
    <defs>
      <filter id="routeMapShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
      </filter>

      <marker id="arrowMarker" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#4285f4" />
      </marker>
    </defs>

    {/* Background */}
    <rect width="400" height="350" rx="20" fill="#e8f0fe" />

    {/* Service region */}
    <path
      d="M 60 160 L 140 100 L 260 120 L 340 180 L 320 280 L 180 320 L 80 260 Z"
      fill="#81c784"
      opacity="0.4"
    />

    {/* Grid */}
    <g stroke="#dadce0" strokeWidth="1" opacity="0.4">
      <line x1="80" y1="120" x2="340" y2="120" />
      <line x1="60" y1="200" x2="360" y2="200" />
      <line x1="80" y1="280" x2="340" y2="280" />
      <line x1="120" y1="80" x2="120" y2="320" />
      <line x1="200" y1="80" x2="200" y2="320" />
      <line x1="280" y1="80" x2="280" y2="320" />
    </g>

    {/* Animated route */}
    <path
      d="M 100 220 Q 140 180, 180 190 T 260 180 T 320 220"
      fill="none"
      stroke="#4285f4"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="12 6"
      markerEnd="url(#arrowMarker)"
    >
      <animate attributeName="stroke-dashoffset" from="36" to="0" dur="1s" repeatCount="indefinite" />
    </path>

    {/* Start point - HQ */}
    <g transform="translate(100, 220)">
      <circle r="16" fill="#34a853" />
      <circle r="10" fill="white" />
      <circle r="6" fill="#34a853" />
      <text x="0" y="35" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Dispatch
      </text>
    </g>

    {/* Destination */}
    <g transform="translate(320, 220)">
      <ellipse cx="0" cy="10" rx="8" ry="4" fill="#000" opacity="0.15" />
      <path
        d="M 0 -24 C 14 -24, 20 -10, 20 4 C 20 16, 0 28, 0 28 C 0 28, -20 16, -20 4 C -20 -10, -14 -24, 0 -24 Z"
        fill="#ea4335"
        transform="translate(0, -8) scale(0.7)"
      />
      <circle cy="-16" r="5" fill="white" />
      <circle cy="-16" r="10" fill="#ea4335" opacity="0.3">
        <animate attributeName="r" values="10;18;10" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="0" y="40" textAnchor="middle" fill="#ea4335" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        {highlightCity ? cities[highlightCity]?.name : 'Your Location'}
      </text>
    </g>

    {/* ETA Card */}
    <g transform="translate(240, 40)">
      <rect width="140" height="56" rx="12" fill="white" filter="url(#routeMapShadow)" />
      <text x="16" y="24" fill="#5f6368" fontSize="10" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Estimated arrival
      </text>
      <text x="16" y="44" fill="#1a73e8" fontSize="18" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        12 minutes
      </text>
      <circle cx="120" cy="28" r="10" fill="#34a853">
        <animate attributeName="r" values="10;12;10" dur="1s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Truck icon on route */}
    <g transform="translate(180, 185)">
      <rect x="-12" y="-8" width="18" height="12" rx="2" fill="#4285f4" />
      <rect x="6" y="-5" width="8" height="9" rx="1" fill="#4285f4" />
      <circle cx="-6" cy="6" r="3" fill="#202124" />
      <circle cx="10" cy="6" r="3" fill="#202124" />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="180,185;200,180;220,182"
        dur="2s"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

/**
 * Isometric 3D Style Map
 */
export const DMVIsometricMap: React.FC<MapProps> = ({ className = '' }) => (
  <svg viewBox="0 0 500 400" fill="none" className={className}>
    <defs>
      <filter id="isoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="4" stdDeviation="4" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="500" height="400" rx="24" fill="#f1f2f2" />

    {/* Isometric map tiles */}
    <g transform="translate(250, 80)">
      {/* Row 1 */}
      <polygon points="0,0 100,50 0,100 -100,50" fill="#81c784" stroke="white" strokeWidth="2" />

      {/* Row 2 */}
      <polygon points="-100,50 0,100 -100,150 -200,100" fill="#a5d6a7" stroke="white" strokeWidth="2" transform="translate(0, 0)" />
      <polygon points="0,50 100,100 0,150 -100,100" fill="#81c784" stroke="white" strokeWidth="2" transform="translate(100, 50)" />

      {/* Row 3 */}
      <polygon points="-100,50 0,100 -100,150 -200,100" fill="#c8e6c9" stroke="white" strokeWidth="2" transform="translate(-100, 100)" />
      <polygon points="0,50 100,100 0,150 -100,100" fill="#81c784" stroke="white" strokeWidth="2" transform="translate(0, 100)" />
      <polygon points="100,50 200,100 100,150 0,100" fill="#a5d6a7" stroke="white" strokeWidth="2" transform="translate(100, 100)" />

      {/* Row 4 */}
      <polygon points="0,50 100,100 0,150 -100,100" fill="#a5d6a7" stroke="white" strokeWidth="2" transform="translate(-100, 200)" />
      <polygon points="100,50 200,100 100,150 0,100" fill="#81c784" stroke="white" strokeWidth="2" transform="translate(0, 200)" />
    </g>

    {/* Route lines */}
    <g stroke="white" strokeWidth="4" fill="none" strokeLinecap="round">
      <path d="M 150 180 L 250 230 L 350 180" />
      <path d="M 250 230 L 250 310" />
    </g>

    {/* City markers on isometric grid */}
    {[
      { x: 250, y: 130 },
      { x: 150, y: 180 },
      { x: 350, y: 180 },
      { x: 200, y: 230 },
      { x: 300, y: 230 },
      { x: 250, y: 280 },
    ].map((pos, i) => (
      <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
        <ellipse cx="0" cy="5" rx="8" ry="4" fill="#000" opacity="0.1" />
        <circle cy="-10" r="8" fill="#4285f4" filter="url(#isoShadow)" />
        <circle cy="-10" r="4" fill="white" />
      </g>
    ))}

    {/* Destination star */}
    <g transform="translate(250, 280)">
      <polygon
        points="0,-20 6,-8 18,-8 8,2 12,14 0,6 -12,14 -8,2 -18,-8 -6,-8"
        fill="#ea4335"
        transform="translate(0, -15) scale(0.8)"
      />
    </g>

    {/* Info overlay */}
    <g transform="translate(340, 60)">
      <rect width="140" height="70" rx="12" fill="white" filter="url(#isoShadow)" />

      {/* Google blue badge */}
      <rect x="12" y="12" width="36" height="20" rx="4" fill="#4285f4" />
      <text x="30" y="26" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        DMV
      </text>

      <text x="12" y="48" fill="#202124" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Full Coverage
      </text>
      <text x="12" y="62" fill="#34a853" fontSize="10" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        13 cities • 24/7
      </text>
    </g>
  </svg>
);

export default {
  DMVServiceAreaMap,
  DMVMapCompact,
  DMVRouteMap,
  DMVIsometricMap,
};
