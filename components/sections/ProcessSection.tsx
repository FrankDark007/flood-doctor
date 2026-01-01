
import React from 'react';
import { Search, Droplets, Wind, CheckCircle2 } from 'lucide-react';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Header + Dashboard */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start mb-20">
          
          {/* Header Text */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <span className="text-primary font-bold tracking-wide uppercase text-sm mb-4 block">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 tracking-tight leading-[1.1]">
              Scientific restoration, simplified.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              We follow a strict, data-driven protocol to ensure your property is completely dry and safe. No guesswork, just verified results.
            </p>
          </div>

          {/* Process Dashboard Mock */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-6 md:p-8 relative overflow-hidden group hover:border-blue-100 transition-colors duration-300">
               {/* SVG Mock */}
               <div className="w-full aspect-[2.5/1] md:aspect-[3/1] relative">
                  <svg viewBox="0 0 600 200" className="w-full h-full" aria-hidden="true">
                     <style>{`
                        /* Timeline Animation: 6s Loop */
                        
                        /* Line Drawing */
                        @keyframes progress-line-grow {
                           0% { stroke-dashoffset: 500; }
                           15% { stroke-dashoffset: 500; }
                           40% { stroke-dashoffset: 250; } /* Reach Step 2 */
                           50% { stroke-dashoffset: 250; } /* Pause Step 2 */
                           75% { stroke-dashoffset: 0; }   /* Reach Step 3 */
                           90% { stroke-dashoffset: 0; opacity: 1; }
                           100% { stroke-dashoffset: 0; opacity: 0; }
                        }

                        /* Dot Movement */
                        @keyframes dot-move {
                           0% { transform: translateX(50px); }
                           15% { transform: translateX(50px); }
                           40% { transform: translateX(300px); }
                           50% { transform: translateX(300px); }
                           75% { transform: translateX(550px); }
                           90% { transform: translateX(550px); opacity: 1; }
                           100% { transform: translateX(550px); opacity: 0; }
                        }

                        /* Step Activation (Fill Turn Blue) */
                        @keyframes fill-step-1 {
                           0% { fill: #ffffff; stroke: #e5e7eb; }
                           5% { fill: #1a73e8; stroke: #1a73e8; }
                           90% { opacity: 1; }
                           100% { opacity: 0; }
                        }

                        @keyframes fill-step-2 {
                           0% { fill: #ffffff; stroke: #e5e7eb; }
                           35% { fill: #ffffff; stroke: #e5e7eb; }
                           40% { fill: #1a73e8; stroke: #1a73e8; }
                           90% { opacity: 1; }
                           100% { opacity: 0; }
                        }

                        @keyframes fill-step-3 {
                           0% { fill: #ffffff; stroke: #e5e7eb; }
                           70% { fill: #ffffff; stroke: #e5e7eb; }
                           75% { fill: #1a73e8; stroke: #1a73e8; }
                           90% { opacity: 1; }
                           100% { opacity: 0; }
                        }

                        /* Pulse Ring */
                        @keyframes pulse-ring-anim {
                           0%, 5% { transform: scale(1); opacity: 0; }
                           5%, 15% { transform: scale(1.6); opacity: 0.4; } /* Pulse 1 */
                           15% { opacity: 0; }
                           
                           35% { transform: scale(1); opacity: 0; }
                           40%, 50% { transform: scale(1.6); opacity: 0.4; } /* Pulse 2 */
                           50% { opacity: 0; }

                           70% { transform: scale(1); opacity: 0; }
                           75%, 85% { transform: scale(1.6); opacity: 0.4; } /* Pulse 3 */
                           85% { opacity: 0; }
                        }

                        /* Classes */
                        .anim-line {
                           stroke-dasharray: 500;
                           animation: progress-line-grow 6s linear infinite;
                        }
                        .anim-dot {
                           animation: dot-move 6s linear infinite;
                        }
                        .step-1-anim { animation: fill-step-1 6s linear infinite; }
                        .step-2-anim { animation: fill-step-2 6s linear infinite; }
                        .step-3-anim { animation: fill-step-3 6s linear infinite; }
                        
                        .pulse-ring {
                           animation: pulse-ring-anim 6s linear infinite;
                           transform-origin: center;
                           transform-box: fill-box;
                           opacity: 0;
                        }

                        /* Reduced Motion: Static Completed State */
                        @media (prefers-reduced-motion: reduce) {
                           .anim-line { stroke-dashoffset: 0 !important; animation: none !important; opacity: 1 !important; }
                           .anim-dot { display: none !important; }
                           .step-circle { fill: #1a73e8 !important; stroke: #1a73e8 !important; animation: none !important; opacity: 1 !important; }
                           .pulse-ring { display: none !important; }
                        }
                     `}</style>

                     {/* Base Line */}
                     <line x1="50" y1="100" x2="550" y2="100" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />

                     {/* Animated Progress Line */}
                     <path d="M50 100 L550 100" stroke="#1a73e8" strokeWidth="4" strokeLinecap="round" className="anim-line" />

                     {/* Step 1: Assess */}
                     <g transform="translate(50, 100)">
                        <circle r="24" fill="#1a73e8" className="pulse-ring" />
                        <circle r="24" strokeWidth="3" className="step-circle step-1-anim" />
                        <circle r="8" fill="white" fillOpacity="0.4" />
                        <text y="50" textAnchor="middle" className="font-sans font-semibold text-gray-900 text-lg">Assess</text>
                        <text y="70" textAnchor="middle" className="font-sans text-xs text-gray-400 font-medium uppercase tracking-wide">Step 1</text>
                     </g>

                     {/* Step 2: Mitigate */}
                     <g transform="translate(300, 100)">
                        <circle r="24" fill="#1a73e8" className="pulse-ring" />
                        <circle r="24" strokeWidth="3" className="step-circle step-2-anim" />
                        <circle r="8" fill="white" fillOpacity="0.4" />
                        <text y="50" textAnchor="middle" className="font-sans font-semibold text-gray-900 text-lg">Mitigate</text>
                        <text y="70" textAnchor="middle" className="font-sans text-xs text-gray-400 font-medium uppercase tracking-wide">Step 2</text>
                     </g>

                     {/* Step 3: Restore */}
                     <g transform="translate(550, 100)">
                        <circle r="24" fill="#1a73e8" className="pulse-ring" />
                        <circle r="24" strokeWidth="3" className="step-circle step-3-anim" />
                        <circle r="8" fill="white" fillOpacity="0.4" />
                        <text y="50" textAnchor="middle" className="font-sans font-semibold text-gray-900 text-lg">Restore</text>
                        <text y="70" textAnchor="middle" className="font-sans text-xs text-gray-400 font-medium uppercase tracking-wide">Step 3</text>
                     </g>

                     {/* Moving Dot */}
                     <g transform="translate(0, 100)">
                        <circle r="6" fill="white" stroke="#1a73e8" strokeWidth="3" className="anim-dot" />
                     </g>
                  </svg>
               </div>
               <div className="mt-4 flex justify-between items-center border-t border-gray-50 pt-4">
                  <div className="flex gap-4">
                      {['Dispatch', 'Extraction', 'Drying', 'Monitoring'].map((label, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                              <div className={`w-1.5 h-1.5 rounded-full ${i < 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                              <span className={`text-[10px] font-medium uppercase tracking-wide ${i < 2 ? 'text-gray-700' : 'text-gray-400'}`}>{label}</span>
                          </div>
                      ))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium italic">Illustrative workflow</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-card hover:border-blue-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Search size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Rapid Assessment</h3>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Thermal imaging inspection</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Precise moisture mapping</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Safety hazard check</span>
                    </li>
                </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-card hover:border-blue-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Droplets size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Water Mitigation</h3>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Standing water extraction</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Debris & drywall removal</span>
                    </li>
                     <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Anti-microbial treatment</span>
                    </li>
                </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-card hover:border-blue-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wind size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Structural Drying</h3>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Industrial dehumidifiers</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Advanced air movement</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0"/>
                        <span>Daily progress monitoring</span>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
