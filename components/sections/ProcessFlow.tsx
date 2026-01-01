
import React from 'react';
import { ArrowRight } from 'lucide-react';
import IsoInspection from '../graphics/isometric/IsoInspection';
import IsoExtraction from '../graphics/isometric/IsoExtraction';
import IsoDrying from '../graphics/isometric/IsoDrying';
import IsoVerification from '../graphics/isometric/IsoVerification';

interface ProcessFlowProps {
  items: string[];
  type?: string;
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ items, type }) => {
  // Define the 4 standard phases
  const phases = [
    {
      title: "Assessment & Safety",
      Visual: IsoInspection,
      // Take first 2-3 items or fallback defaults
      tasks: items.length > 0 ? items.slice(0, 3) : ["Site inspection", "Safety check", "Moisture mapping"],
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Mitigation & Cleanup",
      Visual: IsoExtraction,
      tasks: items.length > 3 ? items.slice(3, 6) : ["Water extraction", "Debris removal", "Sanitization"],
      color: "bg-indigo-50 text-indigo-700"
    },
    {
      title: "Drying & Monitoring",
      Visual: IsoDrying,
      tasks: items.length > 6 ? items.slice(6, 9) : ["Equipment setup", "Daily monitoring", "Humidity control"],
      color: "bg-purple-50 text-purple-700"
    },
    {
      title: "Verification & Repair",
      Visual: IsoVerification,
      tasks: items.length > 9 ? items.slice(9, 12) : ["Final testing", "Reconstruction", "Insurance sign-off"],
      color: "bg-green-50 text-green-700"
    }
  ];

  return (
    <div className="w-full">
      {/* Connector Line (Desktop) */}
      <div className="hidden lg:block absolute left-0 right-0 top-[180px] h-1 bg-gray-100 z-0 mx-12 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
        {phases.map((phase, i) => (
          <div key={i} className="group relative flex flex-col">
            
            {/* Visual Card */}
            <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden mb-6 aspect-square relative hover:shadow-google-hover transition-all duration-300 transform group-hover:-translate-y-1">
               {/* Step Number Badge */}
               <div className="absolute top-4 left-4 z-20">
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold shadow-sm ${phase.color}`}>
                      {i + 1}
                  </span>
               </div>
               
               {/* Isometric Graphic */}
               <div className="w-full h-full p-6 transform group-hover:scale-105 transition-transform duration-500">
                  <phase.Visual className="w-full h-full" />
               </div>
            </div>

            {/* Arrow (Mobile/Tablet only - between cards) */}
            <div className="lg:hidden flex justify-center mb-6 text-gray-300 last:hidden">
                <ArrowRight className="rotate-90 md:rotate-0" size={24} />
            </div>

            {/* Content */}
            <div className="px-2">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                    {phase.title}
                </h3>
                
                <ul className="space-y-3">
                    {phase.tasks.map((task, k) => (
                        <li key={k} className="flex items-start gap-3 text-sm text-gray-600 leading-snug">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                i === 3 ? 'bg-green-500' : 'bg-primary'
                            }`}></div>
                            {/* Strip prefixes like "Step 1:" if they exist in the raw data */}
                            <span>{task.replace(/^Step \d+:? /, '').replace(/^[A-Z][a-z]+: /, '')}</span>
                        </li>
                    ))}
                </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
