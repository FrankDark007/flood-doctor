import React from 'react';

const HomeHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Flood Doctor emergency response" className="w-full h-auto">
    <defs>
      <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.1"/>
      </filter>
      <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8f0fe"/>
        <stop offset="100%" stopColor="#ffffff"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#hero-grad)" rx="24"/>
    
    {/* Decorative shapes */}
    <circle cx="700" cy="50" r="150" fill="#1a73e8" opacity="0.05"/>
    <circle cx="100" cy="350" r="100" fill="#34a853" opacity="0.05"/>
    
    {/* Main dashboard card */}
    <g transform="translate(150, 50)" filter="url(#hero-shadow)">
      <rect width="500" height="300" rx="20" fill="#ffffff"/>
      
      {/* Header */}
      <rect width="500" height="60" rx="20" fill="#1a73e8"/>
      <rect y="40" width="500" height="20" fill="#1a73e8"/>
      <text x="30" y="38" fontSize="18" fontWeight="500" fill="#ffffff" fontFamily="system-ui">Active Response Dashboard</text>
      <g transform="translate(400, 20)">
        <rect width="70" height="24" rx="12" fill="#ffffff" opacity="0.2"/>
        <circle cx="16" cy="12" r="5" fill="#34a853">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="45" y="16" textAnchor="middle" fontSize="10" fill="#ffffff" fontFamily="system-ui">LIVE</text>
      </g>
      
      {/* Stats row */}
      <g transform="translate(30, 80)">
        <rect width="130" height="70" rx="10" fill="#f8f9fa"/>
        <text x="15" y="28" fontSize="12" fill="#5f6368" fontFamily="system-ui">Response Time</text>
        <text x="15" y="55" fontSize="24" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">47 min</text>
        
        <g transform="translate(150, 0)">
          <rect width="130" height="70" rx="10" fill="#f8f9fa"/>
          <text x="15" y="28" fontSize="12" fill="#5f6368" fontFamily="system-ui">Active Jobs</text>
          <text x="15" y="55" fontSize="24" fontWeight="500" fill="#34a853" fontFamily="system-ui">12</text>
        </g>
        
        <g transform="translate(300, 0)">
          <rect width="130" height="70" rx="10" fill="#f8f9fa"/>
          <text x="15" y="28" fontSize="12" fill="#5f6368" fontFamily="system-ui">Crews Deployed</text>
          <text x="15" y="55" fontSize="24" fontWeight="500" fill="#202124" fontFamily="system-ui">8</text>
        </g>
      </g>
      
      {/* Map placeholder */}
      <g transform="translate(30, 170)">
        <rect width="280" height="110" rx="8" fill="#e8f0fe"/>
        <text x="140" y="60" textAnchor="middle" fontSize="14" fill="#1a73e8" fontFamily="system-ui">Service Area Map</text>
        <circle cx="100" cy="55" r="8" fill="#1a73e8" opacity="0.3">
          <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="55" r="5" fill="#1a73e8"/>
        <circle cx="180" cy="70" r="5" fill="#34a853"/>
        <circle cx="220" cy="40" r="5" fill="#34a853"/>
      </g>
      
      {/* Recent activity */}
      <g transform="translate(330, 170)">
        <text x="0" y="16" fontSize="12" fontWeight="500" fill="#202124" fontFamily="system-ui">Recent Dispatch</text>
        <g transform="translate(0, 30)">
          <rect width="130" height="80" rx="8" fill="#e6f4ea"/>
          <circle cx="20" cy="20" r="10" fill="#34a853"/>
          <path d="M16 20 L19 23 L24 17" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <text x="38" y="24" fontSize="10" fill="#202124" fontFamily="system-ui">Crew en route</text>
          <text x="20" y="50" fontSize="11" fontWeight="500" fill="#34a853" fontFamily="system-ui">ETA: 23 min</text>
          <text x="20" y="68" fontSize="9" fill="#5f6368" fontFamily="system-ui">Arlington, VA</text>
        </g>
      </g>
    </g>
    
    {/* Floating rating */}
    <g transform="translate(680, 100)" filter="url(#hero-shadow)">
      <rect width="100" height="80" rx="12" fill="#ffffff"/>
      <text x="50" y="30" textAnchor="middle" fontSize="10" fill="#5f6368" fontFamily="system-ui">Rating</text>
      <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="500" fill="#fbbc04" fontFamily="system-ui">4.9 ★</text>
    </g>
  </svg>
);

export default HomeHeroAnimation;