import React from 'react';
import { serviceLocations, getProximityColor } from '../constants';
import { Timer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Proximity } from '../types';

export const ServiceAreaTimeline: React.FC = () => {
  const timeGroups: { label: string; proximity: Proximity; time: string }[] = [
    { label: 'Rapid Response Zone', proximity: 'Closest', time: '< 60 Minutes' },
    { label: 'Standard Coverage', proximity: 'Near', time: '< 70 Minutes' },
    { label: 'Extended Metro Area', proximity: 'Mid', time: '< 75 Minutes' },
    { label: 'Outer Service Ring', proximity: 'Farthest', time: '< 80 Minutes' },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Estimated Arrival Times</h2>
          <p className="mt-2 text-slate-600">Our fleet is strategically positioned to minimize wait times.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {timeGroups.map((group, index) => {
              const cities = serviceLocations.filter(c => c.proximity === group.proximity);
              const colorClass = getProximityColor(group.proximity);
              
              return (
                <div key={group.label} className="relative pl-20">
                  {/* Timeline Node */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full border-4 border-white shadow-md flex flex-col items-center justify-center z-10 ${colorClass.split(' ')[0]}`}>
                    <Timer className={`w-6 h-6 ${colorClass.split(' ')[1]}`} />
                  </div>

                  {/* Content Block */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800">{group.label}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mt-2 sm:mt-0">
                        {group.time}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cities.map(city => (
                        <a 
                          key={city.id}
                          href={`/${city.slug}/`}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center">
                            <CheckCircle2 className={`w-4 h-4 mr-2 ${colorClass.split(' ')[1]}`} />
                            <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{city.name}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* End cap */}
           <div className="absolute left-8 bottom-0 transform -translate-x-1/2 translate-y-full pt-4">
              <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
};