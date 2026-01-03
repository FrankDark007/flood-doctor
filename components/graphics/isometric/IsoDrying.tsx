
import React from 'react';

const IsoDrying: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Floor */}
    <path d="M100 180 L20 140 L100 100 L180 140 Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
    
    {/* Walls */}
    <path d="M20 140 L20 60 L100 20 L100 100 Z" fill="#f3f4f6" />
    <path d="M180 140 L180 60 L100 20 L100 100 Z" fill="#f9fafb" />

    {/* Air Mover 1 (Snail) */}
    <g transform="translate(50, 110)">
        <path d="M10 20 L30 10 L40 20 L20 30 Z" fill="#1a73e8" />
        <path d="M10 20 L10 40 L20 50 L20 30 Z" fill="#1557b0" />
        <path d="M40 20 L40 40 L20 50 L20 30 Z" fill="#1e3a8a" />
        <circle cx="25" cy="30" r="8" fill="#fff" opacity="0.3" />
    </g>

    {/* Air Mover 2 */}
    <g transform="translate(130, 90)">
        <path d="M10 20 L30 10 L40 20 L20 30 Z" fill="#1a73e8" />
        <path d="M10 20 L10 40 L20 50 L20 30 Z" fill="#1557b0" />
        <path d="M40 20 L40 40 L20 50 L20 30 Z" fill="#1e3a8a" />
    </g>

    {/* Airflow Lines */}
    <path d="M80 130 C 100 110, 120 130, 140 110" stroke="#60a5fa" strokeWidth="2" fill="none" strokeDasharray="4 4" />
    <path d="M150 110 C 130 90, 110 80, 90 100" stroke="#60a5fa" strokeWidth="2" fill="none" strokeDasharray="4 4" />

    {/* Evaporation Particles */}
    <circle cx="100" cy="80" r="2" fill="#60a5fa" opacity="0.6">
        <animate attributeName="cy" values="80;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="90" r="2" fill="#60a5fa" opacity="0.6">
        <animate attributeName="cy" values="90;70" dur="2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </circle>
  </svg>
);

export default IsoDrying;
