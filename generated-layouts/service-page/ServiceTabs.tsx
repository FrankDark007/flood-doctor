import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Cpu, FileText, Users, Shield, CheckCircle2 } from 'lucide-react';
import { TabItem } from './types';

interface ServiceTabsProps {
  tabs: TabItem[];
  /** Duration for each tab in milliseconds (default: 5000) */
  autoPlayInterval?: number;
  /** Enable/disable auto-play (default: true) */
  autoPlay?: boolean;
}

const iconMap: Record<string, React.FC<any>> = {
  Cpu,
  FileText,
  Users,
  Shield
};

const ServiceTabs: React.FC<ServiceTabsProps> = ({
  tabs,
  autoPlayInterval = 5000,
  autoPlay = true
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeContent = tabs[activeTabIndex] || tabs[0];
  const ActiveIcon = iconMap[activeContent.icon] || Shield;

  // Progress bar update interval (60fps for smooth animation)
  const PROGRESS_UPDATE_INTERVAL = 16;
  const progressIncrement = (PROGRESS_UPDATE_INTERVAL / autoPlayInterval) * 100;

  const advanceTab = useCallback(() => {
    setActiveTabIndex((prev) => (prev + 1) % tabs.length);
    setProgress(0);
  }, [tabs.length]);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    setProgress(0);
  };

  // Auto-play logic with progress tracking
  useEffect(() => {
    if (!autoPlay || isPaused) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
      return;
    }

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressIncrement;
        if (next >= 100) {
          advanceTab();
          return 0;
        }
        return next;
      });
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [autoPlay, isPaused, progressIncrement, advanceTab]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Flood Doctor?</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">We combine advanced technology with certified expertise to restore your home faster.</p>
        </div>

        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 no-scrollbar">
            {tabs.map((tab, index) => {
              const Icon = iconMap[tab.icon] || Shield;
              const isActive = activeTabIndex === index;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`group relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[240px] lg:min-w-0 ${
                    isActive
                      ? 'bg-white shadow-lg shadow-blue-900/10'
                      : 'bg-transparent hover:bg-white/50 text-slate-500 hover:text-slate-700 border-2 border-transparent'
                  }`}
                >
                  {/* Progress border container for active tab */}
                  {isActive && (
                    <>
                      {/* Background border (gray track) */}
                      <div className="absolute inset-0 rounded-xl border-2 border-slate-200 pointer-events-none" />

                      {/* Animated progress border */}
                      <div
                        className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
                        style={{
                          background: `conic-gradient(from 0deg, #1a73e8 ${progress}%, transparent ${progress}%)`,
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          padding: '2px',
                        }}
                      />

                      {/* Top progress bar (simpler, more visible) */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl overflow-hidden pointer-events-none">
                        <div
                          className="h-full bg-primary transition-none"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </>
                  )}

                  <div className={`relative z-10 p-2.5 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className={`font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {tab.label}
                    </div>
                    {/* Progress indicator text on mobile */}
                    {isActive && autoPlay && (
                      <div className="text-xs text-slate-400 mt-0.5 lg:hidden">
                        {Math.round(progress)}%
                      </div>
                    )}
                  </div>
                </button>
              );
            })}

            {/* Auto-play indicator */}
            {autoPlay && (
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs text-slate-400">
                <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-green-400 animate-pulse'}`} />
                {isPaused ? 'Paused' : 'Auto-playing'}
              </div>
            )}
          </div>

          {/* Tab Content Panel */}
          <div
            key={activeTabIndex}
            className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 animate-fade-in"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeContent.title}</h3>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
              <div className="hidden md:block text-slate-100">
                <ActiveIcon size={80} strokeWidth={1} />
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {activeContent.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {activeContent.listItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                  <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
