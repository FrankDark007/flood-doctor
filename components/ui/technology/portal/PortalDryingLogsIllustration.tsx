import React from 'react';

const PortalDryingLogsIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="Daily drying logs chart and data table">
      <style>{`
        @keyframes draw-chart {
          to { stroke-dashoffset: 0; }
        }
        .animate-chart-line {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw-chart 2s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-chart-line { stroke-dashoffset: 0; animation: none; }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Header */}
        <rect x="0" y="0" width="400" height="40" fill="#f8fafc" rx="12" />
        <path d="M0 40 H400" stroke="#e2e8f0" strokeWidth="1" />
        <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Daily Atmospheric Logs</text>
        <rect x="300" y="10" width="80" height="20" rx="4" fill="white" stroke="#e2e8f0" />
        <text x="340" y="24" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="sans-serif">Export PDF</text>

        {/* Content Area */}
        <g transform="translate(20, 60)">
           {/* Chart Area */}
           <rect x="0" y="0" width="360" height="80" fill="#f1f5f9" rx="4" />
           {/* Grid Lines */}
           <line x1="0" y1="20" x2="360" y2="20" stroke="white" strokeWidth="1" />
           <line x1="0" y1="40" x2="360" y2="40" stroke="white" strokeWidth="1" />
           <line x1="0" y1="60" x2="360" y2="60" stroke="white" strokeWidth="1" />
           
           {/* Data Line */}
           <path d="M10 70 L 60 60 L 110 40 L 160 35 L 210 25 L 260 20 L 310 22" fill="none" stroke="#1a73e8" strokeWidth="2" className="animate-chart-line" />
           <circle cx="310" cy="22" r="3" fill="#1a73e8" />

           {/* Table Rows */}
           <g transform="translate(0, 100)">
               <rect x="0" y="0" width="360" height="20" fill="white" stroke="#e2e8f0" />
               <text x="10" y="14" fontSize="10" fill="#64748b" fontFamily="sans-serif">Date</text>
               <text x="100" y="14" fontSize="10" fill="#64748b" fontFamily="sans-serif">Temp</text>
               <text x="200" y="14" fontSize="10" fill="#64748b" fontFamily="sans-serif">RH %</text>
               <text x="300" y="14" fontSize="10" fill="#64748b" fontFamily="sans-serif">GPP</text>

               <rect x="0" y="20" width="360" height="20" fill="white" stroke="#e2e8f0" />
               <text x="10" y="34" fontSize="10" fill="#1e293b" fontFamily="sans-serif">Oct 12</text>
               <text x="100" y="34" fontSize="10" fill="#1e293b" fontFamily="sans-serif">72°F</text>
               <text x="200" y="34" fontSize="10" fill="#1e293b" fontFamily="sans-serif">45%</text>
               <text x="300" y="34" fontSize="10" fill="#1e293b" fontFamily="sans-serif">55</text>
           </g>
        </g>
      </svg>
    </div>
  );
};

export default PortalDryingLogsIllustration;