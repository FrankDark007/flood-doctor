import React, { useRef, useEffect, useState } from 'react';
import { Phone, Wrench, Home } from 'lucide-react';

const StepsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [hasTriggered, setHasTriggered] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Call us 24/7",
      description: "Call our emergency hotline. We dispatch a certified team immediately to assess the damage and stop the source.",
      icon: Phone,
      color: '#1a73e8',
      bgColor: '#e8f0fe',
    },
    {
      number: 2,
      title: "We restore",
      description: "Industrial-grade equipment removes moisture, sanitizes affected areas, and restores structural integrity.",
      icon: Wrench,
      color: '#34a853',
      bgColor: '#e6f4ea',
    },
    {
      number: 3,
      title: "You recover",
      description: "We handle insurance documentation and reconstruction, getting your property back to normal faster.",
      icon: Home,
      color: '#f29900',
      bgColor: '#fef7e0',
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => new Set(prev).add(index));
            }, index * 200);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <div ref={containerRef} className="relative">
      {/* Connecting line - desktop only */}
      <div className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-[#e8f0fe] via-[#e6f4ea] to-[#fef7e0]" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => {
          const isVisible = visibleSteps.has(index);
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="flex flex-col items-center text-center relative z-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: `opacity 0.7s cubic-bezier(0.05, 0.7, 0.1, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)`,
              }}
            >
              {/* Icon container with animation */}
              <div
                className="relative w-24 h-24 flex items-center justify-center rounded-3xl mb-6 transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: step.bgColor }}
              >
                {/* Step number badge */}
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <Icon size={36} style={{ color: step.color }} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-medium text-[#202124] mb-3 leading-7 heading-card">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#5f6368] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepsSection;