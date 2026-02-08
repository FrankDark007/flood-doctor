
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getProcessMapBySlug, ServiceProcessMap } from '../../data/serviceProcessMaps';

interface ProcessFlowProps {
  /** Service slug for looking up the specific process map */
  serviceSlug?: string;
  /** Optional override for section title */
  sectionTitle?: string;
  /** Legacy: raw items array (deprecated - use serviceSlug instead) */
  items?: string[];
  type?: string;
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ serviceSlug, sectionTitle, items, type }) => {
  // Get service-specific process map
  const processMap = serviceSlug ? getProcessMapBySlug(serviceSlug) : null;

  // Use service-specific steps if available, otherwise fallback to generic (deprecated)
  const phases = processMap?.steps || [
    {
      title: "Assessment & Safety",
      image: "/images/process-tiles/process-03-initial-assessment.png",
      tasks: items?.slice(0, 3) || ["Site inspection", "Safety check", "Moisture mapping"],
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Mitigation & Cleanup",
      image: "/images/process-tiles/process-05-water-extraction.png",
      tasks: items?.slice(3, 6) || ["Water extraction", "Debris removal", "Sanitization"],
      color: "bg-indigo-50 text-indigo-700"
    },
    {
      title: "Drying & Monitoring",
      image: "/images/process-tiles/process-08-air-movers.png",
      tasks: items?.slice(6, 9) || ["Equipment setup", "Daily monitoring", "Humidity control"],
      color: "bg-purple-50 text-purple-700"
    },
    {
      title: "Verification & Repair",
      image: "/images/process-tiles/process-30-final-inspection.png",
      tasks: items?.slice(9, 12) || ["Final testing", "Reconstruction", "Insurance sign-off"],
      color: "bg-green-50 text-green-700"
    }
  ];

  // Use custom section title if provided
  const displayTitle = sectionTitle || processMap?.sectionTitle || "How we restore your property";

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Process</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2">{displayTitle}</h2>
      </div>

      {/* Connector Line (Desktop) */}
      <div className="hidden lg:block absolute left-0 right-0 top-[180px] h-1 bg-gray-100 z-0 mx-12 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
        {phases.map((phase, i) => (
          <div key={i} className="group relative flex flex-col">

            {/* Visual Card */}
            <div className="bg-transparent rounded-[32px] overflow-hidden mb-6 aspect-square relative">
               {/* Step Number Badge */}
               <div className="absolute top-4 left-4 z-20">
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold shadow-sm ${phase.color}`}>
                      {i + 1}
                  </span>
               </div>

               {/* Custom Isometric PNG Tile */}
               <img
                  src={phase.image}
                  alt={phase.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
               />
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
                            <span>{task}</span>
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
