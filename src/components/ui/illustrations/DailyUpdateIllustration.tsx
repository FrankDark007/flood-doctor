import React from 'react';

const DailyUpdateIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto aspect-[4/3]" role="img" aria-label="Mobile notification showing a daily drying progress update">
      <style>{`
        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-notification {
          animation: slide-down 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-notification { animation: none; transform: none; opacity: 1; }
        }
      `}</style>
      <svg viewBox="0 0 320 240" className="w-full h-full">
        {/* Phone Frame */}
        <rect x="40" y="20" width="240" height="220" rx="20" fill="white" stroke="#e2e8f0" strokeWidth="4" />
        <rect x="110" y="25" width="100" height="16" rx="8" fill="#f1f5f9" />

        {/* Notification Bubble */}
        <g transform="translate(55, 60)" className="animate-notification">
           <rect x="0" y="0" width="210" height="70" rx="12" fill="white" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
           
           {/* Icon */}
           <rect x="12" y="12" width="24" height="24" rx="6" fill="#1a73e8" />
           <path d="M20 20 L24 24 L29 17" stroke="white" strokeWidth="2" fill="none" />
           
           {/* Header */}
           <text x="44" y="22" fontSize="10" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Flood Doctor</text>
           <text x="175" y="22" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Now</text>
           
           {/* Body */}
           <text x="44" y="36" fontSize="10" fontWeight="600" fill="#334155" fontFamily="sans-serif">Day 2 Update: Progressing Well</text>
           <text x="44" y="48" fontSize="9" fill="#64748b" fontFamily="sans-serif">Indoor humidity down to 45%. Equipment</text>
           <text x="44" y="58" fontSize="9" fill="#64748b" fontFamily="sans-serif">will remain running for 24 more hours.</text>
        </g>

        {/* Background Elements (Blurred App) */}
        <g opacity="0.1">
           <rect x="60" y="150" width="80" height="60" rx="8" fill="#94a3b8" />
           <rect x="150" y="150" width="80" height="60" rx="8" fill="#94a3b8" />
           <rect x="60" y="220" width="200" height="20" rx="4" fill="#94a3b8" />
        </g>
      </svg>
    </div>
  );
};

export default DailyUpdateIllustration;