
import React from 'react';
import Button from '../ui/Button';

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
    <div className="py-24 lg:py-32 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] md:text-5xl font-medium text-gray-900 mb-6 tracking-tight">
            Restore your peace of mind
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-16">
            Recovering from water damage in three simple steps with our comprehensive restoration process.
        </p>
        
        <div className="hidden md:flex justify-center mb-20">
             <Button to="/request/" variant="primary" className="px-8 h-12 text-[15px]">
                Start restoration
             </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                    <div className="text-primary text-7xl md:text-8xl font-normal leading-none mb-8 font-sans">
                        {step.number}
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                        {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
