import React from 'react';

const ClientPortalIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto" role="img" aria-label="Mockup of client portal interface showing tabs for photos, logs, and documents">
      <style>{`
        @keyframes tab-highlight {
          0% { opacity: 0.5; width: 0; }
          100% { opacity: 1; width: 40px; }
        }
        .animate-tab {
          animation: tab-highlight 1s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-tab { width: 40px; animation: none; }
        }
      `}</style>

      <svg viewBox="0 0 500 300" className="w-full h-auto bg-white rounded-xl shadow-lg border border-gray-200">
         
         {/* Sidebar */}
         <rect x="0" y="0" width="120" height="300" fill="#f8fafc" rx="12" />
         <path d="M120 0 V300" stroke="#e2e8f0" strokeWidth="1" />
         
         {/* Logo Placeholder */}
         <circle cx="30" cy="30" r="10" fill="#1a73e8" />
         <rect x="50" y="25" width="50" height="10" rx="2" fill="#cbd5e1" />

         {/* Sidebar Items */}
         <g transform="translate(20, 80)">
             {/* Active Item */}
             <rect x="-10" y="-5" width="110" height="30" rx="4" fill="#eff6ff" />
             <rect x="-10" y="-5" width="3" height="30" fill="#1a73e8" />
             <rect x="10" y="0" width="16" height="16" rx="2" fill="#1a73e8" />
             <rect x="35" y="5" width="60" height="6" rx="2" fill="#1e293b" />
         </g>
         <g transform="translate(20, 120)">
             <rect x="10" y="0" width="16" height="16" rx="2" fill="#94a3b8" />
             <rect x="35" y="5" width="50" height="6" rx="2" fill="#64748b" />
         </g>
         <g transform="translate(20, 160)">
             <rect x="10" y="0" width="16" height="16" rx="2" fill="#94a3b8" />
             <rect x="35" y="5" width="40" height="6" rx="2" fill="#64748b" />
         </g>

         {/* Main Content Area */}
         <g transform="translate(140, 30)">
             <text x="0" y="10" fontSize="16" fontWeight="bold" fill="#1e293b" fontFamily="sans-serif">Project Dashboard</text>
             
             {/* Tabs */}
             <g transform="translate(0, 40)">
                 <text x="0" y="0" fontSize="12" fill="#1a73e8" fontWeight="500" fontFamily="sans-serif">Daily Logs</text>
                 <rect x="0" y="8" width="40" height="2" fill="#1a73e8" className="animate-tab" />
                 
                 <text x="80" y="0" fontSize="12" fill="#64748b" fontFamily="sans-serif">Photos</text>
                 <text x="140" y="0" fontSize="12" fill="#64748b" fontFamily="sans-serif">Documents</text>
                 <line x1="0" y1="9" x2="340" y2="9" stroke="#e2e8f0" strokeWidth="1" />
             </g>

             {/* Content List */}
             <g transform="translate(0, 80)">
                 {/* Row 1 */}
                 <rect x="0" y="0" width="320" height="40" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                 <circle cx="20" cy="20" r="4" fill="#22c55e" />
                 <rect x="40" y="15" width="100" height="6" rx="2" fill="#334155" />
                 <rect x="40" y="25" width="60" height="4" rx="2" fill="#94a3b8" />
                 <rect x="280" y="12" width="20" height="16" rx="2" fill="#f1f5f9" />

                 {/* Row 2 */}
                 <rect x="0" y="50" width="320" height="40" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                 <circle cx="20" cy="70" r="4" fill="#22c55e" />
                 <rect x="40" y="65" width="90" height="6" rx="2" fill="#334155" />
                 <rect x="40" y="75" width="50" height="4" rx="2" fill="#94a3b8" />
                 
                 {/* Row 3 */}
                 <rect x="0" y="100" width="320" height="40" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                 <circle cx="20" cy="120" r="4" fill="#22c55e" />
                 <rect x="40" y="115" width="95" height="6" rx="2" fill="#334155" />
                 <rect x="40" y="125" width="55" height="4" rx="2" fill="#94a3b8" />
             </g>
         </g>
         
         <text x="480" y="290" textAnchor="end" fontSize="8" fill="#94a3b8" fontStyle="italic">Illustrative example</text>
      </svg>
    </div>
  );
};

export default ClientPortalIllustration;