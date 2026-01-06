import React from 'react';
import { ArrowRight } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import { SERVICES } from '../constants';

const ContactHero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' 
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="text-white space-y-6 hidden lg:block">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Water Damage? <br />
              <span className="text-blue-400">We Fix It Fast.</span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-lg">
              Don't let water damage ruin your property. Our emergency response team is ready to restore your home or business to its pre-loss condition.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="block text-2xl font-bold">24/7</span>
                <span className="text-xs text-slate-300">Service</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="block text-2xl font-bold">60m</span>
                <span className="text-xs text-slate-300">Arrival</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl animate-in slide-in-from-bottom-10 duration-700">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Emergency Request</h3>
              <p className="text-sm text-gray-500">Get a callback in minutes.</p>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <Input placeholder="Name" required />
                 <Input placeholder="Phone" required />
              </div>
              
              <select className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm bg-white">
                 <option disabled selected>Select Service Needed</option>
                 {SERVICES.map(s => <option key={s}>{s}</option>)}
              </select>

              <textarea 
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Property Address & Description" 
                rows={3}
              />

              <Button fullWidth className="h-12 bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30">
                Get Help Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactHero;