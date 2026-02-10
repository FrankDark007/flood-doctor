import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Shield,
  FileText,
  ArrowRight,
  Activity
} from 'lucide-react';

const MoldPreventionGuide: React.FC = () => {
  const faqs = [
    {
      question: "How quickly does mold grow after water damage?",
      answer: "Mold spores can begin colonizing damp materials within 24-48 hours under ideal conditions (warm temperatures, high humidity, organic materials). Visible mold growth typically appears within 3-7 days if the area remains wet. This is why professional water damage restoration emphasizes rapid drying—getting materials dry within 48-72 hours dramatically reduces mold risk."
    },
    {
      question: "Can I prevent mold growth myself after water damage?",
      answer: "For minor spills (less than 10 sq ft of clean water), you can prevent mold by immediately drying the area with fans and dehumidifiers, removing wet materials, and monitoring for musty odors. However, for larger areas, contaminated water, or water that's been sitting for more than 24 hours, professional restoration is strongly recommended to ensure complete drying and prevent hidden mold."
    },
    {
      question: "What are the first signs of mold after water damage?",
      answer: "Early warning signs include: musty or earthy odors (even without visible mold), increased allergy symptoms, visible discoloration on walls/ceilings (gray, green, black, or white patches), peeling paint or wallpaper, and warped or buckled flooring. If you notice any of these signs after water damage, have the area inspected promptly."
    },
    {
      question: "Does running AC prevent mold after water damage?",
      answer: "Air conditioning helps by reducing humidity, but it's not sufficient alone. AC typically maintains 40-60% relative humidity, but wet building materials can retain moisture even at low ambient humidity. Professional drying uses industrial dehumidifiers and air movers that create conditions (below 50% RH at the material surface) that actually extract moisture from materials."
    },
    {
      question: "Will mold grow behind walls after a leak?",
      answer: "Yes, wall cavities are high-risk areas for mold because they trap moisture, have poor airflow, and contain organic materials (paper-faced drywall, wood framing). Water that enters wall cavities from leaks or flooding can create ideal mold conditions that remain hidden for weeks or months. Professional restoration includes moisture mapping and cavity drying to address this risk."
    },
    {
      question: "How long should I run dehumidifiers after water damage?",
      answer: "Industrial dehumidifiers should run continuously until materials reach their dry standard—typically 3-5 days for moderate damage, longer for severe cases. The key metric isn't time but moisture readings. Materials should reach equilibrium moisture content (EMC) appropriate for your climate, verified with a moisture meter, before equipment is removed."
    },
    {
      question: "Does bleach kill mold and prevent regrowth?",
      answer: "Bleach can kill surface mold on non-porous materials, but it doesn't penetrate porous materials (wood, drywall) where mold roots grow, and it doesn't prevent regrowth if moisture remains. Professional mold remediation uses EPA-registered antimicrobials, removes affected materials when necessary, and addresses the moisture source—not just surface treatment."
    },
    {
      question: "Is mold covered by homeowners insurance?",
      answer: "Mold coverage varies by policy. Many policies cover mold that results from a 'covered peril' (like a burst pipe) but exclude mold from maintenance neglect or flooding. Coverage limits for mold are often capped at $5,000-$10,000. Review your policy's mold exclusions and consider adding a mold endorsement for better protection."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const timeline = [
    {
      time: "0-24 Hours",
      status: "Critical Window",
      color: "green",
      events: [
        "Water begins absorbing into porous materials",
        "Mold spores (always present in air) land on wet surfaces",
        "Bacteria begin multiplying in standing water",
        "Professional extraction should begin immediately"
      ]
    },
    {
      time: "24-48 Hours",
      status: "High Risk",
      color: "yellow",
      events: [
        "Mold spores begin germinating on wet organic materials",
        "Musty odors may become noticeable",
        "Drywall, wood, and carpet padding show damage",
        "Secondary damage costs increase significantly"
      ]
    },
    {
      time: "48-72 Hours",
      status: "Mold Growth Begins",
      color: "orange",
      events: [
        "Visible mold colonies start forming in hidden areas",
        "Structural materials weaken from prolonged moisture",
        "Contamination spreads through HVAC if running",
        "Remediation costs may now exceed restoration costs"
      ]
    },
    {
      time: "1-2 Weeks",
      status: "Established Infestation",
      color: "red",
      events: [
        "Mold spreads to adjacent materials and rooms",
        "Spore counts in air increase dramatically",
        "Health symptoms may appear in occupants",
        "Full mold remediation now required"
      ]
    }
  ];

  const preventionSteps = [
    {
      icon: Clock,
      title: "Extract Water Within 24 Hours",
      description: "Time is the most critical factor. Get standing water out immediately using pumps, wet vacuums, or professional extraction equipment.",
      priority: "Critical"
    },
    {
      icon: Wind,
      title: "Maximize Airflow",
      description: "Open windows (weather permitting), run fans, and create cross-ventilation. Air movement accelerates evaporation from surfaces.",
      priority: "Critical"
    },
    {
      icon: Droplets,
      title: "Deploy Dehumidifiers",
      description: "Reduce ambient humidity below 50%. One residential dehumidifier handles ~500 sq ft; larger areas need multiple units or commercial equipment.",
      priority: "Critical"
    },
    {
      icon: Thermometer,
      title: "Maintain Warm Temperatures",
      description: "Keep the area between 70-90°F. Warmer air holds more moisture and accelerates drying. Don't overcool with AC.",
      priority: "Important"
    },
    {
      icon: Eye,
      title: "Remove Wet Materials",
      description: "Pull up saturated carpet and pad. Remove wet insulation. Cut out water-damaged drywall (flood cuts 12-24\" above water line).",
      priority: "Important"
    },
    {
      icon: Shield,
      title: "Apply Antimicrobial Treatment",
      description: "Treat exposed framing and subfloor with EPA-registered antimicrobial to inhibit mold growth during the drying period.",
      priority: "Recommended"
    }
  ];

  const warningSignsList = [
    { sign: "Musty, earthy, or damp odor", severity: "Early Warning" },
    { sign: "Visible discoloration (any color) on surfaces", severity: "Active Growth" },
    { sign: "Peeling, bubbling, or cracking paint", severity: "Moisture Present" },
    { sign: "Warped or buckled flooring", severity: "Moisture Present" },
    { sign: "Increased allergy or respiratory symptoms", severity: "Air Quality Issue" },
    { sign: "Condensation on windows or cold surfaces", severity: "High Humidity" },
    { sign: "Staining or water marks on ceilings/walls", severity: "Leak Present" },
    { sign: "Soft or spongy drywall when pressed", severity: "Active Moisture" }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Prevention After Water Damage: Complete Guide"
        description="How to prevent mold growth after water damage. Timeline, warning signs, prevention steps, and when to call professionals. Act within 24-48 hours."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Mold Prevention', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle size={14} /> Time-Sensitive
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Preventing Mold After Water Damage
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Mold can begin growing within 24-48 hours of water damage. Understanding the timeline and taking immediate action is essential to avoid costly remediation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Emergency: (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg" className="hidden md:inline-flex">
                Request Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Mold Growth Timeline */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Mold Growth Timeline After Water Damage
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding how quickly mold develops helps you prioritize response. Here's what happens when water damage isn't addressed.
              </p>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-green-300 via-yellow-300 via-orange-300 to-red-400 hidden md:block"></div>

                <div className="space-y-8">
                  {timeline.map((phase, i) => (
                    <div key={i} className="relative flex gap-6 md:gap-8">
                      {/* Timeline marker */}
                      <div className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center shrink-0 z-10 shadow-lg ${
                        phase.color === 'green' ? 'bg-green-500' :
                        phase.color === 'yellow' ? 'bg-yellow-500' :
                        phase.color === 'orange' ? 'bg-orange-500' :
                        'bg-red-500'
                      }`}>
                        <Clock size={20} className="text-white" />
                      </div>

                      {/* Content card */}
                      <div className={`flex-1 rounded-2xl p-6 border ${
                        phase.color === 'green' ? 'bg-green-50/50 border-green-200' :
                        phase.color === 'yellow' ? 'bg-yellow-50/50 border-yellow-200' :
                        phase.color === 'orange' ? 'bg-orange-50/50 border-orange-200' :
                        'bg-red-50/50 border-red-200'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                          <span className={`text-lg font-bold ${
                            phase.color === 'green' ? 'text-green-700' :
                            phase.color === 'yellow' ? 'text-yellow-700' :
                            phase.color === 'orange' ? 'text-orange-700' :
                            'text-red-700'
                          }`}>
                            {phase.time}
                          </span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            phase.color === 'green' ? 'bg-green-100 text-green-800' :
                            phase.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                            phase.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {phase.status}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {phase.events.map((event, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                                phase.color === 'green' ? 'bg-green-500' :
                                phase.color === 'yellow' ? 'bg-yellow-500' :
                                phase.color === 'orange' ? 'bg-orange-500' :
                                'bg-red-500'
                              }`}></span>
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Prevention Steps */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                6 Steps to Prevent Mold Growth
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Take these actions immediately after water damage to minimize mold risk.
              </p>

              <div className="space-y-4">
                {preventionSteps.map((step, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <step.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium text-text">{step.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            step.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                            step.priority === 'Important' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {step.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning Signs */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Warning Signs of Mold Growth
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Watch for these indicators that mold may be developing after water damage.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {warningSignsList.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                    <AlertTriangle size={18} className={`shrink-0 ${
                      item.severity === 'Active Growth' ? 'text-red-500' :
                      item.severity === 'Air Quality Issue' ? 'text-orange-500' :
                      'text-yellow-500'
                    }`} />
                    <div className="flex-1">
                      <div className="text-sm text-text">{item.sign}</div>
                      <div className={`text-xs ${
                        item.severity === 'Active Growth' ? 'text-red-600' :
                        item.severity === 'Air Quality Issue' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`}>{item.severity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Call Professionals */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                When to Call Professionals
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Some situations require professional water damage restoration to prevent mold.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50/50 rounded-2xl p-6 border border-red-200">
                  <h3 className="font-medium text-red-800 mb-4 flex items-center gap-2">
                    <XCircle size={20} /> Call Immediately If:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Water has been standing for 24+ hours",
                      "Sewage or contaminated water is involved",
                      "Multiple rooms or levels are affected",
                      "Water entered wall cavities or subfloor",
                      "You smell musty odors",
                      "HVAC system was running during the event",
                      "Valuable contents need protection"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50/50 rounded-2xl p-6 border border-green-200">
                  <h3 className="font-medium text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} /> DIY May Be OK If:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Clean water only (no sewage/gray water)",
                      "Less than 10 sq ft affected",
                      "Caught within a few hours",
                      "No carpet or porous materials involved",
                      "Area can be completely dried in 24-48 hours",
                      "No water entered walls or under floors",
                      "You have proper equipment (dehumidifier, fans)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Mold Prevention FAQ"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Emergency CTA */}
              <div className="bg-[#d93025] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="flex items-center gap-2 mb-4">
                  <Clock size={20} />
                  <span className="text-sm font-medium">Time-Critical</span>
                </div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  24/7 Emergency Response
                </h3>
                <p className="text-red-100 text-sm leading-relaxed mb-8 relative z-10">
                  Mold can start growing in 24-48 hours. Don't wait—call now for rapid water extraction and professional drying.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-red-600 border-none hover:bg-red-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>

              {/* Key Stats */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <Activity size={18} className="text-primary" />
                  Key Mold Facts
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Mold starts growing</span>
                    <span className="font-medium text-orange-600">24-48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Safe drying window</span>
                    <span className="font-medium text-green-600">48-72 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Ideal indoor humidity</span>
                    <span className="font-medium text-text">30-50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Remediation cost</span>
                    <span className="font-medium text-text">$1,500-$9,000+</span>
                  </div>
                </div>
              </div>

              {/* What We Do */}
              <div className="bg-blue-50 rounded-[24px] p-6 border border-blue-100">
                <h4 className="font-medium text-text mb-4">How Flood Doctor Prevents Mold</h4>
                <ul className="space-y-3">
                  {[
                    "Rapid water extraction (60-min response)",
                    "Industrial dehumidifiers & air movers",
                    "Moisture mapping of hidden areas",
                    "Antimicrobial treatment application",
                    "Daily monitoring until dry standard met",
                    "Documentation for insurance claims"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-900">
                      <CheckCircle2 size={14} className="text-blue-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Checklists
                  </a>
                  <a href="/resources/water-damage-cost-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Restoration Cost Guide
                  </a>
                  <a href="/services/residential/restoration-services/mold-remediation/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Mold Remediation Services
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Let Water Become a Mold Problem
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            The clock starts the moment water enters your property. Call now for rapid response that stops mold before it starts.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-orange-600 border-none hover:bg-orange-50">
            <Phone size={20} className="mr-2" />
            Call (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default MoldPreventionGuide;
