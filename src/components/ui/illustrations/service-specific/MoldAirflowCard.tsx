import React from 'react';

const MoldAirflowCard: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto aspect-[3/1]" role="img" aria-label="Mold remediation airflow diagram with HEPA filtration">
      <style>{`
        @keyframes flow-particles {
          0% { stroke-dashoffset: 20; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .animate-flow {
          stroke-dasharray: 20;
          animation: flow-particles 1.5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-flow { animation: none; stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
      <svg viewBox="0 0 600 200" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Room Outline */}
        <rect x="50" y="20" width="500" height="160" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        
        {/* Scrubber Unit */}
        <rect x="400" y="80" width="60" height="80" rx="4" fill="#1e293b" />
        <circle cx="430" cy="120" r="20" fill="#334155" />
        <text x="430" y="175" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">HEPA Scrubber</text>

        {/* Ducting */}
        <path d="M460 120 L550 120" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
        <path d="M460 120 L550 120" stroke="white" strokeWidth="8" strokeLinecap="round" />

        {/* Airflow Lines */}
        <g transform="translate(0, 0)">
            {/* Intake */}
            <path d="M100 100 Q 250 100 390 120" fill="none" stroke="#60a5fa" strokeWidth="2" className="animate-flow" />
            <path d="M100 140 Q 250 140 390 125" fill="none" stroke="#60a5fa" strokeWidth="2" className="animate-flow" style={{ animationDelay: '0.5s' }} />
            <path d="M100 60 Q 250 60 390 115" fill="none" stroke="#60a5fa" strokeWidth="2" className="animate-flow" style={{ animationDelay: '1.0s' }} />
        </g>
        
        {/* Mold Spores (Trapped) */}
        <circle cx="380" cy="110" r="2" fill="#ef4444" opacity="0.5" />
        <circle cx="370" cy="130" r="2" fill="#ef4444" opacity="0.5" />
        <circle cx="360" cy="120" r="2" fill="#ef4444" opacity="0.5" />

        {/* Clean Air (Exhaust) */}
        <path d="M555 120 L 580 120" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" />
        <text x="565" y="110" textAnchor="middle" fontSize="10" fill="#22c55e" fontWeight="bold" fontFamily="sans-serif">CLEAN</text>

      </svg>
    </div>
  );
};

export default MoldAirflowCard;