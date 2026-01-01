import React from 'react';

const TechnologyHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Restoration Technology" className="w-full h-auto">
    <defs>
      <filter id="tech-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.1"/>
      </filter>
      <linearGradient id="tech-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3e8fd"/>
        <stop offset="100%" stopColor="#ffffff"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#tech-grad)" rx="24"/>
    
    {/* Background Grid */}
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a142f4" strokeWidth="0.5" opacity="0.1"/>
    </pattern>
    <rect width="800" height="400" fill="url(#grid)" rx="24"/>
    
    {/* Tech Device - Thermal Camera */}
    <g transform="translate(150, 80)" filter="url(#tech-shadow)">
      <rect width="200" height="240" rx="20" fill="#202124"/>
      <rect x="10" y="10" width="180" height="140" rx="10" fill="#3c4043"/>
      {/* Screen view */}
      <rect x="20" y="20" width="160" height="120" rx="8" fill="#000"/>
      <circle cx="100" cy="80" r="40" fill="url(#heat-grad)" opacity="0.8"/>
      <defs>
        <radialGradient id="heat-grad">
          <stop offset="0%" stopColor="#ff0000"/>
          <stop offset="50%" stopColor="#ffff00"/>
          <stop offset="100%" stopColor="#0000ff" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* UI Elements */}
      <rect x="20" y="160" width="40" height="40" rx="20" fill="#5f6368"/>
      <rect x="140" y="160" width="40" height="40" rx="20" fill="#5f6368"/>
      <rect x="80" y="160" width="40" height="40" rx="10" fill="#a142f4"/>
    </g>
    
    {/* Floating Data Card */}
    <g transform="translate(400, 120)" filter="url(#tech-shadow)">
      <rect width="250" height="160" rx="12" fill="#ffffff"/>
      <text x="20" y="30" fontSize="12" fontWeight="bold" fill="#5f6368" fontFamily="system-ui">DRYING LOG</text>
      {/* Chart */}
      <polyline points="20,120 60,100 100,110 140,80 180,60 220,50" fill="none" stroke="#1a73e8" strokeWidth="3"/>
      <circle cx="220" cy="50" r="4" fill="#1a73e8"/>
      <text x="20" y="140" fontSize="10" fill="#9aa0a6" fontFamily="system-ui">0h</text>
      <text x="220" y="140" fontSize="10" fill="#9aa0a6" fontFamily="system-ui">24h</text>
    </g>
  </svg>
);

export default TechnologyHeroAnimation;