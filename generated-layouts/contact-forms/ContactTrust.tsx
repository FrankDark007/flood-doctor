import React from 'react';
import { Star, ShieldCheck, Clock, Award } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import { SERVICES } from './constants';

const ContactTrust: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      
      {/* Left: Trust Content */}
      <div className="lg:col-span-5 bg-slate-900 text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        
        <div>
          <h3 className="text-3xl font-bold mb-6">Why Choose Flood Doctor?</h3>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">60-Minute Response</h4>
                <p className="text-slate-400 text-sm">Our rapid response team is on standby 24/7/365.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Licensed & Insured</h4>
                <p className="text-slate-400 text-sm">We work directly with all major insurance carriers.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Satisfaction Guaranteed</h4>
                <p className="text-slate-400 text-sm">We don't leave until the job is done right.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
           <div className="flex items-center space-x-1 mb-3">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
           </div>
           <blockquote className="italic text-slate-300 mb-4">
             "They saved our basement from a burst pipe nightmare. Arrived in 45 minutes and handled everything with insurance. Highly recommend!"
           </blockquote>
           <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-400">JD</div>
             <div>
                <p className="font-medium text-white">Jane Doe</p>
                <p className="text-xs text-slate-500">Vienna, VA Homeowner</p>
             </div>
           </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="lg:col-span-7 p-8 lg:p-12 bg-white">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Request Emergency Service</h2>
          <p className="text-gray-500">Fill out the form below for immediate assistance.</p>
        </div>

        <form className="space-y-5">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <Input label="Name" placeholder="Your Name" required />
             <Input label="Phone" placeholder="(555) 000-0000" required />
           </div>
           <Input label="Email" type="email" placeholder="you@company.com" required />
           
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
             <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                {SERVICES.map(s => <option key={s}>{s}</option>)}
             </select>
           </div>

           <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
              <textarea 
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500" 
                rows={3}
                placeholder="Describe the damage..." 
              />
           </div>

           <Button fullWidth className="h-12 bg-blue-600 hover:bg-blue-700 font-semibold text-lg">
             Request Free Inspection
           </Button>
           
           <p className="text-center text-xs text-gray-400">
             Your information is secure. We never share your data.
           </p>
        </form>
      </div>

    </div>
  );
};

export default ContactTrust;