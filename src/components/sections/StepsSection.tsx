import React from 'react';

const StepsSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Assess",
      description: "Call our 24/7 hotline. We dispatch a certified team immediately to assess the damage and stop the leak."
    },
    {
      number: 2,
      title: "Restore",
      description: "We use industrial drying tech to remove moisture, sanitize the area, and repair structural damage."
    },
    {
      number: 3,
      title: "Recover",
      description: "We handle the insurance paperwork and reconstruction, helping you get back to normal life faster."
    }
  ];

  return (
    <div className="text-center">
      {/* Grid with 64px gap on desktop, 24px on mobile - Google values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            {/* Step number - 96px icon size per Google spec */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#e8f0fe] mb-6">
              <span className="text-[#1a73e8] text-[36px] font-normal">
                {step.number}
              </span>
            </div>
            {/* H4 - Google: 20px/28px */}
            <h3 className="text-[20px] font-medium text-[#202124] mb-2 leading-7">
              {step.title}
            </h3>
            {/* Body text - Google: 16px/24px */}
            <p className="text-base text-[#3c4043] leading-6 max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;