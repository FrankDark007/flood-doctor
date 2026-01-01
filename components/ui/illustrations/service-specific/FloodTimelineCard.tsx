import React from 'react';

const FloodTimelineCard: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto aspect-[3/1]" role="img" aria-label="Flood cleanup response timeline">
      <style>{`
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-line 2s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-draw { stroke-dashoffset: 0; animation: none; }
        }
      `}</style>
      <svg viewBox="0 0 600 200" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        <path d="M50 100 L 550 100" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 100 L 550 100" stroke="#1a73e8" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
        
        {/* Step 1: Call */}
        <circle cx="50" cy="100" r="12" fill="white" stroke="#1a73e8" strokeWidth="3" />
        <text x="50" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Call</text>
        <text x="50" y="140" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Now</text>

        {/* Step 2: Dispatch */}
        <circle cx="175" cy="100" r="12" fill="white" stroke="#1a73e8" strokeWidth="3" />
        <text x="175" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Dispatch</text>
        <text x="175" y="140" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">60 Min</text>

        {/* Step 3: Extract */}
        <circle cx="300" cy="100" r="12" fill="white" stroke="#1a73e8" strokeWidth="3" />
        <text x="300" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Extract</text>
        <text x="300" y="140" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Day 1</text>

        {/* Step 4: Dry */}
        <circle cx="425" cy="100" r="12" fill="white" stroke="#1a73e8" strokeWidth="3" />
        <text x="425" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Dry</text>
        <text x="425" y="140" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Days 2-5</text>

        {/* Step 5: Verify */}
        <circle cx="550" cy="100" r="12" fill="#1a73e8" />
        <path d="M544 100 L 548 104 L 556 96" stroke="white" strokeWidth="2" fill="none" />
        <text x="550" y="70" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Verify</text>
        <text x="550" y="140" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Done</text>
      </svg>
    </div>
  );
};

export default FloodTimelineCard;