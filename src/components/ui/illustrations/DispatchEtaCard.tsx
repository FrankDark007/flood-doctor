import React from 'react';

const DispatchEtaCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 w-full max-w-lg mx-auto transform hover:scale-[1.01] transition-transform duration-500">
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes move-dot {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .animate-route {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: dash 2s ease-out forwards;
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          transform-origin: center;
        }
        .animate-moving-dot {
          offset-path: path("M40 120 C 80 120, 100 80, 160 80 S 240 120, 300 120");
          animation: move-dot 3s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-route { stroke-dashoffset: 0; animation: none; }
          .animate-pulse-ring { animation: none; opacity: 0; }
          .animate-moving-dot { display: none; }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Dispatch Status</h3>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-lg font-bold text-gray-900">En Route</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Arrival</div>
          <div className="text-xl font-mono font-semibold text-gray-900">12 min</div>
        </div>
      </div>

      {/* Map Visual */}
      <div className="relative bg-subtle rounded-xl border border-gray-100 aspect-[2/1] overflow-hidden" role="img" aria-label="Map showing route from dispatch center to location with active vehicle icon">
        <svg viewBox="0 0 340 170" className="w-full h-full">
          {/* Background Grid */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
          </pattern>
          <rect width="340" height="170" fill="url(#grid)" />

          {/* Roads (Subtle) */}
          <path d="M0 120 H340" stroke="white" strokeWidth="8" />
          <path d="M160 0 V170" stroke="white" strokeWidth="8" />

          {/* Route Line */}
          <path 
            d="M40 120 C 80 120, 100 80, 160 80 S 240 120, 300 120" 
            fill="none" 
            stroke="#e0e7ff" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          <path 
            d="M40 120 C 80 120, 100 80, 160 80 S 240 120, 300 120" 
            fill="none" 
            stroke="#1a73e8" 
            strokeWidth="2" 
            strokeLinecap="round"
            className="animate-route"
          />

          {/* Start Point (Dispatch) */}
          <circle cx="40" cy="120" r="4" fill="#6b7280" />
          <text x="40" y="145" textAnchor="middle" className="text-[10px] fill-gray-500 font-sans font-medium">Dispatch</text>

          {/* Moving Vehicle */}
          <g className="animate-moving-dot">
             <circle r="6" fill="#1a73e8" stroke="white" strokeWidth="2" />
          </g>

          {/* End Point (Destination) */}
          <g transform="translate(300, 120)">
            <circle r="12" fill="none" stroke="#1a73e8" strokeWidth="1" className="animate-pulse-ring" />
            <circle r="4" fill="#1a73e8" />
            <path d="M0 -20 L0 -8" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="-12" y="-32" width="24" height="14" rx="4" fill="#1a73e8" />
            <text x="0" y="-23" textAnchor="middle" fill="white" className="text-[8px] font-bold font-sans">You</text>
          </g>
        </svg>
      </div>
      
      <div className="mt-3 text-center">
        <span className="text-xs text-gray-400 italic">Illustrative example of live tracking</span>
      </div>
    </div>
  );
};

export default DispatchEtaCard;