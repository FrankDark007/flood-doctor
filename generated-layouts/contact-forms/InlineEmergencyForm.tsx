import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { SERVICES } from '../constants';
import Button from './ui/Button';

const InlineEmergencyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inline form submitted:', formData);
    alert(`Emergency callback requested for ${formData.phone}`);
  };

  return (
    <div className="w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
      <div className="p-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 animate-gradient-x"></div>
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-3">
             <div className="bg-red-600 p-2 rounded-full animate-pulse">
                <Zap className="text-white w-6 h-6" />
             </div>
             <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Emergency Rapid Response</h3>
                <p className="text-gray-400 text-sm">Get a callback in 5 minutes or less.</p>
             </div>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/50 text-green-400 border border-green-800">
              <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-ping"></span>
              Technicians Available Now
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="inline-name" className="sr-only">Name</label>
            <input
              id="inline-name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full h-12 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="flex-1">
            <label htmlFor="inline-phone" className="sr-only">Phone</label>
            <input
              id="inline-phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full h-12 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex-1">
            <label htmlFor="inline-service" className="sr-only">Service</label>
            <div className="relative">
              <select
                id="inline-service"
                className="w-full h-12 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent cursor-pointer transition-all"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="h-12 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-8 focus:ring-yellow-500/50"
          >
            Get Help <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
        
        <p className="mt-4 text-xs text-slate-500 md:text-center">
            Prefer to speak to a human? Call <a href="tel:8774970007" className="text-yellow-500 hover:underline font-semibold">(877) 497-0007</a> directly.
        </p>
      </div>
    </div>
  );
};

export default InlineEmergencyForm;