
import React from 'react';

const IsoExtraction: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Floor */}
    <path d="M100 180 L20 140 L100 100 L180 140 Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
    
    {/* Water Puddle */}
    <path d="M60 140 Q 80 120 120 130 T 150 150 T 100 165 T 50 150 Z" fill="#bfdbfe" opacity="0.8" />
    
    {/* Walls */}
    <path d="M20 140 L20 60 L100 20 L100 100 Z" fill="#f3f4f6" />
    <path d="M180 140 L180 60 L100 20 L100 100 Z" fill="#f9fafb" />

    {/* Equipment (LGR Dehu or Pump) */}
    <g transform="translate(110, 100)">
        <path d="M0 30 L20 20 L40 30 L20 40 Z" fill="#1e293b" /> {/* Top */}
        <path d="M0 30 L0 60 L20 70 L20 40 Z" fill="#334155" /> {/* Left Side */}
        <path d="M40 30 L40 60 L20 70 L20 40 Z" fill="#475569" /> {/* Right Side */}
        <circle cx="10" cy="55" r="4" fill="#000" /> {/* Wheel */}
    </g>

    {/* Hose */}
    <path d="M110 140 C 90 140, 70 150, 60 145" stroke="#1a73e8" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="60" cy="145" r="3" fill="#1a73e8" />

    {/* Extraction Wand */}
    <path d="M50 110 L60 145" stroke="#94a3b8" strokeWidth="2" />
    <path d="M45 115 L55 110" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default IsoExtraction;
