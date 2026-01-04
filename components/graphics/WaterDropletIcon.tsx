// components/graphics/WaterDropletIcon.tsx
// Premium animated water droplet icon with gradient

import React from 'react';

interface WaterDropletIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const WaterDropletIcon: React.FC<WaterDropletIconProps> = ({
  size = 48,
  className = '',
  animated = true
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="waterGradient" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4fc3f7" />
          <stop offset="50%" stopColor="#1a73e8" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
        <linearGradient id="highlightGradient" x1="18" y1="12" x2="30" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1a73e8" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Main droplet shape */}
      <path
        d="M24 4C24 4 8 20 8 30C8 38.8366 15.1634 46 24 46C32.8366 46 40 38.8366 40 30C40 20 24 4 24 4Z"
        fill="url(#waterGradient)"
        filter="url(#dropShadow)"
      >
        {animated && (
          <animate
            attributeName="d"
            values="M24 4C24 4 8 20 8 30C8 38.8366 15.1634 46 24 46C32.8366 46 40 38.8366 40 30C40 20 24 4 24 4Z;
                    M24 6C24 6 9 21 9 30C9 38.2843 15.7157 45 24 45C32.2843 45 39 38.2843 39 30C39 21 24 6 24 6Z;
                    M24 4C24 4 8 20 8 30C8 38.8366 15.1634 46 24 46C32.8366 46 40 38.8366 40 30C40 20 24 4 24 4Z"
            dur="3s"
            repeatCount="indefinite"
          />
        )}
      </path>

      {/* Highlight reflection */}
      <ellipse
        cx="18"
        cy="24"
        rx="4"
        ry="8"
        fill="url(#highlightGradient)"
        transform="rotate(-20 18 24)"
      >
        {animated && (
          <animate
            attributeName="opacity"
            values="0.6;0.8;0.6"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </ellipse>

      {/* Small highlight dot */}
      <circle cx="16" cy="18" r="2" fill="white" opacity="0.7">
        {animated && (
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="1.5s"
            repeatCount="indefinite"
          />
        )}
      </circle>
    </svg>
  );
};

export default WaterDropletIcon;
