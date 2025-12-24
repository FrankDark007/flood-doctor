import React from 'react';

const PortalFinalVerificationIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video" role="img" aria-label="Certificate of Drying showing successful project completion">
      <style>{`
        @keyframes seal-fade-in {
          0% { opacity: 0; transform: scale(0.96) rotate(-3deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .animate-seal-safe {
          transform-origin: center;
          animation: seal-fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-seal-safe { animation: none; opacity: 1; transform: scale(1); }
        }
      `}</style>
      <svg viewBox="0 0 400 225" className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Document Paper - Centered */}
        <g transform="translate(60, 20)">
            <rect x="0" y="0" width="280" height="185" fill="#fff" stroke="#e2e8f0" strokeWidth="1" rx="2" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.05))" />
            
            {/* Header Area */}
            {/* Blue accent line, shortened to allow room for seal on right */}
            <rect x="25" y="25" width="160" height="2" fill="#1a73e8" />
            
            <text x="25" y="50" textAnchor="start" fontSize="14" fontWeight="bold" fill="#1e293b" fontFamily="serif">Certificate of Drying</text>
            <text x="25" y="65" textAnchor="start" fontSize="8" fill="#64748b" fontFamily="sans-serif">OFFICIAL RESTORATION DOCUMENT</text>
            
            {/* Body Lines (Mock Text) */}
            <g fill="#cbd5e1">
               <rect x="25" y="90" width="230" height="4" rx="1" />
               <rect x="25" y="102" width="210" height="4" rx="1" />
               <rect x="25" y="114" width="220" height="4" rx="1" />
               <rect x="25" y="126" width="180" height="4" rx="1" />
            </g>
    
            {/* Signature Section */}
            <g transform="translate(25, 160)">
                 <line x1="0" y1="0" x2="100" y2="0" stroke="#334155" strokeWidth="1" />
                 <text x="0" y="12" fontSize="8" fill="#64748b" fontFamily="sans-serif">Project Manager Signature</text>
                 <path d="M5 -10 C 20 -20, 40 -5, 80 -15" stroke="#1a73e8" strokeWidth="1" fill="none" opacity="0.7" />
            </g>
    
            {/* Golden Seal - Top Right - Anchored inside paper */}
            <g transform="translate(235, 55)" className="animate-seal-safe">
                {/* Ribbon tails */}
                <path d="M-8 15 L0 0 L8 15 L0 12 Z" fill="#b45309" transform="translate(-5, 12) rotate(-15)" />
                <path d="M-8 15 L0 0 L8 15 L0 12 Z" fill="#b45309" transform="translate(5, 12) rotate(15)" />
                
                {/* Main Seal Body */}
                <circle r="22" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
                <circle r="18" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2 1" opacity="0.6" />
                
                {/* Seal Text */}
                <text x="0" y="-4" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#78350f" fontFamily="sans-serif">DRY STANDARD</text>
                <text x="0" y="2" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#78350f" fontFamily="sans-serif">VERIFIED</text>
                
                {/* Star icon */}
                <path d="M0 6 L1.5 10 L6 10 L2.5 13 L4 17 L0 14.5 L-4 17 L-2.5 13 L-6 10 L-1.5 10 Z" fill="#78350f" transform="scale(0.8) translate(0, 5)" />
            </g>
        </g>

      </svg>
    </div>
  );
};

export default PortalFinalVerificationIllustration;