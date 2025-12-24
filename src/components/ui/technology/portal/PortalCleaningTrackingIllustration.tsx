import React from 'react';

const PortalCleaningTrackingIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="Process flow showing items moving from Pickup to Returned">
      <style>{`
        @keyframes arrow-flow {
          0% { stroke-dashoffset: 20; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .animate-arrow {
          stroke-dasharray: 20;
          animation: arrow-flow 2s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-arrow { animation: none; stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Stages */}
        <g transform="translate(40, 90)">
            {/* Step 1: Pickup */}
            <circle cx="0" cy="20" r="20" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
            <path d="M-8 20 L0 28 L8 12" stroke="#0ea5e9" strokeWidth="2" fill="none" />
            <text x="0" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Pickup</text>

            {/* Arrow 1 */}
            <line x1="30" y1="20" x2="90" y2="20" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="30" y1="20" x2="90" y2="20" stroke="#0ea5e9" strokeWidth="2" className="animate-arrow" />

            {/* Step 2: Cleaning */}
            <g transform="translate(120, 0)">
                <circle cx="0" cy="20" r="20" fill="white" stroke="#94a3b8" strokeWidth="2" />
                <path d="M-5 20 A 5 5 0 0 1 5 20" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <text x="0" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Cleaning</text>
            </g>

            {/* Arrow 2 */}
            <line x1="150" y1="20" x2="210" y2="20" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />

             {/* Step 3: Drying */}
            <g transform="translate(240, 0)">
                <circle cx="0" cy="20" r="20" fill="white" stroke="#94a3b8" strokeWidth="2" />
                 <path d="M-8 25 Q 0 10 8 25" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <text x="0" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Drying</text>
            </g>
            
             {/* Arrow 3 */}
            <line x1="270" y1="20" x2="330" y2="20" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />

             {/* Step 4: Returned */}
            <g transform="translate(360, -20)">
                {/* Dashed placeholder for "End" */}
                <circle cx="0" cy="40" r="15" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                <text x="0" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#94a3b8" fontFamily="sans-serif">Return</text>
            </g>
        </g>
      </svg>
    </div>
  );
};

export default PortalCleaningTrackingIllustration;