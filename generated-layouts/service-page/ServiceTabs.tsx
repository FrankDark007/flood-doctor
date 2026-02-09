import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Cpu, FileText, Users, Shield, CheckCircle2 } from 'lucide-react';
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
  const startRef = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const elapsedOnPause = useRef(0);

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

  useEffect(() => {
    if (paused) {
      elapsedOnPause.current = Date.now() - startRef.current;
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
  }, [paused, activeIdx, advance]);

  return (
    <section className="py-20 bg-slate-50">
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

          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 no-scrollbar">
            {tabs.map((tab, idx) => {
              const Icon = iconMap[tab.icon] || Shield;
              const isActive = activeIdx === idx;

              return (
                <button
                  key={tab.id}
                  onClick={() => selectTab(idx)}
                  className={`relative flex items-center gap-4 p-4 rounded-xl text-left min-w-[240px] lg:min-w-0 transition-[background-color,box-shadow] duration-300 ${
                    isActive
                      ? 'bg-white shadow-lg shadow-blue-900/5'
                      : 'hover:bg-white/50 text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {/* SVG border — always rendered to avoid mount/unmount flicker */}
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

          {/* Tab Content — all panels layered, crossfade via opacity (no remount) */}
          <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative">
            {tabs.map((tab, idx) => {
              const TabIcon = iconMap[tab.icon] || Shield;
              const isVisible = activeIdx === idx;
              return (
                <div
                  key={tab.id}
                  className={`p-8 md:p-10 transition-opacity duration-500 ease-in-out ${
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

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {tab.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
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

        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
