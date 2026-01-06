import React, { useState } from 'react';
import { Droplets, Flame, Sprout, Biohazard, ArrowDown } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';

const ContactGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const icons = {
    'Water Damage': <Droplets className="w-10 h-10 mb-3" />,
    'Fire/Smoke': <Flame className="w-10 h-10 mb-3" />,
    'Mold': <Sprout className="w-10 h-10 mb-3" />,
    'Sewage/Other': <Biohazard className="w-10 h-10 mb-3" />
  };

  const gridItems = [
    { id: 'Water Damage', color: 'bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-400' },
    { id: 'Fire/Smoke', color: 'bg-red-50 text-red-600 border-red-200 hover:border-red-400' },
    { id: 'Mold', color: 'bg-green-50 text-green-600 border-green-200 hover:border-green-400' },
    { id: 'Sewage/Other', color: 'bg-orange-50 text-orange-600 border-orange-200 hover:border-orange-400' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Select Your Emergency Type</h2>
        <p className="text-gray-500 mt-2">Choose an icon below to start your request.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {gridItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedService(item.id)}
            className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-200 ${
              selectedService === item.id 
                ? `${item.color.split(' ')[1]} border-current ring-2 ring-offset-2 ring-current`
                : `${item.color} border-transparent`
            }`}
          >
            {icons[item.id as keyof typeof icons]}
            <span className="font-semibold text-sm md:text-base">{item.id}</span>
            {selectedService === item.id && (
               <div className="absolute -bottom-3 text-current bg-white rounded-full">
                 <ArrowDown className="w-6 h-6 animate-bounce" />
               </div>
            )}
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500 border-t border-gray-100 pt-8">
           <div className="max-w-2xl mx-auto">
             <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Requesting Help for: <span className="text-blue-600">{selectedService}</span></h3>
                <button onClick={() => setSelectedService(null)} className="text-sm text-gray-400 underline hover:text-gray-600">Change</button>
             </div>
             
             <form className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Name" placeholder="John Doe" required />
                  <Input label="Phone" placeholder="(555) 123-4567" required />
               </div>
               <Input label="Address" placeholder="123 Property Lane" required />
               <div className="flex gap-4 pt-2">
                 <Button type="submit" fullWidth>Submit Request</Button>
               </div>
             </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default ContactGrid;