import React from 'react';
import { Phone } from 'lucide-react';
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
          "name": "Can water-damaged carpet be saved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Water-damaged carpet can often be saved if extraction begins within 24-48 hours and the water source is Category 1 (clean water). However, carpet padding must almost always be replaced. Category 2 (gray water) or Category 3 (black water) typically requires complete carpet removal for health and safety reasons."
          }
        },
        {
          "@type": "Question",
          "name": "How long does wet carpet take to dry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With professional extraction and drying equipment, carpet typically dries in 12-48 hours. However, drying time depends on carpet thickness, water saturation level, ambient humidity, and airflow. Northern Virginia's humid summers can extend drying time by 30-50% compared to ideal conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Should I replace carpet or carpet pad after water damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carpet padding should be replaced in almost all water damage scenarios. It's porous, retains moisture, and cannot be effectively cleaned or dried. Carpet itself may be salvageable with professional extraction and cleaning if the water is clean (Category 1) and response is immediate. Gray water and black water contamination require both pad and carpet replacement."
          }
        },
        {
          "@type": "Question",
          "name": "What are the health risks of wet carpet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wet carpet becomes a breeding ground for mold, bacteria, and allergens within 24-48 hours. Health risks include respiratory problems, allergic reactions, asthma aggravation, skin irritation, and exposure to pathogens from contaminated water. Children and individuals with compromised immune systems face higher risks."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to restore water-damaged carpet vs. replace it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional carpet restoration (extraction, pad replacement, cleaning, drying) typically costs $3-$7 per square foot. Complete carpet replacement ranges from $8-$15 per square foot including materials and labor. However, restoration is only viable for clean water damage caught early—contaminated water or delayed response requires replacement regardless of cost comparison."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://flooddoctor.com/#business",
      "name": "Flood Doctor",
      "image": "https://flooddoctor.com/logo.png",
      "description": "24/7 water damage restoration and carpet drying services serving Northern Virginia and Washington DC. IICRC certified professionals specializing in emergency water extraction and flood recovery.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Northern Virginia",
        "addressRegion": "VA",
        "addressCountry": "US"
      },
      "telephone": "703-665-0505",
      "priceRange": "$$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        "Arlington, VA",
        "Alexandria, VA",
        "Fairfax, VA",
        "Loudoun County, VA",
        "Prince William County, VA",
        "Washington, DC"
      ]
    }
  ]
};

const WetCarpetWaterDamage: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Wet Carpet: Can Water-Damaged Carpet Be Saved? | Northern Virginia Expert Guide"
        description="Comprehensive guide to carpet water damage: timeline for salvageability, clean vs contaminated water factors, professional extraction process, replacement criteria, health risks, and cost analysis for NoVA homeowners."
        structuredData={schemaData}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-[#1a73e8] px-4 py-1 rounded-full text-sm font-semibold">
              Water Damage Restoration
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wet Carpet: Can Water-Damaged Carpet Be Saved?
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime="2024-01-15">January 15, 2024</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            When water soaks your carpet, immediate questions arise: Can it be saved? Should the padding be replaced? What about health risks? This comprehensive guide breaks down exactly when carpet can be salvaged versus when replacement is necessary, with specific timelines, water categories, and cost comparisons for Northern Virginia homeowners facing water damage.
          </p>
        </header>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-[#1a73e8] p-6 mb-12 rounded-r-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Carpet Soaked? Every Minute Counts
              </h3>
              <p className="text-gray-700">
                24/7 emergency carpet extraction across Northern Virginia. Professional assessment within 60-90 minutes.
              </p>
            </div>
            <a
              href="tel:703-665-0505"
              className="inline-flex items-center gap-2 bg-[#1a73e8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1557b0] transition-colors whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              703-665-0505
            </a>
          </div>
        </div>

        <ArticleAuthor datePublished="2024-01-15" readTime="12 min read" />

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            The Critical Question: Save or Replace?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Carpet represents a significant investment in your home, making the decision to restore or replace after water damage both financially and emotionally challenging. The answer isn't one-size-fits-all—it depends on multiple critical factors including water contamination level, response time, carpet material, and saturation extent.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Professional restoration experts evaluate these variables using IICRC (Institute of Inspection, Cleaning and Restoration Certification) standards to determine salvageability. Understanding these factors helps homeowners make informed decisions and work effectively with insurance adjusters and restoration professionals.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This guide provides the detailed information you need to assess your water-damaged carpet situation, understand the restoration process, recognize when replacement is non-negotiable, and navigate the cost implications of both options.
          </p>
        </section>

        {/* Timeline Critical Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Time: The Most Critical Factor in Carpet Salvageability
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The timeframe between water exposure and professional extraction is the single most important determinant of whether carpet can be saved. Water damage creates a countdown—not just to mold growth, but to irreversible material degradation.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                0-24 Hours: Optimal Salvage Window
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Salvageability:</strong> Excellent for Category 1 water, good for Category 2 with proper treatment.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Carpet fibers absorb water but haven't yet begun significant deterioration. Padding becomes saturated. Subfloor begins moisture absorption. Mold spores activate but visible growth hasn't started.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Immediate professional extraction, padding removal, antimicrobial treatment, industrial air movers and dehumidifiers deployed. Success rate for carpet salvage: 80-90% for clean water.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24-48 Hours: Critical Decision Point
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Salvageability:</strong> Moderate for Category 1, poor for Category 2, not recommended for Category 3.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Mold colonization begins on padding and carpet backing. Musty odors develop. Carpet backing adhesives may begin delaminating. Color bleeding from dyes occurs. Bacterial growth accelerates.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Aggressive extraction, immediate padding disposal, antimicrobial treatment, extended drying (48-72 hours), professional cleaning post-drying. Success rate: 50-70% for clean water, requires assessment for gray water.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                48-72 Hours: Limited Salvage Potential
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Salvageability:</strong> Poor even for Category 1, replacement strongly recommended for Category 2 and 3.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Visible mold growth on padding and carpet backing. Permanent odor absorption. Carpet backing deterioration. Delamination between face fiber and backing. Subfloor damage likely.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Professional assessment required before attempting restoration. May require mold remediation protocols, complete padding replacement, carpet backing treatment. Success rate: 20-40%, with compromised longevity.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Beyond 72 Hours: Replacement Necessary
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Salvageability:</strong> Not recommended regardless of water category.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>What's Happening:</strong> Extensive mold colonization throughout carpet structure. Permanent odor contamination. Structural breakdown of carpet backing. Health risks from mycotoxins and bacteria. Subfloor requires inspection and possible replacement.
              </p>
              <p className="text-gray-700">
                <strong>Required Action:</strong> Complete carpet and padding removal, subfloor assessment and treatment, mold remediation if necessary, replacement with new materials. Attempting restoration at this stage creates ongoing health hazards.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 mt-6">
            <p className="text-gray-700 font-semibold mb-2">
              Northern Virginia Climate Impact:
            </p>
            <p className="text-gray-700">
              Virginia's humid summers (60-80% relative humidity) accelerate deterioration timelines by 25-35%. What might take 48 hours in dry climates can occur in 30-36 hours in NoVA's summer months. Winter heating can also slow drying, extending moisture exposure time.
            </p>
          </div>
        </section>

          <MidArticleCTA variant="emergency" />

        {/* Water Category Classifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Water Category: Clean, Gray, or Black Water Matters
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The IICRC categorizes water damage into three classifications based on contamination level. This classification is often more important than timing when determining carpet salvageability.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Category 1: Clean Water (Most Salvageable)
              </h3>

              <p className="text-gray-700 mb-4">
                <strong>Sources:</strong> Broken water supply lines, toilet tanks (not bowls), appliance water lines, melting snow or ice, rainwater (if enters before contamination).
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Salvageability:</strong> Highest potential for carpet restoration if response is within 24-48 hours.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-green-500 mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Restoration Process:</strong>
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Immediate extraction using truck-mounted or portable water extractors</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Complete padding removal and disposal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Subfloor inspection and drying</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Carpet lifting, air circulation underneath, and backing treatment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Industrial air movers (12-24 hours minimum)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Dehumidification to below 60% relative humidity</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Light antimicrobial treatment as preventative measure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Professional cleaning and deodorization</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700">Reinstallation with new padding</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700">
                <strong>Timeline:</strong> 2-5 days from extraction to reinstallation. <strong>Success Rate:</strong> 80-90% if initiated within 24 hours.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Category 2: Gray Water (Limited Salvageability)
              </h3>

              <p className="text-gray-700 mb-4">
                <strong>Sources:</strong> Washing machine overflow, dishwasher discharge, toilet overflow with urine (no feces), sump pump failures, aquarium leaks.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Contamination:</strong> Contains chemicals, microorganisms, or organic matter that may cause discomfort or sickness if contacted or consumed.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500 mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Carpet Decision Factors:</strong>
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Response time under 24 hours:</strong> Restoration possible with extensive sanitization</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Response time 24-48 hours:</strong> Professional assessment required; likely replacement recommended</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Beyond 48 hours:</strong> Replacement mandatory</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Vulnerable occupants (infants, elderly, immunocompromised):</strong> Replacement strongly recommended regardless of timing</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>If Restoration Attempted:</strong> Requires antimicrobial treatment, EPA-registered disinfectants, hot water extraction cleaning, extended drying (48-72 hours), odor encapsulation, and clearance testing before reinstallation.
              </p>

              <p className="text-gray-700">
                <strong>Timeline:</strong> 4-7 days minimum. <strong>Success Rate:</strong> 40-60% with immediate response, declining rapidly after 24 hours.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Category 3: Black Water (Replacement Required)
              </h3>

              <p className="text-gray-700 mb-4">
                <strong>Sources:</strong> Sewage backups, toilet overflows with feces, flooding from rivers or streams, standing water with bacterial growth, hurricane/storm surge water.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Contamination:</strong> Contains pathogenic agents including bacteria (E. coli, Salmonella), viruses, parasites, fungi, and toxic organic substances.
              </p>

              <div className="bg-red-50 p-4 rounded border-l-4 border-red-500 mb-4">
                <p className="text-gray-700 mb-2 font-bold">
                  Carpet Salvage: NOT RECOMMENDED
                </p>
                <p className="text-gray-700 mb-3">
                  Category 3 water contamination poses serious health risks that cannot be adequately eliminated from porous materials like carpet. IICRC standards and EPA guidelines recommend complete removal and disposal of all porous materials contacted by black water.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700">Health risks outweigh any cost savings from restoration attempts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700">Insurance typically will not cover restoration of contaminated porous materials</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700">Liability concerns for restoration professionals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700">Permanent odor and contamination impossible to fully remediate</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>Required Process:</strong> Complete carpet and padding removal, subfloor disinfection and sealing or replacement, antimicrobial treatment of structural elements, air quality testing, and installation of new materials only after clearance.
              </p>

              <p className="text-gray-700">
                For sewage-related damage, our specialized <a href="/services/sewage-cleanup" className="text-[#1a73e8] hover:underline font-semibold">sewage cleanup services</a> ensure safe, compliant remediation following all EPA and OSHA protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Carpet vs Padding */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Carpet vs. Padding: Why One Can Save, The Other Can't
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Understanding the structural differences between carpet and padding explains why padding almost always requires replacement while carpet may be salvageable.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Carpet (Face Fibers): Sometimes Salvageable
              </h3>

              <p className="text-gray-700 mb-3">
                <strong>Structure:</strong> Synthetic or natural fibers tufted into backing material, treated with stain resistance and antimicrobial coatings.
              </p>

              <p className="text-gray-700 mb-3">
                <strong>Why It Can Be Saved:</strong>
              </p>
              <ul className="space-y-2 mb-3">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Synthetic fibers (nylon, polyester) resist bacterial growth better than padding</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Can be extracted, dried, and professionally cleaned</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Antimicrobial treatments can be applied to face fibers and backing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Less porous than padding, dries more effectively</span>
                </li>
              </ul>

              <p className="text-gray-700">
                <strong>Best Candidates for Salvage:</strong> Commercial-grade nylon carpet, low-pile residential carpet, carpet with moisture barriers, synthetic fiber construction.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Padding: Almost Always Replace
              </h3>

              <p className="text-gray-700 mb-3">
                <strong>Structure:</strong> Highly porous foam, rubber, or fiber material designed to compress and rebound under foot traffic.
              </p>

              <p className="text-gray-700 mb-3">
                <strong>Why It Must Be Replaced:</strong>
              </p>
              <ul className="space-y-2 mb-3">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Absorbs water like a sponge, retaining moisture for extended periods</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Cannot be effectively extracted due to cellular structure</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Creates ideal mold growth environment (dark, damp, organic material)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Deteriorates when wet, losing cushioning properties</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Odor absorption is permanent</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Low replacement cost doesn't justify restoration attempts</span>
                </li>
              </ul>

              <p className="text-gray-700">
                <strong>Exception:</strong> Some high-end rubber padding may survive Category 1 water with immediate extraction, but replacement is still recommended as best practice.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6">
            <p className="text-gray-700 font-semibold mb-2">
              Professional Standard:
            </p>
            <p className="text-gray-700">
              IICRC S500 Standard for Professional Water Damage Restoration recommends padding replacement in all water damage scenarios regardless of water category or timing. The cost of new padding ($0.50-$1.50 per square foot) is minimal compared to the health risks and restoration complications of attempting to save contaminated padding.
            </p>
          </div>
        </section>

        {/* Professional Extraction Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Professional Carpet Extraction and Drying Process
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Successful carpet restoration requires specialized equipment and techniques far beyond what homeowners can achieve with rental equipment or household fans.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Emergency Assessment (0-2 Hours)
                </h3>
                <p className="text-gray-700 mb-2">
                  Certified technicians arrive on-site within 60-90 minutes across Northern Virginia. Initial assessment includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Water category determination (clean, gray, or black water)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Affected area measurement using moisture meters and thermal imaging</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Carpet type, age, and condition evaluation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Subfloor material identification (concrete, plywood, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Salvageability determination with documentation for insurance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Water Extraction (2-6 Hours)
                </h3>
                <p className="text-gray-700 mb-2">
                  Immediate water removal using commercial-grade equipment:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Truck-mounted extractors:</strong> Remove hundreds of gallons per hour with powerful suction (2000+ CFM)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Portable extraction units:</strong> Deploy in interior spaces for detailed work</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Weighted extraction tools:</strong> Apply pressure to carpet during extraction, removing water from deep fibers and backing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Multiple passes:</strong> 3-5 extraction passes until minimal water recovery</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Result:</strong> Carpet moisture content reduced from saturation (100%+) to 30-50% after extraction, creating foundation for effective drying.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Padding Removal and Disposal (3-8 Hours)
                </h3>
                <p className="text-gray-700 mb-2">
                  Complete padding removal is mandatory in professional restoration:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Carpet lifted at seams and edges, carefully separated from tack strips</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Saturated padding removed and disposed of according to contamination level</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Subfloor inspected for damage, moisture content measured</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Subfloor extraction if necessary (especially on concrete)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Category 2/3 padding bagged as contaminated waste</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Antimicrobial Treatment (6-12 Hours Post-Extraction)
                </h3>
                <p className="text-gray-700 mb-2">
                  Preventative and remedial treatment application:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">EPA-registered antimicrobials applied to carpet backing and subfloor</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Product selection based on water category and material compatibility</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Application via spraying or injection into subfloor</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Dwell time observed per manufacturer specifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Industrial Drying Setup (Day 1)
                </h3>
                <p className="text-gray-700 mb-2">
                  Professional drying equipment deployment creates optimal evaporation conditions:
                </p>
                <ul className="space-y-2 mb-3">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Air movers (3-6 per room):</strong> High-velocity fans positioned for maximum airflow across carpet surface and underneath lifted edges</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Commercial dehumidifiers:</strong> Extract 150-250 pints per day (vs. 30-50 for consumer units), targeting below 60% relative humidity</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Injectidry systems:</strong> Force warm, dry air between carpet and subfloor through specialized mats</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700"><strong>Temperature control:</strong> Optimal drying at 70-80°F</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Equipment runs 24/7 until moisture readings reach acceptable levels. Noise level: 60-70 decibels (normal conversation volume).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Daily Monitoring (Days 1-5)
                </h3>
                <p className="text-gray-700 mb-2">
                  Technicians visit daily to track progress and adjust equipment:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Moisture meter readings at designated monitoring points</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Relative humidity and temperature tracking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Visual inspection for signs of mold or secondary damage</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Equipment repositioning for optimal effectiveness</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Photo documentation of progress</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Drying Timeline:</strong> Carpet typically reaches dry standard (below 10% moisture content) in 24-72 hours. Subfloor may require additional time (3-7 days for wood, 5-14 days for concrete).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                7
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Professional Cleaning (Day 3-5)
                </h3>
                <p className="text-gray-700 mb-2">
                  Once dry, carpet receives thorough professional cleaning:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Hot water extraction (steam cleaning) at 180-200°F</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">EPA-registered cleaning solutions appropriate for water category</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Deodorization treatment to eliminate any remaining odors</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Final extraction pass to remove cleaning solution</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Stain protection reapplication (optional)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                8
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Reinstallation (Day 4-6)
                </h3>
                <p className="text-gray-700 mb-2">
                  Final restoration with new materials:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">New padding installation (same or upgraded density)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Carpet stretching and reinstallation on tack strips</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Seam re-joining if carpet was sectioned</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Final grooming and inspection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1a73e8] font-bold">•</span>
                    <span className="text-gray-700">Documentation and warranty provision</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 mt-6">
            <p className="text-gray-700 font-semibold mb-2">
              Why Professional Equipment Matters:
            </p>
            <p className="text-gray-700">
              Consumer-grade equipment (rental carpet cleaners, box fans, residential dehumidifiers) extends drying time by 300-500%, increasing mold risk exponentially. What professional equipment dries in 24-48 hours may take homeowners 5-10 days—well beyond the critical window. Additionally, improper extraction technique can drive water deeper into padding and subfloor, actually worsening damage.
            </p>
          </div>
        </section>

        {/* When Replacement Required */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            When Carpet Must Be Replaced: Non-Negotiable Scenarios
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Certain conditions make carpet restoration impossible, inadvisable, or economically unfeasible regardless of homeowner preference or cost considerations.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Category 3 (Black Water) Contamination
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Why:</strong> Sewage and grossly contaminated water contains pathogens (bacteria, viruses, parasites) that penetrate carpet fibers and backing. No cleaning or sanitization method can guarantee complete pathogen removal from porous materials.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Health Risk:</strong> Exposure to sewage-contaminated carpet causes gastroenteritis, hepatitis, severe allergic reactions, and infections. Children and pets playing on contaminated carpet face highest risk.
              </p>
              <p className="text-gray-700">
                <strong>Standard:</strong> EPA, OSHA, and IICRC standards all mandate removal and disposal of porous materials contacted by Category 3 water. Insurance will not cover restoration attempts; only replacement.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Water Exposure Beyond 72 Hours
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Why:</strong> After 72 hours of moisture exposure, mold colonization is extensive throughout carpet structure. Delamination between face fibers and backing occurs. Permanent odors develop. Structural integrity is compromised.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Even with professional treatment:</strong> Mold spore counts remain elevated, odors persist, carpet appearance is permanently affected, and lifespan is dramatically shortened.
              </p>
              <p className="text-gray-700">
                <strong>Economics:</strong> Cost of extensive remediation approaches or exceeds replacement cost while delivering inferior results.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Visible Mold Growth
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Why:</strong> Once mold is visible on carpet surface, colonization is extensive throughout padding (which must be removed) and has penetrated carpet backing and face fibers. Surface cleaning removes visible growth but not the extensive subsurface contamination.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Risk:</strong> Mold remediation on carpet requires aggressive cleaning that often damages fibers. Mold may return even after treatment due to remaining spores.
              </p>
              <p className="text-gray-700">
                <strong>Recommendation:</strong> Professional mold remediators typically recommend replacement when growth is visible on carpet.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Carpet Delamination or Structural Damage
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>What is delamination:</strong> Separation of face fibers from backing material caused by adhesive breakdown when saturated. Appears as bubbling, wrinkling, or sections that don't stretch properly.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Why replacement is required:</strong> Delaminated carpet cannot be restretched properly. Walking on delaminated areas accelerates deterioration. Appears unprofessional and aged.
              </p>
              <p className="text-gray-700">
                <strong>Other structural damage:</strong> Wicking (discoloration traveling up fibers from contaminated padding), permanent color bleeding from wet dyes, fiber matting that doesn't recover.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pre-Existing Carpet Age and Condition
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>When replacement makes more sense:</strong> Carpet already at or near end of useful life (10+ years for residential, 7+ for high-traffic areas), significant pre-existing wear or staining, outdated style or color.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Economic reality:</strong> If carpet has 1-3 years of useful life remaining, spending $3-7/sq ft on restoration versus $8-12/sq ft for new carpet with 10-15 year lifespan makes replacement the better value.
              </p>
              <p className="text-gray-700">
                <strong>Insurance consideration:</strong> Some policies provide actual cash value (ACV) based on depreciated carpet value. If carpet is old, ACV may be so low that upgrade to replacement costs only slightly more than restoration.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Subfloor Damage Requiring Replacement
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Why:</strong> If water damage has compromised subfloor (particle board delamination, plywood rot, concrete surface degradation), carpet must be removed for subfloor repair regardless of carpet condition.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Decision point:</strong> Once carpet is removed for subfloor access, reinstallation costs make replacement more economical in most cases, especially if padding must be replaced anyway.
              </p>
              <p className="text-gray-700">
                <strong>Hidden benefit:</strong> Subfloor repairs often present opportunity to upgrade to better carpet without significant additional labor cost.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Health-Sensitive Occupants
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>When restoration isn't worth the risk:</strong> Homes with infants, young children, elderly residents, individuals with asthma or allergies, immunocompromised persons, or chronic respiratory conditions.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Why higher standard applies:</strong> Even small residual contamination or elevated mold spore counts can trigger serious health reactions in vulnerable individuals. The peace of mind from new, uncontaminated materials outweighs cost savings.
              </p>
              <p className="text-gray-700">
                <strong>Professional recommendation:</strong> Restoration professionals often recommend replacement over restoration for Category 2 water in homes with vulnerable occupants, even within the salvage timeframe.
              </p>
            </div>
          </div>
        </section>

        {/* Health Risks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Health Risks of Improperly Dried Carpet
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Attempting DIY carpet restoration or using unqualified contractors creates serious health hazards that may not manifest immediately but compound over time.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Mold and Mycotoxin Exposure
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Timeline:</strong> Mold begins growing within 24-48 hours of moisture exposure. Produces mycotoxins (toxic compounds) that become airborne.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Health effects:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Respiratory irritation and difficulty breathing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Chronic coughing and wheezing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Allergic reactions and asthma aggravation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Headaches and fatigue</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Skin and eye irritation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Neurological effects in severe cases</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Bacterial Contamination
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Source:</strong> Gray and black water contain bacteria. Even clean water becomes contaminated after 48 hours of standing.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Health effects:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Gastrointestinal infections (E. coli, Salmonella)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Skin infections from contact</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Wound infections in those with cuts or scratches</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Respiratory infections from airborne particles</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Severe illness in immunocompromised individuals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Allergen Accumulation
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Mechanism:</strong> Damp carpet becomes reservoir for dust mites, pet dander, and other allergens that proliferate in moist environments.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Health effects:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Persistent allergy symptoms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Worsening asthma control</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Development of new sensitivities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Chronic sinus problems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Sleep disruption from nighttime symptoms</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Chemical Off-Gassing
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Source:</strong> Wet carpet adhesives, backing materials, and padding release volatile organic compounds (VOCs) when saturated.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Health effects:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Headaches and dizziness</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Nausea</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Eye, nose, and throat irritation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Difficulty concentrating</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Long-term exposure concerns</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Especially Vulnerable Populations
            </h3>
            <p className="text-gray-700 mb-4">
              Certain individuals face disproportionately higher health risks from improperly dried carpet:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Infants and young children:</strong> Spend more time on floors, developing immune systems, higher respiratory rates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Elderly individuals:</strong> Weakened immune response, existing respiratory conditions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Asthma sufferers:</strong> Mold and allergens trigger acute attacks</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Immunocompromised persons:</strong> Chemotherapy patients, organ transplant recipients, HIV/AIDS patients</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Allergy sufferers:</strong> Amplified reactions to mold and dust mites</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700"><strong>Pets:</strong> Closer to carpet, groom themselves, can develop respiratory issues</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Cost Analysis: Restoration vs. Replacement
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Understanding the complete cost picture—including short-term restoration expenses, long-term implications, and insurance considerations—helps homeowners make informed financial decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Restoration Costs
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Emergency Extraction:</p>
                  <p className="text-gray-700">$200-$500 base charge plus $3-$7 per square foot</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Padding Removal & Disposal:</p>
                  <p className="text-gray-700">$0.50-$1.50 per square foot</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Drying Equipment (3-5 days):</p>
                  <p className="text-gray-700">$300-$800 total for dehumidifiers and air movers</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Antimicrobial Treatment:</p>
                  <p className="text-gray-700">$100-$300 depending on area size</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Professional Cleaning:</p>
                  <p className="text-gray-700">$0.30-$0.75 per square foot</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">New Padding Installation:</p>
                  <p className="text-gray-700">$0.50-$1.50 per square foot (material + labor)</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Reinstallation Labor:</p>
                  <p className="text-gray-700">$1.00-$2.00 per square foot</p>
                </div>

                <div className="pt-4 border-t-2 border-green-300">
                  <p className="font-bold text-gray-900 mb-2">Typical Total (300 sq ft room):</p>
                  <p className="text-xl font-bold text-green-700">$1,500 - $3,500</p>
                  <p className="text-sm text-gray-600 mt-1">($5-$11 per square foot all-in)</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-green-500">
                <p className="text-gray-700 mb-2">
                  <strong>Best For:</strong>
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Category 1 water damage caught within 24 hours</li>
                  <li>• Newer carpet in good condition (less than 5 years old)</li>
                  <li>• High-quality carpet worth preserving</li>
                  <li>• Budget constraints making replacement difficult</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Replacement Costs
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Removal & Disposal:</p>
                  <p className="text-gray-700">$1.00-$2.00 per square foot</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Budget Carpet (polyester, low pile):</p>
                  <p className="text-gray-700">$2-$5 per square foot (material + install)</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Mid-Grade Carpet (nylon, medium pile):</p>
                  <p className="text-gray-700">$4-$8 per square foot (material + install)</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Premium Carpet (high-quality nylon, plush):</p>
                  <p className="text-gray-700">$7-$12 per square foot (material + install)</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Luxury Carpet (wool, high-end):</p>
                  <p className="text-gray-700">$10-$20+ per square foot (material + install)</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Padding (included in above):</p>
                  <p className="text-gray-700">6-8 lb density recommended</p>
                </div>

                <div className="pt-4 border-t-2 border-blue-300">
                  <p className="font-bold text-gray-900 mb-2">Typical Total (300 sq ft room, mid-grade):</p>
                  <p className="text-xl font-bold text-blue-700">$2,100 - $3,600</p>
                  <p className="text-sm text-gray-600 mt-1">($7-$12 per square foot all-in)</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-blue-500">
                <p className="text-gray-700 mb-2">
                  <strong>Best For:</strong>
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Category 2 or 3 water contamination</li>
                  <li>• Delayed response (beyond 48-72 hours)</li>
                  <li>• Older carpet (7+ years)</li>
                  <li>• Visible mold growth</li>
                  <li>• Homes with health-sensitive occupants</li>
                  <li>• Desire for upgrade/style update</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Hidden Costs and Long-Term Considerations
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">Restoration Hidden Costs:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Electricity for equipment:</strong> $100-$300 for 3-5 days of continuous operation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Temporary displacement:</strong> Hotel costs if extensive equipment makes home unlivable</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Shortened carpet lifespan:</strong> Water-damaged carpet may last 3-5 years instead of 10-15</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Potential for mold recurrence:</strong> If not thoroughly dried, may require later remediation</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Replacement Benefits:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Full warranty:</strong> 10-25 years depending on quality</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>No contamination concerns:</strong> Complete peace of mind for health</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Aesthetic upgrade:</strong> Updated style and color</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Better performance:</strong> Newer stain resistance and comfort technology</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700"><strong>Increased home value:</strong> New carpet appeals to buyers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Insurance Coverage Considerations
            </h3>
            <p className="text-gray-700 mb-3">
              Most homeowners insurance policies cover water damage from sudden and accidental events (burst pipes, appliance failures, storms). Understanding your coverage affects the restoration vs. replacement decision:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-[#1a73e8] font-bold">•</span>
                <span className="text-gray-700"><strong>Actual Cash Value (ACV) policies:</strong> Pay depreciated value of carpet. If your 10-year-old carpet has depreciated to $2/sq ft ACV but replacement costs $10/sq ft, you pay the $8/sq ft difference.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1a73e8] font-bold">•</span>
                <span className="text-gray-700"><strong>Replacement Cost Value (RCV) policies:</strong> Pay full replacement cost regardless of age. More advantageous for older carpet.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1a73e8] font-bold">•</span>
                <span className="text-gray-700"><strong>Deductibles:</strong> Typical $500-$2,500. For small areas, restoration cost may be below deductible, making it an out-of-pocket expense either way.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1a73e8] font-bold">•</span>
                <span className="text-gray-700"><strong>Coverage exclusions:</strong> Flood damage typically excluded (requires separate flood insurance). Gradual leaks or maintenance issues may not be covered.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1a73e8] font-bold">•</span>
                <span className="text-gray-700"><strong>Professional documentation required:</strong> Insurance companies typically require certified restoration company documentation for major claims.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Prevention */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Preventing Mold Under Carpet: Proactive Measures
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The best defense against carpet water damage is prevention. Northern Virginia homeowners can take specific actions to reduce water intrusion risks and detect problems early.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Regular Home Maintenance
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Inspect washing machine hoses annually; replace every 3-5 years or if showing wear</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Check dishwasher connections and seals quarterly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Test water heater pressure relief valve annually</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Inspect toilet supply lines and tank components yearly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Clean refrigerator drain pans and lines semi-annually</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Service HVAC systems annually, checking condensate drain lines</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Water Detection and Shut-Off Technology
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Water leak detectors:</strong> Place sensors near water heaters, washing machines, dishwashers, and under sinks. Smart models send phone alerts. Cost: $20-$100 per sensor.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Automatic shut-off valves:</strong> Install on washing machines and water heaters to stop flow when hoses fail. Cost: $50-$150.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Whole-house water shut-off systems:</strong> Smart systems detect unusual water flow patterns and shut off main supply. Cost: $400-$800 installed. Can reduce insurance premiums.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Sump pump alarms and battery backup:</strong> Critical in NoVA homes with basements. Alarm alerts when pump fails; battery backup continues operation during power outages. Cost: $200-$600.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Northern Virginia Specific Precautions
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Foundation and drainage:</strong> Ensure proper grading (6 inches drop over 10 feet from foundation). Clean gutters and downspouts quarterly. Extend downspouts 6-10 feet from foundation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Basement and crawl space management:</strong> Use dehumidifiers to maintain below 50% RH. Seal foundation cracks. Install vapor barriers in crawl spaces.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Storm preparation:</strong> Before predicted severe weather, check sump pump operation, clear floor drains, move valuables off basement floors, know main water shut-off location.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700"><strong>Winter precautions:</strong> Insulate pipes in unheated areas, disconnect and drain outdoor hoses, maintain heat above 55°F when away, know how to shut off individual fixture valves.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Early Detection Signs
              </h3>
              <p className="text-gray-700 mb-3">
                Catching water intrusion early dramatically improves salvage potential. Watch for these warning signs:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Musty or earthy odors, especially in basements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Discoloration on carpet or visible water marks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Carpet feels damp or spongy underfoot</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Increased humidity levels (above 60%)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Unexplained increase in water bill</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Visible mold on baseboards or walls near carpet</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Peeling wallpaper or bubbling paint near floor</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1a73e8] font-bold">•</span>
                  <span className="text-gray-700">Allergy symptoms that worsen at home</span>
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
                Can I dry wet carpet myself with fans and a dehumidifier?
              </h3>
              <p className="text-gray-700">
                For very minor Category 1 water exposure caught immediately (within 1-2 hours), homeowner intervention may prevent damage. However, consumer equipment is 3-5 times less powerful than professional gear, extending drying time well beyond the critical 24-48 hour window. Hidden moisture in padding and subfloor is nearly impossible to detect and dry without professional moisture meters and extraction equipment. DIY approaches often result in mold growth, delamination, and eventual professional intervention at higher cost. For any significant water exposure, professional restoration is the prudent choice.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How can I tell if there's mold under my carpet?
              </h3>
              <p className="text-gray-700">
                Warning signs include musty odors (often described as earthy or stale), visible discoloration on carpet edges or baseboards, allergy symptoms that worsen at home, carpet that feels damp or shows moisture when pressed, and darker patches that differ from normal wear patterns. Professional assessment uses moisture meters, thermal imaging to detect hidden dampness, and air quality testing to measure mold spore counts. If water damage occurred more than 48-72 hours ago without professional drying, assume mold is present and requires professional evaluation.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will my insurance cover carpet restoration or replacement?
              </h3>
              <p className="text-gray-700">
                Coverage depends on your policy type and the water damage cause. Sudden and accidental water damage (burst pipes, appliance failures, accidental overflows) is typically covered. Flood damage from external sources requires separate flood insurance. Gradual leaks or lack of maintenance are usually excluded. Your policy will specify either Actual Cash Value (ACV, which depreciates based on age) or Replacement Cost Value (RCV, which pays full replacement cost). Professional restoration companies work directly with insurance adjusters, document damage per industry standards, and often handle claims paperwork. Review your policy and contact your agent immediately after water damage occurs.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can carpet be saved after a toilet overflow?
              </h3>
              <p className="text-gray-700">
                It depends entirely on whether the overflow is Category 2 (clear water from tank or bowl with urine only) or Category 3 (water with feces). Category 2 may be salvageable with immediate extraction (within 24 hours), complete padding replacement, antimicrobial treatment, and professional sanitization. Category 3 requires complete carpet and padding removal and disposal—no exceptions. The health risks from sewage contamination cannot be adequately mitigated in porous materials. Even for Category 2, many homeowners choose replacement for peace of mind, especially in homes with children or vulnerable individuals.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if only part of my carpet is wet—can I replace just that section?
              </h3>
              <p className="text-gray-700">
                Partial replacement is technically possible but often problematic. Challenges include matching dye lot (carpet color varies between production runs, making exact matches nearly impossible), wear patterns (new carpet alongside aged carpet shows obvious differences), seam visibility (additional seams rarely blend invisibly), and warranty issues (partial work may void manufacturer warranties). For small, discrete areas (closets, isolated sections), partial replacement may be acceptable. For visible areas, especially in open-plan spaces, full room replacement delivers better aesthetic results. An experienced carpet installer can assess whether partial replacement is viable for your specific situation. Professional water damage assessment should evaluate the full extent of moisture migration, as water often travels beyond visible wet areas.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white p-8 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Expert Carpet Water Damage Assessment—Free
            </h2>
            <p className="text-lg mb-6 text-blue-50">
              Don't risk your family's health or waste money on the wrong approach. Our IICRC-certified technicians provide honest, professional assessments of carpet salvageability at no charge. We'll clearly explain your options, document for insurance, and execute whatever approach you choose—restoration or replacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:703-665-0505"
                className="inline-flex items-center gap-2 bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call Now: 703-665-0505
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a73e8] transition-colors"
              >
                Schedule Assessment
              </a>
            </div>
            <p className="text-sm text-blue-100">
              24/7 Emergency Response • Arlington • Alexandria • Fairfax • Loudoun • Prince William
            </p>
          </div>
        </section>
      </article>
      <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/wet-carpet-water-damage/" />
      </main>
  );
};

export default WetCarpetWaterDamage;
