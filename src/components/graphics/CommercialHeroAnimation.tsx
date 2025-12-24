import React from 'react';

const CommercialHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Commercial Restoration Operations" className="w-full h-auto">
    <defs>
      <filter id="comm-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.1"/>
      </filter>
      <linearGradient id="comm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e3f2fd"/>
        <stop offset="100%" stopColor="#ffffff"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#comm-grad)" rx="24"/>
    
    {/* Abstract Cityscape */}
    <path d="M50 350 L50 150 L150 150 L150 200 L250 200 L250 100 L400 100 L400 350" fill="none" stroke="#1a73e8" strokeWidth="2" opacity="0.1"/>
    
    {/* Operations Dashboard */}
    <g transform="translate(200, 50)" filter="url(#comm-shadow)">
      <rect width="400" height="280" rx="16" fill="#ffffff"/>
      
      {/* Header */}
      <rect width="400" height="50" rx="16" fill="#1e293b"/>
      <rect y="30" width="400" height="20" fill="#1e293b"/>
      <circle cx="30" cy="25" r="6" fill="#ef4444"/>
      <circle cx="50" cy="25" r="6" fill="#f59e0b"/>
      <circle cx="70" cy="25" r="6" fill="#22c55e"/>
      <text x="350" y="30" textAnchor="end" fontSize="12" fill="#94a3b8" fontFamily="monospace">COMMAND_CENTER</text>
      
      {/* Map Grid */}
      <g transform="translate(20, 70)">
        <rect width="220" height="140" rx="8" fill="#f1f5f9"/>
        <path d="M0 40 H220 M0 80 H220 M0 120 H220" stroke="#e2e8f0"/>
        <path d="M60 0 V140 M120 0 V140 M180 0 V140" stroke="#e2e8f0"/>
        {/* Active Jobs */}
        <circle cx="90" cy="60" r="4" fill="#1a73e8">
           <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
           <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="150" cy="100" r="4" fill="#34a853"/>
      </g>
      
      {/* Right Column Stats */}
      <g transform="translate(260, 70)">
         <rect width="120" height="60" rx="8" fill="#e8f0fe"/>
         <text x="10" y="20" fontSize="10" fill="#1a73e8">ACTIVE CREWS</text>
         <text x="10" y="45" fontSize="24" fontWeight="bold" fill="#1a73e8">14</text>
         
         <rect y="70" width="120" height="60" rx="8" fill="#e6f4ea"/>
         <text x="10" y="90" fontSize="10" fill="#34a853">MITIGATION</text>
         <text x="10" y="115" fontSize="24" fontWeight="bold" fill="#34a853">92%</text>
      </g>
      
      {/* Bottom Timeline */}
      <g transform="translate(20, 230)">
         <line x1="0" y1="10" x2="360" y2="10" stroke="#e2e8f0" strokeWidth="2"/>
         <circle cx="0" cy="10" r="4" fill="#1a73e8"/>
         <circle cx="120" cy="10" r="4" fill="#1a73e8"/>
         <circle cx="240" cy="10" r="4" fill="#1a73e8"/>
         <circle cx="360" cy="10" r="4" fill="#94a3b8"/>
         <text x="0" y="30" fontSize="10" fill="#64748b">Alert</text>
         <text x="120" y="30" fontSize="10" fill="#64748b">Deploy</text>
         <text x="240" y="30" fontSize="10" fill="#64748b">Restore</text>
         <text x="360" y="30" fontSize="10" fill="#94a3b8">Verify</text>
      </g>
    </g>
  </svg>
);

export default CommercialHeroAnimation;