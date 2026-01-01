import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Eye,
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Home,
  Paintbrush,
  Wind,
  Volume2,
  ThermometerSun,
  Bug,
  FileText,
  ArrowRight,
  Search
} from 'lucide-react';

const SignsOfWaterDamage: React.FC = () => {
  const faqs = [
    {
      question: "What are the most common signs of hidden water damage?",
      answer: "The most common signs include: musty or moldy odors (even without visible mold), unexplained increases in water bills, soft or spongy spots in floors or walls, peeling or bubbling paint and wallpaper, visible staining on ceilings or walls, warped or buckled flooring, and persistent condensation on windows. Any of these warrant further investigation."
    },
    {
      question: "How do I know if there's water damage behind my walls?",
      answer: "Signs of water in walls include: discoloration or staining that grows over time, bubbling or peeling paint, soft or spongy drywall when pressed, warping or bowing of the wall surface, musty odors near the wall, and visible mold growth at baseboards. A moisture meter can detect elevated moisture levels, and thermal imaging can reveal temperature differences indicating hidden water."
    },
    {
      question: "Can water damage be hidden under flooring?",
      answer: "Yes, water often gets trapped under flooring, especially under tile, laminate, and hardwood. Signs include: warped, cupped, or buckled boards, tiles that crack or come loose, soft spots when walking, squeaking that wasn't there before, visible staining at edges, and musty odors. Subfloor damage is common in bathrooms, kitchens, and near exterior doors."
    },
    {
      question: "How long does it take for water damage to show?",
      answer: "Visible signs can appear within hours or take weeks, depending on the source and location. Surface staining may appear within hours to days. Structural warping typically takes days to weeks. Mold growth begins within 24-48 hours but may not be visible for 1-2 weeks. Hidden damage in walls can go unnoticed for months until significant symptoms develop."
    },
    {
      question: "What does water damage smell like?",
      answer: "Water damage typically produces a musty, earthy, or damp odor—often described as smelling like 'wet cardboard' or 'old basement.' If bacteria or sewage is involved, you may notice a stronger, more unpleasant odor. Mold growth adds a distinctive moldy smell. These odors often intensify in humid weather or when the area is enclosed."
    },
    {
      question: "Is water damage always visible?",
      answer: "No, water damage is often hidden behind walls, under floors, in crawl spaces, attics, and inside cabinets. You may have significant damage with no visible signs until it's advanced. This is why professional inspection with moisture meters and thermal imaging is valuable—these tools detect moisture that isn't visible to the eye."
    },
    {
      question: "Should I be worried about small water stains?",
      answer: "Yes, even small stains indicate that water is getting somewhere it shouldn't. A small stain on a ceiling could mean a much larger issue in the attic or between floors. Small stains often grow larger over time if the source isn't addressed. It's always better to investigate early when repairs are simpler and less expensive."
    },
    {
      question: "How do professionals detect hidden water damage?",
      answer: "Professionals use several tools: moisture meters (pin-type for surface, pinless for deeper detection), thermal imaging cameras that show temperature differences indicating moisture, hygrometers to measure humidity, and borescopes to see inside wall cavities. They also know where to look based on common leak sources and building construction."
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

  const visualSigns = [
    {
      icon: Paintbrush,
      title: "Paint & Wallpaper Changes",
      signs: [
        "Bubbling, peeling, or flaking paint",
        "Wallpaper that's loose, bubbling, or curling",
        "Discoloration or yellowing in patches",
        "Cracks forming along seams or corners"
      ],
      severity: "Moderate",
      action: "Investigate source; may indicate ongoing leak"
    },
    {
      icon: Droplets,
      title: "Stains & Discoloration",
      signs: [
        "Yellow, brown, or dark spots on ceilings",
        "Ring-shaped stains (water dried repeatedly)",
        "Spreading or growing stain areas",
        "Streaks running down walls"
      ],
      severity: "Moderate to High",
      action: "Find and stop source; check for mold behind"
    },
    {
      icon: Home,
      title: "Structural Warping",
      signs: [
        "Warped, cupped, or buckled hardwood floors",
        "Swollen or soft drywall",
        "Doors or windows that stick or won't close",
        "Visible bowing in walls or ceilings"
      ],
      severity: "High",
      action: "Professional assessment recommended"
    },
    {
      icon: Bug,
      title: "Mold & Mildew",
      signs: [
        "Visible fuzzy or spotty growth (any color)",
        "Black spots in corners or along baseboards",
        "Mold in grout lines or around fixtures",
        "Mold on stored items or cardboard"
      ],
      severity: "High",
      action: "Do not disturb; call for mold assessment"
    }
  ];

  const nonVisualSigns = [
    {
      icon: Wind,
      title: "Odors",
      description: "Musty, damp, or earthy smells—especially in enclosed spaces, basements, or after rain. Odors may be stronger when humidity is high.",
      locations: ["Basements & crawl spaces", "Under sinks", "Behind appliances", "Inside closets"]
    },
    {
      icon: Volume2,
      title: "Sounds",
      description: "Dripping sounds in walls or ceilings, especially at night when it's quiet. Running water sounds when no fixtures are in use.",
      locations: ["Behind bathroom walls", "Near water heater", "Kitchen supply lines", "Around toilets"]
    },
    {
      icon: ThermometerSun,
      title: "Temperature Changes",
      description: "Cold spots on walls or floors that shouldn't be there. Areas that feel damp or clammy to the touch.",
      locations: ["Exterior walls", "Near windows", "Basement walls", "Around pipes"]
    },
    {
      icon: AlertTriangle,
      title: "Utility Bill Spikes",
      description: "Unexplained increase in water bills often indicates a hidden leak. Even small leaks can waste thousands of gallons monthly.",
      locations: ["Check meter with all fixtures off", "Underground/slab leaks", "Irrigation systems", "Toilet flappers"]
    }
  ];

  const locationChecklist = [
    {
      area: "Bathroom",
      checkpoints: [
        "Under sinks and around supply lines",
        "Around toilet base and supply line",
        "Tile grout and caulk condition",
        "Under and around bathtub/shower",
        "Exhaust fan function and ducting"
      ]
    },
    {
      area: "Kitchen",
      checkpoints: [
        "Under sink (cabinet floor condition)",
        "Behind and under dishwasher",
        "Behind and under refrigerator (ice maker line)",
        "Around garbage disposal connections",
        "Under and behind range if gas"
      ]
    },
    {
      area: "Basement/Crawl Space",
      checkpoints: [
        "Wall/floor junction for seepage",
        "Around windows wells",
        "Near water heater and HVAC",
        "Sump pump condition and function",
        "Foundation cracks"
      ]
    },
    {
      area: "Attic & Roof",
      checkpoints: [
        "Around roof penetrations (vents, chimney)",
        "Sheathing for staining or mold",
        "Insulation condition",
        "Around HVAC equipment",
        "Gutter and downspout connections"
      ]
    },
    {
      area: "Laundry Area",
      checkpoints: [
        "Washing machine hoses (especially rubber)",
        "Dryer vent for condensation",
        "Floor and wall behind machines",
        "Utility sink connections",
        "Drain line condition"
      ]
    },
    {
      area: "Exterior",
      checkpoints: [
        "Grading and drainage away from foundation",
        "Gutter and downspout condition",
        "Window and door seals",
        "Siding and trim condition",
        "Hose bibs and outdoor faucets"
      ]
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Signs of Water Damage: How to Detect Hidden Leaks"
        description="Learn to identify visible and hidden signs of water damage in your home. Checklist for walls, floors, ceilings, and common leak locations."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Signs of Water Damage', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Eye size={14} /> Detection Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Signs of Water Damage in Your Home
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Water damage isn't always obvious. Learning to spot early warning signs—visible and hidden—can save you thousands in repairs and prevent mold growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Free Inspection
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
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

            {/* Visual Signs */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Visual Warning Signs
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                These visible indicators often signal current or past water intrusion.
              </p>

              <div className="space-y-6">
                {visualSigns.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <item.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="font-medium text-text text-lg">{item.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            item.severity === 'High' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.severity} Priority
                          </span>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-2 mb-4">
                          {item.signs.map((sign, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                              {sign}
                            </li>
                          ))}
                        </ul>
                        <div className="text-sm text-primary font-medium">
                          → {item.action}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Non-Visual Signs */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Hidden Signs (No Visible Damage)
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Water damage often hides behind walls and under floors. These clues can reveal problems you can't see.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {nonVisualSigns.map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white text-primary flex items-center justify-center">
                        <item.icon size={20} />
                      </div>
                      <h3 className="font-medium text-text">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted mb-4">{item.description}</p>
                    <div className="text-xs font-medium text-gray-500 mb-2">Common Locations:</div>
                    <ul className="space-y-1">
                      {item.locations.map((loc, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                          {loc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Room-by-Room Checklist */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Room-by-Room Inspection Checklist
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Use this checklist to systematically check your home for water damage risks.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {locationChecklist.map((room, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-medium text-text mb-4 flex items-center gap-2">
                      <Search size={18} className="text-primary" />
                      {room.area}
                    </h3>
                    <ul className="space-y-2">
                      {room.checkpoints.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 group cursor-pointer">
                          <div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                            <CheckCircle2 size={12} className="text-primary opacity-0 group-hover:opacity-50 transition-opacity" />
                          </div>
                          <span className="text-sm text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Call */}
            <section className="mb-24">
              <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-medium text-red-900 mb-2">
                      Call a Professional If You Notice:
                    </h2>
                    <p className="text-red-800">
                      These signs indicate active water damage that requires immediate attention.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Active dripping or running water",
                    "Standing water from unknown source",
                    "Multiple signs appearing together",
                    "Signs that grow or spread over time",
                    "Musty odors that don't go away",
                    "Visible mold growth anywhere",
                    "Soft or spongy walls/floors",
                    "Unexplained spike in water bill"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-red-900 bg-white/50 p-3 rounded-lg">
                      <AlertTriangle size={14} className="text-red-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Water Damage Detection FAQ"
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
                  Free Water Damage Inspection
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Unsure if you have water damage? We offer free inspections with moisture meters and thermal imaging to detect hidden problems.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Eye size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Professional Detection</div>
                      <div className="text-xs text-blue-200">Moisture meters + thermal imaging</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4">Detection Facts</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Hidden damage cases</span>
                    <span className="font-medium text-text">~40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Avg. leak detection time</span>
                    <span className="font-medium text-orange-600">14+ days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Claims from slow leaks</span>
                    <span className="font-medium text-text">~50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Mold starts growing</span>
                    <span className="font-medium text-red-600">24-48 hrs</span>
                  </div>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="bg-purple-50 rounded-[24px] p-6 border border-purple-100">
                <h4 className="font-medium text-purple-900 mb-3 flex items-center gap-2">
                  <Eye size={18} className="text-purple-600" />
                  Pro Tip
                </h4>
                <p className="text-sm text-purple-800">
                  Check your water meter with all fixtures off. If it's still moving, you have a leak somewhere. Mark the reading and check again in 2 hours to confirm.
                </p>
              </div>

              {/* Related */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/mold-prevention-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Mold Prevention Guide
                  </a>
                  <a href="/resources/water-damage-categories/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Water Damage Categories
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
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Suspect Water Damage? Get a Free Inspection
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Our technicians use professional moisture detection equipment to find hidden water damage and determine if you need restoration services.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-purple-700 border-none hover:bg-purple-50">
            <Phone size={20} className="mr-2" />
            Schedule Free Inspection
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SignsOfWaterDamage;
