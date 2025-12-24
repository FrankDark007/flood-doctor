import React from 'react';

const OfficeMonitoringDashboard: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto" role="img" aria-label="Illustration of centralized monitoring dashboard showing active jobs and sensor data">
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes scan-line {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes bar-grow {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          transform-origin: center;
        }
        .animate-scan {
          animation: scan-line 4s linear infinite;
        }
        .animate-bar {
          transform-origin: bottom;
          animation: bar-grow 1s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-ring, .animate-scan, .animate-bar {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
      <div className="relative aspect-[4/3] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
        
        {/* Dashboard Header */}
        <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 justify-between">
           <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
           </div>
           <div className="text-[10px] font-mono text-gray-400">COMMAND CENTER v2.4</div>
        </div>

        {/* Dashboard Body */}
        <div className="p-4 grid grid-cols-12 gap-4 h-full">
            
            {/* Sidebar Stats */}
            <div className="col-span-4 space-y-3">
               <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="text-[10px] text-gray-500 font-semibold uppercase">Active Jobs</div>
                  <div className="text-2xl font-bold text-primary mt-1">12</div>
               </div>
               <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                  <div className="text-[10px] text-gray-500 font-semibold uppercase">Sensors Online</div>
                  <div className="text-2xl font-bold text-green-600 mt-1">148</div>
               </div>
               <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 h-24 relative overflow-hidden">
                  <div className="text-[10px] text-gray-500 font-semibold uppercase mb-2">Network Status</div>
                  <svg viewBox="0 0 100 50" className="w-full h-full opacity-50">
                     <path d="M0 25 Q 25 5 50 25 T 100 25" fill="none" stroke="#1a73e8" strokeWidth="2" />
                     <circle cx="50" cy="25" r="4" fill="#1a73e8" className="animate-pulse-ring" />
                  </svg>
               </div>
            </div>

            {/* Main Map/Graph Area */}
            <div className="col-span-8 space-y-3">
               
               {/* Map Mock */}
               <div className="bg-slate-900 rounded-lg p-4 h-40 relative overflow-hidden">
                   {/* Map Grid */}
                   <div className="absolute inset-0 opacity-20" 
                        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                   </div>
                   
                   {/* Active Job Dots */}
                   <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                   <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]"></div>
                   <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                   
                   {/* Scan Line */}
                   <div className="absolute inset-x-0 h-0.5 bg-green-500/50 shadow-[0_0_15px_#22c55e] animate-scan top-0"></div>
               </div>

               {/* Graph Mock */}
               <div className="bg-white border border-gray-100 rounded-lg p-3 h-24 flex items-end justify-between gap-1">
                   {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                       <div key={i} className="w-full bg-blue-100 rounded-t-sm relative h-full">
                           <div 
                               className="absolute bottom-0 w-full bg-primary rounded-t-sm animate-bar" 
                               style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                           ></div>
                       </div>
                   ))}
               </div>
            </div>
        </div>
        
        <div className="absolute bottom-2 right-4 text-[9px] text-gray-400 italic">
          Illustrative example
        </div>

      </div>
    </div>
  );
};

export default OfficeMonitoringDashboard;