import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';
import { generateBlogArticleSchema } from '../../utils/schema';
import MidArticleCTA from '../../components/ui/MidArticleCTA';
import RelatedArticles from '../../components/ui/RelatedArticles';

const CondoWaterDamageHOAGuide: React.FC = () => {
  const faqs = [
    {
      question: "Who is responsible for water damage in a condo - the HOA or the unit owner?",
      answer: "Responsibility depends on where the damage occurs and its source. Generally, HOAs cover common areas, building structure, and shared systems (roof, exterior walls, plumbing mains). Unit owners cover everything inside their unit boundaries (interior walls, flooring, appliances, fixtures). Virginia condo bylaws typically follow either 'walls-in' (owner covers everything from drywall inward) or 'studs-in' (owner covers from wall studs inward) policies. Always review your specific condo association's master deed and bylaws."
    },
    {
      question: "Does HOA master insurance cover water damage to my condo unit?",
      answer: "HOA master policies typically cover structural damage to the building but not damage to individual unit interiors, personal property, or improvements. Most master policies have a deductible ($5,000-$25,000) that may be assessed to the responsible unit owner. You need your own HO-6 condo insurance policy to cover interior damage, personal belongings, betterments and improvements, loss of use, and liability. The master policy serves as the building's primary coverage, while your HO-6 policy covers everything inside your unit."
    },
    {
      question: "What happens when water damage in my condo comes from a neighbor's unit?",
      answer: "When water damage originates from a neighbor's unit, document everything immediately with photos and videos. Notify your HOA and insurance company within 24 hours. File a claim with your own HO-6 insurance first for immediate repairs - they will pursue subrogation against the responsible party's insurance. The neighbor may be liable if damage resulted from negligence (ignoring maintenance, leaving water running). Your insurance company will determine fault and handle recovery from the responsible party's insurance. Never delay restoration waiting for liability determination - water damage worsens rapidly."
    },
    {
      question: "How do I work with my HOA during water damage restoration in my condo?",
      answer: "Notify your HOA property manager immediately when water damage occurs - this is typically required within 24-48 hours per condo bylaws. Obtain written approval before starting any restoration work that affects common areas or building structure. Provide your restoration contractor's insurance and licensing information to the HOA. Coordinate access for contractors through building management. Follow all building rules regarding work hours, elevator use, and debris removal. Document all communications with the HOA. Request copies of the master insurance policy and loss assessment information. Professional restoration companies experienced with Northern Virginia condos can help navigate HOA coordination."
    },
    {
      question: "What is a loss assessment and when am I responsible for it?",
      answer: "A loss assessment is a special fee the HOA charges unit owners to cover insurance deductibles or uninsured losses affecting the building. You may be assessed if: the HOA's master policy deductible is charged to the responsible unit owner (often $5,000-$25,000), damage affects common areas but is determined to be your responsibility, or the HOA must pay for damage not covered by the master policy. Loss assessment coverage is available as an endorsement on your HO-6 policy, typically providing $50,000-$100,000 in protection. This coverage is essential in Virginia's high-rise condo buildings where master policy deductibles can exceed $25,000."
    },
    {
      question: "What should I do immediately after discovering water damage in my condo?",
      answer: "Take these immediate steps: (1) Stop the water source if possible and safe - shut off water valves to affected fixtures or areas; (2) Document all damage with photos and videos, including date/time stamps; (3) Notify your HOA property manager within 24 hours - this is typically required by bylaws; (4) Contact your HO-6 insurance company to file a claim; (5) Call a professional water damage restoration company for emergency mitigation ((877) 497-0007 for 24/7 service); (6) Remove personal property from affected areas to prevent additional damage; (7) Do not begin major repairs until insurance adjusters inspect the damage. Quick response within 24-48 hours prevents mold growth and reduces restoration costs by 40-60%."
    },
  ];

  const schema = generateBlogArticleSchema({
    headline: 'Condo Water Damage: HOA vs Owner Responsibility Guide for Northern Virginia',
    description: 'Complete guide to condo water damage responsibility in Northern Virginia. Understand HOA master policies vs unit owner insurance, walls-in coverage, multi-unit damage, and working with condo associations during restoration.',
    slug: '/blog/condo-water-damage-hoa-guide/',
    datePublished: '2026-01-01',
    articleSection: 'Condo & HOA Insurance',
  }, faqs);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Condo Water Damage: HOA vs Owner Guide"
        description="Complete guide to condo water damage responsibility in Northern Virginia. Understand HOA master policies vs unit owner insurance, walls-in coverage, multi-unit damage, and working with condo associations during restoration."
        schema={schema}
      />

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Condo & HOA Insurance</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Condo Water Damage: HOA vs Owner Responsibility Guide for Northern Virginia
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1a73e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>January 1, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1a73e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            Water damage in Northern Virginia condos creates complex insurance and responsibility questions that confuse even experienced property owners. Understanding the division between HOA master policies and unit owner coverage is essential for Arlington, Alexandria, and Tysons condo owners to protect their investment and avoid costly surprises.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            Condo Water Damage Emergency? Call Now: <a href="tel:8774970007" className="text-blue-600 hover:text-blue-800 underline">(877) 497-0007</a>
          </p>
          <p className="text-blue-800">
            24/7 emergency response for condo water damage across Northern Virginia. We handle HOA coordination, insurance documentation, and multi-unit restoration.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Understanding HOA Master Policies vs Unit Owner Insurance
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Condo ownership involves a unique dual-insurance structure that often creates confusion during water damage events. Unlike single-family homes where one policy covers everything, condos split coverage between the homeowners association's master policy and individual unit owner policies.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            This division of responsibility isn't standardized across all buildings. Your specific obligations depend on your condo association's governing documents, Virginia state law, and the type of master policy your HOA maintains.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">HOA Master Policy Coverage</h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What the Master Policy Typically Covers:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Building Structure:</strong> Exterior walls, roof, foundation, load-bearing elements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Common Areas:</strong> Lobbies, hallways, elevators, stairwells, parking garages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Shared Systems:</strong> Main plumbing lines, HVAC systems, electrical infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Building Amenities:</strong> Pool, fitness center, clubhouse, common equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Liability Coverage:</strong> HOA liability for injuries or damage in common areas</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Critical Master Policy Limitation:</h4>
            <p className="text-gray-700 mb-3">
              Master policies typically carry substantial deductibles ranging from $5,000 to $25,000 or more in large high-rise buildings. When water damage is determined to originate from or be the responsibility of a specific unit, the HOA may assess that deductible amount to the unit owner through a loss assessment.
            </p>
            <p className="text-gray-700">
              <strong>Example:</strong> If your dishwasher leak damages the unit below and triggers a $15,000 master policy claim with a $10,000 deductible, you may be personally responsible for that $10,000 deductible even though the master policy pays the remaining claim.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Unit Owner HO-6 Policy Coverage</h3>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Your individual condo insurance (HO-6 policy) fills the gaps left by the master policy. This coverage is essential because it protects you from substantial out-of-pocket expenses.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What Your HO-6 Policy Should Cover:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Interior Structures:</strong> Drywall, flooring, cabinets, interior doors, trim</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Personal Property:</strong> Furniture, electronics, clothing, belongings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Betterments and Improvements:</strong> Upgrades you made (hardwood floors, granite counters, custom fixtures)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Loss Assessment Coverage:</strong> Protection against HOA special assessments for building damage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Loss of Use:</strong> Temporary housing costs if your unit becomes uninhabitable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Personal Liability:</strong> Protection if you're responsible for damage to other units or common areas</span>
              </li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-blue-600 pl-6 py-4 mb-6 bg-blue-50">
            <p className="text-lg italic text-gray-800 mb-3">
              "The biggest mistake I see condo owners make is assuming the HOA master policy covers their unit interior. When water damage occurs, they discover they're personally responsible for $20,000-$40,000 in interior restoration with no insurance coverage."
            </p>
            <footer className="text-gray-700 font-semibold">
              — Senior Insurance Claims Adjuster, Northern Virginia
            </footer>
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Walls-In vs Walls-Out vs Studs-In: Decoding Coverage Boundaries
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Virginia condo associations define responsibility boundaries using specific terminology in their master deeds and bylaws. Understanding these terms is critical because they determine exactly who pays for what during water damage restoration.
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Walls-In (Bare Walls) Policy</h3>
              <p className="text-gray-700 mb-3">
                The most common approach in Northern Virginia condos. The HOA master policy covers the building structure to the drywall surface, but not the drywall itself.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-2">Master Policy Covers:</p>
                <ul className="space-y-1 text-gray-700 text-sm mb-3">
                  <li>• Exterior walls, windows, doors to the building</li>
                  <li>• Structural framing and load-bearing components</li>
                  <li>• Rough plumbing and electrical to the unit boundary</li>
                </ul>
                <p className="font-semibold text-gray-900 mb-2">Unit Owner Covers:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Drywall, paint, wallpaper</li>
                  <li>• All flooring materials</li>
                  <li>• Kitchen and bathroom fixtures</li>
                  <li>• All interior finishes and improvements</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-green-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Studs-In (Single Entity) Policy</h3>
              <p className="text-gray-700 mb-3">
                Less common but provides more comprehensive master policy coverage. The HOA covers everything from the wall studs outward, including drywall.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-2">Master Policy Covers:</p>
                <ul className="space-y-1 text-gray-700 text-sm mb-3">
                  <li>• All structural elements</li>
                  <li>• Drywall and basic finishes as originally installed</li>
                  <li>• Basic flooring (if originally installed by builder)</li>
                  <li>• Original fixtures and appliances</li>
                </ul>
                <p className="font-semibold text-gray-900 mb-2">Unit Owner Covers:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Upgrades and improvements beyond original construction</li>
                  <li>• Personal property and belongings</li>
                  <li>• Custom finishes and renovations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">All-In (Walls-Out) Policy</h3>
              <p className="text-gray-700 mb-3">
                Rare in Virginia but exists in some luxury buildings. Master policy covers everything including unit interiors.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-2">Master Policy Covers:</p>
                <ul className="space-y-1 text-gray-700 text-sm mb-3">
                  <li>• Everything from exterior walls inward</li>
                  <li>• All interior finishes and fixtures as originally built</li>
                  <li>• Built-in appliances and systems</li>
                </ul>
                <p className="font-semibold text-gray-900 mb-2">Unit Owner Covers:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Personal property only</li>
                  <li>• Upgrades beyond original specifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">How to Determine Your Building's Policy Type:</h4>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-yellow-700 mr-2">1.</span>
                <span>Request a copy of your condo association's master deed and bylaws from property management</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-yellow-700 mr-2">2.</span>
                <span>Review the section defining "unit boundaries" or "insurable interests"</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-yellow-700 mr-2">3.</span>
                <span>Obtain a certificate of insurance showing the master policy type and coverage limits</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-yellow-700 mr-2">4.</span>
                <span>Consult with your insurance agent to ensure your HO-6 policy properly complements the master coverage</span>
              </li>
            </ol>
          </div>
        </section>

          <MidArticleCTA variant="emergency" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Common Condo Water Damage Scenarios and Responsibility
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Real-world water damage situations in Northern Virginia condos illustrate how coverage boundaries work in practice. Understanding these common scenarios helps you respond appropriately and file claims with the correct insurance policies.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scenario 1: Your Dishwasher Leaks and Damages Your Unit</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> Your kitchen dishwasher supply line fails, flooding your kitchen and damaging hardwood floors, cabinets, and drywall.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Responsibility:</strong> You are fully responsible as this is damage within your unit from your appliance.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Insurance Coverage:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• File claim with your HO-6 policy for all interior damage</li>
                <li>• Your policy covers water extraction, drying, flooring replacement, cabinet repair, drywall restoration</li>
                <li>• Deductible typically $500-$2,500 depending on your policy</li>
                <li>• No HOA involvement unless damage affects other units</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scenario 2: Your Leak Damages the Unit Below</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> Your washing machine overflow runs through the floor, damaging the ceiling, walls, and contents of the unit directly below yours.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Responsibility:</strong> You are liable for damage to the neighboring unit because the water originated from your unit.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Insurance Coverage:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• The affected neighbor files claim with their HO-6 policy for immediate repairs</li>
                <li>• Your liability coverage (part of your HO-6 policy) covers damage you caused to their unit</li>
                <li>• Neighbor's insurance company pursues subrogation against your policy</li>
                <li>• If damage triggers HOA master policy, you may receive loss assessment for the deductible</li>
                <li>• Critical: Never admit fault; let insurance companies determine liability</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scenario 3: Roof Leak Damages Your Top-Floor Unit</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> Heavy rain causes a roof leak that damages your ceiling, walls, and furniture in your top-floor condo.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Responsibility:</strong> HOA is responsible for roof maintenance and repair as part of common elements.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Insurance Coverage:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• HOA master policy covers roof repair and structural damage</li>
                <li>• Your HO-6 policy covers interior damage (drywall, paint, flooring) and personal property</li>
                <li>• File claims with both policies simultaneously</li>
                <li>• Document that damage resulted from HOA's responsibility to maintain the roof</li>
                <li>• If HOA neglected roof maintenance, your insurance may pursue them for reimbursement</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scenario 4: Main Plumbing Line Break in Building Wall</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> A main water supply line inside the building wall between units bursts, flooding multiple condos including yours.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Responsibility:</strong> HOA responsibility because the main line is part of common elements/building infrastructure.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Insurance Coverage:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• HOA files master policy claim for pipe repair and structural damage</li>
                <li>• Each affected unit owner files HO-6 claim for interior damage and personal property</li>
                <li>• HOA may assess master policy deductible to all unit owners or to a reserve fund</li>
                <li>• Your loss assessment coverage (part of HO-6) may cover this special assessment</li>
                <li>• Professional restoration coordinates with HOA for building access and structural repairs</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scenario 5: Fire Sprinkler Malfunction Floods Multiple Floors</h3>
              <p className="text-gray-700 mb-3">
                <strong>Situation:</strong> A fire sprinkler head in a common area hallway malfunctions, releasing water that affects five units across two floors in your Arlington high-rise.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Responsibility:</strong> HOA responsibility as fire suppression systems are common area infrastructure.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Insurance Coverage:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• HOA master policy is primary coverage for system failure and common area damage</li>
                <li>• Each affected unit files separate HO-6 claims for interior unit damage</li>
                <li>• Large-scale incident may trigger substantial master policy deductible ($15,000-$25,000)</li>
                <li>• HOA may assess this deductible proportionally to all owners or draw from reserves</li>
                <li>• Professional coordination required across multiple units for consistent restoration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Multi-Unit Water Damage: Coordination and Challenges
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Water damage affecting multiple condo units simultaneously presents unique restoration challenges common in Northern Virginia's high-density buildings. Vertical water migration through floors, shared walls, and building systems can impact numerous units from a single source.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Water Spreads in Multi-Story Buildings</h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Common Water Migration Patterns:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Vertical Flow:</strong> Water travels downward through floor assemblies, ceiling cavities, and wall chases, affecting units on multiple floors below the source</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Horizontal Spread:</strong> Water follows electrical conduits, plumbing chases, and HVAC ductwork to adjacent units on the same floor</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Hidden Accumulation:</strong> Water pools in shared wall cavities, above suspended ceilings in hallways, and in mechanical spaces before suddenly appearing in distant units</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Delayed Discovery:</strong> Units may show no immediate damage but develop problems days later as water migrates through building materials</span>
              </li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-red-600 pl-6 py-4 mb-6 bg-red-50">
            <p className="text-lg italic text-gray-800 mb-3">
              "We responded to a 10th-floor washing machine overflow in a Tysons condo building that ultimately affected 14 units across four floors. Initial response involved only two units, but thermal imaging revealed hidden moisture migration affecting an entire vertical stack of condos."
            </p>
            <footer className="text-gray-700 font-semibold">
              — IICRC Certified Water Damage Restoration Specialist
            </footer>
          </blockquote>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Coordinating Multi-Unit Restoration</h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                Immediate Building Assessment
              </h4>
              <p className="text-gray-700">
                Professional restoration teams use thermal imaging cameras and moisture meters to map all affected areas across the building, identifying hidden damage before it becomes visible. This comprehensive assessment prevents overlooked damage and ensures coordinated restoration planning.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                HOA and Property Management Coordination
              </h4>
              <p className="text-gray-700 mb-3">
                Multi-unit incidents require central coordination with building management to arrange access, coordinate utility shutoffs, manage common area work, and communicate with all affected residents.
              </p>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>• Single point of contact designated for building management</li>
                <li>• Coordinated scheduling to minimize building disruption</li>
                <li>• Shared equipment and containment strategies across units</li>
                <li>• Consolidated reporting to HOA board and insurance adjusters</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                Individual Insurance Claim Management
              </h4>
              <p className="text-gray-700 mb-3">
                Each affected unit owner files separate insurance claims, but professional restoration companies provide consistent documentation and coordination across all claims:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>• Individual damage assessments and estimates for each unit</li>
                <li>• Consistent documentation standards across all affected units</li>
                <li>• Clear delineation between HOA and individual owner responsibilities</li>
                <li>• Coordination with multiple insurance adjusters visiting the building</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                Temporary Relocation Coordination
              </h4>
              <p className="text-gray-700">
                When units become uninhabitable, restoration companies work with building management and insurance companies to arrange temporary housing for displaced residents, coordinate moving and storage services, and plan for eventual move-back timing across multiple families.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Working with Your HOA During Water Damage Restoration
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Successfully navigating HOA requirements during water damage restoration requires understanding your association's specific rules, approval processes, and communication protocols. Northern Virginia condo associations have varying procedures, but most share common requirements.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Required HOA Notifications and Approvals</h3>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Time-Sensitive Notification Requirements:</h4>
            <p className="text-gray-700 mb-3">
              Most Virginia condo bylaws require unit owners to notify the HOA within 24-48 hours of any water damage incident. Failure to provide timely notice can:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Violate your governing documents and subject you to fines</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Complicate insurance claims if HOA master policy is involved</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Prevent proper assessment of building-wide impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span>Delay necessary emergency response in common areas</span>
              </li>
            </ul>
          </div>

          <h4 className="text-xl font-bold text-gray-900 mb-4">Information to Provide to Your HOA:</h4>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h5 className="font-bold text-gray-900 mb-3">Initial Notification (Within 24 Hours)</h5>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Date and time damage discovered</li>
                <li>• Location and extent of damage</li>
                <li>• Suspected source of water intrusion</li>
                <li>• Whether damage affects common areas</li>
                <li>• Emergency actions taken (water shut-off, etc.)</li>
                <li>• Contact information for your insurance company</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h5 className="font-bold text-gray-900 mb-3">Restoration Planning (Before Work Begins)</h5>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Restoration contractor name and contact information</li>
                <li>• Proof of contractor's insurance and licensing</li>
                <li>• Scope of work and timeline</li>
                <li>• Any work affecting common elements or adjacent units</li>
                <li>• Equipment placement and building access needs</li>
                <li>• Request for formal approval if required by bylaws</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Common HOA Restrictions and Requirements</h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Typical Building Rules Affecting Restoration:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Work Hours:</strong> Restoration may be restricted to 8 AM - 6 PM weekdays, with possible weekend prohibitions in residential buildings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Elevator Use:</strong> Service elevator reservation required; padding and protection requirements; restrictions during peak hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Contractor Credentials:</strong> Proof of insurance ($1M-$2M liability typical), licensing verification, background checks for personnel</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Parking and Access:</strong> Loading zone reservations, visitor parking permits for contractor vehicles, building access protocols</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Debris Removal:</strong> Approved disposal methods, dumpster placement restrictions, daily cleanup requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Common Area Protection:</strong> Floor protection in hallways and elevators, dust containment, noise mitigation</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Professional Restoration Companies and HOA Compliance:</h4>
            <p className="text-gray-700 mb-3">
              Experienced Northern Virginia water damage restoration companies familiar with Arlington, Alexandria, and Tysons condo buildings maintain:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Pre-established relationships with major property management companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Updated insurance certificates and licensing documentation ready for HOA submission</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Experience navigating building-specific rules and approval processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Established protocols for minimizing disruption in residential buildings</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Virginia-Specific Condo Laws and Regulations
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Virginia's Condominium Act (Virginia Code § 55.1-1900 et seq.) establishes legal requirements that govern water damage responsibility, insurance, and HOA obligations throughout the Commonwealth, including Northern Virginia's high-density condo markets.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Virginia Condo Law Provisions</h3>

          <div className="space-y-6 mb-6">
            <div className="bg-white border-l-4 border-blue-600 p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Master Insurance Policy Requirements</h4>
              <p className="text-gray-700 mb-3">
                Virginia law requires HOAs to maintain property insurance covering all common elements and portions of units that the association is obligated to maintain or repair under the declaration.
              </p>
              <p className="text-gray-700">
                <strong>Minimum coverage:</strong> Replacement cost of insured property, with deductibles not exceeding $10,000 per occurrence unless approved by 2/3 vote of unit owners.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Unit Owner Insurance Requirements</h4>
              <p className="text-gray-700 mb-3">
                Virginia HOAs can require unit owners to maintain HO-6 insurance policies covering their personal property and liability. Many Northern Virginia associations mandate minimum coverage limits in their bylaws.
              </p>
              <p className="text-gray-700">
                <strong>Typical requirements:</strong> $300,000-$500,000 liability coverage, sufficient personal property coverage, loss assessment coverage of $50,000-$100,000.
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-600 p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Responsibility for Damage from Common Elements</h4>
              <p className="text-gray-700">
                When water damage originates from common elements (roof, exterior walls, shared plumbing), Virginia law generally makes the HOA responsible for repairs to affected units, though the association can assess costs to all owners through special assessments if insurance doesn't cover the full claim.
              </p>
            </div>

            <div className="bg-white border-l-4 border-yellow-600 p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Emergency Powers of HOA Boards</h4>
              <p className="text-gray-700 mb-3">
                Virginia law grants HOA boards authority to take immediate action during emergencies affecting common elements without prior unit owner approval. This includes:
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• Entering units to prevent or mitigate damage to common elements or other units</li>
                <li>• Authorizing emergency repairs to prevent further damage</li>
                <li>• Shutting off utilities serving individual units when necessary to protect the building</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Loss Assessment Protections</h3>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Virginia law limits how HOAs can assess master policy deductibles and repair costs to individual unit owners, but these protections vary based on your association's governing documents and the specific circumstances of damage.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">When You May Face Loss Assessments:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Source Attribution:</strong> If water damage is determined to originate from your unit due to negligence or lack of maintenance, the HOA can assess the master policy deductible to you specifically</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Building-Wide Incidents:</strong> When damage results from building system failures affecting multiple units, the HOA may assess deductible costs proportionally to all owners</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Reserve Shortfalls:</strong> If the HOA lacks sufficient reserves to cover uninsured repair costs, special assessments may be levied against all owners</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Coverage Gaps:</strong> Damage types excluded from the master policy may result in assessments to cover actual repair costs</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Essential Documentation for Condo Water Damage Claims
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Successful insurance claims for condo water damage require comprehensive documentation that clearly establishes damage extent, origin, and responsibility boundaries between HOA and unit owner coverage.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Documentation Timeline</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-sm">IMMEDIATE</span>
                First 24 Hours
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Photograph and video all visible damage from multiple angles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Document date, time discovered, and current weather conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Identify and photograph the water source or suspected origin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Note locations of all affected areas within your unit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Create initial inventory of damaged personal property</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">24-48 HOURS</span>
                Professional Assessment Phase
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Professional moisture mapping documentation with thermal imaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Detailed damage assessment report from restoration company</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Moisture meter readings establishing extent of water intrusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Scope of work and cost estimates for restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>HOA notification documentation (sent and received confirmation)</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-purple-600 text-white px-3 py-1 rounded font-bold text-sm">ONGOING</span>
                Throughout Restoration Process
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>Daily moisture readings showing drying progress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>All receipts and invoices for emergency services and restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>Correspondence with HOA regarding work approval and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>Insurance adjuster visit notes and agreed scope of work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>Photos documenting demolition, reconstruction, and final restoration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Special Documentation for Multi-Unit Incidents:</h4>
            <p className="text-gray-700 mb-3">
              When water damage affects multiple units or involves questions of liability between neighbors, additional documentation becomes critical:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Written statements from affected neighbors describing damage they observed</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Building maintenance records showing system inspection history</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>HOA incident reports documenting their response and findings</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Professional cause-and-origin determination report if liability is disputed</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <span>Copies of relevant condo bylaws and insurance policies establishing responsibility</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Steps When Water Damage Comes from a Neighbor's Unit
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Discovering water damage in your condo that originated from a neighbor's unit is one of the most stressful scenarios for unit owners. Understanding the proper response sequence protects your rights while maintaining neighborly relationships and ensuring proper insurance coverage.
          </p>

          <div class="space-y-6">
            <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                Document Immediately and Thoroughly
              </h3>
              <p className="text-gray-700 mb-3">
                Before taking any other action, create comprehensive documentation of the damage while the situation is active:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Photograph water actively entering your unit if possible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Document the path water is traveling (through ceiling, walls, floor)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Take timestamped photos and videos showing extent of damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Note exactly where water appears to be coming from</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Record any sounds (running water, dripping) that indicate ongoing leak</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">2</div>
                Notify All Necessary Parties Within 24 Hours
              </h3>
              <p className="text-gray-700 mb-3">
                Time-sensitive notifications protect your legal and insurance rights:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>Your Insurance Company:</strong> File a claim immediately even if damage originated elsewhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>HOA Property Manager:</strong> Required notification per bylaws; they can access the source unit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>Affected Neighbor:</strong> Inform them (or have HOA inform them) that their unit is causing damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span><strong>Restoration Company:</strong> Emergency mitigation prevents damage from worsening</span>
                </li>
              </ul>
              <div className="bg-green-100 p-4 rounded mt-3">
                <p className="text-sm text-gray-800">
                  <strong>Important:</strong> Never wait for the neighbor to "handle it" or for liability to be determined before protecting your property. File your own claim immediately and begin mitigation. Your insurance company will pursue the responsible party through subrogation.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">3</div>
                Begin Emergency Mitigation Under Your Own Insurance
              </h3>
              <p className="text-gray-700 mb-3">
                Your HO-6 policy provides first-party coverage for immediate damage mitigation regardless of who caused the damage:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>File claim with your insurance for immediate restoration services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>Authorize professional <a href="/services/residential/restoration-services/water-damage-restoration/" className="text-blue-600 hover:text-blue-800 underline">water damage restoration</a> to prevent further damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>Begin water extraction and drying within 24-48 hours to prevent mold</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>Document all emergency services and mitigation costs with receipts</span>
                </li>
              </ul>
              <div className="bg-purple-100 p-4 rounded mt-3">
                <p className="text-sm text-gray-800">
                  <strong>How Subrogation Works:</strong> Your insurance company pays for your immediate restoration, then pursues reimbursement from the responsible party's insurance. You may recover your deductible if the neighbor is found liable. This process typically takes 60-180 days but allows you to begin repairs immediately.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">4</div>
                Cooperate with Liability Investigation
              </h3>
              <p className="text-gray-700 mb-3">
                Insurance companies will investigate to determine responsibility:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Provide all documentation and evidence to your insurance adjuster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Allow access to your unit for inspection and moisture mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Coordinate with HOA if building system inspection is required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Never sign releases or waivers from the neighbor's insurance without consulting your own insurer</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">5</div>
                Understand Negligence vs Accident Distinctions
              </h3>
              <p className="text-gray-700 mb-3">
                Liability often depends on whether the neighbor was negligent:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-red-50 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Likely Negligence (Neighbor Liable):</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Ignoring known leaks or maintenance issues</li>
                    <li>• Leaving water running intentionally</li>
                    <li>• Failing to winterize vacant unit</li>
                    <li>• Improper DIY plumbing work</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Likely Accident (More Complex):</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Sudden appliance or pipe failure</li>
                    <li>• Building system defect</li>
                    <li>• Unknown defect despite maintenance</li>
                    <li>• Act of nature (freeze damage)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Who is responsible for water damage in a condo - the HOA or the unit owner?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Responsibility depends on where the damage occurs and its source. Generally, HOAs cover common areas, building structure, and shared systems (roof, exterior walls, plumbing mains). Unit owners cover everything inside their unit boundaries (interior walls, flooring, appliances, fixtures). Virginia condo bylaws typically follow either 'walls-in' (owner covers everything from drywall inward) or 'studs-in' (owner covers from wall studs inward) policies. Always review your specific condo association's master deed and bylaws.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does HOA master insurance cover water damage to my condo unit?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                HOA master policies typically cover structural damage to the building but not damage to individual unit interiors, personal property, or improvements. Most master policies have a deductible ($5,000-$25,000) that may be assessed to the responsible unit owner. You need your own HO-6 condo insurance policy to cover interior damage, personal belongings, betterments and improvements, loss of use, and liability. The master policy serves as the building's primary coverage, while your HO-6 policy covers everything inside your unit.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens when water damage in my condo comes from a neighbor's unit?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When water damage originates from a neighbor's unit, document everything immediately with photos and videos. Notify your HOA and insurance company within 24 hours. File a claim with your own HO-6 insurance first for immediate repairs - they will pursue subrogation against the responsible party's insurance. The neighbor may be liable if damage resulted from negligence (ignoring maintenance, leaving water running). Your insurance company will determine fault and handle recovery from the responsible party's insurance. Never delay restoration waiting for liability determination - water damage worsens rapidly.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I work with my HOA during water damage restoration in my condo?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Notify your HOA property manager immediately when water damage occurs - this is typically required within 24-48 hours per condo bylaws. Obtain written approval before starting any restoration work that affects common areas or building structure. Provide your restoration contractor's insurance and licensing information to the HOA. Coordinate access for contractors through building management. Follow all building rules regarding work hours, elevator use, and debris removal. Document all communications with the HOA. Request copies of the master insurance policy and loss assessment information. Professional restoration companies experienced with Northern Virginia condos can help navigate HOA coordination.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is a loss assessment and when am I responsible for it?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A loss assessment is a special fee the HOA charges unit owners to cover insurance deductibles or uninsured losses affecting the building. You may be assessed if: the HOA's master policy deductible is charged to the responsible unit owner (often $5,000-$25,000), damage affects common areas but is determined to be your responsibility, or the HOA must pay for damage not covered by the master policy. Loss assessment coverage is available as an endorsement on your HO-6 policy, typically providing $50,000-$100,000 in protection. This coverage is essential in Virginia's high-rise condo buildings where master policy deductibles can exceed $25,000.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What should I do immediately after discovering water damage in my condo?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Take these immediate steps: (1) Stop the water source if possible and safe - shut off water valves to affected fixtures or areas; (2) Document all damage with photos and videos, including date/time stamps; (3) Notify your HOA property manager within 24 hours - this is typically required by bylaws; (4) Contact your HO-6 insurance company to file a claim; (5) Call a professional water damage restoration company for emergency mitigation ((877) 497-0007 for 24/7 service); (6) Remove personal property from affected areas to prevent additional damage; (7) Do not begin major repairs until insurance adjusters inspect the damage. Quick response within 24-48 hours prevents mold growth and reduces restoration costs by 40-60%.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">
            24/7 Condo Water Damage Emergency Response
          </h2>
          <p className="text-xl mb-6 leading-relaxed">
            Experienced with Northern Virginia condo associations, HOA coordination, and complex multi-unit water damage restoration. We handle all aspects of insurance documentation, building compliance, and professional restoration for Arlington, Alexandria, and Tysons condo owners.
          </p>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg mb-6">
            <ul className="space-y-2 text-lg">
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>HOA-approved contractors with established property management relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Complete insurance documentation for both HO-6 and master policies</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Multi-unit coordination and vertical water damage expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Building compliance with work hours, elevator use, and access protocols</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Emergency response within 60-90 minutes across Northern Virginia</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 font-bold mr-2">✓</span>
                <span>Direct communication with HOA boards and property managers</span>
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
              Serving Northern Virginia Condos • Licensed & Insured • IICRC Certified
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Protecting Your Condo Investment
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Understanding the complex division of responsibility between HOA master policies and unit owner insurance is essential for every Northern Virginia condo owner. Water damage incidents create confusion and stress, but knowing your coverage boundaries, documentation requirements, and response protocols protects both your financial investment and your peace of mind.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Take proactive steps now: review your condo association's bylaws and master insurance policy, ensure your HO-6 coverage includes adequate loss assessment protection, understand your building's specific walls-in or studs-in policy, and establish a relationship with a professional restoration company experienced in Northern Virginia condo properties.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            When water damage occurs, immediate professional response makes the difference between minor inconvenience and catastrophic loss. Contact certified water damage restoration specialists at <a href="tel:8774970007" className="text-blue-600 hover:text-blue-800 underline font-semibold">(877) 497-0007</a> for 24/7 emergency service across Arlington, Alexandria, Tysons, and all Northern Virginia condo communities.
          </p>
        </section>

        <aside className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
          <ul className="space-y-3">
            <li>
              <a href="/services/residential/restoration-services/water-damage-restoration/" className="text-blue-600 hover:text-blue-800 font-semibold">
                Water Damage Restoration Services
              </a>
            </li>
            <li>
              <a href="/services/residential/restoration-services/water-damage-restoration/" className="text-blue-600 hover:text-blue-800 font-semibold">
                Emergency Water Extraction
              </a>
            </li>
            <li>
              <a href="/services/residential/cleanup-services/mold-remediation/" className="text-blue-600 hover:text-blue-800 font-semibold">
                Mold Remediation and Prevention
              </a>
            </li>
            <li>
              <a href="/blog/appliance-water-damage-dishwasher-washing-machine" className="text-blue-600 hover:text-blue-800 font-semibold">
                Appliance Water Damage Prevention
              </a>
            </li>
          </ul>
        </aside>
      </article>
      <RelatedArticles categories={['insurance', 'water-damage']} currentSlug="/blog/condo-water-damage-hoa-guide/" />
      </main>
  );
};

export default CondoWaterDamageHOAGuide;
