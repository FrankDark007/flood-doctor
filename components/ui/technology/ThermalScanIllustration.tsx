import React from 'react';

const ThermalScanIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto" role="img" aria-label="Thermal imaging device revealing hidden moisture behind a wall">
      <style>{`
        @keyframes scan-sweep {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(140px); opacity: 0; }
        }
        @keyframes pulse-hotspot {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-scan-line {
          animation: scan-sweep 3s linear infinite;
        }
        .animate-hotspot {
          animation: pulse-hotspot 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scan-line { animation: none; opacity: 1; transform: translateY(70px); }
          .animate-hotspot { animation: none; opacity: 1; }
        }
      `}</style>
      
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-gray-50 rounded-xl border border-gray-100">
        
        {/* --- Wall Background --- */}
        <g transform="translate(40, 40)">
           {/* Wall Surface */}
           <rect x="0" y="0" width="200" height="220" fill="white" stroke="#e5e7eb" strokeWidth="2" rx="4" />
           
           {/* Stud hints (faint lines) */}
           <line x1="50" y1="0" x2="50" y2="220" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="4 4" />
           <line x1="100" y1="0" x2="100" y2="220" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="4 4" />
           <line x1="150" y1="0" x2="150" y2="220" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="4 4" />

           {/* Normal Wall Texture (dots) */}
           <circle cx="20" cy="30" r="1" fill="#e5e7eb" />
           <circle cx="180" cy="190" r="1" fill="#e5e7eb" />
           <circle cx="120" cy="80" r="1" fill="#e5e7eb" />
        </g>

        {/* --- The Device (Tablet/Camera) --- */}
        <g transform="translate(180, 70)">
           {/* Device Body */}
           <rect x="0" y="0" width="180" height="130" rx="8" fill="#1e293b" />
           
           {/* Camera Lens Hint (Back) */}
           <circle cx="160" cy="65" r="4" fill="#334155" />

           {/* Screen Area */}
           <g transform="translate(8, 8)">
               {/* Screen Mask */}
               <defs>
                   <clipPath id="screen-mask">
                       <rect x="0" y="0" width="164" height="114" rx="4" />
                   </clipPath>
                   <radialGradient id="heat-gradient">
                       <stop offset="0%" stopColor="#ef4444" /> {/* Red center */}
                       <stop offset="40%" stopColor="#eab308" /> {/* Yellow mid */}
                       <stop offset="70%" stopColor="#3b82f6" /> {/* Blue edge */}
                       <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
                   </radialGradient>
               </defs>

               {/* Screen Content */}
               <g clipPath="url(#screen-mask)">
                   {/* Background (Dark Thermal Mode) */}
                   <rect x="0" y="0" width="164" height="114" fill="#0f172a" />
                   
                   {/* Ghost of Wall Studs (Thermal view sees studs as colder/darker blue usually) */}
                   <line x1="-30" y1="-50" x2="-30" y2="200" stroke="#1e3a8a" strokeWidth="8" opacity="0.3" /> 
                   <line x1="20" y1="-50" x2="20" y2="200" stroke="#1e3a8a" strokeWidth="8" opacity="0.3" />
                   <line x1="70" y1="-50" x2="70" y2="200" stroke="#1e3a8a" strokeWidth="8" opacity="0.3" />

                   {/* THE MOISTURE BLOB (Only visible on screen) */}
                   <circle cx="60" cy="50" r="35" fill="url(#heat-gradient)" className="animate-hotspot" style={{ mixBlendMode: 'screen' }} />
                   
                   {/* UI Overlays */}
                   <text x="10" y="100" fontSize="10" fill="white" fontFamily="monospace" fontWeight="bold">MAX: 72°F</text>
                   <text x="10" y="108" fontSize="8" fill="#ef4444" fontFamily="monospace" fontWeight="bold">WET</text>

                   {/* Crosshair */}
                   <line x1="82" y1="52" x2="82" y2="62" stroke="white" strokeWidth="1" opacity="0.5" />
                   <line x1="77" y1="57" x2="87" y2="57" stroke="white" strokeWidth="1" opacity="0.5" />

                   {/* Scanning Sweep Line */}
                   <line x1="0" y1="-20" x2="164" y2="-20" stroke="#22c55e" strokeWidth="1.5" className="animate-scan-line" opacity="0.8" />
               </g>
           </g>
        </g>
        
        {/* Connection Line (Visual link between reality and screen) */}
        <path d="M120 150 C 150 150, 160 150, 180 135" stroke="#1a73e8" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.4" />

        {/* Labels */}
        <text x="100" y="280" textAnchor="middle" fontSize="10" fill="#9ca3af" fontStyle="italic">Visible Wall</text>
        <text x="270" y="220" textAnchor="middle" fontSize="10" fill="#9ca3af" fontStyle="italic">Thermal View</text>
      </svg>
      <div className="text-center mt-2 text-[10px] text-gray-400 italic">Illustrative example</div>
    </div>
  );
};

export default ThermalScanIllustration;