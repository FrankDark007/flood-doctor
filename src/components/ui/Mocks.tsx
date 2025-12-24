import React from 'react';
import { BarChart3, MessageSquare, Check, Shield } from 'lucide-react';
import Button from './Button';

export const PerformanceMock: React.FC = () => (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-8 max-w-lg mx-auto transform transition-transform hover:scale-[1.01] duration-500">
        <div className="flex items-center justify-between mb-8">
            <div>
                <div className="text-sm text-gray-500 mb-1">Process Status</div>
                <div className="text-3xl font-bold text-gray-900">Drying Active</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-full text-primary">
                <BarChart3 size={24} />
            </div>
        </div>
        
        {/* Fake Graph */}
        <div className="h-48 flex items-end justify-between gap-4 mb-6">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="w-full bg-blue-50 rounded-t-lg relative group">
                    <div 
                        className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-1000"
                        style={{ height: `${h}%` }}
                    ></div>
                </div>
            ))}
        </div>
        
        <div className="text-sm text-gray-500 text-center">
            Moisture levels decreasing rapidly over 24h
        </div>
    </div>
);

export const CommunicationMock: React.FC = () => (
    <div className="bg-white rounded-[2rem] shadow-card border border-gray-200 overflow-hidden max-w-sm mx-auto">
        <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">FD</div>
             <div>
                 <div className="font-semibold text-gray-900">Flood Doctor Support</div>
                 <div className="text-xs text-green-600 flex items-center gap-1">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     Active now
                 </div>
             </div>
        </div>
        <div className="p-4 space-y-4 bg-white h-80 flex flex-col justify-end">
            <div className="flex justify-end">
                 <div className="bg-primary text-white py-2 px-4 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                    Is the crew arriving soon?
                 </div>
            </div>
            <div className="flex justify-start">
                 <div className="bg-gray-100 text-gray-800 py-2 px-4 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">
                    Yes! Our technicians are 5 minutes away.
                 </div>
            </div>
             <div className="flex justify-start">
                 <div className="bg-gray-100 text-gray-800 py-2 px-4 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">
                    They have the water extraction equipment ready.
                 </div>
            </div>
        </div>
        <div className="p-3 border-t border-gray-100">
             <div className="bg-gray-50 rounded-full h-10 w-full flex items-center px-4 text-gray-400 text-sm">
                 Type a message...
             </div>
        </div>
    </div>
);

export const ServiceListMock: React.FC = () => (
    <div className="bg-white rounded-2xl shadow-card border border-gray-200 p-6 max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
             <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                <Shield size={32} />
             </div>
             <div>
                 <h3 className="font-semibold text-gray-900 text-lg">Comprehensive Coverage</h3>
                 <p className="text-sm text-gray-500">We handle everything</p>
             </div>
        </div>
        <div className="space-y-4">
             {['Water Extraction', 'Dehumidification', 'Mold Sanitization', 'Debris Removal', 'Insurance Billing'].map(item => (
                 <div key={item} className="flex items-center justify-between">
                     <span className="text-gray-700 font-medium">{item}</span>
                     <Button variant="secondary" className="h-8 px-4 text-xs rounded-full">
                        Details
                     </Button>
                 </div>
             ))}
        </div>
    </div>
);