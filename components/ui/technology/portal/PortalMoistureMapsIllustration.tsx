import React from 'react';

const PortalMoistureMapsIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="Moisture map floorplan showing water migration from source to surrounding zones">
      <style>{`
        @keyframes flow-dash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes zone-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
        .animate-flow-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: flow-dash 3s ease-out forwards;
        }
        .animate-zone-pulse {
          animation: zone-pulse 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-flow-path { animation: none; stroke-dashoffset: 0; }
          .animate-zone-pulse { animation: none; opacity: 0.8; }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Background Grid (Subtle) */}
        <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f1f5f9" strokeWidth="0.5"/>
            </pattern>
        </defs>
        <rect width="400" height="225" fill="url(#smallGrid)" />

        {/* --- FLOORPLAN STRUCTURE --- */}
        <g stroke="#334155" strokeWidth="2" fill="white">
           {/* Main Outer Walls */}
           <path d="M40 40 H300 V180 H40 Z" />
           {/* Interior Wall: Kitchen/Bath vs Living */}
           <path d="M140 40 V120 H40" />
           {/* Interior Wall: Bedroom separation */}
           <path d="M140 120 V180" />
        </g>
        
        {/* Room Labels (Underlay) */}
        <g fill="#94a3b8" fontSize="10" fontFamily="sans-serif" fontWeight="500">
           <text x="70" y="70">KITCHEN</text>
           <text x="70" y="150">UTILITY</text>
           <text x="200" y="110">LIVING / DINING</text>
        </g>

        {/* --- MOISTURE ZONES OVERLAY --- */}
        {/* Concept: 10 Zones showing spread from Kitchen (Source) -> Utility -> Living */}

        {/* Zone 1: Source (Kitchen Sink Area) - WET - Dark Blue */}
        <rect x="42" y="42" width="48" height="78" fill="#1e3a8a" className="animate-zone-pulse" style={{ mixBlendMode: 'multiply' }} />
        
        {/* Zone 2: Kitchen Walkway - WET - Dark Blue */}
        <rect x="90" y="42" width="48" height="78" fill="#1e40af" opacity="0.8" style={{ mixBlendMode: 'multiply' }} />

        {/* Zone 3: Utility Room - DAMP - Medium Blue */}
        <rect x="42" y="122" width="96" height="56" fill="#3b82f6" opacity="0.6" style={{ mixBlendMode: 'multiply' }} />

        {/* Zone 4: Living Room (Adjacent to Kitchen) - DAMP - Medium Blue */}
        <rect x="142" y="42" width="50" height="136" fill="#60a5fa" opacity="0.5" style={{ mixBlendMode: 'multiply' }} />

        {/* Zone 5: Living Room (Center) - AFFECTED - Light Blue */}
        <rect x="192" y="42" width="50" height="136" fill="#93c5fd" opacity="0.3" style={{ mixBlendMode: 'multiply' }} />

        {/* Zone 6: Far Living Room - DRY - No Overlay (or very faint) */}
        <rect x="242" y="42" width="56" height="136" fill="#bfdbfe" opacity="0.1" style={{ mixBlendMode: 'multiply' }} />


        {/* --- WATER MIGRATION PATH --- */}
        {/* Path line from Source (Zone 1) migrating out */}
        <path 
            d="M 65 60 Q 80 60 115 80 T 160 110 T 210 110" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeDasharray="4 4"
            className="animate-flow-path"
            style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.3))' }}
        />
        {/* Origin Point */}
        <circle cx="65" cy="60" r="4" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
        <text x="65" y="50" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e3a8a">SOURCE</text>


        {/* --- LEGEND --- */}
        <g transform="translate(310, 40)">
           <rect x="0" y="0" width="80" height="90" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
           <text x="10" y="16" fontSize="10" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Moisture Level</text>
           
           {/* Wet */}
           <rect x="10" y="25" width="12" height="12" rx="2" fill="#1e3a8a" />
           <text x="30" y="34" fontSize="9" fill="#475569" fontFamily="sans-serif">Wet (100%)</text>
           
           {/* Damp */}
           <rect x="10" y="45" width="12" height="12" rx="2" fill="#3b82f6" opacity="0.6" />
           <text x="30" y="54" fontSize="9" fill="#475569" fontFamily="sans-serif">Damp (40%)</text>
           
           {/* Affected */}
           <rect x="10" y="65" width="12" height="12" rx="2" fill="#93c5fd" opacity="0.3" />
           <text x="30" y="74" fontSize="9" fill="#475569" fontFamily="sans-serif">Affected</text>
        </g>

        {/* --- META DATA --- */}
        <g transform="translate(310, 140)">
             <text x="0" y="0" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Scan Date: Oct 12</text>
             <text x="0" y="12" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Technician: JD</text>
             <text x="0" y="24" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Equip: Thermal IR</text>
        </g>

      </svg>
    </div>
  );
};

export default PortalMoistureMapsIllustration;