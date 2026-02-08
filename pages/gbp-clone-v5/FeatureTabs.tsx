
import React, { useState, useEffect } from 'react';
import { ProcessTab } from './types';

// Icon components for tab visuals
const TabIcon: React.FC<{ icon: ProcessTab['icon']; className?: string }> = ({ icon, className = 'w-8 h-8' }) => {
  switch (icon) {
    case 'search':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      );
    case 'droplet':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 21v-1.5M6.75 6.75L5.636 5.636M18.364 18.364l-1.114-1.114M3 12h1.5M21 12h-1.5M6.75 17.25l-1.114 1.114M18.364 5.636l-1.114 1.114M12 9a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      );
    case 'wind':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'check':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      );
    case 'tool':
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      );
  }
};

// Chevron icon for accordion
const ChevronIcon: React.FC<{ isExpanded: boolean; className?: string }> = ({ isExpanded, className = 'w-6 h-6' }) => (
  <svg
    className={`${className} transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

// Visual cards for each step - service restoration themed
const TabVisual: React.FC<{ index: number; tab: ProcessTab }> = ({ index, tab }) => {
  const highlights = tab.highlights || [];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#1a73e8] flex items-center justify-center">
          <TabIcon icon={tab.icon} className="w-5 h-5 text-white" />
        </div>
        <div className="text-[#1a73e8] font-medium text-[16px]">{tab.title}</div>
      </div>

      {highlights.length > 0 ? (
        <div className="space-y-3">
          {highlights.map((highlight, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-[#f8f9fa] rounded-lg">
              <span className="text-[14px] text-[#5f6368]">{highlight.label}</span>
              <span className="font-medium text-[#202124]">{highlight.value}</span>
            </div>
          ))}
        </div>
      ) : (
        // Default visual based on step type
        <div className="space-y-3">
          {index === 0 && (
            <>
              <div className="flex justify-between items-center p-3 bg-[#f8f9fa] rounded-lg">
                <span className="text-[14px] text-[#5f6368]">Response Time</span>
                <span className="font-medium text-[#1a73e8]">60 min</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#f8f9fa] rounded-lg">
                <span className="text-[14px] text-[#5f6368]">Assessment</span>
                <span className="font-medium text-[#202124]">Free</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#e8f0fe] rounded-lg border-2 border-[#1a73e8]">
                <span className="text-[14px]">Certified Techs</span>
                <span className="font-medium text-[#1a73e8]">IICRC</span>
              </div>
            </>
          )}
          {index === 1 && (
            <>
              <div className="text-[13px] text-[#5f6368] mb-2">Equipment deployed</div>
              <div className="h-32 flex items-end gap-1">
                {[40, 55, 70, 85, 95, 100, 95, 85, 70, 55, 40, 30].map((h, j) => (
                  <div key={j} className="flex-1 bg-[#1a73e8] rounded-t transition-all duration-300" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="flex justify-between text-[11px] text-[#5f6368]">
                <span>Start</span>
                <span>Complete</span>
              </div>
            </>
          )}
          {index === 2 && (
            <>
              <div className="flex justify-between items-center p-3 bg-[#f8f9fa] rounded-lg">
                <span className="text-[14px]">Air Movers</span>
                <span className="font-medium text-[#202124]">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#e8f0fe] rounded-lg border-2 border-[#1a73e8]">
                <span className="text-[14px]">Dehumidifiers</span>
                <span className="font-medium text-[#1a73e8]">Running</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#f8f9fa] rounded-lg">
                <span className="text-[14px]">Moisture Level</span>
                <span className="font-medium text-[#202124]">Decreasing</span>
              </div>
            </>
          )}
          {index === 3 && (
            <>
              <div className="text-[13px] text-[#5f6368] mb-2">Restoration checklist</div>
              <div className="space-y-2">
                {['Moisture verification', 'Documentation complete', 'Final walk-through'].map((item, j) => (
                  <div key={j} className="flex items-center gap-3 p-3 bg-[#f8f9fa] rounded-lg">
                    <div className="w-5 h-5 bg-[#34a853] rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[14px] text-[#202124]">{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-[#1a73e8] text-white rounded-lg font-medium text-[14px] mt-2">
                View Report
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export interface FeatureTabsProps {
  tabs: ProcessTab[];
  /** Auto-play interval in milliseconds (default: 6000) */
  autoPlayInterval?: number;
  /** Section title override */
  sectionTitle?: string;
}

export const FeatureTabs: React.FC<FeatureTabsProps> = ({
  tabs,
  autoPlayInterval = 6000,
  sectionTitle,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / autoPlayInterval) * 100);

      if (elapsed >= autoPlayInterval) {
        elapsed = 0;
        setActiveTab((prev) => (prev + 1) % tabs.length);
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeTab, autoPlayInterval, tabs.length]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section
      className="
        bg-white overflow-hidden relative
        pt-[98px] pb-[98px]
        min-[1024px]:pt-[110px] min-[1024px]:pb-[110px]
      "
    >
      {/* Optional Section Title - with standard margins */}
      {sectionTitle && (
        <div
          className="
            mx-[28px]
            min-[600px]:mx-[40px]
            min-[1024px]:mx-[72px]
            min-[1600px]:mx-auto min-[1600px]:max-w-[1456px]
            text-center mb-[32px]
          "
        >
          <h2
            className="
              font-display text-[#5f6368] font-medium
              text-[28px] leading-[1.25]
              min-[600px]:text-[32px]
              min-[1024px]:text-[36px]
              m-0 p-0
            "
          >
            {sectionTitle}
          </h2>
        </div>
      )}

      {/* ========== MOBILE ACCORDION (<600px) ========== */}
      <div className="min-[600px]:hidden">
        <div
          className="
            mx-[28px]
          "
        >
          {tabs.map((tab, i) => {
            const isExpanded = activeTab === i;
            return (
              <div key={tab.id}>
                {/* Accordion Header */}
                <button
                  onClick={() => handleTabClick(i)}
                  className={`
                    w-full flex items-center justify-between
                    py-[20px] px-0
                    bg-transparent border-0 cursor-pointer
                    text-left
                  `}
                >
                  <span
                    className={`
                      font-sans text-[16px] font-medium leading-[1.5]
                      ${isExpanded ? 'text-[#202124]' : 'text-[#5f6368]'}
                    `}
                  >
                    {tab.title}
                  </span>
                  <ChevronIcon isExpanded={isExpanded} className="w-5 h-5 text-[#5f6368]" />
                </button>

                {/* Blue underline for expanded item */}
                <div
                  className={`
                    h-[4px] w-full mb-[8px]
                    ${isExpanded ? 'bg-[#1a73e8]' : 'bg-[#dadce0]'}
                  `}
                />

                {/* Accordion Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="pt-[32px] pb-[40px]">
                    {/* Title - Google headline-3 mobile: 24px */}
                    <h2
                      className="
                        font-display text-[#202124] font-medium
                        text-[24px] leading-[1.33333] tracking-normal
                        m-0 p-0 mb-[16px]
                      "
                    >
                      {tab.headline}
                    </h2>

                    {/* Description */}
                    <p
                      className="
                        font-sans text-[#202124]
                        text-[16px] leading-[1.5] font-normal tracking-[0.1px]
                        m-0 p-0 mb-[32px]
                      "
                    >
                      {tab.description}
                    </p>

                    {/* Visual Card - centered */}
                    <div className="flex justify-center">
                      <div
                        className="
                          bg-white rounded-[24px]
                          shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]
                          p-[24px]
                          w-full max-w-[320px]
                        "
                      >
                        <TabVisual index={i} tab={tab} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========== TABLET & DESKTOP HORIZONTAL TABS (≥600px) ========== */}
      <div className="hidden min-[600px]:block">
        {/* Tab Navigation - same width as content (Google style) */}
        <div
          className="
            mx-[40px]
            min-[1024px]:mx-[72px]
            min-[1600px]:mx-auto min-[1600px]:max-w-[1456px]
            border-b-[4px] border-[#f1f3f4]
          "
        >
          {/* Tabs wrapper - centered, doesn't span full width */}
          <div className="flex max-w-[800px] mx-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(i)}
                className={`
                  flex-[1_1_0] relative
                  font-sans text-[16px] font-medium leading-[1.5] tracking-[0]
                  py-[28px] px-0
                  m-0 mb-[-4px]
                  border-0
                  cursor-pointer
                  bg-transparent
                  text-center
                  [-webkit-font-smoothing:antialiased] [text-rendering:optimizelegibility]
                  transition-[background-color,color] duration-200
                  focus:outline-[2px_solid_transparent] focus:bg-[#f1f3f4]
                  active:outline-none
                  ${
                    activeTab === i
                      ? 'text-[#202124]'
                      : 'text-[#5f6368] hover:text-[#202124]'
                  }
                `}
              >
                <span className="px-[5px]">{tab.title}</span>
                {/* Progress bar underline */}
                <span
                  className="absolute bottom-0 left-0 w-full h-[4px] bg-transparent"
                >
                  <span
                    className="absolute bottom-0 left-0 h-full bg-[#1a73e8] transition-none"
                    style={{
                      width: activeTab === i ? `${progress}%` : '0%',
                    }}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - narrower container (matching Hero margins) */}
        <div
          className="
            mx-[40px]
            min-[1024px]:mx-[72px]
            min-[1600px]:mx-auto min-[1600px]:max-w-[1456px]
            mt-[48px]
          "
        >
          {/* CSS Grid layout (Google style) */}
          <div
            className="
              grid bg-white m-0 p-0
              grid-cols-[repeat(10,minmax(5px,1fr))] gap-x-[40px]
              min-[1024px]:gap-x-[48px]
              min-[1440px]:gap-x-[64px]
            "
          >
            {/* Text Content */}
            <div
              className="
                col-span-5 self-center m-0 p-0
                order-2
                min-[1024px]:order-5
              "
            >
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className={`
                    transition-opacity duration-300
                    ${activeTab === i ? 'opacity-100 relative' : 'opacity-0 absolute pointer-events-none'}
                  `}
                >
                  <h2
                    className="
                      font-display text-[#202124] font-normal
                      flex flex-row items-start justify-start
                      text-[24px] leading-[1.33333] tracking-normal
                      min-[600px]:text-[32px] min-[600px]:leading-[1.25] min-[600px]:tracking-[-0.25px]
                      min-[1024px]:text-[36px] min-[1024px]:leading-[1.22222] min-[1024px]:tracking-[-0.25px]
                      m-0 p-0
                      [-webkit-font-smoothing:antialiased] [text-rendering:optimizelegibility]
                      [overflow-wrap:normal]
                    "
                  >
                    <span className="font-medium text-[#202124] w-full">
                      {tab.headline}
                    </span>
                  </h2>
                  <div
                    className="
                      font-sans text-[#202124]
                      text-[16px] leading-[1.5] font-normal tracking-[0.1px]
                      mt-[16px] p-0
                    "
                  >
                    <span>{tab.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Image/Card Container */}
            <div
              className="
                col-span-5 self-center text-center rounded-[24px] m-0 p-0
                order-5 mt-[48px]
                min-[1024px]:order-2 min-[1024px]:mt-0
              "
            >
              <div
                className="
                  overflow-hidden inline-block pointer-events-none relative w-fit
                  m-0 p-0
                "
              >
                {tabs.map((tab, i) => (
                  <div
                    key={tab.id}
                    className={`
                      transition-opacity duration-300
                      ${activeTab === i ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}
                    `}
                  >
                    <div className="relative">
                      <div
                        className="
                          bg-white rounded-[24px]
                          shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]
                          p-[32px]
                        "
                      >
                        <TabVisual index={i} tab={tab} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
