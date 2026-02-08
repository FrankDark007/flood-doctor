
import React from 'react';
import { ProcessStep } from './types';

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ title, steps }) => {
  return (
    <section className="bg-[#f8f9fa]">
      {/* Header Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[32px] lg:text-[40px] font-medium text-[#5f6368] leading-[1.2]">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                {/* Floating Isometric Tile */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full max-w-[240px] h-auto mx-auto mb-6 drop-shadow-lg"
                  loading="lazy"
                />
                <h3 className="text-[20px] font-normal text-[#202124] mb-3">{step.title}</h3>
                <ul className="space-y-2 text-left max-w-[200px] mx-auto">
                  {step.tasks.map((task, k) => (
                    <li key={k} className="flex items-start gap-3 text-[14px] text-[#5f6368] leading-snug">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                        i === steps.length - 1 ? 'bg-[#188038]' : 'bg-[#1a73e8]'
                      }`}></div>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
