import React from 'react';
import { Droplets, Wind, Zap, Home, ShieldAlert, Waves, CheckCircle2 } from 'lucide-react';
import { CityData, Service } from './types';

interface CityServicesProps {
  city: CityData;
}

const iconMap = {
  'Droplets': Droplets,
  'Wind': Wind,
  'Zap': Zap,
  'Home': Home,
  'ShieldAlert': ShieldAlert,
  'Waves': Waves,
};

const CityServices: React.FC<CityServicesProps> = ({ city }) => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Services Available in {city.name}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          From historic homes to modern apartments, we provide full-service restoration solutions tailored to {city.name}'s specific building codes and climate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {city.services.map((service) => {
          const Icon = iconMap[service.iconName] || Home;
          return (
            <div key={service.id} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-[#1a73e8] transition-colors hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center mb-6 group-hover:bg-[#1a73e8] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded">
                   <CheckCircle2 className="w-3 h-3" />
                   Available in {city.name}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Avg Response: {service.responseTime}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 bg-blue-50 rounded-xl p-4 text-center text-sm text-[#1a73e8] font-medium border border-blue-100">
        Note: We offer standardized pricing for all {city.name} zip codes. No surge pricing for emergency calls.
      </div>
    </section>
  );
};

export default CityServices;