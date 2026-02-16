import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Droplets,
  AlertTriangle,
  Waves,
  Target,
  Clock,
  Shield,
  FileText,
  Thermometer,
  Wind,
  Gauge,
  CheckCircle2,
  Info,
  ArrowRight,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const WaterDamageClassesGuide: React.FC = () => {
  const faqs = [
    {
      question: "What is the difference between water damage class and category?",
      answer: "Water damage category describes contamination level (clean, gray, or black water). Water damage class describes evaporation rate and how difficult the materials are to dry. Both classifications work together to determine restoration approach, timeline, and cost."
    },
    {
      question: "How is water damage class determined?",
      answer: "Class is determined by evaluating the affected materials, moisture content, surface area to volume ratio, and evaporation potential. IICRC-certified technicians use moisture meters, thermal imaging, and psychrometric calculations to classify the damage accurately."
    },
    {
      question: "Can water damage class change during restoration?",
      answer: "Yes. Class can change as hidden pockets of moisture are discovered or as materials absorb more water over time. This is why continuous monitoring with moisture meters is essential throughout the drying process. Class may also improve as drying progresses."
    },
    {
      question: "Why does water damage class affect drying time?",
      answer: "Different materials have different evaporation rates. Class 1 materials (minimal absorption) dry quickly. Class 4 materials (stone, concrete, hardwood) have low evaporation potential and may require weeks to dry completely, even with professional equipment."
    },
    {
      question: "What equipment is needed for each water damage class?",
      answer: "Class 1 uses standard air movers and dehumidifiers. Class 2 requires more equipment density. Class 3 needs wall cavity drying systems and high-capacity dehumidification. Class 4 demands specialty drying equipment including desiccant dehumidifiers, LGR units, and sometimes injection drying systems."
    },
    {
      question: "How long does each class take to dry?",
      answer: "Class 1: 2-3 days. Class 2: 3-5 days. Class 3: 5-7 days. Class 4: 1-4 weeks or longer. These are estimates; actual time depends on materials, environmental conditions, equipment used, and category of water. Professional monitoring ensures complete drying."
    },
    {
      question: "Does insurance cover all water damage classes?",
      answer: "Coverage depends on the water source, not the class. However, Class 4 losses often cost significantly more due to extended drying time and specialty equipment needs. Your policy coverage and deductible apply regardless of class, but higher classes typically mean higher total claim amounts."
    },
    {
      question: "Can I dry Class 3 or Class 4 water damage myself?",
      answer: "DIY drying for Class 3 or 4 is not recommended. These classes require professional-grade equipment, psychrometric expertise, and continuous monitoring. Incomplete drying leads to mold growth, structural damage, and health risks. Professional restoration is essential for proper drying verification."
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

  const classes = [
    {
      number: 1,
      name: "Minimal Absorption",
      color: "blue",
      icon: Droplets,
      description: "Affects materials with minimal absorption and low evaporation rate. The least amount of water, absorption, and evaporation.",
      examples: [
        "Concrete or tile floors with minimal saturation",
        "Painted drywall with surface moisture only",
        "Metal furniture or fixtures",
        "Sealed hardwood with no penetration",
        "Vinyl flooring or laminate surfaces"
      ],
      characteristics: {
        absorption: "< 5% of surface area",
        evaporation: "Low rate",
        equipment: "Standard air movers, dehumidifiers",
        dryingTime: "2-3 days typically"
      },
      equipmentNeeds: [
        "1-2 air movers per room",
        "1 dehumidifier per 500-1000 sq ft",
        "Basic moisture detection"
      ],
      notes: "Fastest and easiest to dry. Often minimal demolition required."
    },
    {
      number: 2,
      name: "Significant Absorption",
      color: "yellow",
      icon: Waves,
      description: "Affects materials with significant absorption and normal evaporation rate. Water has absorbed into cushions, carpet, upholstery, or about 5-40% of wall surfaces.",
      examples: [
        "Carpet and pad saturation",
        "Drywall wicking up 12-24 inches",
        "Upholstered furniture",
        "Mattresses and cushions",
        "Particle board or MDF"
      ],
      characteristics: {
        absorption: "5-40% of surface area",
        evaporation: "Moderate rate",
        equipment: "Increased air movers, dehumidifiers, wall cavity drying",
        dryingTime: "3-5 days typically"
      },
      equipmentNeeds: [
        "2-4 air movers per room",
        "1 dehumidifier per 300-500 sq ft",
        "Wall cavity drying systems",
        "Continuous moisture monitoring"
      ],
      notes: "Most common class. Requires controlled drying to prevent secondary damage."
    },
    {
      number: 3,
      name: "Maximum Absorption",
      color: "orange",
      icon: AlertTriangle,
      description: "Affects materials with maximum absorption. Water saturated walls, ceilings, insulation, carpet, and subfloor. The greatest amount of water, absorption, and evaporation.",
      examples: [
        "Ceiling saturation (roof leak, overhead pipe)",
        "Insulation fully soaked",
        "Water from above affecting multiple levels",
        "Hardwood flooring cupping or buckling",
        "Drywall saturated beyond 40% of surface"
      ],
      characteristics: {
        absorption: "> 40% of surface area",
        evaporation: "High rate potential",
        equipment: "High-density equipment placement, specialty drying",
        dryingTime: "5-7+ days"
      },
      equipmentNeeds: [
        "4-6+ air movers per room",
        "1 LGR dehumidifier per 200-300 sq ft",
        "Thermal imaging for hidden moisture",
        "Frequent moisture readings"
      ],
      notes: "Extensive demolition often required. High risk of mold without aggressive drying."
    },
    {
      number: 4,
      name: "Specialty Drying",
      color: "red",
      icon: Target,
      description: "Affects materials with very low evaporation potential and deep absorption. Requires specialty drying techniques and extended time.",
      examples: [
        "Hardwood flooring (planks, engineered)",
        "Concrete slabs and foundations",
        "Stone, brick, and masonry",
        "Plaster walls and ceilings",
        "Crawl spaces with standing water"
      ],
      characteristics: {
        absorption: "Deep penetration",
        evaporation: "Very low rate",
        equipment: "Desiccant dehumidifiers, injection systems, heat",
        dryingTime: "1-4+ weeks"
      },
      equipmentNeeds: [
        "Desiccant or LGR dehumidifiers",
        "Specialty floor mat systems",
        "Injection drying for concrete",
        "Heat drying systems",
        "Daily moisture tracking"
      ],
      notes: "Longest drying time. May require specialized contractors or techniques."
    }
  ];

  const classFactors = [
    {
      icon: Thermometer,
      title: "Temperature",
      description: "Higher temperature increases evaporation rate. Optimal drying occurs at 70-90°F."
    },
    {
      icon: Droplets,
      title: "Humidity",
      description: "Lower humidity increases evaporation potential. Target &lt;50% relative humidity during drying."
    },
    {
      icon: Wind,
      title: "Airflow",
      description: "Air movement accelerates evaporation. Strategic air mover placement maximizes drying efficiency."
    },
    {
      icon: Gauge,
      title: "Material Density",
      description: "Denser materials hold more water and dry slower. Porosity and permeability affect class."
    }
  ];

  const dryingStandards = [
    {
      title: "IICRC S500 Standard",
      description: "The Institute of Inspection, Cleaning and Restoration Certification (IICRC) publishes the S500 Standard for Professional Water Damage Restoration. This standard defines water damage classes and establishes protocols for assessment, drying, and verification.",
      keyPoints: [
        "Defines four water damage classes based on evaporation rate",
        "Establishes moisture meter readings for dry standards",
        "Requires psychrometric calculations and monitoring",
        "Mandates documentation at every stage of restoration"
      ]
    },
    {
      title: "Psychrometric Science",
      description: "Professional water damage restoration relies on psychrometrics—the science of air-water mixtures. Technicians use psychrometric charts to calculate specific humidity, grains per pound (GPP), and dew point to optimize drying conditions.",
      keyPoints: [
        "Measures temperature, relative humidity, and moisture content",
        "Calculates vapor pressure difference for evaporation potential",
        "Monitors progress with daily psychrometric readings",
        "Adjusts equipment based on changing environmental conditions"
      ]
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Classes Guide (1-4)"
        description="Comprehensive guide to water damage classification. Learn how Class 1-4 affects drying time, equipment needs, and restoration costs. Based on IICRC S500 standards."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Water Damage Classes Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen size={14} /> Technical Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Complete Guide to Water Damage Classes and Categories
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Understanding water damage classification is essential for proper restoration. This guide explains the IICRC's four water damage classes, how they're determined, and what they mean for drying time and costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Get Professional Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* Introduction Section */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-medium text-text mb-6">
              What Are Water Damage Classes?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Water damage class is a classification system established by the Institute of Inspection, Cleaning and Restoration Certification (IICRC) in their S500 Standard for Professional Water Damage Restoration. Class describes the rate of evaporation based on the type and amount of materials affected.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Unlike water damage <em>category</em> (which describes contamination level), water damage <em>class</em> describes how quickly and easily the affected materials can be dried. Class is determined by:
            </p>
            <ul className="space-y-2 text-muted mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Type of materials affected (porosity, permeability, density)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Amount of moisture absorbed into materials</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Surface area to volume ratio of wet materials</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                <span>Evaporation potential given environmental conditions</span>
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              The class determines equipment needs, drying strategy, timeline, and ultimately, restoration costs.
            </p>
          </div>
        </section>

        {/* Class Breakdown */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              The Four Classes of Water Damage
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From minimal absorption to specialty drying situations, each class requires different techniques and timelines.
            </p>
          </div>

          <div className="space-y-8">
            {classes.map((cls) => (
              <div
                key={cls.number}
                className={`rounded-3xl overflow-hidden border-2 ${
                  cls.color === 'blue' ? 'border-blue-200 bg-blue-50/30' :
                  cls.color === 'yellow' ? 'border-yellow-200 bg-yellow-50/30' :
                  cls.color === 'orange' ? 'border-orange-200 bg-orange-50/30' :
                  'border-red-200 bg-red-50/30'
                }`}
              >
                {/* Header */}
                <div className={`p-6 ${
                  cls.color === 'blue' ? 'bg-blue-500' :
                  cls.color === 'yellow' ? 'bg-yellow-500' :
                  cls.color === 'orange' ? 'bg-orange-500' :
                  'bg-red-600'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <cls.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${
                        cls.color === 'yellow' ? 'text-yellow-900' : 'text-white/80'
                      }`}>
                        Class {cls.number}
                      </div>
                      <h3 className={`text-2xl font-bold ${
                        cls.color === 'yellow' ? 'text-yellow-900' : 'text-white'
                      }`}>
                        {cls.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 bg-white">
                  <p className="text-muted mb-6">{cls.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Examples */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Typical Examples</h4>
                      <ul className="space-y-2">
                        {cls.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                              cls.color === 'blue' ? 'bg-blue-500' :
                              cls.color === 'yellow' ? 'bg-yellow-500' :
                              cls.color === 'orange' ? 'bg-orange-500' :
                              'bg-red-500'
                            }`}></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Characteristics */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Key Characteristics</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-gray-500">Absorption Rate</div>
                          <div className="font-medium text-text">{cls.characteristics.absorption}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Evaporation Potential</div>
                          <div className="font-medium text-text">{cls.characteristics.evaporation}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Equipment Needed</div>
                          <div className="font-medium text-text">{cls.characteristics.equipment}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Typical Drying Time</div>
                          <div className="font-medium text-text">{cls.characteristics.dryingTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Equipment Needs */}
                  <div className={`p-4 rounded-xl mb-6 ${
                    cls.color === 'blue' ? 'bg-blue-50' :
                    cls.color === 'yellow' ? 'bg-yellow-50' :
                    cls.color === 'orange' ? 'bg-orange-50' :
                    'bg-red-50'
                  }`}>
                    <h4 className="text-sm font-bold mb-3 text-text">Equipment Requirements</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {cls.equipmentNeeds.map((need, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={14} className={
                            cls.color === 'blue' ? 'text-blue-600' :
                            cls.color === 'yellow' ? 'text-yellow-600' :
                            cls.color === 'orange' ? 'text-orange-600' :
                            'text-red-600'
                          } />
                          {need}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className={`flex items-start gap-3 p-3 rounded-xl text-sm ${
                    cls.color === 'blue' ? 'bg-blue-100/50 text-blue-800' :
                    cls.color === 'yellow' ? 'bg-yellow-100/50 text-yellow-800' :
                    cls.color === 'orange' ? 'bg-orange-100/50 text-orange-800' :
                    'bg-red-100/50 text-red-800'
                  }`}>
                    <Info size={16} className="mt-0.5 shrink-0" />
                    <span><strong>Important:</strong> {cls.notes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Factors Affecting Drying */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-4 text-center">
            Factors That Affect Water Damage Class
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-12">
            Multiple environmental and material factors determine class and drying efficiency.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classFactors.map((factor, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                  <factor.icon size={24} />
                </div>
                <h3 className="font-medium text-text mb-2">{factor.title}</h3>
                <p className="text-sm text-muted">{factor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Drying Standards */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            Industry Standards and Science
          </h2>

          <div className="space-y-6">
            {dryingStandards.map((standard, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 border border-gray-100">
                <h3 className="font-display text-xl font-medium text-text mb-4 flex items-center gap-3">
                  <Shield size={24} className="text-primary" />
                  {standard.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {standard.description}
                </p>
                <ul className="space-y-3">
                  {standard.keyPoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                      <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            Class Comparison at a Glance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-medium text-text">Factor</th>
                  <th className="text-center py-4 px-6 font-medium text-blue-600">Class 1</th>
                  <th className="text-center py-4 px-6 font-medium text-yellow-600">Class 2</th>
                  <th className="text-center py-4 px-6 font-medium text-orange-600">Class 3</th>
                  <th className="text-center py-4 px-6 font-medium text-red-600">Class 4</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-sm text-text font-medium">Drying Time</td>
                  <td className="py-4 px-6 text-center text-sm">2-3 days</td>
                  <td className="py-4 px-6 text-center text-sm">3-5 days</td>
                  <td className="py-4 px-6 text-center text-sm">5-7+ days</td>
                  <td className="py-4 px-6 text-center text-sm">1-4 weeks</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="py-4 px-6 text-sm text-text font-medium">Air Movers/Room</td>
                  <td className="py-4 px-6 text-center text-sm">1-2</td>
                  <td className="py-4 px-6 text-center text-sm">2-4</td>
                  <td className="py-4 px-6 text-center text-sm">4-6+</td>
                  <td className="py-4 px-6 text-center text-sm">Specialty</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-sm text-text font-medium">Dehumidification</td>
                  <td className="py-4 px-6 text-center text-sm">Standard</td>
                  <td className="py-4 px-6 text-center text-sm">Increased</td>
                  <td className="py-4 px-6 text-center text-sm">LGR units</td>
                  <td className="py-4 px-6 text-center text-sm">Desiccant</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="py-4 px-6 text-sm text-text font-medium">Monitoring Frequency</td>
                  <td className="py-4 px-6 text-center text-sm">Daily</td>
                  <td className="py-4 px-6 text-center text-sm">Daily</td>
                  <td className="py-4 px-6 text-center text-sm">Twice daily</td>
                  <td className="py-4 px-6 text-center text-sm">Daily+</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-sm text-text font-medium">Typical Cost (1,000 sq ft)</td>
                  <td className="py-4 px-6 text-center text-sm">$2k-$4k</td>
                  <td className="py-4 px-6 text-center text-sm">$4k-$7k</td>
                  <td className="py-4 px-6 text-center text-sm">$7k-$12k</td>
                  <td className="py-4 px-6 text-center text-sm">$10k-$25k+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Class vs Category */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-medium mb-4 flex items-center gap-3">
                <TrendingUp size={32} />
                Class vs. Category: What's the Difference?
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Water damage classification uses two separate systems that work together:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3">Category (Contamination)</h3>
                  <ul className="space-y-2 text-sm text-blue-50">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></span>
                      Category 1: Clean water
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></span>
                      Category 2: Gray water
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></span>
                      Category 3: Black water
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3">Class (Evaporation)</h3>
                  <ul className="space-y-2 text-sm text-blue-50">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></span>
                      Class 1: Minimal absorption
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></span>
                      Class 2: Significant absorption
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></span>
                      Class 3: Maximum absorption
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></span>
                      Class 4: Specialty drying
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-blue-100 text-sm mt-6 leading-relaxed">
                Both classifications are assigned during initial assessment and guide the restoration strategy. A single loss can be Category 1, Class 4 (clean water into hardwood) or Category 3, Class 2 (sewage backup on tile floors).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <GoogleStyleFAQ
            data={faqs}
            title="Water Damage Class FAQ"
            className="border-none p-0"
          />
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Professional Classification and Drying
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our IICRC-certified technicians accurately classify water damage and implement the right drying strategy for complete restoration. Call 24/7 for rapid response.
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

export default WaterDamageClassesGuide;
