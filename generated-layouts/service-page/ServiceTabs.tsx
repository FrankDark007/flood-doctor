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

  const activeContent = tabs[activeIdx] || tabs[0];
  const ActiveIcon = iconMap[activeContent.icon] || Shield;

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
                  className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[240px] lg:min-w-0 ${
                    isActive
                      ? 'bg-white shadow-lg shadow-blue-900/5'
                      : 'border border-transparent hover:bg-white/50 text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {/* SVG border progress — traces full perimeter */}
                  {isActive && (
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1" y="1"
                        width="calc(100% - 2px)" height="calc(100% - 2px)"
                        rx="12" ry="12"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                        pathLength="1"
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
                        strokeDashoffset={1 - progress}
                        strokeLinecap="round"
                        style={{ transition: 'none' }}
                      />
                    </svg>
                  )}
                  <div className={`relative z-10 p-2.5 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="relative z-10">
                    <div className={`font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {tab.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
            <div key={activeContent.id} className="animate-fade-in">
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
      </div>
    </section>
  );
};

export default ServiceTabs;
