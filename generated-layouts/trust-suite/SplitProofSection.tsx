import React from 'react';
import { Star, Quote, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { PRIMARY_COLOR } from '../constants';

const SplitProofSection: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left Side: Key Stat Focus */}
                <div 
                    className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-white opacity-10"></div>

                    <div className="relative z-10 text-white">
                        <div className="flex items-center space-x-2 mb-6 text-blue-100">
                            <Phone className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">Emergency Response</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            We arrive in <br/>
                            <span className="text-yellow-400">60 Minutes</span> <br/>
                            or less.
                        </h2>
                        
                        <p className="text-blue-100 text-lg mb-8 max-w-md">
                            When disaster strikes, every minute counts. Our 24/7 rapid response team is stationed across Virginia to ensure we're there when you need us most.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "24/7 Live Operator - No Machines",
                                "Dispatched Immediately",
                                "Fully Equipped Trucks"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-colors w-fit group">
                            Call Now (555) 123-4567
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Side: Social Proof / Review */}
                <div className="p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center">
                    <div className="mb-8">
                        <div className="flex items-center space-x-1 mb-2">
                             {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-6 h-6 text-yellow-400 fill-current" />
                             ))}
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            Based on 500+ 5-Star Reviews
                        </div>
                    </div>

                    <div className="relative mb-8">
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-slate-100 transform -scale-x-100" />
                        <blockquote className="relative z-10 text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                            "Absolutely incredible service. They arrived within 45 minutes of my call at 2 AM. The team was professional, empathetic, and handled the water damage perfectly. I can't recommend them enough."
                        </blockquote>
                    </div>

                    <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg mr-4">
                            JD
                        </div>
                        <div>
                            <div className="font-bold text-slate-900">John Doe</div>
                            <div className="text-sm text-slate-500">Homeowner, Richmond VA</div>
                        </div>
                        <div className="ml-auto">
                            {/* Google G Logo Mock */}
                            <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                                <span className="font-bold text-blue-600 text-lg">G</span>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges Mini Row */}
                    <div className="mt-12 pt-8 border-t border-slate-100 flex items-center space-x-6 grayscale opacity-60">
                         <div className="text-xs font-bold text-slate-400 uppercase">Also verified by:</div>
                         <div className="font-serif font-bold text-slate-600">Angi</div>
                         <div className="font-serif font-bold text-slate-600">HomeAdvisor</div>
                         <div className="font-serif font-bold text-slate-600">BBB</div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default SplitProofSection;