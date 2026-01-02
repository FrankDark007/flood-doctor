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
  CheckCircle2,
  Camera,
  Shield,
  Droplets,
  Wind,
  Home,
  Zap,
  ThermometerSnowflake,
  WrenchIcon,
  FileText,
  Users,
  MapPin,
  ArrowRight,
  Info
} from 'lucide-react';

const WaterDamageNorthernVirginiaGuide: React.FC = () => {
  const faqs = [
    {
      question: "How quickly should I respond to water damage in my Northern Virginia home?",
      answer: "Immediate action is critical. Water damage begins causing structural harm and mold growth within 24-48 hours. In Northern Virginia's humid climate, this timeline can be even shorter during summer months. Contact a professional restoration company within the first hour of discovery to minimize damage and costs."
    },
    {
      question: "Will my homeowners insurance cover water damage restoration in Fairfax County?",
      answer: "Most homeowners insurance policies cover sudden and accidental water damage, such as burst pipes, appliance failures, or storm-related incidents. However, gradual damage from neglected maintenance or flood damage (which requires separate flood insurance) is typically excluded. Contact your insurer immediately after discovery and document everything thoroughly."
    },
    {
      question: "What's unique about water damage in Northern Virginia homes?",
      answer: "Northern Virginia homes face specific challenges including expansive clay soil that causes foundation settling, freeze-thaw cycles that burst pipes, high humidity that accelerates mold growth, and older infrastructure in historic neighborhoods. Homes built before 1990 often have outdated plumbing that's more susceptible to failures."
    },
    {
      question: "Can I clean up water damage myself or should I hire professionals?",
      answer: "Small spills from clean water sources can be handled with immediate action, but significant water damage requires professional restoration. Hidden moisture in walls, floors, and HVAC systems leads to mold and structural damage that DIY methods miss. Professional equipment like industrial dehumidifiers, thermal imaging cameras, and moisture meters ensure complete drying."
    },
    {
      question: "How long does water damage restoration take in Northern Virginia?",
      answer: "Most residential water damage restoration projects take 3-7 days for drying and 1-3 weeks for complete repairs, depending on the extent of damage. However, extensive damage involving multiple floors or sewage contamination can take 4-6 weeks. Emergency water extraction typically begins within 2-4 hours of your call."
    },
    {
      question: "What are the most common causes of water damage in NoVA homes?",
      answer: "The top causes in Northern Virginia include burst or frozen pipes during winter, failed sump pumps during heavy spring rains, washing machine hose failures, water heater ruptures, HVAC condensate line leaks, and roof leaks from ice dams or storm damage. Older homes in Alexandria and Arlington see frequent cast iron pipe failures."
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
    "headline": "What to Do When You Have Water Damage: A Complete Guide for Northern Virginia Homeowners",
    "description": "Comprehensive emergency response guide for Northern Virginia homeowners facing water damage. Step-by-step instructions, regional considerations, and expert restoration advice.",
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

  const immediateSteps = [
    {
      number: "01",
      title: "Stop the Water Source",
      icon: Droplets,
      content: "If safe to do so, immediately shut off the water source. For burst pipes, turn off your main water valve (typically in the basement or crawlspace). For appliance leaks, shut off the appliance's supply line. If you're unsure or the source is unknown, shut off the main water supply to prevent further flooding.",
      warning: "Never enter standing water if electrical outlets or appliances are submerged. Turn off power at the breaker first."
    },
    {
      number: "02",
      title: "Ensure Safety First",
      icon: Shield,
      content: "Before entering affected areas, assess safety hazards. Turn off electricity to flooded rooms at the circuit breaker. Avoid standing water near electrical sources. Check for structural damage like sagging ceilings or warped floors. If you smell gas or see significant structural damage, evacuate and call 911.",
      warning: "Do not use regular household vacuums on standing water—this creates serious electrical shock risk."
    },
    {
      number: "03",
      title: "Call Your Insurance Company",
      icon: Phone,
      content: "Contact your homeowners insurance provider within 24 hours to report the loss. Document your claim number and adjuster's contact information. Ask about your coverage limits, deductible, and whether emergency mitigation services are pre-approved. Most policies require you to prevent further damage.",
      warning: "Delaying insurance notification can give carriers grounds to reduce or deny your claim."
    },
    {
      number: "04",
      title: "Contact a Professional Restoration Company",
      icon: Users,
      content: "Call a certified water damage restoration company immediately—not tomorrow, not after the weekend. Flood Doctor offers 24/7 emergency response across Northern Virginia and can typically arrive within 90 minutes. Professional extraction and drying prevents mold growth, structural damage, and higher costs.",
      warning: "Water damage escalates rapidly. Every hour of delay increases restoration costs by an estimated 10-15%."
    },
    {
      number: "05",
      title: "Document Everything",
      icon: Camera,
      content: "Before any cleanup begins, photograph and video all damage from multiple angles. Capture the water source, affected rooms, damaged belongings, and visible moisture. Use your phone's timestamp feature. This documentation is critical for insurance claims and often increases settlement amounts by 15-30%.",
      warning: "Take 50-100 photos minimum. Insurance adjusters deny claims due to insufficient documentation."
    },
    {
      number: "06",
      title: "Remove Standing Water (If Safe)",
      icon: WrenchIcon,
      content: "If safe and the water is clean (not sewage), begin removing standing water with mops, towels, or wet/dry vacuums designed for water extraction. Move furniture to dry areas. Remove soaked rugs and fabrics. However, DO NOT delay calling professionals to attempt DIY cleanup—hidden moisture causes the real damage.",
      warning: "Category 2 (gray water) or Category 3 (black water/sewage) requires professional hazmat protocols."
    }
  ];

  const commonCauses = [
    {
      icon: ThermometerSnowflake,
      title: "Frozen & Burst Pipes",
      description: "Northern Virginia's freeze-thaw cycles cause pipes to burst, especially in unheated basements, crawlspaces, and exterior walls. Homes in Loudoun and Prince William counties see frequent pipe failures during January-February cold snaps.",
      prevention: "Insulate exposed pipes, maintain heat above 55°F, and let faucets drip during extreme cold."
    },
    {
      icon: Droplets,
      title: "Failed Sump Pumps",
      description: "Heavy spring rains overwhelm sump pumps, particularly in Fairfax County's low-lying areas. Power outages during storms compound the problem. A single heavy rainfall event can dump 3-5 inches in hours.",
      prevention: "Install battery backup systems, test pumps quarterly, and ensure discharge lines drain away from foundation."
    },
    {
      icon: Home,
      title: "Roof Leaks & Ice Dams",
      description: "Winter ice dams prevent proper drainage, forcing water under shingles. Arlington and Alexandria's older roofs (20+ years) are especially vulnerable. Spring storms then exploit weakened areas.",
      prevention: "Ensure adequate attic insulation, clean gutters twice yearly, and inspect roofs after major storms."
    },
    {
      icon: WrenchIcon,
      title: "Appliance Failures",
      description: "Water heaters, washing machines, and dishwashers fail without warning. Washing machine supply hoses should be replaced every 5 years, yet most Northern Virginia homeowners wait until failure.",
      prevention: "Replace rubber hoses with braided steel, install leak detection sensors, and replace water heaters before 10 years."
    },
    {
      icon: Wind,
      title: "HVAC Condensate Leaks",
      description: "Air conditioning condensate lines clog with algae and debris, causing water to back up into living spaces. Northern Virginia's hot, humid summers run AC systems hard, increasing failure rates.",
      prevention: "Schedule annual HVAC maintenance, flush condensate lines, and install overflow shut-off switches."
    },
    {
      icon: Zap,
      title: "Storm & Flooding",
      description: "Severe thunderstorms, tropical systems, and flash flooding impact Northern Virginia annually. Areas near the Potomac River, Four Mile Run, and Cameron Run see regular flooding during heavy rain events.",
      prevention: "Install backwater valves, maintain gutters and grading, and consider flood insurance even outside FEMA zones."
    }
  ];

  const regionalConsiderations = [
    {
      title: "Clay Soil & Foundation Issues",
      description: "Northern Virginia sits on expansive clay soil that swells when wet and shrinks when dry. This causes foundation settling, cracks, and hydrostatic pressure that forces water into basements. Homes in Fairfax, Loudoun, and Prince William counties are particularly affected.",
      action: "Monitor foundation cracks, ensure proper grading, and install French drains or sump pumps in vulnerable homes."
    },
    {
      title: "Aging Infrastructure in Historic Areas",
      description: "Alexandria's Old Town, Arlington's older neighborhoods, and parts of Fairfax have homes built before modern plumbing codes. Cast iron drain pipes, galvanized steel supply lines, and knob-and-tube wiring create unique water damage risks.",
      action: "Consider whole-home plumbing inspections every 5 years for homes built before 1990. Budget for preventive replacements."
    },
    {
      title: "High Humidity & Mold Growth",
      description: "Northern Virginia's summer humidity regularly exceeds 70%, creating perfect conditions for mold growth within 24-48 hours of water exposure. Basements and crawlspaces are especially vulnerable.",
      action: "Use dehumidifiers year-round in basements, ensure proper ventilation, and address water damage within hours, not days."
    },
    {
      title: "Freeze-Thaw Cycles",
      description: "Winter temperatures fluctuate above and freezing, causing repeated freeze-thaw cycles that burst pipes. Homes with uninsulated crawlspaces, rim joists, or exterior wall plumbing see frequent failures.",
      action: "Insulate all exposed plumbing, seal air leaks in crawlspaces, and install pipe heat cables in high-risk areas."
    }
  ];

  const whyActFast = [
    {
      time: "0-24 Hours",
      events: [
        "Water spreads through porous materials (drywall, insulation, wood)",
        "Wooden floors begin to swell and buckle",
        "Furniture finishes may develop white rings or clouding",
        "Electrical hazards increase as water spreads",
        "Musty odors begin to develop"
      ]
    },
    {
      time: "24-48 Hours",
      events: [
        "Mold and bacteria begin growing in damp materials",
        "Drywall begins to swell and deteriorate",
        "Metal fixtures show early signs of tarnish and rust",
        "Wooden subflooring warps and delaminates",
        "Airborne mold spores reach dangerous concentrations"
      ]
    },
    {
      time: "48-72 Hours",
      events: [
        "Mold growth accelerates and becomes visible",
        "Structural wood begins to rot and weaken",
        "Sewage backup contamination spreads (if applicable)",
        "Restoration costs increase by 40-60%",
        "Insurance companies may cite 'delayed mitigation' to reduce payouts"
      ]
    },
    {
      time: "1 Week+",
      events: [
        "Extensive mold remediation required (often $5,000-$15,000)",
        "Structural repairs necessary (floors, walls, framing)",
        "Health risks from mold exposure increase significantly",
        "Complete replacement of porous materials required",
        "Total restoration costs can exceed $20,000-$50,000"
      ]
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="What to Do When You Have Water Damage: Complete Northern Virginia Guide"
        description="Emergency water damage response guide for Northern Virginia homeowners. Expert steps to take immediately, regional considerations, and how to minimize damage and costs."
        schema={[faqSchema, articleSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Water Damage Guide', path: '#' }
          ]} />
        <ArticleAuthor datePublished="2025-01-02" readTime="10 min read" />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle size={14} /> Emergency Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              What to Do When You Have Water Damage: A Complete Guide for Northern Virginia Homeowners
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Discovering water damage in your home is stressful and overwhelming. This comprehensive guide walks Northern Virginia homeowners through immediate emergency steps, regional considerations, and how to minimize damage and restoration costs.
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

            {/* Emergency Alert Box */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shrink-0">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Time Is Critical: Act Within The First Hour</h3>
                  <p className="text-red-800 text-sm mb-4 leading-relaxed">
                    Water damage escalates exponentially with every passing hour. In Northern Virginia's humid climate, mold can begin growing within 24-48 hours. Professional restoration companies can typically arrive within 90 minutes and begin emergency mitigation immediately.
                  </p>
                  <Button href="tel:8774970007" variant="primary" size="sm" className="bg-red-600 hover:bg-red-700">
                    <Phone size={16} className="mr-2" />
                    Call Flood Doctor Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Immediate Action Steps */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                6 Steps to Take Immediately
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Follow these critical steps in order when you discover water damage in your Northern Virginia home. Each action minimizes damage, protects your family, and strengthens your insurance claim.
              </p>

              <div className="space-y-8">
                {immediateSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{step.number}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <step.icon size={20} className="text-primary sm:hidden" />
                          <h3 className="font-display text-xl font-medium text-text">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted leading-relaxed mb-4">
                          {step.content}
                        </p>
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

            {/* Common Causes in Northern Virginia */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Water Damage Causes in Northern Virginia
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding what causes water damage in NoVA homes helps you prevent future incidents and respond appropriately when they occur.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {commonCauses.map((cause, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                      <cause.icon size={24} />
                    </div>
                    <h3 className="font-medium text-text mb-2">{cause.title}</h3>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{cause.description}</p>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-green-600 mt-0.5 shrink-0" />
                        <span className="text-xs text-green-900 font-medium">{cause.prevention}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          <MidArticleCTA variant="emergency" />

            {/* Why Speed Matters */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Why Every Hour Counts: The Water Damage Timeline
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Water damage isn't static—it's a rapidly evolving emergency. Here's what happens to your Northern Virginia home as time passes without professional intervention.
              </p>

              <div className="space-y-6">
                {whyActFast.map((phase, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4 text-white">
                      <div className="flex items-center gap-3">
                        <Clock size={20} />
                        <span className="font-bold text-lg">{phase.time}</span>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <ul className="space-y-3">
                        {phase.events.map((event, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-muted">
                            <ArrowRight size={16} className="text-orange-500 mt-0.5 shrink-0" />
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <Info className="text-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-text mb-2">Professional Restoration Prevents Escalation</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      Professional water damage restoration companies use industrial dehumidifiers, air movers, moisture meters, and thermal imaging to dry structures completely—preventing the escalation shown above. Most insurance companies pre-approve emergency mitigation because it saves them money versus extensive mold remediation and structural repairs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Northern Virginia Specific Considerations */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Northern Virginia-Specific Considerations
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Northern Virginia's unique climate, soil conditions, and housing stock create specific water damage challenges homeowners should understand.
              </p>

              <div className="space-y-6">
                {regionalConsiderations.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-medium text-text mb-3 flex items-center gap-2">
                      <MapPin size={18} className="text-primary" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-xs text-blue-900 font-medium">{item.action}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What to Expect from Professional Restoration */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                What to Expect From Professional Water Damage Restoration
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Understanding the professional restoration process helps you know what to expect when you call Flood Doctor or another certified restoration company.
              </p>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">1. Emergency Response (0-2 Hours)</h4>
                      <p className="text-sm text-muted">Our team arrives on-site, performs safety assessment, identifies the water source, and begins emergency water extraction. We document all damage for insurance purposes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Camera size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">2. Inspection & Assessment (Hours 2-4)</h4>
                      <p className="text-sm text-muted">We use moisture meters, thermal imaging, and hygrometers to identify all affected areas—including hidden moisture in walls, floors, and ceilings. We classify the water category and determine the restoration scope.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Wind size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">3. Structural Drying (Days 1-5)</h4>
                      <p className="text-sm text-muted">Industrial dehumidifiers and air movers run 24/7 to dry all structural materials to safe moisture levels. We monitor progress daily with moisture readings and adjust equipment placement as needed.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <WrenchIcon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">4. Cleanup & Repairs (Days 5-14)</h4>
                      <p className="text-sm text-muted">Once structures are dry, we remove damaged materials, treat for mold prevention, and coordinate repairs. Most residential projects complete within 7-14 days depending on extent of damage.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">5. Documentation & Insurance</h4>
                      <p className="text-sm text-muted">We provide complete documentation, coordinate with your insurance adjuster, and submit detailed Xactimate estimates. We handle insurance billing directly so you don't pay out-of-pocket beyond your deductible.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* External Resources */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Additional Resources & Authoritative Information
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                These trusted organizations provide additional guidance on water damage, restoration standards, and homeowner resources.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://www.iicrc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">IICRC - Water Damage Standards</div>
                    <div className="text-xs text-muted">Industry certification & best practices</div>
                  </div>
                </a>

                <a
                  href="https://www.epa.gov/mold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">EPA - Mold Prevention Guide</div>
                    <div className="text-xs text-muted">Federal mold & moisture resources</div>
                  </div>
                </a>

                <a
                  href="https://www.fema.gov/disaster/how-declared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">FEMA - Disaster Assistance</div>
                    <div className="text-xs text-muted">Federal flood & storm recovery aid</div>
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
                    <div className="font-medium text-text text-sm">Ready.gov - Flood Preparedness</div>
                    <div className="text-xs text-muted">Emergency preparedness planning</div>
                  </div>
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/water-damage-northern-virginia-guide/" />

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
                  24/7 Emergency Response
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Water damage doesn't wait for business hours. We respond to emergencies across Northern Virginia 24/7/365—including holidays.
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
                      <div className="text-xs text-white font-medium">Average Response Time</div>
                      <div className="text-xs text-blue-200">60-90 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Shield size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">IICRC Certified</div>
                      <div className="text-xs text-blue-200">Licensed & insured</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Direct Insurance Billing</div>
                      <div className="text-xs text-blue-200">We handle the paperwork</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4">Northern Virginia Service Areas</h4>
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary shrink-0" />
                    Fairfax County
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary shrink-0" />
                    Arlington County
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary shrink-0" />
                    Alexandria City
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary shrink-0" />
                    Loudoun County
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary shrink-0" />
                    Prince William County
                  </div>
                  <a href="/locations/" className="text-primary text-sm font-medium hover:underline mt-3 inline-block">
                    View All Service Areas →
                  </a>
                </div>
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
                  <a href="/resources/mold-prevention-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Mold Prevention
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Wait—Water Damage Gets Worse By The Hour
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our Northern Virginia emergency response team is standing by 24/7 to minimize damage and start your restoration immediately.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-primary border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call Now: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default WaterDamageNorthernVirginiaGuide;
