import React, { useEffect, useState, useRef } from 'react';
import { TRUST_DATA, PRIMARY_COLOR } from '../constants';
import { LucideIcon } from 'lucide-react';

// Helper for number animation
const useCounter = (end: string, duration: number = 2000) => {
  const [count, setCount] = useState('0');
  const numberPart = parseInt(end.replace(/[^0-9]/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '');
  const prefix = end.match(/^[^0-9]*/) ? end.match(/^[^0-9]*/)![0] : '';
  
  // Ref to checking if visible
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const restartAnimation = () => {
    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentVal = Math.floor(progress * numberPart);
      // Reconstruct string
      let displayVal = currentVal.toString();
      // Add commas for thousands
      if (numberPart > 1000) {
        displayVal = currentVal.toLocaleString();
      }
      
      setCount(`${prefix}${displayVal}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        // Ensure final value matches exactly what was passed if it's not just a number
        // but simple animation usually lands on target. 
        // For mixed strings like "A+" or "24/7" we might want to just show static or special handling.
        // For this demo, we handle numeric dominant strings well.
        if(isNaN(numberPart)) {
            setCount(end); // Fallback for non-numeric like "A+"
        }
      }
    };

    if (!isNaN(numberPart)) {
        animationFrame = requestAnimationFrame(step);
    } else {
        setCount(end);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, numberPart, duration, end, prefix, suffix, trigger]);

  return { count, elementRef, restartAnimation };
};

const StatItem: React.FC<{ item: typeof TRUST_DATA[0] }> = ({ item }) => {
  const { count, elementRef, restartAnimation } = useCounter(item.value);
  const Icon = item.icon;

  return (
    <div 
      ref={elementRef}
      onMouseEnter={restartAnimation}
      className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 cursor-default w-full"
    >
      <div 
        className="mb-4 p-3 rounded-full bg-blue-50"
        style={{ color: PRIMARY_COLOR }}
      >
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-1 text-center break-words w-full">
        {count}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 text-center w-full break-words">
        {item.label}
      </div>
      {item.subtext && (
        <div className="text-xs text-slate-400 text-center w-full break-words">
          {item.subtext}
        </div>
      )}
    </div>
  );
};

const StatsGrid: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'success' | 'warning' | 'neutral'>('all');

  const filteredStats = TRUST_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.variant === filter;
  });

  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(['all', 'success', 'warning', 'neutral'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                filter === f 
                  ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-300 ring-offset-2' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 border border-slate-200'
              }`}
            >
              {f === 'all' ? 'View All' : f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredStats.map((stat) => (
            <StatItem key={stat.id} item={stat} />
          ))}
        </div>

        {filteredStats.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">No stats found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsGrid;