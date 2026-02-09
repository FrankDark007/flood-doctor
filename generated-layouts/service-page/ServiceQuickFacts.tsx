import React from 'react';
import { Timer, MapPin, ThumbsUp, CalendarClock, Clock, Shield, FileCheck } from 'lucide-react';
import { QuickFact } from './types';

interface ServiceQuickFactsProps {
  facts: QuickFact[];
}

const iconMap: Record<string, React.FC<any>> = {
  Timer,
  MapPin,
  ThumbsUp,
  CalendarClock,
  Clock,
  Shield,
  FileCheck
};

/**
 * ServiceQuickFacts — styled to match homepage ValueProps
 * Large circle icons, centered text, clean white background
 */
const ServiceQuickFacts: React.FC<ServiceQuickFactsProps> = ({ facts }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className={`grid grid-cols-1 gap-8 text-center ${facts.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
          {facts.map((fact, index) => {
            const Icon = iconMap[fact.icon] || ThumbsUp;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[84px] h-[84px] bg-[#e8f0fe] rounded-2xl flex items-center justify-center text-[#1a73e8] mb-5">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-normal text-[#202124] mb-3">
                  {fact.value}
                </h3>
                <p className="text-sm text-[#5f6368] leading-relaxed max-w-xs">
                  {fact.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceQuickFacts;
