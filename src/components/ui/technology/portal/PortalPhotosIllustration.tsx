import React from 'react';

const PortalPhotosIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="Folder interface showing a grid of project photos">
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-photo {
          animation: slide-up 0.5s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-photo { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Folder Header */}
        <path d="M0 12 C0 5.37258 5.37258 0 12 0 H120 L140 20 H388 C394.627 20 400 25.3726 400 32 V213 C400 219.627 394.627 225 388 225 H12 C5.37258 225 0 219.627 0 213 V12 Z" fill="#f8fafc" />
        <path d="M0 20 H400" stroke="#e2e8f0" strokeWidth="1" />
        <text x="20" y="14" fontSize="10" fill="#64748b" fontWeight="600" fontFamily="sans-serif">Project Photos / Kitchen</text>

        {/* Photo Grid */}
        <g transform="translate(20, 40)">
           {/* Photo 1 */}
           <g className="animate-photo" style={{ animationDelay: '0.1s' }}>
             <rect x="0" y="0" width="110" height="70" rx="4" fill="#cbd5e1" />
             <rect x="5" y="55" width="60" height="6" rx="2" fill="white" opacity="0.8" />
             <circle cx="55" cy="30" r="10" fill="white" opacity="0.5" />
           </g>

           {/* Photo 2 */}
           <g className="animate-photo" style={{ animationDelay: '0.2s' }}>
             <rect x="125" y="0" width="110" height="70" rx="4" fill="#cbd5e1" />
             <rect x="130" y="55" width="50" height="6" rx="2" fill="white" opacity="0.8" />
             <path d="M160 40 L170 25 L180 40" fill="white" opacity="0.5" />
           </g>
           
           {/* Photo 3 */}
           <g className="animate-photo" style={{ animationDelay: '0.3s' }}>
             <rect x="250" y="0" width="110" height="70" rx="4" fill="#cbd5e1" />
             <rect x="255" y="55" width="70" height="6" rx="2" fill="white" opacity="0.8" />
           </g>

           {/* Photo 4 */}
           <g className="animate-photo" style={{ animationDelay: '0.4s' }}>
             <rect x="0" y="85" width="110" height="70" rx="4" fill="#cbd5e1" />
             <rect x="5" y="140" width="40" height="6" rx="2" fill="white" opacity="0.8" />
           </g>

           {/* Photo 5 */}
           <g className="animate-photo" style={{ animationDelay: '0.5s' }}>
             <rect x="125" y="85" width="110" height="70" rx="4" fill="#cbd5e1" />
             <rect x="130" y="140" width="60" height="6" rx="2" fill="white" opacity="0.8" />
           </g>

           {/* Photo 6 */}
           <g className="animate-photo" style={{ animationDelay: '0.6s' }}>
             <rect x="250" y="85" width="110" height="70" rx="4" fill="#cbd5e1" />
             <rect x="255" y="140" width="50" height="6" rx="2" fill="white" opacity="0.8" />
           </g>
        </g>
      </svg>
    </div>
  );
};

export default PortalPhotosIllustration;