import React from 'react';

const StructuralDryingCard: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto aspect-[3/1]" role="img" aria-label="Structural drying diagram showing airflow into wall cavities">
      <style>{`
        @keyframes inject-air {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        .animate-inject {
          animation: inject-air 1s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-inject { animation: none; opacity: 1; transform: translateY(-10px); }
        }
      `}</style>
      <svg viewBox="0 0 600 200" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Floor */}
        <rect x="50" y="160" width="500" height="10" fill="#e2e8f0" />
        
        {/* Wall Structure */}
        <rect x="100" y="40" width="10" height="120" fill="#cbd5e1" /> {/* Stud 1 */}
        <rect x="200" y="40" width="10" height="120" fill="#cbd5e1" /> {/* Stud 2 */}
        <rect x="300" y="40" width="10" height="120" fill="#cbd5e1" /> {/* Stud 3 */}
        <rect x="400" y="40" width="10" height="120" fill="#cbd5e1" /> {/* Stud 4 */}
        
        <rect x="50" y="30" width="500" height="10" fill="#cbd5e1" /> {/* Top Plate */}
        <rect x="50" y="160" width="500" height="10" fill="#cbd5e1" /> {/* Bottom Plate */}
        
        {/* Injector System */}
        <rect x="80" y="170" width="340" height="20" rx="4" fill="#1a73e8" /> {/* Main Hose */}
        
        {/* Injector Tubes */}
        <path d="M150 170 L 150 150" stroke="#1a73e8" strokeWidth="4" />
        <path d="M250 170 L 250 150" stroke="#1a73e8" strokeWidth="4" />
        <path d="M350 170 L 350 150" stroke="#1a73e8" strokeWidth="4" />

        {/* Airflow Arrows inside wall */}
        <g fill="#3b82f6">
            <path d="M150 140 L 145 150 L 155 150 Z" className="animate-inject" />
            <path d="M250 140 L 245 150 L 255 150 Z" className="animate-inject" style={{ animationDelay: '0.3s' }} />
            <path d="M350 140 L 345 150 L 355 150 Z" className="animate-inject" style={{ animationDelay: '0.6s' }} />
        </g>
        
        <text x="500" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Cavity Drying</text>
        <text x="500" y="120" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Saving Drywall & Insulation</text>

      </svg>
    </div>
  );
};

export default StructuralDryingCard;