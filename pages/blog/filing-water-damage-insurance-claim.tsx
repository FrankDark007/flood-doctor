import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';
import { generateBlogArticleSchema } from '../../utils/schema';
import ArticleAuthor, { generateAuthorSchema } from '../../components/ui/ArticleAuthor';
import MidArticleCTA from '../../components/ui/MidArticleCTA';
import RelatedArticles from '../../components/ui/RelatedArticles';

const FilingWaterDamageInsuranceClaim: React.FC = () => {
  const faqs = [
    {
      question: "How long do I have to file a water damage insurance claim in Virginia?",
      answer: "Most Virginia homeowners insurance policies require 'prompt' notification, which is generally interpreted as 24-48 hours after discovering damage. While Virginia law doesn't set a specific statutory deadline, delayed reporting that allows damage to worsen can result in partial or full denial. Report damage immediately, even if you haven't decided whether to file a formal claim."
    },
    {
      question: "What can I do if my water damage insurance claim is denied?",
      answer: "Request a detailed written denial explaining the specific policy provisions cited. Review your policy carefully, then gather additional evidence such as independent contractor assessments, moisture readings, and photo documentation. File a formal appeal through your insurer's internal process. If that fails, contact the Virginia Bureau of Insurance (State Corporation Commission) to file a complaint, or consult an insurance attorney who handles bad faith claims."
    },
    {
      question: "What is a typical deductible for water damage claims in Virginia?",
      answer: "Water damage deductibles in Virginia typically range from $500 to $2,500 for standard homeowners policies. Some policies have percentage-based deductibles (1-2% of dwelling coverage) for specific perils like wind-driven rain. Check your declarations page for your exact deductible amount before filing, as claims only slightly above the deductible may not be worth filing given potential rate increases."
    },
    {
      question: "What if I disagree with the insurance adjuster's damage assessment?",
      answer: "You have the right to dispute the adjuster's findings. Get independent estimates from IICRC-certified restoration companies using Xactimate software. Request a re-inspection or ask for a senior adjuster. Under Virginia law, you can invoke the appraisal clause in your policy, where each party hires an independent appraiser and a neutral umpire resolves disagreements. You can also hire a public adjuster who works on your behalf for a percentage (typically 10-15%) of the settlement."
    },
    {
      question: "What documentation do I need for a water damage insurance claim?",
      answer: "Essential documentation includes: timestamped photos and video of all damage from multiple angles, a written inventory of damaged items with estimated values, the date and time you discovered the damage, identification of the water source, receipts for any emergency mitigation work, your home maintenance records, and professional moisture readings. The more thorough your documentation, the stronger your claim."
    },
    {
      question: "Should I use the restoration company my insurance recommends?",
      answer: "You are not required to use your insurer's preferred vendor. Virginia law gives you the right to choose your own restoration company. While preferred vendors may streamline the process, an independent company like Flood Doctor works for you—not the insurance company—and can advocate for proper scope of work. We use the same Xactimate pricing software insurers use, so our estimates align with industry standards."
    },
    {
      question: "What is a supplemental insurance claim and when should I file one?",
      answer: "A supplemental claim covers additional damage or costs discovered after the initial claim was filed and approved. This commonly occurs when hidden damage is found during restoration—such as mold behind walls, compromised subfloor, or saturated insulation not visible during the initial inspection. Your restoration company should document all supplemental findings with photos, moisture readings, and detailed line-item estimates for submission to your adjuster."
    }
  ];

  const schema = generateBlogArticleSchema({
    headline: 'Filing a Water Damage Insurance Claim',
    description: 'Step-by-step guide to filing water damage insurance claims in Virginia. Learn documentation tips, adjuster strategies, and how to maximize your coverage.',
    slug: '/blog/filing-water-damage-insurance-claim/',
    datePublished: '2026-02-21',
    dateModified: '2026-02-21',
    articleSection: 'Insurance',
  }, faqs);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Filing a Water Damage Insurance Claim"
        description="Step-by-step guide to filing water damage insurance claims in Virginia. Learn documentation tips, adjuster strategies, and how to maximize your coverage."
        schema={schema}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="text-sm text-gray-600 mb-2">
            Insurance | Virginia Homeowners Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How to File a Water Damage Insurance Claim: Step-by-Step Guide for Virginia Homeowners
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <time dateTime="2026-02-21">February 21, 2026</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <div className="bg-[#1a73e8] text-white p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold mb-2">Need Help with an Insurance Claim?</p>
            <p className="mb-4">Flood Doctor works directly with your insurance company — call us first.</p>
                        <a
              href="/request/"
              className="inline-block bg-white text-[#1a73e8] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request Services
            </a>
          </div>
        </header>

        <ArticleAuthor datePublished="2026-02-21" readTime="12 min read" />

        {/* Lead Paragraph */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Every year, thousands of Virginia homeowners face water damage claims that get delayed, underpaid, or outright denied — often because of avoidable mistakes during the filing process. Insurance companies process claims based on documentation, timing, and policy language, and the homeowners who understand this process recover significantly more than those who don't. Whether you're dealing with a burst pipe, appliance failure, or storm damage, this guide walks you through exactly how to file your claim correctly, what to say (and what not to say) to your insurer, and how Flood Doctor's team handles the claims process alongside you to maximize your coverage and minimize your stress.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            Step 1: Document Everything Before You Touch Anything
          </h2>

          <p>
            Documentation is the single most important factor in a successful water damage claim. Before you move furniture, rip out carpet, or start mopping, you need to create a comprehensive record of the damage exactly as you found it. Insurance adjusters weren't there when it happened — your photos, videos, and notes are the evidence they'll use to determine your payout.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 my-6">
            <p className="font-semibold text-gray-900 mb-2">Documentation Checklist</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Take wide-angle photos of every affected room before cleanup</li>
              <li>Shoot close-up photos of the water source and point of entry</li>
              <li>Record video walkthroughs with narration describing the damage</li>
              <li>Write a detailed inventory of every damaged item with estimated replacement value</li>
              <li>Note the exact date and time you discovered the damage</li>
              <li>Photograph serial numbers and model numbers on damaged appliances</li>
            </ul>
          </div>

          <p>
            Professional moisture readings matter more than most homeowners realize. A certified restoration company uses infrared cameras and commercial-grade moisture meters to detect water behind walls, under floors, and in ceiling cavities — damage that's invisible to the naked eye but critical to your claim scope. Our <Link to="/resources/insurance-documentation-guide/" className="text-[#1a73e8] hover:underline">insurance documentation guide</Link> covers exactly what photos and records adjusters look for when evaluating claims.
          </p>

          <blockquote className="border-l-4 border-[#1a73e8] bg-blue-50 p-6 my-8 rounded-r-lg">
            <p className="text-gray-800 italic">
              "The difference between a $4,000 claim and a $12,000 claim is often the documentation, not the damage. Homeowners who document moisture readings, photograph hidden damage areas, and inventory every affected item consistently receive higher settlements."
            </p>
            <p className="text-sm text-gray-600 mt-2">— IICRC Water Damage Restoration Standards</p>
          </blockquote>

          <p>
            Keep all documentation in a dedicated folder — physical or digital. You'll reference it multiple times throughout the claims process, and having organized records signals to the adjuster that you're thorough and informed.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            Step 2: Contact Your Insurance Company Within 24 Hours
          </h2>

          <p>
            Time is not on your side. Most Virginia homeowners policies require "prompt" notification of damage, and insurers interpret this as 24-48 hours. Delayed reporting is one of the top reasons claims are denied or reduced, because the insurer can argue that the delay allowed damage to worsen unnecessarily.
          </p>

          <p>
            When you call your insurance company, have your policy number ready and provide clear, factual information. Describe what happened, when you discovered it, and what you've done so far. The claims representative will assign a claim number and schedule an adjuster visit.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
            <p className="font-semibold text-gray-900 mb-2">What NOT to Say to Your Insurance Company</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Do not admit fault or speculate about the cause ("I should have replaced that pipe")</li>
              <li>Do not downplay the damage to seem reasonable — report everything</li>
              <li>Do not agree to a recorded statement without reviewing your policy first</li>
              <li>Do not accept an initial settlement offer on the phone before the adjuster inspects</li>
              <li>Do not say "it's been leaking for a while" — gradual damage is typically excluded</li>
            </ul>
          </div>

          <p>
            Stick to the facts: what you discovered, when you discovered it, and what the current condition is. Ask for the claim number, the name of your assigned adjuster, and the expected timeline for the inspection. Write all of this down.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-semibold text-gray-900">Call the claims line on your insurance card</p>
              <p className="text-gray-700">Available 24/7 for most major carriers. Have your policy number ready.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-semibold text-gray-900">Provide factual details only</p>
              <p className="text-gray-700">What happened, when you discovered it, and the current state of the damage.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <p className="font-semibold text-gray-900">Get your claim number and adjuster assignment</p>
              <p className="text-gray-700">Record the claim number, adjuster name, phone number, and scheduled inspection date.</p>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            Step 3: Mitigate Further Damage Immediately
          </h2>

          <p>
            Under Virginia law and standard insurance policy language, you have a legal duty to mitigate — meaning you must take reasonable steps to prevent additional damage after the initial incident. Failing to mitigate can give your insurer grounds to reduce or deny your claim for any damage that occurred after you discovered the problem.
          </p>

          <p>
            Mitigation does not mean full restoration. It means stopping the water source, extracting standing water, and beginning the drying process. This is where professional restoration companies play a critical role — and where insurance coverage for emergency services kicks in.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 my-6">
            <p className="font-semibold text-gray-900 mb-2">What Counts as Mitigation (Insurance Will Cover)</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Shutting off the water supply to stop the source</li>
              <li>Emergency water extraction to prevent further saturation</li>
              <li>Placing tarps over roof damage to prevent additional intrusion</li>
              <li>Moving undamaged belongings away from affected areas</li>
              <li>Setting up fans and dehumidifiers to begin drying</li>
              <li>Board-up services for broken windows or structural openings</li>
            </ul>
          </div>

          <p>
            Save every receipt from your mitigation efforts. Emergency supply purchases, equipment rentals, temporary repairs — all of these are reimbursable under most policies as part of your claim. Do not throw receipts away, and do not discard damaged materials until your adjuster has inspected them or given you written permission.
          </p>

          <p>
            Understanding <Link to="/blog/homeowners-insurance-water-damage-virginia/" className="text-[#1a73e8] hover:underline">what your Virginia homeowners insurance actually covers</Link> before disaster strikes gives you a significant advantage during the claims process. Knowing the difference between sudden damage and gradual damage, or between water backup and flooding, directly affects how you describe the incident to your insurer.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            Step 4: Meet with the Insurance Adjuster
          </h2>

          <p>
            The adjuster's inspection is the most consequential step in your claim. This is when coverage is determined, damage scope is documented, and the initial estimate is created. Being prepared and present during this inspection directly impacts your settlement amount.
          </p>

          <p>
            Schedule the adjuster visit as quickly as possible — delays allow damage to worsen and can complicate the claims timeline. When the adjuster arrives, walk them through the property methodically, pointing out every area of damage including areas that may not be immediately visible.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-semibold text-gray-900">Prepare your documentation package</p>
              <p className="text-gray-700">Have your photos, videos, inventory list, and moisture readings organized and ready to share.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-semibold text-gray-900">Accompany the adjuster through every room</p>
              <p className="text-gray-700">Don't let the adjuster walk the property alone. Point out damage they might miss, especially behind walls and under flooring.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <p className="font-semibold text-gray-900">Highlight hidden damage areas</p>
              <p className="text-gray-700">Share moisture readings showing water behind drywall, under cabinets, and in crawl spaces. Adjusters can't pay for damage they don't document.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <p className="font-semibold text-gray-900">Request a copy of the adjuster's report</p>
              <p className="text-gray-700">You have the right to review the scope of loss. Compare it against your own documentation and your restoration company's assessment.</p>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#1a73e8] bg-blue-50 p-6 my-8 rounded-r-lg">
            <p className="text-gray-800 italic">
              "Insurance adjusters are trained to document what they can see. Your job is to make sure they see everything — including moisture behind walls, under floor coverings, and in ceiling cavities that aren't visible without professional testing equipment."
            </p>
            <p className="text-sm text-gray-600 mt-2">— Flood Doctor Claims Coordination Team</p>
          </blockquote>

          <p>
            If your restoration company has already started mitigation work, have their technician present during the adjuster visit. A certified technician can speak the adjuster's language, reference IICRC standards, and explain why specific areas require attention that might otherwise be overlooked.
          </p>

          <MidArticleCTA />

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            Step 5: Get Professional Restoration Estimates
          </h2>

          <p>
            After the adjuster's inspection, you need professional restoration estimates to compare against the insurer's scope of work. This is where Xactimate — the insurance industry's standard estimating software — becomes essential. Xactimate produces line-item estimates using localized pricing data, and it's the same tool insurance companies use internally. When your restoration company provides an Xactimate-based estimate, the adjuster can compare it directly against their own, line by line.
          </p>

          <p>
            Restoration cost estimates vary based on the extent of damage, water category, affected materials, and the scope of repairs needed. For most Virginia residential water damage claims, homeowners can expect costs ranging from $2,500 to $15,000 for moderate incidents, and $15,000 to $40,000 or more for severe multi-room or multi-floor damage. Use our <Link to="/resources/cost-calculator/" className="text-[#1a73e8] hover:underline">cost calculator</Link> to get a preliminary estimate based on your specific situation before the adjuster arrives.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 my-6">
            <p className="font-semibold text-gray-900 mb-2">Why Xactimate Matters</p>
            <p className="text-gray-700">
              Xactimate uses regional pricing data specific to your zip code, so estimates reflect actual material and labor costs in Northern Virginia — not national averages. When your restoration company and the insurance adjuster both use Xactimate, disputes over pricing are minimized because the numbers come from the same database. Any legitimate restoration company should provide Xactimate-formatted estimates for insurance claims.
            </p>
          </div>

          <p>
            If the adjuster's estimate is lower than your restoration company's, don't panic. Review both estimates side by side and identify specific line items where the scope differs. Common discrepancies include missed areas behind walls, excluded demolition or haul-away costs, undersized drying equipment allocations, and omitted antimicrobial treatments. These differences are normal and resolvable through the supplemental claim process.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            Common Reasons Water Damage Claims Get Denied
          </h2>

          <p>
            Understanding why claims are denied helps you avoid the most common pitfalls. Insurance companies deny water damage claims for specific, documented reasons — and most of them are preventable if you know what to watch for.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Maintenance Neglect</h3>
          <p>
            Insurance covers sudden and accidental damage, not damage caused by deferred maintenance. If an adjuster determines that a leaking pipe had been corroded for months, that the caulking around your shower hadn't been maintained, or that you ignored visible signs of water intrusion, the claim will likely be denied as a maintenance issue. Keep records of annual plumbing inspections, HVAC servicing, and roof maintenance to demonstrate reasonable care.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Gradual Damage</h3>
          <p>
            Slow leaks that cause damage over weeks or months are typically excluded from coverage. The standard policy language covers "sudden and accidental" events, not ongoing conditions. If water stains on your ceiling have been growing for months, or if mold growth indicates long-term moisture exposure, the insurer will classify it as gradual damage. The key defense: report damage immediately when discovered and have a professional assess the timeline.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Flood Exclusion</h3>
          <p>
            Standard homeowners policies in Virginia do not cover flooding from external sources — rising water from rivers, storm surge, surface runoff, or overwhelmed storm drains. This requires a separate flood insurance policy through the National Flood Insurance Program (NFIP) or a private carrier. Many Virginia homeowners in Northern Virginia, particularly in Fairfax, Arlington, and Alexandria, discover this exclusion only after a major storm event.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
            <p className="font-semibold text-gray-900 mb-2">Critical Warning</p>
            <p className="text-gray-700">
              Even if your property is not in a FEMA-designated flood zone, external water intrusion from heavy rainfall is still classified as flooding under your homeowners policy. Approximately 25% of flood insurance claims come from properties outside high-risk zones. If surface water enters your home, your standard policy will not cover it.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Late Reporting</h3>
          <p>
            Waiting days or weeks to report water damage gives your insurer grounds to argue that the delay caused additional damage that could have been prevented. Virginia policies require prompt notification, and adjusters are trained to look at the timeline between discovery, reporting, and mitigation. Every day of delay weakens your claim.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            How Flood Doctor Helps with Insurance Claims
          </h2>

          <p>
            Filing a water damage claim while simultaneously dealing with water in your home is overwhelming. Flood Doctor's claims coordination team works alongside you throughout the entire process, from initial documentation to final settlement. Here's how we support Virginia homeowners through the insurance claims process.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Direct Insurance Billing</h3>
          <p>
            We bill your insurance company directly, so you don't have to pay out of pocket and wait for reimbursement. Our billing team works with all major Virginia insurers — State Farm, USAA, Allstate, Nationwide, Erie, Travelers, and others — and understands each carrier's documentation requirements and approval processes. You pay your deductible, and we handle the rest.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Professional Documentation</h3>
          <p>
            Our IICRC-certified technicians create detailed documentation packages that include pre-mitigation and post-mitigation photos, daily moisture readings with mapped locations, thermal imaging scans showing hidden moisture, itemized equipment logs, and comprehensive damage assessments. This level of documentation is what separates approved claims from denied ones.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Adjuster Coordination</h3>
          <p>
            We coordinate directly with your assigned adjuster, scheduling joint inspections, providing Xactimate-formatted estimates, and communicating technical details in the language adjusters understand. When our technician and your adjuster walk the property together, the scope of work is established collaboratively rather than contested after the fact.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Xactimate Pricing</h3>
          <p>
            Every Flood Doctor estimate is generated in Xactimate using the current pricing database for your Virginia zip code. This eliminates pricing disputes and ensures your claim reflects the actual cost of restoration in Northern Virginia's market. When supplemental damage is discovered during restoration, we submit detailed Xactimate supplements with supporting documentation for adjuster review.
          </p>

          {/* Section 8 - FAQ */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-4 border-[#1a73e8]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-8">
            {faqs.map((faq, index) => (
              <details key={index} className="group border border-gray-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex-shrink-0 text-[#1a73e8] group-open:rotate-180 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center mt-12">
            <h2 className="text-2xl font-bold text-white mb-3 border-none pb-0 mt-0">
              Need Help Filing Your Water Damage Claim?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Flood Doctor's claims coordination team handles the paperwork, documentation, and insurance communication so you can focus on getting your home back to normal. Available 24/7 for emergencies throughout Northern Virginia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <a
              href="/request/"
              className="inline-block bg-white text-[#1a73e8] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request Services
            </a>
              <Link
                to="/request/"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Request Service Online
              </Link>
            </div>
          </div>
        </div>
      </article>

      <RelatedArticles categories={['insurance', 'water-damage']} currentSlug="/blog/filing-water-damage-insurance-claim/" />
    </main>
  );
};

export default FilingWaterDamageInsuranceClaim;
