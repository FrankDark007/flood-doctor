import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';
import ArticleAuthor, { generateAuthorSchema } from '../../components/ui/ArticleAuthor';
import MidArticleCTA from '../../components/ui/MidArticleCTA';
import RelatedArticles from '../../components/ui/RelatedArticles';

const WindowDoorWaterIntrusion: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the most common causes of window and door water intrusion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most common causes include failed caulking and sealants around frames, damaged or missing flashing, worn weatherstripping, improper installation leaving gaps, storm-driven rain penetrating weak points, condensation buildup, and foundation settling causing frame misalignment. In Northern Virginia, wind-driven rain during severe storms exploits even minor seal failures."
            }
          },
          {
            "@type": "Question",
            "name": "How can I tell if my windows and doors are leaking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Look for water stains or discoloration around window and door frames, peeling or bubbling paint near openings, visible mold growth on walls adjacent to windows, musty odors near exterior walls, warped or soft flooring near entries, daylight visible around closed doors, condensation between window panes, and cracked or missing caulk. Active leaks may show water pooling on sills during rainstorms."
            }
          },
          {
            "@type": "Question",
            "name": "What is flashing and why does it fail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Flashing is metal or composite material installed around windows and doors to direct water away from the building envelope. It fails due to improper installation during construction, corrosion from age and weather exposure, physical damage from storms or impacts, separation from siding during expansion and contraction, and missing kickout flashing at critical junctions. Failed flashing allows water to penetrate wall cavities, causing extensive hidden damage."
            }
          },
          {
            "@type": "Question",
            "name": "Should I repair or replace leaking windows and doors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Repair is appropriate for minor seal failures, damaged weatherstripping, failed caulking, or single broken glass panes. Replace when there's extensive frame rot or deterioration, repeated leak problems despite repairs, condensation between double panes indicating seal failure, single-pane windows in older homes, warped frames that won't seal properly, or when windows exceed 20-25 years old. Replacement provides better energy efficiency and long-term reliability."
            }
          },
          {
            "@type": "Question",
            "name": "How do I prevent future window and door leaks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Inspect and replace caulking every 3-5 years, ensure gutters and downspouts direct water away from openings, check and replace worn weatherstripping annually, verify proper drainage and grading around foundations, inspect flashing during roof work, maintain painted surfaces to prevent wood deterioration, test windows during heavy rain to identify weak points, and schedule professional inspections every 5 years for older homes."
            }
          },
          {
            "@type": "Question",
            "name": "Will homeowners insurance cover window and door water damage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Insurance typically covers sudden, accidental water intrusion from storm damage or catastrophic seal failure. Coverage is usually denied for gradual damage from poor maintenance, wear and tear, or pre-existing conditions. Document all damage with photos immediately, report claims within 24-48 hours, demonstrate regular maintenance, and keep records of repairs. Professional water damage restoration companies provide documentation that supports insurance claims."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Flood Doctor",
        "description": "Professional water damage restoration and waterproofing services in Northern Virginia",
        "telephone": "(877) 497-0007",
        "areaServed": [
          "Arlington VA",
          "Alexandria VA",
          "Fairfax VA",
          "Falls Church VA",
          "McLean VA",
          "Vienna VA",
          "Reston VA",
          "Herndon VA",
          "Tysons VA",
          "Springfield VA",
          "Annandale VA",
          "Burke VA",
          "Centreville VA",
          "Chantilly VA",
          "Great Falls VA",
          "Oakton VA",
          "Dunn Loring VA",
          "Merrifield VA",
          "Franconia VA",
          "Kingstowne VA",
          "Lorton VA",
          "Newington VA",
          "Mount Vernon VA",
          "Fort Belvoir VA",
          "Fort Hunt VA",
          "Hybla Valley VA",
          "Groveton VA",
          "Rose Hill VA",
          "Lincolnia VA",
          "Seven Corners VA",
          "Bailey's Crossroads VA",
          "Idylwood VA",
          "Pimmit Hills VA",
          "West Falls Church VA",
          "Mantua VA",
          "Fairfax Station VA",
          "Clifton VA",
          "Fairfax City VA",
          "Falls Church City VA",
          "Arlington County VA",
          "Fairfax County VA",
          "Alexandria City VA",
          "Loudoun County VA",
          "Prince William County VA"
        ]
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Window & Door Leaks: Water Intrusion Causes and Solutions | Northern VA"
        description="Complete guide to window and door water intrusion in Northern Virginia homes. Learn causes, detection, repair vs replacement, professional sealing, and prevention strategies."
        structuredData={schemaMarkup}
      />

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Prevention Guide
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Window & Door Leaks: Water Intrusion Causes and Solutions for Northern Virginia Homes
          </h1>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span>Published January 1, 2025</span>
            <span className="mx-2">•</span>
            <span>12 min read</span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Windows and doors are critical weak points in your home's water protection system. Even minor seal failures, damaged flashing, or worn weatherstripping can allow significant water intrusion during Northern Virginia's severe storms, causing hidden wall damage, mold growth, and structural deterioration. Understanding how to identify, repair, and prevent window and door leaks protects your home and saves thousands in restoration costs.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            Emergency Water Intrusion? Call Now: <a href="tel:8774970007" className="text-blue-600 hover:text-blue-800 underline">(877) 497-0007</a>
          </p>
          <p className="text-blue-800">
            24/7 emergency response for water damage, leak detection, professional sealing, and complete restoration services across Northern Virginia.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Common Causes of Window and Door Water Intrusion
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Water intrusion around windows and doors rarely results from single failures. Instead, multiple compromised protection layers allow moisture penetration during heavy rainfall and wind-driven storms common in Northern Virginia.
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Failed Caulking and Sealants</h3>
              <p className="text-gray-700 mb-3">
                Caulk deteriorates over time from UV exposure, temperature extremes, and physical stress. Most exterior caulking has a 5-10 year lifespan. Once caulk cracks, shrinks, or separates from surfaces, water flows directly into wall cavities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>UV Degradation:</strong> Sunlight breaks down caulk compounds, causing brittleness and cracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Adhesion Failure:</strong> Caulk separates from frame or siding, creating gaps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Shrinkage:</strong> Caulk material contracts, leaving voids that allow water entry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Improper Application:</strong> Initial installation gaps or insufficient coverage</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Damaged or Missing Flashing</h3>
              <p className="text-gray-700 mb-3">
                Flashing is the first line of defense against water intrusion. This metal or composite material directs water away from vulnerable openings. When flashing fails, water flows directly into wall assemblies.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span><strong>Improper Installation:</strong> Common in fast-track construction and DIY window replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span><strong>Missing Head Flashing:</strong> Top of window lacks water diversion, allowing downward flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span><strong>Corrosion and Rust:</strong> Metal flashing deteriorates, especially at fastener points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span><strong>Separation from Siding:</strong> Thermal expansion and settling cause gaps</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Worn or Missing Weatherstripping</h3>
              <p className="text-gray-700 mb-3">
                Weatherstripping creates airtight and water-resistant seals when windows and doors close. High-quality weatherstripping lasts 3-7 years, but constant use and exposure accelerates deterioration.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">•</span>
                  <span><strong>Compression Set:</strong> Material loses resilience and won't seal properly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">•</span>
                  <span><strong>Tearing and Separation:</strong> Physical damage from use creates permanent gaps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">•</span>
                  <span><strong>Adhesive Failure:</strong> Stick-on weatherstripping detaches from frame</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">•</span>
                  <span><strong>UV and Heat Damage:</strong> Material becomes brittle and cracks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Storm-Driven Rain Penetration</h3>
              <p className="text-gray-700 mb-3">
                Northern Virginia experiences severe thunderstorms with high winds that drive rain horizontally against building facades. Wind pressure forces water through openings that remain dry during normal rainfall.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>Positive Wind Pressure:</strong> Pushes water into even small gaps and cracks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>Capillary Action:</strong> Water wicks through tiny cracks via surface tension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>Overwhelmed Drainage:</strong> Weep holes and drainage planes can't handle volume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>Directional Exposure:</strong> South and west-facing openings receive most storm impact</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Understanding these failure mechanisms helps identify vulnerable areas before water intrusion causes damage. Regular inspection and preventive maintenance address problems when repairs remain simple and inexpensive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Signs of Water Damage Around Windows and Doors
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Early detection prevents minor leaks from becoming major restoration projects. Watch for these warning signs during and after rainstorms.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Visible Interior Indicators</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Water Stains and Discoloration</h4>
              <p className="text-gray-700 text-sm">
                Brown, yellow, or dark stains on walls, ceilings, or floors near windows and doors indicate active or recent water intrusion. Stains often appear first on window sills, expanding to adjacent walls and flooring.
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Peeling or Bubbling Paint</h4>
              <p className="text-gray-700 text-sm">
                Paint and wallpaper separate from walls when moisture accumulates behind surfaces. This indicates water has penetrated deep enough to compromise adhesion, suggesting ongoing moisture problems.
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Mold Growth and Musty Odors</h4>
              <p className="text-gray-700 text-sm">
                Black, green, or white mold patches around openings signal persistent moisture. Musty odors without visible mold indicate hidden growth behind walls or under flooring near leak sources.
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Warped or Soft Flooring</h4>
              <p className="text-gray-700 text-sm">
                Hardwood floors cupping, buckling, or developing soft spots near doors and windows indicates water absorption. Carpet may feel damp or show darkening in corners and along walls.
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Condensation Between Panes</h4>
              <p className="text-gray-700 text-sm">
                Fog or moisture between double-pane windows indicates seal failure. This compromises insulation and often coincides with frame deterioration that allows water intrusion.
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Window and Door Operation Issues</h4>
              <p className="text-gray-700 text-sm">
                Sticking, dragging, or difficulty opening and closing often results from wood swelling from moisture absorption. This indicates ongoing water exposure that will worsen without intervention.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Exterior Warning Signs</h3>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Critical Exterior Inspection Points:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span><strong>Cracked or Missing Caulk:</strong> Visible gaps, cracks, or complete separation around frames</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span><strong>Damaged Flashing:</strong> Bent, corroded, or missing flashing at window and door heads</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span><strong>Siding Damage Near Openings:</strong> Warped, stained, or rotting siding indicates water infiltration</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span><strong>Daylight Visible Around Closed Doors:</strong> Gaps indicate improper installation or frame deterioration</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span><strong>Blocked Weep Holes:</strong> Drainage openings at window bottoms clogged with debris</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span><strong>Stained Trim and Frames:</strong> Water staining on exterior trim shows active drainage problems</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-red-900 mb-3">Conduct Active Leak Testing</h4>
            <p className="text-red-800 mb-3">
              The most reliable detection method is observation during heavy rainstorms. Watch windows and doors actively during rain to identify leak sources.
            </p>
            <ul className="space-y-2 text-red-800 text-sm">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Look for active water drips or seepage around frames during heavy rain</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Check for water pooling on window sills or door thresholds</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Note which windows leak during specific wind directions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Document leak locations with photos for professional assessment</span>
              </li>
            </ul>
          </div>
        </section>

          <MidArticleCTA variant="emergency" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Understanding Flashing Failures
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Flashing is the single most critical water protection component around windows and doors. Understanding how flashing works and why it fails helps homeowners identify and prevent intrusion.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How Proper Window Flashing Works</h3>
            <p className="text-gray-700 mb-4">
              A correctly installed flashing system creates a multi-layer drainage plane that directs water away from the building envelope even when outer protection layers fail.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sill Flashing (Bottom)</h4>
                  <p className="text-gray-700 text-sm">Creates a sloped pan that catches water and directs it outward through weep holes. Extends beyond rough opening on sides to prevent water from reaching framing.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Side Flashing (Jambs)</h4>
                  <p className="text-gray-700 text-sm">Overlaps sill flashing and extends upward along vertical edges. Tucks behind water-resistive barrier to create shingled effect where water flows outward at each layer.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Head Flashing (Top)</h4>
                  <p className="text-gray-700 text-sm">Diverts water away from the top of the opening. Must extend beyond side jambs and integrate with wall drainage plane. Most critical for preventing downward infiltration.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Drip Edge and Kickout Flashing</h4>
                  <p className="text-gray-700 text-sm">Creates gap between siding and window frame to prevent water from wicking upward. Kickout flashing at sill corners directs water away from vulnerable junctions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Flashing Fails in Virginia Homes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Reverse Lapping:</strong> Flashing installed in wrong order, allowing water to flow inward instead of outward</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Missing Head Flashing:</strong> Many retrofit installations skip head flashing entirely, common in DIY projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Incomplete Integration:</strong> Flashing doesn't connect properly to building's drainage plane and water-resistive barrier</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Corrosion at Fasteners:</strong> Nail and screw holes allow water entry, corroding metal flashing from inside</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Thermal Movement Separation:</strong> Different expansion rates cause flashing to separate from frame or siding</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Physical Damage:</strong> Impact damage, improper siding installation, or renovation work compromises flashing</span>
              </li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-6 italic text-gray-800">
            "Most water intrusion problems around windows and doors stem from flashing failures, not window defects. Proper flashing installation prevents 95% of water penetration issues, but flashing is hidden and rarely inspected until damage becomes visible."
            <footer className="mt-3 not-italic text-sm text-gray-700">
              — IICRC Water Damage Restoration Technician Guidelines
            </footer>
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Professional Damage Assessment Process
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Professional water intrusion assessment identifies all damage, including hidden moisture in wall cavities, insulation, and framing that homeowners cannot detect without specialized equipment.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Inspection and Documentation</h3>
              <p className="text-gray-700 mb-3">
                Certified technicians examine all windows and doors, documenting current conditions, visible damage, and leak indicators. This provides baseline documentation for insurance claims and repair planning.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Photograph all areas showing water damage, staining, or deterioration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Inspect exterior caulking, flashing, and weatherstripping condition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Test window and door operation for signs of moisture-related swelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Document mold growth, structural damage, and affected building materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Moisture Mapping with Specialized Equipment</h3>
              <p className="text-gray-700 mb-3">
                Professional moisture detection reveals water presence and extent far beyond visible damage, preventing incomplete restoration that leads to mold growth.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Thermal Imaging Cameras:</strong> Detect temperature differences indicating moisture in wall cavities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Moisture Meters:</strong> Measure exact moisture content in wood, drywall, and insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Hygrometers:</strong> Assess indoor humidity levels and identify areas requiring dehumidification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Borescope Inspection:</strong> Camera inserted through small holes views inside wall cavities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structural Evaluation and Safety Assessment</h3>
              <p className="text-gray-700 mb-3">
                Long-term water intrusion compromises framing, sheathing, and structural components. Professional evaluation determines safety concerns and required repairs.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Inspect window and door headers for rot and structural integrity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Evaluate wall framing and sheathing for decay and deterioration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Check sill plates and rim joists near ground-level doors for rot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Assess subfloor and flooring damage requiring replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Remediation Plan</h3>
              <p className="text-gray-700 mb-3">
                Based on assessment findings, professionals develop detailed scope of work including water extraction, structural drying, <a href="/services/mold-remediation" className="text-blue-600 hover:text-blue-800 underline">mold remediation</a>, repairs, and preventive sealing.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Emergency water extraction and containment if active leaks present</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Structural drying timeline with monitoring protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Mold remediation procedures if contamination exceeds 10 square feet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Structural repairs, including framing, sheathing, and insulation replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Window and door replacement or professional resealing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Finish restoration including drywall, painting, and flooring</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Repair vs. Replacement: Making the Right Decision
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Deciding whether to repair existing windows and doors or replace them entirely depends on age, damage extent, energy efficiency goals, and long-term cost considerations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">When Repair Is Appropriate</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Minor Seal Failures:</strong> Failed caulking or weatherstripping without frame damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Isolated Damage:</strong> Single window or door affected, others in good condition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>High-Quality Units:</strong> Premium windows less than 15 years old</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Repairable Flashing:</strong> Flashing can be properly reinstalled or replaced</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>No Structural Damage:</strong> Frames, headers, and surrounding structure intact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Budget Constraints:</strong> Immediate replacement not financially feasible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Historic Preservation:</strong> Original windows in historic homes worth preserving</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">When Replacement Is Necessary</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  <span><strong>Extensive Frame Rot:</strong> Wood deterioration compromises structural integrity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  <span><strong>Repeated Leak Problems:</strong> Multiple repair attempts have failed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  <span><strong>Seal Failure Between Panes:</strong> Fogging indicates irreversible insulated glass failure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  <span><strong>Single-Pane Windows:</strong> Older homes with inefficient single-glazing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  <span><strong>Warped Frames:</strong> Physical distortion prevents proper sealing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  <span><strong>Age Over 25 Years:</strong> Windows approaching end of serviceable life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  <span><strong>Energy Efficiency Goals:</strong> Modern windows provide significant utility savings</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Benefit Analysis Considerations</h3>
            <p className="text-gray-700 mb-4">
              Professional replacement costs $400-$1,200 per window depending on size, type, and quality. High-quality door replacement ranges from $1,500-$5,000 installed. Compare these costs against:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Ongoing repair and maintenance expenses over next 10-15 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Energy savings from improved insulation (typically $100-300 annually per window)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Risk of continued water damage requiring expensive wall and floor restoration</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Insurance claim limitations on repeated damage from same source</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Home resale value impact of old, inefficient windows and doors</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Professional Sealing and Waterproofing Solutions
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Professional window and door sealing goes far beyond simple caulking. Comprehensive waterproofing addresses all vulnerability points and integrates with building drainage systems.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Perimeter Sealing System</h3>
              <p className="text-gray-700 mb-4">
                Proper sealing creates multiple defense layers that shed water outward, prevent air infiltration, and accommodate normal building movement without creating gaps.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Flashing Installation or Repair</h4>
                    <p className="text-gray-700 text-sm">Install or replace head, jamb, and sill flashing following building code requirements. Integrate flashing with water-resistive barrier and building drainage plane. Use kickout flashing at critical junctions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Backer Rod and Sealant Application</h4>
                    <p className="text-gray-700 text-sm">Install foam backer rod to create proper sealant depth-to-width ratio (typically 2:1). Apply high-quality polyurethane or hybrid polymer sealant designed for exterior exposure and UV resistance.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Weatherstripping Replacement</h4>
                    <p className="text-gray-700 text-sm">Install compression or V-strip weatherstripping appropriate for application. Door sweeps at bottom create seal while allowing clearance for operation. Quality weatherstripping provides 15+ years service life.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Weep Hole and Drainage Verification</h4>
                    <p className="text-gray-700 text-sm">Clear existing weep holes or install drainage openings at sill locations. Verify water can exit freely and doesn't accumulate in sill pan. Install weep hole covers to prevent insect entry while maintaining drainage.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Interior Air Sealing</h4>
                    <p className="text-gray-700 text-sm">Seal interior gaps between window/door frames and rough openings with low-expansion foam. This prevents air infiltration, reduces condensation risk, and improves energy efficiency without affecting exterior drainage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional vs. DIY Sealing</h3>
              <p className="text-gray-700 mb-4">
                While homeowners can apply caulk and weatherstripping, professional installation provides critical advantages:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Flashing Expertise:</strong> Proper flashing requires understanding building science and drainage principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Material Selection:</strong> Professionals use commercial-grade products designed for 15-25 year service life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Hidden Problem Detection:</strong> Experienced technicians identify underlying issues DIYers miss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Warranty Protection:</strong> Professional installation includes workmanship guarantees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span><strong>Insurance Documentation:</strong> Professional work provides required documentation for claims</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Prevention and Long-Term Maintenance
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Proactive maintenance prevents most window and door water intrusion. Regular inspections and timely repairs address problems while they remain minor and inexpensive.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Maintenance Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Exterior Inspection (Spring)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Inspect all exterior caulking for cracks, gaps, or separation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Check flashing condition, especially at heads and corners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Clean weep holes and verify proper drainage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Test all windows and doors for smooth operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Look for paint deterioration exposing bare wood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Check for daylight visible around closed doors</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Interior Assessment (Fall)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Test weatherstripping compression and resilience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Look for condensation between window panes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Check for water stains or discoloration on frames</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Inspect for mold growth or musty odors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Test window locks and door latches for proper sealing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">□</span>
                    <span>Verify no air drafts around closed windows and doors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Every 3-5 Years</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Replace all exterior caulking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Repaint wood windows and doors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Professional seal inspection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">After Major Storms</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Check for new leaks or damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Document any water intrusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Verify drainage systems working</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Seasonal Preparation</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Clean window tracks and sills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Lubricate moving parts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Adjust door thresholds if needed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Critical Prevention Strategies</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span><strong>Maintain Proper Drainage:</strong> Keep gutters clean, ensure downspouts direct water 5+ feet from foundation, verify ground slopes away from house at 6 inches per 10 feet</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span><strong>Address Problems Immediately:</strong> Small leaks become major damage quickly. Repair failed caulking, damaged weatherstripping, or visible moisture intrusion within days</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span><strong>Use Quality Materials:</strong> Premium caulks, sealants, and weatherstripping cost 2-3x more but last 3-5x longer than cheap alternatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span><strong>Professional Installation for Replacements:</strong> Improper window and door installation causes 80% of water intrusion problems. Always hire certified installers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span><strong>Document Maintenance:</strong> Keep records and photos of all inspections, repairs, and maintenance. This supports insurance claims and home sale disclosures</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Why Choose Professional Water Damage Restoration
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            When window and door leaks cause water damage, professional <a href="/services/water-damage-restoration" className="text-blue-600 hover:text-blue-800 underline">water damage restoration</a> ensures complete remediation and prevents long-term problems like mold growth and structural deterioration.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Restoration Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Emergency water extraction and containment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Professional moisture detection and mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Structural drying with commercial equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Certified mold remediation if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Complete reconstruction and finishing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>IICRC certified technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Industrial-grade drying equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Insurance claim assistance and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Guaranteed complete moisture removal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Workmanship warranties on repairs</span>
                </li>
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-6 italic text-gray-800">
            "DIY water damage cleanup often leaves hidden moisture in wall cavities and insulation. Within weeks, mold growth begins behind walls. Professional restoration with thermal imaging and moisture meters ensures complete drying, preventing costly mold remediation later."
            <footer className="mt-3 not-italic text-sm text-gray-700">
              — Flood Doctor Restoration Specialists
            </footer>
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are the most common causes of window and door water intrusion?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The most common causes include failed caulking and sealants around frames, damaged or missing flashing, worn weatherstripping, improper installation leaving gaps, storm-driven rain penetrating weak points, condensation buildup, and foundation settling causing frame misalignment. In Northern Virginia, wind-driven rain during severe storms exploits even minor seal failures.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How can I tell if my windows and doors are leaking?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Look for water stains or discoloration around window and door frames, peeling or bubbling paint near openings, visible mold growth on walls adjacent to windows, musty odors near exterior walls, warped or soft flooring near entries, daylight visible around closed doors, condensation between window panes, and cracked or missing caulk. Active leaks may show water pooling on sills during rainstorms.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is flashing and why does it fail?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Flashing is metal or composite material installed around windows and doors to direct water away from the building envelope. It fails due to improper installation during construction, corrosion from age and weather exposure, physical damage from storms or impacts, separation from siding during expansion and contraction, and missing kickout flashing at critical junctions. Failed flashing allows water to penetrate wall cavities, causing extensive hidden damage.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should I repair or replace leaking windows and doors?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Repair is appropriate for minor seal failures, damaged weatherstripping, failed caulking, or single broken glass panes. Replace when there's extensive frame rot or deterioration, repeated leak problems despite repairs, condensation between double panes indicating seal failure, single-pane windows in older homes, warped frames that won't seal properly, or when windows exceed 20-25 years old. Replacement provides better energy efficiency and long-term reliability.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I prevent future window and door leaks?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Inspect and replace caulking every 3-5 years, ensure gutters and downspouts direct water away from openings, check and replace worn weatherstripping annually, verify proper drainage and grading around foundations, inspect flashing during roof work, maintain painted surfaces to prevent wood deterioration, test windows during heavy rain to identify weak points, and schedule professional inspections every 5 years for older homes.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will homeowners insurance cover window and door water damage?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Insurance typically covers sudden, accidental water intrusion from storm damage or catastrophic seal failure. Coverage is usually denied for gradual damage from poor maintenance, wear and tear, or pre-existing conditions. Document all damage with photos immediately, report claims within 24-48 hours, demonstrate regular maintenance, and keep records of repairs. Professional water damage restoration companies provide documentation that supports insurance claims.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">
            24/7 Emergency Water Intrusion Response
          </h2>
          <p className="text-xl mb-6 leading-relaxed">
            Don't let window and door leaks cause extensive water damage. Our certified restoration specialists provide immediate response, professional moisture detection, complete drying, and expert sealing services across Northern Virginia.
          </p>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg mb-6">
            <ul className="space-y-2 text-lg">
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Emergency water extraction and containment</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Thermal imaging moisture detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Professional structural drying</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Complete window and door sealing</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Mold prevention and remediation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Insurance documentation and claim support</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a
              href="tel:8774970007"
              className="inline-block bg-yellow-400 text-blue-900 font-bold text-2xl px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Call Now: (877) 497-0007
            </a>
            <p className="mt-4 text-lg">
              Serving all of Northern Virginia • Licensed & Insured • IICRC Certified
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Conclusion: Protect Your Home from Window and Door Water Intrusion
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Window and door water intrusion causes thousands of dollars in damage annually to Northern Virginia homes. Understanding the causes—failed caulking, damaged flashing, worn weatherstripping, and storm-driven rain—helps homeowners identify vulnerable areas before leaks begin.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Regular inspection and preventive maintenance catch problems early when simple repairs prevent major damage. Replace exterior caulking every 3-5 years, inspect flashing during roof work, test weatherstripping annually, and verify proper drainage away from all openings.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            When water intrusion occurs, professional restoration ensures complete moisture removal and prevents mold growth. DIY cleanup often misses hidden moisture in wall cavities, leading to expensive mold remediation months later. Professional moisture detection, structural drying, and complete restoration protect your home's long-term integrity.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Whether you need emergency water damage restoration, professional window and door sealing, or preventive maintenance guidance, contact certified specialists at <a href="tel:8774970007" className="text-blue-600 hover:text-blue-800 underline font-semibold">(877) 497-0007</a> for expert service across Northern Virginia.
          </p>
        </section>

        <aside className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="/services/water-damage-restoration" className="text-blue-600 hover:text-blue-800 font-semibold">
                Water Damage Restoration Services
              </a>
            </li>
            <li>
              <a href="/services/emergency-water-extraction" className="text-blue-600 hover:text-blue-800 font-semibold">
                Emergency Water Extraction
              </a>
            </li>
            <li>
              <a href="/services/mold-remediation" className="text-blue-600 hover:text-blue-800 font-semibold">
                Mold Remediation and Removal
              </a>
            </li>
            <li>
              <a href="/services/waterproofing" className="text-blue-600 hover:text-blue-800 font-semibold">
                Professional Waterproofing Solutions
              </a>
            </li>
          </ul>
        </aside>
      </article>
      <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/window-door-water-intrusion/" />
      </main>
  );
};

export default WindowDoorWaterIntrusion;
