import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { generateArticleSchema, generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  AlertTriangle,
  Zap,
  Droplets,
  Shield,
  CheckCircle2,
  Clock,
  Camera,
  FileText,
  Download,
  Home,
  Flame,
  Package,
  Users,
  Smartphone,
  MapPin,
  XCircle,
  ThermometerSun,
  Wind,
  HeartPulse,
  ChevronRight,
  Printer
} from 'lucide-react';

const EmergencyChecklist: React.FC = () => {
  const faqs = [
    {
      question: "What should I do first when I discover water damage?",
      answer: "First, ensure everyone is safe—evacuate if structural integrity is compromised. Second, turn off electricity to affected areas if you can do so safely from the main panel. Third, stop the water source if possible. Fourth, call your insurance company and a professional restoration company. Do not enter standing water or touch electrical components."
    },
    {
      question: "When should I call 911 for water damage?",
      answer: "Call 911 if: there's significant structural damage or collapse, you smell gas or suspect a gas leak, electrical hazards exist that you cannot safely shut off, or if anyone is injured. For water damage alone without these hazards, call a restoration company directly."
    },
    {
      question: "Should I wait for insurance approval before calling restoration services?",
      answer: "No. Your insurance policy requires you to mitigate damage immediately. Waiting can lead to mold growth, structural damage, and claim denial. Call restoration services within the first 24 hours. Professional companies like Flood Doctor bill insurance directly and document everything for your claim."
    },
    {
      question: "How long do I have before mold starts growing?",
      answer: "Mold can begin growing within 24-48 hours in wet conditions. That's why emergency mitigation must begin immediately. Professional water extraction and drying equipment can prevent mold if deployed quickly enough."
    },
    {
      question: "What items should I prioritize saving from water damage?",
      answer: "Priority order: 1) Important documents (insurance, titles, medical records), 2) Medications and medical supplies, 3) Electronics and data storage, 4) Sentimental items (photos, heirlooms), 5) High-value items (jewelry, collectibles), 6) Furniture and clothing. Move items to dry areas or elevate them above water level."
    },
    {
      question: "Can I clean up water damage myself?",
      answer: "Small, clean water events (less than 10 square feet from a clean source) may be manageable with a wet/dry vacuum and fans. However, anything larger, contaminated water (sewage, flood water), or damage behind walls requires professional equipment and expertise. Category 2 and 3 water pose health risks."
    },
    {
      question: "What if the water damage happens overnight or on weekends?",
      answer: "Call immediately, even at 3 AM. Water damage restoration companies like Flood Doctor operate 24/7/365, including holidays. Water doesn't wait for business hours, and neither should you. Every hour of delay increases damage severity and costs."
    },
    {
      question: "Who do I call first: insurance or restoration company?",
      answer: "Call both as soon as the area is safe. Many restoration companies can handle the insurance call on your behalf while beginning emergency mitigation. Document everything with photos first. The restoration company will preserve evidence and create documentation for your claim."
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

  const articleSchema = generateArticleSchema({
    headline: 'Water Damage Emergency Checklist',
    description: 'Step-by-step emergency checklist for water damage. Safety protocols, water shutoff guide, documentation steps, hour-by-hour timeline, and professional contact list for Northern Virginia homeowners.',
    slug: '/resources/emergency-checklist/',
    datePublished: '2025-01-01',
    articleSection: 'Resources'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: 'Resources', path: '/resources/' },
    { label: 'Emergency Checklist', path: '/resources/emergency-checklist/' }
  ]);

  const pageSchema = combineSchemas(breadcrumbSchema, articleSchema, faqSchema);

  const safetyChecklist = [
    {
      icon: Zap,
      title: "Electrical Safety",
      critical: true,
      steps: [
        "Do NOT enter standing water if electrical outlets or appliances are submerged",
        "Turn off power at main circuit breaker if you can reach it safely (dry path only)",
        "Unplug electronics and appliances in affected areas",
        "Do not use electrical equipment while standing in water",
        "Call electrician if unsure about electrical safety"
      ]
    },
    {
      icon: Flame,
      title: "Gas & Fire Hazards",
      critical: true,
      steps: [
        "If you smell gas, evacuate immediately and call 911 from outside",
        "Turn off gas at main valve if accessible and safe",
        "Do not use candles or open flames (gas leaks may be present)",
        "Avoid smoking in or near affected areas",
        "Check water heater and gas appliances for damage"
      ]
    },
    {
      icon: Home,
      title: "Structural Integrity",
      critical: true,
      steps: [
        "Look for sagging ceilings, bulging walls, or warped floors",
        "Do not enter if you hear cracking sounds or see structural damage",
        "Stay away from damaged areas until professionals assess",
        "Evacuate if ceiling water stains are spreading or dripping heavily",
        "Check foundation and support beams in basement if accessible"
      ]
    },
    {
      icon: HeartPulse,
      title: "Health & Contamination",
      critical: false,
      steps: [
        "Assume flood water or sewage backup is contaminated",
        "Wear protective gloves, boots, and N95 mask if entering affected area",
        "Wash hands thoroughly after any contact with water or materials",
        "Keep children and pets away from damaged areas",
        "Seek medical attention if you have open wounds exposed to contaminated water"
      ]
    }
  ];

  const waterSourceGuide = [
    {
      source: "Burst Pipe or Supply Line",
      shutoff: "Turn off main water valve (usually near water meter or street)",
      urgency: "Immediate",
      icon: Droplets,
      notes: "Locate and mark your main shutoff valve before emergencies. Everyone in household should know where it is."
    },
    {
      source: "Water Heater Leak",
      shutoff: "Turn off cold water supply to heater + turn off power/gas to unit",
      urgency: "Immediate",
      icon: ThermometerSun,
      notes: "Hot water is scalding risk. Shut off heater before approaching. May need professional to drain."
    },
    {
      source: "Appliance Leak (Washer, Dishwasher)",
      shutoff: "Turn off supply valves behind/under appliance",
      urgency: "Immediate",
      icon: Package,
      notes: "Most appliances have dedicated shutoff valves. Unplug appliance if accessible."
    },
    {
      source: "Toilet Overflow",
      shutoff: "Turn clockwise shutoff valve at base of toilet",
      urgency: "Immediate",
      icon: Droplets,
      notes: "Contaminated water. Avoid contact. Valve is typically on left side at floor level."
    },
    {
      source: "Roof Leak / Storm Damage",
      shutoff: "Cannot stop source; contain and document",
      urgency: "High",
      icon: Wind,
      notes: "Place buckets, tarps. Photograph damage. Emergency roof repair may be needed."
    },
    {
      source: "Foundation / Groundwater",
      shutoff: "Cannot stop source; pump and seal",
      urgency: "High",
      icon: Home,
      notes: "Requires sump pump, drainage system. May need foundation waterproofing."
    }
  ];

  const hourByHour = [
    {
      timeframe: "Minutes 0-15",
      priority: "Critical",
      icon: AlertTriangle,
      color: "red",
      actions: [
        "Ensure all people and pets are safe",
        "Stop water source if possible and safe",
        "Turn off electricity to affected areas",
        "Call 911 if gas leak, structural damage, or electrical hazards exist"
      ]
    },
    {
      timeframe: "Minutes 15-60",
      priority: "Critical",
      icon: Phone,
      color: "orange",
      actions: [
        "Call restoration company (Flood Doctor: 877-497-0007)",
        "Call insurance company to report claim",
        "Document everything with photos and video",
        "Begin removing standing water if safe (wet/dry vac, mops)"
      ]
    },
    {
      timeframe: "Hours 1-4",
      priority: "High",
      icon: Camera,
      color: "yellow",
      actions: [
        "Move valuables and furniture to dry areas",
        "Remove wet rugs, curtains, bedding",
        "Open windows for ventilation (if weather permits)",
        "Professional restoration team arrives and begins mitigation"
      ]
    },
    {
      timeframe: "Hours 4-24",
      priority: "High",
      icon: Shield,
      color: "blue",
      actions: [
        "Professionals extract water and set up drying equipment",
        "Insurance adjuster schedules inspection",
        "Complete detailed inventory of damaged items",
        "Begin coordinating with restoration company and insurance"
      ]
    },
    {
      timeframe: "Days 1-3",
      priority: "Medium",
      icon: Wind,
      color: "green",
      actions: [
        "Drying equipment runs continuously (fans, dehumidifiers)",
        "Daily moisture readings to track progress",
        "Insurance adjuster inspects damage",
        "Review and negotiate insurance estimate"
      ]
    },
    {
      timeframe: "Days 3-7",
      priority: "Medium",
      icon: FileText,
      color: "gray",
      actions: [
        "Drying completion confirmed with moisture meters",
        "Mold inspection if needed",
        "Remove and dispose of unsalvageable materials",
        "Begin planning restoration and repairs"
      ]
    }
  ];

  const documentationChecklist = [
    {
      category: "Photos & Video",
      icon: Camera,
      items: [
        "Overall view of each affected room from multiple angles",
        "Close-ups of water source and damage origin",
        "All damaged walls, floors, ceilings, and contents",
        "Serial numbers and brand names on damaged appliances",
        "Water level marks or staining",
        "Moisture readings if taken by professional"
      ]
    },
    {
      category: "Written Documentation",
      icon: FileText,
      items: [
        "Date and time water damage discovered",
        "Detailed description of what happened",
        "List of all damaged items with estimated values",
        "Names and contact info of everyone involved",
        "Insurance claim number and adjuster contact",
        "Timeline of all actions taken"
      ]
    },
    {
      category: "Receipts & Records",
      icon: Download,
      items: [
        "Emergency service call receipts",
        "Temporary living expenses (if displaced)",
        "Cleaning and restoration invoices",
        "Replacement item receipts",
        "Contractor estimates and bids",
        "Communication log with insurance company"
      ]
    }
  ];

  const priorityItems = [
    {
      priority: 1,
      label: "Critical",
      color: "red",
      items: [
        "Medications and medical equipment",
        "Important documents (insurance, IDs, titles, passports)",
        "Money, credit cards, checkbooks",
        "Smartphones and chargers",
        "Medical records",
        "Emergency contacts list"
      ]
    },
    {
      priority: 2,
      label: "High Priority",
      color: "orange",
      items: [
        "Computers, hard drives, backup drives",
        "Photos, videos, and irreplaceable keepsakes",
        "Jewelry and high-value collectibles",
        "Legal documents and tax records",
        "Children's special items (comfort objects)",
        "Pet supplies and medications"
      ]
    },
    {
      priority: 3,
      label: "Medium Priority",
      color: "yellow",
      items: [
        "Electronics (TVs, gaming systems)",
        "Upholstered furniture (if cleanable)",
        "Clothing and shoes",
        "Kitchen items and small appliances",
        "Books and documents (can be freeze-dried)",
        "Artwork and decorative items"
      ]
    }
  ];

  const contactChecklist = [
    {
      contact: "Emergency Services",
      when: "Gas leak, structural damage, electrical hazard, injuries",
      number: "911",
      priority: "Critical"
    },
    {
      contact: "Water Restoration Company",
      when: "Immediately after ensuring safety",
      number: "(877) 497-0007",
      priority: "Critical",
      company: "Flood Doctor - 24/7 Emergency Response"
    },
    {
      contact: "Insurance Company",
      when: "Within 24 hours of damage",
      number: "Check your policy declarations page",
      priority: "Critical"
    },
    {
      contact: "Water Utility Company",
      when: "If main line issue or cannot locate shutoff",
      number: "Check bill or search '[County] water utility'",
      priority: "High"
    },
    {
      contact: "Electrician",
      when: "Electrical damage or if power cannot be safely restored",
      number: "Licensed electrician or utility company",
      priority: "High"
    },
    {
      contact: "Plumber",
      when: "Cannot locate source or stop leak",
      number: "24-hour emergency plumber",
      priority: "Medium"
    }
  ];

  const colorClasses = {
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'bg-red-100 text-red-600',
      text: 'text-red-900'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'bg-orange-100 text-orange-600',
      text: 'text-orange-900'
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'bg-yellow-100 text-yellow-600',
      text: 'text-yellow-900'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'bg-blue-100 text-blue-600',
      text: 'text-blue-900'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'bg-green-100 text-green-600',
      text: 'text-green-900'
    },
    gray: {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      icon: 'bg-gray-100 text-gray-600',
      text: 'text-gray-900'
    }
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Emergency Checklist"
        description="Step-by-step emergency checklist for water damage. Safety protocols, water shutoff guide, documentation steps, hour-by-hour timeline, and professional contact list for Northern Virginia homeowners."
        schema={pageSchema}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 border-b border-red-100 pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Emergency Checklist', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle size={14} /> Emergency Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Water Damage Emergency Checklist: First 24 Hours Action Guide
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              When water damage strikes, every minute counts. This comprehensive checklist guides you through safety protocols, emergency response, and critical first steps to minimize damage and protect your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg" className="bg-red-600 hover:bg-red-700">
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

      {/* Printable Notice */}
      <div className="bg-blue-600 text-white py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Printer size={20} />
              <span className="text-sm font-medium">Print this checklist and keep it accessible for emergencies</span>
            </div>
            <Button
              onClick={() => window.print()}
              variant="secondary"
              size="sm"
              className="bg-white text-blue-600 hover:bg-blue-50 border-none"
            >
              <Download size={16} className="mr-2" />
              Print Checklist
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* Introduction */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-medium text-text mb-6">
              Why the First 24 Hours Are Critical
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Water damage escalates rapidly. Within 24 hours, clean water becomes contaminated, drywall begins swelling, wood starts warping, and mold spores activate in moist conditions. Insurance claims can be denied if homeowners don't act quickly to mitigate damage.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              According to IICRC standards, professional water extraction and drying should begin within 24-48 hours to prevent secondary damage. Category 1 water (clean) can become Category 2 (gray water) within hours when it contacts building materials.
            </p>
            <p className="text-muted leading-relaxed">
              This emergency checklist is organized by urgency, starting with life-safety priorities and progressing through documentation and mitigation. Keep this guide accessible and review it annually with your family.
            </p>
          </div>
        </section>

        {/* Safety Checklist - FIRST PRIORITY */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Step 1: Immediate Safety Assessment
            </h2>
            <p className="text-red-600 font-medium text-lg max-w-2xl mx-auto">
              DO NOT ENTER AFFECTED AREAS UNTIL YOU COMPLETE THIS SAFETY CHECKLIST
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {safetyChecklist.map((item, i) => (
              <div
                key={i}
                className={`border-2 rounded-3xl p-8 ${
                  item.critical ? 'border-red-300 bg-red-50/50' : 'border-orange-200 bg-orange-50/50'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                    item.critical ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className={`font-display text-xl font-medium mb-1 ${
                      item.critical ? 'text-red-900' : 'text-orange-900'
                    }`}>
                      {item.title}
                    </h3>
                    {item.critical && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 uppercase">
                        <AlertTriangle size={12} /> Critical Priority
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${
                        item.critical ? 'text-red-600' : 'text-orange-600'
                      }`} />
                      <span className={`text-sm leading-relaxed ${
                        item.critical ? 'text-red-900' : 'text-orange-900'
                      }`}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Water Source Identification & Shutoff */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Step 2: Stop the Water Source
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Identify the source and shut off water immediately to prevent further damage.
            </p>
          </div>

          <div className="space-y-4">
            {waterSourceGuide.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <item.icon size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-medium text-text text-lg">{item.source}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        item.urgency === 'Immediate' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {item.urgency}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="text-sm font-medium text-gray-500 mb-1">How to Stop:</div>
                      <div className="text-base text-text">{item.shutoff}</div>
                    </div>

                    <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100">
                      <div className="text-xs font-medium text-gray-500 mb-1">Important:</div>
                      <div className="text-sm text-gray-700">{item.notes}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-amber-900 mb-2">Cannot Locate the Source?</h4>
                <p className="text-sm text-amber-800 mb-3">
                  If you cannot find or stop the water source, shut off the main water valve to your home. This is typically located near your water meter, in the basement, or where the main line enters the house. Call a plumber or water utility immediately for assistance.
                </p>
                <div className="text-sm font-medium text-amber-900">
                  Know where your main shutoff valve is BEFORE an emergency happens.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hour-by-Hour Timeline */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Step 3: First 24 Hours Action Timeline
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Follow this timeline to minimize damage and maximize insurance recovery.
            </p>
          </div>

          <div className="space-y-6">
            {hourByHour.map((phase, i) => {
              const colors = colorClasses[phase.color as keyof typeof colorClasses];
              return (
                <div key={i} className={`${colors.bg} border ${colors.border} rounded-3xl p-8`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center shrink-0`}>
                      <phase.icon size={28} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className={`font-display text-2xl font-medium ${colors.text}`}>
                          {phase.timeframe}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide ${colors.icon}`}>
                          {phase.priority}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.actions.map((action, j) => (
                          <div key={j} className="flex items-start gap-3 bg-white/70 rounded-xl p-4">
                            <ChevronRight size={18} className={`mt-0.5 shrink-0 ${colors.text}`} />
                            <span className={`text-sm ${colors.text}`}>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Documentation Checklist */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Step 4: Document Everything for Insurance
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Thorough documentation is critical for insurance claims. Start documenting immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {documentationChecklist.map((category, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-medium text-text">{category.category}</h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Camera size={20} className="text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Documentation Best Practices</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Take at least 50-100 photos from every angle before any cleanup begins. Use your phone's timestamp feature. Include wide shots showing context and close-ups of specific damage. Video walkthroughs are even better—narrate what you're seeing as you record.
                </p>
                <p className="text-sm font-medium text-blue-900">
                  Professional restoration companies like Flood Doctor document everything with professional equipment and provide detailed reports to support your claim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Items to Save */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Step 5: Item Salvage Priority List
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              You may have limited time. Save the most important items first.
            </p>
          </div>

          <div className="space-y-6">
            {priorityItems.map((group, i) => {
              const colors = colorClasses[group.color as keyof typeof colorClasses];
              return (
                <div key={i} className={`${colors.bg} border ${colors.border} rounded-2xl p-8`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`px-4 py-2 rounded-xl ${colors.icon} font-bold text-lg`}>
                      Priority {group.priority}
                    </div>
                    <h3 className={`font-display text-xl font-medium ${colors.text}`}>
                      {group.label}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm bg-white/70 rounded-lg p-3">
                        <Package size={14} className={colors.text.replace('text-', 'text-opacity-60 text-')} />
                        <span className={colors.text}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-gray-100 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <XCircle size={20} className="text-gray-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Leave Behind (Not Worth Risk)</h4>
                <p className="text-sm text-gray-700">
                  Do not risk safety for replaceable items like furniture, appliances, or common household goods. These can be documented for insurance replacement. Never enter structurally unsafe areas to retrieve items.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Contact Checklist */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Step 6: Emergency Contact Checklist
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Keep these contacts accessible. Call in order of urgency.
            </p>
          </div>

          <div className="space-y-4">
            {contactChecklist.map((item, i) => (
              <div
                key={i}
                className={`bg-white border rounded-2xl p-6 hover:shadow-md transition-shadow ${
                  item.priority === 'Critical' ? 'border-red-200' :
                  item.priority === 'High' ? 'border-orange-200' :
                  'border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-text text-lg">{item.contact}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        item.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                        item.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                    <div className="text-sm text-muted mb-2">{item.when}</div>
                    {item.company && (
                      <div className="text-sm text-primary font-medium">{item.company}</div>
                    )}
                  </div>

                  <div className="shrink-0">
                    {item.number.startsWith('(') || item.number === '911' ? (
                      <a
                        href={`tel:${item.number.replace(/\D/g, '')}`}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                          item.priority === 'Critical'
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        <Phone size={18} />
                        {item.number}
                      </a>
                    ) : (
                      <div className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                        {item.number}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Northern VA Specific Resources */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="font-display text-3xl font-medium mb-4 flex items-center gap-3">
                <MapPin size={32} />
                Northern Virginia Resources
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Local emergency contacts and utility information for the Northern Virginia region.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3 text-blue-100">Emergency Management</h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>Fairfax County: 703-691-2131</li>
                    <li>Arlington County: 703-228-5050</li>
                    <li>Loudoun County: 703-777-1021</li>
                    <li>Prince William: 703-792-6500</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3 text-blue-100">Utilities</h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>Dominion Energy: 1-866-366-4357</li>
                    <li>Washington Gas: 1-800-752-6633</li>
                    <li>Fairfax Water: 703-698-5800</li>
                    <li>VA 511 (Road Conditions): 511</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <GoogleStyleFAQ
            data={faqs}
            title="Emergency Response FAQ"
            className="border-none p-0"
          />
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Experiencing Water Damage Right Now?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Flood Doctor provides 24/7 emergency water damage response throughout Northern Virginia. We arrive within 60-90 minutes and begin mitigation immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="tel:8774970007"
              variant="secondary"
              size="lg"
              className="bg-white text-red-700 border-none hover:bg-red-50"
            >
              <Phone size={20} className="mr-2" />
              Call Now: (877) 497-0007
            </Button>
            <div className="text-white text-sm">
              <Clock size={16} className="inline mr-2" />
              Available 24/7 Including Holidays
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmergencyChecklist;
