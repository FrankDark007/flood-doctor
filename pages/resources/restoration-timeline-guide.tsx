import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  Droplets,
  Wind,
  ClipboardCheck,
  Wrench,
  Home,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Users,
  FileText,
  Thermometer
} from 'lucide-react';

const RestorationTimelineGuide: React.FC = () => {
  const faqs = [
    {
      question: "How long does water damage restoration take on average?",
      answer: "Most water damage restoration projects take 7-14 days for drying and mitigation, followed by 2-8 weeks for reconstruction depending on the extent of damage. Minor incidents may be complete in 3-5 days, while severe flooding with structural damage can take 2-3 months from start to finish."
    },
    {
      question: "Can I stay in my home during water damage restoration?",
      answer: "It depends on the extent of damage and affected areas. If the damage is isolated to one area, you can often remain in unaffected parts of your home. However, severe flooding, Category 3 water, or extensive drying equipment may make temporary housing necessary. Your insurance policy typically covers Additional Living Expenses (ALE) if displacement is required."
    },
    {
      question: "Why does drying take so long?",
      answer: "Proper structural drying can't be rushed. Materials like concrete, hardwood, and framing lumber must be dried slowly and monitored with moisture meters to prevent warping, cracking, or mold growth. Forced drying with excessive heat can cause more damage than the water itself. Professional restoration companies follow IICRC S500 drying standards that specify safe drying rates."
    },
    {
      question: "What happens if I need to expedite the timeline?",
      answer: "While emergency extraction and initial setup can be accelerated, the structural drying process has physical limits—materials can only release moisture so fast. However, adding more equipment (dehumidifiers, air movers) and increasing monitoring frequency can optimize the timeline. Discuss expedited options with your restoration company, but never skip proper drying to save time."
    },
    {
      question: "When does the reconstruction phase begin?",
      answer: "Reconstruction cannot begin until all moisture readings are at acceptable levels, typically 12-15% for wood and drywall. This is verified with calibrated moisture meters. Starting reconstruction with elevated moisture levels leads to mold growth, warping, and material failure. Your restoration company will provide clearance documentation before rebuild begins."
    },
    {
      question: "How often will the restoration company check on progress?",
      answer: "During active drying (days 2-7), professional restoration companies visit daily to take moisture readings, adjust equipment, and monitor progress. After drying goals are met, equipment is removed and final clearance readings are documented. During reconstruction, weekly site visits are typical."
    },
    {
      question: "What causes restoration timelines to extend beyond estimates?",
      answer: "Common delays include: insurance approval bottlenecks, discovery of hidden damage during demo, material supply chain issues, scope changes requested by homeowners, and slower-than-expected drying in dense materials. Weather can also impact drying times if ambient humidity is high."
    },
    {
      question: "Do I need to be present during the entire restoration process?",
      answer: "No. You'll need to be present for the initial assessment, insurance adjuster visit, and final walkthrough. Day-to-day drying monitoring and reconstruction work doesn't require your presence, though many homeowners prefer periodic check-ins. Professional companies provide photo updates and progress reports."
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

  const timelinePhases = [
    {
      phase: "Day 1",
      title: "Emergency Response & Water Extraction",
      duration: "2-8 hours",
      color: "red",
      icon: Droplets,
      tasks: [
        "Arrive on-site within 60-90 minutes of your call",
        "Assess damage category (1, 2, or 3) and class (1-4)",
        "Stop water source if still active",
        "Extract standing water with truck-mounted or portable equipment",
        "Remove saturated materials (carpet pad, insulation, damaged drywall)",
        "Document damage with photos and moisture readings",
        "Set up initial drying equipment (air movers, dehumidifiers)"
      ],
      notes: "This is the most critical phase. Every hour of delay increases secondary damage exponentially."
    },
    {
      phase: "Days 2-3",
      title: "Drying Setup & Initial Monitoring",
      duration: "48 hours",
      color: "orange",
      icon: Wind,
      tasks: [
        "Deploy industrial dehumidifiers (refrigerant or desiccant)",
        "Position air movers for maximum airflow across wet surfaces",
        "Set up negative air machines if containment is needed",
        "Take baseline moisture readings in all affected materials",
        "Begin antimicrobial treatment for Category 2 or 3 water",
        "Daily site visits to monitor moisture levels and adjust equipment",
        "Coordinate with insurance adjuster for on-site inspection"
      ],
      notes: "Equipment runs 24/7 during this phase. You'll hear constant fan noise—this is normal and necessary."
    },
    {
      phase: "Days 3-5",
      title: "Active Drying & Continued Monitoring",
      duration: "2-3 days",
      color: "yellow",
      icon: Thermometer,
      tasks: [
        "Continue daily moisture readings to track drying progress",
        "Adjust equipment placement based on readings",
        "Monitor humidity levels (target: 30-50% relative humidity)",
        "Check for secondary moisture intrusion (walls, subfloors)",
        "Perform thermal imaging to detect hidden moisture pockets",
        "Document progress with logs and updated photos",
        "Address any mold prevention protocols"
      ],
      notes: "Drying rates vary by material density and ambient conditions. Concrete and hardwood take longer than drywall."
    },
    {
      phase: "Week 1-2",
      title: "Drying Completion & Mold Prevention",
      duration: "5-10 days total",
      color: "blue",
      icon: CheckCircle2,
      tasks: [
        "Continue monitoring until moisture levels reach dry standard",
        "Achieve 12-15% moisture content in wood and drywall",
        "Verify subfloor and framing are at acceptable levels",
        "Remove drying equipment once clearance is achieved",
        "Apply final antimicrobial or encapsulation treatments",
        "Provide written clearance documentation",
        "Conduct final walkthrough with homeowner"
      ],
      notes: "Drying is complete when moisture meters show stable, acceptable readings for 24-48 hours."
    },
    {
      phase: "Week 2-4",
      title: "Reconstruction Planning & Pre-Build",
      duration: "1-3 weeks",
      color: "purple",
      icon: FileText,
      tasks: [
        "Finalize scope of work with homeowner and insurance",
        "Order materials (drywall, flooring, cabinetry, fixtures)",
        "Schedule contractors (electricians, plumbers, HVAC)",
        "Obtain permits if required for structural work",
        "Establish reconstruction timeline and milestones",
        "Conduct pre-construction meeting with all stakeholders",
        "Begin demo of remaining damaged materials if needed"
      ],
      notes: "This phase timing depends heavily on insurance approval speed and material availability."
    },
    {
      phase: "Month 1-2",
      title: "Rebuild & Finishing Work",
      duration: "3-8 weeks",
      color: "green",
      icon: Home,
      tasks: [
        "Repair or replace framing, subfloors, and structural elements",
        "Install new drywall, tape, mud, and texture",
        "Prime and paint affected areas",
        "Install new flooring (carpet, hardwood, tile)",
        "Reinstall or replace trim, baseboards, and doors",
        "Complete electrical, plumbing, and HVAC repairs",
        "Final walkthrough, punch list completion, and sign-off"
      ],
      notes: "Reconstruction time varies widely based on the extent of damage and customization level."
    }
  ];

  const delayFactors = [
    {
      factor: "Water Category & Class",
      impact: "High",
      description: "Category 3 (black water) requires extensive safety protocols. Class 4 (deep penetration) takes significantly longer to dry than Class 1."
    },
    {
      factor: "Hidden Damage Discovery",
      impact: "High",
      description: "Damage behind walls, under floors, or in HVAC systems often isn't discovered until demo begins, requiring scope revisions."
    },
    {
      factor: "Insurance Approval Delays",
      impact: "High",
      description: "Waiting for adjuster visits, supplemental approvals, or claim disputes can stall reconstruction for weeks."
    },
    {
      factor: "Material Availability",
      impact: "Medium",
      description: "Custom flooring, specialty tiles, or unique cabinetry can have 4-8 week lead times, especially post-pandemic."
    },
    {
      factor: "Permit Requirements",
      impact: "Medium",
      description: "Structural repairs, electrical work, or plumbing modifications may require county permits, adding 1-2 weeks."
    },
    {
      factor: "Weather & Humidity",
      impact: "Medium",
      description: "High ambient humidity (summer in Virginia) slows evaporation rates. Winter heating helps accelerate drying."
    },
    {
      factor: "Scope Changes",
      impact: "Low-Medium",
      description: "Homeowner upgrades or design changes during reconstruction extend timelines but improve final results."
    },
    {
      factor: "Contractor Availability",
      impact: "Low-Medium",
      description: "Specialty trades (tile setters, hardwood refinishers) may have limited schedules, especially during busy seasons."
    }
  ];

  const communicationMilestones = [
    {
      milestone: "Initial Contact",
      when: "Within 1 hour of your call",
      what: "Confirmation of arrival time, emergency instructions, documentation guidance"
    },
    {
      milestone: "On-Site Assessment",
      when: "Day 1, during extraction",
      what: "Scope of damage, preliminary timeline, equipment plan, insurance filing guidance"
    },
    {
      milestone: "Daily Updates",
      when: "Days 2-7, during active drying",
      what: "Moisture readings, equipment adjustments, drying progress, photos"
    },
    {
      milestone: "Insurance Coordination",
      when: "Days 3-5",
      what: "Adjuster meeting scheduled, estimate submitted, scope review"
    },
    {
      milestone: "Drying Completion",
      when: "Week 1-2",
      what: "Clearance documentation, final readings, equipment removal, reconstruction planning"
    },
    {
      milestone: "Reconstruction Kickoff",
      when: "Week 2-3",
      what: "Material selections, timeline confirmation, contractor introductions"
    },
    {
      milestone: "Weekly Progress",
      when: "During rebuild phase",
      what: "Photo updates, milestone completion, schedule adjustments, punch list items"
    },
    {
      milestone: "Final Walkthrough",
      when: "Project completion",
      what: "Quality inspection, warranty info, maintenance guidance, final sign-off"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Timeline Guide"
        description="Complete timeline guide for water damage restoration from emergency response through reconstruction. Understand each phase, typical durations, and factors that affect your restoration schedule."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Restoration Timeline', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Clock size={14} /> Timeline Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Water Damage Restoration Timeline: What to Expect Day by Day
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Understanding the restoration process helps set realistic expectations. Here's a detailed breakdown of each phase from emergency response through final reconstruction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                24/7 Emergency Response
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

            {/* Timeline Overview */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Complete Restoration Timeline
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Water damage restoration follows a structured process with distinct phases. Each phase has specific objectives and typical durations.
              </p>

              <div className="space-y-8">
                {timelinePhases.map((phase, i) => (
                  <div key={i} className="relative">
                    {/* Timeline connector line */}
                    {i < timelinePhases.length - 1 && (
                      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200 -mb-8"></div>
                    )}

                    <div className={`rounded-3xl border-2 overflow-hidden ${
                      phase.color === 'red' ? 'border-red-200 bg-red-50/30' :
                      phase.color === 'orange' ? 'border-orange-200 bg-orange-50/30' :
                      phase.color === 'yellow' ? 'border-yellow-200 bg-yellow-50/30' :
                      phase.color === 'blue' ? 'border-blue-200 bg-blue-50/30' :
                      phase.color === 'purple' ? 'border-purple-200 bg-purple-50/30' :
                      'border-green-200 bg-green-50/30'
                    }`}>
                      <div className="p-8">
                        {/* Header */}
                        <div className="flex items-start gap-6 mb-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
                            phase.color === 'red' ? 'bg-red-500 text-white' :
                            phase.color === 'orange' ? 'bg-orange-500 text-white' :
                            phase.color === 'yellow' ? 'bg-yellow-500 text-white' :
                            phase.color === 'blue' ? 'bg-blue-500 text-white' :
                            phase.color === 'purple' ? 'bg-purple-500 text-white' :
                            'bg-green-500 text-white'
                          }`}>
                            <phase.icon size={28} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <span className={`text-sm font-bold uppercase tracking-wide ${
                                phase.color === 'red' ? 'text-red-700' :
                                phase.color === 'orange' ? 'text-orange-700' :
                                phase.color === 'yellow' ? 'text-yellow-700' :
                                phase.color === 'blue' ? 'text-blue-700' :
                                phase.color === 'purple' ? 'text-purple-700' :
                                'text-green-700'
                              }`}>{phase.phase}</span>
                              <span className="text-xs text-muted">• {phase.duration}</span>
                            </div>
                            <h3 className="font-display text-2xl font-medium text-text">
                              {phase.title}
                            </h3>
                          </div>
                        </div>

                        {/* Tasks */}
                        <div className="mb-6 pl-22">
                          <ul className="space-y-3">
                            {phase.tasks.map((task, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${
                                  phase.color === 'red' ? 'text-red-600' :
                                  phase.color === 'orange' ? 'text-orange-600' :
                                  phase.color === 'yellow' ? 'text-yellow-600' :
                                  phase.color === 'blue' ? 'text-blue-600' :
                                  phase.color === 'purple' ? 'text-purple-600' :
                                  'text-green-600'
                                }`} />
                                <span className="text-sm text-text">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Notes */}
                        <div className="pl-22 bg-white/60 rounded-xl p-4 border border-gray-200/50">
                          <div className="flex items-start gap-2">
                            <AlertTriangle size={16} className="text-gray-400 mt-0.5 shrink-0" />
                            <span className="text-sm text-muted italic">{phase.notes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Factors That Affect Timeline */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Factors That Affect Your Timeline
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Not all water damage restoration follows the same timeline. These factors can extend or accelerate the process.
              </p>

              <div className="space-y-4">
                {delayFactors.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium text-text">{item.factor}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            item.impact === 'High'
                              ? 'bg-red-100 text-red-700'
                              : item.impact === 'Medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {item.impact} Impact
                          </span>
                        </div>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Communication Expectations */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Communication & Updates Throughout the Process
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Professional restoration companies provide regular updates at key milestones. Here's when to expect communication.
              </p>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="space-y-6">
                  {communicationMilestones.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                          <h3 className="font-medium text-text">{item.milestone}</h3>
                          <span className="text-xs text-muted">({item.when})</span>
                        </div>
                        <p className="text-sm text-muted">{item.what}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* When Things Take Longer */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                When Restoration Takes Longer Than Expected
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                While most projects follow predictable timelines, certain situations require more time. Here's what to watch for.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Droplets,
                    title: "Severe Water Intrusion",
                    description: "Flooding that saturates concrete, fills wall cavities, or soaks structural lumber requires extended drying—sometimes 14-21 days instead of 7."
                  },
                  {
                    icon: Home,
                    title: "Structural Damage",
                    description: "If water compromises floor joists, load-bearing walls, or foundations, engineering assessments and permits add weeks to the timeline."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Mold Contamination",
                    description: "If mold develops due to delayed response or hidden moisture, full remediation with containment adds 3-7 days and increases costs significantly."
                  },
                  {
                    icon: FileText,
                    title: "Insurance Disputes",
                    description: "Claim denials, low initial estimates, or coverage disputes can stall reconstruction while negotiations or appeals are pending."
                  },
                  {
                    icon: Wrench,
                    title: "Custom Materials",
                    description: "Matching exotic hardwood, discontinued tile, or custom cabinetry can add 4-12 weeks for fabrication and delivery."
                  },
                  {
                    icon: Users,
                    title: "Multi-Trade Coordination",
                    description: "Complex rebuilds requiring electricians, plumbers, HVAC, and specialty contractors involve scheduling dependencies that extend timelines."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-medium text-text mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Restoration Timeline FAQ"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* CTA Card */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  Start Your Restoration Today
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Every hour counts. Our emergency response team arrives within 60-90 minutes to begin extraction and prevent further damage.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">24/7 Availability</div>
                      <div className="text-xs text-blue-200">Nights, weekends, holidays</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Timeline Stats */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-primary" />
                  Average Timelines
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Emergency response</span>
                    <span className="font-medium text-text">60-90 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Water extraction</span>
                    <span className="font-medium text-text">2-8 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Structural drying</span>
                    <span className="font-medium text-text">7-14 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Full reconstruction</span>
                    <span className="font-medium text-text">3-8 weeks</span>
                  </div>
                </div>
              </div>

              {/* Critical Timing Box */}
              <div className="bg-red-50 rounded-[24px] p-6 border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">Time-Sensitive Process</h4>
                    <p className="text-sm text-red-800 mb-3">
                      Mold can begin growing within 24-48 hours of water exposure. Immediate response is critical.
                    </p>
                    <div className="space-y-1 text-xs text-red-700">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        0-24 hrs: Lowest damage potential
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        24-48 hrs: Mold risk begins
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        48+ hrs: Secondary damage accelerates
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/water-damage-cost-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Cost Guide
                  </a>
                  <a href="/resources/insurance-claims-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Insurance Claims Guide
                  </a>
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Checklists
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Wait—Every Minute Matters
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our certified restoration technicians are standing by 24/7 to respond immediately. Call now to start your restoration timeline.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-primary border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default RestorationTimelineGuide;
