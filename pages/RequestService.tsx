
import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';
import EmergencyServiceCard from '../components/ui/EmergencyServiceCard';
import { useEmergencyData } from '../contexts/EmergencyContext';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  UploadCloud, 
  ArrowRight, 
  FileText, 
  Home, 
  Building2, 
  Calendar, 
  Zap, 
  ChevronLeft, 
  FileCheck, 
  MapPin, 
  ClipboardList
} from 'lucide-react';

// --- UI COMPONENTS ---

const ModernInput = ({ 
  id, 
  label, 
  type = "text", 
  value,
  onChange,
  onBlur,
  placeholder = "", 
  required = false,
  autoComplete,
  className = ""
}: any) => (
  <div className={`space-y-3 ${className}`}>
    <label
      htmlFor={id}
      className="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="block w-full h-14 px-5 rounded-2xl bg-gray-50 border-2 border-transparent text-gray-900 text-lg placeholder-gray-300 focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 transition-all duration-300 outline-none font-medium"
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
    />
  </div>
);

const ModernTextArea = ({ id, label, value, onChange, required, placeholder }: any) => (
  <div className="space-y-3">
    <label
      htmlFor={id}
      className="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={5}
      className="block w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent text-gray-900 text-lg placeholder-gray-300 focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 transition-all duration-300 outline-none font-medium resize-none"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const SelectionCard = ({ id, name, label, description, icon: Icon, checked, onChange, value, color = 'blue' }: any) => {
  const colors: Record<string, any> = {
    blue: {
      activeBorder: 'border-blue-500',
      activeBg: 'bg-blue-50',
      activeRing: 'ring-blue-100',
      iconBg: 'bg-blue-100',
      iconText: 'text-blue-600',
      checkBg: 'bg-blue-500',
      hoverBorder: 'hover:border-blue-200',
      hoverBg: 'group-hover:bg-blue-50/50'
    },
  };

  const theme = colors['blue']; 

  return (
    <label className={`relative flex flex-col p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 group h-full hover:-translate-y-1 ${
      checked 
        ? `${theme.activeBorder} ${theme.activeBg} ring-4 ${theme.activeRing} shadow-lg` 
        : `border-gray-100 bg-white hover:shadow-xl ${theme.hoverBorder} ${theme.hoverBg}`
    }`}>
      <input 
        type="radio" 
        name={name} 
        id={id} 
        value={value}
        checked={checked} 
        onChange={onChange}
        className="sr-only" 
      />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm ${theme.iconBg} ${theme.iconText}`}>
          <Icon size={32} strokeWidth={2} />
        </div>
        
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            checked 
            ? `${theme.checkBg} text-white scale-100 opacity-100 shadow-sm` 
            : 'bg-gray-100 text-gray-300 scale-75 opacity-0 group-hover:opacity-100'
        }`}>
            <CheckCircle2 size={18} strokeWidth={3} />
        </div>
      </div>

      <div className="mt-auto">
        <span className={`block text-xl font-bold mb-2 transition-colors ${checked ? 'text-gray-900' : 'text-gray-900'}`}>
            {label}
        </span>
        <span className={`text-base leading-relaxed block ${checked ? 'text-gray-700' : 'text-gray-500'}`}>
            {description}
        </span>
      </div>
    </label>
  );
};

// --- MAIN PAGE ---

const RequestService: React.FC = () => {
  const { triggerEmergency, resetEmergency } = useEmergencyData();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    isEmergency: '', 
    propertyType: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    hasInsurance: 'yes',
    carrier: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'isEmergency') {
        if (value === 'yes') triggerEmergency();
        else resetEmergency();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
    scrollToTop();
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    scrollToTop();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    scrollToTop();
  };

  return (
    <main className="bg-white min-h-screen">
      <PageMeta 
        title="Request Service" 
        description="Submit a service request for water damage restoration. 24/7 Emergency response." 
      />

      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-gray-100">
        <div 
          className="h-full bg-primary transition-all duration-700 ease-out" 
          style={{ width: isSuccess ? '100%' : `${(step / 4) * 100}%` }}
        />
      </div>
      
      <div className="flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0">
        
        {/* === LEFT COLUMN: FORM === */}
        <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col justify-center px-6 py-12 lg:p-24 relative">
          
          <div className="max-w-2xl mx-auto w-full">
            
            {!isSuccess && (
              <div className="mb-12 flex items-center justify-between">
                {step > 1 ? (
                  <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-gray-900 transition-colors text-sm font-bold uppercase tracking-wider group">
                    <ChevronLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back
                  </button>
                ) : (
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Start</span>
                )}
                <span className="text-gray-300 font-display font-medium text-lg">
                  <span className="text-primary">0{step}</span> / 04
                </span>
              </div>
            )}

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-12">
                    <div>
                      <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-[1.1] tracking-tight">
                        What brings you here today?
                      </h1>
                      <p className="text-xl text-gray-500 font-light">
                        We need to assess the urgency to dispatch the right crew.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <SelectionCard 
                        id="emergency-yes" 
                        name="isEmergency" 
                        value="yes" 
                        label="Emergency Service"
                        description="Active flooding, sewage backup, or standing water. I need a crew immediately."
                        icon={Zap}
                        color="blue"
                        checked={formData.isEmergency === 'yes'} 
                        onChange={handleChange} 
                      />
                      <SelectionCard 
                        id="emergency-no" 
                        name="isEmergency" 
                        value="no" 
                        label="Standard Request"
                        description="Mold inspection, estimate for repairs, or non-urgent water damage assessment."
                        icon={Calendar}
                        color="blue"
                        checked={formData.isEmergency === 'no'} 
                        onChange={handleChange} 
                      />
                    </div>

                    {formData.isEmergency === 'yes' && (
                       <div className="p-6 bg-[#e6f4ea] border border-[#ceead6] rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-8 duration-500 shadow-sm">
                          <div className="bg-white p-2.5 rounded-full shadow-sm shrink-0">
                              <AlertTriangle className="text-[#188038]" size={24} strokeWidth={2.5} />
                          </div>
                          <div>
                             <h4 className="font-bold text-[#0d652d] text-lg">Priority Status Activated</h4>
                             <p className="text-[#137333] text-sm mt-1 leading-relaxed font-medium">
                                We are prioritizing your request. Once submitted, you will receive a Work Authorization via email to dispatch a crew instantly.
                             </p>
                          </div>
                       </div>
                    )}

                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest pl-1">Property Type</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SelectionCard 
                                id="prop-res" 
                                name="propertyType" 
                                value="residential" 
                                label="Residential"
                                description="Single family home, condo, or apartment."
                                icon={Home}
                                color="blue"
                                checked={formData.propertyType === 'residential'} 
                                onChange={handleChange} 
                            />
                            <SelectionCard 
                                id="prop-com" 
                                name="propertyType" 
                                value="commercial" 
                                label="Commercial"
                                description="Office building, retail, school, or industrial facility."
                                icon={Building2}
                                color="blue"
                                checked={formData.propertyType === 'commercial'} 
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-10">
                    <div>
                      <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-[1.1] tracking-tight">Where should we go?</h1>
                      <p className="text-xl text-gray-500 font-light">Contact details for the on-site point of contact.</p>
                    </div>
                    <div className="space-y-8">
                        <ModernInput id="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} autoComplete="name" required placeholder="e.g. Jane Doe" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ModernInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required placeholder="jane@example.com" />
                            <ModernInput id="phone" label="Mobile Phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" required placeholder="(555) 123-4567" />
                        </div>
                        <div className="pt-4 border-t border-gray-100 space-y-8">
                            <ModernInput id="address" label="Property Address" value={formData.address} onChange={handleChange} autoComplete="address-line1" required placeholder="1234 Main St" />
                            <div className="grid grid-cols-2 gap-8">
                                <ModernInput id="city" label="City" value={formData.city} onChange={handleChange} autoComplete="address-level2" required placeholder="Arlington" />
                                <ModernInput id="zip" label="Zip Code" value={formData.zip} onChange={handleChange} autoComplete="postal-code" required placeholder="22201" />
                            </div>
                        </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-10">
                    <div>
                      <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-[1.1] tracking-tight">Coverage details</h1>
                      <p className="text-xl text-gray-500 font-light">Helping us with insurance info now speeds up the claims process later.</p>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Will you be using insurance?</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <SelectionCard id="ins-yes" name="hasInsurance" value="yes" label="Yes, filing a claim" description="We will bill your carrier directly." icon={FileCheck} color="blue" checked={formData.hasInsurance === 'yes'} onChange={handleChange} />
                                <SelectionCard id="ins-no" name="hasInsurance" value="no" label="No / Self-Pay" description="I will pay out of pocket." icon={FileText} color="slate" checked={formData.hasInsurance === 'no'} onChange={handleChange} />
                            </div>
                        </div>
                        {formData.hasInsurance === 'yes' && (
                            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                                <ModernInput id="carrier" label="Insurance Carrier Name" value={formData.carrier} onChange={handleChange} placeholder="e.g. State Farm, USAA, Travelers" />
                            </div>
                        )}
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className="space-y-10">
                    <div>
                      <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-[1.1] tracking-tight">Final details</h1>
                      <p className="text-xl text-gray-500 font-light">Tell us briefly what happened so the crew comes prepared.</p>
                    </div>
                    <ModernTextArea id="description" label="Description of Damage" value={formData.description} onChange={handleChange} required placeholder="e.g. Pipe burst in the basement..." />
                    <div className="border-2 border-dashed border-gray-200 rounded-3xl p-10 text-center hover:bg-gray-50 hover:border-primary/30 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <UploadCloud size={32} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Upload Photos (Optional)</h4>
                    </div>
                  </div>
                )}

                <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
                    {step < 4 ? (
                        <Button type="button" onClick={handleNext} disabled={step === 1 && (!formData.isEmergency || !formData.propertyType)} className="h-16 px-10 text-lg rounded-full bg-primary hover:bg-primaryHover text-white shadow-google hover:shadow-google-hover w-full md:w-auto disabled:opacity-50 disabled:shadow-none">
                            Continue <ArrowRight className="ml-2" />
                        </Button>
                    ) : (
                        <Button type="submit" disabled={isSubmitting} className={`h-16 px-10 text-lg rounded-full bg-primary hover:bg-primaryHover text-white shadow-google hover:shadow-google-hover w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}>
                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </Button>
                    )}
                </div>
              </form>
            ) : (
              <div className="animate-in fade-in zoom-in duration-700 text-center py-12">
                  <div className="w-24 h-24 bg-green rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-green-200">
                      {/* Inline SVG to guarantee visibility */}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="48" 
                        height="48" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-medium text-gray-900 mb-6">Request Received</h2>
                  <p className="text-xl text-gray-500 max-w-lg mx-auto mb-12 leading-relaxed">
                      {formData.isEmergency === 'yes' ? "Our dispatch team has been alerted. You will receive a call within 5 minutes to confirm details." : "Thanks for reaching out. A project manager will review your request and contact you shortly."}
                  </p>
                  <Button to="/" variant="outline" className="h-14 px-8 rounded-full border-gray-300">Return to Home</Button>
              </div>
            )}
          </div>
        </div>

        {/* === RIGHT COLUMN: CONTEXT (Desktop Only) === */}
        <div className="hidden lg:block w-1/3 xl:w-1/4 bg-gray-50 border-l border-gray-200 p-10 relative">
            <div className="sticky top-10 space-y-10">
                {/* Status Card (Always visible) */}
                <EmergencyServiceCard variant="expanded" />

                {/* Summary Widget (Always visible, showing placeholders if empty) */}
                {!isSuccess && (
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-gray-200/50 animate-in fade-in slide-in-from-right-4 duration-700 relative overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Request Summary</h3>
                            <span className="text-[10px] font-mono text-gray-300 bg-gray-50 px-2 py-1 rounded">DRAFT-001</span>
                        </div>

                        <div className="space-y-6">
                            {/* Priority Item */}
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                    !formData.isEmergency ? 'bg-gray-100 text-gray-300' :
                                    formData.isEmergency === 'yes' ? 'bg-[#fce8e6] text-[#d93025] border border-[#fad2cf]' : 'bg-blue-100 text-blue-600'
                                }`}>
                                    {formData.isEmergency === 'yes' ? <Zap size={20} fill="currentColor" className="text-[#d93025]" /> : <Calendar size={20} />}
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Priority Level</div>
                                    <div className={`font-display font-bold text-lg ${!formData.isEmergency ? 'text-gray-300' : 'text-gray-900'}`}>
                                        {!formData.isEmergency ? 'Pending...' : (formData.isEmergency === 'yes' ? 'Emergency' : 'Standard')}
                                    </div>
                                </div>
                            </div>

                            {/* Property Item */}
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                    !formData.propertyType ? 'bg-gray-100 text-gray-300' : 'bg-orange-100 text-orange-600'
                                }`}>
                                    {formData.propertyType === 'commercial' ? <Building2 size={20} /> : <Home size={20} />}
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Property Type</div>
                                    <div className={`font-display font-bold text-lg capitalize ${!formData.propertyType ? 'text-gray-300' : 'text-gray-900'}`}>
                                        {formData.propertyType || 'Pending...'}
                                    </div>
                                </div>
                            </div>

                            {/* Location Item */}
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                    !formData.city ? 'bg-gray-100 text-gray-300' : 'bg-purple-100 text-purple-600'
                                }`}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Location</div>
                                    <div className={`font-display font-bold text-lg ${!formData.city ? 'text-gray-300' : 'text-gray-900'}`}>
                                        {formData.city || 'Pending...'}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Watermark */}
                        <div className="absolute -bottom-6 -right-6 text-gray-50 opacity-50 rotate-[-15deg]">
                            <FileText size={120} />
                        </div>
                    </div>
                )}

                {/* Trust Badge */}
                <div className="flex items-center gap-3 text-gray-400 text-xs font-medium justify-center opacity-70">
                    <ShieldCheck size={16} />
                    <span>SSL Encrypted & HIPAA Compliant</span>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
};

export default RequestService;
