import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Cpu, FileText, Users, Shield, CheckCircle2, Clock, MapPin, HeartPulse, BarChart3 } from 'lucide-react';
import { TabItem } from './types';

interface ServiceTabsProps {
  tabs: TabItem[];
  autoPlayInterval?: number;
  autoPlay?: boolean;
}

const iconMap: Record<string, React.FC<any>> = {
  Cpu,
  FileText,
  Users,
  Shield,
  Clock,
  MapPin,
  HeartPulse,
  BarChart3
};

/** SVG border that traces the full perimeter of a pill button */
const PillProgress: React.FC<{ progress: number }> = ({ progress }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 280, h: 48 });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) setDims({ w: width, h: height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const sw = 3; // stroke width
  const inset = sw / 2;
  const innerW = dims.w - sw;
  const innerH = dims.h - sw;
  const rx = innerH / 2;
  // Pill perimeter: 2 straight sides + 2 semicircle caps
  const perimeter = 2 * (innerW - innerH) + Math.PI * innerH;
  const offset = perimeter * (1 - progress / 100);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <svg
        width={dims.w}
        height={dims.h}
        className="absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        {/* Light track (full border) */}
        <rect
          x={inset} y={inset}
          width={innerW} height={innerH}
          rx={rx} ry={rx}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={sw}
        />
        {/* Animated progress stroke */}
        <rect
          x={inset} y={inset}
          width={innerW} height={innerH}
          rx={rx} ry={rx}
          fill="none"
          stroke="#94a3b8"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={perimeter}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
};

const ServiceTabs: React.FC<ServiceTabsProps> = ({
  tabs,
  autoPlayInterval = 5000,
  autoPlay = true
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeContent = tabs[activeTabIndex] || tabs[0];
  const ActiveIcon = iconMap[activeContent.icon] || Shield;

  const PROGRESS_UPDATE_INTERVAL = 16;
  const progressIncrement = (PROGRESS_UPDATE_INTERVAL / autoPlayInterval) * 100;

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    setProgress(0);
  };

  // Advance tab when progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      setActiveTabIndex((prev) => (prev + 1) % tabs.length);
      setProgress(0);
    }
  }, [progress, tabs.length]);

  // Progress timer
  useEffect(() => {
    if (!autoPlay || isPaused) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
      return;
    }

    progressInterval.current = setInterval(() => {
      setProgress((prev) => prev + progressIncrement);
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [autoPlay, isPaused, progressIncrement]);

  const nextTabIndex = (activeTabIndex + 1) % tabs.length;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Flood Doctor gives you complete peace of mind
          </h2>
        </div>

        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto items-start"
          onClick={(e) => {
            // Only toggle pause if clicking the container background, not a tab button
            if ((e.target as HTMLElement).closest('button')) return;
            setIsPaused((prev) => !prev);
          }}
        >

          {/* Pill Navigation — vertical stack */}
          <div className="lg:w-[280px] flex flex-col gap-2.5 shrink-0">
            {tabs.map((tab, index) => {
              const Icon = iconMap[tab.icon] || Shield;
              const isActive = activeTabIndex === index;
              const isNext = nextTabIndex === index;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`
                    relative flex items-center gap-3.5 w-full px-5 py-3.5 rounded-full
                    text-left transition-all duration-300
                    ${isActive
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                      : 'bg-white text-slate-600 hover:bg-slate-50'
                    }
                  `}
                  style={!isActive && !isNext ? { border: '2px solid #e2e8f0' } : !isActive ? { border: '2px solid transparent' } : undefined}
                >
                  {/* Full-perimeter progress border on the NEXT tab */}
                  {isNext && autoPlay && <PillProgress progress={progress} />}

                  {/* Static border for non-active, non-next tabs is handled by the style prop above */}

                  <div className={`
                    relative z-10 flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-colors
                    ${isActive ? 'bg-white/20' : 'bg-slate-100'}
                  `}>
                    <Icon size={16} className={isActive ? 'text-white' : 'text-slate-500'} />
                  </div>
                  <span className={`relative z-10 font-semibold text-[15px] ${isActive ? 'text-white' : 'text-slate-700'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div
            key={activeTabIndex}
            className="flex-1 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 animate-fade-in"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeContent.title}</h3>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>
              <div className="hidden md:block text-slate-200">
                <ActiveIcon size={64} strokeWidth={1} />
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {activeContent.description}
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {activeContent.listItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl">
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
