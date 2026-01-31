import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Check,
  Search,
  FileText,
  Shield,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Calendar,
  Eraser,
  Pen
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';

/**
 * WorkAuthorization - Accordion-style Service Contract
 *
 * Mobile-optimized contract with:
 * - 7 collapsible accordion sections
 * - Checkbox acknowledgment per section
 * - Initial required for sections with "Initial ←Initial" markers
 * - Signature pad at bottom
 *
 * IMPORTANT: All contract text is VERBATIM from the original legal document.
 * DO NOT summarize, condense, or modify any language without explicit approval.
 */

// Contract content organized by section - ALL TEXT IS VERBATIM FROM ORIGINAL DOCUMENT
const CONTRACT_SECTIONS = {
  definitions: {
    title: 'Section 0: Definitions',
    requiresInitial: false,
    content: `SECTION 0 – DEFINITIONS

For purposes of this Contract, the following terms shall have the meanings set forth below:

0.1 "Client" – The individual, entity, or agent who authorizes services and agrees to be financially responsible under this Contract.

0.2 "Provider" – Property Restoration Contractor, and its employees, subcontractors, representatives, or agents.

0.3 "Property" – The physical location where services under this Contract are performed.

0.4 "Mitigation" – The emergency procedures and services provided to prevent further damage after a water, fire, or other property loss, including but not limited to water extraction, drying, and containment.

0.5 "Remediation" – The process of treating or removing contaminants (e.g., microbial growth) to restore indoor environmental quality and reduce health risks. Provider does not perform mold remediation unless expressly stated in writing.

0.6 "Category 1, 2, 3 Water" – Water classifications defined under the IICRC S500 Standard.
• Category 1: Clean water from a sanitary source.
• Category 2: Significantly contaminated water that may cause illness.
• Category 3: Grossly contaminated water containing pathogens or toxins. (Water may change categories over time or upon contact with building materials.)

0.7 "Dry Standard" – The target moisture content or drying goal for materials, as established by readings taken in unaffected areas of the Property or based on industry standards.

0.8 "Scope of Work" – The services the Provider determines are necessary based on actual onsite conditions, which may include demolition, drying, cleaning, equipment use, or reconstruction-related tasks.
The Scope of Work is determined by the Provider based on actual onsite conditions observed during the course of services and may evolve as conditions change. The Scope of Work is not limited by preliminary assessments, insurance inspections, or third-party opinions.

0.9 "Emergency Services" – Services performed immediately upon authorization to stabilize the Property, without a prior estimate or insurance approval, including but not limited to after-hours or weekend work if necessary. Emergency services begin immediately to prevent further damage and are exempt from standard consumer protection waiting periods.

0.10 "Change Order" – Any work not included in the original scope that is added or modified due to site conditions, client requests, code requirements, or insurance findings.

0.11 "Administrative Fee" – Charges incurred for time spent revising invoices, creating supplemental documentation, or communicating with third parties at the Client's request or for insurance carrier demands.

0.12 "PPE" (Personal Protective Equipment) – Equipment used to protect Provider personnel and others from exposure to contaminants, as dictated by site conditions (e.g., suits, respirators, gloves).

0.13 "Rental Period" – The duration from when equipment is placed onsite until it is removed by the Provider, regardless of drying goal achievement, unless otherwise agreed.

0.14 "Mechanic's Lien" – A legal claim filed by the Provider against the Property to secure payment for services rendered, in accordance with Virginia Code §43-1 et seq.

0.15 "Third Party Adjuster" – Any insurance adjuster, consultant, or vendor not hired by the Client but involved in reviewing or challenging the Provider's work or pricing.

0.16 "Work" / "Services" – All labor, materials, equipment, and procedures performed or provided by the Provider under this Contract, including but not limited to mitigation, remediation, restoration, demolition, drying, cleaning, and related activities.

0.17 "IICRC" – The Institute of Inspection, Cleaning and Restoration Certification, the certifying body that publishes industry standards including but not limited to the S500 Standard for Professional Water Damage Restoration.

0.18 "Xactimate" – A third-party estimating software commonly used in the insurance and restoration industry for pricing and invoicing. Use of Xactimate does not guarantee insurance acceptance of pricing.

0.19 "Attachment A" – The Provider's Partial Price List attached to this Contract, listing commonly used labor, equipment, and service charges.`
  },
  partiesPurpose: {
    title: 'Section 1: Parties and Purpose',
    requiresInitial: false,
    content: `SECTION 1 – PARTIES AND PURPOSE

This Service Contract ("Contract") is made this ________ by and between Property Restoration Contractor, LLC. ("Provider") and ________________ ("Client"). (hereinafter referred to collectively as the "Parties").

CONTRACTOR LICENSING: Provider is licensed by the Virginia Department of Professional and Occupational Regulation, Class A Contractor License #27-05155505. Provider maintains required insurance and bonding as mandated by Virginia law.

WHEREAS, the Client desires to hire the Provider to perform emergency mitigation and restoration services for the property located at: ________________ ("Property")

WHEREAS, the Client authorizes the Provider to proceed with its recommended procedures to secure from further damage, preserve, protect, and restore the Property.

WHEREAS, the Provider, which is in the business of providing, among other services, emergency water and fire damage cleanup, mitigation, and restoration services, desires to provide such services to the Client upon the terms and conditions provided herein; and

WHEREAS, the Parties desire to enter into this Contract to set forth the terms and conditions that will govern the Provider's provision of the Services to the Client.

EMERGENCY SERVICE ACKNOWLEDGMENT: Client confirms this contract is for emergency mitigation services requested due to an immediate threat of property damage. Client understands that emergency services begin immediately upon authorization to prevent further damage, and standard consumer cancellation periods do not apply to emergency restoration services.

After-Hours Necessity Determination:
The Client acknowledges that decisions to perform work outside of normal business hours are made solely based on the risk of ongoing or progressive damage, health and safety concerns, or the need to stabilize conditions, and not for Client convenience or insurance carrier scheduling preferences. When conditions require immediate action, after-hours labor is necessary to prevent secondary damage and increased loss severity.

ESTIMATED COMPLETION: Due to the emergency nature of water damage restoration, exact completion dates cannot be determined until the assessment is complete. Provider will provide estimated timeframes within 48 hours of commencing work. Delays due to insurance processes, weather, or Client-requested changes will extend completion dates accordingly.

THEREFORE, for good and valuable consideration, the receipt of which is hereby acknowledged, upon the general terms and subject to the conditions set forth in this Contract and intending to be legally bound, the Parties hereto agree as follows:`
  },
  paymentInsurance: {
    title: 'Section 2: Insurance & Payment Authorization',
    requiresInitial: false,
    content: `SECTION 2 – INSURANCE & PAYMENT AUTHORIZATION

2.1 - ASSIGNMENT OF INSURANCE BENEFITS: The Client hereby assigns any insurance rights, benefits, proceeds, and causes of action under any applicable insurance policies to the Provider. This assignment is made in consideration of the Provider performing the services and not requiring a down payment from the Client prior to starting work. The Client hereby acknowledges that the insurance company is billed as a courtesy and convenience to the Client; should the Client's insurance company fail to honor the assignment of claims and interest and direction to pay, the Client agrees to pay the Provider any balances due from the Client's personal funds. The Client further acknowledges and agrees that the Provider is working for the Client and not for their insurance company. Therefore, it is understood that the Client is ultimately responsible for full payment of services rendered pursuant to this Contract.

2.2 - AUTHORIZATION: The Client/Agent for the above Property authorizes the Provider, its subcontractors, its agents, and representatives to enter the Property, furnish materials, supply all equipment, and perform all labor necessary to mitigate, preserve, and protect the Property from further damage, and to perform all restoration procedures necessary to repair and restore the carpet, furniture, structure, building materials, and other furnishings.

2.3 - PRESUMPTION OF CONTRACTUAL AUTHORITY: By signing this Contract, the Client affirms that they have full legal authority to authorize all work on the Property, regardless of property title, ownership disputes, or insurance-related status. The Client agrees that any delays in insurance coverage, inspections, or adjuster coordination shall not impact the validity of this Contract or the Client's payment obligations.

2.4 - DIRECTION OF PAY: Providing the Client has valid and adequate insurance coverage for all or part of the services to be performed by the Provider, the Client authorizes and directs their insurance carrier to pay the Provider directly and to name the Provider on any insurance drafts applicable to this loss.

2.5 - PERSONAL GUARANTY: If Client is acting on behalf of an entity, Client personally guarantees payment of all amounts due under this Contract and waives any right to require Provider to proceed first against the entity before pursuing Client personally.`
  },
  waterDamageMold: {
    title: 'Section 3: Water Damage & Mold Considerations',
    requiresInitial: false,
    content: `SECTION 3 – WATER DAMAGE & MOLD CONSIDERATIONS

3.1 - EFFECT OF ABNORMAL WATER: Water indoors is an abnormal condition and may cause or contribute to several problems. The potential for property damage and adverse health effects increases the longer materials remain wet.

3.2 - PROGRESSIVE STAGES OF INDOOR WATER DAMAGE:

Stage 1 - Water Migration: Water migrates into areas not affected initially. Water spreads laterally into adjoining rooms, penetrates materials below, and wicks up into porous materials above. It is best to evaluate all affected areas, not just areas with visible saturation.

Stage 2 - Material Swelling: Saturated materials begin swelling as they absorb moisture. Drying and restoration will restore them in many situations, and the damage may be permanent in others. Rapid drying will help reduce the chance of permanent damage.

Stage 3 - Humidity Damage: As water evaporates, it causes an abnormal humidity condition. High humidity can damage some porous materials if allowed to continue. Humidity damage is most common when the indoor humidity exceeds 60% over time. It is best to reduce indoor humidity quickly to help prevent humidity damage.

Stage 4 - Microbial Growth: After water intrusion, mold and bacterial spores can germinate and multiply. Microorganisms can cause mold damage and degrade indoor air quality. Some microorganisms produce antigens and allergens, which cause allergies, while others can cause infections and toxic diseases.

3.3 - DETERMINATION OF WATER LOSS CATEGORY: Provider uses its professional expertise, onsite observations, and recognized industry standards—including but not limited to the IICRC S500 Standard and Reference Guide for Professional Water Damage Restoration—to determine the appropriate Category of water loss.

The Client acknowledges and agrees that the Category of water loss is not determined solely by the source of the water, but rather by the condition of the water at the time of assessment, and may change over time due to:
• Prolonged exposure,
• Contact with building materials, insulation, or flooring,
• Travel through wall cavities or subfloor systems,
• Development of odors, discoloration, microbial growth, or other contamination.

Even if the initial water source was clean (Category 1), the Provider is authorized to reclassify the loss to Category 2 or 3 when site conditions indicate degradation or contamination, as defined by Section 10.5 of the IICRC S500.

Per Section 10.5 of the IICRC S500 (2021): "Water that originates from a sanitary source may not remain sanitary after coming into contact with other surfaces or materials… Time and temperature can also affect the cleanliness of water. All three categories of water should be considered potentially dangerous and require appropriate personal protective equipment (PPE), engineering controls, and containment as conditions dictate."

Accordingly, charges for containment, demolition, antimicrobial treatment, use of PPE, and other Category 2 or 3 procedures are determined based on the actual conditions observed at the time of service, not based on an insurance adjuster's retroactive classification or opinions regarding the water source.

Laboratory testing is not required to classify a water loss category when visual indicators, odor, exposure time, material contact, and site conditions meet IICRC criteria.

3.4 - REDUCING MILDEW GROWTH AND DAMAGE: Several things can be done to help reduce mold growth and damage to affected materials:
• Water can be removed.
• Antimicrobial agents can be applied to help inhibit the growth of mold and other biocontaminants.
• Rapid air movement can be introduced into areas and cavities to increase the rate of evaporation, and
• Relative Humidity (RH) indoors can be reduced.

The Client understands that the Provider:
• is not a mold remediation company;
• Does not guarantee or warrant that it can identify or remove mold;
• that a company possessing expertise in mold remediation must be hired to help ensure proper identification, testing, and removal of mold and mildew; and
• The Provider's services may only help, not prevent or resolve, any issues related to mold and mildew.

3.5 - MOLD SERVICES LIMITATION: The Client understands that the Provider's services do not include mold inspections or mold removal. Therefore, the Client agrees to release, indemnify, and hold the Provider harmless for any biological odors or growth, indoor air quality degradation, and any mold-related personal injuries or other damages to health that may occur due to microbiological activity during and/or after the mitigation process.`
  },
  pricingBilling: {
    title: 'Section 4: Pricing & Billing Terms',
    requiresInitial: false,
    content: `SECTION 4 – PRICING & BILLING TERMS

4.1 - PRICING AND PAYMENT: The Client understands that water damage is a progressive condition and that drying time varies depending on the types of materials, the quantity of water, the degree of saturation, airflow volume and velocity, temperature, and indoor & outdoor humidity. Therefore, the Client understands it is impracticable to give an accurate quote for services before completion. The Client agrees to pay the total price for the work the Provider performs.

The Provider utilizes an industry-standard price list for mitigation services, available upon request. A partial list of commonly used line items can be found here: Partial Price List.

4.2 - PRICING DETERMINATION: The Client acknowledges that water damage restoration is a complex and dynamic process, and the total cost of services rendered by the Provider and its subcontractors depends on various factors, including but not limited to the types of materials affected, the quantity of water present, the degree of saturation, airflow volume and velocity, temperature, indoor and outdoor humidity, and duration of time that materials are subjected to water and high moisture levels before mitigation efforts are started. Given these variables, providing an exact quote before the completion of the restoration process is impractical. Therefore, the Client understands and accepts that the final price for the water damage services shall be determined based on the Provider's industry-standard price list for mitigation services, which is available upon request.

4.3 - AUTONOMOUS PRICING: The Client further acknowledges that the Provider's pricing structure is established through an independent cost analysis and is not subject to any third-party pricing structures. The Provider reserves the right to adjust its prices as necessitated by prevailing market conditions and in compliance with applicable labor laws in the jurisdictions where its services are provided.

4.4 - LABOR LAW COMPLIANCE: The Provider is committed to adhering to all local and federal labor laws applicable in the jurisdictions in which it operates. As part of this commitment, the Provider ensures that its employees receive fair compensation and treatment in accordance with the relevant labor regulations. Employees of the Provider are entitled to overtime pay for all hours worked beyond eight hours in a single shift and all hours worked exceeding forty hours in a single week, as mandated by applicable labor laws.

4.5 - PAYMENT OBLIGATIONS: Upon completion of the water damage restoration services, the Client agrees to promptly pay the Provider the total price for the work performed as determined by the aforementioned factors and the industry-standard price list. Payment shall be made in accordance with the terms and conditions specified in the invoice provided by the Provider.

4.6 - DISPUTE RESOLUTION: In the event of any dispute regarding the pricing or payment for the services, both parties agree to engage in good faith negotiations to reach a mutually acceptable resolution. If a resolution cannot be achieved through negotiations, the matter shall be subject to the dispute resolution procedures outlined in this Contract.

4.7 - INDEPENDENCE FROM INSURANCE PRICING STRUCTURES: The Client is aware that some insurance companies may maintain in-network preferred vendors and associated pricing structures for water damage restoration services. However, the Client acknowledges and understands that the Provider operates independently and is not bound by any pricing structures dictated by insurance companies or their in-network vendor arrangements.

4.8 - TRANSPARENT AND COMPETITIVE PRICING: The Provider is committed to providing transparent and competitive pricing for its water damage restoration services. While insurance coverage and reimbursement may be applicable in certain cases, the Provider determines its pricing based on its own cost analysis and industry standards, ensuring fairness and impartiality in all financial transactions with its clients.

4.9 - NO COMPROMISE ON QUALITY: The Provider's pricing independence in no way compromises the quality of the services rendered. The Provider remains dedicated to delivering the highest standard of water damage restoration, utilizing advanced techniques, state-of-the-art equipment, and skilled professionals to achieve optimal results.

4.10 - COMMUNICATION WITH INSURANCE PROVIDERS: In the event that the Client's insurance provider is involved in the claims process for the water damage restoration services, the Provider is prepared to cooperate with the insurance company as needed. However, it is essential to reiterate that the Provider's pricing shall remain unaffected by any insurance company's preferred vendor arrangements.

4.11 - XACTIMATE PRICING:
a. Use of Xactimate Pricing: The Client acknowledges that the Provider may use Xactimate pricing as a baseline for estimating and invoicing the Work in accordance with the Xactimate End User Agreement. However, the Provider is not obligated to exclusively use Xactimate to estimate or invoice the Work.
b. Independent Pricing Authority: The Provider reserves the right to adjust or establish pricing independently of Xactimate in order to reflect the unique circumstances of the project, market conditions, or additional services requested by the Client.
c. Insurance Company Adjustments: The Client acknowledges that Xactimate pricing is a tool and does not serve as a guarantee of pricing acceptance by the Client's insurance company. The Provider is not responsible for resolving pricing disputes with the Client's insurance provider.
d. Administrative Fees: The Client agrees to an administrative fee of $198 per hour for revisions or changes to estimates or invoices requested by the insurance company. Such fees will be added to the final invoice. Administrative fees apply only to work necessitated by insurance carrier or third-party requests and would not be incurred absent such external claim handling requirements.
e. Client's Responsibility: The Client agrees that it is their responsibility to review their insurance policy and understand the coverage provided for the Work. The Provider is not responsible for discrepancies between Xactimate pricing and the Client's insurance policy coverage.

4.12 - CONTRACT PRICE LIST INCORPORATION: The Client acknowledges that the Provider's Partial Price List, attached hereto as Attachment A, represents commonly used labor, equipment, and service charges associated with water damage mitigation. The Client agrees that charges billed may include items listed in Attachment A as well as other services reasonably required to complete the Scope of Work based on actual site conditions.

4.13 - EQUIPMENT SELECTION AND DRYING DETERMINATION: The type, quantity, placement, and duration of drying equipment are determined in accordance with industry-accepted water damage restoration principles, including but not limited to IICRC S500 methodologies. Equipment counts and drying duration are calculated based on affected materials, class and category of loss, environmental conditions, moisture measurements, and documented drying progress, and not based on predetermined timeframes or insurance carrier guidelines.`
  },
  insuranceDisputes: {
    title: 'Section 5: Insurance Disputes & Third-Party Limitations',
    requiresInitial: false,
    content: `SECTION 5 – INSURANCE DISPUTES & THIRD-PARTY LIMITATIONS

5.1 - INSURANCE PAYMENTS: If an insurance company makes any payment directly to the Client, payment shall be remitted to the Provider within three (3) working days. The Client represents and warrants that they are personally liable for all work performed by the Provider, the Provider's subsidiaries, and the Provider's subcontractors, agents, and representatives, regardless of whether an insurance company covers the loss or not. Any charges for services not reimbursed by an insurance company are due upon completion of the work.

5.2 - NO REQUIREMENT TO WORK WITH THIRD-PARTY ADJUSTERS:

(a) Independence from Third-Party Adjusters: The Provider is not obligated to communicate with, coordinate with, respond to, or work alongside any third-party adjusters, consultants, representatives, or agents, including, but not limited to, those retained by the Client or the Client's insurance company, in connection with the Work performed under this Contract. No obligation to cooperate with such parties shall be implied by industry custom, prior dealings, course of performance, or insurer expectation.

(b) Client Responsibility for Insurance Coordination: The Client acknowledges and agrees that coordination with any third-party adjusters or insurance representatives is the Client's sole responsibility. The Provider's role is strictly limited to performing the Work authorized under this Contract and does not include claim administration, claim coordination, or insurer-directed scope revisions. The Provider has no duty to advocate for coverage, pricing, or payment on the Client's behalf.

(c) Adjuster Requests and Documentation: Any requests by insurance adjusters or third parties for revisions, reformatting, supplemental documentation, explanations, justifications, or modifications to invoices, estimates, logs, photographs, or reports are outside the Provider's contractual scope and remain the responsibility of the Client. If the Provider elects, in its sole discretion, to respond to or assist with such requests, all related time, administrative effort, analysis, and correspondence shall be billed separately, including, but not limited to, administrative fees, professional review fees, and documentation preparation charges.

(d) No Authority Over Work or Safety: Insurance adjusters and third-party representatives have no authority to direct, approve, modify, delay, or restrict the Provider's means, methods, sequencing, safety protocols, protective measures, or scope of Work. All such determinations remain within the sole professional judgment of the Provider.

(e) Exclusion from Claims and Payment Independence: The Provider is not a public adjuster and does not provide claim preparation, claim negotiation, dispute resolution, or insurance recovery services. The Client is advised to retain independent licensed representation for insurance-related matters if desired. The Client's payment obligations under this Contract are independent of insurance company conduct, determinations, approvals, or payment timing, and shall not be contingent upon insurer response, adjustment, or reimbursement.

5.3 - SCOPE OF WORK AND INSURANCE ADJUSTER INTERFERENCE: The Client understands and agrees that the scope of services provided by the Provider is determined solely by the actual conditions observed at the Property through firsthand inspection and field documentation, and is performed in accordance with applicable industry standards, including, but not limited to, IICRC guidelines and accepted professional practices. Scope determinations are based on observed moisture conditions, material involvement, environmental constraints, health and safety considerations, and risk of secondary damage, and are not dictated by theoretical assumptions or generalized loss models.

The Provider is under no obligation to revise, reduce, delay, resequence, or otherwise conform its scope of work, methods, duration, equipment utilization, labor allocation, or invoicing to match the opinions, interpretations, pricing guidelines, preferred durations, estimating software outputs, internal carrier policies, or assessments of any insurance adjuster, third-party reviewer, consultant, or claims representative. No duty to accommodate such requests shall be implied by industry custom, insurer practice, or prior course of dealings.

Insurance adjusters and third-party representatives have no authority to direct, approve, limit, or override the Provider's professional judgment, safety protocols, protective measures, or mitigation decisions, nor do they have authority to condition the scope of Work on insurance coverage determinations or reimbursement expectations.

The Client remains fully responsible for payment for all services rendered based on the actual Work performed and documented by the Provider, regardless of insurance company determinations, scope disagreements, pricing disputes, depreciation, coverage limitations, or reimbursement delays. Insurance proceeds, if any, are a matter between the Client and the insurance carrier and do not alter the Client's obligations under this Contract.

5.4 - CLIENT'S INSURANCE POLICY:

(a) Client's Responsibility: The Client agrees that it is their sole responsibility to review, understand, and ensure compliance with their insurance policy in relation to the Work performed under this Contract. The Provider is not responsible for interpreting or advising on the Client's insurance policy coverage.

(b) Insurance Coverage Limitations: The Client acknowledges that any limitations, exclusions, or denials of coverage under their insurance policy do not affect their payment obligations under this Contract. The Client remains fully responsible for all amounts due to the Provider, regardless of insurance reimbursement.

(c) Verification of Coverage: The Client is responsible for verifying the scope of their insurance policy and ensuring it provides adequate coverage for the services rendered. The Provider shall not be held liable for any discrepancies or coverage issues that may arise during or after the Work.

(d) No Insurance Guarantees: The Provider does not guarantee approval or payment of claims by the Client's insurance company. Any disputes regarding coverage or claim approvals must be resolved directly between the Client and their insurance provider.

By signing this Contract, the Client acknowledges that they have been duly informed of the Provider's independence from insurance pricing structures and that they understand and accept the terms and conditions outlined in this clause.`
  },
  safetySiteConditions: {
    title: 'Section 6: Safety & Site Conditions',
    requiresInitial: false,
    content: `SECTION 6 – SAFETY & SITE CONDITIONS

6.1 - STOP WORK-HOLD HARMLESS: In the event that the Provider is prevented from performing its recommended mitigation and remediation procedures and/or drying equipment is removed prematurely, the Client agrees to release and hold the Provider harmless and indemnify the Provider and all of the Provider's subsidiaries, subcontractors, and agents against any claims, actions, and liabilities that may result from such incomplete procedures.

6.2 - DRYING EQUIPMENT: The Client understands that high-velocity air movers ("fans") and dehumidifiers will be installed to increase the rate of drying. The Client represents and warrants that they:
• Will not allow children to play with this equipment;
• Will not turn off the equipment without first calling the Provider;
• Will not leave windows open unless expressly instructed to do so by the Provider, as this may delay or impair the drying process; and
• Will minimize entering the affected rooms, especially those where the carpet is being dried.

6.3 - HEALTH AND SAFETY: To ensure the health and safety of the Client and the Provider's employees, agents, and representatives on the Property, the Client represents and warrants that they shall abide by the following precautions:
• If dehumidifiers or fans are moved, these units shall be shut off and unplugged, as it may be hazardous to move these units while they are operating.
• Take care when walking near the tackless strip, as the exposed tackless strip presents a danger even when covered.
• Take extreme care when walking on, around, or from wet flooring materials, as floors may become slippery when wet.

6.4 - AIRBORNE CONTAMINANTS, OCCUPANCY, AND SAFETY RESPONSIBILITY: The Client acknowledges and agrees that mitigation, drying, demolition, and remediation activities may disturb or mobilize preexisting contaminants and particulate matter within the Property, which may become airborne as a result of necessary Work activities. Such contaminants may include, but are not limited to, dust, microbial matter, mold spores, asbestos-containing materials, lead-based materials, and other environmental or construction-related particulates that existed at the Property prior to or independent of the Provider's Work.

The Provider does not introduce contaminants into the Property but performs Work in an environment where such conditions may already be present, concealed, or unavoidable. As a result, the Provider strongly recommends that all persons entering or remaining within the Property during mitigation or remediation activities utilize appropriate personal protective equipment (PPE), and that occupants seek alternative living or working arrangements for the duration of the Work, particularly where containment, demolition, drying equipment, or antimicrobial measures are in use.

If the Property remains occupied during any portion of the Work, the Client represents and warrants that they have been advised of the potential health risks associated with airborne contaminants and agree to assume full responsibility for protecting occupants, invitees, and third parties from exposure. Such responsibility includes, but is not limited to, restricting access to affected areas, enforcing PPE use, and implementing reasonable safeguards to minimize exposure to hazardous or potentially hazardous conditions.

The Client further acknowledges that decisions regarding occupancy during mitigation and remediation are made at the Client's sole discretion and not at the direction of the Provider. The Client agrees to release, defend, indemnify, and hold harmless the Provider and its officers, employees, subcontractors, agents, and representatives from any claims, damages, losses, injuries, or liabilities arising out of or related to airborne contaminants, biological odors, microbial growth, particulate migration, or degradation of indoor air quality that may occur during or after the mitigation and remediation process, except to the extent caused by the Provider's proven gross negligence or willful misconduct.

6.5 - SITE HAZARDS: Active mitigation and remediation work sites can present many dangerous conditions that may result in injury to the Client and others who enter the Property. The Client agrees to release, indemnify, and hold the Provider and its subcontractors, agents, representatives, etc., harmless for any personal injuries or damage to the health and well-being of all those who enter the Property both during and after the mitigation and remediation process.

6.6 - EQUIPMENT RESPONSIBILITY, CUSTODY, AND LIABILITY: The Client represents, warrants, and agrees that all equipment, tools, machinery, and devices furnished by the Provider and placed at the Property remain the sole property of the Provider at all times and are provided for use solely in connection with the Work. Upon delivery to the Property, such equipment shall be deemed to be under the care, custody, and control of the Client, regardless of whether the Property is occupied, unoccupied, secured, unsecured, or accessible to third parties.

The Client shall be fully and personally liable for any loss of, theft of, damage to, or misuse of the Provider's equipment while such equipment is located at or associated with the Property, including, but not limited to, loss or damage caused by occupants, guests, tenants, neighbors, contractors, vandals, weather exposure, power interruptions, or unauthorized access. The Client agrees to take all reasonable precautions to safeguard the Provider's equipment and to maintain reasonable site security throughout the duration of the Work.

Equipment shall be deemed lost or stolen if it is missing, damaged beyond repair, rendered inoperable, or not returned or made available for retrieval within twenty-four (24) hours of the Provider's written or verbal request. The Client agrees to notify the Provider immediately upon discovery of any theft, damage, malfunction, tampering, or suspicious activity involving the Provider's equipment.

In the event of loss, theft, or damage to the Provider's equipment, the Client agrees to pay the full replacement cost at current market value, without depreciation, along with all associated costs, including, but not limited to, delivery charges, setup costs, downtime losses, rental substitution costs, lost use, administrative expenses, and any other consequential or incidental damages incurred by the Provider as a result. Such amounts shall be due and payable immediately upon demand and shall not be contingent upon insurance coverage, claim approval, or reimbursement by any third party.`
  },
  clientResponsibilities: {
    title: 'Section 7: Client Responsibilities',
    requiresInitial: false,
    content: `SECTION 7 – CLIENT RESPONSIBILITIES

7.1 - SERVICES, EMERGENCY AUTHORIZATION, NO ESTIMATE REQUIREMENT, AND PRICE LIST DISCLOSURE: The Client acknowledges and agrees that the services provided under this Contract are emergency and condition-driven in nature and must be initiated immediately to mitigate further damage, health risks, and secondary loss. Due to the unknown, concealed, and evolving conditions commonly present in water damage, mitigation, and remediation projects, the Provider is unable and not required to provide a detailed written estimate, fixed price, scope breakdown, materials list, specifications, or projected completion date prior to or during the performance of the Work.

The Client further acknowledges that Attachment A, if included with this Contract, contains a partial and non-exhaustive list of commonly used labor, service, and material line items and unit pricing. Attachment A is provided for general reference and transparency only and does not constitute an estimate, bid, guaranteed pricing, or a limitation on the scope, duration, or total cost of the Work. The absence or presence of any particular item in Attachment A does not determine whether such services, labor, equipment, or materials may be required or billed.

The Client understands that a more comprehensive price list covering additional services, labor categories, equipment, materials, and specialty items is maintained by the Provider and is available for review upon request. Unless expressly incorporated in writing, such price lists are not estimates and do not cap or fix the total charges for the Work.

The Client expressly authorizes the Provider to commence services immediately upon execution of this Contract and understands that all services are performed on a time-and-materials basis, based on labor, equipment usage, and services actually rendered as determined by field conditions. Final billing shall be based on the actual services rendered and documented by the Provider. The Client's payment obligations are not contingent upon insurance approval, claim determination, coverage decisions, reimbursement, or the existence of any estimate or preliminary pricing information.

7.2 - UNRELATED CONDITIONS/WORK: The Client acknowledges and agrees that the Provider is not responsible for detecting, addressing, correcting, or repairing conditions or areas unrelated to the event that necessitated the retainment of the Provider's services. The Client understands and agrees that the Client is personally responsible for any and all charges, costs, and deductibles not covered by insurance.

7.3 - SPECIAL, FRAGILE, AND VALUABLE PERSONAL PROPERTY: The Provider shall exercise reasonable care in the performance of the Work and shall take reasonable precautions, consistent with the circumstances, to avoid unnecessary damage to the Client's property. However, due to the emergency, invasive, and condition-driven nature of mitigation and remediation services, the Client acknowledges that incidental movement, vibration, exposure, or disturbance of personal property may be unavoidable.

The Client agrees to assume primary responsibility for the identification, removal, protection, and safekeeping of special, fragile, high-value, or irreplaceable items of personal property before, during, and after the performance of the Work. The Provider, its employees, subcontractors, agents, and representatives shall not be liable for incidental damage, loss, or disappearance of such items arising from the performance of the Work, except to the extent caused by the Provider's proven gross negligence or willful misconduct.

Special, fragile, or valuable items include, but are not limited to, jewelry, cash, firearms or weapons, medications, collectibles, documents, data storage devices, electronics, artwork, fine art, heirlooms, and items of significant sentimental or monetary value. The Client acknowledges that failure to remove or adequately secure such items may increase the risk of incidental damage during the Work.

7.4 - ENVIRONMENTAL CONDITIONS AND REASONABLE CARE: The Provider shall perform the Work using commercially reasonable methods and shall take reasonable precautions consistent with industry standards to minimize the spread or disturbance of contaminants during mitigation and remediation activities. The Client understands and agrees, however, that indoor environments naturally contain microorganisms, including mold and bacteria, and that the Provider does not represent or guarantee that the Property can, will, or has been rendered sterile or free of all contaminants.

The Client further acknowledges that mitigation and remediation activities may alter environmental conditions and that certain individuals, including infants, elderly persons, immunocompromised individuals, and those with respiratory conditions or chemical sensitivities, may be more susceptible to environmental exposure. While the Provider will take reasonable steps to reduce unnecessary risk, the Provider shall not be responsible for health effects, reactions, or environmental sensitivities that are beyond the Provider's control or that arise from conditions inherent to the Property.

Decisions regarding occupancy, re-occupancy, and exposure during or after the Work remain the Client's responsibility, and the Provider shall not be liable for adverse health effects or environmental reactions resulting from such decisions, except to the extent caused by the Provider's proven gross negligence or willful misconduct.

7.5 - PRE-EXISTING AND HAZARDOUS CONTAMINANTS: The Provider shall exercise reasonable care in the performance of the Work and shall take reasonable precautions to avoid unnecessary disturbance of known or visible hazardous materials when encountered. The Client acknowledges, however, that the Provider is not an environmental testing contractor, industrial hygienist, or licensed hazardous materials specialist and does not perform environmental testing, sampling, or laboratory analysis.

The Provider does not guarantee or warrant that it can identify, detect, quantify, or remove all pre-existing or concealed hazardous materials or contaminants. Such contaminants may include, but are not limited to, asbestos-containing materials, lead-based materials, mold, bacteria, radon, volatile organic compounds (VOCs), or other regulated or unregulated substances that may exist at the Property prior to or independent of the Work.

If hazardous or suspected hazardous materials are discovered or reasonably suspected, the Provider may suspend or modify the Work without breach and notify the Client so that appropriately licensed professionals can be engaged. The Provider shall not be liable for the presence, discovery, or effects of pre-existing contaminants, except to the extent caused by the Provider's proven gross negligence or willful misconduct.

7.6 - REQUIRED INFORMATION: The Client shall provide the Provider with a complete history of known information regarding relevant or potentially relevant facts about the structures erected upon and the conditions present in and around the Property. The Client is responsible for advising the Provider, in writing, of the known existence of hazardous substances, including, but not limited to: Chemicals, Lead, Asbestos, and Areas of possible danger.

7.7 - SITE ACCESS AND SECURITY: The Client agrees to provide access to the Property to the Provider, the Provider's employees, agents, subcontractors, and their vehicles and equipment as required to properly perform the services. The Client shall provide areas for the storage of equipment, materials, and debris. The Client shall provide all water, electricity, and other utilities necessary for the Provider to perform its services. The Client represents and warrants that it will take all reasonable measures necessary to secure all structures on the Property from unauthorized access.

7.8 - DUMPSTER PLACEMENT AND DRIVEWAY DAMAGE:

(a) Placement of Dumpster: The Client agrees to allow the Provider to place a dumpster on the driveway or street as necessary for the completion of the Work. The exact placement of the dumpster will be determined by the Provider in consideration of site access and project needs.

(b) Use of Dumpster: The dumpster is designated solely for the Provider's use in connection with the Work. The Client agrees not to dispose of household items, yard waste, or any other non-construction-related materials in the dumpster.

(c) Liability for Driveway Damage: The Provider shall not be held responsible or liable for any depressions, cracking, or other damage to the driveway or surrounding areas caused by the placement of the dumpster, the weight of the dumpster, or delivery/removal trucks.

(d) Third-Party Responsibility: Any damage caused by the dumpster delivery or removal process by a third-party service provider shall not be the responsibility of the Provider. The Client agrees to pursue any claims directly with the third-party service provider.`
  },
  limitationsLiability: {
    title: 'Section 8: Limitations & Liability',
    requiresInitial: false,
    content: `SECTION 8 – LIMITATIONS & LIABILITY

8.1 - GENERAL INDEMNIFICATION (THIRD-PARTY CLAIMS): The Client shall indemnify, defend, and hold harmless the Provider, its owners, officers, directors, employees, subcontractors, agents, representatives, successors, and assigns from and against any and all third-party claims, demands, actions, damages, losses, liabilities, costs, and expenses (including, but not limited to, attorneys' fees, expert witness fees, arbitration costs, and court costs) arising out of or relating to the services provided under this Agreement, except to the extent directly caused by the Provider's proven gross negligence or willful misconduct.

8.2 - CLIENT INDEMNIFICATION: The Client agrees to indemnify, defend, and hold harmless the Provider from and against any and all claims, damages, losses, liabilities, judgments, settlements, costs, and expenses (including, but not limited to, reasonable attorneys' fees) arising from or related to:

a) The Client's breach of this Contract;

b) The Client's negligent, reckless, or willful acts or omissions;

c) Third-party claims related to the Provider's authorized work at or in connection with the Property;

d) Any pre-existing conditions at the Property that were not disclosed to the Provider prior to commencement of the Work;

e) Any toxic or hazardous materials discovered, released, or disturbed as a result of the Provider's authorized work performed in areas affected by pre-existing conditions or conditions not disclosed to the Provider.

8.3 - DRIVEWAY, PROPERTY, AND THIRD-PARTY LIABILITY: The Provider shall not be liable for property damage or loss caused by subcontractors, suppliers, delivery companies, utility providers, or other third parties not under the direct control of the Provider. The Client agrees to pursue any claims directly against such responsible parties and to indemnify and hold the Provider harmless from any claims arising therefrom.

(a) Driveway and Property Damage: The Provider shall not be held responsible or liable for damage to the Client's driveway, sidewalks, hardscapes, or other property caused by normal project-related activities, except to the extent caused by the Provider's proven gross negligence or willful misconduct, including, but not limited to, the operation of equipment, vehicles, or the placement of materials.

(b) Specific Exclusions: The Provider shall not be responsible for damage resulting from normal project-related activities, including, but not limited to:
• Oil droplets or stains from vehicles or equipment;
• Hairline fractures, surface cracking, depressions, sinking, or crumbling in concrete or asphalt surfaces;
• Damage to landscaping, including plants, shrubs, trees, or lawns, caused by access, equipment placement, or project-related activities.

(c) Acknowledgment of Risks: The Client acknowledges that project-related activities may involve heavy equipment, machinery, and materials that could result in incidental damage to property or furnishings. The Provider will take reasonable care to minimize such damage; however, complete prevention cannot be guaranteed. The Client assumes the risk of incidental damage and agrees to indemnify and hold the Provider harmless for such damage, except to the extent caused by the Provider's proven gross negligence or willful misconduct.

8.4 - SCOPE OF WORK & SUPPLEMENTAL WORK: The Client agrees that all costs related to required supplements, additional work, or changes to the scope that are not covered by insurance are the Client's sole responsibility. Supplemental work includes, but is not limited to, betterment, Client-selected changes, concealed or newly discovered conditions, safety-related requirements, and the enforcement of applicable codes, ordinances, or directives by a municipality or building department.

The Client acknowledges that supplemental or additional work may be required due to evolving field conditions, concealed damage, regulatory requirements, or safety considerations, and that such work may be authorized verbally, in writing, or by the Client's conduct and billed accordingly.

8.5 - CUTTING, DEMOLITION, AND CRACKING:

(a) Risk of Settling and Cracking: The Client acknowledges that cutting, demolition, removal, or tear-out of walls, ceilings, flooring, tile, masonry, plaster, stucco, or similar materials may be necessary to perform the Work and may result in settling, cracking, separation, or cosmetic damage to adjacent or surrounding areas. Materials such as concrete, stucco, plaster, brick, and masonry are inherently brittle and are particularly prone to cracking or separation during or after such activities, even when work is competently performed.

(b) Provider's Efforts: The Provider shall exercise reasonable care and use commercially reasonable methods and industry best practices to minimize ancillary damage during demolition, cutting, or removal activities. However, the Provider cannot guarantee that incidental cracking, separation, or cosmetic damage will not occur due to the nature of the materials involved and existing structural conditions.

(c) Responsibility for Associated Repairs: If ancillary damage occurs as a result of demolition or cutting that was competently performed and reasonably necessary to complete the Work, the Client agrees that any resulting repairs, restoration, or cosmetic remediation shall constitute additional work and shall be the Client's sole financial responsibility. Such work may be authorized verbally, in writing, or by conduct and billed accordingly.

(d) Limitation of Liability: The Provider shall not be responsible for cracking, settling, or cosmetic damage to masonry or similar materials resulting from their inherent characteristics, pre-existing conditions, or normal project-related activities, except to the extent directly caused by the Provider's proven gross negligence or willful misconduct.

8.6 - SUBCONTRACTOR AUTHORIZATION: The Client authorizes the Provider to engage qualified subcontractors as reasonably necessary to perform portions of the Work. The Provider shall exercise reasonable care in the selection and coordination of such subcontractors. The Client acknowledges that subcontractors operate under their own supervision and control with respect to their specialized work, and that the Provider does not guarantee specific outcomes beyond the exercise of reasonable care.

The Client's payment obligations under this Contract remain owed to the Provider regardless of any subcontractor involvement, disputes, delays, or performance issues, and shall not be conditioned upon claims or disputes between the Provider and any subcontractor.

8.7 - EVIDENCE PRESERVATION DISCLAIMER: The Client acknowledges that the Provider is not responsible for identifying, preserving, cataloging, storing, or retaining any materials, debris, structural components, or personal property as potential evidence for litigation, insurance subrogation, claims investigations, or forensic analysis, unless a separate written agreement for evidence preservation services is executed prior to commencement of the Work.

Due to the emergency and time-sensitive nature of mitigation and remediation services, materials may be removed, altered, discarded, or destroyed in the ordinary course of performing the Work. The Client assumes full responsibility for directing any evidence preservation efforts, including coordination with insurers, investigators, attorneys, or third-party consultants.

The Provider shall be indemnified, defended, and held harmless from any claims alleging spoliation, loss, or destruction of evidence arising from the performance of the Work, except to the extent directly caused by the Provider's proven gross negligence or willful misconduct.

8.8 - CLIENT DUTY TO NOTIFY OF EVIDENCE REQUIREMENTS: The Client acknowledges and agrees that it is the Client's sole responsibility to notify the Provider in writing, prior to commencement of the Work, if any portion of the Property, debris, materials, or contents must be preserved for legal, forensic, insurance, or investigative purposes.

In the absence of such written notice, the Provider may proceed with the Work in accordance with industry standards and the requirements of this Contract. The Client agrees to indemnify and hold the Provider harmless from any claims, demands, or liabilities arising from the alleged failure to preserve evidence when no prior written notice was provided.`
  },
  legalTerms: {
    title: 'Section 9: Terms and Legal Conditions',
    requiresInitial: false,
    content: `SECTION 9 – TERMS AND LEGAL CONDITIONS

Notice: This Contract includes limitations of liability, limitations of remedies, and disclaimers of warranties.

9.1 - PERFORMANCE OF SERVICES AND PRE-EXISTING CONDITIONS: The Client acknowledges that the Provider's performance of services is inherently limited by the pre-existing conditions, construction characteristics, materials, assemblies, contents, and environmental conditions of the Property. The Provider shall exercise reasonable care in the performance of the Work but does not assume responsibility for the effects, manifestations, or remediation of pre-existing conditions, whether known or unknown, that existed prior to commencement of services.

The Client retains responsibility for all costs, impacts, and corrective measures associated with pre-existing conditions, including conditions affecting materials, fabrics, furnishings, finishes, substrates, or structural components. The Provider may, in its discretion, conduct limited pre-testing of materials for issues such as stain removability, colorfastness, shrinkage, fading, or adhesive breakdown; however, it is not always possible to identify such conditions in advance.

The Provider does not represent, warrant, or guarantee that cleaning of walls, ceilings, or other surfaces will restore original color or appearance, nor that all materials or furnishings are suitable for cleaning. The Provider shall use reasonable efforts to advise the Client of adverse effects that may be reasonably foreseeable, but the Client acknowledges that many adverse reactions may occur unpredictably due to hidden construction methods, manufacturing processes, or material composition.

The Client acknowledges that mold and microbial matter are commonly present in indoor environments and that complete eradication is not possible. The Provider does not represent, warrant, or guarantee the removal or eradication of mold or microorganisms.

The Client further acknowledges that the Provider does not represent, warrant, or guarantee the detection, diagnosis, or repair of the original cause of damage beyond the scope of the services expressly authorized under this Contract.

9.2 - WARRANTIES: The Provider expressly disclaims any and all representations, warranties, or guarantees, express or implied, including, but not limited to, any implied warranties of merchantability, fitness for a particular purpose, or any warranty arising from a course of dealing, usage of trade, or custom. This Contract is for the provision of services only and does not constitute a sale of goods.

9.3 - LIMITATION OF LIABILITY: To the fullest extent permitted by law, the Provider, its owners, officers, directors, employees, agents, subcontractors, and affiliates shall not be liable for any indirect, special, incidental, punitive, or consequential damages, penalties, or losses, including claims by third parties, regardless of the legal or equitable theory asserted, whether in contract, tort, negligence, warranty, statute, or otherwise, even if such damages were foreseeable or the Provider was advised of their possibility.

The Provider's maximum aggregate liability under this Contract shall not exceed the total amount actually paid by the Client for the services giving rise to the claim, or the amount of actual proven damages, whichever is less. These limitations shall not apply to damages directly caused by the Provider's proven gross negligence or willful misconduct.

The Client acknowledges that the remedies provided in this Contract are reasonable and proportionate to the nature of the services performed and the fees charged.

9.4 - ADDITIONAL AND REQUESTED WORK: Any labor, materials, services, or work requested by the Client or required due to changing field conditions, concealed damage, safety considerations, or regulatory requirements shall constitute additional work and result in additional charges. Such work may be authorized verbally, in writing, or by the Client's conduct and billed accordingly.

9.5 - NONPERFORMANCE, NOTICE, AND LIMITATION OF ACTIONS: Any claim by the Client for faulty performance, nonperformance, or breach of this Contract shall be made in writing to the Provider within sixty (60) days after completion of the services, but only for matters that the Provider could reasonably have corrected if timely notified. Failure to provide such written notice shall constitute a waiver of the claim.

No action, regardless of form, arising out of or relating to this Contract may be brought more than one (1) year after the Client knew or reasonably should have known of the facts giving rise to the claim.

9.6 - ADMINISTRATIVE WORK AND CONTINUING OBLIGATIONS: The Client acknowledges that, following completion of physical work on the Property, the Provider may be required to provide additional documentation—including but not limited to photos, daily logs, equipment usage records, and timesheets—to support the insurance claim review process. The Client agrees that these post-completion administrative tasks are performed in furtherance of the original scope of work and in response to ongoing insurance carrier requirements. To the extent permitted by law, the parties agree that any follow-up services—whether administrative or physical—performed in connection with this Project shall be considered part of the original contract obligations. The Provider also reserves the right to return to the Property to perform reasonable and necessary follow-up work, and the Client agrees to provide access for this purpose upon request.

9.7 - HEADINGS: The headings contained in this Contract are for convenience of reference only, form no part of this Contract, and have no force or effect whatsoever.

9.8 - FORCE MAJEURE: With respect to the performance obligations of this Contract, where there occurs any prevention, delay, or stoppage due to strikes, lockouts, labor disputes, acts of God, inability to obtain services, labor, or materials, or reasonable substitutes therefor, governmental actions, civil commotions, fire, flood, civil commotion, riot, war (declared and undeclared), revolution, embargoes, public health emergencies, pandemics, government-ordered shutdowns, supply chain disruptions, labor shortages, and other causes beyond the reasonable control of Provider (a Force Majeure event), Provider's failure to perform shall be excused for the duration of such event and for such a time thereafter as is reasonable to enable the parties to resume performance under this Contract.

9.9 - NO WAIVER: A failure of either party to exercise any right provided for herein shall not be deemed to be a waiver of any right hereunder.

9.10 - SEVERABILITY CLAUSE: If any provision of this Contract is found to be ineffective, unenforceable, or illegal for any reason under present or future laws, such provision shall be fully severable, and this Contract shall be construed and enforced as if such provision never comprised a part of this Contract. The remaining provisions of this Contract shall remain in full force and effect and shall not be affected by the ineffective, unenforceable, or illegal provision or by its severance from this Contract.

9.11 - MODIFICATION AND WAIVERS: No modification, termination, or attempted waiver of this Contract shall be valid unless in writing and signed by the party against whom the same is sought to be enforced.

9.12 - MERGER CLAUSE: This Contract contains the final, complete, and exclusive statement of the Agreement between the Provider and the Client with respect to the transactions contemplated herein. All other prior or contemporaneous oral communications (including, for the avoidance of doubt, any communications in connection with the preparation of this Contract) and all prior written or oral communications and agreements with respect to the subject matter hereof are merged herein and superseded into this Contract. For the avoidance of doubt, it is the parties' intent that no term contained in or omitted from any prior written draft of this Contract or other communication be used as extrinsic evidence under any state law or judicial interpretation to determine the parties' intent hereto.

9.13 - NO REPRESENTATIONS: The Client represents that he/she has had the opportunity to consult with an attorney and has carefully read and understands the scope and effect of the provisions of this Contract. In agreeing to this Contract, the Client has not relied upon any representations or statements made by the Provider or its representatives, which are not explicitly outlined in this Contract.

9.14 - ASSIGNMENT OF RIGHTS: This Contract and the rights and obligations of the parties herein shall inure to the benefit of, and be binding upon their respective successors, assigns, and legal representatives.

9.15 - PREEXISTING CONTAMINATIONS: Notwithstanding any other provision of this Contract, the Provider shall not be responsible for any Toxic Materials that were on the Property previously. The Client agrees that (i) the Provider shall not be responsible for any such Toxic Materials regardless of, boundaries or level of contamination, or the cost of clean-up, is increased as a result of mitigation and Clean-up activities that the Provider may take; and (ii) the Client shall be responsible for any Toxic Material that is discovered, released or disturbed as the result of any excavation or other subsurface activity made or undertaken on the Property by the Provider or its representatives.

9.16 - SUBROGATION AND THIRD-PARTY CLAIMS: Client agrees to defend, indemnify, and hold Provider harmless from and against any claims, demands, damages, liabilities, costs, or expenses (including but not limited to attorneys' fees) asserted by insurers, subrogating parties, or third parties arising out of or relating to alleged failure to preserve evidence, unless such claims are the direct result of Provider's gross negligence or intentional misconduct.

9.17 - SCOPE CLARIFICATION: Provider's role is limited strictly to mitigation and restoration services as defined in this Agreement. Provider is not, and shall not be deemed, a forensic investigator, fire origin analyst, public adjuster, or evidence custodian. Any such services must be contracted separately with appropriately qualified professionals.

It is further presumed by Provider that once its services have been retained, the Client or their authorized agent has already taken appropriate steps to preserve any evidence their insurer requires them to preserve. The nature of the emergency cleanup and mitigation services provided does not allow the Provider sufficient time or resources to identify, collect, or safeguard items that may later be alleged to have evidentiary value. Accordingly, Provider shall not be responsible for the preservation of such evidence unless a separate written agreement has been executed to that effect.

9.18 - ADVERTISING AND MARKETING DISCLAIMER: Provider may engage third-party marketing firms, advertising agencies, or lead generation services to promote its business. The Client acknowledges that any claims, representations, statements, or guarantees made in such advertisements, online content, promotional materials, or marketing communications—whether written, verbal, or digital—are not binding upon Provider and shall not be relied upon by Client. Only the terms, conditions, representations, and warranties expressly set forth in this Contract shall govern the relationship between the parties. To the extent any advertising claim conflicts with this Contract, the terms of this Contract shall control.`
  },
  overheadProfit: {
    title: 'Section 10: Overhead and Profit (15% Overhead / 20% Profit)',
    requiresInitial: false,
    content: `SECTION 10 – OVERHEAD AND PROFIT (15% OVERHEAD / 20% PROFIT)

The Client acknowledges and agrees that overhead and profit are fundamental, non-optional components of the Provider's cost structure and pricing for professional mitigation, restoration, and construction-related services. Overhead represents indirect and fixed costs required to operate a viable business and to perform the Work, including, but not limited to, general business overhead, job-related overhead, and job-personnel overhead. Profit represents reasonable compensation for business risk, project responsibility, capital exposure, and the reinvestment necessary to sustain operations.

The Client further acknowledges that published unit prices, estimating platforms, pricing databases, and software-generated outputs are designed to reflect direct costs only and do not include general overhead, job-related overhead, or profit. The determination, calculation, and application of overhead and profit are based on the conditions, complexity, coordination requirements, management demands, operational burdens, and risk profile of the specific Project and are left to the professional discretion of the service provider performing the Work.

Overhead and profit are inherent to the Provider's business operations and do not fluctuate based on job simplicity, duration, scope segmentation, trade count, or insurer characterization of the Work. Overhead and profit are not dependent upon the number of trades involved, the classification of services as mitigation, restoration, or reconstruction, the use of subcontractors, or the placement, formatting, or segregation of line items within any estimate, invoice, or supporting documentation. No failure to itemize, label, or separately display overhead and profit shall constitute a waiver, reduction, or limitation of entitlement.

The Client expressly agrees that overhead and profit are agreed-upon pricing terms of this Contract, reflect the Provider's customary and reasonable rates, and are not subject to post-performance re-evaluation, negotiation, or adjustment based on insurance company guidelines, internal carrier policies, estimating software defaults, third-party review criteria, or insurer valuation methodologies. Overhead and profit are not contingent upon insurer approval, reimbursement, or coverage determinations.

The Provider's invoices reflect services rendered and costs incurred and are statements of amounts due under this Contract, not estimates, bids, or negotiable pricing proposals. The overhead and profit structure applicable to the Work is established at the time of contract formation and shall not be modified by post-performance insurer review, partial payment, conditional payment, or unilateral payment reduction. Acceptance or issuance of partial payment by the Client or any insurer shall not constitute an accord and satisfaction, waiver, or modification of the Provider's entitlement to overhead and profit.

Accordingly, the Provider shall be entitled to an addition of fifteen percent (15%) overhead and twenty percent (20%) profit for subcontracted work and for applicable labor, equipment, operating, transportation, supervision, and project coordination costs as part of the total contract price for the Work.

The Client acknowledges that the Provider is a private, independent business entity and a licensed contractor operating outside of any insurance company vendor, preferred provider, or managed repair program. The Provider is not a party to, nor bound by, any insurance company's internal policies, claim guidelines, vendor agreements, network pricing structures, or payment practices applicable to in-network or preferred vendors. The pricing, overhead, and profit charged by the Provider are determined solely by this Contract and the Provider's independent business operations, and are not governed or limited by how any insurer compensates its internal staff, affiliated vendors, or program participants.

The Client acknowledges that overhead and profit are embedded components of the Provider's service pricing and are owed regardless of how such amounts are itemized, reviewed, valued, allocated, or characterized by any insurance carrier, third-party reviewer, or other non-party to this Contract. The Client further agrees that no comparison to insurance company in-network, preferred vendor, or program pricing shall be used to challenge, reduce, or dispute the amounts owed under this Contract. Any dispute regarding insurance coverage or reimbursement of overhead and profit is a matter solely between the Client and the insurer and does not affect the Client's obligation to pay all amounts due under this Contract.`
  },
  finalProtections: {
    title: 'Section 11: Final Legal Protections',
    requiresInitial: false,
    content: `SECTION 11 – FINAL LEGAL PROTECTIONS

11.1 - INSURANCE ASSIGNMENT OF BENEFITS: The Client hereby authorizes their insurance company to pay the Provider directly for services rendered. As the Owner or Authorized agent of the property owner, it is understood that the Client has authorized the work and accepts responsibility to the Provider for services rendered. It is fully understood and agreed that the Owner/Agent is personally responsible for the total costs and charges for the work, including but not limited to any deductible, depreciation, or holdback not covered by insurance. If the Client's insurance carrier pays the Provider directly, any charges for services not reimbursed by the insurance carrier are the Client's sole responsibility and must be paid upon completion of work. The Provider must approve any exceptions in writing, and a finance charge of 1.5% per month (minimum of $1.00) will be applied to any unpaid balance after thirty (30) days.

11.2 - INVOICING: Provider shall bill all charges and costs directly to the Client (insured), and, as a courtesy only, a copy of these documents will be e-mailed to the insurance carrier. It is fully understood and agreed that Provider is hired directly by the Client and is in no way required to communicate, deal, negotiate with, or provide any internal notes, documents, or images to the Client's Insurance company, or any other Third Party on the Client's behalf and that all charges and costs are due upon completion of work.

11.3 - THIRD PARTIES: The Client understands and agrees that the Provider is (i) not a public adjusting firm, (ii) does not provide adjusting services, and (iii) will not negotiate with their insurance company on their behalf. If such services are required due to the complex nature of a claim, the Client should retain the services of a licensed and qualified public adjusting firm to negotiate with their insurance carrier on their behalf. At no time will the Provider accept a 'Third Party Assessment' of the loss post-mitigation. That includes but is not limited to any insurance company 'Third Party Vendor' or 'Third Party Estimate' for work performed by the Provider or its employees, subcontractors, and agents.

11.4 - PROOF OF LOSS: Should evidence of loss be mandated by an insurer or any other external party, it is incumbent upon the Client to retain and manage pertinent records. As a part of standard procedure and to track progress, the Provider's employees, staff, and agents compile daily photographs, notes, background measurements, and environmental readings and maintain a record of services rendered and tasks accomplished. These documents facilitate the monitoring of the drying process, aiding in the assessment of whether supplementary equipment or services are needed and when the Dry-Standard has been attained. The Provider neither has an obligation nor assents to disclose any of its internal records to the Client or any third party. As a discretionary courtesy, the Provider may choose to provide certain relevant project documents to assist clients in the claims process or when seeking reimbursements. This voluntary action does not contravene the terms of this Contract and shall not be interpreted as a pattern of behavior. Provider reserves the right to disclose, at its sole discretion, all, some, or none of its internal documents.

Dry logs and field documentation constitute contemporaneous business records maintained in the ordinary course of operations and reflect objective measurements used to determine drying progress and completion.

11.5 - ATTORNEYS' FEES: Should the need arise for legal action to collect monies due under this Contract, or should the matter be turned over to collections, Provider shall be entitled, in addition to other amounts owed by the Client, to reasonable legal fees and costs of any such collection attempts, and a finance charge of 1.5% per month (minimum of $1.00). This attorney fee provision shall not be effective or enforceable in jurisdictions where attorney fee provisions are made reciprocal or invalid by operation of law.

11.6 - MECHANIC'S LIEN: The Client expressly consents to the filing of a mechanic's lien by Provider, or its successors and assigns, against the Property for any labor, materials, or services provided pursuant to this Contract.

11.7 - GOVERNING LAW: This Contract and the rights and obligations of the parties under it are governed by and interpreted in accordance with the laws of the Commonwealth of Virginia (without regard to principles of conflicts of law). The Client consents to the jurisdiction of the Commonwealth of Virginia and the Venue of Fairfax County, Virginia, for any litigation regarding this Contract.

11.8 - WAIVER OF RIGHT TO JURY TRIAL: Both Provider and Client waive their respective rights to a trial by jury with respect to any and all claims or causes of action (including but not limited to counterclaims) related to or arising out of or in any way connected to this Contract and agree that any claim or cause of action will be tried by a court trial without a jury.

11.9 - ELECTRONIC SIGNATURES:

(a) Acceptance of Electronic Signatures: The Parties agree that this Contract may be executed and transacted using electronic signatures. Electronic signatures shall carry the same legal force and effect as handwritten signatures in accordance with applicable laws.

(b) Validity of Electronic Copies: Photocopies, scanned copies, or electronic versions of this Contract, including but not limited to those signed electronically, shall be deemed valid and enforceable as original documents.

(c) Authorization: By signing this Contract electronically, the Parties acknowledge that they have reviewed, understood, and accepted the terms and conditions contained herein.

(d) Consent to Electronic Transactions: The Client consents to the use of electronic means for the execution, delivery, and management of this Contract, as well as any related documents or communications.`
  },
  mechanicsLien: {
    title: 'Section 12: Mechanic\'s Lien Rights and Insurance Delays',
    requiresInitial: false,
    content: `SECTION 12 – MECHANIC'S LIEN RIGHTS AND INSURANCE DELAYS

12.1 - NOTICE TO CLIENT Provider provides emergency services immediately—without requiring any deposit or upfront payment from the Client. To protect its right to be paid for these services, especially in cases where insurance payments are delayed, Provider may file a Mechanic's Lien against the property. This standard legal protection does not reflect negatively on the Client.

12.2 - CONSENT TO LIEN FILING: The Client hereby expressly consents to the filing of a Mechanic's Lien by Provider, its successors, or assigns, against the real property where the services described in this Contract are performed ("the Property"). This consent includes any labor, materials, or services provided pursuant to this Contract in accordance with Virginia Code §43-1 et seq.

12.3 - EMERGENCY SERVICES WITHOUT UPFRONT PAYMENT: The Client acknowledges that Provider is providing emergency mitigation and restoration services promptly and in good faith without requiring any deposit or advance payment. In doing so, Provider assumes significant financial risk and must take reasonable steps to secure its right to be compensated for services rendered.

12.4 - PRESERVATION OF LIEN RIGHTS: To protect its legal and financial interests, Provider reserves the right to file a Mechanic's Lien at any time permitted under Virginia Code §43-4. Such a filing may occur before full or partial payment has been received and may be necessary even if an insurance claim is still under review or pending disbursement.

12.5 - INSURANCE PAYMENT DELAYS: The Client understands that, due to the nature of insurance claims and the emergency work provided, payments from insurance carriers may take several months after work is completed. These delays shall not restrict Provider's right to file a lien within the statutory time frames required by law.

12.6 - NO WAIVER OF RIGHTS: Provider's decision to proceed with services without a deposit, or to await insurance reimbursement, shall not be construed as a waiver or forfeiture of its rights to file a Mechanic's Lien or seek payment. Any delay in lien filing or enforcement does not constitute a waiver of rights.

12.7 - CLIENT COOPERATION: The Client agrees to cooperate fully with any documentation, signatures, or information reasonably required by Provider to assist in timely lien filings or insurance claim support. The filing of a lien is a legal safeguard and does not imply wrongdoing or lack of intent to pay by the Client.`
  },
  insuranceDisputeAddendum: {
    title: 'Section 13: Insurance Dispute Protection Addendum',
    requiresInitial: false,
    content: `SECTION 13 – INSURANCE DISPUTE PROTECTION ADDENDUM

This Contract is intended to protect both the Provider and the Client by clarifying expectations related to insurance involvement, billing practices, scope of work, and documentation.

13.1 - DETERMINATION OF SCOPE AND METHODOLOGY: The Client acknowledges and agrees that the Provider shall determine the appropriate scope of work, procedures, and mitigation techniques necessary to restore the Property in accordance with industry standards, including but not limited to IICRC S500 guidelines. The Provider shall not be required to revise or alter its scope of work based on third-party opinions or post-mitigation evaluations conducted by insurance adjusters, consultants, or claim reviewers.

13.2 - ONSITE DOCUMENTATION AS PROOF OF WORK: The Provider maintains detailed records of services rendered through field documentation, including but not limited to photos, drying logs, equipment tracking, moisture readings, and daily notes. This documentation shall be considered sufficient proof of the work performed and may be used to justify charges to the Client or to any insurance representative. The Client acknowledges that the scope and cost of services are based on these observed and recorded field conditions.

13.3 - CHARGES BASED ON ACTUAL SERVICES RENDERED: The Client agrees that all invoicing shall reflect the actual labor, equipment, and materials provided, as well as the conditions encountered during mitigation. The Provider is not obligated to reduce or revise pricing to align with insurance carrier guidelines, preferred pricing platforms, or third-party estimates that do not reflect onsite realities. Charges shall be based on industry-standard pricing tools, adjusted for actual scope and conditions.

13.4 - WATER LOSS CLASSIFICATION AUTHORITY: Provider uses its professional expertise, firsthand site inspection, and contemporaneous field documentation to determine the appropriate Category and Class of water loss in accordance with the IICRC S500 Standard, including, but not limited to, Section 10.5. Classification is based on actual onsite conditions and may include, but is not limited to, indicators such as odor, discoloration, structural degradation, visible or suspected microbial growth, exposure time, water migration pathways, and contact with porous or semi-porous materials.

Provider also considers site and operational conditions that materially affect loss severity and drying feasibility, including, but not limited to, property layout and compartmentalization, building materials, the quantity and type of contents or furniture, airflow restrictions, ventilation characteristics, HVAC status, temperature and humidity conditions, accessibility constraints, and the ability to establish and maintain effective environmental control. These factors may affect both Category determination and Class determination, including, but not limited to, the scope of necessary demolition, cleaning, containment, personal protective equipment (PPE), and antimicrobial measures.

The Client agrees that water loss categorization is not determined solely by the original source of the water, and that a loss may escalate from Category 1 due to time, contamination, amplification, structural migration, contents involvement, or contact with unsanitary materials and surfaces. The Client further agrees that classification does not require laboratory testing or water sampling where field indicators, material conditions, or environmental constraints reasonably support a higher Category or Class under industry standards. Provider may apply conservative protective measures when conditions are uncertain or when failure to do so could increase health risk, secondary damage, or overall project cost.

Accordingly, charges for demolition, containment, engineering controls, personal protective equipment (PPE), cleaning, antimicrobial application, enhanced drying methods, equipment utilization, and related labor may reflect a Category 2 or Category 3 loss and the corresponding Class of loss when supported by onsite conditions, drying limitations, or risk management requirements. Provider's determinations are based on direct site observation and documented conditions and are not superseded by remote assessments, desk reviews, or assumptions made without inspection of the loss environment.

13.5 - EQUIPMENT USE AND DEPLOYMENT DURATION: Equipment rental durations and quantities are based on the conditions found at the Property and the need to achieve proper drying per IICRC standards. Charges will continue until the equipment is removed by the Provider. Insurance-related delays in equipment removal or job closure do not alter rental durations or charges.

13.6 - ADJUSTER COMMUNICATIONS AND LIMITATIONS: The Provider is not a party to the Client's insurance contract and is not obligated to comply with requests or demands from adjusters or third-party reviewers. The Provider will not revise invoices, scope, or documentation solely to satisfy an insurance carrier's internal review process. In such cases, additional administrative charges may apply as outlined elsewhere in this Contract.

At its sole discretion and as a courtesy to the Client, the Provider may choose to revise an invoice or supply additional documentation from time to time. However, such accommodations are voluntary and shall not be interpreted as a course of conduct, obligation, or waiver of the Provider's rights under this Contract.`
  }
};

// Price list data (Updated from VAAR8X_AUG25 price list)
// Note: Labor rates are shown in a separate table above
const PRICE_LIST = [
  // I. LABOR & SUPERVISION
  { category: 'Labor & Supervision', service: 'Water Mitigation Technician – Category 1', code: '-', unit: 'Per Hour', price: '$75.00' },
  { category: 'Labor & Supervision', service: 'Water Mitigation Technician – Category 2', code: '-', unit: 'Per Hour', price: '$95.00' },
  { category: 'Labor & Supervision', service: 'Water Mitigation Technician – Category 3', code: '-', unit: 'Per Hour', price: '$128.00' },
  { category: 'Labor & Supervision', service: 'Certified Water Restoration Technician – Category 1', code: '-', unit: 'Per Hour', price: '$85.00' },
  { category: 'Labor & Supervision', service: 'Certified Water Restoration Technician – Category 2', code: '-', unit: 'Per Hour', price: '$105.00' },
  { category: 'Labor & Supervision', service: 'Certified Water Restoration Technician – Category 3', code: '-', unit: 'Per Hour', price: '$138.00' },
  { category: 'Labor & Supervision', service: 'Supervisor / Lead Technician – Category 1', code: '-', unit: 'Per Hour', price: '$95.00' },
  { category: 'Labor & Supervision', service: 'Supervisor / Lead Technician – Category 2', code: '-', unit: 'Per Hour', price: '$115.00' },
  { category: 'Labor & Supervision', service: 'Supervisor / Lead Technician – Category 3', code: '-', unit: 'Per Hour', price: '$145.00' },
  { category: 'Labor & Supervision', service: 'Project Management / On-Site Supervision – Business Hours', code: '-', unit: 'Per Hour', price: '$125.00–$145.00' },
  { category: 'Labor & Supervision', service: 'Project Management / On-Site Supervision – After Hours', code: '-', unit: 'Per Hour', price: '$145.00–$165.00' },
  { category: 'Labor & Supervision', service: 'Content Manipulation – Business Hours', code: '-', unit: 'Per Hour', price: '$88.00–$110.00' },
  { category: 'Labor & Supervision', service: 'Content Manipulation – After Hours', code: 'CONLABA', unit: 'Per Hour', price: '$128.00–$145.00' },
  { category: 'Labor & Supervision', service: 'Emergency Service Call / Mobilization', code: '-', unit: 'Per Occurrence', price: '$350.00–$2,500.00' },

  // II. EQUIPMENT RENTAL
  { category: 'Equipment Rental', service: 'Air Mover – Axial Type (per 24-hour period)', code: 'WTRDRY+', unit: 'Per Day', price: '$44.00–$58.00' },
    { category: 'Equipment Rental', service: 'Dehumidifier – LGR (per 24-hour period)', code: 'WTRDHMD', unit: 'Per Day', price: '$204.00–$240.00' },
    { category: 'Equipment Rental', service: 'Negative Air Fan / Air Scrubber (per 24-hour period)', code: 'WTRNAFAN', unit: 'Per Day', price: '$170.00–$220.00' },
  { category: 'Equipment Rental', service: 'HEPA Air Scrubber (per 24-hour period)', code: '-', unit: 'Per Day', price: '$180.00–$240.00' },
  { category: 'Equipment Rental', service: 'Heat Drying / Thermal Air Mover (per day)', code: 'WTRHTAM', unit: 'Per Day', price: '$180.00–$220.00' },
  { category: 'Equipment Rental', service: 'Wall Cavity Drying Equipment (per day)', code: '-', unit: 'Per Day', price: '$165.00–$210.00' },
    { category: 'Equipment Rental', service: 'Hydroxyl Generator – Odor Counteractant (per 24-hour period)', code: '-', unit: 'Per Day', price: '$160.00–$220.00' },

  // III. EQUIPMENT SETUP, MONITORING & DECONTAMINATION
  { category: 'Equipment Services', service: 'Equipment Setup, Take Down & Monitoring – Business Hours', code: 'WTREQ', unit: 'Per Hour', price: '$128.00' },
  { category: 'Equipment Services', service: 'Equipment Setup, Take Down & Monitoring – After Hours', code: 'WTREQA', unit: 'Per Hour', price: '$165.00' },
  { category: 'Equipment Services', service: 'Daily Equipment Monitoring Visit – Business Hours', code: '-', unit: 'Per Hour', price: '$145.00' },
  { category: 'Equipment Services', service: 'Daily Equipment Monitoring Visit – After Hours', code: '-', unit: 'Per Hour', price: '$175.00' },
      { category: 'Equipment Services', service: 'Equipment Decontamination – Standard', code: '-', unit: 'Per Unit', price: '$65.00' },
  { category: 'Equipment Services', service: 'Equipment Decontamination – Heavy Contamination', code: '-', unit: 'Per Unit', price: '$125.00' },
  { category: 'Equipment Services', service: 'Clean & Restock Equipment', code: '-', unit: 'Per Piece', price: '$60.00–$95.00' },

  // IV. FILTERS
  { category: 'Filters', service: 'Add for HEPA Filter – Negative Air Machine', code: '-', unit: 'Per Filter', price: '$195.00–$240.00' },
  { category: 'Filters', service: 'Add for HEPA Filter – Canister / Backpack Vacuum', code: '-', unit: 'Per Filter', price: '$85.00–$110.00' },
  { category: 'Filters', service: 'Carbon Vapor Filter – Air Scrubber', code: 'WTRFLVAP', unit: 'Per Filter', price: '$250.00–$325.00' },
  { category: 'Filters', service: 'HEPA Air Scrubber Filter', code: 'WTRFHEPA', unit: 'Per Filter', price: '$200.00–$250.00' },

  // V. WATER EXTRACTION & DRYING
  { category: 'Water Extraction', service: 'Water Extraction – Carpeted Floor – Category 1', code: '-', unit: 'Per SF', price: '$0.25–$0.75' },
  { category: 'Water Extraction', service: 'Water Extraction – Carpeted Floor – Category 2', code: '-', unit: 'Per SF', price: '$1.25–$2.75' },
  { category: 'Water Extraction', service: 'Water Extraction – Carpeted Floor – Category 3', code: '-', unit: 'Per SF', price: '$1.75–$3.75' },
  { category: 'Water Extraction', service: 'Water Extraction – Hard Surface Floor – Category 1', code: '-', unit: 'Per SF', price: '$0.25–$0.50' },
  { category: 'Water Extraction', service: 'Water Extraction – Hard Surface Floor – Category 2', code: 'WTREXTHGA', unit: 'Per SF', price: '$1.25–$2.50' },
  { category: 'Water Extraction', service: 'Water Extraction – Hard Surface Floor – Category 3', code: '-', unit: 'Per SF', price: '$1.75–$3.25' },
  { category: 'Water Extraction', service: 'Lift Carpet for Drying', code: 'WTRLIFT', unit: 'Per SF', price: '$0.75–$1.25' },
  { category: 'Water Extraction', service: 'Wall Cavity Drying – Injection Type', code: '-', unit: 'Per Day', price: '$165.00–$210.00' },
  { category: 'Water Extraction', service: 'Drill Holes for Wall Cavity Drying', code: 'WTRWALLH', unit: 'Per Unit', price: '$3.50–$6.00' },
  { category: 'Water Extraction', service: 'Submersible Pump with Hose', code: 'WTREXTWPC', unit: 'Per Hour', price: '$85.00–$110.00' },
  { category: 'Water Extraction', service: 'Specialty Pumping / Extraction (truck-mounted or extended)', code: '-', unit: 'Per Hour', price: '$175.00–$250.00' },

  // VI. DEMOLITION & REMOVAL
  { category: 'Demolition', service: 'Tear Out Wet Drywall – Up to 2\' Flood Cut', code: 'WTRDRYW', unit: 'Per LF', price: '$5.00–$7.50' },
  { category: 'Demolition', service: 'Tear Out Wet Drywall – Full Removal', code: '-', unit: 'Per SF', price: '$1.25–$1.75' },
  { category: 'Demolition', service: 'Tear Out Non-Salvageable Carpet & Bag', code: 'WTRFCC', unit: 'Per SF', price: '$0.75–$1.10' },
  { category: 'Demolition', service: 'Tear Out Wet Carpet Pad & Bag', code: 'WTRPAD', unit: 'Per SF', price: '$0.75–$1.10' },
  { category: 'Demolition', service: 'Tear Out Tackless Strip', code: 'WTRTACK', unit: 'Per LF', price: '$1.25–$2.00' },
  { category: 'Demolition', service: 'Tear Out Non-Salvageable Hardwood / Engineered Wood Floor', code: '-', unit: 'Per SF', price: '$4.75–$6.50' },
  { category: 'Demolition', service: 'Tear Out Non-Salvageable Tile Floor', code: '-', unit: 'Per SF', price: '$3.75–$5.25' },
  { category: 'Demolition', service: 'Add-on: Tear Out Mortar Bed for Tile', code: '-', unit: 'Per SF', price: '$2.25–$3.25' },
  { category: 'Demolition', service: 'Tear Out Wet Insulation & Bag', code: 'WTRINS', unit: 'Per SF', price: '$0.95–$1.50' },
  { category: 'Demolition', service: 'Baseboard / Trim Removal', code: 'WTRBASE', unit: 'Per LF', price: '$0.75–$1.50' },
  { category: 'Demolition', service: 'Tear Out Trim – Crown Molding', code: '-', unit: 'Per LF', price: '$0.75–$1.25' },
  { category: 'Demolition', service: 'Tear Out Trim – Quarter Round', code: '-', unit: 'Per LF', price: '$0.75–$1.25' },
  { category: 'Demolition', service: 'Tear Out Wet Paneling', code: '-', unit: 'Per SF', price: '$0.83–$1.25' },
  { category: 'Demolition', service: 'Remove Blown-in Insulation – R38', code: '-', unit: 'Per SF', price: '$1.28–$1.75' },
  { category: 'Demolition', service: 'Remove Wet Suspended Ceiling Tile', code: '-', unit: 'Per SF', price: '$0.58–$0.95' },

  // VII. CABINETS, COUNTERTOPS & FIXTURES
  { category: 'Cabinets & Fixtures', service: 'Cabinet – Full Height Unit – Detach', code: '-', unit: 'Per LF', price: '$28.64–$38.00' },
  { category: 'Cabinets & Fixtures', service: 'Cabinet – Lower (base) Unit – Detach', code: 'WTRCABLWD', unit: 'Per LF', price: '$28.75–$38.00' },
  { category: 'Cabinets & Fixtures', service: 'Cabinet – Upper (wall) Unit – Detach', code: 'WTRCABUPD', unit: 'Per LF', price: '$24.59–$32.00' },
  { category: 'Cabinets & Fixtures', service: 'Cabinet – Vanity and Countertop – Detach', code: 'WTRCABVND', unit: 'Per LF', price: '$36.06–$48.00' },
  { category: 'Cabinets & Fixtures', service: 'Countertop – Plastic Laminate – Detach', code: '-', unit: 'Per LF', price: '$9.36–$15.00' },
  { category: 'Cabinets & Fixtures', service: 'Countertop – Solid Surface/Granite – Detach', code: '-', unit: 'Per SF', price: '$12.47–$18.00' },
  { category: 'Cabinets & Fixtures', service: 'Dishwasher – Detach', code: 'WTRDWD', unit: 'Per Unit', price: '$79.48–$110.00' },
  { category: 'Cabinets & Fixtures', service: 'Garbage Disposal – Detach', code: '-', unit: 'Per Unit', price: '$56.85–$75.00' },
  { category: 'Cabinets & Fixtures', service: 'P-trap Assembly – Detach & Reset', code: '-', unit: 'Per Unit', price: '$95.18–$125.00' },
  { category: 'Cabinets & Fixtures', service: 'Pedestal Sink – Detach', code: 'WTRSNKPD', unit: 'Per Unit', price: '$51.35–$75.00' },
  { category: 'Cabinets & Fixtures', service: 'Toilet – Detach', code: 'WTRTLTD', unit: 'Per Unit', price: '$98.57–$125.00' },
  { category: 'Cabinets & Fixtures', service: 'Detach & Reset Built-in Double Oven', code: '-', unit: 'Per Unit', price: '$316.62–$400.00' },
  { category: 'Cabinets & Fixtures', service: 'Range – Drop In – Detach & Reset', code: '-', unit: 'Per Unit', price: '$211.19–$275.00' },
  { category: 'Cabinets & Fixtures', service: 'Refrigerator – Detach', code: 'WTRRFD', unit: 'Per Unit', price: '$40.88–$65.00' },
  { category: 'Cabinets & Fixtures', service: 'Interior Door – Detach & Reset', code: '-', unit: 'Per Unit', price: '$80.75–$110.00' },
  { category: 'Cabinets & Fixtures', service: 'Remove Light Fixture', code: '-', unit: 'Per Unit', price: '$9.92–$18.00' },
  { category: 'Cabinets & Fixtures', service: 'Remove Outlet', code: '-', unit: 'Per Unit', price: '$5.99–$12.00' },
  { category: 'Cabinets & Fixtures', service: 'Remove Switch', code: '-', unit: 'Per Unit', price: '$5.99–$12.00' },

  // VIII. PPE, CONTAINMENT & PROTECTION
  { category: 'PPE & Containment', service: 'Add for PPE – Category 2 Conditions', code: '-', unit: 'Per Tech/Day', price: '$75.00–$115.00' },
  { category: 'PPE & Containment', service: 'Add for PPE – Category 3 Conditions', code: '-', unit: 'Per Tech/Day', price: '$115.00–$175.00' },
  { category: 'PPE & Containment', service: 'Disposable Protective Suit – Heavy Duty', code: 'WTRPPE+', unit: 'Per Unit', price: '$35.00–$55.00' },
  { category: 'PPE & Containment', service: 'Respirator – Half Face (per day)', code: '-', unit: 'Per Day', price: '$1.50–$3.00' },
  { category: 'PPE & Containment', service: 'Respirator – Full Face (per day)', code: '-', unit: 'Per Day', price: '$6.50–$10.00' },
  { category: 'PPE & Containment', service: 'Respirator Cartridge – HEPA / Vapor / Gas', code: '-', unit: 'Per Pair', price: '$30.00–$45.00' },
  { category: 'PPE & Containment', service: 'Containment Barrier / Airlock / Decon Chamber', code: 'WTRBARR', unit: 'Per SF', price: '$1.10–$1.50' },
  { category: 'PPE & Containment', service: 'Containment Barrier – Tension Post', code: 'WTRBARRP', unit: 'Per Day', price: '$3.35–$6.00' },
  { category: 'PPE & Containment', service: 'Peel & Seal Zipper Door', code: 'WTRBARRZ', unit: 'Per Unit', price: '$15.00–$25.00' },
  { category: 'PPE & Containment', service: 'Protect – Cover with Plastic', code: 'WTRPROT', unit: 'Per SF', price: '$1.28–$1.75' },

  // IX. CLEANING & TREATMENT
  { category: 'Cleaning & Treatment', service: 'Apply Plant-Based Anti-Microbial (floor)', code: '-', unit: 'Per SF', price: '$0.39–$0.65' },
  { category: 'Cleaning & Treatment', service: 'Final Cleaning – Construction – Residential', code: '-', unit: 'Per SF', price: '$0.36–$0.55' },
  { category: 'Cleaning & Treatment', service: 'HEPA Vacuuming', code: 'WTRHEPAVAC', unit: 'Per Hour', price: '$58.82–$85.00' },
  { category: 'Cleaning & Treatment', service: 'HEPA Vacuuming – Detailed', code: 'WTRHEPAVAS', unit: 'Per SF', price: '$1.98–$2.75' },
  { category: 'Cleaning & Treatment', service: 'Muck-out / Flood Cleanup', code: 'WTRMUCK', unit: 'Per SF', price: '$3.71–$5.00' },
  { category: 'Cleaning & Treatment', service: 'Muck-out / Flood Cleanup – Heavy', code: 'WTRMUCK+', unit: 'Per SF', price: '$6.39–$8.50' },
  { category: 'Cleaning & Treatment', service: 'Sand Exposed Framing – Floor', code: 'WTRSANDF', unit: 'Per SF', price: '$2.43–$3.50' },
  { category: 'Cleaning & Treatment', service: 'Sand Exposed Framing – Walls', code: 'WTRSANDW', unit: 'Per SF', price: '$2.29–$3.25' },
  { category: 'Cleaning & Treatment', service: 'Clean Floor and Prep', code: '-', unit: 'Per SF', price: '$0.80–$1.25' },

  // X. CONTENT MANIPULATION & PACKING
  { category: 'Content & Packing', service: 'Box, Packing Paper & Tape – Large', code: '-', unit: 'Per Unit', price: '$5.28–$8.00' },
  { category: 'Content & Packing', service: 'Box, Packing Paper & Tape – Medium', code: '-', unit: 'Per Unit', price: '$3.91–$6.00' },
  { category: 'Content & Packing', service: 'Bubble Wrap – 24" Wide', code: '-', unit: 'Per LF', price: '$0.22–$0.45' },
  { category: 'Content & Packing', service: 'Evaluate Pack & Inventory – Large Box', code: '-', unit: 'Per Unit', price: '$22.79–$32.00' },
  { category: 'Content & Packing', service: 'Evaluate Pack & Inventory – Medium Box', code: '-', unit: 'Per Unit', price: '$17.89–$25.00' },
  { category: 'Content & Packing', service: 'Plastic Mattress Cover & Tape – Full', code: '-', unit: 'Per Unit', price: '$8.36–$14.00' },
  { category: 'Content & Packing', service: 'Plastic Mattress Cover & Tape – King', code: '-', unit: 'Per Unit', price: '$10.08–$16.00' },

  // XI. DIGITAL DOCUMENTATION & TESTING
  { category: 'Documentation & Testing', service: 'Thermal Imaging – Infrared Moisture Mapping', code: 'WTRTHERM', unit: 'Per Visit', price: '$650.00–$2,500.00' },
  { category: 'Documentation & Testing', service: '3D Matterport Scan', code: '-', unit: 'Per Scan', price: '$1,500.00–$2,500.00' },
  { category: 'Documentation & Testing', service: 'Third-Party Digitally Derived Sketch', code: '-', unit: 'Per Sketch', price: '$480.00–$1,900.00' },
  { category: 'Documentation & Testing', service: 'Contamination – Air/Surface Testing', code: 'WTRBIDITM', unit: 'Per Test', price: '$998.00–$1,500.00' },
  { category: 'Documentation & Testing', service: 'Contamination – On-site ATP Testing', code: 'WTRTESTATP', unit: 'Per Unit', price: '$26.76–$45.00' },

  // XII. DEBRIS REMOVAL
  { category: 'Debris Removal', service: 'Dumpster – 12 yards', code: 'DMODUMP<', unit: 'Per Load', price: '$598.33–$750.00' },
  { category: 'Debris Removal', service: 'Dumpster – 20 yards', code: 'DMODUMP', unit: 'Per Load', price: '$890.41–$1,100.00' },
  { category: 'Debris Removal', service: 'Dumpster – 30 yards', code: 'DMODUMP>', unit: 'Per Load', price: '$936.47–$1,200.00' },
  { category: 'Debris Removal', service: 'Dumpster – 40 yards', code: 'DMODUMP>>', unit: 'Per Load', price: '$1,238.80–$1,500.00' },
  { category: 'Debris Removal', service: 'Add for Dumpster Live Load', code: '-', unit: 'Per Load', price: '$750.00' },
  { category: 'Debris Removal', service: 'Haul Debris – Per Pickup Load', code: '-', unit: 'Per Load', price: '$388.00–$500.00' },
  { category: 'Debris Removal', service: 'Trash Removal – Per Truck Load', code: '-', unit: 'Per Load', price: '$489.00–$650.00' },
];

// Section keys for tracking (now 10 main sections + price list)
const SECTION_KEYS = [
  'introduction',
  'paymentInsurance',
  'waterDamageMold',
  'pricingBilling',
  'insuranceDisputes',
  'safetyResponsibilities',
  'limitationsLiability',
  'legalTerms',
  'finalProtections',
  'insuranceDisputeAddendum',
  'priceList'
];

// No sections require initials (simplified contract flow)
const SECTIONS_REQUIRING_INITIALS: string[] = [];

// Accordion Section Component
interface AccordionSectionProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  isChecked: boolean;
  onToggle: () => void;
  onCheck: (checked: boolean) => void;
  requiresInitial?: boolean;
  initialValue?: string;
  onInitialChange?: (value: string) => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  id,
  title,
  content,
  isOpen,
  isChecked,
  onToggle,
  onCheck,
  requiresInitial,
  initialValue,
  onInitialChange
}) => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-3 bg-white shadow-sm">
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-5 transition-colors bg-slate-50 hover:bg-slate-100"
      >
        <span className="font-semibold text-slate-800 text-left text-sm md:text-base">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
        )}
      </button>

      {/* Content */}
      {isOpen && (
        <div className="p-4 md:p-6 border-t border-slate-200">
          {/* Render content preserving formatting */}
          <div className="prose prose-slate prose-sm max-w-none">
            {content.split('\n').map((line, i) => {
              // Section headers (all caps with dashes)
              if (line.match(/^SECTION \d+/)) {
                return <h2 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-3 first:mt-0 border-b-2 border-[#1a73e8] pb-2">{line}</h2>;
              }
              // Subsection numbers with heading and paragraph text (e.g., "2.1 - HEADING: paragraph text")
              // Split into bold heading + normal paragraph
              const subsectionMatch = line.match(/^(\d+\.\d+\s*[-–]?\s*[^:]+:)\s*(.*)$/);
              if (subsectionMatch) {
                const [, heading, paragraphText] = subsectionMatch;
                return (
                  <div key={i} className="mt-5 mb-2">
                    <span className="text-base font-semibold text-slate-800">{heading}</span>
                    {paragraphText && <span className="text-slate-700"> {paragraphText}</span>}
                  </div>
                );
              }
              // Definition items (0.1, 0.2, etc.)
              if (line.match(/^0\.\d+\s+"/)) {
                return <p key={i} className="text-slate-700 my-2 pl-4 border-l-2 border-slate-200">{line}</p>;
              }
              // Sub-items like a., b., c., d., e. with headings (e.g., "a. Use of Xactimate Pricing: text")
              const subItemMatch = line.match(/^([a-e][\.\)]\s*[^:]+:)\s*(.*)$/);
              if (subItemMatch) {
                const [, subHeading, subText] = subItemMatch;
                return (
                  <p key={i} className="text-slate-700 my-2 ml-6">
                    <span className="font-semibold text-slate-800">{subHeading}</span>
                    {subText && <span> {subText}</span>}
                  </p>
                );
              }
              // Sub-items without colons (plain a), b), etc.)
              if (line.match(/^[a-e]\)\s/)) {
                return <p key={i} className="text-slate-700 my-1 ml-6">{line}</p>;
              }
              // Sub-headings (e.g., "Independence from Third-Party Adjusters: text" or "Client's Responsibility: text")
              // These are title-case headings followed by a colon and paragraph text
              const subHeadingMatch = line.match(/^([A-Z][A-Za-z'''\s-]+):\s+(.+)$/);
              if (subHeadingMatch && !line.match(/^(SECTION|WHEREAS|THEREFORE|CONTRACTOR|EMERGENCY|ESTIMATED|Note|NOTICE|ATTACHMENT)/)) {
                const [, subHead, subPara] = subHeadingMatch;
                // Only treat as sub-heading if the heading part is reasonably short (under 60 chars)
                if (subHead.length < 60) {
                  return (
                    <p key={i} className="text-slate-700 my-2">
                      <span className="font-semibold text-slate-800">{subHead}:</span>
                      <span> {subPara}</span>
                    </p>
                  );
                }
              }
              // Bullet points
              if (line.startsWith('•')) {
                return <li key={i} className="ml-6 text-slate-700 list-none">{line}</li>;
              }
              // WHEREAS clauses
              if (line.startsWith('WHEREAS')) {
                return <p key={i} className="text-slate-700 my-3 italic">{line}</p>;
              }
              // THEREFORE clause
              if (line.startsWith('THEREFORE')) {
                return <p key={i} className="text-slate-900 my-4 font-semibold bg-blue-50 p-3 rounded-lg border-l-4 border-[#1a73e8]">{line}</p>;
              }
              // Headers with colons (like "CONTRACTOR LICENSING:")
              if (line.match(/^[A-Z][A-Z\s]+:/)) {
                return <p key={i} className="font-semibold text-slate-900 mt-4 mb-2">{line}</p>;
              }
              // ALL CAPS headers without colons (like "EMERGENCY WAIVER", "CANCELLATION POLICY")
              if (line.match(/^[A-Z][A-Z\s]+$/) && line.trim().length > 3) {
                return <p key={i} className="font-semibold text-slate-900 mt-4 mb-2">{line}</p>;
              }
              // Note/Warning lines
              if (line.startsWith('Note:') || line.startsWith('NOTICE')) {
                return <p key={i} className="text-amber-800 bg-amber-50 p-3 rounded-lg my-3 text-sm">{line}</p>;
              }
              // Dividers
              if (line.trim() === '---') {
                return <hr key={i} className="my-6 border-slate-200" />;
              }
              // Empty lines
              if (line.trim() === '') {
                return <div key={i} className="h-2" />;
              }
              // Regular paragraphs
              return (
                <p key={i} className="text-slate-700 my-2 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>

        </div>
      )}
    </div>
  );
};

// Price List Section Component
interface PriceListSectionProps {
  isOpen: boolean;
  isChecked: boolean;
  onToggle: () => void;
  onCheck: (checked: boolean) => void;
}

const PriceListSection: React.FC<PriceListSectionProps> = ({
  isOpen,
  isChecked,
  onToggle,
  onCheck
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrices = PRICE_LIST.filter(item =>
    item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by category
  const groupedPrices = filteredPrices.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof PRICE_LIST>);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-3 bg-white shadow-sm">
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-5 bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <span className="font-semibold text-slate-800">Attachment A: Price List</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>

      {/* Content */}
      {isOpen && (
        <div className="p-4 md:p-6 border-t border-slate-200">
          {/* Disclaimer */}
          <div className="mb-6 space-y-4 text-sm text-slate-700">
            <h3 className="font-semibold text-slate-900">DISCLAIMER</h3>
            <p>This price list is presented to you as a component of our service agreement. Portions of this list are costs for controlling and stopping damage affecting your building and contents. This is not a full price list. This list is meant to include a variety of labor, material and rental equipment costs most commonly used.</p>
            <p>This is intended to give an overall picture of what types of costs and fees are associated with a typical mitigation or restoration project. To ensure our price list is in line with fair market value, we rely on multiple resources from the department of labor statistics, industry averages, and computer software estimating programs in developing prices. This list is not frequently updated. A more recent list can be requested through your project manager or by calling our offices. Prices are subject to change to the prices in effect at the time of service.</p>
            <p>We reserve the right to make any corrections to prices quoted due to clerical errors or errors of omission. We maintain the right to change this list, and all rates included herein, to reflect market changes without prior notification.</p>

            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2">NOTICE:</h4>
              <ol className="list-decimal list-inside space-y-2 text-amber-800">
                <li>Not included in the Price List are overtime rates for employees that exceed a 40-hour work-week or work exceeding an 8-hour workday.</li>
                <li>We follow state labor laws so when we pay overtime, those costs are passed to our customer.</li>
                <li>Project managers are required for every project. We bill for their time on an hourly basis.</li>
                <li>For labor rates involving working conditions that can be hazardous to employee health, such as working in unsafe buildings; cleaning up sewage, removing potentially toxic mold, fire and smoke, or any other contaminated environments; working in confined spaces, working with electrically energized buildings or gas and fuel contaminated structures, a premium rate for completing this type of work will increase hourly rates.</li>
              </ol>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">LABOR RATES:</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Our employees are skilled in the work they do.</li>
                <li>Certified technicians provide quality workmanship in controlling, stopping and eliminating damage and/or contamination affecting your property.</li>
                <li>Normal daytime, along with night, weekend and holiday labor charges are included.</li>
                <li>We reserve the right to change employee and supervisory labor rates when hazardous materials or medium or high-risk situations are present; when special requirements are called for, such as entering and working in permit-required confined space, working in toxic and hazardous environments.</li>
                <li>We may bring on subcontractors and outside experts to assist us for various reasons. We cannot guarantee their labor rates and billing costs.</li>
                <li>Overtime rates apply to hours exceeding 40 per week or 8 per shift for all employees and subcontractors, in compliance with applicable state labor laws.</li>
                <li>Rates for work performed on all recognized holidays will be 2 times regular rate.</li>
                <li>Travel time for personnel will be billed at regular rates.</li>
                <li>All labor is subject to prevailing wage, unionized labor and local labor market requirements.</li>
              </ul>

              {/* Labor Rates Table */}
              <div className="mt-4 overflow-x-auto -mx-2">
                <table className="w-full text-xs border border-slate-300">
                  <thead>
                    <tr className="bg-slate-200">
                      <th className="text-left p-1.5 border border-slate-300 font-semibold text-xs"></th>
                      <th className="text-center p-1.5 border border-slate-300 font-semibold text-xs">Business</th>
                      <th className="text-center p-1.5 border border-slate-300 font-semibold text-xs">After Hrs</th>
                      <th className="text-center p-1.5 border border-slate-300 font-semibold text-xs">Holiday</th>
                      <th className="text-center p-1.5 border border-slate-300 font-semibold text-xs">Major Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Skilled Tech</td>
                      <td className="p-1.5 border border-slate-300 text-center">$55.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$89.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$124.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$144.50</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Certified Tech</td>
                      <td className="p-1.5 border border-slate-300 text-center">$74.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$94.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$154.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$169.50</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Contents Supv</td>
                      <td className="p-1.5 border border-slate-300 text-center">$89.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$195.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$210.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$245.00</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Managing Supv</td>
                      <td className="p-1.5 border border-slate-300 text-center">$85.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$104.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$175.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$189.50</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Project Mgr</td>
                      <td className="p-1.5 border border-slate-300 text-center">$125.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$144.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$184.50</td>
                      <td className="p-1.5 border border-slate-300 text-center">$194.50</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Hazmat Supv</td>
                      <td className="p-1.5 border border-slate-300 text-center">$180.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$111.40</td>
                      <td className="p-1.5 border border-slate-300 text-center">$185.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$210.00</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Sr Project Mgr</td>
                      <td className="p-1.5 border border-slate-300 text-center">$145.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$165.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$225.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$245.00</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-1.5 border border-slate-300 font-semibold text-xs">Restoration Supv</td>
                      <td className="p-1.5 border border-slate-300 text-center">$105.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$135.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$225.00</td>
                      <td className="p-1.5 border border-slate-300 text-center">$235.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-600">
                <strong>Note:</strong> A "Day" is defined as 24 hours starting at 12:00 am and ending at 11:59 pm. Any portion of a day is billed as a full day.
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
            />
          </div>

          {/* Price table */}
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700">Service</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Code</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Unit</th>
                  <th className="text-right p-3 font-semibold text-slate-700">Price</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(groupedPrices).map(([category, items]) => (
                  <React.Fragment key={category}>
                    <tr className="bg-[#1a73e8]/10">
                      <td colSpan={4} className="p-3 font-semibold text-[#1a73e8] text-sm uppercase tracking-wide">
                        {category}
                      </td>
                    </tr>
                    {items.map((item, i) => (
                      <tr key={`${category}-${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 text-slate-700 pl-6">{item.service}</td>
                        <td className="p-3 text-slate-500 font-mono text-xs">{item.code}</td>
                        <td className="p-3 text-slate-600">{item.unit}</td>
                        <td className="p-3 text-right font-semibold text-slate-900">{item.price}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {filteredPrices.length === 0 && (
            <p className="text-center text-slate-500 py-8">No services found matching "{searchTerm}"</p>
          )}

        </div>
      )}
    </div>
  );
};

// Signature Pad Component
interface SignaturePadProps {
  onSignatureChange: (signature: string) => void;
}

const SignaturePad: React.FC<SignaturePadProps> = ({ onSignatureChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [signatureMode, setSignatureMode] = useState<'draw' | 'type'>('draw');
  const [typedSignature, setTypedSignature] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Set drawing style
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);

    const canvas = canvasRef.current;
    if (canvas && hasSignature) {
      onSignatureChange(canvas.toDataURL());
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    onSignatureChange('');
  };

  const handleTypedSignature = (value: string) => {
    setTypedSignature(value);
    if (value.trim()) {
      onSignatureChange(`typed:${value}`);
    } else {
      onSignatureChange('');
    }
  };

  return (
    <div className="space-y-4">
      {/* Mode toggle */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setSignatureMode('draw')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            signatureMode === 'draw'
              ? 'bg-[#1a73e8] text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Pen className="w-4 h-4" />
          Draw
        </button>
        <button
          type="button"
          onClick={() => setSignatureMode('type')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            signatureMode === 'type'
              ? 'bg-[#1a73e8] text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          Type
        </button>
      </div>

      {signatureMode === 'draw' ? (
        <div className="relative">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-32 border-2 border-dashed border-slate-300 rounded-lg bg-white cursor-crosshair touch-none"
            style={{ touchAction: 'none' }}
          />
          {!hasSignature && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-slate-400 text-sm">Sign here</span>
            </div>
          )}
          {hasSignature && (
            <button
              type="button"
              onClick={clearSignature}
              className="absolute top-2 right-2 p-2 bg-white rounded-lg shadow-md hover:bg-slate-50 transition-colors"
            >
              <Eraser className="w-4 h-4 text-slate-600" />
            </button>
          )}
        </div>
      ) : (
        <input
          type="text"
          value={typedSignature}
          onChange={(e) => handleTypedSignature(e.target.value)}
          placeholder="Type your full legal name"
          className="w-full px-4 py-4 text-2xl font-signature border-2 border-dashed border-slate-300 rounded-lg bg-white focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        />
      )}
    </div>
  );
};

// Main Component
const WorkAuthorization: React.FC = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [checkedSections, setCheckedSections] = useState<Set<string>>(new Set());
  const [sectionInitials, setSectionInitials] = useState<Record<string, string>>({});
  const [hasReadContract, setHasReadContract] = useState(false);
  const [signature, setSignature] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyAddress: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  // Get URL params for pre-filling
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      name: params.get('name') || '',
      phone: params.get('phone') || '',
      email: params.get('email') || '',
      propertyAddress: params.get('address') || ''
    }));
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleCheck = (id: string, checked: boolean) => {
    setCheckedSections(prev => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  const updateInitial = (sectionId: string, value: string) => {
    setSectionInitials(prev => ({
      ...prev,
      [sectionId]: value
    }));
  };

  // Validation
  const hasSignature = signature !== '';
  const hasRequiredFields = formData.name && formData.phone && formData.propertyAddress;

  const canSubmit = hasReadContract && hasSignature && hasRequiredFields;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);

    try {
      // Submit to Cloudflare Worker
      const response = await fetch('https://flood-doctor-forms.bluemedia-account.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'work-authorization',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          propertyAddress: formData.propertyAddress,
          contractAcknowledged: true,
          signatureType: signature.startsWith('typed:') ? 'typed' : 'drawn',
          signedAt: new Date().toISOString(),
          sourceUrl: window.location.href
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <PageMeta
          title="Contract Signed | Flood Doctor"
          description="Thank you for signing the Work Authorization contract."
        />
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Contract Signed</h1>
            <p className="text-slate-600 mb-6">
              Thank you for signing the Work Authorization contract. A copy has been sent to your email.
            </p>
            <p className="text-slate-600 mb-6">
              Our team will contact you shortly to begin restoration services.
            </p>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-500 mb-1">Need immediate assistance?</p>
              <a href="tel:+17039331110" className="text-lg font-bold text-[#1a73e8]">
                (703) 933-1110
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageMeta
        title="Work Authorization Contract | Flood Doctor"
        description="Review and sign the Flood Doctor service contract and work authorization."
      />

      <div className="min-h-screen bg-slate-100">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                alt="Flood Doctor"
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className="font-bold text-slate-900">Flood Doctor</h1>
                <p className="text-xs text-slate-500">Service Contract</p>
              </div>
            </div>
            <a
              href="tel:+17039331110"
              className="flex items-center gap-2 text-[#1a73e8] font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(703) 933-1110</span>
            </a>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-3xl mx-auto px-4 py-6">
          {/* Notice */}
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <strong>Please review each section carefully before signing.</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Contract Sections */}
            <div className="space-y-3 mb-8">
              {/* Render all contract sections dynamically */}
              {Object.entries(CONTRACT_SECTIONS).map(([key, section]) => (
                <AccordionSection
                  key={key}
                  id={key}
                  title={section.title}
                  content={section.content}
                  isOpen={openSections.has(key)}
                  isChecked={checkedSections.has(key)}
                  onToggle={() => toggleSection(key)}
                  onCheck={(checked) => toggleCheck(key, checked)}
                  requiresInitial={SECTIONS_REQUIRING_INITIALS.includes(key)}
                  initialValue={sectionInitials[key]}
                  onInitialChange={(value) => updateInitial(key, value)}
                />
              ))}

              {/* Price List Section (Attachment A) */}
              <PriceListSection
                isOpen={openSections.has('priceList')}
                isChecked={checkedSections.has('priceList')}
                onToggle={() => toggleSection('priceList')}
                onCheck={(checked) => toggleCheck('priceList', checked)}
              />
            </div>

            {/* Single Acknowledgment Checkbox */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasReadContract}
                  onChange={(e) => setHasReadContract(e.target.checked)}
                  className="w-6 h-6 mt-0.5 rounded border-slate-300 text-[#1a73e8] focus:ring-[#1a73e8]"
                />
                <span className="text-base text-slate-800 font-medium">
                  The Client has read and understands the terms and conditions outlined in this Service Contract, including but not limited to all sections and attachments above.
                </span>
              </label>
            </div>

            {/* Signature Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#1a73e8]" />
                Client Information & Signature
              </h2>

              {/* Client Info Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, propertyAddress: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
                  />
                </div>
              </div>

              {/* Credit Card Hold Notice */}
              <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-1">
                      Equipment Security Hold
                    </p>
                    <p className="text-xs text-slate-500">
                      A hold will be placed on your card while our equipment is in your care and custody.
                      The hold will be released after equipment return.
                    </p>
                  </div>
                </div>
              </div>

              {/* Credit Card Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
                    placeholder="•••• •••• •••• ••••"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      value={formData.cardExpiry}
                      onChange={(e) => setFormData(prev => ({ ...prev, cardExpiry: e.target.value }))}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={formData.cardCvv}
                      onChange={(e) => setFormData(prev => ({ ...prev, cardCvv: e.target.value }))}
                      placeholder="•••"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Credit Card Authorization Note */}
              <p className="text-xs text-slate-500 mb-6">
                The credit card authorization is for security purposes only and does not limit the Client's obligation to pay the full balance owed under this Contract.
              </p>

              {/* Signature */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Client Signature *
                </label>
                <SignaturePad onSignatureChange={setSignature} />
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 text-sm text-slate-600 mb-6">
                <Calendar className="w-4 h-4" />
                <span>Date: {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  canSubmit && !isSubmitting
                    ? 'bg-[#1a73e8] text-white hover:bg-[#1557b0] shadow-lg shadow-[#1a73e8]/30'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Sign & Submit Contract'
                )}
              </button>

              {/* Missing requirements hint */}
              {!canSubmit && (
                <div className="mt-4 text-sm text-slate-500">
                  <p className="font-medium mb-1">To submit, please:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {!hasReadContract && <li>Check the box confirming you have read and understand the contract</li>}
                    {!hasSignature && <li>Add your signature</li>}
                    {!formData.name && <li>Enter your full name</li>}
                    {!formData.phone && <li>Enter your phone number</li>}
                    {!formData.propertyAddress && <li>Enter the property address</li>}
                  </ul>
                </div>
              )}
            </div>
          </form>

          {/* Legal footer */}
          <div className="text-center text-xs text-slate-500 pb-8">
            <p className="mb-2">
              By signing this contract, you agree to the terms and conditions outlined above.
            </p>
            <p className="mb-2">
              This Service Contract has been reviewed and updated to incorporate current legal requirements and best practices for water damage restoration services in Virginia. All terms and conditions are subject to applicable law.
            </p>
            <p>
              Flood Doctor, LLC • Virginia Class A Contractor License #27-05155505
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default WorkAuthorization;
