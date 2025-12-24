import React from 'react';
import { Check, ShieldCheck, Clock, Camera, Star } from 'lucide-react';

const HeroResponseMock: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-[420px] lg:max-w-md w-full">
      <style>{`
        @keyframes dash-draw {
          to { stroke-dashoffset: -20; }
        }
        .animate-dash-draw {
          animation: dash-draw 1.5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-dash-draw, .animate-ping {
            animation: none !important;
          }
          .animate-pulse {
            animation: none !important;
            opacity: 1 !important;
          }
          .moving-dot-group {
            display: none;
          }
        }
      `}</style>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-card border border-gray-200 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
        
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-900 tracking-tight">Active Response</span>
          </div>
          <span className="text-[10px] font-mono font-medium text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-100">
             #FD-2940
          </span>
        </div>

        <div className="p-5 sm:p-6">
            
            {/* Split Content: Timeline & Visuals */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                
                {/* Left: Timeline */}
                <div className="flex-1 min-w-[140px]">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Live Status</h3>
                    <div className="space-y-5 relative">
                         {/* Connecting Line */}
                         <div className="absolute top-2 left-[7px] bottom-3 w-px bg-gray-100 -z-10"></div>
                         
                         {/* Step 1: Call Received */}
                         <div className="flex gap-3 items-start">
                             <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 ring-4 ring-white">
                                 <Check size={10} className="text-white" strokeWidth={4} />
                             </div>
                             <div>
                                 <div className="text-sm font-medium text-gray-900 leading-none">Call received</div>
                                 <div className="text-[10px] text-gray-400 mt-1">08:14 AM</div>
                             </div>
                         </div>
                         
                         {/* Step 2: Dispatch */}
                         <div className="flex gap-3 items-start">
                             <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 ring-4 ring-white">
                                 <Check size={10} className="text-white" strokeWidth={4} />
                             </div>
                             <div>
                                 <div className="text-sm font-medium text-gray-900 leading-none">Crew Dispatched</div>
                                 <div className="text-[10px] text-gray-400 mt-1">08:19 AM</div>
                             </div>
                         </div>

                         {/* Step 3: On-Site (Active) */}
                         <div className="flex gap-3 items-start">
                             <div className="w-4 h-4 rounded-full bg-blue-50 border-2 border-primary flex items-center justify-center shrink-0 mt-0.5 ring-4 ring-white">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                             </div>
                             <div>
                                 <div className="text-sm font-bold text-primary leading-none">Arriving On-site</div>
                                 <div className="text-[10px] text-primary/80 mt-1 font-medium">ETA: 4 mins</div>
                             </div>
                         </div>

                         {/* Step 4: Drying Plan */}
                         <div className="flex gap-3 items-start opacity-40">
                             <div className="w-4 h-4 rounded-full bg-gray-50 border-2 border-gray-200 shrink-0 mt-0.5 ring-4 ring-white"></div>
                             <div>
                                 <div className="text-sm font-medium text-gray-900 leading-none">Drying Plan</div>
                                 <div className="text-[10px] text-gray-400 mt-1">Pending</div>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Right: Map & Metrics */}
                <div className="flex-1 flex flex-col gap-3">
                     
                     {/* Mini Map */}
                     <div className="bg-subtle rounded-lg border border-gray-100 h-24 relative overflow-hidden group w-full" role="img" aria-label="Map showing technician route">
                         {/* Abstract Map SVG */}
                         <svg viewBox="0 0 200 100" className="w-full h-full opacity-60">
                            <pattern id="grid-hero" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                            </pattern>
                            <rect width="200" height="100" fill="url(#grid-hero)" />
                            {/* Route Path Base */}
                            <path d="M 20 50 Q 80 20 180 50" fill="none" stroke="#e0e7ff" strokeWidth="4" strokeLinecap="round" />
                            {/* Route Path Dashed */}
                            <path d="M 20 50 Q 80 20 180 50" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="animate-dash-draw" />
                            
                            {/* Moving Dot */}
                            <g className="moving-dot-group">
                                <circle r="4" fill="#1a73e8">
                                    <animateMotion dur="3s" repeatCount="indefinite" path="M 20 50 Q 80 20 180 50" />
                                </circle>
                            </g>
                         </svg>
                         <div className="absolute top-2 right-2 flex items-center gap-1">
                             <span className="flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                             </span>
                         </div>
                         <div className="absolute bottom-1 right-1 text-[8px] font-medium bg-white/90 px-1.5 py-0.5 rounded text-gray-500 backdrop-blur-sm">
                             Live GPS
                         </div>
                     </div>

                     {/* Mini Sparkline */}
                     <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm flex flex-col justify-between flex-grow">
                         <div className="flex justify-between items-end mb-1">
                             <div className="text-[9px] uppercase text-gray-400 font-bold tracking-wider">RH Trend</div>
                             <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                                 <span className="text-[8px]">▼</span> 42%
                             </div>
                         </div>
                         <svg viewBox="0 0 100 25" className="w-full h-6 overflow-visible">
                             <path d="M0 20 L 20 18 L 40 12 L 60 14 L 80 8 L 100 4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             <circle cx="100" cy="4" r="2" fill="#10b981" />
                             {/* Gradient Fill (Simulated with opacity lines) */}
                             <path d="M0 25 L 0 20 L 20 18 L 40 12 L 60 14 L 80 8 L 100 4 L 100 25 Z" fill="#10b981" fillOpacity="0.1" stroke="none" />
                         </svg>
                         <div className="text-[8px] text-gray-300 mt-1 italic text-right">Illustrative example</div>
                     </div>
                </div>
            </div>

            {/* Proof Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                 {[
                    { label: 'IICRC Certified', icon: ShieldCheck },
                    { label: '24/7 Response', icon: Clock },
                    { label: 'Photo Docs', icon: Camera }
                 ].map((chip, i) => (
                     <div key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[10px] sm:text-xs font-medium text-gray-600">
                         <chip.icon size={12} className="text-primary" />
                         {chip.label}
                     </div>
                 ))}
            </div>

        </div>
      </div>

      {/* Review Tooltip */}
      <div className="absolute -right-2 sm:-right-6 top-8 bg-white p-3 rounded-xl shadow-soft border border-gray-100 max-w-[160px] hidden lg:block animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500 z-10">
        <div className="flex gap-0.5 text-orange-400 mb-1.5">
            {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
        </div>
        <p className="text-[11px] text-gray-600 leading-snug font-medium">
            "Technician arrived in 45 mins. Truly lifesavers!"
        </p>
        <div className="mt-1 text-[10px] text-gray-400">- Sarah J, Arlington</div>
      </div>

    </div>
  );
};

export default HeroResponseMock;