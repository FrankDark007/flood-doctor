import React from 'react';

const SewageContainmentCard: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto aspect-[3/1]" role="img" aria-label="Sewage containment diagram showing isolation of affected zone">
      <style>{`
        @keyframes pulse-zone {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-zone {
          animation: pulse-zone 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-zone { animation: none; opacity: 0.1; }
        }
      `}</style>
      <svg viewBox="0 0 600 200" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Safe Zone */}
        <rect x="0" y="0" width="300" height="200" fill="#f0fdf4" />
        <text x="150" y="100" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#166534" fontFamily="sans-serif">SAFE ZONE</text>
        <text x="150" y="120" textAnchor="middle" fontSize="12" fill="#166534" fontFamily="sans-serif">Clean & Occupiable</text>

        {/* Barrier */}
        <line x1="300" y1="0" x2="300" y2="200" stroke="#ef4444" strokeWidth="4" strokeDasharray="8 4" />
        <rect x="290" y="80" width="20" height="40" rx="4" fill="#ef4444" />
        <path d="M295 100 L305 100" stroke="white" strokeWidth="2" />
        <text x="300" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444" fontFamily="sans-serif">CONTAINMENT</text>

        {/* Affected Zone */}
        <rect x="300" y="0" width="300" height="200" fill="#fef2f2" />
        <rect x="300" y="0" width="300" height="200" fill="#ef4444" className="animate-pulse-zone" />
        
        <text x="450" y="100" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#991b1b" fontFamily="sans-serif">WORK ZONE</text>
        <text x="450" y="120" textAnchor="middle" fontSize="12" fill="#991b1b" fontFamily="sans-serif">Negative Air Pressure</text>
        <text x="450" y="135" textAnchor="middle" fontSize="10" fill="#991b1b" fontFamily="sans-serif">HEPA Filtration Active</text>

      </svg>
    </div>
  );
};

export default SewageContainmentCard;