import React from 'react';
import PageMeta from '../components/ui/PageMeta';

// Service Icons
import {
  WaterDamageIcon,
  FloodCleanupIcon,
  MoldIcon,
  FireSmokeIcon,
  SewageIcon,
  DryingIcon,
  EmergencyIcon,
  BasementIcon,
  BurstPipeIcon,
  RoofLeakIcon,
  StormDamageIcon,
  OdorRemovalIcon,
  ContentsPackoutIcon,
  CommercialIcon,
  ResidentialIcon,
  Clock24Icon,
  CertifiedIcon,
  InsuranceIcon,
  TechnologyIcon,
  MoistureMeterIcon,
} from '../components/icons';

// Animated Components
import {
  AnimatedWaterWave,
  AnimatedWaterDroplet,
  AnimatedRipple,
  AnimatedWaterSpinner,
} from '../components/icons';

// Process Icons
import {
  CallIcon,
  DispatchIcon,
  AssessmentIcon,
  RestorationIcon,
  Timer60Icon,
} from '../components/icons';

// Feature Illustrations
import {
  MonitoringDashboardIllustration,
  InsuranceCoordinationIllustration,
  CommunicationTimelineIllustration,
  FleetDispatchIllustration,
} from '../components/icons';

// Hero Graphics
import {
  HomeHeroGraphic,
  ServicesHeroGraphic,
  AboutHeroGraphic,
  ContactHeroGraphic,
} from '../components/icons';

// Google Style Graphics
import {
  AssessmentDashboardGraphic,
  FleetMapGraphic,
  ProcessStepsGraphic,
  TechnologyStackGraphic,
  HeroWaveBackground,
  FloatingCirclesBackground,
  WaterRippleBackground,
  GradientMeshBackground,
} from '../components/graphics';

// NEW: Rapid Response Hero Graphics
import {
  RapidResponseHero,
  RapidResponseCompact,
  ResponseTimeBadge,
} from '../components/graphics';

// NEW: DMV Service Area Maps
import {
  DMVServiceAreaMap,
  DMVMapCompact,
  DMVRouteMap,
  DMVIsometricMap,
} from '../components/graphics';

// NEW: City Maps
import {
  CityMap,
  CityBadge,
  CityListMap,
  novaCities,
} from '../components/graphics';

// NEW: Inspection & Assessment Graphics
import {
  MoistureAssessmentDashboard,
  InspectionChecklistGraphic,
  RoomAnalysisCards,
  MoistureBarChart,
} from '../components/graphics';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-[32px] font-normal text-[#202124] mb-8 pb-4 border-b border-[#dadce0]">
    {children}
  </h2>
);

const IconCard: React.FC<{ name: string; children: React.ReactNode }> = ({ name, children }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-[#dadce0] hover:shadow-lg transition-shadow">
    <div className="mb-4">{children}</div>
    <span className="text-sm text-[#5f6368] text-center">{name}</span>
  </div>
);

const DesignDemo: React.FC = () => {
  return (
    <main className="flex-grow bg-[#f8f9fa] min-h-screen">
      <PageMeta
        title="Design System Demo"
        description="Preview all design components, icons, and graphics"
      />

      {/* Header */}
      <div className="bg-white border-b border-[#dadce0]">
        <div className="max-w-[1296px] mx-auto px-6 py-12">
          <h1 className="text-[48px] font-normal text-[#202124] mb-4">
            Design System Demo
          </h1>
          <p className="text-lg text-[#5f6368] max-w-2xl">
            A comprehensive preview of all icons, graphics, and animations created for Flood Doctor.
            All components follow Google Material Design 3 principles.
          </p>
        </div>
      </div>

      <div className="max-w-[1296px] mx-auto px-6 py-12 space-y-16">

        {/* Service Icons */}
        <section>
          <SectionTitle>Service Icons (48px)</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <IconCard name="Water Damage"><WaterDamageIcon size={48} /></IconCard>
            <IconCard name="Flood Cleanup"><FloodCleanupIcon size={48} /></IconCard>
            <IconCard name="Mold"><MoldIcon size={48} /></IconCard>
            <IconCard name="Fire & Smoke"><FireSmokeIcon size={48} /></IconCard>
            <IconCard name="Sewage"><SewageIcon size={48} /></IconCard>
            <IconCard name="Structural Drying"><DryingIcon size={48} /></IconCard>
            <IconCard name="Emergency"><EmergencyIcon size={48} /></IconCard>
            <IconCard name="Basement"><BasementIcon size={48} /></IconCard>
            <IconCard name="Burst Pipe"><BurstPipeIcon size={48} /></IconCard>
            <IconCard name="Roof Leak"><RoofLeakIcon size={48} /></IconCard>
            <IconCard name="Storm Damage"><StormDamageIcon size={48} /></IconCard>
            <IconCard name="Odor Removal"><OdorRemovalIcon size={48} /></IconCard>
            <IconCard name="Contents Packout"><ContentsPackoutIcon size={48} /></IconCard>
            <IconCard name="Commercial"><CommercialIcon size={48} /></IconCard>
            <IconCard name="Residential"><ResidentialIcon size={48} /></IconCard>
            <IconCard name="24/7 Clock"><Clock24Icon size={48} /></IconCard>
            <IconCard name="Certified"><CertifiedIcon size={48} /></IconCard>
            <IconCard name="Insurance"><InsuranceIcon size={48} /></IconCard>
            <IconCard name="Technology"><TechnologyIcon size={48} /></IconCard>
            <IconCard name="Moisture Meter"><MoistureMeterIcon size={48} /></IconCard>
          </div>
        </section>

        {/* Process Icons (Animated) */}
        <section>
          <SectionTitle>Process Icons (Animated, 64px)</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <IconCard name="1. Call Us"><CallIcon size={64} animated={true} /></IconCard>
            <IconCard name="2. Dispatch"><DispatchIcon size={64} animated={true} /></IconCard>
            <IconCard name="3. Assessment"><AssessmentIcon size={64} animated={true} /></IconCard>
            <IconCard name="4. Restoration"><RestorationIcon size={64} animated={true} /></IconCard>
            <IconCard name="60-Min Timer"><Timer60Icon size={64} animated={true} /></IconCard>
          </div>
        </section>

        {/* Animated Water Components */}
        <section>
          <SectionTitle>Animated Water Components</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Water Droplet</h3>
              <div className="flex justify-center">
                <AnimatedWaterDroplet size={80} />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Water Spinner</h3>
              <div className="flex justify-center">
                <AnimatedWaterSpinner size={80} />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Ripple Effect</h3>
              <div className="flex justify-center">
                <AnimatedRipple size={120} />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6 overflow-hidden">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Water Wave</h3>
              <AnimatedWaterWave height={80} speed="normal" />
            </div>
          </div>
        </section>

        {/* Feature Illustrations */}
        <section>
          <SectionTitle>Feature Illustrations</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Monitoring Dashboard</h3>
              <MonitoringDashboardIllustration className="w-full h-auto" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Insurance Coordination</h3>
              <InsuranceCoordinationIllustration className="w-full h-auto" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Communication Timeline</h3>
              <CommunicationTimelineIllustration className="w-full h-auto" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Fleet Dispatch</h3>
              <FleetDispatchIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Hero Graphics */}
        <section>
          <SectionTitle>Hero Graphics</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Home Hero</h3>
              <HomeHeroGraphic className="w-full h-auto max-h-[400px]" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Services Hero</h3>
              <ServicesHeroGraphic className="w-full h-auto max-h-[400px]" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">About Hero</h3>
              <AboutHeroGraphic className="w-full h-auto max-h-[400px]" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Contact Hero</h3>
              <ContactHeroGraphic className="w-full h-auto max-h-[400px]" />
            </div>
          </div>
        </section>

        {/* Google Style Graphics */}
        <section>
          <SectionTitle>Google Material Design 3 Graphics</SectionTitle>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Assessment Dashboard (Animated)</h3>
              <AssessmentDashboardGraphic className="w-full h-auto" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Fleet Map (Animated)</h3>
              <FleetMapGraphic className="w-full h-auto" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Process Steps (Animated)</h3>
              <ProcessStepsGraphic className="w-full h-auto" />
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Technology Stack (Animated)</h3>
              <TechnologyStackGraphic className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Background Patterns */}
        <section>
          <SectionTitle>Background Patterns</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-2xl border border-[#dadce0] overflow-hidden">
              <GradientMeshBackground />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#202124]">
                  Gradient Mesh Background
                </span>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl border border-[#dadce0] overflow-hidden bg-white">
              <FloatingCirclesBackground />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#202124]">
                  Floating Circles Background
                </span>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl border border-[#dadce0] overflow-hidden bg-white">
              <div className="absolute bottom-0 left-0 right-0">
                <HeroWaveBackground />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#202124]">
                  Hero Wave Background
                </span>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl border border-[#dadce0] overflow-hidden bg-[#f8f9fa] flex items-center justify-center">
              <WaterRippleBackground className="w-[200px] h-[200px]" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-[#202124]">
                  Water Ripple Background
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Rapid Response Hero Graphics */}
        <section>
          <SectionTitle>Rapid Response Hero Graphics (NEW)</SectionTitle>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Rapid Response Hero (Full Size)</h3>
              <RapidResponseHero className="w-full max-w-[500px] mx-auto h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
                <h3 className="text-lg font-medium text-[#202124] mb-4">Compact Version</h3>
                <RapidResponseCompact className="w-[200px] h-auto mx-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
                <h3 className="text-lg font-medium text-[#202124] mb-4">Response Time Badge</h3>
                <div className="flex justify-center">
                  <ResponseTimeBadge className="w-[140px] h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: DMV Service Area Maps */}
        <section>
          <SectionTitle>DMV Service Area Maps (NEW)</SectionTitle>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Full DMV Map with All Locations</h3>
              <DMVServiceAreaMap className="w-full max-w-[500px] mx-auto h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
                <h3 className="text-lg font-medium text-[#202124] mb-4">Compact Map</h3>
                <DMVMapCompact className="w-full max-w-[200px] mx-auto h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
                <h3 className="text-lg font-medium text-[#202124] mb-4">Route Animation Map</h3>
                <DMVRouteMap className="w-full max-w-[400px] mx-auto h-auto" />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Isometric 3D Map</h3>
              <DMVIsometricMap className="w-full max-w-[500px] mx-auto h-auto" />
            </div>
          </div>
        </section>

        {/* NEW: City Maps */}
        <section>
          <SectionTitle>Individual City Maps (NEW)</SectionTitle>
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-[#dadce0] p-4">
                <CityMap city="arlington" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-[#dadce0] p-4">
                <CityMap city="mclean" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-[#dadce0] p-4">
                <CityMap city="tysons" className="w-full h-auto" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {novaCities.slice(0, 6).map((city) => (
                <CityBadge key={city} city={city} className="w-full h-auto" />
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">City List Map</h3>
              <CityListMap cities={novaCities} title="Northern Virginia" className="w-full max-w-[400px] mx-auto h-auto" />
            </div>
          </div>
        </section>

        {/* NEW: Inspection & Assessment Graphics */}
        <section>
          <SectionTitle>Inspection & Assessment Graphics (NEW)</SectionTitle>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Moisture Assessment Dashboard</h3>
              <MoistureAssessmentDashboard className="w-full max-w-[500px] mx-auto h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
                <h3 className="text-lg font-medium text-[#202124] mb-4">Inspection Checklist</h3>
                <InspectionChecklistGraphic className="w-full max-w-[400px] mx-auto h-auto" />
              </div>
              <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
                <h3 className="text-lg font-medium text-[#202124] mb-4">Moisture Bar Chart</h3>
                <MoistureBarChart className="w-full max-w-[350px] mx-auto h-auto" />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#dadce0] p-6">
              <h3 className="text-lg font-medium text-[#202124] mb-4">Room Analysis Cards</h3>
              <RoomAnalysisCards className="w-full max-w-[450px] mx-auto h-auto" />
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <SectionTitle>Google Color Palette</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <div className="h-24 rounded-t-xl bg-[#4285f4]"></div>
              <div className="bg-white rounded-b-xl border border-t-0 border-[#dadce0] p-4">
                <p className="font-medium text-[#202124]">Google Blue</p>
                <p className="text-sm text-[#5f6368]">#4285f4</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-24 rounded-t-xl bg-[#34a853]"></div>
              <div className="bg-white rounded-b-xl border border-t-0 border-[#dadce0] p-4">
                <p className="font-medium text-[#202124]">Google Green</p>
                <p className="text-sm text-[#5f6368]">#34a853</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-24 rounded-t-xl bg-[#fbbc04]"></div>
              <div className="bg-white rounded-b-xl border border-t-0 border-[#dadce0] p-4">
                <p className="font-medium text-[#202124]">Google Yellow</p>
                <p className="text-sm text-[#5f6368]">#fbbc04</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-24 rounded-t-xl bg-[#ea4335]"></div>
              <div className="bg-white rounded-b-xl border border-t-0 border-[#dadce0] p-4">
                <p className="font-medium text-[#202124]">Google Red</p>
                <p className="text-sm text-[#5f6368]">#ea4335</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer spacer */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default DesignDemo;
