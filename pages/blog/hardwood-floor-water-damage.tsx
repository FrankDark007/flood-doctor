import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import ArticleAuthor, { generateAuthorSchema } from '../../components/ui/ArticleAuthor';
import MidArticleCTA from '../../components/ui/MidArticleCTA';
import RelatedArticles from '../../components/ui/RelatedArticles';

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can hardwood floors be saved after water damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many hardwood floors can be saved if action is taken within 24-48 hours. Solid hardwood has higher salvage rates than engineered wood. Success depends on water category, exposure duration, wood species, and whether proper drying techniques are employed immediately."
          }
        },
        {
          "@type": "Question",
          "name": "What is cupping in hardwood floors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cupping occurs when the edges of hardwood boards rise higher than the center, creating a concave surface. This happens when moisture absorbs into the bottom of the floor faster than the top, causing uneven expansion. Cupping often reverses with proper drying but may require sanding and refinishing."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to dry hardwood floors after water damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial drying takes 7-14 days with professional equipment, followed by 2-4 weeks of acclimation as the wood returns to equilibrium moisture content. Rushing this process causes permanent damage. Total timeline from damage to refinishing is typically 4-8 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Should I replace or restore water-damaged hardwood floors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Restoration is often 40-60% cheaper than replacement when floors can be dried within 48 hours, damage is from clean water, cupping/crowning is moderate, and the subfloor is sound. Replacement is necessary for sewage exposure, severe buckling, delaminated engineered wood, or extensive subfloor damage."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover hardwood floor water damage restoration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Northern Virginia homeowners policies cover sudden, accidental water damage like burst pipes or appliance failures. Gradual damage from neglected leaks is typically excluded. Professional documentation within 24-48 hours is critical for claims approval."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Flood Doctor",
      "description": "Water damage restoration and hardwood floor drying specialists serving Northern Virginia",
      "telephone": "(877) 497-0007",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "VA",
        "addressLocality": "Northern Virginia"
      },
      "areaServed": [
        "Arlington, VA",
        "Alexandria, VA",
        "Fairfax, VA",
        "Loudoun County, VA",
        "Prince William County, VA"
      ]
    }
  ]
};

const HardwoodFloorWaterDamage: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Hardwood Floor Water Damage: Can Your Floors Be Saved? | Northern VA Guide"
        description="Expert guide to saving water-damaged hardwood floors in Northern Virginia. Learn about cupping, crowning, buckling, professional drying techniques, restoration vs replacement costs, and the critical 24-48 hour window."
        structuredData={schemaData}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block bg-[#1a73e8] text-white px-4 py-1 text-sm font-semibold rounded-full">
              WATER DAMAGE RESTORATION
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hardwood Floor Water Damage: Can Your Floors Be Saved?
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime="2024-01-15">January 15, 2024</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Water damage to hardwood floors is one of the most stressful situations Northern Virginia homeowners face. Understanding the types of damage, acting within the critical 24-48 hour window, and knowing when floors can be saved versus when replacement is necessary can mean the difference between a $3,000 restoration and a $15,000+ replacement project.
          </p>
        </header>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-[#1a73e8] p-6 mb-12 rounded-r-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hardwood Floor Emergency? Time Is Critical
              </h3>
              <p className="text-gray-700">
                24/7 emergency response with specialized hardwood floor drying equipment across Northern Virginia
              </p>
            </div>
            <a
              href="tel:8774970007"
              className="inline-flex items-center gap-2 bg-[#1a73e8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1557b0] transition-colors whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              (877) 497-0007
            </a>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-[#1a73e8]">
            The Reality of Hardwood Floor Water Damage
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hardwood flooring represents a significant investment in your home—typically $8-15 per square foot installed. When water damage strikes, whether from a burst pipe, appliance failure, or storm flooding, homeowners immediately face difficult questions: Can the floors be saved? How much will restoration cost? What happens if I wait?
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The answer depends on multiple factors including water category, exposure duration, wood species, floor construction (solid vs. engineered), and—most critically—how quickly professional drying begins. According to IICRC S500 standards for water damage restoration, hardwood floors fall into Class 4 (specialty drying), requiring extended drying times and specialized techniques.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Northern Virginia's humid climate, where summer humidity regularly exceeds 70%, hardwood floors face additional challenges. Moisture absorption happens faster, and without aggressive dehumidification, floors remain wet longer—accelerating damage progression from minor cupping to severe buckling.
          </p>
        </section>

        {/* Types of Damage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Three Types of Hardwood Floor Water Damage
          </h2>

          <div className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                1. Cupping: Edges Rise, Center Dips
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>What It Is:</strong> Cupping occurs when moisture absorbs into the bottom or edges of hardwood boards faster than the top surface. The wood expands unevenly, causing edges to rise higher than the center and creating a concave (cup-shaped) surface across each plank.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Common Causes:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Water on floor surface (spills, leaks, flooding)</li>
                <li>Moisture from below (wet subfloor, crawl space humidity, concrete slab moisture)</li>
                <li>High ambient humidity without proper acclimation</li>
                <li>Insufficient vapor barrier during installation</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Can It Be Reversed?</strong> Yes, in most cases. Cupping often reverses naturally as floors dry, but the process takes time—rushing it causes permanent damage. Professional monitoring ensures moisture content returns to equilibrium (typically 6-9% in Virginia homes) before any sanding or refinishing.
              </p>
              <p className="text-gray-700">
                <strong>Restoration Timeline:</strong> 7-14 days active drying, 2-4 weeks acclimation, then sanding/refinishing if needed. Total: 4-8 weeks.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                2. Crowning: Center Rises, Edges Dip
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>What It Is:</strong> Crowning is the opposite of cupping—the center of each board swells higher than the edges, creating a convex (crown-shaped) surface. Crowning often results from improper response to cupped floors.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Common Causes:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Sanding cupped floors before complete drying (the #1 cause)</li>
                <li>Top surface moisture absorption while bottom remains dry</li>
                <li>Excessive surface moisture exposure after initial cupping</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Can It Be Reversed?</strong> Sometimes, but crowning is more difficult to correct than cupping. If caused by premature sanding, additional wood has already been removed, limiting restoration options. Moisture rebalancing may help, but severe crowning often requires board replacement.
              </p>
              <p className="text-gray-700">
                <strong>Critical Warning:</strong> Never sand cupped floors before complete drying and acclimation. This removes wood from the high edges; when floors dry and flatten, centers become higher than sanded edges—creating permanent crowning.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                3. Buckling: Floors Separate from Subfloor
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>What It Is:</strong> Buckling (also called tenting) occurs when hardwood planks absorb so much moisture they expand beyond available space, forcing boards upward and separating from the subfloor. Severe buckling creates visible peaks and separations.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Common Causes:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Extended water exposure (6+ hours of standing water)</li>
                <li>Flooding or major water intrusion events</li>
                <li>Installation without proper expansion gaps at walls</li>
                <li>Combination of moisture from above and below</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Can It Be Reversed?</strong> Rarely. Moderate buckling sometimes improves with professional drying and pressure, but severe buckling indicates the floor has exceeded its expansion capacity. Even if boards flatten after drying, the fastening system (nails/staples) has typically been compromised, and boards may have split or cracked.
              </p>
              <p className="text-gray-700">
                <strong>Likely Outcome:</strong> Partial or complete replacement. Isolated buckled areas may be replaced with matching boards, but extensive buckling usually requires full floor replacement.
              </p>
            </div>
          </div>
        </section>

          <MidArticleCTA variant="emergency" />

        {/* Critical Time Window */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            The 24-48 Hour Critical Window
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Hardwood floor salvageability decreases dramatically with each passing hour after water exposure. Understanding this timeline helps homeowners prioritize rapid response.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                0-24 Hours: Maximum Salvage Window
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Damage Severity:</strong> Minimal to moderate surface absorption. Most hardwood can be saved with immediate professional drying.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Water absorbs into surface layers. Boards begin expanding. Minor cupping may start appearing.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Remove standing water immediately, deploy professional air movers and dehumidifiers, document moisture readings, contact restoration specialists.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24-48 Hours: Salvageable with Intensive Effort
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Damage Severity:</strong> Moderate saturation through thickness. Cupping visible. Salvage still likely with proper drying.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Moisture penetrates deeper into boards. Expansion accelerates. Subfloor may be saturated. Early mold growth risk.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Aggressive dehumidification, possible floor mat system deployment, subfloor moisture assessment, antimicrobial treatment.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                48-72 Hours: Partial Replacement Likely
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Damage Severity:</strong> Severe saturation. Significant cupping, possible early buckling. Some boards likely unsalvageable.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Wood fibers stressed beyond recovery in some areas. Fasteners loosening. Mold growth beginning. Subfloor damage likely.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Professional assessment for partial replacement, aggressive drying of salvageable areas, subfloor evaluation and treatment.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Beyond 72 Hours: Replacement Probable
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Damage Severity:</strong> Extensive damage. Buckling, warping, splitting, mold growth. Most floors require replacement.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Permanent structural changes to wood. Delamination in engineered floors. Active mold colonization. Odor development.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Comprehensive damage assessment, mold remediation, likely floor removal and replacement, subfloor restoration.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-[#1a73e8] p-6 mt-8 rounded-lg">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-[#1a73e8] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Northern Virginia Climate Factor</h4>
                <p className="text-gray-700">
                  Virginia's summer humidity (60-80%) extends these timelines. What might take 48 hours to cause significant damage in dry climates can happen in 24-36 hours here. Winter heating season offers faster drying but condensation risks increase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Assessment Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Professional Hardwood Floor Assessment Process
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Certified restoration technicians follow systematic protocols to determine salvageability and develop appropriate drying strategies.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Moisture Content Mapping
                </h3>
                <p className="text-gray-700 mb-2">
                  Using pin-type and pinless moisture meters, technicians measure moisture content (MC) at multiple points across the floor and into the subfloor. Readings are documented and mapped to track drying progress.
                </p>
                <p className="text-gray-700">
                  <strong>Target Levels:</strong> Hardwood should be 6-9% MC in Virginia homes (varies by species). Readings above 20% indicate saturation requiring aggressive intervention.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Thermal Imaging Inspection
                </h3>
                <p className="text-gray-700 mb-2">
                  Infrared cameras detect hidden moisture in subfloors, walls, and adjacent areas not visible during surface inspection. This identifies the full extent of water migration.
                </p>
                <p className="text-gray-700">
                  <strong>Why It Matters:</strong> Water wicks through building materials. Visible floor damage may represent only 30-40% of actual affected area.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Damage Classification
                </h3>
                <p className="text-gray-700 mb-3">
                  Floors are evaluated based on IICRC standards:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Class 4:</strong> All hardwood floors (slow-drying specialty materials)</li>
                  <li><strong>Category 1:</strong> Clean water (burst supply lines, appliances)</li>
                  <li><strong>Category 2:</strong> Gray water (dishwasher, washing machine overflow)</li>
                  <li><strong>Category 3:</strong> Black water (sewage, flooding) - typically requires floor removal</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Wood Species and Construction Analysis
                </h3>
                <p className="text-gray-700 mb-3">
                  Different hardwoods respond differently to water:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Oak (red/white):</strong> Moderate water resistance, good salvage rates</li>
                  <li><strong>Maple:</strong> Dense, slower absorption but harder to dry</li>
                  <li><strong>Cherry/Walnut:</strong> More water-sensitive, higher refinishing needs</li>
                  <li><strong>Exotic hardwoods:</strong> Variable response, specialist assessment required</li>
                  <li><strong>Engineered floors:</strong> Delamination risk, lower salvage rates</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Subfloor and Structural Inspection
                </h3>
                <p className="text-gray-700">
                  Water doesn't stop at the hardwood surface—it penetrates to plywood/OSB subfloors and structural framing. Subfloor damage may require floor removal even if hardwood is salvageable. Moisture readings in subfloor often exceed surface readings by 30-50%.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Drying Strategy Development
                </h3>
                <p className="text-gray-700">
                  Based on all assessment factors, technicians develop a customized drying strategy including equipment types, placement patterns, expected timeline, and monitoring schedule. Hardwood floors require slow, controlled drying to prevent additional damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Drying Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Professional Hardwood Floor Drying Techniques
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Consumer-grade fans and dehumidifiers cannot adequately dry hardwood floors after significant water exposure. Professional restoration uses specialized equipment and techniques.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Industrial Dehumidification
              </h3>
              <p className="text-gray-700 mb-3">
                Commercial-grade LGR (Low Grain Refrigerant) dehumidifiers remove 150-200+ pints of moisture daily compared to 30-50 pints from consumer units.
              </p>
              <p className="text-gray-700">
                <strong>Virginia Necessity:</strong> Summer humidity requires continuous dehumidification to maintain drying conditions. Ambient humidity above 60% prevents evaporation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                High-Velocity Air Movement
              </h3>
              <p className="text-gray-700 mb-3">
                Axial air movers create airflow patterns that promote evaporation from floor surfaces while preventing excessive drying speed that causes checking or splitting.
              </p>
              <p className="text-gray-700">
                <strong>Positioning Strategy:</strong> Angled placement creates circulation without direct blasting, which can over-dry surface layers while undersides remain wet.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Floor Mat Drying Systems
              </h3>
              <p className="text-gray-700 mb-3">
                Weighted mats with vacuum ports are sealed over sections of hardwood, creating negative pressure that draws moisture from deep within boards and subfloor.
              </p>
              <p className="text-gray-700">
                <strong>Best For:</strong> Solid hardwood over plywood subfloors where water has penetrated deeply. Not suitable for all floor types.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Injectidry Systems
              </h3>
              <p className="text-gray-700 mb-3">
                Hoses inject warm, dry air into cavities beneath floors, promoting faster drying from below without floor removal.
              </p>
              <p className="text-gray-700">
                <strong>Application:</strong> When subfloor is saturated but hardwood surface is salvageable. Accelerates drying time by 30-50%.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Desiccant Dehumidification
              </h3>
              <p className="text-gray-700 mb-3">
                For severe saturation or cold weather conditions, desiccant dehumidifiers provide superior moisture removal compared to refrigerant models.
              </p>
              <p className="text-gray-700">
                <strong>Advantage:</strong> Works in low-temperature environments and removes more moisture per cycle in severely saturated conditions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Controlled Environment Monitoring
              </h3>
              <p className="text-gray-700 mb-3">
                Daily moisture readings, humidity tracking, and temperature monitoring ensure drying progresses at optimal rates without over-drying.
              </p>
              <p className="text-gray-700">
                <strong>Documentation:</strong> Critical for insurance claims and quality assurance. Provides evidence of professional standards compliance.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8 rounded-r-lg">
            <h4 className="font-bold text-gray-900 mb-2">Why DIY Drying Usually Fails</h4>
            <p className="text-gray-700 mb-3">
              Homeowners attempting to dry hardwood floors with household fans and dehumidifiers typically achieve only 40-60% of required moisture removal. Floors appear dry on the surface while deep moisture remains, leading to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Delayed cupping appearing weeks later</li>
              <li>Mold growth beneath flooring</li>
              <li>Subfloor deterioration</li>
              <li>Insurance claim denials due to improper mitigation</li>
            </ul>
          </div>
        </section>

        {/* When Floors Can Be Saved */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            When Hardwood Floors Can Be Saved
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Multiple factors determine salvageability. Professional assessment considers all variables, but these general guidelines apply:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-green-900 mb-3">
                High Salvage Probability (70-90%)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Response time under 24 hours</strong> with professional drying deployed immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Category 1 (clean) water</strong> from supply lines or appliances</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Solid hardwood construction</strong> (3/4" oak, maple, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Minor to moderate cupping</strong> without buckling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Sound subfloor</strong> without delamination or structural damage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Localized damage</strong> affecting less than 30% of floor area</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-yellow-900 mb-3">
                Moderate Salvage Probability (40-70%)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">△</span>
                  <span><strong>Response time 24-48 hours</strong> with some delay in professional intervention</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">△</span>
                  <span><strong>Category 2 (gray) water</strong> from dishwashers or washing machines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">△</span>
                  <span><strong>Engineered hardwood</strong> (3-5 ply construction with intact bonding)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">△</span>
                  <span><strong>Significant cupping</strong> across large areas but minimal buckling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">△</span>
                  <span><strong>Plywood subfloor saturation</strong> but structurally intact</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">△</span>
                  <span><strong>Damage affecting 30-60% of floor</strong> requiring partial refinishing</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-3">
                Low Salvage Probability (10-40%)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Response time beyond 48 hours</strong> with extended water exposure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Category 3 (black) water</strong> from sewage or flooding</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Visible buckling or tenting</strong> with fastener failure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Engineered floor delamination</strong> (layers separating)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Subfloor damage</strong> requiring replacement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Extensive damage (60%+ of floor)</strong> making partial replacement impractical</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Mold growth</strong> established on floor or subfloor surfaces</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Refinishing After Water Damage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Refinishing Hardwood Floors After Water Damage
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Successfully dried hardwood floors often require refinishing to restore appearance and smoothness. Understanding the refinishing timeline and process prevents premature work that can cause additional damage.
          </p>

          <div className="bg-blue-50 border-2 border-[#1a73e8] p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Critical Rule: Never Refinish Until Floors Fully Stabilize
            </h3>
            <p className="text-gray-700 mb-3">
              Even after moisture readings return to normal, hardwood floors require 2-4 weeks of acclimation as boards gradually return to their original dimensions. Sanding too early removes wood from boards still adjusting, creating permanent unevenness.
            </p>
            <p className="text-gray-700">
              <strong>Verification:</strong> Take moisture readings weekly for 3-4 consecutive weeks. When readings stabilize without fluctuation (within 1% variation), floors are ready for refinishing.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Refinishing Process for Water-Damaged Floors
          </h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Final Moisture Verification (Day 0)</h4>
                <p className="text-gray-700">
                  Professional moisture readings confirm equilibrium. Hardwood should be 6-9% MC, within 2% of original pre-damage levels.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Coarse Sanding (Days 1-2)</h4>
                <p className="text-gray-700">
                  Using 36-50 grit sandpaper, remove finish and level the floor surface. The amount of wood removal depends on cupping severity—deeper cupping requires more aggressive sanding.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Medium Sanding (Day 2)</h4>
                <p className="text-gray-700">
                  Progress to 60-80 grit to smooth the surface and remove coarse sanding marks. This stage begins revealing the final floor appearance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Fine Sanding (Day 3)</h4>
                <p className="text-gray-700">
                  Final sanding with 100-120 grit creates smooth surface ready for finish application. Edge sanding and detail work completed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Staining (Days 4-5, Optional)</h4>
                <p className="text-gray-700">
                  If matching existing color or achieving desired appearance, stain is applied and allowed to dry 24-48 hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Finish Application (Days 6-10)</h4>
                <p className="text-gray-700">
                  Multiple coats of polyurethane, oil-based finish, or water-based finish applied with drying time between coats. Typically 3-4 coats for durability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Curing (Days 11-14)</h4>
                <p className="text-gray-700">
                  Final curing allows finish to harden fully. Light foot traffic possible after 24-48 hours, but furniture should wait 7-14 days.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mt-6 leading-relaxed">
            <strong>Total Timeline:</strong> From moisture stabilization to fully cured refinished floors: 2-3 weeks for standard refinishing projects.
          </p>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Cost Comparison: Restoration vs. Replacement
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Understanding cost differences helps homeowners make informed decisions about restoration versus replacement. Northern Virginia pricing reflects local labor rates and material costs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border-2 border-green-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                Hardwood Floor Restoration Costs
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <span><strong>Water Extraction</strong></span>
                  <span>$500-1,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <span><strong>Professional Drying (7-14 days)</strong></span>
                  <span>$2,000-5,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <span><strong>Antimicrobial Treatment</strong></span>
                  <span>$300-800</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <span><strong>Refinishing (1,000 sq ft)</strong></span>
                  <span>$3,000-5,000</span>
                </div>
                <div className="flex justify-between items-center pt-3 font-bold text-lg">
                  <span>Total Restoration Cost:</span>
                  <span className="text-green-700">$5,800-12,300</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4">
                Hardwood Floor Replacement Costs
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center pb-2 border-b border-red-200">
                  <span><strong>Floor Removal & Disposal</strong></span>
                  <span>$2,000-4,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-red-200">
                  <span><strong>Subfloor Repair/Replacement</strong></span>
                  <span>$1,500-3,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-red-200">
                  <span><strong>New Hardwood Material (1,000 sq ft)</strong></span>
                  <span>$5,000-12,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-red-200">
                  <span><strong>Installation & Finishing</strong></span>
                  <span>$4,000-8,000</span>
                </div>
                <div className="flex justify-between items-center pt-3 font-bold text-lg">
                  <span>Total Replacement Cost:</span>
                  <span className="text-red-700">$12,500-27,500</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Cost Analysis: When Restoration Makes Financial Sense</h4>
            <p className="text-gray-700 mb-3">
              Restoration typically costs 40-60% of replacement when floors are salvageable. For a 1,000 sq ft area, savings range from $6,700-15,200. However, cost shouldn't be the only factor.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Consider restoration when:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
              <li>Floors are premium hardwood (walnut, cherry, exotic species) difficult to match</li>
              <li>Damage is localized to specific areas rather than whole-home</li>
              <li>Floors have sentimental value or historic significance</li>
              <li>Quick response minimized damage severity</li>
              <li>Insurance coverage favors restoration approach</li>
            </ul>
            <p className="text-gray-700">
              <strong>Consider replacement when:</strong> Damage exceeds 60% of floor area, subfloor requires extensive repair, floors were approaching end of life pre-damage, or restoration costs approach 80%+ of replacement costs.
            </p>
          </div>
        </section>

        {/* Insurance Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Insurance Coverage for Hardwood Floor Water Damage
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Most Northern Virginia homeowners policies cover sudden, accidental water damage to hardwood floors, but understanding coverage nuances prevents claim disputes.
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-green-900 mb-3">
                Typically Covered Events
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Burst or frozen pipes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Appliance failures (washing machine, dishwasher, water heater)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Roof leaks from storm damage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>HVAC system condensate line overflow</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Toilet overflow (clean water)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Accidental discharge from plumbing systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-3">
                Typically Excluded Events
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Flood damage (requires separate flood insurance)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Gradual leaks from neglected maintenance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Sewer backup (unless sewer backup endorsement purchased)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Groundwater seepage or foundation leaks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Damage from deferred maintenance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Mold growth from inadequate response (may be excluded or limited)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-500 p-6 mt-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Critical Actions for Insurance Claims</h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-3">
                <span className="text-[#1a73e8] font-bold">1.</span>
                <div>
                  <strong>Report immediately (within 24 hours):</strong> Delayed reporting can jeopardize coverage, especially if damage worsens.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1a73e8] font-bold">2.</span>
                <div>
                  <strong>Document extensively:</strong> Photos and videos of damage, water source, affected areas, and moisture readings before cleanup.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1a73e8] font-bold">3.</span>
                <div>
                  <strong>Mitigate immediately:</strong> Policies require reasonable efforts to prevent further damage. Professional extraction and drying demonstrate compliance.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1a73e8] font-bold">4.</span>
                <div>
                  <strong>Keep all receipts:</strong> Emergency services, equipment rentals, temporary housing, and restoration costs.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#1a73e8] font-bold">5.</span>
                <div>
                  <strong>Obtain professional documentation:</strong> Certified restoration companies provide detailed moisture logs, drying reports, and IICRC-compliant documentation insurers recognize.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Preventing Hardwood Floor Water Damage
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            While not all water damage is preventable, proactive maintenance significantly reduces risk—especially in Northern Virginia's climate with seasonal flooding, humid summers, and aging housing stock.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Plumbing System Maintenance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Inspect supply line hoses (washing machine, dishwasher, ice maker) annually; replace every 5-7 years</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Install water leak detectors near appliances and in basements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Upgrade to braided stainless steel supply lines (burst-resistant)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Know your main water shut-off location and test quarterly</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                HVAC and Condensation Control
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Service HVAC systems annually with drain line cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Install condensate line overflow sensors and backup drains</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Maintain basement humidity below 60% year-round</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Address condensation on windows and cold surfaces promptly</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Foundation and Drainage
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Maintain gutters and downspouts with extensions 6+ feet from foundation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Grade soil away from foundation (6 inches drop over 10 feet)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Test sump pump monthly during wet seasons; install battery backup</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Seal foundation cracks before spring rains (March-May in NoVA)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Hardwood-Specific Protection
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Maintain indoor humidity 35-55% (prevents expansion/contraction stress)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Use mats under appliances and sinks in hardwood areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Address spills immediately—standing water damages finish in hours</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8]">•</span>
                  <span>Re-seal hardwood every 3-5 years to maintain moisture resistance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can engineered hardwood be saved after water damage?
              </h3>
              <p className="text-gray-700">
                Engineered hardwood has lower salvage rates than solid wood because water causes plywood layers to delaminate (separate). Surface veneer may look intact while inner layers have failed. Success depends on water category, exposure time, and quality of construction. High-quality engineered floors (5+ ply, thick veneer) withstand water better than budget products. Professional assessment with moisture meters and inspection for delamination is essential.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How can I tell if my subfloor is damaged?
              </h3>
              <p className="text-gray-700">
                Signs of subfloor damage include soft or spongy spots when walking, visible sagging or unevenness, musty odors indicating trapped moisture, discoloration visible at floor edges or register vents, and abnormally high moisture readings. Professional moisture meters can penetrate hardwood to measure subfloor moisture without removal. Thermal imaging also detects moisture patterns invisible to surface inspection. If subfloor damage is suspected, inspection holes may be drilled to assess condition.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will my hardwood floors ever be the same after water damage?
              </h3>
              <p className="text-gray-700">
                With proper drying and professional refinishing, most solid hardwood floors can be restored to pre-damage condition or better. Minor cupping often reverses completely with no visible evidence remaining. Moderate damage may leave slight irregularities detectable by touch but not appearance. Severe damage or improper drying can result in permanent unevenness. The key is allowing complete stabilization before refinishing and working with experienced restoration and flooring professionals who understand wood behavior.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should I remove baseboards during hardwood floor drying?
              </h3>
              <p className="text-gray-700">
                Yes, in most cases. Removing baseboards serves multiple purposes: allows inspection of floor edges and wall base for hidden moisture, creates airflow pathways for drying floor perimeter, prevents trapped moisture between baseboard and wall, and allows proper installation of drying equipment. Baseboards are typically removed during water damage restoration and reinstalled after drying completes. This prevents mold growth in concealed spaces and ensures thorough drying.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I install new hardwood over water-damaged subfloor?
              </h3>
              <p className="text-gray-700">
                No, never install new hardwood over damaged subfloor without proper remediation. Compromised subfloor leads to squeaking, movement, premature finish failure, fastener pull-through, and ongoing moisture/mold issues. Subfloor must be dried to proper moisture content (typically below 12%), inspected for structural integrity, delaminated sections replaced, and antimicrobial treatment applied if contamination occurred. Proper subfloor preparation is essential for hardwood longevity regardless of whether floors are restored or replaced.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white p-8 rounded-2xl mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Save Your Hardwood Floors—Act Now
            </h2>
            <p className="text-lg mb-6 text-blue-50">
              Every hour of delay reduces salvage probability. Our IICRC-certified team responds 24/7 across Northern Virginia with specialized hardwood floor drying equipment, moisture detection technology, and proven restoration techniques that maximize salvage rates and minimize costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:8774970007"
                className="inline-flex items-center gap-2 bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6" />
                Emergency: (877) 497-0007
              </a>
              <a
                href="/services/residential/restoration-services/water-damage-restoration/"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a73e8] transition-colors"
              >
                Water Damage Services
              </a>
            </div>
            <p className="text-sm text-blue-100">
              Serving Arlington, Alexandria, Fairfax, Loudoun, Prince William Counties
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">24-48 hrs</div>
              <div className="text-gray-900 font-semibold mb-2">Critical Window</div>
              <div className="text-gray-600 text-sm">Maximum salvage probability with professional intervention</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">40-60%</div>
              <div className="text-gray-900 font-semibold mb-2">Cost Savings</div>
              <div className="text-gray-600 text-sm">Restoration vs. replacement when floors are salvageable</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">7-14 days</div>
              <div className="text-gray-900 font-semibold mb-2">Drying Timeline</div>
              <div className="text-gray-600 text-sm">Professional equipment + monitoring for Class 4 materials</div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/services/residential/restoration-services/water-damage-restoration/"
              className="p-4 border border-gray-200 rounded-lg hover:border-[#1a73e8] hover:shadow-lg transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Water Damage Restoration</h4>
              <p className="text-gray-600 text-sm">
                24/7 emergency water extraction and structural drying
              </p>
            </a>
            <a
              href="/services/residential/cleanup-services/mold-remediation/"
              className="p-4 border border-gray-200 rounded-lg hover:border-[#1a73e8] hover:shadow-lg transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Mold Remediation</h4>
              <p className="text-gray-600 text-sm">
                Professional mold removal and prevention after water damage
              </p>
            </a>
            <a
              href="/services/residential/restoration-services/water-damage-restoration/"
              className="p-4 border border-gray-200 rounded-lg hover:border-[#1a73e8] hover:shadow-lg transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">Emergency Services</h4>
              <p className="text-gray-600 text-sm">
                Immediate response for flood, fire, and storm damage
              </p>
            </a>
          </div>
        </section>
      </article>
      <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/hardwood-floor-water-damage/" />
      </main>
  );
};

export default HardwoodFloorWaterDamage;
