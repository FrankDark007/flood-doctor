import React, { useState } from 'react';
import { Phone, MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { EMERGENCY_DATA } from '../constants';

const EmergencyActions: React.FC = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Validate: Only allow digits
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Validate: Max length 15
    if (value.length > 15) {
      return;
    }

    setPhoneInput(value);
    
    // Clear error if user is typing
    if (error) setError('');
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate: Min length 10
    if (phoneInput.length < 10) {
      setError('Please enter at least 10 digits');
      return;
    }

    setSubmitted(true);
    // In a real app, this would send to an API
    console.log('Callback requested for:', phoneInput);
  };

  return (
    <section className="px-4 py-6 space-y-4 bg-white">
      {/* Primary Action: Call */}
      <a 
        href={EMERGENCY_DATA.phoneHref}
        className="flex items-center justify-center w-full bg-red-600 text-white font-black text-xl py-5 rounded-xl shadow-lg shadow-red-200 active:scale-[0.98] transition-transform"
      >
        <Phone className="w-8 h-8 mr-3 fill-white" />
        CALL NOW
      </a>

      {/* Secondary Action: Text */}
      <a 
        href={EMERGENCY_DATA.smsHref}
        className="flex items-center justify-center w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-md active:bg-blue-700 transition-colors"
      >
        <MessageSquare className="w-6 h-6 mr-3" />
        TEXT US PHOTOS
      </a>

      {/* Tertiary Action: Callback Form */}
      <div className="pt-4 border-t border-gray-100 mt-6">
        <h3 className="font-bold text-slate-900 mb-3 text-center">
          Can't call? Request a callback in 2 min:
        </h3>
        
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 text-green-800 font-bold">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <p>Request Received!</p>
              <p className="text-sm font-normal text-green-700">Dispatch is dialing you now.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCallbackSubmit}>
            <div className="flex gap-2">
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Your Phone Number"
                className={`flex-1 bg-gray-50 border-2 rounded-lg px-4 py-3 text-lg font-medium text-slate-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none ${
                  error ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-blue-600'
                }`}
                value={phoneInput}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-slate-900 text-white font-bold px-6 py-3 rounded-lg active:bg-black whitespace-nowrap"
              >
                Go
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            </div>
            {error && (
              <div className="mt-2 text-red-600 text-sm font-bold flex items-center animate-pulse">
                <AlertCircle className="w-4 h-4 mr-1" />
                {error}
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmergencyActions;