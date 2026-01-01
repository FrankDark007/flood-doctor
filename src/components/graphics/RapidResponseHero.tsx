import React from 'react';

/**
 * Rapid Response Hero Graphic
 * Google-style speedometer showing 60-minute response time
 * Based on Google Ads hero.svg speedometer design
 */
export const RapidResponseHero: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 400" fill="none" className={className}>
    <defs>
      {/* Gauge gradient fills */}
      <linearGradient id="gaugeGreen" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34a853" />
        <stop offset="100%" stopColor="#34a853" />
      </linearGradient>
      <linearGradient id="gaugeYellow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbc04" />
        <stop offset="100%" stopColor="#fbbc04" />
      </linearGradient>
      <linearGradient id="gaugeRed" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ea4335" />
        <stop offset="100%" stopColor="#ea4335" />
      </linearGradient>

      {/* Shadow filter */}
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="500" height="400" rx="24" fill="#f8f9fa" />

    {/* Main speedometer gauge */}
    <g transform="translate(250, 200)">
      {/* Outer ring track */}
      <circle r="140" fill="none" stroke="#e8eaed" strokeWidth="24" />

      {/* Colored gauge sections - Green (fast), Yellow (medium), Red (slow) */}
      {/* Green section: 0-60 min (left side, fast zone) */}
      <path
        d="M -140 0 A 140 140 0 0 1 -70 -121.24"
        fill="none"
        stroke="#34a853"
        strokeWidth="24"
        strokeLinecap="round"
      />

      {/* Light green transition */}
      <path
        d="M -70 -121.24 A 140 140 0 0 1 0 -140"
        fill="none"
        stroke="#81c784"
        strokeWidth="24"
      />

      {/* Yellow section: 60-120 min */}
      <path
        d="M 0 -140 A 140 140 0 0 1 70 -121.24"
        fill="none"
        stroke="#fbbc04"
        strokeWidth="24"
      />

      {/* Orange transition */}
      <path
        d="M 70 -121.24 A 140 140 0 0 1 121.24 -70"
        fill="none"
        stroke="#f9a825"
        strokeWidth="24"
      />

      {/* Red section: 120+ min (slow zone) */}
      <path
        d="M 121.24 -70 A 140 140 0 0 1 140 0"
        fill="none"
        stroke="#ea4335"
        strokeWidth="24"
        strokeLinecap="round"
      />

      {/* Tick marks */}
      {[...Array(11)].map((_, i) => {
        const angle = -180 + (i * 18); // 180 degrees spread over 11 ticks
        const rad = (angle * Math.PI) / 180;
        const innerR = 155;
        const outerR = 165;
        return (
          <line
            key={i}
            x1={Math.cos(rad) * innerR}
            y1={Math.sin(rad) * innerR}
            x2={Math.cos(rad) * outerR}
            y2={Math.sin(rad) * outerR}
            stroke="#5f6368"
            strokeWidth={i % 5 === 0 ? 3 : 1.5}
            strokeLinecap="round"
          />
        );
      })}

      {/* Center hub */}
      <circle r="100" fill="white" filter="url(#cardShadow)" />
      <circle r="90" fill="#f8f9fa" />

      {/* Time display */}
      <text
        x="0"
        y="-15"
        textAnchor="middle"
        fill="#202124"
        fontSize="48"
        fontWeight="600"
        fontFamily="Plus Jakarta Sans, Inter, system-ui"
      >
        60
      </text>
      <text
        x="0"
        y="20"
        textAnchor="middle"
        fill="#5f6368"
        fontSize="18"
        fontWeight="500"
        fontFamily="Plus Jakarta Sans, Inter, system-ui"
      >
        MINUTES
      </text>
      <text
        x="0"
        y="45"
        textAnchor="middle"
        fill="#34a853"
        fontSize="14"
        fontWeight="600"
        fontFamily="Plus Jakarta Sans, Inter, system-ui"
      >
        RESPONSE TIME
      </text>

      {/* Animated needle */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-135;-145;-135"
          dur="3s"
          repeatCount="indefinite"
        />
        {/* Needle shadow */}
        <path
          d="M -8 0 L 0 -85 L 8 0 A 8 8 0 1 1 -8 0"
          fill="#ea4335"
          opacity="0.3"
          transform="translate(2, 2)"
        />
        {/* Needle */}
        <path
          d="M -6 0 L 0 -80 L 6 0 A 6 6 0 1 1 -6 0"
          fill="#ea4335"
        />
        <circle r="12" fill="#202124" />
        <circle r="6" fill="white" />
      </g>
    </g>

    {/* Status cards */}
    {/* Dispatch status card */}
    <g transform="translate(40, 320)">
      <rect width="130" height="56" rx="12" fill="white" filter="url(#cardShadow)" />
      <circle cx="24" cy="28" r="10" fill="#e8f5e9" />
      <path
        d="M20 28 L23 31 L29 25"
        stroke="#34a853"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text x="44" y="24" fill="#5f6368" fontSize="10" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Status
      </text>
      <text x="44" y="40" fill="#202124" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Dispatching
      </text>
    </g>

    {/* ETA card */}
    <g transform="translate(330, 320)">
      <rect width="130" height="56" rx="12" fill="white" filter="url(#cardShadow)" />
      <circle cx="24" cy="28" r="10" fill="#e8f0fe" />
      <circle cx="24" cy="28" r="4" fill="#4285f4">
        <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="44" y="24" fill="#5f6368" fontSize="10" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        ETA
      </text>
      <text x="44" y="40" fill="#1a73e8" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        &lt; 60 min
      </text>
    </g>

    {/* Speed labels */}
    <text x="80" y="165" fill="#34a853" fontSize="11" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
      FAST
    </text>
    <text x="400" y="165" fill="#ea4335" fontSize="11" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui" textAnchor="end">
      SLOW
    </text>

    {/* Live indicator */}
    <g transform="translate(420, 40)">
      <circle cx="10" cy="10" r="6" fill="#34a853">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="24" y="14" fill="#34a853" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        LIVE
      </text>
    </g>
  </svg>
);

/**
 * Compact version for smaller placements
 */
export const RapidResponseCompact: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <defs>
      <filter id="compactShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="200" height="200" rx="16" fill="#f8f9fa" />

    {/* Gauge */}
    <g transform="translate(100, 105)">
      {/* Track */}
      <circle r="70" fill="none" stroke="#e8eaed" strokeWidth="12" />

      {/* Green fast zone */}
      <path
        d="M -70 0 A 70 70 0 0 1 0 -70"
        fill="none"
        stroke="#34a853"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Yellow zone */}
      <path
        d="M 0 -70 A 70 70 0 0 1 49.5 -49.5"
        fill="none"
        stroke="#fbbc04"
        strokeWidth="12"
      />

      {/* Red slow zone */}
      <path
        d="M 49.5 -49.5 A 70 70 0 0 1 70 0"
        fill="none"
        stroke="#ea4335"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Center */}
      <circle r="50" fill="white" filter="url(#compactShadow)" />

      {/* Time */}
      <text x="0" y="-5" textAnchor="middle" fill="#202124" fontSize="28" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        60
      </text>
      <text x="0" y="15" textAnchor="middle" fill="#5f6368" fontSize="10" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        MIN
      </text>

      {/* Needle */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-135;-140;-135"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <path d="M -3 0 L 0 -40 L 3 0 A 3 3 0 1 1 -3 0" fill="#ea4335" />
        <circle r="5" fill="#202124" />
      </g>
    </g>

    {/* Label */}
    <text x="100" y="185" textAnchor="middle" fill="#34a853" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
      RAPID RESPONSE
    </text>
  </svg>
);

/**
 * Response Time Badge - inline indicator
 */
export const ResponseTimeBadge: React.FC<{ className?: string; time?: number }> = ({
  className = '',
  time = 60
}) => (
  <svg viewBox="0 0 120 40" fill="none" className={className}>
    <rect width="120" height="40" rx="20" fill="#e8f5e9" />
    <circle cx="24" cy="20" r="12" fill="#34a853">
      <animate attributeName="r" values="12;13;12" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="24" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
      {time}
    </text>
    <text x="74" y="24" textAnchor="middle" fill="#1e7e34" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
      min ETA
    </text>
  </svg>
);

export default RapidResponseHero;
