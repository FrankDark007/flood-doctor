import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import ArticleAuthor, { generateAuthorSchema } from '../../components/ui/ArticleAuthor';
import MidArticleCTA from '../../components/ui/MidArticleCTA';
import RelatedArticles from '../../components/ui/RelatedArticles';
import {
  Phone,
  AlertTriangle,
  Clock,
  Droplets,
  Power,
  Camera,
  Shield,
  Wrench,
  Home,
  CheckCircle2,
  Zap,
  Wind,
  Thermometer,
  MapPin,
  ArrowRight,
  Info,
  FileText,
  Users
} from 'lucide-react';

const BurstPipeEmergencyResponse: React.FC = () => {
  const faqs = [
    {
      question: "What should I do immediately when a pipe bursts?",
      answer: "Turn off the main water supply immediately to stop flooding. Then turn off electricity to affected areas at the circuit breaker if water is near outlets or appliances. Call a plumber and water damage restoration company right away. Do not wait—every minute of delay increases damage and costs exponentially."
    },
    {
      question: "Where is my main water shut-off valve?",
      answer: "Most homes have the main shut-off valve in the basement near the water meter, in a crawlspace, or outside near the foundation. In condos and townhomes, it may be in a utility closet. Every household member should know its location before an emergency occurs. If you can't find it, call your water company or a plumber immediately."
    },
    {
      question: "Can I clean up water from a burst pipe myself?",
      answer: "Small amounts of clean water can be mopped up, but significant burst pipe flooding requires professional water extraction and structural drying. DIY methods miss hidden moisture in walls, floors, and insulation that leads to mold growth and structural damage within 24-48 hours. Professional equipment and expertise prevent these costly secondary damages."
    },
    {
      question: "Will my homeowners insurance cover burst pipe damage?",
      answer: "Yes, homeowners insurance typically covers sudden burst pipe damage, including emergency mitigation, repairs, and contents damage. However, you must act quickly to mitigate further damage—insurance policies require this. Frozen pipes due to inadequate heating may be disputed, so document everything and maintain heat above 55°F in winter."
    },
    {
      question: "How quickly can a restoration company respond to a burst pipe emergency?",
      answer: "Professional restoration companies like Flood Doctor offer 24/7 emergency response and typically arrive within 60-90 minutes of your call. We begin water extraction immediately to minimize damage. Fast response is critical—water damage escalates by 10-15% every hour it's not addressed."
    },
    {
      question: "What causes pipes to burst in homes?",
      answer: "The most common cause is freezing temperatures that cause water to expand and crack pipes. Other causes include corrosion in old pipes, high water pressure, clogs creating back-pressure, tree root intrusion, and foundation shifting. Homes built before 1990 with galvanized or polybutylene pipes are at higher risk."
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Burst Pipe Emergency: Steps to Take Before the Restoration Team Arrives",
    "description": "Emergency response guide for burst pipes. Expert step-by-step instructions to minimize water damage, protect your home, and prepare for professional restoration.",
    "author": {
      "@type": "Organization",
      "name": "Flood Doctor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Flood Doctor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flood.doctor/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const emergencySteps = [
    {
      number: "01",
      title: "Shut Off the Main Water Supply",
      icon: Droplets,
      timeframe: "0-1 minutes",
      urgency: "CRITICAL",
      content: "Locate and turn off your main water shut-off valve immediately. In most homes, this is in the basement near the water meter, in a crawlspace, or outside near the foundation. Turn the valve clockwise until it stops—this cuts off all water flow and stops the flooding.",
      tips: [
        "Know valve location before emergencies occur",
        "Turn clockwise (righty-tighty) to close",
        "May require a wrench if valve is stuck",
        "In condos, valve may be in utility closet or hallway"
      ],
      warning: "If you cannot locate the valve, call your water company emergency line immediately while containing water spread."
    },
    {
      number: "02",
      title: "Turn Off Electricity",
      icon: Power,
      timeframe: "1-2 minutes",
      urgency: "CRITICAL",
      content: "If water is near electrical outlets, appliances, or fixtures, turn off power to affected areas at the circuit breaker. If the main electrical panel is in standing water, do not approach it—call 911 and evacuate. Electrocution is a serious risk in flooded areas.",
      tips: [
        "Only if safe to approach panel",
        "Turn off individual circuits to flooded rooms",
        "If unsure, shut off main breaker",
        "Never use electrical devices in standing water"
      ],
      warning: "Never enter standing water if electrical outlets or appliances are submerged. Call 911 if main panel is flooded."
    },
    {
      number: "03",
      title: "Call Emergency Services",
      icon: Phone,
      timeframe: "2-3 minutes",
      urgency: "IMMEDIATE",
      content: "Contact your plumber and a certified water damage restoration company immediately. Don't wait to assess damage—professionals can arrive within 60-90 minutes. Then call your insurance company to report the loss and get your claim number. Time is critical.",
      tips: [
        "Call plumber to repair pipe",
        "Call restoration company (Flood Doctor: 877-497-0007)",
        "Contact insurance within 24 hours",
        "Document your claim number"
      ],
      warning: "Waiting 'to see how bad it is' increases damage exponentially. Call professionals within the first hour."
    },
    {
      number: "04",
      title: "Document All Damage",
      icon: Camera,
      timeframe: "3-10 minutes",
      urgency: "HIGH",
      content: "Before any cleanup begins, photograph and video all damage from multiple angles. Capture the burst pipe location, standing water, affected rooms, damaged belongings, and any visible structural damage. This documentation is critical for insurance claims.",
      tips: [
        "Take 50-100 photos minimum",
        "Use phone timestamp feature",
        "Video walkthrough of all affected areas",
        "Photograph the burst pipe source"
      ],
      warning: "Insurance companies often deny or reduce claims due to insufficient documentation. Take excessive photos."
    },
    {
      number: "05",
      title: "Begin Water Removal (If Safe)",
      icon: Shield,
      timeframe: "10-30 minutes",
      urgency: "MODERATE",
      content: "If safe and the water is clean (not sewage), begin removing standing water with mops, towels, or a wet/dry vacuum designed for water. Move furniture to dry areas. Open windows for ventilation. However, do not delay professional help to attempt DIY cleanup.",
      tips: [
        "Use wet/dry shop vac (not household vacuum)",
        "Wear rubber boots and gloves",
        "Elevate furniture on blocks",
        "Remove soaked rugs and fabrics"
      ],
      warning: "Do not use regular household vacuums on standing water—severe electrical shock hazard. Only wet/dry vacuums rated for water."
    },
    {
      number: "06",
      title: "Contain Water Spread",
      icon: Wrench,
      timeframe: "Ongoing",
      urgency: "MODERATE",
      content: "Use towels, sandbags, or barriers to prevent water from spreading to unaffected areas. Close doors to contain flooding. If water is leaking through ceilings, place buckets underneath. Cover sensitive electronics and documents with plastic.",
      tips: [
        "Towels at doorways prevent spreading",
        "Close interior doors to contain water",
        "Buckets under ceiling leaks",
        "Protect valuables with plastic sheeting"
      ],
      warning: "Don't attempt to stop water at the burst pipe itself—turn off the main supply instead. Temporary patches often fail under pressure."
    },
    {
      number: "07",
      title: "Ventilate & Start Drying",
      icon: Wind,
      timeframe: "30+ minutes",
      urgency: "MODERATE",
      content: "Open windows and doors for airflow if weather permits. Use fans to circulate air (but keep away from standing water). Lower humidity with dehumidifiers if available. However, household equipment is insufficient—professional drying equipment is essential.",
      tips: [
        "Open windows for cross-ventilation",
        "Position fans to increase airflow (safely)",
        "Run dehumidifiers if you have them",
        "Avoid closed, damp spaces"
      ],
      warning: "Household fans and dehumidifiers help but cannot replace professional structural drying equipment."
    },
    {
      number: "08",
      title: "Prepare for Professional Arrival",
      icon: Users,
      timeframe: "Until arrival",
      urgency: "LOW",
      content: "Clear access paths for restoration equipment. Move vehicles from driveway. Locate insurance policy and contact information. Prepare to explain what happened and when. Stay on-site if possible to provide property access.",
      tips: [
        "Clear driveway and walkways",
        "Have insurance policy handy",
        "Know when pipe burst occurred",
        "Stay available by phone"
      ],
      warning: "Restoration teams arrive with large equipment (extractors, dehumidifiers, air movers). Clear access speeds response."
    }
  ];

  const commonCauses = [
    {
      cause: "Frozen Pipes",
      icon: Thermometer,
      description: "Water expands when frozen, creating pressure that cracks pipes. Common in unheated basements, crawlspaces, exterior walls, and during sudden temperature drops.",
      prevention: [
        "Maintain heat above 55°F always",
        "Insulate pipes in unheated spaces",
        "Let faucets drip during extreme cold",
        "Seal air leaks in crawlspaces",
        "Disconnect and drain outdoor hoses"
      ],
      riskPeriod: "December - February in Northern VA"
    },
    {
      cause: "Pipe Corrosion & Age",
      icon: Wrench,
      description: "Galvanized steel pipes (common pre-1960) corrode from inside out. Polybutylene pipes (1978-1995) become brittle and fail. Lifespan: Copper 50+ years, PEX 50+ years, Galvanized 20-50 years.",
      prevention: [
        "Replace pipes in homes built before 1990",
        "Annual plumbing inspections",
        "Replace galvanized with copper or PEX",
        "Monitor for reduced water pressure (corrosion sign)",
        "Test water quality for corrosion indicators"
      ],
      riskPeriod: "Year-round in older homes"
    },
    {
      cause: "High Water Pressure",
      icon: Droplets,
      description: "Water pressure above 60-80 PSI stresses pipes and joints. Over time, this causes fatigue failures, especially at weak points like elbows and T-joints.",
      prevention: [
        "Test water pressure with gauge ($10-$20)",
        "Install pressure reducing valve if >80 PSI",
        "Monitor for 'water hammer' (banging pipes)",
        "Regular valve and fitting inspections",
        "Replace worn pressure regulators"
      ],
      riskPeriod: "Year-round if pressure unregulated"
    },
    {
      cause: "Tree Root Intrusion",
      icon: Home,
      description: "Tree roots seek water and penetrate sewer lines and water mains. Roots can crack pipes or create blockages that cause back-pressure bursts.",
      prevention: [
        "Sewer camera inspection every 3-5 years",
        "Remove trees within 10 feet of water/sewer lines",
        "Root barriers for new landscaping",
        "Annual root treatment in lines",
        "Monitor for slow drains (early warning)"
      ],
      riskPeriod: "Spring-Summer (active root growth)"
    }
  ];

  const whatNotToDo = [
    {
      dont: "Don't Wait to Call Professionals",
      why: "Water damage escalates exponentially. Waiting even 2-3 hours leads to mold growth, structural damage, and repair costs 40-60% higher than immediate response."
    },
    {
      dont: "Don't Use Regular Household Vacuums",
      why: "Household vacuums create electrical shock hazards when used on water. Only wet/dry shop vacuums rated for water extraction are safe."
    },
    {
      dont: "Don't Enter Rooms with Electrical Hazards",
      why: "Standing water near electrical outlets, appliances, or fixtures creates electrocution risk. Turn off power at the breaker before entering."
    },
    {
      dont: "Don't Attempt Pipe Repairs Yourself",
      why: "Burst pipe repairs require professional plumbing. Temporary fixes often fail under pressure, causing additional flooding and damage."
    },
    {
      dont: "Don't Delay Insurance Notification",
      why: "Insurance policies require 'prompt' notification—typically within 24-48 hours. Delayed reporting gives carriers grounds to reduce or deny claims."
    },
    {
      dont: "Don't Skip Documentation",
      why: "Insufficient photo/video evidence is the #1 reason insurance claims are reduced. Take 50-100 photos showing all damage before any cleanup."
    },
    {
      dont: "Don't Ignore Hidden Moisture",
      why: "Water travels through walls, floors, and ceilings. DIY methods miss hidden moisture that causes mold growth within 24-48 hours. Professional equipment detects and dries all moisture."
    },
    {
      dont: "Don't Rely on Homeowner Equipment Alone",
      why: "Household fans and dehumidifiers help but lack the power to structurally dry homes. Industrial equipment running 24/7 for 3-7 days is required for complete drying."
    }
  ];

  const preventionTips = [
    {
      tip: "Locate & Label Shut-Off Valves",
      description: "Every household member should know where the main water shut-off valve is located. Label it clearly and test it annually to ensure it works.",
      frequency: "Test annually"
    },
    {
      tip: "Insulate Vulnerable Pipes",
      description: "Wrap exposed pipes in unheated areas (basements, crawlspaces, exterior walls) with foam pipe insulation. This prevents freezing during winter.",
      frequency: "Before winter"
    },
    {
      tip: "Maintain Consistent Heat",
      description: "Never let your home drop below 55°F in winter, even when away. Set thermostats to maintain this minimum temperature.",
      frequency: "Year-round"
    },
    {
      tip: "Schedule Annual Plumbing Inspections",
      description: "Professional plumbers can identify corrosion, high pressure, and weak points before they fail. Especially critical for homes built before 1990.",
      frequency: "Annually"
    },
    {
      tip: "Let Faucets Drip During Extreme Cold",
      description: "Running water doesn't freeze. During Arctic blasts, let faucets drip overnight to prevent pipe freezing and bursting.",
      frequency: "During cold snaps"
    },
    {
      tip: "Monitor Water Pressure",
      description: "Test water pressure annually with a gauge. Pressure above 80 PSI stresses pipes. Install a pressure-reducing valve if needed.",
      frequency: "Annually"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Burst Pipe Emergency: What to Do First"
        description="Expert emergency response guide for burst pipes. Step-by-step instructions to minimize damage, protect your home, and what to do while waiting for professionals."
        schema={[faqSchema, articleSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Burst Pipe Emergency', path: '#' }
          ]} />
        <ArticleAuthor datePublished="2025-01-02" readTime="10 min read" />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle size={14} /> Emergency Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Burst Pipe Emergency: Steps to Take Before the Restoration Team Arrives
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              A burst pipe floods your home with gallons of water per minute—time is everything. This expert guide walks you through critical emergency steps to minimize damage, protect your family, and prepare for professional restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call 24/7: (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Request Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Critical Alert */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Act in the First 60 Seconds</h3>
                  <p className="text-red-800 text-sm mb-4 leading-relaxed">
                    A 1/2-inch burst pipe releases approximately 50 gallons of water every minute. In just 10 minutes, that's 500 gallons flooding your home. Your first priority is shutting off the main water supply—every second counts. After that, follow the steps below while waiting for professional help.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Steps */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                8 Critical Steps: What to Do Right Now
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Follow these steps in order when a pipe bursts. Each action minimizes damage, protects your property, and prepares for professional restoration.
              </p>

              <div className="space-y-8">
                {emergencySteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        step.urgency === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                        step.urgency === 'IMMEDIATE' ? 'bg-orange-100 text-orange-700' :
                        step.urgency === 'HIGH' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {step.urgency}
                      </span>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{step.number}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon size={20} className="text-primary sm:hidden" />
                          <h3 className="font-display text-xl font-medium text-text">
                            {step.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Clock size={14} className="text-muted" />
                          <span className="text-sm text-muted">{step.timeframe}</span>
                        </div>
                        <p className="text-muted leading-relaxed mb-4">
                          {step.content}
                        </p>

                        <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                          <h4 className="text-sm font-bold text-blue-900 mb-2">Quick Tips:</h4>
                          <ul className="space-y-2">
                            {step.tips.map((tip, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-blue-800">
                                <CheckCircle2 size={12} className="text-blue-600 mt-0.5 shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 inline-flex items-start gap-3 max-w-2xl">
                          <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-amber-900">{step.warning}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What NOT to Do */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                8 Critical Mistakes to Avoid
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                These common errors increase damage, delay recovery, and can jeopardize insurance claims or create safety hazards.
              </p>

              <div className="space-y-4">
                {whatNotToDo.map((item, i) => (
                  <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 text-red-700 p-2 rounded-lg shrink-0">
                        <AlertTriangle size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-red-900 mb-2">{item.dont}</h3>
                        <p className="text-sm text-red-800 leading-relaxed">{item.why}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          <MidArticleCTA variant="emergency" />

            {/* Common Causes */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Causes of Burst Pipes
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding why pipes burst helps you prevent future emergencies. These are the most common causes in Northern Virginia homes.
              </p>

              <div className="space-y-6">
                {commonCauses.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text text-lg mb-2">{item.cause}</h3>
                        <p className="text-sm text-muted mb-4">{item.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                          <Clock size={12} />
                          {item.riskPeriod}
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <h4 className="text-xs font-bold text-green-900 uppercase tracking-wide mb-2">Prevention Strategies</h4>
                      <ul className="space-y-2">
                        {item.prevention.map((prev, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-green-800">
                            <CheckCircle2 size={12} className="text-green-600 mt-0.5 shrink-0" />
                            {prev}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Prevention Tips */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                6 Ways to Prevent Burst Pipes
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Most burst pipes are preventable with proper maintenance and preparation. These proactive steps protect your home year-round.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {preventionTips.map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                      <h3 className="font-medium text-green-900">{item.tip}</h3>
                    </div>
                    <p className="text-sm text-green-800 leading-relaxed mb-3">{item.description}</p>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      <Clock size={10} />
                      {item.frequency}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What Professionals Do */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                What Happens When Flood Doctor Arrives
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Understanding the professional restoration process helps you know what to expect and why immediate response matters.
              </p>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Arrival (0-90 minutes)</h4>
                      <p className="text-sm text-muted">We arrive on-site within 60-90 minutes, assess safety hazards, confirm water is shut off, and begin emergency water extraction immediately.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Camera size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Documentation & Assessment (1-2 hours)</h4>
                      <p className="text-sm text-muted">We photograph all damage, use moisture meters and thermal imaging to find hidden water, and create a detailed scope of work for insurance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Droplets size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Water Extraction (2-4 hours)</h4>
                      <p className="text-sm text-muted">Industrial extractors remove standing water. We extract water from carpets, padding, and porous materials to prevent permanent damage.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Wind size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Structural Drying (3-7 days)</h4>
                      <p className="text-sm text-muted">Industrial dehumidifiers and air movers run 24/7 to dry structures to safe moisture levels. We monitor daily and adjust equipment as needed.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Insurance Coordination</h4>
                      <p className="text-sm text-muted">We work directly with your insurance adjuster, provide detailed Xactimate estimates, and handle all billing. You pay only your deductible.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Wrench size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Repairs & Restoration (1-3 weeks)</h4>
                      <p className="text-sm text-muted">Once dry, we remove damaged materials, treat for mold prevention, and coordinate reconstruction to return your home to pre-loss condition.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* External Resources */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Additional Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://www.iicrc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">IICRC Water Damage Standards</div>
                    <div className="text-xs text-muted">Industry restoration guidelines</div>
                  </div>
                </a>

                <a
                  href="https://www.ready.gov/floods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">Ready.gov Emergency Prep</div>
                    <div className="text-xs text-muted">Federal preparedness resources</div>
                  </div>
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/burst-pipe-emergency-response/" />

        <GoogleStyleFAQ
                data={faqs}
                title="Frequently Asked Questions"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Primary CTA Card */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  24/7 Burst Pipe Emergency Response
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  We respond to burst pipe emergencies across Northern Virginia within 60-90 minutes, 24/7/365. Don't wait—every minute increases damage.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Response Time</div>
                      <div className="text-xs text-blue-200">60-90 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Droplets size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Water Extraction</div>
                      <div className="text-xs text-blue-200">Immediate start</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Insurance Billing</div>
                      <div className="text-xs text-blue-200">Direct billing available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Reference */}
              <div className="bg-red-50 rounded-[24px] p-6 border border-red-200">
                <h4 className="font-medium text-red-900 mb-4">Quick Reference Checklist</h4>
                <ul className="space-y-2 text-sm text-red-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-600 mt-0.5 shrink-0" />
                    Shut off main water valve
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-600 mt-0.5 shrink-0" />
                    Turn off electricity to affected areas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-600 mt-0.5 shrink-0" />
                    Call restoration company
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-600 mt-0.5 shrink-0" />
                    Document all damage with photos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-600 mt-0.5 shrink-0" />
                    Remove standing water safely
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-600 mt-0.5 shrink-0" />
                    Contact insurance within 24 hours
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Checklists
                  </a>
                  <a href="/resources/insurance-claims-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Insurance Claims Guide
                  </a>
                  <a href="/resources/water-damage-cost-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Cost Guide
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Burst Pipe? We're On Our Way
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Our emergency response team is standing by 24/7 to minimize damage and start restoration immediately. Average response time: 60-90 minutes.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-red-600 border-none hover:bg-red-50">
            <Phone size={20} className="mr-2" />
            Call Emergency Line: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default BurstPipeEmergencyResponse;
