// components/graphics/EmergencyBadge.tsx
// Animated 24/7 Emergency Response badge with pulsing effect

import React from 'react';

interface EmergencyBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const EmergencyBadge: React.FC<EmergencyBadgeProps> = ({
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Pulsing outer ring */}
      <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-20" style={{ animationDuration: '2s' }} />

      {/* Second pulse layer */}
      <div className="absolute inset-2 animate-ping rounded-full bg-blue-600 opacity-15" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />

      {/* Main badge */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="badgeGradient" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#1a73e8" />
            <stop offset="100%" stopColor="#0d47a1" />
          </linearGradient>
          <linearGradient id="innerGlow" x1="100" y1="40" x2="100" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1a73e8" />
          </linearGradient>
          <filter id="badgeShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1a73e8" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* Outer circle */}
        <circle cx="100" cy="100" r="95" fill="url(#badgeGradient)" filter="url(#badgeShadow)" />

        {/* White ring */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="white" strokeWidth="3" opacity="0.3" />

        {/* Inner circle */}
        <circle cx="100" cy="100" r="75" fill="url(#innerGlow)" />

        {/* 24/7 text */}
        <text
          x="100"
          y="85"
          textAnchor="middle"
          fill="white"
          fontSize="42"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          24/7
        </text>

        {/* Emergency text */}
        <text
          x="100"
          y="115"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2"
        >
          EMERGENCY
        </text>

        {/* Response text */}
        <text
          x="100"
          y="135"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1"
          opacity="0.9"
        >
          RESPONSE
        </text>

        {/* Decorative stars */}
        <circle cx="45" cy="100" r="3" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="155" cy="100" r="3" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </svg>
    </div>
  );
};

export default EmergencyBadge;
