
import React from 'react';

const IsoVerification: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Floor */}
    <path d="M100 180 L20 140 L100 100 L180 140 Z" fill="#f0fdf4" stroke="#dcfce7" strokeWidth="2" />
    
    {/* Walls */}
    <path d="M20 140 L20 60 L100 20 L100 100 Z" fill="#f3f4f6" />
    <path d="M180 140 L180 60 L100 20 L100 100 Z" fill="#f9fafb" />

    {/* Large Shield/Checkmark */}
    <g transform="translate(80, 50)">
        <path d="M20 0 L0 10 V30 C0 45 20 60 20 60 C20 60 40 45 40 30 V10 L20 0 Z" fill="#34a853" />
        <path d="M10 30 L18 38 L30 20" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Clipboard */}
    <g transform="translate(130, 110)">
        <path d="M0 10 L20 0 L30 5 L10 15 Z" fill="#fff" stroke="#94a3b8" strokeWidth="1" />
        <path d="M0 10 L0 30 L10 35 L10 15 Z" fill="#e2e8f0" />
        <path d="M30 5 L30 25 L10 35 L10 15 Z" fill="#f1f5f9" />
        <line x1="8" y1="20" x2="22" y2="13" stroke="#34a853" strokeWidth="2" />
        <line x1="8" y1="25" x2="22" y2="18" stroke="#34a853" strokeWidth="2" />
    </g>

    {/* Sparkles */}
    <path d="M60 100 L62 95 L64 100 L69 102 L64 104 L62 109 L60 104 L55 102 Z" fill="#fbbc04" />
    <path d="M160 80 L162 75 L164 80 L169 82 L164 84 L162 89 L160 84 L155 82 Z" fill="#fbbc04" />
  </svg>
);

export default IsoVerification;
