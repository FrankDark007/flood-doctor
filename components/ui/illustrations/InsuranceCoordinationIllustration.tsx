import React from 'react';

const InsuranceCoordinationIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto aspect-[4/3]" role="img" aria-label="Diagram showing documents sent from Flood Doctor to Insurance Carrier">
      <style>{`
        @keyframes file-transfer {
          0% { transform: translateX(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(120px) scale(0.8); opacity: 0; }
        }
        .animate-file {
          animation: file-transfer 2s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-file { animation: none; transform: translateX(60px); opacity: 1; }
        }
      `}</style>
      <svg viewBox="0 0 320 200" className="w-full h-full">
         
         {/* Flood Doctor Side */}
         <g transform="translate(40, 60)">
             <rect x="0" y="0" width="60" height="80" rx="8" fill="white" stroke="#1a73e8" strokeWidth="2" />
             <text x="30" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a73e8" fontFamily="sans-serif">FD</text>
             <text x="30" y="100" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Project Mgr</text>
         </g>

         {/* Connection Line */}
         <line x1="110" y1="100" x2="210" y2="100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

         {/* Moving File */}
         <g transform="translate(80, 80)" className="animate-file">
             <rect x="0" y="0" width="24" height="32" rx="2" fill="#fff" stroke="#64748b" strokeWidth="1" />
             <path d="M6 8 H18" stroke="#cbd5e1" strokeWidth="2" />
             <path d="M6 14 H18" stroke="#cbd5e1" strokeWidth="2" />
             <path d="M6 20 H12" stroke="#cbd5e1" strokeWidth="2" />
             <circle cx="20" cy="28" r="4" fill="#22c55e" />
         </g>

         {/* Insurance Side */}
         <g transform="translate(220, 60)">
             <rect x="0" y="0" width="60" height="80" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
             <path d="M20 30 L30 20 L40 30 L30 50 Z" fill="#94a3b8" opacity="0.5" />
             <text x="30" y="100" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">Insurance</text>
         </g>
         
      </svg>
    </div>
  );
};

export default InsuranceCoordinationIllustration;