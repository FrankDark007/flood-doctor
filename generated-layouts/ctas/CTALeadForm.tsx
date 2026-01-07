import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_NAME } from './constants';

const CTALeadForm: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6 bg-blue-50/50">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left: Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-slate-900 text-white relative overflow-hidden">
             {/* Abstract circle decor */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Get a Free Estimate <br/>
                <span className="text-blue-400">Within 30 Minutes</span>
              </h2>
              <p className="text-slate-300 text-lg">
                Fill out the form to speak directly with a {COMPANY_NAME} specialist. We prioritize emergency requests.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  'Free visual inspection',
                  'Direct insurance billing',
                  'Thermal imaging leak detection'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 md:p-12 lg:p-16 bg-white">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 000-0000" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Describe the Issue</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 bg-white">
                  <option>Water Damage Emergency</option>
                  <option>Mold Inspection</option>
                  <option>Sewage Cleanup</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <button className="w-full group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all duration-300 mt-2">
                <span>Request Callback</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-xs text-slate-400">
                Your information is secure. We never share your data.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTALeadForm;