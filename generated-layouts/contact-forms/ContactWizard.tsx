import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Camera, MapPin } from 'lucide-react';
import { SERVICES } from './constants';
import Input from './ui/Input';
import Button from './ui/Button';

const ContactWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    address: '',
    description: '',
    files: null as FileList | null,
    name: '',
    phone: '',
    email: ''
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wizard submitted:', formData);
    alert('Thank you! Dispatching team.');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center relative z-10">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                  step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              <span className={`text-xs mt-2 font-medium ${step >= s ? 'text-blue-600' : 'text-gray-400'}`}>
                {s === 1 ? 'Service' : s === 2 ? 'Details' : 'Contact'}
              </span>
            </div>
          ))}
          {/* Connecting Line */}
          <div className="absolute top-9 left-0 w-full h-0.5 bg-gray-200 -z-0 hidden sm:block" />
          <div 
            className="absolute top-9 left-0 h-0.5 bg-blue-600 -z-0 transition-all duration-300 hidden sm:block"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 min-h-[400px] flex flex-col justify-between">
        <div className="max-w-2xl mx-auto w-full">
          
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What type of emergency is this?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setFormData({...formData, service: s})}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      formData.service === s 
                        ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`font-semibold ${formData.service === s ? 'text-blue-800' : 'text-gray-700'}`}>
                      {s}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300 space-y-6">
               <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Where is the damage located?</h3>
               
               <Input 
                 label="Property Address" 
                 value={formData.address}
                 onChange={(e) => setFormData({...formData, address: e.target.value})}
                 placeholder="123 Street Name, City, State"
               />

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                 <textarea
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    rows={3}
                    placeholder="Briefly describe the situation..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                 />
               </div>

               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer">
                  <input type="file" multiple className="hidden" id="wizard-file" onChange={(e) => e.target.files && setFormData({...formData, files: e.target.files})} />
                  <label htmlFor="wizard-file" className="cursor-pointer">
                    <Camera className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-blue-600 font-medium">Upload Photos</span>
                    <span className="text-xs text-gray-500 block mt-1">Help us prepare the right equipment</span>
                    {formData.files && <span className="text-sm text-green-600 font-bold block mt-2">{formData.files.length} selected</span>}
                  </label>
               </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who should we contact?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Full Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Input 
                  label="Phone Number" 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <Input 
                  label="Email Address" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 text-sm text-yellow-800">
                <p><strong>Note:</strong> We will call this number immediately to confirm dispatch details.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between max-w-2xl mx-auto w-full">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={handleBack}
            disabled={step === 1}
            className={step === 1 ? 'invisible' : ''}
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Back
          </Button>

          {step < totalSteps ? (
            <Button type="button" onClick={handleNext}>
              Next Step <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
             <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Submit Request <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactWizard;