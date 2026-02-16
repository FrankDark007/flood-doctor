import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import ArticleAuthor, { generateAuthorSchema } from '../../components/ui/ArticleAuthor';
import MidArticleCTA from '../../components/ui/MidArticleCTA';
import RelatedArticles from '../../components/ui/RelatedArticles';
import { generateBlogArticleSchema } from '../../utils/schema';
import {
  Phone,
  AlertTriangle,
  Eye,
  Droplets,
  Wind,
  Home,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  Thermometer,
  Activity,
  Waves,
  Building2,
  MapPin,
  ArrowRight,
  Info,
  Zap
} from 'lucide-react';

const HiddenWaterDamageSignsArlington: React.FC = () => {
  const faqs = [
    {
      question: "What are the most common signs of hidden water damage in Arlington homes?",
      answer: "The most common signs include musty odors (especially in basements), unexplained increases in water bills, peeling or bubbling paint, soft or spongy floors, discolored patches on walls or ceilings, and persistent condensation on windows. Arlington's older housing stock often hides water damage behind finished walls, under carpeting, and in crawlspaces."
    },
    {
      question: "How can I detect water damage I can't see?",
      answer: "Professional moisture meters and thermal imaging cameras detect hidden moisture behind walls, under floors, and in ceilings. You can also watch for secondary indicators: warping baseboards, stuck doors or windows, mold growth in unusual places, or water stains appearing after heavy rain. If you suspect hidden damage, hire a certified inspector with professional detection equipment."
    },
    {
      question: "Can hidden water damage cause health problems?",
      answer: "Yes. Hidden water damage often leads to mold growth in wall cavities, insulation, and HVAC systems. Mold exposure causes respiratory issues, allergic reactions, asthma exacerbation, headaches, and fatigue. Older Arlington homes with poor ventilation and high humidity are especially prone to mold-related health issues."
    },
    {
      question: "How long does it take for hidden water damage to cause mold?",
      answer: "Mold can begin growing within 24-48 hours of water exposure in dark, enclosed spaces like wall cavities and crawlspaces. Arlington's humid summers accelerate this timeline. Once mold starts growing behind walls, it spreads rapidly and becomes expensive to remediate—typically $3,000-$10,000 or more."
    },
    {
      question: "What should I do if I suspect hidden water damage in my Arlington home?",
      answer: "Contact a professional water damage restoration company immediately for a moisture inspection. Flood Doctor uses thermal imaging and moisture meters to detect hidden damage without invasive demolition. We provide free assessments and can coordinate with your insurance if restoration is needed. Don't wait—hidden damage worsens daily."
    },
    {
      question: "Does homeowners insurance cover hidden water damage in Arlington?",
      answer: "It depends on the cause. Insurance typically covers sudden, accidental water damage (burst pipes, appliance failures) even if the damage is hidden. However, gradual damage from slow leaks, deferred maintenance, or long-term moisture problems is usually excluded. Early detection and documentation are critical for insurance claims."
    }
  ];

  const schema = generateBlogArticleSchema({
    headline: 'Signs of Hidden Water Damage in Your Arlington Home',
    description: 'Expert guide to detecting hidden water damage in Arlington VA homes. Learn the warning signs, inspection techniques, and when to call professionals.',
    slug: '/blog/hidden-water-damage-signs-arlington/',
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    articleSection: 'Detection Guide',
  }, faqs);

  const visibleSigns = [
    {
      sign: "Discoloration & Staining",
      icon: Eye,
      description: "Yellow, brown, or copper-colored stains on walls, ceilings, or floors indicate water intrusion. Stains may appear as rings, streaks, or patches. In Arlington's older homes, check plaster walls and ceilings near bathrooms, kitchens, and rooflines.",
      locations: ["Ceiling corners", "Wall-ceiling junctions", "Around windows", "Under sinks"],
      severity: "Moderate to High"
    },
    {
      sign: "Peeling or Bubbling Paint",
      icon: Droplets,
      description: "Paint and wallpaper peel, bubble, or crack when moisture accumulates behind surfaces. This indicates water has been present long enough to compromise adhesion. Common in Arlington homes with exterior water intrusion or plumbing leaks.",
      locations: ["Exterior walls", "Bathrooms", "Basements", "Near windows"],
      severity: "Moderate"
    },
    {
      sign: "Musty or Moldy Odors",
      icon: Wind,
      description: "Persistent musty smells indicate hidden mold growth, which requires moisture. If you smell mold but can't see it, the source is likely behind walls, under floors, or in crawlspaces. Arlington's humid climate accelerates mold growth in hidden spaces.",
      locations: ["Basements", "Crawlspaces", "Closets", "HVAC returns"],
      severity: "High"
    },
    {
      sign: "Warping or Sagging Floors",
      icon: Home,
      description: "Wooden floors, subflooring, and joists warp, buckle, or sag when saturated with water. Soft or spongy spots indicate advanced water damage and potential structural issues. Common in Arlington homes with basement or crawlspace moisture problems.",
      locations: ["First floor above basements", "Bathrooms", "Kitchens", "Near water heaters"],
      severity: "High to Critical"
    },
    {
      sign: "Mold & Mildew Growth",
      icon: Activity,
      description: "Visible mold appears as black, green, or white fuzzy patches. However, visible mold often signals much larger hidden growth behind walls. Mold thrives in Arlington's humid summers and poorly ventilated spaces.",
      locations: ["Bathroom tile grout", "Window sills", "Basement corners", "Behind furniture"],
      severity: "High"
    },
    {
      sign: "Unexplained Water Bills",
      icon: Droplets,
      description: "Water bills increasing 10-20% without usage changes often indicate hidden leaks. A family of four typically uses 12,000-15,000 gallons monthly. Sudden increases suggest pipe leaks, running toilets, or slab leaks.",
      locations: ["Slab leaks", "Underground pipes", "Toilet flappers", "Supply lines"],
      severity: "Moderate"
    }
  ];

  const hiddenSigns = [
    {
      sign: "Increased Humidity Levels",
      icon: Thermometer,
      description: "Indoor humidity above 60% promotes mold growth and indicates excess moisture. Use a hygrometer ($10-$30) to monitor levels. Persistent high humidity in Arlington homes often signals hidden water sources or poor ventilation.",
      normal: "30-50% humidity",
      warning: "50-60% humidity",
      danger: "60%+ humidity"
    },
    {
      sign: "Condensation on Windows",
      icon: Droplets,
      description: "Excessive condensation, especially between window panes or on interior walls, indicates high indoor humidity. In Arlington's older homes with single-pane windows, persistent condensation suggests moisture problems beyond normal conditions.",
      normal: "Minimal morning condensation",
      warning: "Daily condensation",
      danger: "Constant moisture on windows"
    },
    {
      sign: "Sticking Doors & Windows",
      icon: Home,
      description: "Doors and windows that suddenly stick, drag, or won't close properly often indicate wood swelling from moisture absorption. This is common in Arlington homes with foundation settling and water intrusion.",
      normal: "Smooth operation year-round",
      warning: "Seasonal sticking (humidity)",
      danger: "Persistent difficulty closing"
    },
    {
      sign: "Soft or Crumbling Drywall",
      icon: Building2,
      description: "Press on walls near plumbing, windows, and exterior walls. Soft, spongy, or crumbling drywall indicates water saturation. In severe cases, you can push through with light pressure. This signals advanced hidden damage.",
      normal: "Firm, solid walls",
      warning: "Slight give when pressed",
      danger: "Soft, spongy, or crumbling"
    },
    {
      sign: "Pest Infestations",
      icon: AlertTriangle,
      description: "Termites, carpenter ants, and other pests are attracted to moisture-damaged wood. If you notice pest activity, especially in basements or crawlspaces, investigate for water damage. Arlington's wooded areas increase pest pressure.",
      normal: "No pest activity",
      warning: "Occasional sightings",
      danger: "Active infestations"
    },
    {
      sign: "Electrical Issues",
      icon: Zap,
      description: "Flickering lights, tripping breakers, or non-functioning outlets near water sources may indicate water intrusion in electrical systems. This is extremely dangerous and requires immediate professional attention.",
      normal: "Consistent electrical function",
      warning: "Occasional issues",
      danger: "Frequent electrical problems"
    }
  ];

  const arlingtonSpecific = [
    {
      title: "Historic Homes & Older Construction",
      description: "Many Arlington homes were built before 1970 with outdated plumbing, poor waterproofing, and minimal crawlspace ventilation. Cast iron drain pipes corrode, galvanized supply lines fail, and original foundations lack modern moisture barriers.",
      risks: ["Cast iron pipe failures", "Foundation moisture intrusion", "Outdated flashing and waterproofing", "Insufficient crawlspace ventilation"],
      action: "Schedule whole-home plumbing and foundation inspections every 5-7 years for pre-1990 homes."
    },
    {
      title: "Clay Soil & Foundation Movement",
      description: "Arlington sits on expansive clay soil that swells when wet and shrinks when dry. This creates foundation settling, cracks, and hydrostatic pressure that forces water into basements and crawlspaces.",
      risks: ["Foundation cracks", "Basement seepage", "Crawlspace moisture", "Slab leaks from foundation movement"],
      action: "Monitor foundation cracks, ensure proper grading away from foundation, and install French drains if needed."
    },
    {
      title: "Mature Tree Root Intrusion",
      description: "Arlington's mature tree canopy is beautiful but problematic. Tree roots seek water sources and can crack sewer lines, water mains, and foundation walls. Root intrusion causes slow leaks that remain hidden for years.",
      risks: ["Sewer line root intrusion", "Foundation damage", "Underground pipe failures", "Slab leaks"],
      action: "Schedule sewer camera inspections every 3-5 years if you have large trees within 50 feet of your home."
    },
    {
      title: "High Humidity & Poor Ventilation",
      description: "Arlington's summer humidity regularly exceeds 70%, creating perfect conditions for hidden mold growth in basements, crawlspaces, and attics. Older homes often lack adequate ventilation, trapping moisture.",
      risks: ["Mold in wall cavities", "Crawlspace moisture", "Attic condensation", "HVAC duct mold"],
      action: "Use dehumidifiers year-round in basements, ensure crawlspace vents work, and add attic ventilation."
    }
  ];

  const inspectionLocations = [
    {
      location: "Bathrooms",
      frequency: "Monthly",
      checkpoints: [
        "Toilet base for water stains or softness",
        "Shower/tub caulking and grout",
        "Under sink cabinets for moisture",
        "Bathroom exhaust fan operation",
        "Wall behind toilet for discoloration"
      ]
    },
    {
      location: "Kitchen",
      frequency: "Monthly",
      checkpoints: [
        "Under sink for drips or moisture",
        "Behind dishwasher for water stains",
        "Refrigerator water line connections",
        "Around garbage disposal",
        "Floor near water sources for softness"
      ]
    },
    {
      location: "Basement/Crawlspace",
      frequency: "Quarterly",
      checkpoints: [
        "Foundation walls for efflorescence (white powder)",
        "Floor for standing water or dampness",
        "Sump pump operation and discharge",
        "Water heater drip pan and connections",
        "Musty odors indicating mold"
      ]
    },
    {
      location: "Attic",
      frequency: "Seasonally",
      checkpoints: [
        "Roof sheathing for dark stains",
        "Insulation for moisture or compression",
        "Rafters for water stains or mold",
        "Roof vents for proper airflow",
        "Chimney flashing for gaps"
      ]
    },
    {
      location: "Exterior",
      frequency: "Seasonally",
      checkpoints: [
        "Gutters clear and draining properly",
        "Downspouts directing water 5+ feet away",
        "Grading sloping away from foundation",
        "Window wells clear and draining",
        "Siding and trim for water stains"
      ]
    },
    {
      location: "Utility Areas",
      frequency: "Monthly",
      checkpoints: [
        "Water heater for rust or moisture",
        "Washing machine hoses for bulges or cracks",
        "HVAC condensate line draining",
        "Water softener connections",
        "Sump pump testing (pour water in pit)"
      ]
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Hidden Water Damage Signs in Arlington"
        description="Learn how to identify hidden water damage in your Arlington VA home. Expert guide covering visible signs, detection methods, and when to call professionals."
        schema={schema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Hidden Water Damage Signs', path: '#' }
          ]} />
        <ArticleAuthor datePublished="2025-01-02" readTime="10 min read" />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Search size={14} /> Detection Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Signs of Hidden Water Damage in Your Arlington Home
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Water damage often hides behind walls, under floors, and in crawlspaces—silently causing mold growth, structural deterioration, and health hazards. This expert guide helps Arlington homeowners identify hidden water damage before it becomes a costly emergency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Request Inspection
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Alert Box */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Why Hidden Water Damage Is Dangerous</h3>
                  <p className="text-red-800 text-sm mb-4 leading-relaxed">
                    Hidden water damage is far more destructive than visible water problems. By the time you notice signs like stains or odors, mold has often been growing for weeks or months. In Arlington's humid climate, hidden moisture creates perfect conditions for toxic mold, wood rot, and structural damage that can cost $10,000-$30,000 to remediate.
                  </p>
                </div>
              </div>
            </div>

            {/* Visible Warning Signs */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                6 Visible Warning Signs of Hidden Water Damage
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                These visible indicators often signal larger hidden water damage problems behind walls, under floors, or in concealed spaces.
              </p>

              <div className="space-y-6">
                {visibleSigns.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-text text-lg">{item.sign}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.severity.includes('Critical') ? 'bg-red-100 text-red-700' :
                            item.severity.includes('High') ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.severity}
                          </span>
                        </div>
                        <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Common Locations</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.locations.map((loc, j) => (
                              <span key={j} className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-lg text-xs text-muted">
                                <MapPin size={10} className="text-primary" />
                                {loc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hidden Signs */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                6 Subtle Signs Only Experts Notice
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                These less obvious indicators require attention and investigation. They often signal hidden water damage that professional equipment can confirm.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {hiddenSigns.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <item.icon size={18} />
                      </div>
                      <h3 className="font-medium text-text">{item.sign}</h3>
                    </div>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 size={12} className="text-green-600" />
                        <span className="text-green-900 font-medium">Normal:</span>
                        <span className="text-muted">{item.normal}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <AlertTriangle size={12} className="text-yellow-600" />
                        <span className="text-yellow-900 font-medium">Warning:</span>
                        <span className="text-muted">{item.warning}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <XCircle size={12} className="text-red-600" />
                        <span className="text-red-900 font-medium">Danger:</span>
                        <span className="text-muted">{item.danger}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          <MidArticleCTA variant="emergency" />

            {/* Arlington-Specific Risks */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Arlington-Specific Water Damage Risks
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Arlington's unique housing stock, soil conditions, and climate create specific hidden water damage vulnerabilities.
              </p>

              <div className="space-y-6">
                {arlingtonSpecific.map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
                    <h3 className="font-medium text-text mb-3 flex items-center gap-2">
                      <MapPin size={18} className="text-primary" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Common Risks</h4>
                        <ul className="space-y-2">
                          {item.risks.map((risk, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-muted">
                              <AlertTriangle size={10} className="text-orange-500 mt-0.5 shrink-0" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <h4 className="text-xs font-bold text-green-900 uppercase tracking-wide mb-2">Prevention Action</h4>
                        <p className="text-xs text-green-800 leading-relaxed">{item.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* DIY Inspection Checklist */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                DIY Inspection Checklist by Location
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Use this room-by-room checklist to identify potential water damage before it becomes a major problem. Regular inspections catch issues early when they're inexpensive to fix.
              </p>

              <div className="space-y-6">
                {inspectionLocations.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 text-white">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">{item.location}</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} />
                          <span>Check {item.frequency}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {item.checkpoints.map((checkpoint, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-muted">
                            <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                            {checkpoint}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Call Professionals */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                When to Call Professional Inspectors
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                While DIY inspections catch obvious problems, professionals use specialized equipment to detect hidden moisture you can't see or access.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Search size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Thermal Imaging Cameras</h4>
                      <p className="text-sm text-muted">Detect temperature differences caused by moisture behind walls, under floors, and in ceilings without invasive demolition. Shows exactly where water is hiding.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Activity size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Moisture Meters</h4>
                      <p className="text-sm text-muted">Measure exact moisture content in wood, drywall, concrete, and other materials. Readings above 15-20% indicate water damage requiring professional intervention.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Thermometer size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Hygrometers & Environmental Monitoring</h4>
                      <p className="text-sm text-muted">Measure relative humidity, temperature, and airflow to identify conditions that promote mold growth and determine drying strategies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Waves size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Borescope Inspections</h4>
                      <p className="text-sm text-muted">Small cameras inserted through tiny holes inspect inside walls, under floors, and in other inaccessible areas without major demolition.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <Info className="text-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-text mb-2">Flood Doctor Offers Free Moisture Inspections</h4>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      If you suspect hidden water damage, we'll perform a comprehensive moisture inspection using thermal imaging and professional-grade moisture meters at no cost. We'll provide a detailed report showing exactly where moisture exists and recommend appropriate next steps.
                    </p>
                    <Button href="tel:8774970007" variant="primary" size="sm">
                      <Phone size={16} className="mr-2" />
                      Schedule Free Inspection
                    </Button>
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
                  href="https://www.epa.gov/mold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">EPA Mold Guide</div>
                    <div className="text-xs text-muted">Federal moisture & mold resources</div>
                  </div>
                </a>

                <a
                  href="https://www.iicrc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">IICRC Standards</div>
                    <div className="text-xs text-muted">Water damage restoration guidelines</div>
                  </div>
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/hidden-water-damage-signs-arlington/" />

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
                  Free Moisture Inspection
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Don't guess about hidden water damage. Our certified technicians use thermal imaging and moisture meters to detect problems you can't see.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Search size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Thermal Imaging</div>
                      <div className="text-xs text-blue-200">See hidden moisture</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Activity size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Moisture Meters</div>
                      <div className="text-xs text-blue-200">Exact readings</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">24/7 Availability</div>
                      <div className="text-xs text-blue-200">Emergency response</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Signs Summary */}
              <div className="bg-amber-50 rounded-[24px] p-6 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-4">Call Immediately If You Notice:</h4>
                <ul className="space-y-2 text-sm text-amber-900">
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Persistent musty odors
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Visible mold growth
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Soft or sagging floors
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Water bill increases 20%+
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Unexplained wall stains
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/mold-prevention-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Mold Prevention Guide
                  </a>
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Checklists
                  </a>
                  <a href="/resources/insurance-claims-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Insurance Claims
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Wait Until Hidden Damage Becomes a Crisis
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Early detection saves thousands in repair costs. Our free moisture inspection uses professional equipment to find problems before they worsen.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-orange-600 border-none hover:bg-orange-50">
            <Phone size={20} className="mr-2" />
            Schedule Free Inspection: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HiddenWaterDamageSignsArlington;
