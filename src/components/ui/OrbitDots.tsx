import React from 'react';

const OrbitDots: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square pointer-events-none -z-10 select-none overflow-visible" aria-hidden="true">
      <svg viewBox="0 0 800 800" className="w-full h-full opacity-60">
        <style>{`
          /* Ring Rotations (Background Field) */
          @keyframes spin-cw {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-ccw {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          
          /* Classes */
          .animate-spin-cw-slow { 
            animation: spin-cw 120s linear infinite; 
          }
          .animate-spin-ccw-slow { 
            animation: spin-ccw 140s linear infinite; 
          }
          .animate-spin-cw-slower { 
            animation: spin-cw 160s linear infinite; 
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .animate-spin-cw-slow, .animate-spin-ccw-slow, .animate-spin-cw-slower {
              animation: none;
            }
          }
        `}</style>
        
        {/* Center the coordinate system at 400,400 for easier rotation logic */}
        <g transform="translate(400, 400)">
            
            {/* Inner Ring (Static-ish Dotted Field) */}
            <circle 
              r="180" 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="2" 
              strokeDasharray="4 12" 
              className="animate-spin-cw-slow" 
            />
            
            {/* Middle Ring + Yellow Orbiter */}
            <g className="animate-spin-ccw-slow">
                <circle r="260" fill="none" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="4 20" />
                {/* Yellow Accent Circle */}
                <circle cx="260" cy="0" r="8" fill="#fcd34d" />
            </g>

            {/* Outer Ring + Green Orbiter */}
            <g className="animate-spin-cw-slower">
                <circle r="340" fill="none" stroke="#f9fafb" strokeWidth="2" strokeDasharray="4 30" />
                {/* Green Accent Circle */}
                <circle cx="340" cy="0" r="12" fill="#86efac" />
            </g>
            
        </g>
      </svg>
    </div>
  );
};

export default OrbitDots;