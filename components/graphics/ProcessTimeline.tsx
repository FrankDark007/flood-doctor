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
  variant?: 'horizontal' | 'vertical';
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  className = '',
  variant = 'horizontal'
}) => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "Assessment",
      description: "60-min response, full damage evaluation",
      duration: "1-2 hours",
      icon: 'assessment'
    },
    {
      number: 2,
      title: "Extraction",
      description: "Remove standing water with industrial equipment",
      duration: "2-4 hours",
      icon: 'extraction'
    },
    {
      number: 3,
      title: "Drying",
      description: "Commercial dehumidifiers & air movers",
      duration: "3-5 days",
      icon: 'drying'
    },
    {
      number: 4,
      title: "Restoration",
      description: "Repairs, rebuild & final inspection",
      duration: "1-2 weeks",
      icon: 'restoration'
    }
  ];

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
          {steps.map((step, index) => (
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

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-slate-100 group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step {step.number}</span>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{step.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
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
