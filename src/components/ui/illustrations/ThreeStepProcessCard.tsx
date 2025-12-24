import React from 'react';

const ThreeStepProcessCard: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <style>{`
        @keyframes fill-line {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes scale-in {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        .animate-line-fill {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: fill-line 1.5s ease-out forwards;
        }
        .animate-step-pop {
          transform-origin: center;
          animation: scale-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.8s; }
        .delay-3 { animation-delay: 1.4s; }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-line-fill { stroke-dashoffset: 0; animation: none; }
          .animate-step-pop { animation: none; transform: scale(1); }
        }
      `}</style>

      <div className="relative w-full aspect-[4/1] md:aspect-[6/1]" role="img" aria-label="3-Step Process: Assess, Mitigate, Restore">
        <svg viewBox="0 0 600 100" className="w-full h-full overflow-visible">
          
          {/* Base Line */}
          <line x1="50" y1="40" x2="550" y2="40" stroke="#e5e7eb" strokeWidth="2" />

          {/* Active Line Progress */}
          <path d="M50 40 L550 40" stroke="#1a73e8" strokeWidth="2" strokeDasharray="500" strokeDashoffset="500">
             <animate attributeName="stroke-dashoffset" from="500" to="0" dur="2s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </path>

          {/* Step 1: Assess */}
          <g className="animate-step-pop delay-1">
             <circle cx="50" cy="40" r="14" fill="white" stroke="#1a73e8" strokeWidth="2" />
             <text x="50" y="45" textAnchor="middle" fill="#1a73e8" fontSize="10" fontWeight="bold" fontFamily="Poppins">1</text>
             <text x="50" y="70" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="600" fontFamily="Poppins">Assess</text>
             <text x="50" y="85" textAnchor="middle" fill="#6b7280" fontSize="10" fontFamily="Poppins">60 min arrival</text>
          </g>

          {/* Step 2: Mitigate */}
          <g className="animate-step-pop delay-2" style={{ transform: 'scale(0)' }}>
             <circle cx="300" cy="40" r="14" fill="white" stroke="#1a73e8" strokeWidth="2" />
             <text x="300" y="45" textAnchor="middle" fill="#1a73e8" fontSize="10" fontWeight="bold" fontFamily="Poppins">2</text>
             <text x="300" y="70" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="600" fontFamily="Poppins">Mitigate</text>
             <text x="300" y="85" textAnchor="middle" fill="#6b7280" fontSize="10" fontFamily="Poppins">Stop damage</text>
          </g>

          {/* Step 3: Restore */}
          <g className="animate-step-pop delay-3" style={{ transform: 'scale(0)' }}>
             <circle cx="550" cy="40" r="14" fill="white" stroke="#1a73e8" strokeWidth="2" />
             <text x="550" y="45" textAnchor="middle" fill="#1a73e8" fontSize="10" fontWeight="bold" fontFamily="Poppins">3</text>
             <text x="550" y="70" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="600" fontFamily="Poppins">Restore</text>
             <text x="550" y="85" textAnchor="middle" fill="#6b7280" fontSize="10" fontFamily="Poppins">Rebuild life</text>
          </g>
          
        </svg>
      </div>
    </div>
  );
};

export default ThreeStepProcessCard;