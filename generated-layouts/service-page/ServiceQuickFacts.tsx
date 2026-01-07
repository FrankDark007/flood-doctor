import React from 'react';
import { Timer, MapPin, ThumbsUp, CalendarClock } from 'lucide-react';
import { QuickFact } from './types';

interface ServiceQuickFactsProps {
  facts: QuickFact[];
}

const iconMap: Record<string, React.FC<any>> = {
  Timer,
  MapPin,
  ThumbsUp,
  CalendarClock
};

const ServiceQuickFacts: React.FC<ServiceQuickFactsProps> = ({ facts }) => {
  return (
    <section className="border-b border-slate-200 bg-surface">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-4 divide-x divide-slate-200 py-6 md:py-8">
          {facts.map((fact, index) => {
            const Icon = iconMap[fact.icon] || ThumbsUp;
            return (
              <div 
                key={index} 
                className="snap-center shrink-0 w-64 md:w-auto flex flex-col items-center justify-center text-center px-6 first:pl-4 last:pr-4"
              >
                <div className="mb-2 p-2 bg-primary-light rounded-full text-primary">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className="text-2xl font-bold text-slate-900 leading-none mb-1">
                  {fact.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {fact.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceQuickFacts;