import React from 'react';

const AboutHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="About Flood Doctor Team" className="w-full h-auto">
    <defs>
      <filter id="about-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.1"/>
      </filter>
      <linearGradient id="about-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef3e8"/>
        <stop offset="100%" stopColor="#ffffff"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#about-grad)" rx="24"/>
    
    {/* Team Card Central */}
    <g transform="translate(250, 80)" filter="url(#about-shadow)">
      <rect width="300" height="240" rx="20" fill="#ffffff"/>
      
      {/* Avatars */}
      <circle cx="150" cy="80" r="40" fill="#e8f0fe"/>
      <path d="M110 140 Q150 180 190 140" fill="none" stroke="#1a73e8" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="80" cy="120" r="30" fill="#e6f4ea"/>
      <circle cx="220" cy="120" r="30" fill="#fef7e0"/>
      
      {/* Text */}
      <text x="150" y="180" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#202124" fontFamily="system-ui">Local Experts</text>
      <text x="150" y="205" textAnchor="middle" fontSize="12" fill="#5f6368" fontFamily="system-ui">Serving DMV since 2010</text>
    </g>
    
    {/* Trust Badges */}
    <g transform="translate(100, 200)" filter="url(#about-shadow)">
      <circle cx="40" cy="40" r="40" fill="#ffffff"/>
      <path d="M25 40 L35 50 L55 30" stroke="#34a853" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </g>
    
    <g transform="translate(620, 200)" filter="url(#about-shadow)">
      <circle cx="40" cy="40" r="40" fill="#ffffff"/>
      <path d="M40 25 L40 55 M25 40 L55 40" stroke="#1a73e8" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
);

export default AboutHeroAnimation;