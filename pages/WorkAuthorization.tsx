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
  introduction: {
    title: 'Section 0-1: Definitions, Parties & Purpose',
    requiresInitial: false,
    content: `SECTION 0 – DEFINITIONS

For purposes of this Contract, the following terms shall have the meanings set forth below:

0.1 "Client" – The individual, entity, or agent who authorizes services and agrees to be financially responsible under this Contract.

0.2 "Provider" – Property Restoration Contractor, and its employees, subcontractors, representatives, or agents.

0.3 "Property" – The physical location where services under this Contract are performed.

0.4 "Mitigation" – The emergency procedures and services provided to prevent further damage after a water, fire, or other property loss, including water extraction, drying, and containment.

0.5 "Remediation" – The process of treating or removing contaminants (e.g., microbial growth) to restore indoor environmental quality and reduce health risks. Provider does not perform mold remediation unless expressly stated in writing.

0.6 "Category 1, 2, 3 Water" – Water classifications defined under the IICRC S500 Standard.
• Category 1: Clean water from a sanitary source.
• Category 2: Significantly contaminated water that may cause illness.
• Category 3: Grossly contaminated water containing pathogens or toxins. (Water may change categories over time or upon contact with building materials.)

0.7 "Dry Standard" – The target moisture content or drying goal for materials, as established by readings taken in unaffected areas of the Property or based on industry standards.

0.8 "Scope of Work" – The services the Provider determines are necessary based on actual onsite conditions, which may include demolition, drying, cleaning, equipment use, or reconstruction-related tasks.

0.9 "Emergency Services" – Services performed immediately upon authorization to stabilize the Property, without a prior estimate or insurance approval, including after-hours or weekend work if necessary. Emergency services begin immediately to prevent further damage and are exempt from standard consumer protection waiting periods.

0.10 "Change Order" – Any work not included in the original scope that is added or modified due to site conditions, client requests, code requirements, or insurance findings.

0.11 "Administrative Fee" – Charges incurred for time spent revising invoices, creating supplemental documentation, or communicating with third parties at the Client's request or for insurance carrier demands.

0.12 "PPE" (Personal Protective Equipment) – Equipment used to protect Provider personnel and others from exposure to contaminants, as dictated by site conditions (e.g., suits, respirators, gloves).

0.13 "Rental Period" – The duration from when equipment is placed onsite until it is removed by the Provider, regardless of drying goal achievement, unless otherwise agreed.

0.14 "Mechanic's Lien" – A legal claim filed by the Provider against the Property to secure payment for services rendered, in accordance with Virginia Code §43-1 et seq.

0.15 "Third Party Adjuster" – Any insurance adjuster, consultant, or vendor not hired by the Client but involved in reviewing or challenging the Provider's work or pricing.

---

SECTION 1 – PARTIES AND PURPOSE

This Service Contract ("Contract") is made this ________ by and between Property Restoration Contractor, LLC. ("Provider") and ________________ ("Client"). (hereinafter referred to collectively as the "Parties").

CONTRACTOR LICENSING: Provider is licensed by the Virginia Department of Professional and Occupational Regulation, Class A Contractor License #27-05155505. Provider maintains required insurance and bonding as mandated by Virginia law.

WHEREAS, the Client desires to hire the Provider to perform emergency mitigation and restoration services for the property located at: ________________ ("Property")

WHEREAS, the Client authorizes the Provider to proceed with its recommended procedures to secure from further damage, preserve, protect, and restore the Property.

WHEREAS, the Provider, which is in the business of providing, among other services, emergency water and fire damage cleanup, mitigation, and restoration services, desires to provide such services to the Client upon the terms and conditions provided herein; and

WHEREAS, the Parties desire to enter into this Contract to set forth the terms and conditions that will govern the Provider's provision of the Services to the Client.

EMERGENCY SERVICE ACKNOWLEDGMENT: Client confirms this contract is for emergency mitigation services requested due to an immediate threat of property damage. Client understands that emergency services begin immediately upon authorization to prevent further damage, and standard consumer cancellation periods do not apply to emergency restoration services.

ESTIMATED COMPLETION: Due to the emergency nature of water damage restoration, exact completion dates cannot be determined until the assessment is complete.

THEREFORE, for good and valuable consideration, the receipt of which is hereby acknowledged, upon the general terms and subject to the conditions set forth in this Contract and intending to be legally bound, the Parties hereto agree as follows:`
  },
  paymentInsurance: {
    title: 'Section 2: Insurance & Payment Authorization',
    requiresInitial: true,
    content: `SECTION 2 – INSURANCE & PAYMENT AUTHORIZATION

2.1 - ASSIGNMENT OF INSURANCE BENEFITS: The Client hereby assigns any insurance rights, benefits, proceeds, and causes of action under any applicable insurance policies to the Provider. This assignment is made in consideration of the Provider performing the services and not requiring a down payment from the Client prior to starting work. The Client hereby acknowledges that the insurance company is billed as a courtesy and convenience to the Client; should the Client's insurance company fail to honor the assignment of claims and interest and direction to pay, the Client agrees to pay the Provider any balances due from the Client's personal funds. The Client further acknowledges and agrees that the Provider is working for the Client and not for their insurance company. Therefore, it is understood that the Client is ultimately responsible for full payment of services rendered pursuant to this Contract.

2.2 - AUTHORIZATION: I, the Client/Agent for the above Property, authorize Provider, its subcontractors, its agents, and representatives to enter my property, furnish materials, supply all equipment, and perform all labor necessary to mitigate, preserve, and protect my property from further damage, and to perform all restoration procedures necessary to repair and restore the carpet, furniture, structure, building materials, and other furnishings.

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

Water migrates into areas not affected initially. Water spreads laterally into adjoining rooms, penetrates materials below, and wicks up into porous materials above. It is best to evaluate all affected areas, not just areas with visible saturation.

Saturated materials begin swelling as they absorb moisture. Drying and restoration will restore them in many situations, and the damage may be permanent in others. Rapid drying will help reduce the chance of permanent damage.

As water evaporates, it causes an abnormal humidity condition. High humidity can damage some porous materials if allowed to continue. Humidity damage is most common when the indoor humidity exceeds 60% over time. It is best to reduce indoor humidity quickly to help prevent humidity damage.

After water intrusion, mold and bacterial spores can germinate and multiply. Microorganisms can cause mold damage and degrade indoor air quality. Some microorganisms produce antigens and allergens, which cause allergies, while others can cause infections and toxic diseases.

3.3 - DETERMINATION OF WATER LOSS CATEGORY: Provider uses its professional expertise, onsite observations, and recognized industry standards—including the IICRC S500 Standard and Reference Guide for Professional Water Damage Restoration—to determine the appropriate Category of water loss.

The Client acknowledges and agrees that the Category of water loss is not determined solely by the source of the water, but rather by the condition of the water at the time of assessment, and may change over time due to:
• Prolonged exposure,
• Contact with building materials, insulation, or flooring,
• Travel through wall cavities or subfloor systems,
• Development of odors, discoloration, microbial growth, or other contamination.

Even if the initial water source was clean (Category 1), the Provider is authorized to reclassify the loss to Category 2 or 3 when site conditions indicate degradation or contamination, as defined by Section 10.5 of the IICRC S500.

Per Section 10.5 of the IICRC S500 (2021): "Water that originates from a sanitary source may not remain sanitary after coming into contact with other surfaces or materials… Time and temperature can also affect the cleanliness of water. All three categories of water should be considered potentially dangerous and require appropriate personal protective equipment (PPE), engineering controls, and containment as conditions dictate."

Accordingly, charges for containment, demolition, antimicrobial treatment, use of PPE, and other Category 2 or 3 procedures are determined based on the actual conditions observed at the time of service, not based on an insurance adjuster's retroactive classification or opinions regarding the water source.

3.4 - REDUCING MILDEW GROWTH AND DAMAGE: Several things can be done to help reduce mold growth and damage to affected materials:
• Water can be removed.
• Antimicrobial agents can be applied to help inhibit the growth of mold and other biocontaminants.
• Rapid air movement can be introduced into areas and cavities to increase the rate of evaporation, and
• Relative Humidity (RH) indoors can be reduced.

I understand that the Provider:
• is not a mold remediation company;
• Does not guarantee or warrant that it can identify or remove mold;
• that a company possessing expertise in mold remediation must be hired to help ensure proper identification, testing, and removal of mold and mildew; and
• The Provider's services may only help, not prevent or resolve, any issues related to mold and mildew.`
  },
  pricingBilling: {
    title: 'Section 4: Pricing & Billing Terms',
    requiresInitial: true,
    content: `SECTION 4 – PRICING & BILLING TERMS

4.1 - PRICING AND PAYMENT: I understand that water damage is a progressive condition and that drying time varies depending on the types of materials, the quantity of water, the degree of saturation, airflow volume and velocity, temperature, and indoor & outdoor humidity. Therefore, I understand it is impracticable to give an accurate quote for services before completion. I agree to pay the total price for the work the Provider performs.

The Provider utilizes an industry-standard price list for mitigation services, available upon request. A partial list of commonly used line items can be found here: Partial Price List.

4.2 - PRICING DETERMINATION: I acknowledge that water damage restoration is a complex and dynamic process, and the total cost of services rendered by the Provider and its subcontractors depends on various factors, including but not limited to the types of materials affected, the quantity of water present, the degree of saturation, airflow volume and velocity, temperature, indoor and outdoor humidity, and duration of time that materials are subjected to water and high moisture levels before mitigation efforts are started. Given these variables, providing an exact quote before the completion of the restoration process is impractical. Therefore, I understand and accept that the final price for the water damage services shall be determined based on the Provider's industry-standard price list for mitigation services, which is available upon request.

4.3 - AUTONOMOUS PRICING: I further acknowledge that the Provider's pricing structure is established through an independent cost analysis and is not subject to any third-party pricing structures. The provider reserves the right to adjust its prices as necessitated by prevailing market conditions and in compliance with applicable labor laws in the jurisdictions where its services are provided.

4.4 - LABOR LAW COMPLIANCE: The Provider is committed to adhering to all local and federal labor laws applicable in the jurisdictions in which it operates. As part of this commitment, the Provider ensures that its employees receive fair compensation and treatment in accordance with the relevant labor regulations. Employees of the Provider are entitled to overtime pay for all hours worked beyond eight hours in a single shift and all hours worked exceeding forty hours in a single week, as mandated by applicable labor laws.

4.5 - PAYMENT OBLIGATIONS: Upon completion of the water damage restoration services, I agree to promptly pay the Provider the total price for the work performed as determined by the aforementioned factors and the industry-standard price list. Payment shall be made in accordance with the terms and conditions specified in the invoice provided by the Provider.

4.6 - DISPUTE RESOLUTION: In the event of any dispute regarding the pricing or payment for the services, both parties agree to engage in good faith negotiations to reach a mutually acceptable resolution. If a resolution cannot be achieved through negotiations, the matter shall be subject to the dispute resolution procedures outlined in this Contract.

4.7 - INDEPENDENCE FROM INSURANCE PRICING STRUCTURES: I am aware that some insurance companies may maintain in-network preferred vendors and associated pricing structures for water damage restoration services. However, I acknowledge and understand that the Provider operates independently and is not bound by any pricing structures dictated by insurance companies or their in-network vendor arrangements.

4.8 - TRANSPARENT AND COMPETITIVE PRICING: The Provider is committed to providing transparent and competitive pricing for its water damage restoration services. While insurance coverage and reimbursement may be applicable in certain cases, the Provider determines its pricing based on its own cost analysis and industry standards, ensuring fairness and impartiality in all financial transactions with its clients.

4.9 - NO COMPROMISE ON QUALITY: The Provider's pricing independence in no way compromises the quality of the services rendered. The Provider remains dedicated to delivering the highest standard of water damage restoration, utilizing advanced techniques, state-of-the-art equipment, and skilled professionals to achieve optimal results.

4.10 - COMMUNICATION WITH INSURANCE PROVIDERS: In the event that my insurance provider is involved in the claims process for the water damage restoration services, the Provider is prepared to cooperate with the insurance company as needed. However, it is essential to reiterate that the Provider's pricing shall remain unaffected by any insurance company's preferred vendor arrangements.

4.11 - XACTIMATE PRICING:
a. Use of Xactimate Pricing: The Client acknowledges that the Provider may use Xactimate pricing as a baseline for estimating and invoicing the Work in accordance with the Xactimate End User Agreement. However, the Provider is not obligated to exclusively use Xactimate to estimate or invoice the Work.
b. Independent Pricing Authority: The Provider reserves the right to adjust or establish pricing independently of Xactimate in order to reflect the unique circumstances of the project, market conditions, or additional services requested by the Client.
c. Insurance Company Adjustments: The Client acknowledges that Xactimate pricing is a tool and does not serve as a guarantee of pricing acceptance by the Client's insurance company. The Provider is not responsible for resolving pricing disputes with the Client's insurance provider.
d. Administrative Fees: The Client agrees to an administrative fee of $198 per hour for revisions or changes to estimates or invoices requested by the insurance company. Such fees will be added to the final invoice.
e. Client's Responsibility: The Client agrees that it is their responsibility to review their insurance policy and understand the coverage provided for the Work. The Provider is not responsible for discrepancies between Xactimate pricing and the Client's insurance policy coverage.`
  },
  insuranceDisputes: {
    title: 'Section 5: Insurance Disputes & Third-Party Limitations',
    requiresInitial: true,
    content: `SECTION 5 – INSURANCE DISPUTES & THIRD-PARTY LIMITATIONS

5.1 - INSURANCE PAYMENTS: If an insurance company makes any payment directly to the Client, payment shall be remitted to the Provider within three (3) working days. The Client represents and warrants that they are personally liable for all work performed by the Provider, the Provider's subsidiaries, and the Provider's subcontractors, agents, and representatives, regardless of whether an insurance company covers the loss or not. Any charges for services not reimbursed by an insurance company are due upon completion of the work.

5.2 - NO REQUIREMENT TO WORK WITH THIRD-PARTY ADJUSTERS:

Independence from Third-Party Adjusters: The Provider is not obligated to communicate with or work alongside any third-party adjusters, including those retained by the Client or the Client's insurance company, in relation to the Work performed under this Contract.

Client's Responsibility: The Client acknowledges that it is their sole responsibility to coordinate with any third-party adjusters they choose to involve in the claims process. The Provider's role is limited to performing the Work as outlined in this Contract, and the Provider will not negotiate or liaise with outside parties on behalf of the Client.

Insurance Company Adjusters: Any adjustments, modifications, or requests for additional documentation or revisions made by insurance adjusters are the responsibility of the Client. If the Provider agrees to comply with such requests, additional fees, including administrative fees, may apply.

Exclusions from Claims Process: The Provider is not a public adjuster and does not provide services related to claim preparation, dispute resolution, or negotiations with insurance companies or third-party adjusters. The Client is advised to seek independent representation, such as a licensed public adjuster, to manage any insurance-related matters. Provider's scope of work is limited to the execution of services outlined in this Contract and does not extend to any claim resolution processes.

5.3 - SCOPE OF WORK AND INSURANCE ADJUSTER INTERFERENCE: The Client understands and agrees that the scope of services provided by the Provider is determined by the actual conditions observed at the Property and performed in accordance with industry standards, including IICRC guidelines. The Provider is under no obligation to revise, reduce, or conform its scope of work or invoicing to match the opinions, pricing preferences, or assessments of any insurance adjuster, third-party reviewer, or claims representative. The Client remains responsible for payment based on the actual services rendered, as documented by the Provider.

5.4 - CLIENT'S INSURANCE POLICY:

Client's Responsibility: The Client agrees that it is their sole responsibility to review, understand, and ensure compliance with their insurance policy in relation to the Work performed under this Contract. The Provider is not responsible for interpreting or advising on the Client's insurance policy coverage.

Insurance Coverage Limitations: The Client acknowledges that any limitations, exclusions, or denials of coverage under their insurance policy do not affect their payment obligations under this Contract. The Client remains fully responsible for all amounts due to the Provider, regardless of insurance reimbursement.

Verification of Coverage: The Client is responsible for verifying the scope of their insurance policy and ensuring it provides adequate coverage for the services rendered. The Provider shall not be held liable for any discrepancies or coverage issues that may arise during or after the Work.

No Insurance Guarantees: The Provider does not guarantee approval or payment of claims by the Client's insurance company. Any disputes regarding coverage or claim approvals must be resolved directly between the Client and their insurance provider.

By signing this contract, I acknowledge that I have been duly informed of the Provider's independence from insurance pricing structures and that I understand and accept the terms and conditions outlined in this clause.`
  },
  safetyResponsibilities: {
    title: 'Section 6-7: Safety, Site Conditions & Client Responsibilities',
    requiresInitial: false,
    content: `SECTION 6 – SAFETY & SITE CONDITIONS

6.1 - STOP WORK-HOLD HARMLESS: In the event that the Provider is prevented from performing its recommended mitigation and remediation procedures and/or drying equipment is removed prematurely, I agree to release and hold the Provider harmless and indemnify the Provider and all of the Provider's subsidiaries, subcontractors, and agents against any claims, actions, and liabilities that may result from such incomplete procedures.

I understand that the Provider's services do not include mold inspections or mold removal. Therefore, I agree to release, indemnify, and hold the Provider harmless for any biological odors or growth, indoor air quality degradation, and any mold-related personal injuries or other damages to health that may occur due to microbiological activity during and/or after the mitigation process.

6.2 - DRYING EQUIPMENT: I understand that high-velocity air movers ("fans") and dehumidifiers will be installed to increase the rate of drying. The Client represents and warrants that they:
• Will not allow children to play with this equipment;
• Will not turn off the equipment without first calling the Provider;
• Will not leave windows open unless expressly instructed to do so by the Provider, as this may delay or impair the drying process; and
• Will minimize entering the affected rooms, especially those where the carpet is being dried.

6.3 - HEALTH AND SAFETY: To ensure the health and safety of the Client and the Provider's employees, agents, and representatives on the Property, the Client represents and warrants that they shall abide by the following precautions:
• If dehumidifiers or fans are moved, these units shall be shut off and unplugged, as it may be hazardous to move these units while they are operating.
• Take care when walking near the tackless strip, as the exposed tackless strip presents a danger even when covered.
• Take extreme care when walking on, around, or from wet flooring materials, as floors may become slippery when wet.

6.4 - AIRBORNE CONTAMINANTS: The Provider's mitigation efforts can sometimes cause preexisting contaminants to become airborne, exposing those on the Property to various health risks. As a result, the Provider highly recommends that all persons coming into contact with the Property during the mitigation and remediation process wear Protective Personal Equipment (PPE). The provider also recommends that all occupants of the Property seek alternative work or living arrangements while mitigation and remediation efforts are underway.

In the event the Property remains occupied, the Client represents and warrants they shall take reasonable care to protect any occupants from any health hazards presented by the Property during this period, including, but not limited to: Asbestos, Lead, Mold, Etc. The Client further agrees to release, indemnify, and hold the Provider and its subcontractors, agents, representatives, etc., harmless for any biological odors, growths, or degradation of indoor air quality that may result during and/or after the mitigation and remediation process.

6.5 - SITE HAZARDS: Active mitigation and remediation work sites can present many dangerous conditions that may result in injury to the Client and others who enter the Property. The Client agrees to release, indemnify, and hold the Provider and its subcontractors, agents, representatives, etc., harmless for any personal injuries or damage to the health and well-being of all those who enter the Property both during and after the mitigation and remediation process.

6.6 - EQUIPMENT RESPONSIBILITY: The Client represents and warrants that:
• They are personally liable for any damage to, loss of, or theft of the Provider's equipment while in their care and custody; Also,
• They shall take reasonable precautions to ensure that the Provider's equipment is not lost, stolen, or damaged.

Equipment shall be deemed lost or stolen if not returned within 24 hours of Provider's request. Replacement costs shall include: [INSERT SPECIFIC EQUIPMENT COSTS]. Client agrees to maintain reasonable security and notify Provider immediately of any theft, damage, or suspicious activity involving equipment.

If the Provider's equipment is lost, stolen, or damaged, the Client hereby agrees to pay for the total replacement cost of the Provider's equipment and all consequential losses resulting from the damage, loss, or theft of the Provider's equipment.

---

SECTION 7 – CLIENT RESPONSIBILITIES

7.1 - SERVICES: The Client acknowledges and agrees that, due to the emergency nature of the services being provided, the Provider is incapable of providing a detailed, written estimate of the services to be performed, or with a statement of the materials to be used during, or specifications for, the services or an approximate completion date prior to completion of work. The Client further understands and agrees that the Provider's services under this Contract will commence immediately upon signing.

7.2 - UNRELATED CONDITIONS/WORK: The Client acknowledges and agrees that the Provider is not responsible for detecting, addressing, correcting, or repairing conditions or areas unrelated to the event that necessitated the retainment of the Provider's services. The Client understands and agrees that the Client is personally responsible for any and all charges, costs, and deductibles not covered by insurance.

7.3 - SPECIAL/FRAGILE/VALUABLE ITEMS: The Client agrees to take full responsibility for special, fragile, or valuable items of personal property and that the Provider, Provider's employees, and agents shall not be liable for the theft, damage, or disappearance of any such items. The Client represents and warrants that they shall take care to protect and secure any special, fragile, or valuable items of personal property before the beginning of the work. Such items include, but are not limited to, Jewelry, Cash, Weapons, and Medications.

7.4 - ENVIRONMENTAL CONDITIONS: The Client understands and agrees that certain amounts of mold and bacteria are normal in an indoor environment, and the Provider makes no representations, warranties, or guarantees that it can, will, or has left the Property sterile. The Client further understands and agrees that the presence of certain types of microorganisms in indoor environments may cause illness and/or damage to the Property and that the use of certain chemicals may reduce this risk. Infants, the elderly, and individuals with chemical sensitivities or respiratory problems may be particularly sensitive to certain types of microorganisms.

7.5 - PRE-EXISTING CONTAMINANTS: I understand that the Provider:
• is not an Environmental Testing Contractor;
• does not guarantee, represent, or warrant that it can identify or remove pre-existing contaminants;
• that a company possessing expertise in toxic materials must be hired to help ensure proper identification, testing, and removal of such contaminants.

7.6 - REQUIRED INFORMATION: The Client shall provide the Provider with a complete history of known information regarding relevant or potentially relevant facts about the structures erected upon and the conditions present in and around the Property. The Client is responsible for advising the Provider, in writing, of the known existence of hazardous substances, including, but not limited to: Chemicals, Lead, Asbestos, and Areas of possible danger.

7.7 - SITE ACCESS AND SECURITY: The Client agrees to provide access to the Property to the Provider, the Provider's employees, agents, subcontractors, and their vehicles and equipment as required to properly perform the services. The Client shall provide areas for the storage of equipment, materials, and debris. The Client shall provide all water, electricity, and other utilities necessary for the Provider to perform its services. The Client represents and warrants that it will take all reasonable measures necessary to secure all structures on the Property from unauthorized access.

7.8 - DUMPSTER PLACEMENT AND DRIVEWAY DAMAGE:

Placement of Dumpster: The Client agrees to allow the Provider to place a dumpster on the driveway or street as necessary for the completion of the Work. The exact placement of the dumpster will be determined by the Provider in consideration of site access and project needs.

Use of Dumpster: The dumpster is designated solely for the Provider's use in connection with the Work. The Client agrees not to dispose of household items, yard waste, or any other non-construction-related materials in the dumpster.

Liability for Driveway Damage: The Provider shall not be held responsible or liable for any depressions, cracking, or other damage to the driveway or surrounding areas caused by the placement of the dumpster, the weight of the dumpster, or delivery/removal trucks.

Third-Party Responsibility: Any damage caused by the dumpster delivery or removal process by a third-party service provider shall not be the responsibility of the Provider. The Client agrees to pursue any claims directly with the third-party service provider.`
  },
  limitationsLiability: {
    title: 'Section 8: Limitations & Liability',
    requiresInitial: true,
    content: `SECTION 8 – LIMITATIONS & LIABILITY

8.1 - GENERAL INDEMNIFICATION: Client shall indemnify, defend, and hold harmless Provider, its owners, officers, directors, employees, subcontractors, agents, representatives, successors, and assigns from and against any and all claims, demands, actions, damages, losses, liabilities, costs, and expenses (including but not limited to attorneys' fees, expert witness fees, arbitration costs, and court costs) arising out of or relating to the services provided under this Agreement, except to the extent directly caused by Provider's gross negligence or willful misconduct.

8.2 - CLIENT INDEMNIFICATION: Client agrees to indemnify, defend, and hold harmless Provider from and against any and all claims, damages, losses, liabilities, judgments, settlements, costs and expenses (including reasonable attorney's fees) arising from:
a) Client's breach of this Contract
b) Client's negligent or willful acts or omissions
c) Third-party claims related to Provider's authorized work on the Property,
d) Any pre-existing conditions at the Property not disclosed to Provider,
e) Any toxic materials discovered, released, or disturbed as a result of Provider's authorized work

8.3 - DRIVEWAY AND THIRD-PARTY LIABILITY: The Provider shall not be liable for any property damage or loss caused by subcontractors, suppliers, delivery companies, or other third parties. Client agrees to pursue claims directly against such responsible parties and to indemnify and hold Provider harmless from any claims arising therefrom.

Driveway and Property Damage: The Provider shall not be held responsible or liable for any damage to the Client's driveway, sidewalks, or other property caused by normal project-related activities, including the operation of equipment, vehicles, or the placement of materials.

Specific Exclusions: The Provider shall not be responsible for:
• Oil droplets or stains from vehicles or equipment.
• Hairline fractures, depressions, sinking, or crumbling in concrete or asphalt surfaces.
• Damage to landscaping, including plants, shrubs, or trees, caused by project-related activities.

Acknowledgment of Risks: The Client acknowledges that project-related activities may involve heavy equipment, machinery, and materials that could result in minor incidental damage to the property. The Provider will take reasonable care to minimize such damage, but cannot guarantee complete prevention.

8.4 - SCOPE OF WORK & SUPPLEMENTAL WORK: The Client agrees that all costs related to any required supplements or additions to work or code requirements that are not covered by insurance are the Client's sole responsibility. Supplemental work includes betterment, Client-selected changes, and/ or enforcement of code or ordinances by the municipality or building department.

8.5 - CUTTING, DEMOLITION, AND CRACKING:

Risk of Settling and Cracking: The Client acknowledges that cutting through, demolishing, or tearing out existing walls, ceilings, tile, masonry, or similar structures as part of the Work may result in settling or cracking in adjacent areas. Masonry materials such as concrete, stucco, and plaster are particularly prone to cracking during or after such procedures.

Provider's Efforts: The Provider will use reasonable efforts and industry best practices to minimize ancillary damage to other areas during demolition or cutting activities. However, the Provider cannot guarantee that such damage will not occur.

Client Responsibility for Associated Costs: If ancillary damage occurs due to demolition or cutting that was competently performed, the Client agrees that any necessary repairs or remediation shall be billed as a Change Order and are the sole financial responsibility of the Client.

Exclusions of Liability: The Provider shall not be responsible for any cracking or damage to masonry or similar materials that may occur during or after the Work due to the inherent characteristics of these materials.

8.6 - SUBCONTRACTOR AUTHORIZATION: Client authorizes Provider to engage qualified subcontractors as necessary. Provider remains responsible for subcontractor performance, and Client's payment obligations remain with Provider regardless of subcontractor issues.

8.7 - EVIDENCE PRESERVATION DISCLAIMER: Provider is not responsible for identifying, preserving, cataloging, or retaining any materials, debris, or personal property as potential evidence in litigation, insurance subrogation, or claims investigations, unless a separate written agreement is executed for such services prior to commencement of work. Client assumes all responsibility for directing evidence preservation, including coordinating with insurance companies, investigators, or third-party consultants. Provider shall be held harmless and indemnified from any claims alleging spoliation, loss, or destruction of evidence unless directly caused by Provider's gross negligence or willful misconduct.

8.8 - CLIENT DUTY TO NOTIFY OF EVIDENCE REQUIREMENTS: Client acknowledges and agrees that it is their sole responsibility to notify Provider in writing, prior to commencement of work, if any portion of the Property, debris, or contents must be preserved for forensic, legal, or insurance investigation purposes. In the absence of such written notification, Provider may proceed with work in accordance with industry standards, and Client shall indemnify and hold Provider harmless against any claims related to alleged failure to preserve such items.`
  },
  legalTerms: {
    title: 'Section 9: Terms and Legal Conditions',
    requiresInitial: false,
    content: `SECTION 9 – TERMS AND LEGAL CONDITIONS

Note: This Contract includes a limitation of liability and limitation of remedies.

9.1 - PERFORMANCE OF SERVICES: Provider's performance of the Services is limited by, among other things, the preexisting conditions and characteristics of the Property, materials, fabrics, furniture, and/or other items. Provider expressly disclaims any responsibility or liability for any known or unknown preexisting conditions. Client shall retain responsibility and shall be liable for all effects of and costs necessary to correct such conditions, including, by way of example and not limitation, the conditions identified below:

Provider may, in its sole discretion, pre-test materials for the removability of spots or stains, dye or color fastness, shrinkage, fading, adhesive breakdown, or other problems. It is not always possible to determine these conditions in advance.

Provider does not represent, warrant, or guarantee that wall and ceiling cleaning will restore the original color to painted surfaces. Not all building materials and furnishings are conducive to cleaning. Provider shall use reasonable efforts to advise the Client of any adverse effects that may be reasonably foreseen due to the nature of the fabrics or materials involved.

Provider does not represent, warrant, or guarantee that such materials can be cleaned or that there will be no adverse effects from any attempt to clean such materials. A variety of materials are used in the manufacturing and construction of buildings and furnishings. These materials include backings, linings, tacks, and many other unknown substances that may cause discoloration and other adverse effects on the face material or its structural integrity. The Client acknowledges that it is impossible to determine when such adverse effects may occur, and Provider does not represent, warrant, or guarantee against such adverse effects.

The Client acknowledges and agrees that mold is commonly found throughout indoor environments and that it is impossible to fully eradicate mold.

Provider does not represent, warrant, or guarantee the removal or eradication of mold.

The Client acknowledges and agrees that Provider does not represent, warrant, or guarantee detection or repair of the original cause of the damage it is hired to mitigate.

9.2 - WARRANTIES: Provider specifically disclaims any other representations, warranties, and implied warranties (either in fact or by operation of law), including, but not limited to, any implied warranties of merchantability and fitness for a particular purpose of any implied warranty arising out of a course of dealing, custom, or usage of trade. This Contract provides for the provision of services and does not provide for the sale of goods.

9.3 - LIMITATION OF LIABILITY: In no event shall Provider, its owners, any officers, directors, employees, agents, subcontractors, or affiliates be responsible for indirect, special, nominal, incidental, punitive, or consequential losses or damages, or any penalties, regardless of the legal or equitable theory asserted; including contract, negligence, warranty, strict liability, statute or otherwise, even if it had been aware of the possibility of such damages or they are foreseeable; or for claims by a third party. The maximum aggregate shall not exceed the amount paid by the Client for the services or actual proven damages, whichever is less. The Client agrees that the remedies expressed herein represent the sole and exclusive remedies available to the Client under this Contract. The limitations herein shall apply even if any other remedies fail their essential purpose.

9.4 - ADDITIONAL WORK: Any labor, materials, or other work requested by the client will result in additional charges.

9.5 - NONPERFORMANCE AND BREACH OF CONTRACT: Any claim by the Client for faulty performance, nonperformance, or breach under this Contract for damages shall be made in writing to Provider within sixty (60) days after the completion of services. Failure to make such a written claim for any matter that Provider could have corrected shall be deemed a waiver of said claim by the Client. No action, regardless of form, relating to the subject matter of this Contract may be brought more than one (1) year after the claiming party knew or should have known of the cause of action.

9.6 - ADMINISTRATIVE WORK AND CONTINUING OBLIGATIONS: The Client acknowledges that, following completion of physical work on the Property, the Provider may be required to provide additional documentation—including but not limited to photos, daily logs, equipment usage records, and timesheets—to support the insurance claim review process. The Client agrees that these post-completion administrative tasks are performed in furtherance of the original scope of work and in response to ongoing insurance carrier requirements. To the extent permitted by law, the parties agree that any follow-up services—whether administrative or physical—performed in connection with this Project shall be considered part of the original contract obligations. The Provider also reserves the right to return to the Property to perform reasonable and necessary follow-up work, and the Client agrees to provide access for this purpose upon request.

9.7 - HEADINGS: The headings contained in this Contract are for convenience of reference only, form no part of this Contract, and have no force or effect whatsoever.

9.8 - FORCE MAJEURE: With respect to the performance obligations of this Contract, where there occurs any prevention, delay, or stoppage due to strikes, lockouts, labor disputes, acts of God, inability to obtain services, labor, or materials, or reasonable substitutes therefor, governmental actions, civil commotions, fire, flood, civil commotion, riot, war (declared and undeclared), revolution, embargoes, public health emergencies, pandemics, government-ordered shutdowns, supply chain disruptions, labor shortages, and other causes beyond the reasonable control of Provider (a Force Majeure event), Provider's failure to perform shall be excused for the duration of such event and for such a time thereafter as is reasonable to enable the parties to resume performance under this Contract.

9.9 - NO WAIVER: A failure of either party to exercise any right provided for herein shall not be deemed to be a waiver of any right hereunder.

9.10 - SEVERABILITY CLAUSE: If any provision of this Contract is found to be ineffective, unenforceable, or illegal for any reason under present or future laws, such provision shall be fully severable, and this Contract shall be construed and enforced as if such provision never comprised a part of this Contract. The remaining provisions of this Contract shall remain in full force and effect and shall not be affected by the ineffective, unenforceable, or illegal provision or by its severance from this Contract.

9.11 - MODIFICATION AND WAIVERS: No modification, termination, or attempted waiver of this Contract shall be valid unless in writing and signed by the party against whom the same is sought to be enforced.

9.12 - OVERHEAD AND PROFIT: Provider shall be entitled to an addition of Fifteen Percent (15%) overhead and Fifteen Percent (15%) profit for all services rendered by subcontractors, as well as on all appropriate and approved equipment rental, operating, and transporting costs. Overhead and Profit percentages shall be considered to include, among other costs; change order processing costs including without limitation project management, estimating, clerical, and drafting costs performed by field operations or in the home office, relating to change in the Work; field supervision; incidental job burdens; cost of idle equipment; home office overhead and consequential damages; general home office expenses; profit; and loss of profit.

9.13 - MERGER CLAUSE: This Contract contains the final, complete, and exclusive statement of the Agreement between the Provider and the Client with respect to the transactions contemplated herein. All other prior or contemporaneous oral communications (including, for the avoidance of doubt, any communications in connection with the preparation of this Contract) and all prior written or oral communications and agreements with respect to the subject matter hereof are merged herein and superseded into this Contract. For the avoidance of doubt, it is the parties' intent that no term contained in or omitted from any prior written draft of this Contract or other communication be used as extrinsic evidence under any state law or judicial interpretation to determine the parties' intent hereto.

9.14 - NO REPRESENTATIONS: The Client represents that he/she has had the opportunity to consult with an attorney and has carefully read and understands the scope and effect of the provisions of this Contract. In agreeing to this Contract, the Client has not relied upon any representations or statements made by the Provider or its representatives, which are not explicitly outlined in this Contract.

9.15 - ASSIGNMENT OF RIGHTS: This Contract and the rights and obligations of the parties herein shall inure to the benefit of, and be binding upon their respective successors, assigns, and legal representatives.

9.16 - PREEXISTING CONTAMINATIONS: Notwithstanding any other provision of this Contract, the Provider shall not be responsible for any Toxic Materials that were on the Property previously. The Client agrees that (i) the Provider shall not be responsible for any such Toxic Materials regardless of, boundaries or level of contamination, or the cost of clean-up, is increased as a result of mitigation and Clean-up activities that the Provider may take; and (ii) the Client shall be responsible for any Toxic Material that is discovered, released or disturbed as the result of any excavation or other subsurface activity made or undertaken on the Property by the Provider or its representatives.

9.17 - SUBROGATION AND THIRD-PARTY CLAIMS: Client agrees to defend, indemnify, and hold Provider harmless from and against any claims, demands, damages, liabilities, costs, or expenses (including attorneys' fees) asserted by insurers, subrogating parties, or third parties arising out of or relating to alleged failure to preserve evidence, unless such claims are the direct result of Provider's gross negligence or intentional misconduct.

9.18 - SCOPE CLARIFICATION: Provider's role is limited strictly to mitigation and restoration services as defined in this Agreement. Provider is not, and shall not be deemed, a forensic investigator, fire origin analyst, public adjuster, or evidence custodian. Any such services must be contracted separately with appropriately qualified professionals.

It is further presumed by Provider that once its services have been retained, the Client or their authorized agent has already taken appropriate steps to preserve any evidence their insurer requires them to preserve. The nature of the emergency cleanup and mitigation services provided does not allow the Provider sufficient time or resources to identify, collect, or safeguard items that may later be alleged to have evidentiary value. Accordingly, Provider shall not be responsible for the preservation of such evidence unless a separate written agreement has been executed to that effect.`
  },
  finalProtections: {
    title: 'Section 10-12: Final Legal Protections, Mechanic\'s Lien & Insurance Dispute Addendum',
    requiresInitial: false,
    content: `SECTION 10 – FINAL LEGAL PROTECTIONS

10.1 - INSURANCE ASSIGNMENT OF BENEFITS: I hereby authorize my insurance company to pay Provider directly for their services. As the Owner or Authorized agent of the property owner, it is understood that I have authorized the work and accept responsibility to Provider for services rendered. It is fully understood and agreed that the Owner/Agent is personally responsible for the total costs and charges for the work, including but not limited to any deductible, depreciation, or holdback not covered by insurance. If the Client's insurance carrier pays Provider directly, any charges for services not reimbursed by the insurance carrier are the Client's sole responsibility and must be paid upon completion of work. Provider must approve any exceptions in writing, and a finance charge of 1.5% per month (minimum of $1.00) will be applied to any unpaid balance after thirty (30) days.

10.2 - INVOICING: Provider shall bill all charges and costs directly to the Client (insured), and, as a courtesy only, a copy of these documents will be e-mailed to the insurance carrier. It is fully understood and agreed that Provider is hired directly by the Client and is in no way required to communicate, deal, negotiate with, or provide any internal notes, documents, or images to the Client's Insurance company, or any other Third Party on the Client's behalf and that all charges and costs are due upon completion of work.

10.3 - THIRD PARTIES: The Client understands and agrees that the Provider is (i) not a public adjusting firm, (ii) does not provide adjusting services, and (iii) will not negotiate with their insurance company on their behalf. If such services are required due to the complex nature of a claim, the Client should retain the services of a licensed and qualified public adjusting firm to negotiate with their insurance carrier on their behalf. At no time will the Provider accept a 'Third Party Assessment' of the loss post-mitigation. That includes but is not limited to any insurance company 'Third Party Vendor' or 'Third Party Estimate' for work performed by the Provider or its employees, subcontractors, and agents.

10.4 - PROOF OF LOSS: Should evidence of loss be mandated by an insurer or any other external party, it is incumbent upon the Client to retain and manage pertinent records. As a part of standard procedure and to track progress, the Provider's employees, staff, and agents compile daily photographs, notes, background measurements, and environmental readings and maintain a record of services rendered and tasks accomplished. These documents facilitate the monitoring of the drying process, aiding in the assessment of whether supplementary equipment or services are needed and when the Dry-Standard has been attained. The Provider neither has an obligation nor assents to disclose any of its internal records to the Client or any third party. As a discretionary courtesy, the Provider may choose to provide certain relevant project documents to assist clients in the claims process or when seeking reimbursements. This voluntary action does not contravene the terms of this Contract and shall not be interpreted as a pattern of behavior. Provider reserves the right to disclose, at its sole discretion, all, some, or none of its internal documents.

10.5 - ATTORNEYS' FEES: Should the need arise for legal action to collect monies due under this Contract, or should the matter be turned over to collections, Provider shall be entitled, in addition to other amounts owed by the Client, to reasonable legal fees and costs of any such collection attempts, and a finance charge of 1.5% per month (minimum of $1.00). This attorney fee provision shall not be effective or enforceable in jurisdictions where attorney fee provisions are made reciprocal or invalid by operation of law.

10.6 - MECHANIC'S LIEN: The Client expressly consents to the filing of a mechanic's lien by Provider, or its successors and assigns, against the Property for any labor, materials, or services provided pursuant to this Contract.

10.7 - GOVERNING LAW: This Contract and the rights and obligations of the parties under it are governed by and interpreted in accordance with the laws of the Commonwealth of Virginia (without regard to principles of conflicts of law). The Client consents to the jurisdiction of the Commonwealth of Virginia and the Venue of Fairfax County, Virginia, for any litigation regarding this Contract.

10.8 - WAIVER OF RIGHT TO JURY TRIAL: Both Provider and Client waive their respective rights to a trial by jury with respect to any and all claims or causes of action (including counterclaims) related to or arising out of or in any way connected to this Contract and agree that any claim or cause of action will be tried by a court trial without a jury.

10.9 - ELECTRONIC SIGNATURES:

Acceptance of Electronic Signatures: The Parties agree that this Contract may be executed and transacted using electronic signatures. Electronic signatures shall carry the same legal force and effect as handwritten signatures in accordance with applicable laws.

Validity of Electronic Copies: Photocopies, scanned copies, or electronic versions of this Contract, including those signed electronically, shall be deemed valid and enforceable as original documents.

Authorization: By signing this Contract electronically, the Parties acknowledge that they have reviewed, understood, and accepted the terms and conditions contained herein.

Consent to Electronic Transactions: The Client consents to the use of electronic means for the execution, delivery, and management of this Contract, as well as any related documents or communications.

---

SECTION 11 – MECHANIC'S LIEN RIGHTS AND INSURANCE DELAYS

11.1 - NOTICE TO CLIENT Provider provides emergency services immediately—without requiring any deposit or upfront payment from the Client. To protect its right to be paid for these services, especially in cases where insurance payments are delayed, Provider may file a Mechanic's Lien against the property. This standard legal protection does not reflect negatively on the Client.

11.2 - CONSENT TO LIEN FILING: The Client hereby expressly consents to the filing of a Mechanic's Lien by Provider, its successors, or assigns, against the real property where the services described in this Contract are performed ("the Property"). This consent includes any labor, materials, or services provided pursuant to this Contract in accordance with Virginia Code §43-1 et seq.

11.3 - EMERGENCY SERVICES WITHOUT UPFRONT PAYMENT: The Client acknowledges that Provider is providing emergency mitigation and restoration services promptly and in good faith without requiring any deposit or advance payment. In doing so, Provider assumes significant financial risk and must take reasonable steps to secure its right to be compensated for services rendered.

11.4 - PRESERVATION OF LIEN RIGHTS: To protect its legal and financial interests, Provider reserves the right to file a Mechanic's Lien at any time permitted under Virginia Code §43-4. Such a filing may occur before full or partial payment has been received and may be necessary even if an insurance claim is still under review or pending disbursement.

11.5 - INSURANCE PAYMENT DELAYS: The Client understands that, due to the nature of insurance claims and the emergency work provided, payments from insurance carriers may take several months after work is completed. These delays shall not restrict Provider's right to file a lien within the statutory time frames required by law.

11.6 - NO WAIVER OF RIGHTS: Provider's decision to proceed with services without a deposit, or to await insurance reimbursement, shall not be construed as a waiver or forfeiture of its rights to file a Mechanic's Lien or seek payment. Any delay in lien filing or enforcement does not constitute a waiver of rights.

11.7 - CLIENT COOPERATION: The Client agrees to cooperate fully with any documentation, signatures, or information reasonably required by Provider to assist in timely lien filings or insurance claim support. The filing of a lien is a legal safeguard and does not imply wrongdoing or lack of intent to pay by the Client.

---

SECTION 12 – INSURANCE DISPUTE PROTECTION ADDENDUM

This Addendum is intended to protect both the Provider and the Client by clarifying expectations related to insurance involvement, billing practices, scope of work, and documentation. It is incorporated into and forms part of the Service Contract.

12.1 - DETERMINATION OF SCOPE AND METHODOLOGY: The Client acknowledges and agrees that the Provider shall determine the appropriate scope of work, procedures, and mitigation techniques necessary to restore the Property in accordance with industry standards, including but not limited to IICRC S500 guidelines. The Provider shall not be required to revise or alter its scope of work based on third-party opinions or post-mitigation evaluations conducted by insurance adjusters, consultants, or claim reviewers.

12.2 - ONSITE DOCUMENTATION AS PROOF OF WORK: The Provider maintains detailed records of services rendered through field documentation, including photos, drying logs, equipment tracking, moisture readings, and daily notes. This documentation shall be considered sufficient proof of the work performed and may be used to justify charges to the Client or to any insurance representative. The Client acknowledges that the scope and cost of services are based on these observed and recorded field conditions.

12.3 - CHARGES BASED ON ACTUAL SERVICES RENDERED: The Client agrees that all invoicing shall reflect the actual labor, equipment, and materials provided, as well as the conditions encountered during mitigation. The Provider is not obligated to reduce or revise pricing to align with insurance carrier guidelines, preferred pricing platforms, or third-party estimates that do not reflect onsite realities. Charges shall be based on industry-standard pricing tools, adjusted for actual scope and conditions.

12.4 - WATER LOSS CLASSIFICATION AUTHORITY: Provider uses its professional expertise and onsite indicators—such as odor, discoloration, structural degradation, microbial growth, and exposure time—to determine the appropriate Category of water loss in accordance with Section 10.5 of the IICRC S500 Standard.

Even if the original source of the water was clean (Category 1), the Category may escalate due to time, contamination, or structural migration. The Client agrees that categorization is based on field conditions, not the origin of the loss, and that charges for demolition, containment, PPE, and antimicrobial application may reflect a Category 2 or 3 classification.

12.5 - EQUIPMENT USE AND DEPLOYMENT DURATION: Equipment rental durations and quantities are based on the conditions found at the Property and the need to achieve proper drying per IICRC standards. Charges will continue until the equipment is removed by the Provider. Insurance-related delays in equipment removal or job closure do not alter rental durations or charges.

12.6 - ADJUSTER COMMUNICATIONS AND LIMITATIONS: The Provider is not a party to the Client's insurance contract and is not obligated to comply with requests or demands from adjusters or third-party reviewers. The Provider will not revise invoices, scope, or documentation solely to satisfy an insurance carrier's internal review process. In such cases, additional administrative charges may apply as outlined elsewhere in this Contract.

At its sole discretion and as a courtesy to the Client, the Provider may choose to revise an invoice or supply additional documentation from time to time. However, such accommodations are voluntary and shall not be interpreted as a course of conduct, obligation, or waiver of the Provider's rights under this Contract.`
  },
  scopeOfWork: {
    title: 'Attachment A: Scope of Work',
    requiresInitial: false,
    content: `The Contractor agrees to perform all necessary and appropriate services related to, but not limited to, water damage restoration, mold mitigation, and any other similar services as may be required by the nature of the damage or as requested by the Client.

The scope of work shall include all labor, materials, equipment, and supervision necessary to restore the property to its pre-damage condition or to address any other specified concerns.

The Contractor shall execute the work in a professional and workmanlike manner, adhering to industry standards and applicable regulations.

---

EMERGENCY WAIVER

Owner requests that Contractor provide the Work listed in this Contract without delay because of an emergency (flooding or other water event) and Owner understands that Owner is waiving Owner's right to cancel the sale under the provisions of the Virginia Home Solicitation Sales Act.

---

CANCELLATION POLICY

In the event of cancellation by the Client for any reason, the Company reserves the right to retain thirty percent (30%) of the total contract price as a non-refundable fee to cover administrative costs, scheduling commitments, and loss of opportunity.

---

SUPPLEMENTAL WORK

The Client agrees that all costs related to any required supplements or additions to work or code requirements that are not covered by insurance are the Client's sole responsibility.

Supplemental work includes:
• Betterment
• Owner-selected changes
• Enforcement of code or ordinances by the municipality or building department`
  }
};

// Price list data (Updated from VAAR8X_AUG25 price list)
// Note: Labor rates are shown in a separate table above
const PRICE_LIST = [
  // PERSONAL PROTECTIVE EQUIPMENT
  { service: 'Add for PPE - Heavy Duty', code: 'WTRPPE+', unit: 'Per Unit', price: '$38.97' },
  { service: 'Add for PPE (Hazardous Cleanup)', code: '-', unit: 'Per Unit', price: '$23.91' },
  { service: 'Boots - Waterproof Latex - Disposable', code: '-', unit: 'Per Pair', price: '$10.92' },
  { service: 'Eye Protection - Plastic Goggles - Disposable', code: '-', unit: 'Per Unit', price: '$10.75' },
  { service: 'Personal Protective Gloves - Disposable', code: '-', unit: 'Per Pair', price: '$0.34' },
  { service: 'PPE Bundle (per tech per day)', code: '-', unit: 'Per Tech', price: '$114.00' },
  { service: 'Respirator - Full Face (per day)', code: '-', unit: 'Per Day', price: '$7.61' },
  { service: 'Respirator - Half Face (per day)', code: '-', unit: 'Per Day', price: '$1.67' },
  { service: 'Respirator Cartridge - HEPA & Vapor & Gas', code: '-', unit: 'Per Pair', price: '$36.11' },

  // EQUIPMENT RENTAL
  { service: '2" Submersible Pump with Hose', code: 'WTREXTWPC', unit: 'Per Hour', price: '$91.68' },
  { service: 'Air Mover (per 24 hour period)', code: 'WTRDRY', unit: 'Per Day', price: '$40.00-$48.31' },
  { service: 'Air Mover Axial Fan (per 24 hour period)', code: 'WTRDRY+', unit: 'Per Day', price: '$48-$58' },
  { service: 'Dehumidifier - LGR (per 24hr)', code: 'WTRDHMD', unit: 'Per Day', price: '$204-$250' },
  { service: 'Dehumidifier - XL (per 24hr)', code: 'WTRDHM>>', unit: 'Per Day', price: '$228.00' },
  { service: 'Heat Drying - Thermal Air Mover', code: 'WTRHTAM', unit: 'Per Day', price: '$198.45' },
  { service: 'Hydroxyl Generator - 2 Optics', code: '-', unit: 'Per Day', price: '$180.00' },
  { service: 'Negative Air Fan/Air Scrubber (per 24hr)', code: 'WTRNAFAN', unit: 'Per Day', price: '$190.00' },
  { service: 'Wall Cavity Drying - Injection Type', code: '-', unit: 'Per Day', price: '$182.69' },

  // EQUIPMENT SERVICES
  { service: 'Clean & Restock Equipment', code: '-', unit: 'Per Piece', price: '$78.00' },
  { service: 'Equipment Decontamination - Standard', code: '-', unit: 'Per Unit', price: '$48.27' },
  { service: 'Equipment Decontamination - Heavy', code: '-', unit: 'Per Unit', price: '$74.08' },
  { service: 'Equipment Delivery and Setup', code: '-', unit: 'Per Trip', price: '$128.00' },
  { service: 'Equipment Setup, Take Down & Monitoring', code: 'WTREQ', unit: 'Per Hour', price: '$78-$149' },
  { service: 'Equipment Setup, Take Down & Monitoring - After Hours', code: 'WTREQA', unit: 'Per Hour', price: '$119.40' },

  // CONTAINMENT & BARRIERS
  { service: 'Containment Barrier - Tension Post', code: 'WTRBARRP', unit: 'Per Day', price: '$3.35' },
  { service: 'Containment Barrier/Airlock/Decon Chamber', code: 'WTRBARR', unit: 'Per SF', price: '$1.23' },
  { service: 'Peel & Seal Zipper', code: 'WTRBARRZ', unit: 'Per Unit', price: '$15.30' },

  // FILTERS
  { service: 'Add for HEPA Filter (canister/backpack vacuums)', code: '-', unit: 'Per Unit', price: '$95.91' },
  { service: 'Add for HEPA Filter (negative air exhaust fan)', code: '-', unit: 'Per Unit', price: '$213.78' },
  { service: 'Carbon Vapor Filter (16" x 16")', code: 'WTRFLVAP', unit: 'Per Unit', price: '$274.20' },
  { service: 'HEPA Air Scrubber Filter', code: 'WTRFHEPA', unit: 'Per Filter', price: '$228.00' },

  // WATER EXTRACTION
  { service: 'Water Extraction - Carpeted Floor - Heavy', code: '-', unit: 'Per SF', price: '$0.74' },
  { service: 'Water Extraction - Hard Surface Floor', code: '-', unit: 'Per SF', price: '$0.28' },
  { service: 'Water Extraction - Hard Surface - CAT 2', code: 'WTREXTHGA', unit: 'Per SF', price: '$2.67' },

  // DEMOLITION - FLOORING
  { service: 'Carpet - Disengage from Tack Strip', code: '-', unit: 'Per SF', price: '$2.32' },
  { service: 'Clean Floor and Prep', code: '-', unit: 'Per SF', price: '$0.80' },
  { service: 'Hardwood Removal', code: '-', unit: 'Per SF', price: '$2.98' },
  { service: 'Lift Carpet for Drying', code: 'WTRLIFT', unit: 'Per SF', price: '$2.37' },
  { service: 'Tear Out Non-Salvageable Carpet', code: 'WTRFCC', unit: 'Per SF', price: '$0.84' },
  { service: 'Tear Out Non-Salv Solid/Eng Wood Floor', code: '-', unit: 'Per SF', price: '$5.23' },
  { service: 'Tear Out Non-Salv Tile', code: '-', unit: 'Per SF', price: '$4.17' },
  { service: 'Tear Out Mortar Bed for Tile - Add On', code: '-', unit: 'Per SF', price: '$2.55' },
  { service: 'Tear Out Tackless Strip', code: 'WTRTACK', unit: 'Per LF', price: '$1.39' },
  { service: 'Tear Out Wet Carpet Pad', code: 'WTRPAD', unit: 'Per SF', price: '$2.51' },
  { service: 'Tear Out Wet Paneling', code: '-', unit: 'Per SF', price: '$0.83' },

  // DEMOLITION - WALLS & TRIM
  { service: 'Tear Out Baseboard', code: 'WTRBASE', unit: 'Per LF', price: '$2.47' },
  { service: 'Tear Out Trim', code: 'WTRTRI', unit: 'Per LF', price: '$0.73' },
  { service: 'Tear Out Trim - Crown Molding', code: '-', unit: 'Per LF', price: '$0.73' },
  { service: 'Tear Out Trim - Quarter Round', code: '-', unit: 'Per LF', price: '$0.73' },
  { service: 'Tear Out Wet Drywall (up to 2\' tall)', code: 'WTRDRYW', unit: 'Per LF', price: '$5.06' },
  { service: 'Drill Holes for Wall Cavity Drying', code: 'WTRWALLH', unit: 'Per Unit', price: '$3.50' },

  // DEMOLITION - INSULATION & CEILING
  { service: 'Remove Blown-in Insulation - R38', code: '-', unit: 'Per SF', price: '$1.28' },
  { service: 'Remove Wet Suspended Ceiling Tile', code: '-', unit: 'Per SF', price: '$0.58' },
  { service: 'Tear Out and Bag Wet Insulation', code: 'WTRINS', unit: 'Per SF', price: '$1.01' },

  // CABINETS & COUNTERTOPS
  { service: 'Cabinet - Full Height Unit - Detach', code: '-', unit: 'Per LF', price: '$28.64' },
  { service: 'Cabinet - Lower (base) Unit - Detach', code: 'WTRCABLWD', unit: 'Per LF', price: '$28.75' },
  { service: 'Cabinet - Upper (wall) Unit - Detach', code: 'WTRCABUPD', unit: 'Per LF', price: '$24.59' },
  { service: 'Cabinet - Vanity and Countertop - Detach', code: 'WTRCABVND', unit: 'Per LF', price: '$36.06' },
  { service: 'Countertop - Plastic Laminate - Detach', code: '-', unit: 'Per LF', price: '$9.36' },
  { service: 'Countertop - Solid Surface/Granite - Detach', code: '-', unit: 'Per SF', price: '$12.47' },

  // PLUMBING FIXTURES
  { service: 'Dishwasher - Detach', code: 'WTRDWD', unit: 'Per Unit', price: '$79.48' },
  { service: 'Garbage Disposal - Detach', code: '-', unit: 'Per Unit', price: '$56.85' },
  { service: 'P-trap Assembly - Detach & Reset', code: '-', unit: 'Per Unit', price: '$95.18' },
  { service: 'Pedestal Sink - Detach', code: 'WTRSNKPD', unit: 'Per Unit', price: '$51.35' },
  { service: 'Toilet - Detach', code: 'WTRTLTD', unit: 'Per Unit', price: '$98.57' },

  // APPLIANCES
  { service: 'Detach & Reset Built-in Double Oven', code: '-', unit: 'Per Unit', price: '$316.62' },
  { service: 'Range - Drop In - Detach & Reset', code: '-', unit: 'Per Unit', price: '$211.19' },
  { service: 'Refrigerator - Detach', code: 'WTRRFD', unit: 'Per Unit', price: '$40.88' },

  // ELECTRICAL
  { service: 'Remove Light Fixture', code: '-', unit: 'Per Unit', price: '$9.92' },
  { service: 'Remove Outlet', code: '-', unit: 'Per Unit', price: '$5.99' },
  { service: 'Remove Switch', code: '-', unit: 'Per Unit', price: '$5.99' },

  // DOORS
  { service: 'Interior Door - Detach & Reset', code: '-', unit: 'Per Unit', price: '$80.75' },

  // CLEANING & TREATMENT
  { service: 'Apply Plant-Based Anti-Microbial (floor)', code: '-', unit: 'Per SF', price: '$0.39' },
  { service: 'Final Cleaning - Construction - Residential', code: '-', unit: 'Per SF', price: '$0.36' },
  { service: 'HEPA Vacuuming', code: 'WTRHEPAVAC', unit: 'Per Hour', price: '$58.82' },
  { service: 'HEPA Vacuuming - Detailed', code: 'WTRHEPAVAS', unit: 'Per SF', price: '$1.98' },
  { service: 'Muck-out/Flood Cleanup', code: 'WTRMUCK', unit: 'Per SF', price: '$3.71' },
  { service: 'Muck-out/Flood Cleanup - Heavy', code: 'WTRMUCK+', unit: 'Per SF', price: '$6.39' },
  { service: 'Protect - Cover with Plastic', code: 'WTRPROT', unit: 'Per SF', price: '$1.28' },
  { service: 'Sand Exposed Framing - Floor', code: 'WTRSANDF', unit: 'Per SF', price: '$2.43' },
  { service: 'Sand Exposed Framing - Walls', code: 'WTRSANDW', unit: 'Per SF', price: '$2.29' },

  // CONTENT MANIPULATION & PACKING
  { service: 'Box, Packing Paper & Tape - Large', code: '-', unit: 'Per Unit', price: '$5.28' },
  { service: 'Box, Packing Paper & Tape - Medium', code: '-', unit: 'Per Unit', price: '$3.91' },
  { service: 'Bubble Wrap - 24" Wide', code: '-', unit: 'Per LF', price: '$0.22' },
  { service: 'Content Manipulation', code: '-', unit: 'Per Hour', price: '$88.47' },
  { service: 'Content Manipulation - After Hours', code: 'CONLABA', unit: 'Per Hour', price: '$128.43' },
  { service: 'Evaluate Pack & Inventory - Large Box', code: '-', unit: 'Per Unit', price: '$22.79' },
  { service: 'Evaluate Pack & Inventory - Medium Box', code: '-', unit: 'Per Unit', price: '$17.89' },
  { service: 'Plastic Mattress Cover & Tape - Full', code: '-', unit: 'Per Unit', price: '$8.36' },
  { service: 'Plastic Mattress Cover & Tape - King', code: '-', unit: 'Per Unit', price: '$10.08' },

  // TESTING & DOCUMENTATION
  { service: 'Contamination - Air/Surface Testing', code: 'WTRBIDITM', unit: 'Per Test', price: '$998.39' },
  { service: 'Contamination - On-site ATP Testing', code: 'WTRTESTATP', unit: 'Per Unit', price: '$26.76' },
  { service: 'Digitally Derived Third-Party Sketch', code: '-', unit: 'Per Unit', price: '$386.00' },
  { service: 'Thermal Imaging', code: 'WTRTHERM', unit: 'Per Visit', price: '$350-$2,500' },

  // SERVICE CALLS
  { service: 'Service Call', code: '-', unit: 'Per Call', price: '$350-$2,500' },

  // DEBRIS REMOVAL
  { service: 'Dumpster - 12 yards (1-3 tons)', code: 'DMODUMP<', unit: 'Per Load', price: '$598.33' },
  { service: 'Dumpster - 20 yards (4 tons)', code: 'DMODUMP', unit: 'Per Load', price: '$890.41' },
  { service: 'Dumpster - 30 yards (5-7 tons)', code: 'DMODUMP>', unit: 'Per Load', price: '$936.47' },
  { service: 'Dumpster - 40 yards (7-8 tons)', code: 'DMODUMP>>', unit: 'Per Load', price: '$1,238.80' },
  { service: 'Haul Debris - Per Pickup Load', code: '-', unit: 'Per Load', price: '$388.00' },
  { service: 'Trash Removal - Per Truck Load', code: '-', unit: 'Per Load', price: '$489.00' },
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
  'scopeOfWork',
  'priceList'
];

// Sections that require initials (based on "Initial ←Initial" markers in original doc)
const SECTIONS_REQUIRING_INITIALS = ['paymentInsurance', 'pricingBilling', 'insuranceDisputes', 'limitationsLiability', 'priceList'];

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
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 md:p-5 transition-colors ${
          requiresInitial ? 'bg-amber-50 hover:bg-amber-100' : 'bg-slate-50 hover:bg-slate-100'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'
          }`}>
            {isChecked && <Check className="w-4 h-4 text-white" />}
          </div>
          <span className="font-semibold text-slate-800 text-left text-sm md:text-base">{title}</span>
          {requiresInitial && (
            <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Initial Required</span>
          )}
        </div>
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
                    <span className="font-medium text-slate-800">{subHeading}</span>
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
                      <span className="font-medium text-slate-800">{subHead}:</span>
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

          {/* Acknowledgment checkbox */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => onCheck(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-slate-300 text-[#1a73e8] focus:ring-[#1a73e8]"
              />
              <span className="text-sm text-slate-700">
                I have read and understand this section
              </span>
            </label>

            {/* Initial field for sections that require it */}
            {requiresInitial && (
              <div className="mt-4 flex items-center gap-3">
                <label className="text-sm font-medium text-slate-700">Initial here (required):</label>
                <input
                  type="text"
                  value={initialValue || ''}
                  onChange={(e) => onInitialChange?.(e.target.value.toUpperCase())}
                  placeholder="ABC"
                  maxLength={4}
                  className="w-20 px-3 py-2 text-center font-bold text-lg border-2 border-slate-300 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none uppercase"
                />
              </div>
            )}
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
  initialValue: string;
  onInitialChange: (value: string) => void;
}

const PriceListSection: React.FC<PriceListSectionProps> = ({
  isOpen,
  isChecked,
  onToggle,
  onCheck,
  initialValue,
  onInitialChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrices = PRICE_LIST.filter(item =>
    item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-3 bg-white shadow-sm">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-5 bg-amber-50 hover:bg-amber-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'
          }`}>
            {isChecked && <Check className="w-4 h-4 text-white" />}
          </div>
          <span className="font-semibold text-slate-800">Attachment B: Price List</span>
          <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Initial Required</span>
        </div>
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
              <h4 className="font-semibold text-slate-900 mb-2">LABOR RATES:</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Our employees are skilled in the work they do.</li>
                <li>Only skilled and industry certified technicians work for our company.</li>
                <li>Certified technicians provide quality workmanship in controlling, stopping and eliminating damage and/or contamination affecting your property.</li>
                <li>Normal daytime, along with night, weekend and holiday labor charges are included.</li>
                <li>We reserve the right to change employee and supervisory labor rates when hazardous materials or medium or high-risk situations are present; when special requirements are called for, such as entering and working in permit-required confined space, working in toxic and hazardous environments.</li>
                <li>We may bring on subcontractors and outside experts to assist us for various reasons. We cannot guarantee their labor rates and billing costs.</li>
                <li>Overtime or special rates will apply to all hours over 40 hours per week, or in compliance with prevailing law of the state in which work is performed.</li>
                <li>Rates for work performed on all recognized holidays will be 2 times regular rate.</li>
                <li>Travel time for personnel will be billed at regular rates.</li>
                <li>All labor is subject to prevailing wage, unionized labor and local labor market requirements.</li>
              </ul>

              {/* Labor Rates Table */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[700px] text-sm border border-slate-300">
                  <thead>
                    <tr className="bg-slate-200">
                      <th className="text-left p-2 border border-slate-300 font-semibold"></th>
                      <th className="text-center p-2 border border-slate-300 font-semibold">Daytime/<br/>Weekday</th>
                      <th className="text-center p-2 border border-slate-300 font-semibold">Nighttime</th>
                      <th className="text-center p-2 border border-slate-300 font-semibold">Weekend</th>
                      <th className="text-center p-2 border border-slate-300 font-semibold">Weekend/<br/>Nighttime</th>
                      <th className="text-center p-2 border border-slate-300 font-semibold">Holiday</th>
                      <th className="text-center p-2 border border-slate-300 font-semibold">Holiday/Night</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-2 border border-slate-300 font-semibold">Skilled Technician</td>
                      <td className="p-2 border border-slate-300 text-center">$55.50</td>
                      <td className="p-2 border border-slate-300 text-center">$89.50</td>
                      <td className="p-2 border border-slate-300 text-center">$99.50</td>
                      <td className="p-2 border border-slate-300 text-center">$119.50</td>
                      <td className="p-2 border border-slate-300 text-center">$124.50</td>
                      <td className="p-2 border border-slate-300 text-center">$144.50</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2 border border-slate-300 font-semibold">Certified Technician</td>
                      <td className="p-2 border border-slate-300 text-center">$74.50</td>
                      <td className="p-2 border border-slate-300 text-center">$94.50</td>
                      <td className="p-2 border border-slate-300 text-center">$119.50</td>
                      <td className="p-2 border border-slate-300 text-center">$129.50</td>
                      <td className="p-2 border border-slate-300 text-center">$154.50</td>
                      <td className="p-2 border border-slate-300 text-center">$169.50</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border border-slate-300 font-semibold">Contents Supervisor</td>
                      <td className="p-2 border border-slate-300 text-center">$89.00</td>
                      <td className="p-2 border border-slate-300 text-center">$104.00</td>
                      <td className="p-2 border border-slate-300 text-center">$104.50</td>
                      <td className="p-2 border border-slate-300 text-center">$149.50</td>
                      <td className="p-2 border border-slate-300 text-center">$184.50</td>
                      <td className="p-2 border border-slate-300 text-center">$194.50</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2 border border-slate-300 font-semibold">Managing Supervisor</td>
                      <td className="p-2 border border-slate-300 text-center">$85.00</td>
                      <td className="p-2 border border-slate-300 text-center">$104.00</td>
                      <td className="p-2 border border-slate-300 text-center">$104.50</td>
                      <td className="p-2 border border-slate-300 text-center">$149.50</td>
                      <td className="p-2 border border-slate-300 text-center">$175.50</td>
                      <td className="p-2 border border-slate-300 text-center">$189.50</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border border-slate-300 font-semibold">Project Manager</td>
                      <td className="p-2 border border-slate-300 text-center">$125.00</td>
                      <td className="p-2 border border-slate-300 text-center">$144.50</td>
                      <td className="p-2 border border-slate-300 text-center">$144.50</td>
                      <td className="p-2 border border-slate-300 text-center">$155.50</td>
                      <td className="p-2 border border-slate-300 text-center">$184.50</td>
                      <td className="p-2 border border-slate-300 text-center">$194.50</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2 border border-slate-300 font-semibold">Hazardous Material Supervisor</td>
                      <td className="p-2 border border-slate-300 text-center">$85.98</td>
                      <td className="p-2 border border-slate-300 text-center">$111.40</td>
                      <td className="p-2 border border-slate-300 text-center">$111.40</td>
                      <td className="p-2 border border-slate-300 text-center">$165.50</td>
                      <td className="p-2 border border-slate-300 text-center">$185.00</td>
                      <td className="p-2 border border-slate-300 text-center">$210.00</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border border-slate-300 font-semibold">Senior Project Manager</td>
                      <td className="p-2 border border-slate-300 text-center">$145.00</td>
                      <td className="p-2 border border-slate-300 text-center">$165.00</td>
                      <td className="p-2 border border-slate-300 text-center">$185.00</td>
                      <td className="p-2 border border-slate-300 text-center">$210.00</td>
                      <td className="p-2 border border-slate-300 text-center">$225.00</td>
                      <td className="p-2 border border-slate-300 text-center">$245.00</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2 border border-slate-300 font-semibold">Restoration Supervisor</td>
                      <td className="p-2 border border-slate-300 text-center">$105.00</td>
                      <td className="p-2 border border-slate-300 text-center">$135.00</td>
                      <td className="p-2 border border-slate-300 text-center">$185.00</td>
                      <td className="p-2 border border-slate-300 text-center">$210.00</td>
                      <td className="p-2 border border-slate-300 text-center">$225.00</td>
                      <td className="p-2 border border-slate-300 text-center">$235.00</td>
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
                {filteredPrices.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-3 text-slate-700">{item.service}</td>
                    <td className="p-3 text-slate-500 font-mono text-xs">{item.code}</td>
                    <td className="p-3 text-slate-600">{item.unit}</td>
                    <td className="p-3 text-right font-semibold text-slate-900">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredPrices.length === 0 && (
            <p className="text-center text-slate-500 py-8">No services found matching "{searchTerm}"</p>
          )}

          {/* Acknowledgment with Initial */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => onCheck(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-slate-300 text-[#1a73e8] focus:ring-[#1a73e8]"
              />
              <span className="text-sm text-slate-700">
                I have reviewed and acknowledge the price list above
              </span>
            </label>

            <div className="mt-4 flex items-center gap-3">
              <label className="text-sm font-medium text-slate-700">Initial here (required):</label>
              <input
                type="text"
                value={initialValue}
                onChange={(e) => onInitialChange(e.target.value.toUpperCase())}
                placeholder="ABC"
                maxLength={4}
                className="w-20 px-3 py-2 text-center font-bold text-lg border-2 border-slate-300 rounded-lg focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none uppercase"
              />
            </div>
          </div>
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
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['introduction']));
  const [checkedSections, setCheckedSections] = useState<Set<string>>(new Set());
  const [sectionInitials, setSectionInitials] = useState<Record<string, string>>({});
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
  const totalSections = SECTION_KEYS.length;
  const allSectionsChecked = checkedSections.size === totalSections;
  const allInitialsProvided = SECTIONS_REQUIRING_INITIALS.every(
    section => sectionInitials[section]?.trim().length >= 2
  );
  const hasSignature = signature !== '';
  const hasRequiredFields = formData.name && formData.phone && formData.propertyAddress;

  const canSubmit = allSectionsChecked && allInitialsProvided && hasSignature && hasRequiredFields;

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
          sectionInitials,
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

        {/* Progress indicator */}
        <div className="bg-white border-b border-slate-200 px-4 py-3">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                {checkedSections.size} of {totalSections} sections reviewed
              </span>
              <div className="flex items-center gap-2">
                {allInitialsProvided && <Check className="w-4 h-4 text-emerald-500" />}
                {hasSignature && <Check className="w-4 h-4 text-emerald-500" />}
              </div>
            </div>
            <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1a73e8] transition-all duration-300"
                style={{ width: `${(checkedSections.size / totalSections) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="max-w-3xl mx-auto px-4 py-6">
          {/* Notice */}
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <strong>Please review each section carefully.</strong> You must check the acknowledgment box
              for each section. Sections marked with "Initial Required" need your initials before signing.
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

              {/* Price List Section (Attachment B) */}
              <PriceListSection
                isOpen={openSections.has('priceList')}
                isChecked={checkedSections.has('priceList')}
                onToggle={() => toggleSection('priceList')}
                onCheck={(checked) => toggleCheck('priceList', checked)}
                initialValue={sectionInitials['priceList'] || ''}
                onInitialChange={(value) => updateInitial('priceList', value)}
              />
            </div>

            {/* Signature Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#1a73e8]" />
                Client Information & Signature
              </h2>

              {/* Legal statement */}
              <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-700">
                <p className="font-semibold mb-2">I have read and understand the information above and have received a copy for my records.</p>
              </div>

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
                    {!allSectionsChecked && <li>Review and check all {totalSections - checkedSections.size} remaining sections</li>}
                    {!allInitialsProvided && <li>Add your initials to all required sections ({SECTIONS_REQUIRING_INITIALS.filter(s => !sectionInitials[s]?.trim()).length} remaining)</li>}
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
