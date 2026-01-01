import React from 'react';

const OfficeDashboardGridIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto" role="img" aria-label="Dashboard showing multiple active restoration jobs with status indicators">
      <svg viewBox="0 0 400 240" className="w-full h-auto bg-gray-50 rounded-xl border border-gray-200">
         {/* Background Grid */}
         <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
             <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
         </pattern>
         <rect width="400" height="240" fill="url(#grid-pattern)" />

         {/* Card 1: Active Drying */}
         <g transform="translate(20, 20)">
             <rect width="110" height="90" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
             <rect x="10" y="10" width="40" height="6" rx="3" fill="#e5e7eb" />
             {/* Static Green Dot - Top Right */}
             <circle cx="100" cy="13" r="3" fill="#22c55e" />
             <text x="10" y="40" fontSize="14" fontWeight="bold" fill="#111827" fontFamily="sans-serif">Job #429</text>
             <text x="10" y="55" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Arlington, VA</text>
             {/* Sparkline */}
             <path d="M10 75 L 30 70 L 50 72 L 70 65 L 90 60" fill="none" stroke="#1a73e8" strokeWidth="1.5" />
         </g>

         {/* Card 2: Attention Needed */}
         <g transform="translate(145, 20)">
             <rect width="110" height="90" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
             <rect x="10" y="10" width="40" height="6" rx="3" fill="#e5e7eb" />
             {/* Static Yellow Dot - Top Right */}
             <circle cx="100" cy="13" r="3" fill="#eab308" />
             <text x="10" y="40" fontSize="14" fontWeight="bold" fill="#111827" fontFamily="sans-serif">Job #430</text>
             <text x="10" y="55" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Fairfax, VA</text>
             {/* Flatline */}
             <path d="M10 75 L 30 75 L 50 74 L 70 75 L 90 75" fill="none" stroke="#eab308" strokeWidth="1.5" />
         </g>

         {/* Card 3: Complete */}
         <g transform="translate(270, 20)">
             <rect width="110" height="90" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
             <rect x="10" y="10" width="40" height="6" rx="3" fill="#e5e7eb" />
             {/* Static Blue Dot - Top Right */}
             <circle cx="100" cy="13" r="3" fill="#3b82f6" />
             <text x="10" y="40" fontSize="14" fontWeight="bold" fill="#111827" fontFamily="sans-serif">Job #431</text>
             <text x="10" y="55" fontSize="8" fill="#6b7280" fontFamily="sans-serif">McLean, VA</text>
             {/* Completed Check */}
             <circle cx="90" cy="70" r="8" fill="#dbeafe" />
             <path d="M86 70 L 89 73 L 94 67" fill="none" stroke="#1a73e8" strokeWidth="1.5" />
         </g>

         {/* Row 2 (Faded) */}
         <g transform="translate(20, 130)" opacity="0.6">
             <rect width="110" height="90" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
             <rect x="10" y="10" width="40" height="6" rx="3" fill="#e5e7eb" />
         </g>
         <g transform="translate(145, 130)" opacity="0.6">
             <rect width="110" height="90" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
             <rect x="10" y="10" width="40" height="6" rx="3" fill="#e5e7eb" />
         </g>
         <g transform="translate(270, 130)" opacity="0.6">
             <rect width="110" height="90" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
             <rect x="10" y="10" width="40" height="6" rx="3" fill="#e5e7eb" />
         </g>

         <text x="380" y="230" textAnchor="end" fontSize="8" fill="#9ca3af" fontStyle="italic">Illustrative example</text>
      </svg>
    </div>
  );
};

export default OfficeDashboardGridIllustration;