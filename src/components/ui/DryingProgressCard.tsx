import React, { useState, useEffect } from 'react';

const DryingProgressCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mapping helpers for 400x200 viewBox
  // X: 40..380 (width 340)
  // Y: 170..30 (height 140, val 0..100)
  const mapX = (i: number, count: number) => 40 + (i * (340 / (count - 1)));
  const mapY = (v: number) => 170 - (v * 1.4);

  // Data Points (7 days)
  const indoorRH = [62, 56, 49, 45, 42, 41, 40];
  const indoorGPP = [95, 82, 68, 60, 58, 56, 55];
  const outdoorRH = [52, 54, 50, 58, 53, 51, 54];

  // Path builder
  const buildPath = (data: number[]) => 
    data.map((v, i) => `${i===0?'M':'L'} ${mapX(i, data.length)} ${mapY(v)}`).join(' ');

  useEffect(() => {
    // Simulate data loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 sm:p-8 w-full max-w-lg mx-auto transform hover:scale-[1.01] transition-transform duration-500 min-h-[320px]">
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-draw {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawLine 2.5s ease-out forwards;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-draw {
            animation: none;
            stroke-dashoffset: 0;
          }
          .animate-shimmer {
            animation: none;
          }
          circle {
            display: none;
          }
        }
      `}</style>

      {isLoading ? (
        <div className="w-full h-full flex flex-col gap-6">
            {/* Header Skeleton */}
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <div className="h-3 w-20 bg-gray-100 rounded animate-pulse"></div>
                    <div className="h-6 w-32 bg-gray-100 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2 flex flex-col items-end">
                    <div className="h-3 w-24 bg-gray-100 rounded animate-pulse"></div>
                    <div className="h-3 w-24 bg-gray-100 rounded animate-pulse"></div>
                </div>
            </div>

            {/* Chart Area Skeleton */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 relative overflow-hidden h-[180px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-shimmer"></div>
                {/* Mock grid lines inside skeleton for realism */}
                <div className="space-y-8 mt-4 opacity-30">
                    <div className="h-px bg-gray-300 w-full"></div>
                    <div className="h-px bg-gray-300 w-full"></div>
                    <div className="h-px bg-gray-300 w-full"></div>
                </div>
            </div>

            {/* Footer Skeleton */}
            <div className="flex justify-between pt-2 border-t border-gray-100">
                <div className="h-3 w-20 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-3 w-32 bg-gray-100 rounded animate-pulse"></div>
            </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Process Status</h3>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xl font-bold text-gray-900">Drying Active</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-right">
              <div className="flex items-center justify-end gap-2 text-sm font-medium text-gray-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <span>Indoor RH: 62% <span className="text-gray-400 mx-0.5">→</span> 40%</span>
              </div>
              <div className="flex items-center justify-end gap-2 text-sm font-medium text-gray-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span>Indoor GPP: 95 <span className="text-gray-400 mx-0.5">→</span> 55</span>
              </div>
            </div>
          </div>

          {/* Tinted Panel Wrapper */}
          <div className="bg-subtle rounded-xl border border-gray-100 p-4">
            <div 
                className="relative w-full aspect-[2/1] overflow-hidden"
                role="img" 
                aria-label="Line chart showing drying progress over 7 days. Indoor RH dropped from 62% to 40%. Indoor GPP dropped from 95 to 55."
            >
                <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Grid Lines Y */}
                {[0, 25, 50, 75, 100].map(val => (
                    <g key={val}>
                    <line x1="40" y1={mapY(val)} x2="380" y2={mapY(val)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="35" y={mapY(val)} dy="3" textAnchor="end" className="text-[10px] fill-gray-400 font-sans">{val}</text>
                    </g>
                ))}
                
                {/* Labels X */}
                <text x="40" y="190" textAnchor="middle" className="text-[10px] fill-gray-400 font-sans">Day 1</text>
                <text x="380" y="190" textAnchor="middle" className="text-[10px] fill-gray-400 font-sans">Day 7</text>

                {/* Outdoor RH (Comparison) */}
                <path 
                    d={buildPath(outdoorRH)} 
                    fill="none" 
                    stroke="#9ca3af" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeDasharray="4 4"
                    opacity="0.5"
                />

                {/* Indoor GPP */}
                <path 
                    d={buildPath(indoorGPP)} 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    pathLength="1"
                    className="animate-draw"
                />

                {/* Indoor RH */}
                <path 
                    d={buildPath(indoorRH)} 
                    fill="none" 
                    stroke="#1a73e8" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    pathLength="1"
                    className="animate-draw"
                    style={{ animationDelay: '0.3s' }}
                />

                {/* Animated Dots */}
                <circle r="4" fill="#1a73e8" stroke="white" strokeWidth="2">
                    <animateMotion dur="6s" repeatCount="indefinite" path={buildPath(indoorRH)} calcMode="linear" />
                </circle>

                <circle r="4" fill="#10b981" stroke="white" strokeWidth="2">
                    <animateMotion dur="6s" repeatCount="indefinite" path={buildPath(indoorGPP)} calcMode="linear" />
                </circle>

                </svg>
            </div>

            <div className="mt-2 pt-3 border-t border-gray-200/50 flex justify-between items-center text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                <div className="w-6 h-0 border-t border-dashed border-gray-400"></div>
                Outdoor RH
                </div>
                <div>Target: &lt;45% RH (Achieved)</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DryingProgressCard;