import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Home,
  Building2,
  Droplets,
  Flame,
  Wind,
  ArrowRight,
  Star
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * ContactDevC - Multi-Step Form Style
 *
 * Key patterns:
 * - Step-by-step guided form
 * - Service type selection with visuals
 * - Property type selection
 * - Urgency indicator
 * - Progress indicator
 * - Sidebar with contact info and trust signals
 */

const ContactDevC: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    propertyType: '',
    urgency: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const serviceTypes = [
    { id: 'water-damage', label: 'Water Damage', icon: Droplets, description: 'Flooding, leaks, burst pipes' },
    { id: 'mold', label: 'Mold Removal', icon: Wind, description: 'Mold remediation & testing' },
    { id: 'fire-damage', label: 'Fire/Smoke', icon: Flame, description: 'Fire damage restoration' },
    { id: 'other', label: 'Other Services', icon: Home, description: 'Biohazard, storm damage' }
  ];

  const propertyTypes = [
    { id: 'residential', label: 'Residential', icon: Home, description: 'House, townhome, condo' },
    { id: 'commercial', label: 'Commercial', icon: Building2, description: 'Office, retail, industrial' }
  ];

  const urgencyLevels = [
    { id: 'emergency', label: 'Emergency', description: 'Active water/damage now', color: 'rose' },
    { id: 'urgent', label: 'Urgent', description: 'Need help within 24 hours', color: 'amber' },
    { id: 'standard', label: 'Standard', description: 'Scheduling an estimate', color: 'emerald' }
  ];

  const totalSteps = 4;

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  const canProceed = () => {
    switch (step) {
      case 1: return formData.serviceType !== '';
      case 2: return formData.propertyType !== '' && formData.urgency !== '';
      case 3: return formData.name !== '' && formData.phone !== '';
      default: return true;
    }
  };

  return (
    <main className="flex-grow bg-slate-50">
      <PageMeta
        title="Request Water Damage Restoration Service"
        description="Request water damage restoration service from Flood Doctor. Free estimates, 24/7 emergency response in Northern Virginia."
      />

      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-semibold text-text">
                Request Service
              </h1>
              <p className="text-sm text-muted">Free estimate • No obligation</p>
            </div>
            <a
              href="tel:8774970007"
              className="flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition-colors"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Emergency?</span> Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text">Step {step} of {totalSteps}</span>
                <span className="text-sm text-muted">{Math.round((step / totalSteps) * 100)}% complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Step 1: Service Type */}
              {step === 1 && (
                <div className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-text mb-2">
                    What type of service do you need?
                  </h2>
                  <p className="text-muted mb-8">Select the option that best describes your situation.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceTypes.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setFormData({ ...formData, serviceType: service.id })}
                        className={`text-left p-6 rounded-xl border-2 transition-all ${
                          formData.serviceType === service.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <service.icon
                          size={32}
                          className={formData.serviceType === service.id ? 'text-primary' : 'text-muted'}
                        />
                        <h3 className={`font-semibold mt-4 mb-1 ${
                          formData.serviceType === service.id ? 'text-primary' : 'text-text'
                        }`}>
                          {service.label}
                        </h3>
                        <p className="text-sm text-muted">{service.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Property & Urgency */}
              {step === 2 && (
                <div className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-text mb-2">
                    Tell us about your property
                  </h2>
                  <p className="text-muted mb-8">This helps us prepare the right team and equipment.</p>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-text mb-3">Property Type</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {propertyTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setFormData({ ...formData, propertyType: type.id })}
                          className={`text-left p-5 rounded-xl border-2 transition-all ${
                            formData.propertyType === type.id
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <type.icon
                              size={24}
                              className={formData.propertyType === type.id ? 'text-primary' : 'text-muted'}
                            />
                            <div>
                              <h3 className={`font-semibold ${
                                formData.propertyType === type.id ? 'text-primary' : 'text-text'
                              }`}>
                                {type.label}
                              </h3>
                              <p className="text-sm text-muted">{type.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-3">How urgent is this?</label>
                    <div className="space-y-3">
                      {urgencyLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setFormData({ ...formData, urgency: level.id })}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            formData.urgency === level.id
                              ? `border-${level.color}-500 bg-${level.color}-50`
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${
                                level.color === 'rose' ? 'bg-rose-500' :
                                level.color === 'amber' ? 'bg-amber-500' : 'bg-emerald-500'
                              }`} />
                              <div>
                                <span className="font-semibold text-text">{level.label}</span>
                                <span className="text-sm text-muted ml-2">— {level.description}</span>
                              </div>
                            </div>
                            {formData.urgency === level.id && (
                              <CheckCircle2 className={`${
                                level.color === 'rose' ? 'text-rose-500' :
                                level.color === 'amber' ? 'text-amber-500' : 'text-emerald-500'
                              }`} size={20} />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-text mb-2">
                    Your contact information
                  </h2>
                  <p className="text-muted mb-8">We'll use this to reach you about your service request.</p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Property Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="123 Main St, Fairfax, VA 22030"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {step === 4 && (
                <div className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-text mb-2">
                    Review your request
                  </h2>
                  <p className="text-muted mb-8">Make sure everything looks correct before submitting.</p>

                  <div className="bg-slate-50 rounded-xl p-6 mb-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted">Service Type</span>
                      <span className="font-medium text-text capitalize">{formData.serviceType.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Property Type</span>
                      <span className="font-medium text-text capitalize">{formData.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Urgency</span>
                      <span className="font-medium text-text capitalize">{formData.urgency}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <span className="text-muted">Name</span>
                        <span className="font-medium text-text">{formData.name}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Phone</span>
                      <span className="font-medium text-text">{formData.phone}</span>
                    </div>
                    {formData.email && (
                      <div className="flex justify-between">
                        <span className="text-muted">Email</span>
                        <span className="font-medium text-text">{formData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-text mb-2">
                      Additional details (optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                      placeholder="Any additional information that would help us..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl mb-6">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                    <div className="text-sm">
                      <span className="font-medium text-emerald-800">What happens next:</span>
                      <span className="text-emerald-700"> We'll call you within 15 minutes to discuss your situation and schedule a free on-site assessment.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="px-8 py-6 bg-slate-50 border-t border-gray-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="text-muted hover:text-text font-medium"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    disabled={!canProceed()}
                    className={!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    Continue
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                ) : (
                  <Button variant="primary">
                    <Send size={18} className="mr-2" />
                    Submit Request
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Box */}
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="text-rose-500" size={24} />
                <span className="font-semibold text-rose-800">Water Emergency?</span>
              </div>
              <p className="text-sm text-rose-700 mb-4">
                Don't wait—call us now for immediate dispatch.
              </p>
              <a
                href="tel:8774970007"
                className="block w-full bg-rose-500 text-white text-center py-3 rounded-xl font-semibold hover:bg-rose-600 transition-colors"
              >
                (877) 497-0007
              </a>
            </div>

            {/* Trust Signals */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-text mb-4">Why Flood Doctor?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                  <span className="text-muted">60-minute response guarantee</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                  <span className="text-muted">Free, no-obligation estimates</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                  <span className="text-muted">Direct insurance billing</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                  <span className="text-muted">IICRC certified technicians</span>
                </li>
              </ul>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="font-semibold text-text">4.9 out of 5</div>
              <div className="text-sm text-muted">Based on 500+ reviews</div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-text mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-3 text-sm">
                <a href="mailto:info@flood.doctor" className="flex items-center gap-3 text-muted hover:text-primary">
                  <Mail size={16} />
                  info@flood.doctor
                </a>
                <div className="flex items-start gap-3 text-muted">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>123 Main Street<br />Fairfax, VA 22030</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <Clock size={16} />
                  24/7 Emergency Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactDevC;
