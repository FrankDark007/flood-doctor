import React from 'react';

const ThreeDWalkthroughIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto" role="img" aria-label="3D scan of a room showing structural wireframe">
      <style>{`
        @keyframes scan-rotate {
          0% { transform: rotateX(60deg) rotateZ(0deg); }
          100% { transform: rotateX(60deg) rotateZ(360deg); }
        }
        @keyframes laser-scan {
          0% { stroke-dashoffset: 200; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .animate-spin-room {
          /* Static perspective for cleanliness, strictly wireframe scan effect */
        }
        .animate-laser {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: laser-scan 3s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-laser { animation: none; stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
      
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl aspect-video relative border border-gray-800">
         {/* UI Overlay */}
         <div className="absolute top-4 left-4 flex gap-2 z-10">
             <div className="px-2 py-1 bg-white/10 rounded text-[10px] text-white backdrop-blur-sm">Scan Mode</div>
             <div className="px-2 py-1 bg-primary/20 text-primary rounded text-[10px] backdrop-blur-sm border border-primary/30">Processing</div>
         </div>

         <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
             <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                     <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                 </div>
                 <div className="space-y-1">
                     <div className="w-24 h-1.5 bg-white/20 rounded-full"></div>
                     <div className="w-16 h-1.5 bg-white/10 rounded-full"></div>
                 </div>
             </div>
             <div className="text-[10px] text-gray-500 font-mono">Illustrative example</div>
         </div>

         {/* 3D Wireframe Scene */}
         <svg viewBox="0 0 400 225" className="w-full h-full opacity-80">
             <defs>
                 <linearGradient id="scan-gradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#1a73e8" stopOpacity="0" />
                     <stop offset="50%" stopColor="#1a73e8" stopOpacity="0.5" />
                     <stop offset="100%" stopColor="#1a73e8" stopOpacity="0" />
                 </linearGradient>
             </defs>
             
             {/* Room Perspective Lines */}
             <g stroke="#374151" strokeWidth="1">
                 {/* Floor Grid */}
                 <path d="M50 150 L100 200 L350 200 L300 150 Z" fill="none" />
                 <path d="M50 150 L50 50 L300 50 L300 150" fill="none" /> {/* Back Wall */}
                 <path d="M300 50 L350 80 L350 200" fill="none" /> {/* Right Wall */}
                 
                 {/* Grid lines on floor */}
                 <line x1="100" y1="160" x2="310" y2="160" opacity="0.3" />
                 <line x1="90" y1="170" x2="320" y2="170" opacity="0.3" />
                 <line x1="80" y1="180" x2="330" y2="180" opacity="0.3" />
                 <line x1="70" y1="190" x2="340" y2="190" opacity="0.3" />
             </g>

             {/* Point Cloud Dots */}
             <g fill="#1a73e8" opacity="0.4">
                 <circle cx="60" cy="60" r="1" /> <circle cx="290" cy="60" r="1" />
                 <circle cx="55" cy="140" r="1" /> <circle cx="340" cy="190" r="1" />
                 <circle cx="150" cy="55" r="1" /> <circle cx="200" cy="100" r="1" />
             </g>

             {/* Scanning Effect */}
             <rect x="0" y="0" width="400" height="225" fill="url(#scan-gradient)" className="animate-laser" style={{ mixBlendMode: 'overlay' }} />
             
             {/* Wireframe Object (e.g. Sofa outline) */}
             <path d="M120 160 L140 180 L240 180 L220 160 Z" stroke="#1a73e8" strokeWidth="1" fill="none" opacity="0.6" />
             <path d="M120 160 L120 140 L220 140 L220 160" stroke="#1a73e8" strokeWidth="1" fill="none" opacity="0.6" />
         </svg>
      </div>
    </div>
  );
};

export default ThreeDWalkthroughIllustration;