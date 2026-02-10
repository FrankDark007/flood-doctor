import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Camera,
  FileText,
  ClipboardCheck,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  Video,
  Image,
  FolderOpen,
  Receipt,
  MessageSquare,
  Users,
  ArrowRight,
  Info,
  DollarSign,
  Scale,
  Star,
  Hash
} from 'lucide-react';

const InsuranceDocumentationGuide: React.FC = () => {
  const faqs = [
    {
      question: "What should I photograph first after water damage?",
      answer: "Immediately photograph the water source (burst pipe, leak origin), then standing water levels, followed by all affected rooms from multiple angles. Capture close-ups of damaged materials (wet drywall, carpet, flooring) and any damaged belongings. Take wide shots showing the entire affected area and detail shots showing moisture intrusion. Use your phone's timestamp feature and take 50-100+ photos minimum."
    },
    {
      question: "Do I need to save receipts for emergency mitigation services?",
      answer: "Yes. Your insurance policy requires you to mitigate further damage, and emergency mitigation costs (water extraction, tarping, board-up) are typically reimbursable. Save receipts for all emergency services, temporary repairs, equipment rentals, and related expenses. These expenses are separate from your deductible and are covered under your policy's emergency mitigation clause."
    },
    {
      question: "How long should I keep my insurance claim documentation?",
      answer: "Keep all claim-related documentation for at least 5-7 years. This includes photos, estimates, receipts, correspondence, the final settlement, and proof of repairs. If disputes arise or if you sell your property, having complete documentation is essential. Store digital copies in cloud storage and physical copies in a waterproof, fireproof safe."
    },
    {
      question: "Should I create a video walkthrough of the damage?",
      answer: "Yes. Video walkthroughs provide context that photos alone can't capture. Record a slow, steady walkthrough of all affected areas while narrating what you're showing. Point out the water source, trace the path of water intrusion, and show the full extent of damage. Videos should be 5-15 minutes and supplement—not replace—detailed photos."
    },
    {
      question: "What if I didn't take photos before cleanup started?",
      answer: "While before-cleanup photos are critical, document what you can immediately. Photograph materials as they're removed (wet insulation, carpet padding), moisture meter readings, and any remaining damage. Take photos of extracted water in buckets, wet materials piled outside, and equipment in use. Explain to your adjuster that emergency mitigation was necessary to prevent mold. Your restoration contractor's documentation can also support your claim."
    },
    {
      question: "Do I need to document every damaged item individually?",
      answer: "For high-value items (electronics, furniture, appliances), photograph each item individually showing brand, model, and damage. For general contents (clothing, books, kitchenware), you can photograph groups by category. Create a detailed written inventory with descriptions, approximate purchase dates, and estimated replacement costs for all damaged items. The more detail you provide, the stronger your contents claim."
    },
    {
      question: "Should I keep a log of all communication with my insurance company?",
      answer: "Absolutely. Maintain a detailed communication log including date, time, person's name/title, method of contact (phone/email), and a summary of what was discussed. Note any promises made, deadlines given, or information requested. This log becomes critical if disputes arise or if you need to escalate your claim. Follow up verbal conversations with email summaries to create a paper trail."
    },
    {
      question: "Can my restoration company help with documentation?",
      answer: "Yes. Professional restoration companies like Flood Doctor provide comprehensive documentation including thermal imaging, moisture mapping, photographic evidence, and detailed scope-of-work estimates. We use Xactimate (the same software insurance companies use) to create line-item estimates, coordinate with adjusters, and maintain daily logs. Professional documentation significantly strengthens your claim and reduces disputes."
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

  const immediateActions = [
    {
      priority: "Critical",
      time: "0-2 Hours",
      icon: Camera,
      title: "Photograph Water Source & Standing Water",
      description: "Before any cleanup, photograph the source of water (pipe, roof leak, appliance), standing water depth, and water spread throughout affected areas.",
      items: [
        "Source of leak/flooding (close-up and wide shot)",
        "Standing water levels with ruler/measurement",
        "Water spread across floors, rooms, levels",
        "Ceiling stains or bulging if water is from above"
      ]
    },
    {
      priority: "Critical",
      time: "0-2 Hours",
      icon: Video,
      title: "Record Video Walkthrough",
      description: "Take a slow video walkthrough of all affected areas while narrating what you're showing. This provides critical context.",
      items: [
        "Start at the water source, trace the path of water",
        "Show full extent of damage in each room",
        "Narrate: date, time, and what you're showing",
        "Record sounds (dripping water, dehumidifiers running)"
      ]
    },
    {
      priority: "Critical",
      time: "2-4 Hours",
      icon: Image,
      title: "Document All Damaged Materials",
      description: "Photograph every damaged material before removal—wet carpet, soaked drywall, warped flooring, damaged insulation.",
      items: [
        "Wet carpet and padding (pull back corner to show padding)",
        "Water-stained or bulging drywall",
        "Warped or buckled hardwood/laminate",
        "Damaged baseboards, trim, and casings"
      ]
    },
    {
      priority: "Important",
      time: "4-8 Hours",
      icon: FolderOpen,
      title: "Photograph Damaged Personal Property",
      description: "Document all damaged belongings by category. High-value items get individual photos; group similar items together.",
      items: [
        "Furniture (show brand labels and water damage)",
        "Electronics (include model/serial numbers)",
        "Clothing and textiles (by category/group)",
        "Collectibles, artwork, or high-value items (individual photos)"
      ]
    }
  ];

  const photoChecklist = [
    {
      room: "General - All Areas",
      items: [
        "Water source (burst pipe, leak origin, appliance failure)",
        "Standing water depth (use ruler or object for scale)",
        "Moisture meter readings on affected materials",
        "Thermal imaging (if available) showing moisture intrusion",
        "Wide-angle shots showing full extent of damage",
        "Close-up shots of specific damage details"
      ]
    },
    {
      room: "Floors & Carpet",
      items: [
        "Wet carpet surface and padding (lift corner to show padding)",
        "Water stains on hardwood/laminate",
        "Buckling, warping, or cupping of flooring",
        "Subfloor damage (if flooring is removed)",
        "Transition strips and thresholds",
        "Standing water on tile or hard surfaces"
      ]
    },
    {
      room: "Walls & Ceilings",
      items: [
        "Water stains or discoloration on drywall",
        "Bulging, sagging, or soft spots",
        "Peeling paint or bubbling texture",
        "Damaged baseboards and crown molding",
        "Wall cavities (if drywall is removed for inspection)",
        "Ceiling damage or staining from above"
      ]
    },
    {
      room: "Bathrooms & Kitchens",
      items: [
        "Water under cabinets and vanities",
        "Damaged cabinet bases or kickboards",
        "Wet insulation under sinks",
        "Toilet, tub, or sink leak origin",
        "Grout or tile damage",
        "Appliances (dishwasher, washing machine, water heater)"
      ]
    },
    {
      room: "Basement/Crawlspace",
      items: [
        "Standing water level",
        "Foundation cracks or seepage",
        "Damaged insulation between joists",
        "Water damage to framing or subfloor",
        "Sump pump or drainage system failure",
        "HVAC equipment or water heater damage"
      ]
    }
  ];

  const writtenDocumentation = [
    {
      icon: ClipboardCheck,
      title: "Detailed Loss Inventory",
      description: "Create a comprehensive list of all damaged property, organized by room and category.",
      includes: [
        "Item description (brand, model, size, color)",
        "Approximate purchase date and original cost",
        "Current condition and extent of damage",
        "Estimated replacement cost",
        "Receipts or purchase records if available"
      ]
    },
    {
      icon: MessageSquare,
      title: "Communication Log",
      description: "Track every interaction with your insurance company, adjuster, and contractors.",
      includes: [
        "Date, time, and method of contact (phone/email/in-person)",
        "Name and title of person contacted",
        "Summary of conversation and any commitments made",
        "Follow-up items or deadlines given",
        "Claim number referenced in every entry"
      ]
    },
    {
      icon: FileText,
      title: "Written Narrative of Event",
      description: "Document the timeline of the water damage event and your response in written form.",
      includes: [
        "Date and time you discovered the damage",
        "Description of the water source and how it failed",
        "What you did immediately to stop water and mitigate damage",
        "When you contacted insurance and emergency services",
        "Weather conditions if storm-related"
      ]
    }
  ];

  const receiptsToSave = [
    {
      category: "Emergency Services",
      items: [
        "Water extraction company invoices",
        "Emergency plumbing repairs",
        "Emergency roof tarping or board-up",
        "Equipment rental (fans, dehumidifiers, wet vacs)",
        "Emergency cleanup labor"
      ],
      why: "Mitigation costs are typically fully reimbursable outside your deductible"
    },
    {
      category: "Temporary Living Expenses (ALE)",
      items: [
        "Hotel or rental property receipts",
        "Meals (if displaced from home)",
        "Pet boarding costs",
        "Storage unit rental",
        "Laundry/dry cleaning expenses"
      ],
      why: "Additional Living Expenses coverage reimburses costs while your home is uninhabitable"
    },
    {
      category: "Personal Property",
      items: [
        "Original purchase receipts for damaged items",
        "Replacement receipts for items already repurchased",
        "Appraisals for high-value items (jewelry, art, antiques)",
        "Home inventory documentation (pre-loss)",
        "Credit card statements showing purchases"
      ],
      why: "Proof of ownership and value maximizes your contents claim settlement"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Waiting to Document Until Adjuster Arrives",
      impact: "Critical damage evidence lost during emergency cleanup",
      solution: "Photograph everything immediately, even if it delays cleanup by 30-60 minutes. Emergency mitigation can proceed after initial documentation."
    },
    {
      mistake: "Taking Too Few Photos",
      impact: "Insufficient evidence to support full scope of damage",
      solution: "Take 50-100+ photos minimum. Storage is cheap; undocumented damage is expensive. Multiple angles of every affected area."
    },
    {
      mistake: "Discarding Damaged Items Before Adjuster Approval",
      impact: "Insurance may deny coverage for items they couldn't verify",
      solution: "Keep all damaged items until adjuster inspects and approves disposal. Photograph items before discarding if health/safety requires immediate removal."
    },
    {
      mistake: "Not Documenting Hidden Damage",
      impact: "Moisture behind walls and in cavities missed in claim",
      solution: "Request thermal imaging and moisture mapping. Document moisture meter readings. Have contractor check wall cavities and subfloor."
    },
    {
      mistake: "Relying Only on Verbal Communication",
      impact: "No proof of what was promised or agreed upon",
      solution: "Follow up all phone calls with email summaries. Request written confirmation of coverage decisions, timelines, and settlement amounts."
    },
    {
      mistake: "Not Keeping Organized Records",
      impact: "Lost receipts, missed deadlines, incomplete claim file",
      solution: "Create a dedicated claim folder (physical and digital). Label everything with date and claim number. Use cloud backup for all digital files."
    }
  ];

  const professionalServices = [
    {
      icon: Camera,
      service: "Professional Photo Documentation",
      description: "Restoration companies provide comprehensive photographic evidence using high-quality equipment, thermal imaging, and moisture mapping.",
      value: "Creates an irrefutable record of damage that satisfies insurance requirements and reduces disputes."
    },
    {
      icon: Scale,
      service: "Xactimate Estimates",
      description: "Industry-standard estimating software used by insurance adjusters. Line-item estimates match insurance pricing databases.",
      value: "Estimates are presented in the same format adjusters use, making approval faster and disputes less common."
    },
    {
      icon: Users,
      service: "Adjuster Coordination",
      description: "Experienced contractors meet with adjusters on-site, walk through damage, and advocate for complete coverage.",
      value: "Ensures hidden damage is identified, moisture readings are documented, and nothing is overlooked during adjuster inspection."
    },
    {
      icon: FileText,
      service: "Daily Monitoring Logs",
      description: "Professional drying requires daily equipment checks, moisture readings, and progress documentation.",
      value: "Daily logs prove proper drying protocols were followed and provide timeline evidence for insurance and potential mold claims."
    }
  ];

  const communicationTemplate = {
    title: "Insurance Communication Log Template",
    headers: ["Date/Time", "Contact", "Method", "Summary", "Action Items"],
    sampleRow: {
      date: "Jan 15, 2:30pm",
      contact: "Sarah Johnson (Adjuster)",
      method: "Phone",
      summary: "Discussed scope of damage. Adjuster to inspect Jan 18. Requested moisture map and contractor estimate.",
      action: "Send moisture report by Jan 17. Schedule contractor meeting."
    }
  };

  const adjusterMeetingChecklist = [
    "Prepare photo/video documentation for review",
    "Have contractor present to identify hidden damage",
    "Walk adjuster through every affected area",
    "Point out moisture meter readings and thermal imaging",
    "Discuss emergency mitigation costs incurred",
    "Request written estimate timeline",
    "Ask about supplemental claim process",
    "Confirm adjuster's direct contact information",
    "Get claim number and adjuster license number",
    "Request copies of all adjuster photos and notes"
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Documentation Guide: Maximizing Your Insurance Claim"
        description="Complete guide to documenting water damage for insurance claims. Photo checklist, written documentation, communication logs, and professional documentation services to maximize your settlement."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Insurance Documentation Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <FileText size={14} /> Insurance Resource
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Water Damage Documentation Guide: Maximizing Your Insurance Claim
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Proper documentation is the difference between a denied claim and a full settlement. This comprehensive guide shows you exactly what to document, when to document it, and how to organize evidence for maximum insurance coverage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call (877) 497-0007
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

            {/* Introduction */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-6">
                Why Documentation Matters
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted leading-relaxed mb-4">
                  Insurance claims live or die on documentation. When water damage strikes, the burden of proof falls on you—the homeowner—to demonstrate the extent of damage, the cause, and the costs to repair. Inadequate documentation gives insurance companies grounds to reduce or deny your claim.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  The first 2-4 hours after discovering water damage are critical. This is when you must capture evidence before emergency cleanup begins. Once materials are removed, moisture is dried, and repairs start, that evidence is gone forever.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Professional documentation—photos, videos, moisture readings, written inventories, and communication logs—creates an airtight claim file that adjusters can't easily dispute. This guide walks you through every step.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mt-8">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-text font-medium mb-2">Industry Insight</p>
                    <p className="text-sm text-muted">
                      According to insurance industry data, claims with comprehensive photo documentation settle for 30-40% more than claims with minimal evidence. The difference between a $15,000 settlement and $25,000 often comes down to documentation quality.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What to Document Immediately */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                What to Document Immediately (0-4 Hours)
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Time is critical. Follow this priority sequence to capture essential evidence before cleanup begins.
              </p>

              <div className="space-y-6">
                {immediateActions.map((action, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                        <action.icon size={26} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <h3 className="font-display text-xl font-medium text-text">
                            {action.title}
                          </h3>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            action.priority === 'Critical'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {action.priority}
                          </span>
                          <span className="text-xs text-muted flex items-center gap-1">
                            <Clock size={12} />
                            {action.time}
                          </span>
                        </div>
                        <p className="text-muted leading-relaxed mb-4">
                          {action.description}
                        </p>
                        <ul className="space-y-2">
                          {action.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text">
                              <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo Checklist by Room */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Photo Documentation Checklist by Area
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Use this room-by-room checklist to ensure you capture all necessary evidence for your claim.
              </p>

              <div className="space-y-4">
                {photoChecklist.map((area, index) => (
                  <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <Camera size={20} className="text-primary" />
                        <h3 className="font-medium text-text">{area.room}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-3">
                        {area.items.map((item, i) => (
                          <label key={i} className="flex items-start gap-2 cursor-pointer group">
                            <div className="w-4 h-4 rounded border-2 border-gray-300 group-hover:border-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                              <div className="w-2 h-2 rounded-sm bg-primary opacity-0 group-hover:opacity-30"></div>
                            </div>
                            <span className="text-sm text-text">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Written Documentation */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Written Documentation Requirements
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Photos tell the visual story, but written documentation provides critical context and detail.
              </p>

              <div className="grid md:grid-cols-1 gap-6">
                {writtenDocumentation.map((doc, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <doc.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-text mb-2">{doc.title}</h3>
                        <p className="text-sm text-muted mb-4">{doc.description}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-3 font-medium">What to Include:</p>
                      <ul className="space-y-2">
                        {doc.includes.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Receipts and Records to Save */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Receipts and Records to Save
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Every receipt related to your water damage claim is potentially reimbursable. Organize and save everything.
              </p>

              <div className="space-y-6">
                {receiptsToSave.map((category, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Receipt size={24} className="text-primary mt-1 shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-medium text-text mb-3">{category.category}</h3>
                        <ul className="space-y-2 mb-4">
                          {category.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-text">
                              <DollarSign size={14} className="text-green-600 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                            <p className="text-sm text-green-900">
                              <span className="font-medium">Why This Matters:</span> {category.why}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Communication Log Template */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Communication Log Template
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Track every interaction with your insurance company. This log becomes critical evidence if disputes arise.
              </p>

              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-4 border-b border-gray-100">
                  <h3 className="font-medium text-text flex items-center gap-2">
                    <MessageSquare size={20} className="text-primary" />
                    {communicationTemplate.title}
                  </h3>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs font-medium text-gray-500">
                  {communicationTemplate.headers.map((header, i) => (
                    <div key={i}>{header}</div>
                  ))}
                </div>

                {/* Sample Row */}
                <div className="grid grid-cols-5 gap-4 px-6 py-4 text-sm text-text border-b border-gray-100">
                  <div>{communicationTemplate.sampleRow.date}</div>
                  <div>{communicationTemplate.sampleRow.contact}</div>
                  <div>{communicationTemplate.sampleRow.method}</div>
                  <div className="col-span-2 text-muted">{communicationTemplate.sampleRow.summary}</div>
                </div>

                {/* Action Items Row */}
                <div className="px-6 py-4 bg-blue-50 text-sm">
                  <span className="font-medium text-text">Action Items: </span>
                  <span className="text-muted">{communicationTemplate.sampleRow.action}</span>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="flex items-start gap-3">
                  <Star size={18} className="text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-amber-900 mb-1">Pro Tip</p>
                    <p className="text-sm text-amber-800">
                      Follow up every phone call with an email summary sent to your adjuster. Subject line: "Claim #{communicationTemplate.sampleRow.date.split(',')[0]} - [Brief Topic]". This creates a paper trail and confirms mutual understanding.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Working with Adjusters */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Working with Insurance Adjusters
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                When the adjuster arrives, be prepared. Their inspection determines your settlement amount.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 mb-6">
                <h3 className="font-medium text-text mb-4 flex items-center gap-2">
                  <ClipboardCheck size={20} className="text-primary" />
                  Adjuster Meeting Checklist
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {adjusterMeetingChecklist.map((item, i) => (
                    <label key={i} className="flex items-start gap-2 cursor-pointer group">
                      <div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <CheckCircle2 size={12} className="text-primary opacity-0 group-hover:opacity-50 transition-opacity" />
                      </div>
                      <span className="text-sm text-text">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50/50 rounded-2xl p-6 border border-green-200">
                  <h3 className="font-medium text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Do This
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Be present for the entire inspection",
                      "Have your contractor present to identify hidden damage",
                      "Point out all affected areas, including hidden moisture",
                      "Provide copies of your documentation",
                      "Ask questions about coverage and process",
                      "Request copies of adjuster's photos and notes"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50/50 rounded-2xl p-6 border border-red-200">
                  <h3 className="font-medium text-red-800 mb-4 flex items-center gap-2">
                    <XCircle size={20} /> Don't Do This
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Don't let adjuster rush through inspection",
                      "Don't sign anything without reading carefully",
                      "Don't accept first estimate as final",
                      "Don't admit fault or speculate on causes",
                      "Don't exaggerate or misrepresent damage",
                      "Don't clean up or remove materials before inspection"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Documentation Mistakes */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Documentation Mistakes to Avoid
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                These mistakes cost homeowners thousands in reduced settlements. Learn from others' errors.
              </p>

              <div className="space-y-6">
                {commonMistakes.map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-red-50/50 px-6 py-4 border-b border-red-100">
                      <div className="flex items-start gap-3">
                        <AlertTriangle size={20} className="text-red-600 mt-0.5 shrink-0" />
                        <div>
                          <h3 className="font-medium text-red-900">{item.mistake}</h3>
                          <p className="text-sm text-red-700 mt-1">Impact: {item.impact}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-text mb-1">Solution:</p>
                          <p className="text-sm text-muted">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Documentation Services */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Professional Documentation Services
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Professional restoration companies provide comprehensive documentation that strengthens your claim.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {professionalServices.map((service, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                      <service.icon size={24} />
                    </div>
                    <h3 className="font-medium text-text mb-2">{service.service}</h3>
                    <p className="text-sm text-muted mb-4">{service.description}</p>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <p className="text-xs text-green-900">
                        <span className="font-medium">Value: </span>{service.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
                <h3 className="font-display text-2xl font-medium mb-4">
                  How Flood Doctor Documents Your Claim
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  We provide comprehensive documentation that satisfies insurance requirements and maximizes your settlement. Our process includes thermal imaging, moisture mapping, photographic evidence, Xactimate estimates, and daily monitoring logs—all organized and submitted to your insurance company.
                </p>
                <Button href="tel:8774970007" variant="secondary" className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  Call (877) 497-0007
                </Button>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Documentation FAQ"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Primary CTA */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  Professional Documentation Included
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Every Flood Doctor restoration includes comprehensive documentation: thermal imaging, moisture mapping, photo evidence, and Xactimate estimates that maximize your insurance claim.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Camera size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Thermal Imaging</div>
                      <div className="text-xs text-blue-200">Find hidden moisture</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Xactimate Estimates</div>
                      <div className="text-xs text-blue-200">Insurance-standard pricing</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Reference */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4">Documentation Checklist</h4>
                <div className="space-y-3 text-sm">
                  {[
                    "Photos of water source",
                    "Video walkthrough",
                    "Damaged materials",
                    "Personal property inventory",
                    "Receipts for all expenses",
                    "Communication log",
                    "Moisture readings",
                    "Contractor estimates"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-600 shrink-0" />
                      <span className="text-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <Hash size={18} className="text-primary" />
                  Documentation Impact
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Minimum photos needed</span>
                    <span className="font-medium text-text">50-100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Settlement increase</span>
                    <span className="font-medium text-green-600">30-40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Record retention</span>
                    <span className="font-medium text-text">5-7 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Claims with good docs</span>
                    <span className="font-medium text-primary">90% approval</span>
                  </div>
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/insurance-claims-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Insurance Claims Guide
                  </a>
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Checklists
                  </a>
                  <a href="/resources/virginia-insurance-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Virginia Insurance Guide
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
            Don't Leave Money on the Table
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Proper documentation is the difference between a partial settlement and full coverage. Call Flood Doctor for professional documentation services that maximize your insurance claim.
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

export default InsuranceDocumentationGuide;
