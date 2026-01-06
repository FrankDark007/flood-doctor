import React from 'react';
import { Map, Navigation, Landmark } from 'lucide-react';
import { CityData } from '../types';

interface CityProximityProps {
  city: CityData;
}

const CityProximity: React.FC<CityProximityProps> = ({ city }) => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-[#1a73e8] font-semibold tracking-wide uppercase text-sm">
            <Map className="w-4 h-4" />
            <span>Local Experts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            We Know {city.name}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Unlike national chains, we are deeply rooted in the {city.name} community. 
            Our trucks are stationed just {city.distanceFromCenter}, ensuring we can 
            navigate local traffic patterns to reach you fast when disaster strikes.
          </p>

          <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#1a73e8]" />
              Familiar Landmarks
            </h3>
            <div className="flex flex-wrap gap-2">
              {city.landmarks.map((landmark, index) => (
                <span key={index} className="bg-white px-3 py-1.5 rounded-lg text-sm text-slate-600 shadow-sm border border-slate-100">
                  {landmark}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#1a73e8]" />
            Neighborhoods Served
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {city.neighborhoods.map((hood, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 rounded-full bg-[#1a73e8]" />
                {hood}
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
             <p className="text-slate-500 text-sm">Don't see your neighborhood? Call us, we likely serve it!</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CityProximity;