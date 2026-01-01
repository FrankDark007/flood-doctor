import React from 'react';

const PortalEquipmentLogsIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="List of drying equipment active on site with status indicators">
      <style>{`
        @keyframes grow-bar {
          from { width: 0; }
        }
        .animate-status-bar {
          animation: grow-bar 1s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-status-bar { animation: none; }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Header */}
        <text x="20" y="30" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Equipment On-Site</text>
        <line x1="20" y1="45" x2="380" y2="45" stroke="#e2e8f0" strokeWidth="1" />

        {/* Header Row */}
        <text x="20" y="65" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Asset ID</text>
        <text x="120" y="65" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Type</text>
        <text x="240" y="65" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Status / Runtime</text>

        {/* Row 1: Dehu */}
        <g transform="translate(20, 80)">
           <rect x="0" y="0" width="360" height="30" rx="4" fill="#f8fafc" />
           <text x="10" y="19" fontSize="12" fill="#334155" fontFamily="sans-serif">#DH-402</text>
           <text x="100" y="19" fontSize="12" fill="#334155" fontFamily="sans-serif">Dehumidifier LGR</text>
           
           {/* Status Bar */}
           <rect x="220" y="10" width="120" height="10" rx="5" fill="#e2e8f0" />
           <rect x="220" y="10" width="90" height="10" rx="5" fill="#22c55e" className="animate-status-bar" style={{ width: 90 }} />
           <text x="350" y="18" fontSize="10" fill="#22c55e" fontWeight="bold">ON</text>
        </g>

        {/* Row 2: Air Mover */}
        <g transform="translate(20, 120)">
           <rect x="0" y="0" width="360" height="30" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
           <text x="10" y="19" fontSize="12" fill="#334155" fontFamily="sans-serif">#AM-105</text>
           <text x="100" y="19" fontSize="12" fill="#334155" fontFamily="sans-serif">Air Mover</text>
           
           <rect x="220" y="10" width="120" height="10" rx="5" fill="#e2e8f0" />
           <rect x="220" y="10" width="120" height="10" rx="5" fill="#22c55e" className="animate-status-bar" style={{ width: 120 }} />
           <text x="350" y="18" fontSize="10" fill="#22c55e" fontWeight="bold">ON</text>
        </g>

        {/* Row 3: Scrubber */}
        <g transform="translate(20, 160)">
           <rect x="0" y="0" width="360" height="30" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
           <text x="10" y="19" fontSize="12" fill="#334155" fontFamily="sans-serif">#AS-009</text>
           <text x="100" y="19" fontSize="12" fill="#334155" fontFamily="sans-serif">Air Scrubber</text>
           
           <rect x="220" y="10" width="120" height="10" rx="5" fill="#e2e8f0" />
           <rect x="220" y="10" width="40" height="10" rx="5" fill="#f59e0b" className="animate-status-bar" style={{ width: 40 }} />
           <text x="350" y="18" fontSize="10" fill="#f59e0b" fontWeight="bold">IDLE</text>
        </g>

      </svg>
    </div>
  );
};

export default PortalEquipmentLogsIllustration;