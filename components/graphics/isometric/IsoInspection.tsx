
import React from 'react';

const IsoInspection: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wall-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#e5e7eb" />
      </linearGradient>
    </defs>
    
    {/* Floor */}
    <path d="M100 180 L20 140 L100 100 L180 140 Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
    
    {/* Walls */}
    <path d="M20 140 L20 60 L100 20 L100 100 Z" fill="url(#wall-grad)" opacity="0.8" />
    <path d="M180 140 L180 60 L100 20 L100 100 Z" fill="#f9fafb" opacity="0.9" />
    
    {/* Worker */}
    <g transform="translate(90, 80)">
       {/* Body */}
       <path d="M10 50 L0 45 L0 25 L10 20 L20 25 L20 45 Z" fill="#1a73e8" />
       {/* Head */}
       <circle cx="10" cy="15" r="8" fill="#1e293b" />
       {/* Tablet */}
       <path d="M15 35 L25 30 L30 35 L20 40 Z" fill="#334155" />
       <path d="M16 34 L24 30 L28 34 L20 38 Z" fill="#60a5fa" />
    </g>

    {/* Thermal Scan Cone */}
    <path d="M115 110 L160 80 L140 70 Z" fill="url(#thermal-grad)" opacity="0.6" />
    <defs>
      <linearGradient id="thermal-grad">
        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Magnifying Glass Icon Floating */}
    <g transform="translate(50, 60)">
        <circle cx="15" cy="15" r="10" fill="#ffffff" stroke="#fbbc04" strokeWidth="2" />
        <line x1="22" y1="22" x2="30" y2="30" stroke="#fbbc04" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

export default IsoInspection;
