import React from 'react';

const PortalDiscardedItemsIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="List of discarded non-salvageable items with documentation">
      <style>{`
        @keyframes stamp-fade {
          from { opacity: 0; transform: scale(1.5) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(-10deg); }
        }
        .animate-stamp {
          transform-origin: center;
          animation: stamp-fade 0.5s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-stamp { animation: none; opacity: 1; transform: rotate(-10deg); }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Header */}
        <rect x="0" y="0" width="400" height="40" fill="#fff1f2" rx="12" />
        <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#be123c" fontFamily="sans-serif">Total Loss / Discarded</text>
        <line x1="0" y1="40" x2="400" y2="40" stroke="#fecdd3" />

        {/* List */}
        <g transform="translate(20, 60)">
             {/* Item 1 */}
             <rect x="0" y="0" width="360" height="60" rx="4" fill="white" stroke="#e2e8f0" />
             
             {/* Thumbnail placeholder */}
             <rect x="10" y="10" width="40" height="40" rx="4" fill="#e2e8f0" />
             <path d="M20 25 L30 35 L40 25" stroke="white" fill="none" />
             
             <text x="60" y="25" fontSize="12" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Baseboard Trim (120 LF)</text>
             <text x="60" y="40" fontSize="10" fill="#64748b" fontFamily="sans-serif">Water swollen, non-salvageable MDF</text>

             {/* Stamp */}
             <g transform="translate(280, 20)">
                 <rect x="0" y="0" width="70" height="24" rx="2" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-stamp" style={{ animationDelay: '0.3s' }} />
                 <text x="35" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444" className="animate-stamp" style={{ animationDelay: '0.3s' }} fontFamily="sans-serif">DISPOSED</text>
             </g>
             
             {/* Item 2 (Faded) */}
             <g transform="translate(0, 70)" opacity="0.6">
                <rect x="0" y="0" width="360" height="50" rx="4" fill="white" stroke="#e2e8f0" />
                <rect x="10" y="10" width="40" height="30" rx="4" fill="#e2e8f0" />
                <text x="60" y="20" fontSize="12" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Carpet Padding</text>
                <text x="60" y="35" fontSize="10" fill="#64748b" fontFamily="sans-serif">Contaminated category 3</text>
             </g>
        </g>
      </svg>
    </div>
  );
};

export default PortalDiscardedItemsIllustration;