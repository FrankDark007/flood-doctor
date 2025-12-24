import React from 'react';

const ResidentialHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Residential Restoration Services" className="w-full h-auto">
    <defs>
      <filter id="res-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.1"/>
      </filter>
      <linearGradient id="res-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8f9fa"/>
        <stop offset="100%" stopColor="#e8f0fe"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#res-grad)" rx="24"/>
    
    {/* Background House Outline */}
    <path d="M100 250 L400 100 L700 250" fill="none" stroke="#1a73e8" strokeWidth="2" strokeOpacity="0.1"/>
    <rect x="150" y="250" width="500" height="200" fill="none" stroke="#1a73e8" strokeWidth="2" strokeOpacity="0.1"/>

    {/* Stacked Service Cards */}
    {/* Card 1: Water */}
    <g transform="translate(180, 80)" filter="url(#res-shadow)">
      <rect width="200" height="140" rx="16" fill="#ffffff"/>
      <circle cx="40" cy="40" r="16" fill="#e8f0fe"/>
      <path d="M40 32 L44 42 L36 42 Z" fill="#1a73e8"/>
      <rect x="70" y="32" width="100" height="12" rx="6" fill="#f1f3f4"/>
      <rect x="70" y="52" width="80" height="8" rx="4" fill="#f8f9fa"/>
      {/* Progress */}
      <rect x="20" y="100" width="160" height="6" rx="3" fill="#e8eaed"/>
      <rect x="20" y="100" width="100" height="6" rx="3" fill="#1a73e8"/>
    </g>

    {/* Card 2: Mold */}
    <g transform="translate(420, 60)" filter="url(#res-shadow)">
      <rect width="200" height="140" rx="16" fill="#ffffff"/>
      <circle cx="40" cy="40" r="16" fill="#e6f4ea"/>
      <circle cx="40" cy="40" r="6" fill="#34a853"/>
      <rect x="70" y="32" width="100" height="12" rx="6" fill="#f1f3f4"/>
      <text x="120" y="110" fontSize="10" fill="#34a853" fontFamily="system-ui" fontWeight="500">Air Quality: Good</text>
    </g>

    {/* Card 3: Fire (Bottom Center) */}
    <g transform="translate(300, 200)" filter="url(#res-shadow)">
      <rect width="220" height="150" rx="16" fill="#ffffff"/>
      <rect width="220" height="40" rx="16" fill="#fef7e0"/>
      <rect y="20" width="220" height="20" fill="#fef7e0"/>
      <text x="110" y="28" textAnchor="middle" fontSize="12" fill="#b06000" fontFamily="system-ui" fontWeight="bold">Restoration In Progress</text>
      <g transform="translate(20, 60)">
         <rect width="180" height="10" rx="5" fill="#f1f3f4"/>
         <rect width="140" height="10" rx="5" fill="#fbbc04"/>
         <text x="190" y="9" fontSize="12" fill="#5f6368" fontFamily="system-ui">78%</text>
      </g>
      <g transform="translate(20, 90)">
         <circle cx="15" cy="15" r="15" fill="#fce8e6"/>
         <text x="40" y="20" fontSize="12" fill="#5f6368" fontFamily="system-ui">Smoke Removal</text>
      </g>
    </g>
  </svg>
);

export default ResidentialHeroAnimation;