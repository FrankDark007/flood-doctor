
import React, { useState, useEffect } from 'react';
import { ServiceFeatureTab } from './types';

interface ServiceFeaturesProps {
  tabs: ServiceFeatureTab[];
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);

      if (elapsed >= duration) {
        elapsed = 0;
        setActiveTab((prev) => (prev + 1) % tabs.length);
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeTab, tabs.length]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">

        {/* MOBILE: Accordion Layout */}
        <div className="lg:hidden">
          {tabs.map((tab, i) => (
            <div key={tab.id} className="border-b border-[#dadce0]">
              {/* Accordion Header */}
              <button
                onClick={() => handleTabClick(i)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className={`text-[16px] font-medium ${
                  activeTab === i ? 'text-[#202124]' : 'text-[#5f6368]'
                }`}>
                  {tab.title}
                </span>
                <svg
                  className={`w-6 h-6 text-[#5f6368] transition-transform ${
                    activeTab === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Progress bar underline for active tab */}
              {activeTab === i && (
                <div className="h-[3px] bg-[#dadce0] -mt-[1px]">
                  <div
                    className="h-full bg-[#1a73e8] transition-none"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/* Accordion Content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                activeTab === i ? 'max-h-[800px] pb-8' : 'max-h-0'
              }`}>
                <div className="pt-6">
                  {/* Content */}
                  <h3 className="text-[24px] font-medium text-[#202124] mb-3">
                    {tab.headline}
                  </h3>
                  <p className="text-[16px] text-[#5f6368] leading-[1.6] mb-8">
                    {tab.description}
                  </p>

                  {/* Isometric image */}
                  <div className="w-[320px] h-[320px] mx-auto">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: Horizontal Tabs Layout */}
        <div className="hidden lg:block">
          {/* Tab Navigation */}
          <div className="border-b border-[#dadce0] mb-12">
            <div className="flex">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(i)}
                  className={`relative px-8 lg:px-12 py-4 text-[15px] font-medium transition-all duration-300 ${
                    activeTab === i
                      ? 'text-[#202124]'
                      : 'text-[#5f6368] hover:text-[#202124]'
                  }`}
                >
                  {tab.title}
                  {activeTab === i && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#dadce0]">
                      <div
                        className="h-full bg-[#1a73e8] transition-none"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Isometric image - LEFT side */}
            <div className="order-2 lg:order-1 relative w-[480px] h-[480px]">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeTab === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Text Content - RIGHT side */}
            <div className="text-center lg:text-left order-1 lg:order-2 relative min-h-[200px]">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-500 ${
                    activeTab === i ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <h3 className="text-[28px] lg:text-[36px] font-medium text-[#202124] mb-4">
                    {tab.headline}
                  </h3>
                  <p className="text-[16px] lg:text-[18px] text-[#5f6368] leading-[1.6]">
                    {tab.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
