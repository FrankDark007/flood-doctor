import React from 'react';

const SensorNetworkIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto" role="img" aria-label="Floorplan showing network of sensors transmitting data to a central dashboard">
      <style>{`
        @keyframes pulse-dot {
          0% { r: 3; opacity: 1; }
          50% { r: 6; opacity: 0.4; }
          100% { r: 3; opacity: 1; }
        }
        @keyframes flow-data {
          to { stroke-dashoffset: 0; }
        }
        .animate-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .animate-flow {
          stroke-dasharray: 6;
          stroke-dashoffset: 12;
          animation: flow-data 1s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-dot { animation: none; r: 4; }
          .animate-flow { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
      
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-gray-50 rounded-xl border border-gray-100">
        
        {/* --- Floorplan Grid (Left) --- */}
        <g transform="translate(40, 50)">
            {/* Outline */}
            <path d="M0 0 H180 V200 H100 V150 H0 Z" fill="white" stroke="#9ca3af" strokeWidth="2" />
            
            {/* Interior Walls */}
            <line x1="90" y1="0" x2="90" y2="80" stroke="#e5e7eb" strokeWidth="2" /> {/* Vertical split */}
            <line x1="0" y1="80" x2="180" y2="80" stroke="#e5e7eb" strokeWidth="2" /> {/* Horizontal split */}
            <line x1="90" y1="150" x2="180" y2="150" stroke="#e5e7eb" strokeWidth="2" /> {/* Bedroom split */}

            {/* Room Labels */}
            <text x="45" y="40" textAnchor="middle" fontSize="8" fill="#cbd5e1" fontFamily="sans-serif">KITCHEN</text>
            <text x="135" y="40" textAnchor="middle" fontSize="8" fill="#cbd5e1" fontFamily="sans-serif">LIVING</text>
            <text x="45" y="115" textAnchor="middle" fontSize="8" fill="#cbd5e1" fontFamily="sans-serif">MASTER</text>
            <text x="140" y="175" textAnchor="middle" fontSize="8" fill="#cbd5e1" fontFamily="sans-serif">HALL</text>

            {/* Sensors (Dots) */}
            <g fill="#1a73e8">
                <circle cx="45" cy="20" r="3" /> {/* Kitchen Sensor */}
                <circle cx="45" cy="20" r="6" fill="#1a73e8" opacity="0.3" className="animate-dot" />

                <circle cx="160" cy="60" r="3" /> {/* Living Sensor */}
                <circle cx="160" cy="60" r="6" fill="#1a73e8" opacity="0.3" className="animate-dot" style={{ animationDelay: '0.5s' }} />

                <circle cx="30" cy="130" r="3" /> {/* Master Sensor */}
                <circle cx="30" cy="130" r="6" fill="#1a73e8" opacity="0.3" className="animate-dot" style={{ animationDelay: '1.0s' }} />

                <circle cx="140" cy="180" r="3" /> {/* Hall Sensor */}
            </g>
        </g>

        {/* --- Dashboard Card (Right) --- */}
        <g transform="translate(250, 80)">
            <rect x="0" y="0" width="120" height="140" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.05))" />
            
            {/* Header */}
            <rect x="0" y="0" width="120" height="30" rx="8" fill="#f8fafc" />
            <rect x="0" y="20" width="120" height="10" fill="#f8fafc" /> {/* Square corners */}
            <text x="10" y="20" fontSize="10" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Job Dashboard</text>
            
            {/* Metric 1 */}
            <g transform="translate(10, 50)">
                <text x="0" y="0" fontSize="8" fill="#64748b">Avg Humidity</text>
                <text x="0" y="12" fontSize="14" fontWeight="bold" fill="#1a73e8">42%</text>
            </g>

            {/* Metric 2 */}
            <g transform="translate(65, 50)">
                <text x="0" y="0" fontSize="8" fill="#64748b">Temp</text>
                <text x="0" y="12" fontSize="14" fontWeight="bold" fill="#1e293b">72°</text>
            </g>

            {/* Sparkline Chart */}
            <g transform="translate(10, 90)">
                <text x="0" y="-5" fontSize="8" fill="#64748b">Drying Rate</text>
                <path d="M0 30 L 20 25 L 40 28 L 60 15 L 80 10 L 100 12" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                <circle cx="100" cy="12" r="2" fill="#22c55e" />
            </g>
        </g>

        {/* --- Data Connections --- */}
        {/* Paths from sensor coordinates (adjusted for group transform) to dashboard input */}
        <path d="M85 70 C 150 70, 200 100, 250 120" stroke="#1a73e8" strokeWidth="1" fill="none" className="animate-flow" opacity="0.4" />
        <path d="M200 110 C 220 110, 230 130, 250 140" stroke="#1a73e8" strokeWidth="1" fill="none" className="animate-flow" opacity="0.4" />
        <path d="M70 180 C 120 180, 200 160, 250 160" stroke="#1a73e8" strokeWidth="1" fill="none" className="animate-flow" opacity="0.4" />

      </svg>
      <div className="text-center mt-2 text-[10px] text-gray-400 italic">Illustrative example</div>
    </div>
  );
};

export default SensorNetworkIllustration;