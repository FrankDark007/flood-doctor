import React from 'react';

const PortalContentsListIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="Inventory checklist showing item status like Packed or Cleaned">
      <style>{`
        @keyframes check-pop {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-check {
          transform-origin: center;
          animation: check-pop 0.4s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-check { animation: none; transform: scale(1); opacity: 1; }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Header */}
        <text x="20" y="30" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Inventory & Contents</text>
        
        {/* Filters */}
        <g transform="translate(20, 50)">
            <rect x="0" y="0" width="60" height="20" rx="10" fill="#e0f2fe" />
            <text x="30" y="14" textAnchor="middle" fontSize="10" fill="#0284c7" fontFamily="sans-serif">All Items</text>
            
            <rect x="70" y="0" width="60" height="20" rx="10" fill="white" stroke="#e2e8f0" />
            <text x="100" y="14" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Packed</text>
        </g>

        {/* List Items */}
        <g transform="translate(20, 90)">
            {/* Item 1 */}
            <rect x="0" y="0" width="360" height="40" rx="4" fill="white" stroke="#e2e8f0" />
            <rect x="15" y="12" width="16" height="16" rx="2" stroke="#cbd5e1" fill="none" />
            {/* Checked Box */}
            <path d="M18 20 L22 24 L28 15" stroke="#1a73e8" strokeWidth="2" fill="none" className="animate-check" style={{ animationDelay: '0.2s' }} />
            
            <text x="45" y="24" fontSize="12" fill="#334155" fontWeight="500" fontFamily="sans-serif">Living Room Sofa (Sect A)</text>
            <rect x="280" y="10" width="70" height="20" rx="4" fill="#dcfce7" />
            <text x="315" y="24" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600" fontFamily="sans-serif">CLEANED</text>

            {/* Item 2 */}
            <rect x="0" y="50" width="360" height="40" rx="4" fill="white" stroke="#e2e8f0" />
            <rect x="15" y="62" width="16" height="16" rx="2" stroke="#cbd5e1" fill="none" />
            <path d="M18 70 L22 74 L28 65" stroke="#1a73e8" strokeWidth="2" fill="none" className="animate-check" style={{ animationDelay: '0.4s' }} />

            <text x="45" y="74" fontSize="12" fill="#334155" fontWeight="500" fontFamily="sans-serif">Area Rug - Wool</text>
            <rect x="280" y="60" width="70" height="20" rx="4" fill="#e0f2fe" />
            <text x="315" y="74" textAnchor="middle" fontSize="10" fill="#0369a1" fontWeight="600" fontFamily="sans-serif">PACKED</text>
        </g>

      </svg>
    </div>
  );
};

export default PortalContentsListIllustration;