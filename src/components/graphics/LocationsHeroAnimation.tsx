import React from 'react';

const LocationsHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Service Areas Map" className="w-full h-auto">
    <defs>
      <filter id="loc-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
      </filter>
      <linearGradient id="loc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e0f2f1"/>
        <stop offset="100%" stopColor="#ffffff"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#loc-grad)" rx="24"/>
    
    {/* Simplified Map Blob */}
    <path d="M200 100 Q 400 50 600 150 T 300 350 Z" fill="#ffffff" stroke="#e0f2f1" strokeWidth="4" opacity="0.8"/>
    
    {/* Pins */}
    <g transform="translate(300, 150)" filter="url(#loc-shadow)">
      <path d="M0 0 Q-15 -30 0 -45 Q15 -30 0 0" fill="#ea4335"/>
      <circle cx="0" cy="-30" r="5" fill="#ffffff"/>
      <animateTransform attributeName="transform" type="translate" values="300 150; 300 145; 300 150" dur="2s" repeatCount="indefinite"/>
    </g>
    
    <g transform="translate(450, 200)" filter="url(#loc-shadow)">
      <path d="M0 0 Q-15 -30 0 -45 Q15 -30 0 0" fill="#1a73e8"/>
      <circle cx="0" cy="-30" r="5" fill="#ffffff"/>
    </g>
    
    <g transform="translate(250, 250)" filter="url(#loc-shadow)">
      <path d="M0 0 Q-15 -30 0 -45 Q15 -30 0 0" fill="#34a853"/>
      <circle cx="0" cy="-30" r="5" fill="#ffffff"/>
    </g>
    
    {/* Radar Rings */}
    <circle cx="300" cy="150" r="20" fill="none" stroke="#ea4335" strokeWidth="2" opacity="0.5">
      <animate attributeName="r" values="10;60" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

export default LocationsHeroAnimation;