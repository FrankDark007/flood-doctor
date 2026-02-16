import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Shield,
  AlertTriangle,
  Microscope,
  Wind,
  Droplets,
  FileText,
  CheckCircle2,
  XCircle,
  Users,
  HardHat,
  Trash2,
  Zap,
  Target,
  Clock,
  Scale,
  BookOpen,
  ArrowRight,
  Info,
  Activity
} from 'lucide-react';

const MoldRemediationStandards: React.FC = () => {
  const faqs = [
    {
      question: "What are the IICRC S520 mold remediation standards?",
      answer: "IICRC S520 is the industry-recognized standard for professional mold remediation. It establishes protocols for assessment, containment, removal, cleaning, and verification. The standard defines three remediation levels based on contamination area, requires specific PPE and containment procedures, and mandates post-remediation verification."
    },
    {
      question: "What is the difference between mold remediation and mold removal?",
      answer: "Mold removal refers to physically removing mold from surfaces. Mold remediation is a comprehensive process that includes identifying the moisture source, fixing it, containing the area, removing contaminated materials, cleaning salvageable surfaces, treating with antimicrobials, and verifying success. Complete remediation addresses the cause, not just the symptom."
    },
    {
      question: "Does Virginia require mold remediation licenses?",
      answer: "Yes. Virginia requires mold remediation contractors to be licensed through the Department of Professional and Occupational Regulation (DPOR). Companies must have licensed supervisors and workers, carry insurance, and follow established standards. Unlicensed mold work is illegal and may void insurance claims."
    },
    {
      question: "How much does professional mold remediation cost?",
      answer: "Costs vary by contamination area and class. Small areas (<10 sq ft): $500-$1,500. Medium areas (10-100 sq ft): $1,500-$5,000. Large areas (>100 sq ft): $5,000-$30,000+. Black mold (Stachybotrys) and Category 3 water damage increase costs due to safety requirements. Most homeowners insurance covers mold resulting from covered water damage."
    },
    {
      question: "What health risks does mold pose?",
      answer: "Mold exposure can cause respiratory issues, allergic reactions, asthma attacks, eye irritation, skin rashes, and chronic sinus infections. Immunocompromised individuals, children, elderly, and those with respiratory conditions face higher risks. Some molds produce mycotoxins that can cause severe health effects. Professional remediation eliminates exposure."
    },
    {
      question: "Can I remediate mold myself?",
      answer: "EPA guidelines allow DIY remediation for small areas (<10 sq ft) from clean water sources if you have no health conditions. However, areas >10 sq ft, black mold, Category 2-3 water damage, HVAC contamination, or hidden mold require professional remediation. Improper DIY work can spread spores and worsen contamination."
    },
    {
      question: "How do you verify mold remediation is complete?",
      answer: "Post-remediation verification includes visual inspection (no visible mold), moisture meter readings (materials dry to standard), and optional air quality testing or clearance testing by independent third-party hygienists. IICRC S520 requires documentation of all steps and conditions returning to Condition 1 (normal fungal ecology)."
    },
    {
      question: "Does homeowners insurance cover mold remediation?",
      answer: "Coverage depends on the mold's cause. If mold results from a covered peril (sudden pipe burst, storm damage), remediation is typically covered. Mold from maintenance neglect, gradual leaks, or flooding (requires flood insurance) is usually excluded. Many policies cap mold coverage at $5,000-$10,000. Review your policy and endorsements."
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

  const remediationLevels = [
    {
      level: "Level I",
      area: "<10 sq ft",
      icon: Target,
      color: "blue",
      description: "Small isolated areas; typically affects one building material type",
      containment: "No containment required; limit access during work",
      ppe: "N95 respirator, gloves, eye protection",
      procedures: [
        "Clean surfaces with HEPA vacuum and damp wipe",
        "Discard porous materials in sealed 6-mil bags",
        "Clean area and surrounding 2-foot perimeter",
        "No air sampling required"
      ],
      examples: "Small ceiling tile section, isolated wall stud, bathroom grout"
    },
    {
      level: "Level II",
      area: "10-100 sq ft",
      icon: AlertTriangle,
      color: "yellow",
      description: "Mid-sized areas involving multiple materials or single large area",
      containment: "Limited containment; seal HVAC vents, use plastic sheeting",
      ppe: "Full-face respirator, disposable coveralls, gloves, boot covers",
      procedures: [
        "Install containment with single-layer poly and negative air",
        "HEPA vacuum all surfaces before removal",
        "Mist materials during removal to minimize spores",
        "Double-bag all contaminated materials",
        "Post-remediation cleaning with HEPA and antimicrobial"
      ],
      examples: "Multiple wall sections, under-sink cabinets, attic insulation area"
    },
    {
      level: "Level III",
      area: ">100 sq ft",
      icon: Shield,
      color: "orange",
      description: "Large contamination areas or HVAC system involvement",
      containment: "Full containment with negative air pressure and decontamination chamber",
      ppe: "Full-face respirator or PAPR, Tyvek suit, double gloves, boot covers",
      procedures: [
        "Install full containment with double-layer poly and critical barriers",
        "Establish decontamination chamber and negative air machines",
        "HEPA vacuum all surfaces before disturbance",
        "Remove and bag materials inside containment",
        "Clean all surfaces three times (HEPA, damp wipe, antimicrobial)",
        "Post-remediation verification required (visual + optional air testing)"
      ],
      examples: "Multiple rooms, entire basement, HVAC systems, structural framing"
    }
  ];

  const s520Requirements = [
    {
      category: "Assessment & Documentation",
      icon: FileText,
      requirements: [
        "Identify and document moisture source",
        "Classify mold conditions (1, 2, or 3)",
        "Map affected areas with photos and diagrams",
        "Document materials affected (porous vs. non-porous)",
        "Establish remediation level (I, II, or III)",
        "Create remediation protocol and scope of work"
      ]
    },
    {
      category: "Source Control",
      icon: Droplets,
      requirements: [
        "Identify and repair all moisture sources before remediation",
        "Fix leaks, improve ventilation, address humidity",
        "Install dehumidification if needed during drying",
        "Verify materials dry to acceptable levels",
        "Address root cause to prevent recurrence"
      ]
    },
    {
      category: "Containment",
      icon: Shield,
      requirements: [
        "Seal HVAC vents in work area",
        "Install poly sheeting barriers based on level",
        "Create negative air pressure (Level II-III)",
        "Install decontamination chamber (Level III)",
        "Protect adjacent areas from cross-contamination"
      ]
    },
    {
      category: "Personal Protection",
      icon: HardHat,
      requirements: [
        "Minimum N95 respirator (Level I)",
        "Full-face respirator or PAPR (Level II-III)",
        "Disposable coveralls or Tyvek suits",
        "Double gloves (inner latex, outer work gloves)",
        "Boot covers and eye protection",
        "Medical clearance for respirator use"
      ]
    },
    {
      category: "Removal & Disposal",
      icon: Trash2,
      requirements: [
        "HEPA vacuum all surfaces before disturbance",
        "Mist materials to suppress airborne spores",
        "Remove and discard porous materials (drywall, insulation, carpet)",
        "Clean non-porous materials (framing, concrete)",
        "Double-bag all contaminated materials in 6-mil poly",
        "Dispose per local regulations (typically standard waste)"
      ]
    },
    {
      category: "Cleaning & Treatment",
      icon: Zap,
      requirements: [
        "HEPA vacuum all surfaces in containment",
        "Damp wipe all surfaces with antimicrobial cleaner",
        "Apply EPA-registered antimicrobial/fungicide if appropriate",
        "Clean containment barrier surfaces",
        "HEPA vacuum and clean all equipment before removal"
      ]
    },
    {
      category: "Verification",
      icon: CheckCircle2,
      requirements: [
        "Visual inspection: no visible mold or water damage",
        "Moisture readings: all materials at or below dry standard",
        "Optional air sampling or clearance testing",
        "Photo documentation of completion",
        "Provide written completion report to property owner"
      ]
    }
  ];

  const moldConditions = [
    {
      condition: "Condition 1",
      status: "Normal Fungal Ecology",
      description: "No visible mold growth. Fungal spores at normal background levels. No moisture problems.",
      color: "green",
      action: "No remediation needed. Maintain normal humidity and ventilation."
    },
    {
      condition: "Condition 2",
      status: "Settlement or Abnormal Growth",
      description: "Small areas of visible mold or settled spores. May indicate isolated moisture problem.",
      color: "yellow",
      action: "Identify and fix moisture source. Level I or II remediation depending on area."
    },
    {
      condition: "Condition 3",
      status: "Actual Mold Growth",
      description: "Substantial mold growth indicating ongoing moisture problem or water damage event.",
      color: "red",
      action: "Professional remediation required. Level II or III depending on contamination extent."
    }
  ];

  const bestPractices = [
    {
      practice: "Always Fix the Water Problem First",
      explanation: "Mold remediation without addressing moisture sources is temporary. Mold will return within weeks.",
      implementation: "Repair leaks, improve drainage, install dehumidifiers, fix grading issues before starting mold work."
    },
    {
      practice: "Use HEPA Filtration Throughout",
      explanation: "HEPA filters capture 99.97% of particles ≥0.3 microns, including mold spores. Standard filters don't.",
      implementation: "HEPA vacuums for cleaning, HEPA air scrubbers for negative air, HEPA filters in cleanup equipment."
    },
    {
      practice: "Contain Before Disturbing",
      explanation: "Disturbing mold releases millions of spores. Containment prevents spread to clean areas.",
      implementation: "Install containment, negative air, and decontamination procedures before any mold disturbance."
    },
    {
      practice: "Remove, Don't Clean, Porous Materials",
      explanation: "Mold roots penetrate porous materials (drywall, insulation, carpet). Surface cleaning doesn't eliminate it.",
      implementation: "Discard all porous materials with visible mold. Clean only non-porous surfaces (metal, glass, sealed wood)."
    },
    {
      practice: "Never Use Bleach on Porous Surfaces",
      explanation: "Bleach doesn't penetrate porous materials and creates moisture that feeds mold. EPA doesn't recommend it.",
      implementation: "Use EPA-registered antimicrobials designed for mold. Remove porous materials instead of attempting to clean."
    },
    {
      practice: "Document Everything",
      explanation: "Insurance claims and legal disputes require comprehensive documentation of conditions and procedures.",
      implementation: "Photos before/during/after, moisture readings, scope of work, materials removed, cleaning procedures, verification."
    },
    {
      practice: "Get Post-Remediation Verification",
      explanation: "Visual inspection alone may miss hidden mold or elevated spore levels.",
      implementation: "Consider independent third-party air testing after large remediations. Document moisture readings and conditions."
    },
    {
      practice: "Protect Occupant Health",
      explanation: "Sensitive individuals should not be present during remediation. Cross-contamination can spread spores.",
      implementation: "Relocate occupants during Level II-III work. Maintain containment. Clean adjacent areas thoroughly."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Remediation Standards: IICRC S520"
        description="Complete guide to professional mold remediation standards. Learn IICRC S520 protocols, EPA guidelines, Virginia licensing, and industry best practices for safe mold removal."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Mold Remediation Standards', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Microscope size={14} /> Technical Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Mold Remediation Standards and Best Practices
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Professional mold remediation follows strict protocols to protect occupant health and ensure complete removal. This comprehensive guide covers IICRC S520 standards, EPA guidelines, Virginia regulations, and industry best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Mold Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* Introduction */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-medium text-text mb-6">
              Why Mold Remediation Standards Matter
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Mold remediation isn't just about scrubbing surfaces. Improper remediation can spread contamination, expose occupants to health risks, and fail to address the root cause—leading to recurrence within weeks.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The Institute of Inspection, Cleaning and Restoration Certification (IICRC) publishes the S520 Standard for Professional Mold Remediation, establishing protocols for assessment, containment, removal, and verification. The EPA also provides guidelines for mold cleanup in schools and commercial buildings.
            </p>
            <p className="text-muted leading-relaxed">
              Virginia requires mold remediation contractors to be licensed through the Department of Professional and Occupational Regulation (DPOR), ensuring workers are trained and companies follow established standards.
            </p>
          </div>
        </section>

        {/* Mold Conditions */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            IICRC Mold Condition Classifications
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {moldConditions.map((cond, i) => (
              <div key={i} className={`rounded-3xl overflow-hidden border-2 ${
                cond.color === 'green' ? 'border-green-200' :
                cond.color === 'yellow' ? 'border-yellow-200' :
                'border-red-200'
              }`}>
                <div className={`p-6 ${
                  cond.color === 'green' ? 'bg-green-500' :
                  cond.color === 'yellow' ? 'bg-yellow-500' :
                  'bg-red-600'
                }`}>
                  <div className="text-sm font-medium text-white/80">{cond.condition}</div>
                  <h3 className={`text-xl font-bold ${
                    cond.color === 'yellow' ? 'text-yellow-900' : 'text-white'
                  }`}>
                    {cond.status}
                  </h3>
                </div>

                <div className={`p-6 ${
                  cond.color === 'green' ? 'bg-green-50' :
                  cond.color === 'yellow' ? 'bg-yellow-50' :
                  'bg-red-50'
                }`}>
                  <p className="text-sm text-gray-700 mb-4">{cond.description}</p>
                  <div className={`p-3 rounded-xl text-xs ${
                    cond.color === 'green' ? 'bg-green-100 text-green-800' :
                    cond.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    <strong>Action:</strong> {cond.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Remediation Levels */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Three Levels of Mold Remediation
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Remediation level is determined by contaminated surface area and situation complexity.
            </p>
          </div>

          <div className="space-y-8">
            {remediationLevels.map((level, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                    level.color === 'blue' ? 'bg-blue-500' :
                    level.color === 'yellow' ? 'bg-yellow-500' :
                    'bg-orange-500'
                  }`}>
                    <level.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="font-display text-2xl font-medium text-text">{level.level}</h3>
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium ${
                        level.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        level.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        <Target size={12} />
                        {level.area}
                      </span>
                    </div>
                    <p className="text-muted">{level.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Containment</h4>
                    <p className="text-sm text-gray-700">{level.containment}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">PPE Required</h4>
                    <p className="text-sm text-gray-700">{level.ppe}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Examples</h4>
                    <p className="text-sm text-gray-700">{level.examples}</p>
                  </div>
                </div>

                <div className={`p-4 rounded-xl ${
                  level.color === 'blue' ? 'bg-blue-50' :
                  level.color === 'yellow' ? 'bg-yellow-50' :
                  'bg-orange-50'
                }`}>
                  <h4 className="text-sm font-bold mb-3 text-text">Standard Procedures</h4>
                  <ul className="space-y-2">
                    {level.procedures.map((proc, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${
                          level.color === 'blue' ? 'text-blue-600' :
                          level.color === 'yellow' ? 'text-yellow-600' :
                          'text-orange-600'
                        }`} />
                        {proc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* S520 Requirements */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-4 text-center">
            IICRC S520 Standard Requirements
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-12">
            The S520 standard establishes comprehensive protocols across seven critical categories.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {s520Requirements.map((req, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <req.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-text text-lg mb-4">{req.category}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {req.requirements.map((requirement, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <ArrowRight size={14} className="text-primary mt-0.5 shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            Industry Best Practices
          </h2>

          <div className="space-y-6">
            {bestPractices.map((practice, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                <h3 className="font-medium text-text text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  {practice.practice}
                </h3>
                <p className="text-sm text-muted mb-3 ml-7">{practice.explanation}</p>
                <div className="ml-7 flex items-start gap-2 bg-white rounded-xl p-3 border border-blue-100">
                  <Info size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-700"><strong>Implementation:</strong> {practice.implementation}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Virginia Requirements */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="font-display text-3xl font-medium mb-4 flex items-center gap-3">
                <Scale size={32} />
                Virginia Mold Remediation Regulations
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Virginia law regulates mold remediation to protect public health and ensure professional standards.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Shield size={20} />
                    Licensing Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Licensed through DPOR (Dept. of Professional & Occupational Regulation)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Requires licensed supervisor and workers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Minimum $500,000 general liability insurance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Training and continuing education required
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <FileText size={20} />
                    Project Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Written contract and scope of work required
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Notification to occupants about health risks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Follow IICRC S520 or equivalent standards
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                      Provide completion documentation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-500/20 border border-amber-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-bold mb-2 text-amber-100 flex items-center gap-2">
                  <AlertTriangle size={20} />
                  Important
                </h4>
                <p className="text-sm text-gray-200">
                  Unlicensed mold remediation work is illegal in Virginia and may void insurance claims. Always verify contractor licensing at <strong>www.dpor.virginia.gov</strong> before hiring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Hire Professional */}
        <section className="mb-24">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                <Users size={32} className="text-amber-600" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-amber-900 mb-4">
                  When to Hire a Professional Mold Remediation Company
                </h2>
                <p className="text-amber-800 leading-relaxed mb-6">
                  EPA and IICRC guidelines recommend professional remediation in these situations:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Affected area exceeds 10 square feet",
                    "Mold in HVAC systems or ductwork",
                    "Contamination from Category 2 or 3 water (sewage, flood)",
                    "Black mold (Stachybotrys chartarum) present",
                    "Hidden mold in wall cavities, ceilings, or crawl spaces",
                    "Occupants with health conditions or compromised immunity",
                    "Insurance claim requires licensed contractor",
                    "Previous DIY attempts failed or mold returned"
                  ].map((reason, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-amber-900">
                      <CheckCircle2 size={16} className="text-amber-600 mt-0.5 shrink-0" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <GoogleStyleFAQ
            data={faqs}
            title="Mold Remediation Standards FAQ"
            className="border-none p-0"
          />
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Licensed, Certified Mold Remediation
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Flood Doctor is Virginia-licensed and IICRC-certified for professional mold remediation. We follow S520 standards and provide complete documentation for insurance claims.
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

export default MoldRemediationStandards;
