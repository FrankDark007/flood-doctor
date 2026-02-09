import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Cpu, FileText, Users, Shield, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { TabItem } from './types';

interface ServiceTabsProps {
  tabs: TabItem[];
}

const iconMap: Record<string, React.FC<any>> = {
  Cpu,
  FileText,
  Users,
  Shield
};

const CYCLE_MS = 6000;

const ServiceTabs: React.FC<ServiceTabsProps> = ({ tabs }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const startRef = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const elapsedOnPause = useRef(0);

  // Detect desktop (lg breakpoint = 1024px)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const advance = useCallback(() => {
    setActiveIdx(prev => (prev + 1) % tabs.length);
    setProgress(0);
    startRef.current = Date.now();
  }, [tabs.length]);

  const selectTab = useCallback((idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
    startRef.current = Date.now();
    elapsedOnPause.current = 0;
  }, []);

  const goPrev = useCallback(() => {
    setActiveIdx(prev => (prev - 1 + tabs.length) % tabs.length);
  }, [tabs.length]);

  const goNext = useCallback(() => {
    setActiveIdx(prev => (prev + 1) % tabs.length);
  }, [tabs.length]);

  // Auto-scroll only on desktop
  useEffect(() => {
    if (!isDesktop || paused) {
      if (paused) elapsedOnPause.current = Date.now() - startRef.current;
      cancelAnimationFrame(rafRef.current);
      return;
    }

    startRef.current = Date.now() - elapsedOnPause.current;

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / CYCLE_MS, 1);
      setProgress(pct);

      if (pct >= 1) {
        advance();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, activeIdx, advance, isDesktop]);

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Flood Doctor?</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">We combine advanced technology with certified expertise to restore your home faster.</p>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Desktop: Tabs sidebar with progress animation */}
          <div className="hidden lg:flex lg:w-1/3 lg:flex-col gap-2">
            {tabs.map((tab, idx) => {
              const Icon = iconMap[tab.icon] || Shield;
              const isActive = activeIdx === idx;

              return (
                <button
                  key={tab.id}
                  onClick={() => selectTab(idx)}
                  className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-[background-color,box-shadow] duration-300 ${
                    isActive
                      ? 'bg-white shadow-lg shadow-blue-900/5'
                      : 'hover:bg-white/50 text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1" y="1"
                      width="calc(100% - 2px)" height="calc(100% - 2px)"
                      rx="12" ry="12"
                      fill="none"
                      stroke={isActive ? '#e2e8f0' : 'transparent'}
                      strokeWidth="2"
                      pathLength="1"
                      style={{ transition: 'stroke 0.3s' }}
                    />
                    <rect
                      x="1" y="1"
                      width="calc(100% - 2px)" height="calc(100% - 2px)"
                      rx="12" ry="12"
                      fill="none"
                      stroke="#1a73e8"
                      strokeWidth="2.5"
                      pathLength="1"
                      strokeDasharray="1"
                      strokeDashoffset={isActive ? 1 - progress : 1}
                      strokeLinecap="round"
                      opacity={isActive ? 1 : 0}
                      style={{ transition: 'opacity 0.3s' }}
                    />
                  </svg>
                  <div className={`relative z-10 p-2.5 rounded-lg transition-colors duration-300 ${isActive ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="relative z-10">
                    <div className={`font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {tab.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative">
              {tabs.map((tab, idx) => {
                const TabIcon = iconMap[tab.icon] || Shield;
                const isVisible = activeIdx === idx;
                return (
                  <div
                    key={tab.id}
                    className={`p-6 md:p-10 transition-opacity duration-500 ease-in-out ${
                      isVisible
                        ? 'opacity-100 relative'
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                    aria-hidden={!isVisible}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{tab.title}</h3>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                      </div>
                      <div className="hidden md:block text-slate-100">
                        <TabIcon size={80} strokeWidth={1} />
                      </div>
                    </div>

                    <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
                      {tab.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tab.listItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                          <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile: Google-style pagination nav */}
            <div className="flex lg:hidden items-center justify-center gap-8 mt-8">
              <button
                onClick={goPrev}
                className="w-11 h-11 flex items-center justify-center text-[#5f6368]"
                aria-label="Previous"
              >
                <ChevronLeft size={28} strokeWidth={2} />
              </button>

              <div className="bg-[#f1f3f4] rounded-full px-6 py-2.5 text-sm font-medium text-[#5f6368] tabular-nums">
                {activeIdx + 1} / {tabs.length}
              </div>

              <button
                onClick={goNext}
                className="w-11 h-11 rounded-full border-2 border-[#1a73e8] flex items-center justify-center text-[#202124]"
                aria-label="Next"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
