import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import ThermalScanIllustration from '../../components/ui/technology/ThermalScanIllustration';
import SensorNetworkIllustration from '../../components/ui/technology/SensorNetworkIllustration';
import DocumentationTimelineIllustration from '../../components/ui/technology/DocumentationTimelineIllustration';
import ThreeDWalkthroughIllustration from '../../components/ui/technology/ThreeDWalkthroughIllustration';
import OfficeDashboardGridIllustration from '../../components/ui/technology/OfficeDashboardGridIllustration';
import PortalMoistureMapsIllustration from '../../components/ui/technology/portal/PortalMoistureMapsIllustration';
import PortalDeliverablesInteractive from '../../components/sections/PortalDeliverablesInteractive';
import { ArrowRight, Thermometer, Radio, FileCheck, Scan, BarChart3, Map } from 'lucide-react';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import Hero from '../../components/sections/Hero';
import { TechnologyHeroAnimation } from '../../components/graphics';

// --- DATA: FAQ ---
const TECHNOLOGY_FAQ = [
  {
    question: "How does technology help dry my home faster?",
    answer: "We measure indoor humidity, temperature, and drying power so we can set the right equipment and airflow, then adjust as conditions change. That helps avoid stalled drying and reduces unnecessary runtime."
  },
  {
    question: "Can you find moisture behind walls and under floors without tearing everything out?",
    answer: "Often, yes. We use thermal imaging and moisture meters to locate likely wet zones, then confirm with readings. If a material cannot dry safely in place, we will explain why before any invasive steps."
  },
  {
    question: "Will this reduce the chance of mold?",
    answer: "Fast extraction and controlled drying reduce the chance of moisture lingering, which reduces mold risk. If growth is present or suspected, we recommend the safest next step based on what we find on-site."
  },
  {
    question: "How do you know when drying is actually finished?",
    answer: "We track readings over time and look for stable, improving conditions, not just “it feels dry.” Equipment comes out when materials meet a dry standard and progress is verified."
  },
  {
    question: "Does monitoring help control cost?",
    answer: "Yes. Better measurements reduce surprises and help keep the scope focused on what is actually wet. It also helps avoid unnecessary equipment and avoids leaving hidden moisture behind."
  },
  {
    question: "Will the equipment be loud, and how long will it be in my home?",
    answer: "Drying equipment can be noisy, especially air movers. We use readings to keep drying efficient and remove equipment when conditions meet the goal, not later than necessary."
  },
  {
    question: "Is this safe for kids and pets?",
    answer: "We keep work zones clear, minimize trip hazards, and explain which areas to avoid. If air quality controls are needed, we use containment and filtration practices appropriate to the situation."
  },
  {
    question: "What will I be able to see in my portal?",
    answer: "You can access organized documentation such as photos, daily drying logs, moisture maps, and a final verification summary. Portal features vary by job scope, some items may not apply to every project."
  }
];

// --- DATA: SCHEMA ---
const TECHNOLOGY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://flood.doctor/resources/technology/#webpage",
      "url": "https://flood.doctor/resources/technology/",
      "name": "Restoration Technology and Drying Monitoring",
      "description": "See how Flood Doctor uses thermal imaging, moisture mapping, and real-time monitoring to dry homes efficiently across Northern Virginia, Maryland, and DC. Clear updates, organized documentation, and a client portal.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://flood.doctor/#website",
        "url": "https://flood.doctor/",
        "name": "Flood Doctor"
      },
      "about": {
        "@type": "LocalBusiness",
        "@id": "https://flood.doctor/#localbusiness",
        "name": "Flood Doctor",
        "url": "https://flood.doctor/",
        "telephone": "+1-877-497-0007"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://flood.doctor/resources/technology/#faq",
      "url": "https://flood.doctor/resources/technology/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does technology help dry my home faster?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We measure indoor humidity, temperature, and drying power so we can set the right equipment and airflow, then adjust as conditions change. That helps avoid stalled drying and reduces unnecessary runtime."
          }
        },
        {
          "@type": "Question",
          "name": "Can you find moisture behind walls and under floors without tearing everything out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. We use thermal imaging and moisture meters to locate likely wet zones, then confirm with readings. If a material cannot dry safely in place, we will explain why before any invasive steps."
          }
        },
        {
          "@type": "Question",
          "name": "Will this reduce the chance of mold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fast extraction and controlled drying reduce the chance of moisture lingering, which reduces mold risk. If growth is present or suspected, we recommend the safest next step based on what we find on-site."
          }
        },
        {
          "@type": "Question",
          "name": "How do you know when drying is actually finished?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track readings over time and look for stable, improving conditions, not just “it feels dry.” Equipment comes out when materials meet a dry standard and progress is verified."
          }
        },
        {
          "@type": "Question",
          "name": "Does monitoring help control cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Better measurements reduce surprises and help keep the scope focused on what is actually wet. It also helps avoid unnecessary equipment and avoids leaving hidden moisture behind."
          }
        },
        {
          "@type": "Question",
          "name": "Will the equipment be loud, and how long will it be in my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Drying equipment can be noisy, especially air movers. We use readings to keep drying efficient and remove equipment when conditions meet the goal, not later than necessary."
          }
        },
        {
          "@type": "Question",
          "name": "Is this safe for kids and pets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We keep work zones clear, minimize trip hazards, and explain which areas to avoid. If air quality controls are needed, we use containment and filtration practices appropriate to the situation."
          }
        },
        {
          "@type": "Question",
          "name": "What will I be able to see in my portal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can access organized documentation such as photos, daily drying logs, moisture maps, and a final verification summary. Portal features vary by job scope, some items may not apply to every project."
          }
        }
      ]
    }
  ]
};


const Technology: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Restoration Technology and Drying Monitoring" 
        description="See how Flood Doctor uses thermal imaging, moisture mapping, and real-time monitoring to dry homes efficiently across Northern Virginia, Maryland, and DC. Clear updates, organized documentation, and a client portal."
        schema={TECHNOLOGY_SCHEMA}
      />

      {/* 1. Hero Section */}
      <Hero 
        title="Restoration Technology That Dries Your Home Faster"
        subtitle="We use thermal imaging, moisture mapping, and real-time monitoring to find hidden moisture, control drying conditions, and keep you informed from start to finish."
        visual={<TechnologyHeroAnimation />}
      />

      {/* 2. Find Hidden Moisture (Thermal) */}
      <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                      <ThermalScanIllustration />
                  </div>
                  <div className="lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                          <Thermometer size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                          Find Hidden Moisture Before It Becomes Mold
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          Water often spreads into wall cavities, ceilings, and flooring layers where you cannot see it. We use multiple tools to locate wet zones early so drying can start in the right places.
                      </p>
                      
                      <div className="space-y-6">
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Thermal Imaging Moisture Detection</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  Thermal imaging helps us spot temperature patterns that often correlate with moisture. We use it as a guide, then confirm conditions with moisture readings before making decisions.
                              </p>
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moisture Meters and Non-Invasive Scanning</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  Meters help confirm what materials are actually wet and how they are changing. This reduces guesswork and helps avoid unnecessary disruption when materials can dry in place.
                              </p>
                          </div>
                          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                              <h4 className="font-bold text-gray-900 mb-2">Why hidden moisture matters</h4>
                              <ul className="space-y-2">
                                  <li className="flex items-start gap-3">
                                      <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                                      <span className="text-gray-600 text-sm">Reduces the chance of moisture lingering.</span>
                                  </li>
                                  <li className="flex items-start gap-3">
                                      <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                                      <span className="text-gray-600 text-sm">Helps prevent avoidable mold risk.</span>
                                  </li>
                                  <li className="flex items-start gap-3">
                                      <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                                      <span className="text-gray-600 text-sm">Avoids surprises behind walls and floors.</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. Control Drying Conditions (Sensors) */}
      <section className="py-20 md:py-24 bg-subtle/30 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
                  <div className="lg:col-span-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                          <Radio size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                          Control Drying Conditions With Real-Time Data
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          Drying is controlled by the indoor environment, not just fans. We track key conditions and adjust equipment and airflow when progress slows.
                      </p>
                      
                      <div className="space-y-6">
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">What we measure: RH, temperature, dew point, and drying power (GPP)</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  Humidity and temperature affect how quickly moisture leaves materials. Dew point and GPP help show drying power so we can tell whether conditions are improving or stalling. (Numbers shown in visuals are illustrative examples.)
                              </p>
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Room-by-room sensor monitoring</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  Wireless sensors can help us track conditions across key areas of the home. This helps us keep drying consistent and catch changes early.
                              </p>
                          </div>
                          <div className="bg-white p-6 rounded-xl border border-gray-200">
                              <h4 className="font-bold text-gray-900 mb-2">What this means for your timeline</h4>
                              <p className="text-gray-600 text-sm">
                                  Instead of guessing, we watch trends. When conditions improve steadily, we know we are moving toward a clear finish line for equipment removal.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="lg:col-span-6 mt-12 lg:mt-0">
                      <SensorNetworkIllustration />
                  </div>
              </div>
          </div>
      </section>

      {/* 4. Moisture Maps */}
      <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                      <div className="bg-subtle rounded-xl overflow-hidden p-6">
                          <PortalMoistureMapsIllustration />
                          <div className="text-center mt-3 text-xs text-gray-400 italic">Illustrative example</div>
                      </div>
                  </div>
                  <div className="lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                          <Map size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                          Moisture Maps That Show Where Water Traveled
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          Moisture mapping helps visualize which areas were affected and how conditions change over time. It also helps focus effort on the areas that matter most.
                      </p>
                      
                      <div className="space-y-6">
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wet, damp, and dry zones</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  We mark areas by intensity so you can see what was impacted, not just what was visible.
                              </p>
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tracking progress over time</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  As drying continues, maps and readings confirm whether moisture is moving in the right direction.
                              </p>
                          </div>
                          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                              <h4 className="font-bold text-gray-900 mb-2">Fewer surprises behind walls and floors</h4>
                              <p className="text-gray-600 text-sm">
                                  Better visibility reduces the odds of hidden wet pockets being missed.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. Documentation */}
      <section className="py-20 md:py-24 bg-subtle/30 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto">
                  <FileCheck size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                  Documentation You Can Rely On
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                  Clear documentation keeps the project organized and reduces confusion. You get consistent updates and an easy way to review what happened.
              </p>
              
              <div className="mb-16">
                  <DocumentationTimelineIllustration />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-2">Photos, daily logs, and equipment notes</h3>
                      <p className="text-sm text-gray-600">We document key milestones with photos and concise notes. Where applicable, we track drying conditions over time and record equipment placement.</p>
                  </div>
                   <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-2">Final verification summary</h3>
                      <p className="text-sm text-gray-600">At closeout, we summarize what was done and what was verified. This creates a clearer handoff to repairs and rebuild planning.</p>
                  </div>
                   <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Organized and easy to access</h4>
                      <p className="text-sm text-gray-600">Everything is kept in one place so you are not hunting through texts and email threads.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. 3D Walkthrough Scans */}
      <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                      <ThreeDWalkthroughIllustration />
                  </div>
                  <div className="lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                          <Scan size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                          3D Walkthrough Scans for Complex Losses
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          Some projects benefit from a 3D walkthrough record of the affected areas. This provides fuller context than photos alone.
                      </p>
                      
                      <div className="space-y-6 mb-8">
                         <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Before, during, and after snapshots</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  A walkthrough can capture condition changes at key points in the project lifecycle.
                              </p>
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clear visual record of the affected areas</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  This is especially useful for complex layouts, multi-room losses, or when multiple stakeholders need clarity.
                              </p>
                          </div>
                          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                              <h4 className="font-bold text-gray-900 mb-2">Helpful when decisions move fast</h4>
                              <p className="text-gray-600 text-sm">
                                  A clear visual record helps people align quickly on scope and progress.
                              </p>
                          </div>
                      </div>
                      
                      {/* Why 3D Matters Block */}
                      <div className="bg-white p-8 rounded-2xl border border-gray-200">
                         <h3 className="font-semibold text-gray-900 mb-4 text-lg">Why 3D walkthroughs matter</h3>
                         <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <ArrowRight size={20} className="text-primary mt-0.5 shrink-0" />
                                <span className="text-gray-700 text-sm leading-relaxed"><strong>Full context:</strong> Captures the condition of the loss in a way photos alone can miss.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight size={20} className="text-primary mt-0.5 shrink-0" />
                                <span className="text-gray-700 text-sm leading-relaxed"><strong>Before, during, after:</strong> Creates a clear record of progress and completion.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight size={20} className="text-primary mt-0.5 shrink-0" />
                                <span className="text-gray-700 text-sm leading-relaxed"><strong>Faster decisions:</strong> Helps stakeholders review scope and documentation efficiently.</span>
                            </li>
                         </ul>
                      </div>

                  </div>
              </div>
          </div>
      </section>

      {/* 7. Centralized Office Monitoring */}
      <section className="py-20 md:py-24 bg-subtle/30 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
                  <div className="lg:col-span-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                          <BarChart3 size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                          Centralized Office Monitoring
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          Monitoring helps us spot stalls early and keep the job moving. We use trends to decide when adjustments are needed.
                      </p>
                      <div className="space-y-6">
                           <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">We watch trends and catch stalls early</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  When readings flatten or conditions change, we can respond quickly instead of losing time.
                              </p>
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Alerts when conditions change</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  If a sensor goes offline or conditions shift, we can investigate and adjust the plan.
                              </p>
                          </div>
                          <div className="bg-white p-6 rounded-xl border border-gray-200">
                              <h4 className="font-bold text-gray-900 mb-2">Adjustments without delays</h4>
                              <p className="text-gray-600 text-sm">
                                  The goal is steady progress with fewer surprises.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="lg:col-span-6 mt-12 lg:mt-0">
                      <OfficeDashboardGridIllustration />
                  </div>
              </div>
          </div>
      </section>

      {/* 8. Portal Interactive Grid (What You Get in Your Portal) */}
      <PortalDeliverablesInteractive />

      {/* 9. What This Means for You */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">What This Means for You</h2>
             </div>
             
             <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="flex gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                       <div>
                           <h4 className="font-bold text-gray-900 mb-1">Lower mold risk</h4>
                           <p className="text-gray-600 text-sm">We find hidden moisture early and keep conditions controlled.</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                       <div>
                           <h4 className="font-bold text-gray-900 mb-1">Fewer surprise costs</h4>
                           <p className="text-gray-600 text-sm">Better measurements mean fewer “we found more later” moments.</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                       <div>
                           <h4 className="font-bold text-gray-900 mb-1">Clearer timeline</h4>
                           <p className="text-gray-600 text-sm">You get visible progress and a defined finish line before equipment comes out.</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                       <div>
                           <h4 className="font-bold text-gray-900 mb-1">Less disruption</h4>
                           <p className="text-gray-600 text-sm">We adjust equipment and airflow based on data, so we’re not overdoing it longer than needed.</p>
                       </div>
                   </div>
                   <div className="flex gap-4 md:col-span-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                       <div>
                           <h4 className="font-bold text-gray-900 mb-1">Safer for kids and pets</h4>
                           <p className="text-gray-600 text-sm">We prioritize safe work zones, clear pathways, and cleaner air practices when needed.</p>
                       </div>
                   </div>
                </div>
             </div>

             <p className="text-center text-sm text-gray-400 mt-6">
                Every home is different. Drying time depends on materials, saturation, and conditions.
             </p>
          </div>
      </section>

      {/* 10. FAQ */}
      <GoogleStyleFAQ data={TECHNOLOGY_FAQ} title="Technology FAQ" />

      {/* 11. Final CTA (Desktop Only) */}
      <section className="py-20 bg-white border-t border-gray-100 text-center hidden md:block">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Request Service</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                 <Button to="/request/" variant="primary" className="h-14 px-8 text-lg">Request Services</Button>
                 <Button href="tel:8774970007" variant="secondary" className="h-14 px-8 text-lg">Call (877) 497-0007</Button>
            </div>
         </div>
      </section>
      
    </main>
  );
};

export default Technology;