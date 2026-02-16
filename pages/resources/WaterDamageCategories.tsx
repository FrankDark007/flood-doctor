import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Skull,
  ShowerHead,
  CloudRain,
  Waves,
  Trash2,
  Shield,
  FileText,
  ArrowRight,
  DollarSign
} from 'lucide-react';

const WaterDamageCategories: React.FC = () => {
  const faqs = [
    {
      question: "What is Category 1 water damage?",
      answer: "Category 1 (clean water) originates from a sanitary source with no substantial contaminants. Examples include broken water supply lines, tub/sink overflows with no contaminants, falling rainwater, and melting ice or snow. This is the least hazardous category but can degrade to Category 2 or 3 if left untreated for 24-48 hours."
    },
    {
      question: "What is Category 2 water damage?",
      answer: "Category 2 (gray water) contains significant contamination that could cause illness if ingested. Sources include dishwasher or washing machine discharge, toilet overflow with urine (no feces), sump pump failures, and aquarium water. Gray water requires additional precautions during cleanup, including antimicrobial treatment."
    },
    {
      question: "What is Category 3 water damage?",
      answer: "Category 3 (black water) is grossly contaminated and contains pathogenic agents. Sources include sewage backups, toilet overflow with feces, flooding from rivers/streams, and stagnant water supporting microbial growth. Category 3 requires extensive safety protocols, PPE, and often complete removal of affected porous materials."
    },
    {
      question: "Can clean water become contaminated over time?",
      answer: "Yes, water category can degrade over time. Category 1 water left untreated for 24-48 hours can become Category 2 as it picks up contaminants from materials it contacts. Category 2 can become Category 3 if left for extended periods or if it mixes with sewage. This is why rapid response is critical."
    },
    {
      question: "How does water category affect restoration cost?",
      answer: "Higher categories significantly increase costs. Category 1 is the baseline. Category 2 typically adds 20-40% for antimicrobial treatment and additional precautions. Category 3 can double or triple costs due to hazmat protocols, PPE requirements, extensive material removal, and proper disposal of contaminated materials."
    },
    {
      question: "What safety equipment is needed for each category?",
      answer: "Category 1: Standard work clothes, gloves, eye protection. Category 2: Add N95 respirators, rubber boots, disposable coveralls. Category 3: Full PPE including Tyvek suits, P100 respirators or PAPRs, rubber boots, gloves, and eye protection. Never enter Category 3 water without proper protection."
    },
    {
      question: "Which materials can be saved in each water category?",
      answer: "Category 1: Most materials can be saved if dried within 24-48 hours. Category 2: Hard, non-porous materials can be cleaned and saved; porous materials like carpet padding often need replacement. Category 3: Most porous materials (drywall, insulation, carpet, padding, upholstered furniture) must be removed and disposed of properly."
    },
    {
      question: "Does insurance cover all water damage categories?",
      answer: "Coverage depends on the source, not the category. Sudden and accidental damage (burst pipe, appliance failure) is typically covered regardless of category. However, flood damage from external sources requires separate flood insurance, and sewer backup often requires a specific endorsement. Category 3 sewage backup claims may need additional documentation."
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

  const categories = [
    {
      number: 1,
      name: "Clean Water",
      altName: "White Water",
      color: "blue",
      icon: Droplets,
      description: "Water from a clean, sanitary source that poses no substantial health risk if contact or ingestion occurs.",
      sources: [
        { text: "Broken water supply lines", icon: ShowerHead },
        { text: "Sink or tub overflow (clean)", icon: Droplets },
        { text: "Appliance water line breaks", icon: Droplets },
        { text: "Rainwater intrusion", icon: CloudRain },
        { text: "Melting snow or ice", icon: Droplets }
      ],
      healthRisk: "Low",
      dryTime: "2-4 days typically",
      costMultiplier: "1x (Baseline)",
      salvageable: "Most materials if dried within 48 hours",
      notes: "Can degrade to Category 2 or 3 if left untreated for 24-48+ hours"
    },
    {
      number: 2,
      name: "Gray Water",
      altName: "Significantly Contaminated",
      color: "yellow",
      icon: AlertTriangle,
      description: "Water containing significant contamination that could cause discomfort or illness if consumed or exposed to.",
      sources: [
        { text: "Washing machine discharge", icon: Waves },
        { text: "Dishwasher overflow", icon: Waves },
        { text: "Toilet overflow (urine only)", icon: Droplets },
        { text: "Sump pump failure", icon: Waves },
        { text: "Aquarium water", icon: Waves }
      ],
      healthRisk: "Moderate",
      dryTime: "3-5 days typically",
      costMultiplier: "1.2-1.4x",
      salvageable: "Hard surfaces; porous materials often replaced",
      notes: "Requires antimicrobial treatment; can become Category 3 if untreated"
    },
    {
      number: 3,
      name: "Black Water",
      altName: "Grossly Contaminated",
      color: "red",
      icon: Skull,
      description: "Highly contaminated water containing pathogenic agents, toxins, or other harmful substances that pose serious health risks.",
      sources: [
        { text: "Sewage backup", icon: Trash2 },
        { text: "Toilet overflow (with feces)", icon: Trash2 },
        { text: "River/stream flooding", icon: Waves },
        { text: "Storm surge", icon: CloudRain },
        { text: "Stagnant water (48+ hours)", icon: Waves }
      ],
      healthRisk: "High / Severe",
      dryTime: "5-7+ days (after demo)",
      costMultiplier: "2-3x",
      salvageable: "Non-porous only; most materials removed",
      notes: "Requires full hazmat protocols; do NOT enter without proper PPE"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Categories: 1, 2, 3"
        description="Understanding water damage categories (1, 2, 3) helps you know health risks, cleanup requirements, and costs. Complete guide to clean, gray, and black water."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Water Damage Categories', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <FileText size={14} /> Technical Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Water Damage Categories Explained
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Not all water damage is equal. The IICRC defines three categories based on contamination level, each requiring different cleanup procedures, safety precautions, and costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Request Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* Category Comparison Cards */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              The Three Categories of Water Damage
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Category is determined by contamination level, not volume. Understanding your category helps you know what to expect.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.number}
                className={`rounded-3xl overflow-hidden border-2 ${
                  cat.color === 'blue' ? 'border-blue-200' :
                  cat.color === 'yellow' ? 'border-yellow-300' :
                  'border-red-300'
                }`}
              >
                {/* Header */}
                <div className={`p-6 ${
                  cat.color === 'blue' ? 'bg-blue-500' :
                  cat.color === 'yellow' ? 'bg-yellow-500' :
                  'bg-red-600'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <cat.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${
                        cat.color === 'yellow' ? 'text-yellow-900' : 'text-white/80'
                      }`}>
                        Category {cat.number}
                      </div>
                      <h3 className={`text-2xl font-bold ${
                        cat.color === 'yellow' ? 'text-yellow-900' : 'text-white'
                      }`}>
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className={`p-6 ${
                  cat.color === 'blue' ? 'bg-blue-50' :
                  cat.color === 'yellow' ? 'bg-yellow-50' :
                  'bg-red-50'
                }`}>
                  <p className="text-sm text-gray-700 mb-6">{cat.description}</p>

                  {/* Common Sources */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Common Sources</h4>
                    <ul className="space-y-2">
                      {cat.sources.map((source, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <source.icon size={14} className={`shrink-0 ${
                            cat.color === 'blue' ? 'text-blue-500' :
                            cat.color === 'yellow' ? 'text-yellow-600' :
                            'text-red-500'
                          }`} />
                          {source.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Health Risk</div>
                      <div className={`font-medium ${
                        cat.color === 'blue' ? 'text-blue-700' :
                        cat.color === 'yellow' ? 'text-yellow-700' :
                        'text-red-700'
                      }`}>{cat.healthRisk}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Drying Time</div>
                      <div className="text-gray-700">{cat.dryTime}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Cost Impact</div>
                      <div className="text-gray-700">{cat.costMultiplier}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Salvageable</div>
                      <div className="text-gray-700">{cat.salvageable}</div>
                    </div>
                  </div>

                  {/* Note */}
                  <div className={`mt-6 p-3 rounded-xl text-xs ${
                    cat.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    cat.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    <strong>Note:</strong> {cat.notes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Degradation Warning */}
        <section className="mb-24">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                <AlertTriangle size={32} className="text-amber-600" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-amber-900 mb-4">
                  Water Category Degrades Over Time
                </h2>
                <p className="text-amber-800 mb-4">
                  Water contamination increases the longer it sits. What starts as Category 1 clean water can become Category 2 or 3 within 24-48 hours as it picks up contaminants from building materials, bacteria multiply, and conditions worsen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    <Droplets size={14} /> Category 1
                  </span>
                  <ArrowRight size={18} className="text-amber-600 self-center" />
                  <span className="text-amber-600 text-sm self-center">24-48 hrs</span>
                  <ArrowRight size={18} className="text-amber-600 self-center" />
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    <AlertTriangle size={14} /> Category 2
                  </span>
                  <ArrowRight size={18} className="text-amber-600 self-center" />
                  <span className="text-amber-600 text-sm self-center">48+ hrs</span>
                  <ArrowRight size={18} className="text-amber-600 self-center" />
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    <Skull size={14} /> Category 3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            Quick Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-medium text-text">Factor</th>
                  <th className="text-center py-4 px-6 font-medium text-blue-600">Category 1</th>
                  <th className="text-center py-4 px-6 font-medium text-yellow-600">Category 2</th>
                  <th className="text-center py-4 px-6 font-medium text-red-600">Category 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-sm text-text font-medium">PPE Required</td>
                  <td className="py-4 px-6 text-center text-sm">Gloves, eye protection</td>
                  <td className="py-4 px-6 text-center text-sm">+ N95, coveralls, boots</td>
                  <td className="py-4 px-6 text-center text-sm">Full Tyvek, P100, boots</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="py-4 px-6 text-sm text-text font-medium">Carpet Salvageable?</td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 size={18} className="inline text-green-500" /></td>
                  <td className="py-4 px-6 text-center text-sm text-yellow-600">Sometimes (pad replaced)</td>
                  <td className="py-4 px-6 text-center"><XCircle size={18} className="inline text-red-500" /></td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-sm text-text font-medium">Drywall Salvageable?</td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 size={18} className="inline text-green-500" /></td>
                  <td className="py-4 px-6 text-center text-sm text-yellow-600">Below flood line only</td>
                  <td className="py-4 px-6 text-center"><XCircle size={18} className="inline text-red-500" /></td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="py-4 px-6 text-sm text-text font-medium">Antimicrobial Needed?</td>
                  <td className="py-4 px-6 text-center text-sm text-gray-500">Optional</td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 size={18} className="inline text-yellow-500" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 size={18} className="inline text-red-500" /></td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-sm text-text font-medium">DIY Possible?</td>
                  <td className="py-4 px-6 text-center text-sm text-green-600">Small areas only</td>
                  <td className="py-4 px-6 text-center text-sm text-yellow-600">Not recommended</td>
                  <td className="py-4 px-6 text-center text-sm text-red-600">Never</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="py-4 px-6 text-sm text-text font-medium">Typical Cost (1,000 sq ft)</td>
                  <td className="py-4 px-6 text-center text-sm">$2,000 - $4,000</td>
                  <td className="py-4 px-6 text-center text-sm">$3,000 - $6,000</td>
                  <td className="py-4 px-6 text-center text-sm">$6,000 - $15,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <GoogleStyleFAQ
            data={faqs}
            title="Water Damage Category FAQ"
            className="border-none p-0"
          />
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Not Sure What Category You're Dealing With?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our technicians can assess your water damage on-site and determine the appropriate category and cleanup protocol. Call 24/7 for rapid response.
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

export default WaterDamageCategories;
