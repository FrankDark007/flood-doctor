// components/graphics/ProcessTimeline.tsx
// Animated 4-step restoration process infographic

import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  duration: string;
  icon: 'assessment' | 'extraction' | 'drying' | 'restoration';
}

interface ProcessTimelineProps {
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'detailed';
  cityName?: string;
}

interface ProcessStepExtended extends ProcessStep {
  details: string[];
  equipment: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  className = '',
  variant = 'horizontal',
  cityName = ''
}) => {
  // Enhanced step data with comprehensive SEO-optimized content
  const stepsExtended: ProcessStepExtended[] = [
    {
      number: 1,
      title: "Emergency Assessment",
      description: "IICRC-certified technicians arrive within 60 minutes to conduct a comprehensive water damage evaluation using thermal imaging and moisture detection equipment.",
      details: [
        "Identify water source and category (clean, gray, or black water)",
        "Map moisture intrusion using thermal imaging cameras",
        "Document damage with photos for insurance claims",
        "Develop a detailed restoration plan and timeline"
      ],
      equipment: "FLIR thermal cameras, Protimeter moisture meters",
      duration: "1-2 hours",
      icon: 'assessment'
    },
    {
      number: 2,
      title: "Water Extraction",
      description: "Industrial-grade submersible pumps and truck-mounted extractors remove thousands of gallons of standing water per hour to minimize structural damage.",
      details: [
        "Deploy submersible pumps for deep water removal",
        "Use truck-mounted extraction units for high-volume removal",
        "Extract water from carpets, padding, and subfloors",
        "Remove water-damaged contents for cleaning or disposal"
      ],
      equipment: "Truck-mounted extractors, submersible pumps, weighted extraction tools",
      duration: "2-4 hours",
      icon: 'extraction'
    },
    {
      number: 3,
      title: "Structural Drying",
      description: "Commercial-grade dehumidifiers and high-velocity air movers create optimal drying conditions, monitored daily with psychrometric readings to ensure complete moisture removal.",
      details: [
        "Position air movers for maximum airflow efficiency",
        "Deploy LGR dehumidifiers to control humidity levels",
        "Monitor drying progress with daily moisture readings",
        "Adjust equipment placement based on psychrometric data"
      ],
      equipment: "LGR dehumidifiers, axial air movers, desiccant dehumidifiers",
      duration: "3-5 days",
      icon: 'drying'
    },
    {
      number: 4,
      title: "Complete Restoration",
      description: "Our licensed contractors rebuild damaged structures, replace flooring and drywall, and restore your property to pre-loss condition with a final walk-through inspection.",
      details: [
        "Replace damaged drywall, insulation, and framing",
        "Install new flooring, carpet, or hardwood",
        "Paint and finish to match existing decor",
        "Final inspection and moisture verification"
      ],
      equipment: "Licensed general contractors, certified painters, flooring specialists",
      duration: "1-2 weeks",
      icon: 'restoration'
    }
  ];

  // Use extended steps but extract basic fields for legacy component compatibility
  const steps: ProcessStep[] = stepsExtended.map(s => ({
    number: s.number,
    title: s.title,
    description: s.description,
    duration: s.duration,
    icon: s.icon
  }));

  const getIcon = (icon: ProcessStep['icon']) => {
    switch (icon) {
      case 'assessment':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
      case 'extraction':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path d="M12 2v6m0 0l3-3m-3 3l-3-3M6 12h12M6 12a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2M6 12V8a2 2 0 012-2h8a2 2 0 012 2v4" />
          </svg>
        );
      case 'drying':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
          </svg>
        );
      case 'restoration':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
    }
  };

  if (variant === 'vertical') {
    return (
      <div className={`relative ${className}`}>
        {/* Connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800" />

        <div className="space-y-8">
          {stepsExtended.map((step, index) => (
            <div
              key={step.number}
              className="relative flex items-start gap-6 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {getIcon(step.icon)}
                </div>
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-30 group-hover:animate-ping" />
              </div>

              {/* Content - Enhanced with details and equipment */}
              <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-slate-100 group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step {step.number}</span>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{step.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.description}</p>

                {/* Details list */}
                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Equipment badge */}
                <div className="flex items-center text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Equipment:</span>
                  <span className="ml-1">{step.equipment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Detailed variant - Maximum SEO content for service pages
  if (variant === 'detailed') {
    const locationText = cityName ? ` in ${cityName}` : '';
    return (
      <div className={`space-y-12 ${className}`}>
        {stepsExtended.map((step, index) => (
          <article
            key={step.number}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  {getIcon(step.icon)}
                </div>
                <div className="flex-1">
                  <span className="text-blue-200 text-sm font-medium">Step {step.number} of 4</span>
                  <h3 className="text-2xl font-bold">{step.title}{locationText}</h3>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">
                  {step.duration}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* What We Do */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    What We Do
                  </h4>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional Equipment */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-slate-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Professional Equipment
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Our IICRC-certified technicians use industry-leading equipment:
                  </p>
                  <div className="bg-white rounded-lg px-4 py-3 border border-slate-200">
                    <span className="text-sm font-medium text-slate-800">{step.equipment}</span>
                  </div>

                  {/* Additional context based on step */}
                  <div className="mt-4 text-sm text-slate-500">
                    {step.number === 1 && (
                      <p>✓ Free damage assessment and insurance documentation</p>
                    )}
                    {step.number === 2 && (
                      <p>✓ Extraction can remove up to 10,000 gallons per hour</p>
                    )}
                    {step.number === 3 && (
                      <p>✓ Daily monitoring ensures 100% moisture elimination</p>
                    )}
                    {step.number === 4 && (
                      <p>✓ Licensed contractors with workmanship warranty</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  // Horizontal variant
  return (
    <div className={`relative ${className}`}>
      {/* Connecting line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mx-8" />

      <div className="grid grid-cols-4 gap-4 relative z-10">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center group"
          >
            {/* Step circle */}
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {getIcon(step.icon)}
              </div>
              {/* Number badge */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-blue-600 shadow-md border-2 border-blue-100">
                {step.number}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300 w-full">
              <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full mb-2">{step.duration}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
