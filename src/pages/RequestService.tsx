import React, { useState, useRef } from 'react';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  UploadCloud, 
  ArrowLeft, 
  ArrowRight,
  FileText
} from 'lucide-react';

// --- COMPONENTS: Google Material 3 Form Elements ---

const FloatingInput = ({ 
  id, 
  label, 
  type = "text", 
  value,
  onChange,
  placeholder = " ", 
  required = false,
  autoComplete
}: any) => (
  <div className="relative group">
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="block px-4 pb-2.5 pt-5 w-full text-[16px] text-text bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer transition-colors placeholder-transparent"
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
    />
    <label
      htmlFor={id}
      className="absolute text-[15px] text-muted duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary bg-white px-1 pointer-events-none"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  </div>
);

const FloatingTextArea = ({ id, label, value, onChange, required }: any) => (
  <div className="relative group">
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={4}
      className="block px-4 pb-2.5 pt-5 w-full text-[16px] text-text bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer transition-colors placeholder-transparent resize-none"
      placeholder=" "
      required={required}
    />
    <label
      htmlFor={id}
      className="absolute text-[15px] text-muted duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary bg-white px-1 pointer-events-none"
    >
      {label}
    </label>
  </div>
);

const GoogleRadio = ({ id, name, label, checked, onChange, value }: any) => (
  <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${checked ? 'border-primary bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
    <div className="relative flex items-center justify-center">
      <input 
        type="radio" 
        name={name} 
        id={id} 
        value={value}
        checked={checked} 
        onChange={onChange}
        className="peer appearance-none w-5 h-5 border-2 border-muted rounded-full checked:border-primary checked:border-[6px] transition-all"
      />
    </div>
    <span className={`text-[15px] font-medium ${checked ? 'text-primary' : 'text-text'}`}>{label}</span>
  </label>
);

// --- MAIN PAGE ---

const RequestService: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Triage
    isEmergency: 'yes',
    isCoveredLoss: 'yes',
    
    // Step 2: Client Info
    isPropertyOwner: 'yes',
    dateOfLoss: new Date().toISOString().split('T')[0], // Default today
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    
    // Step 3: Carrier Info
    carrier: '',
    policyNumber: '',
    claimNumber: '',
    deductible: '',
    adjusterName: '',
    adjusterEmail: '',
    adjusterPhone: '',

    // Step 4: Loss Details
    description: '',
    files: [] as File[] // Placeholder for file logic
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Logic: If Step 1 is done and Covered Loss is NO, Skip Step 3 (Insurance)
    if (step === 1) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (step === 2 && formData.isCoveredLoss === 'no') {
      setStep(4); // Skip Insurance
    } else {
      setStep(prev => prev + 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (step === 4 && formData.isCoveredLoss === 'no') {
      setStep(2); // Go back to Client Info, skipping Insurance
    } else {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- RENDER STEPS ---

  return (
    <main className="flex-grow bg-white min-h-screen flex flex-col">
      <PageMeta 
        title="Request Service" 
        description="Submit a service request for water damage restoration. 24/7 Emergency response." 
      />
      
      {/* Top Bar / Progress Indicator */}
      <div className="w-full bg-white border-b border-gray-100 py-4 sticky top-0 z-30">
        <div className="max-w-xl mx-auto px-6 flex items-center justify-between">
           <span className="text-sm font-medium text-muted">
             {isSuccess ? 'Completed' : `Step ${step} of ${formData.isCoveredLoss === 'no' ? '3' : '4'}`}
           </span>
           <div className="flex gap-1.5">
              {/* Dynamic Progress Dots */}
              {[1, 2, 3, 4].map(i => {
                 // Hide step 3 dot if we are skipping insurance
                 if (formData.isCoveredLoss === 'no' && i === 3) return null;
                 return (
                    <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            step >= i || isSuccess ? 'w-8 bg-primary' : 'w-4 bg-gray-200'
                        }`}
                    />
                 )
              })}
           </div>
        </div>
      </div>

      <div className="flex-grow flex items-start justify-center py-12 px-4 sm:px-6">
        <div className="max-w-[600px] w-full">
          
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Header Text Changes per Step */}
                <div className="text-center mb-8">
                    <h1 className="font-display text-3xl font-medium text-text mb-2">
                        {step === 1 && "Let's triage the situation"}
                        {step === 2 && "Client Information"}
                        {step === 3 && "Insurance Details"}
                        {step === 4 && "Tell us what happened"}
                    </h1>
                    <p className="text-muted text-sm">
                        {step === 1 && "We need to know the urgency and coverage type."}
                        {step === 2 && "Who should we contact regarding this property?"}
                        {step === 3 && "If you don't have all details yet, you can skip items."}
                        {step === 4 && "Provide details and photos to help us prepare."}
                    </p>
                </div>

                {/* ================= STEP 1: TRIAGE ================= */}
                {step === 1 && (
                    <div className="space-y-8">
                        {/* Emergency Question */}
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-text uppercase tracking-wide">
                                Is this an Emergency? <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <GoogleRadio 
                                    id="emergency-yes" name="isEmergency" value="yes" 
                                    label="YES - Send a team ASAP" 
                                    checked={formData.isEmergency === 'yes'} onChange={handleChange} 
                                />
                                <GoogleRadio 
                                    id="emergency-no" name="isEmergency" value="no" 
                                    label="NO - I'd like to speak first" 
                                    checked={formData.isEmergency === 'no'} onChange={handleChange} 
                                />
                            </div>
                            {/* Logic Notice: WP E-Sign Trigger */}
                            {formData.isEmergency === 'yes' && (
                                <div className="flex items-start gap-3 p-4 bg-amber-50 text-amber-800 rounded-xl text-sm border border-amber-100">
                                    <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                                    <p>
                                        <strong>Priority Status:</strong> You will receive an email with a Work Authorization form immediately after submitting. Please sign it so we can dispatch a team instantly.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Covered Loss Question */}
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-text uppercase tracking-wide">
                                Is this a covered loss? <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <GoogleRadio 
                                    id="loss-yes" name="isCoveredLoss" value="yes" 
                                    label="YES - Insurance Claim" 
                                    checked={formData.isCoveredLoss === 'yes'} onChange={handleChange} 
                                />
                                <GoogleRadio 
                                    id="loss-no" name="isCoveredLoss" value="no" 
                                    label="NO - Self-Pay" 
                                    checked={formData.isCoveredLoss === 'no'} onChange={handleChange} 
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 2: CLIENT INFO ================= */}
                {step === 2 && (
                    <div className="space-y-6">
                        {/* Owner & Date Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-muted uppercase">Property Owner?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="isPropertyOwner" value="yes" checked={formData.isPropertyOwner === 'yes'} onChange={handleChange} className="accent-primary w-4 h-4"/>
                                        <span className="text-sm">Yes</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="isPropertyOwner" value="no" checked={formData.isPropertyOwner === 'no'} onChange={handleChange} className="accent-primary w-4 h-4"/>
                                        <span className="text-sm">No (Agent)</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-muted uppercase mb-2">Date of Loss</label>
                                <input 
                                    type="date" 
                                    name="dateOfLoss"
                                    value={formData.dateOfLoss}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                />
                            </div>
                        </div>

                        <FloatingInput id="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} autoComplete="name" required />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FloatingInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                            <FloatingInput id="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
                        </div>

                        <div className="space-y-6 pt-2">
                            <FloatingInput id="address" label="Street Address" value={formData.address} onChange={handleChange} autoComplete="address-line1" required />
                            <div className="grid grid-cols-2 gap-6">
                                <FloatingInput id="city" label="City" value={formData.city} onChange={handleChange} autoComplete="address-level2" required />
                                <FloatingInput id="zip" label="Zip Code" value={formData.zip} onChange={handleChange} autoComplete="postal-code" required />
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 3: INSURANCE (CONDITIONAL) ================= */}
                {step === 3 && (
                    <div className="space-y-6">
                        <div className="bg-blue-50 text-primary px-4 py-3 rounded-lg text-sm mb-4">
                            If you don't have specific details (like claim #) handy, you can leave them blank.
                        </div>

                        <FloatingInput id="carrier" label="Insurance Carrier" value={formData.carrier} onChange={handleChange} />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FloatingInput id="policyNumber" label="Policy Number" value={formData.policyNumber} onChange={handleChange} />
                            <FloatingInput id="claimNumber" label="Claim Number" value={formData.claimNumber} onChange={handleChange} />
                        </div>

                        <FloatingInput id="deductible" label="Deductible Amount" value={formData.deductible} onChange={handleChange} />

                        <div className="pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-muted uppercase mb-4">Adjuster Information (Optional)</h3>
                            <FloatingInput id="adjusterName" label="Adjuster's Name" value={formData.adjusterName} onChange={handleChange} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <FloatingInput id="adjusterEmail" label="Adjuster's Email" value={formData.adjusterEmail} onChange={handleChange} />
                                <FloatingInput id="adjusterPhone" label="Adjuster's Phone" value={formData.adjusterPhone} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 4: LOSS DETAILS ================= */}
                {step === 4 && (
                    <div className="space-y-8">
                        <FloatingTextArea 
                            id="description" 
                            label="Cause of loss & affected materials" 
                            value={formData.description} 
                            onChange={handleChange} 
                            required 
                        />

                        {/* File Upload Visual Mock */}
                        <div>
                            <label className="block text-sm font-semibold text-text mb-3">Upload Photos or Video</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:bg-gray-50 hover:border-primary transition-colors cursor-pointer group">
                                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <UploadCloud size={24} />
                                </div>
                                <p className="text-sm font-medium text-text">Click to upload or drag and drop</p>
                                <p className="text-xs text-muted mt-1">Max file size: 128MB</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- NAVIGATION BUTTONS --- */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="h-12 px-6 rounded-full border border-gray-300 text-text font-medium hover:bg-gray-50 transition-colors"
                        >
                            Back
                        </button>
                    )}
                    
                    {step < 4 ? (
                        <Button 
                            type="button" 
                            variant="primary" 
                            className="h-12 px-8 flex-1 sm:flex-none ml-auto"
                            onClick={handleNext}
                        >
                            Next Step <ArrowRight size={18} className="ml-2" />
                        </Button>
                    ) : (
                        <Button 
                            type="submit" 
                            variant="primary" 
                            className={`h-12 px-8 flex-1 sm:flex-none ml-auto ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </Button>
                    )}
                </div>

            </form>
          ) : (
            // ================= SUCCESS STATE =================
            <div className="bg-white p-8 md:p-12 border border-gray-200 rounded-[32px] shadow-google text-center animate-in fade-in zoom-in duration-500">
               <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-sm">
                  <CheckCircle2 size={40} />
               </div>
               <h2 className="font-display text-3xl font-medium text-text mb-4">Request Received</h2>
               
               {formData.isEmergency === 'yes' ? (
                   <div className="bg-blue-50 p-6 rounded-xl text-left border border-blue-100 mb-8">
                       <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
                           <FileText size={18} /> Check your email
                       </h3>
                       <p className="text-sm text-text leading-relaxed">
                           Because this is an <strong>Emergency</strong>, we have sent a Work Authorization contract to <strong>{formData.email}</strong>. 
                           <br/><br/>
                           Please sign this immediately so we can dispatch our Rapid Response Team to:
                           <br/>
                           <span className="font-mono text-xs bg-white px-2 py-1 rounded border border-blue-200 mt-2 inline-block">
                               {formData.address}, {formData.city}
                           </span>
                       </p>
                   </div>
               ) : (
                   <p className="text-muted text-lg mb-8">
                       Our project manager will review your details and call you shortly at <strong>{formData.phone}</strong>.
                   </p>
               )}

               <Button to="/" variant="outline" className="mr-4">
                  Return Home
               </Button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default RequestService;