import React from 'react';

const ServicesFilterHintCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto mb-8 opacity-80" role="img" aria-label="Illustration of service filtering options">
      <svg viewBox="0 0 300 40" className="w-full h-auto">
        
        {/* Search Bar Hint */}
        <rect x="0" y="5" width="24" height="24" rx="4" fill="#f1f5f9" />
        <circle cx="10" cy="15" r="4" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
        <line x1="13" y1="18" x2="16" y2="21" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Chips */}
        <rect x="34" y="5" width="70" height="24" rx="12" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
        <rect x="114" y="5" width="80" height="24" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="204" y="5" width="60" height="24" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />

        {/* Chip Text Lines */}
        <line x1="50" y1="17" x2="90" y2="17" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" />
        <line x1="130" y1="17" x2="170" y2="17" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <line x1="220" y1="17" x2="240" y2="17" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        
        {/* Cursor */}
        <path d="M70 20 L75 32 L78 28 L84 28 Z" fill="#111827" stroke="white" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default ServicesFilterHintCard;