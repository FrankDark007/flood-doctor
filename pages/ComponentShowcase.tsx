import { useState } from 'react';
import { Droplets, Wind, Bug, Flame, Home, Building2, Shield, Clock } from 'lucide-react';

// CTA Components
import CTADarkImmersive from '../components/variants/cta/CTADarkImmersive';
import CTAEmergency from '../components/variants/cta/CTAEmergency';
import CTAFloating from '../components/variants/cta/CTAFloating';
import CTAGradient from '../components/variants/cta/CTAGradient';
import CTALeadForm from '../components/variants/cta/CTALeadForm';
import CTAMinimal from '../components/variants/cta/CTAMinimal';
import CTAServiceSelect from '../components/variants/cta/CTAServiceSelect';
import CTASocialProof from '../components/variants/cta/CTASocialProof';
import CTASplit from '../components/variants/cta/CTASplit';
import CTATrustBar from '../components/variants/cta/CTATrustBar';

// Service Grid Components
import ServiceFeatureCards from '../components/variants/service-grid/ServiceFeatureCards';
import ServiceGridBento from '../components/variants/service-grid/ServiceGridBento';
import ServiceGridStandard from '../components/variants/service-grid/ServiceGridStandard';
import ServiceIconRail from '../components/variants/service-grid/ServiceIconRail';
import ServiceMinimalList from '../components/variants/service-grid/ServiceMinimalList';
import ServiceModal from '../components/variants/service-grid/ServiceModal';

// Sample services data for Service Grid components
const sampleServices = [
  { id: '1', title: 'Water Damage Restoration', description: 'Fast emergency response for flooding and water damage', details: 'Full details...', icon: Droplets, slug: 'water-damage' },
  { id: '2', title: 'Mold Remediation', description: 'Professional mold removal and prevention services', details: 'Full details...', icon: Bug, slug: 'mold-remediation' },
  { id: '3', title: 'Fire Damage Restoration', description: 'Complete fire and smoke damage restoration', details: 'Full details...', icon: Flame, slug: 'fire-damage' },
  { id: '4', title: 'Storm Damage Repair', description: 'Emergency storm and wind damage services', details: 'Full details...', icon: Wind, slug: 'storm-damage' },
  { id: '5', title: 'Residential Services', description: 'Home restoration and repair services', details: 'Full details...', icon: Home, slug: 'residential' },
  { id: '6', title: 'Commercial Services', description: 'Business and commercial property restoration', details: 'Full details...', icon: Building2, slug: 'commercial' },
];

type TabType = 'cta' | 'service-grid';

export default function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('cta');
  const [selectedService, setSelectedService] = useState<typeof sampleServices[0] | null>(null);

  const handleServiceClick = (service: typeof sampleServices[0]) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Component Showcase</h1>
          <p className="text-gray-400">Preview CTA and Service Grid variants</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('cta')}
              className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === 'cta'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              CTA Variants (10)
            </button>
            <button
              onClick={() => setActiveTab('service-grid')}
              className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === 'service-grid'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Service Grid Variants (6)
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        {activeTab === 'cta' && (
          <div className="space-y-12">
            <ComponentSection title="1. CTA Minimal" description="Clean, simple call-to-action">
              <CTAMinimal />
            </ComponentSection>

            <ComponentSection title="2. CTA Gradient" description="Gradient background banner">
              <CTAGradient />
            </ComponentSection>

            <ComponentSection title="3. CTA Emergency" description="Urgent emergency-style bar">
              <CTAEmergency />
            </ComponentSection>

            <ComponentSection title="4. CTA Dark Immersive" description="Dark theme immersive CTA">
              <CTADarkImmersive />
            </ComponentSection>

            <ComponentSection title="5. CTA Split" description="Split layout with image">
              <CTASplit />
            </ComponentSection>

            <ComponentSection title="6. CTA Floating" description="Floating card style">
              <CTAFloating />
            </ComponentSection>

            <ComponentSection title="7. CTA Lead Form" description="Lead generation form">
              <CTALeadForm />
            </ComponentSection>

            <ComponentSection title="8. CTA Social Proof" description="With testimonials/reviews">
              <CTASocialProof />
            </ComponentSection>

            <ComponentSection title="9. CTA Service Select" description="Service selection dropdown">
              <CTAServiceSelect />
            </ComponentSection>

            <ComponentSection title="10. CTA Trust Bar" description="Trust indicators and badges">
              <CTATrustBar />
            </ComponentSection>
          </div>
        )}

        {activeTab === 'service-grid' && (
          <div className="space-y-12">
            <ComponentSection title="1. Service Grid Standard" description="Classic grid layout">
              <ServiceGridStandard services={sampleServices} onServiceClick={handleServiceClick} />
            </ComponentSection>

            <ComponentSection title="2. Service Grid Bento" description="Bento box style layout">
              <ServiceGridBento services={sampleServices} onServiceClick={handleServiceClick} />
            </ComponentSection>

            <ComponentSection title="3. Service Feature Cards" description="Feature-focused cards">
              <ServiceFeatureCards services={sampleServices} onServiceClick={handleServiceClick} />
            </ComponentSection>

            <ComponentSection title="4. Service Icon Rail" description="Horizontal icon strip">
              <ServiceIconRail services={sampleServices} onServiceClick={handleServiceClick} />
            </ComponentSection>

            <ComponentSection title="5. Service Minimal List" description="Simple list layout">
              <ServiceMinimalList services={sampleServices} onServiceClick={handleServiceClick} />
            </ComponentSection>

            <ComponentSection title="6. Service Modal" description="Modal-based service details">
              <div className="bg-white p-8 rounded-lg">
                <p className="text-gray-500 mb-4">Click a service above to see the modal</p>
                {selectedService && (
                  <ServiceModal
                    service={selectedService}
                    isOpen={!!selectedService}
                    onClose={() => setSelectedService(null)}
                  />
                )}
              </div>
            </ComponentSection>
          </div>
        )}
      </div>
    </div>
  );
}

function ComponentSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}
