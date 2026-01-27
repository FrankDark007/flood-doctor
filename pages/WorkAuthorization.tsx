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
 * - Initial required for Price List
 * - Signature pad at bottom
 */

// Contract content organized by section
const CONTRACT_SECTIONS = {
  introduction: {
    title: 'Introduction & Definitions',
    content: `
## DEFINITIONS

For purposes of this Contract, the following terms shall have the meanings set forth below:

**"Client"** – The individual, entity, or agent who authorizes services and agrees to be financially responsible under this Contract.

**"Provider"** – Property Restoration Contractor, and its employees, subcontractors, representatives, or agents.

**"Property"** – The physical location where services under this Contract are performed.

**"Mitigation"** – The emergency procedures and services provided to prevent further damage after a water, fire, or other property loss, including water extraction, drying, and containment.

**"Remediation"** – The process of treating or removing contaminants (e.g., microbial growth) to restore indoor environmental quality and reduce health risks. Provider does not perform mold remediation unless expressly stated in writing.

**"Category 1, 2, 3 Water"** – Water classifications defined under the IICRC S500 Standard.
- Category 1: Clean water from a sanitary source.
- Category 2: Significantly contaminated water that may cause illness.
- Category 3: Grossly contaminated water containing pathogens or toxins.

**"Dry Standard"** – The target moisture content or drying goal for materials, as established by readings taken in unaffected areas of the Property or based on industry standards.

**"Scope of Work"** – The services the Provider determines are necessary based on actual onsite conditions.

**"Emergency Services"** – Services performed immediately upon authorization to stabilize the Property, without a prior estimate or insurance approval.

**"Change Order"** – Any work not included in the original scope that is added or modified due to site conditions, client requests, code requirements, or insurance findings.

**"Administrative Fee"** – Charges incurred for time spent revising invoices, creating supplemental documentation, or communicating with third parties.

**"Mechanic's Lien"** – A legal claim filed by the Provider against the Property to secure payment for services rendered, in accordance with Virginia Code §43-1 et seq.

---

## PARTIES AND PURPOSE

This Service Contract ("Contract") is made by and between Property Restoration Contractor, LLC. ("Provider") and the undersigned ("Client").

**CONTRACTOR LICENSING:** Provider is licensed by the Virginia Department of Professional and Occupational Regulation, Class A Contractor License #27-05155505. Provider maintains required insurance and bonding as mandated by Virginia law.

**WHEREAS**, the Client desires to hire the Provider to perform emergency mitigation and restoration services for the Property.

**WHEREAS**, the Client authorizes the Provider to proceed with its recommended procedures to secure from further damage, preserve, protect, and restore the Property.

**WHEREAS**, the Provider is in the business of providing emergency water and fire damage cleanup, mitigation, and restoration services.

**EMERGENCY SERVICE ACKNOWLEDGMENT:** Client confirms this contract is for emergency mitigation services requested due to an immediate threat of property damage. Client understands that emergency services begin immediately upon authorization to prevent further damage, and standard consumer cancellation periods do not apply to emergency restoration services.

**ESTIMATED COMPLETION:** Due to the emergency nature of water damage restoration, exact completion dates cannot be determined until the assessment is complete. Provider will provide estimated timeframes within 48 hours of commencing work.
    `
  },
  paymentInsurance: {
    title: 'Payment & Insurance',
    content: `
## ASSIGNMENT OF INSURANCE BENEFITS

The Client hereby assigns any insurance rights, benefits, proceeds, and causes of action under any applicable insurance policies to the Provider. This assignment is made in consideration of the Provider performing the services and not requiring a down payment from the Client prior to starting work.

The Client hereby acknowledges that the insurance company is billed as a courtesy and convenience to the Client; should the Client's insurance company fail to honor the assignment of claims and interest and direction to pay, the Client agrees to pay the Provider any balances due from the Client's personal funds.

**The Client is ultimately responsible for full payment of services rendered pursuant to this Contract.**

## AUTHORIZATION

I, the Client/Agent for the above Property, authorize Provider, its subcontractors, its agents, and representatives to enter my property, furnish materials, supply all equipment, and perform all labor necessary to mitigate, preserve, and protect my property from further damage.

## PRESUMPTION OF CONTRACTUAL AUTHORITY

By signing this Contract, the Client affirms that they have full legal authority to authorize all work on the Property, regardless of property title, ownership disputes, or insurance-related status.

## DIRECTION OF PAY

Providing the Client has valid and adequate insurance coverage, the Client authorizes and directs their insurance carrier to pay the Provider directly and to name the Provider on any insurance drafts applicable to this loss.

## PERSONAL GUARANTY

If Client is acting on behalf of an entity, Client personally guarantees payment of all amounts due under this Contract.

---

## PRICING AND PAYMENT

I understand that water damage is a progressive condition and that drying time varies depending on the types of materials, the quantity of water, the degree of saturation, airflow volume and velocity, temperature, and indoor & outdoor humidity.

**Therefore, I understand it is impracticable to give an accurate quote for services before completion.** I agree to pay the total price for the work the Provider performs.

The Provider utilizes an industry-standard price list for mitigation services, available in Attachment B.

### Pricing Determination

The total cost depends on various factors including but not limited to: types of materials affected, quantity of water present, degree of saturation, airflow volume and velocity, temperature, indoor and outdoor humidity, and duration of time that materials are subjected to water before mitigation efforts are started.

### Autonomous Pricing

The Provider's pricing structure is established through an independent cost analysis and is not subject to any third-party pricing structures.

### Payment Obligations

Upon completion of services, I agree to promptly pay the Provider the total price for the work performed. Payment shall be made in accordance with the terms and conditions specified in the invoice.

### Administrative Fees

The Client agrees to an administrative fee of **$198 per hour** for revisions or changes to estimates or invoices requested by the insurance company.

---

## INSURANCE DISPUTES & THIRD-PARTY LIMITATIONS

### Insurance Payments

If an insurance company makes any payment directly to the Client, payment shall be remitted to the Provider within three (3) working days. The Client is personally liable for all work performed regardless of whether an insurance company covers the loss.

### No Requirement to Work with Third-Party Adjusters

The Provider is not obligated to communicate with or work alongside any third-party adjusters, including those retained by the Client or the Client's insurance company.

### Client's Insurance Policy

The Client agrees that it is their sole responsibility to review, understand, and ensure compliance with their insurance policy. Any limitations, exclusions, or denials of coverage do not affect payment obligations under this Contract.

### Finance Charges

A finance charge of **1.5% per month** (minimum of $1.00) will be applied to any unpaid balance after thirty (30) days.
    `
  },
  waterDamageMold: {
    title: 'Water Damage & Mold',
    content: `
## EFFECT OF ABNORMAL WATER

Water indoors is an abnormal condition and may cause or contribute to several problems. The potential for property damage and adverse health effects increases the longer materials remain wet.

### Four Progressive Stages of Indoor Water Damage:

**Stage 1 - Water Migration**
Water migrates into areas not affected initially. Water spreads laterally into adjoining rooms, penetrates materials below, and wicks up into porous materials above.

**Stage 2 - Material Swelling**
Saturated materials begin swelling as they absorb moisture. Drying and restoration will restore them in many situations, and the damage may be permanent in others. Rapid drying will help reduce the chance of permanent damage.

**Stage 3 - Humidity Damage**
As water evaporates, it causes an abnormal humidity condition. High humidity can damage some porous materials if allowed to continue. Humidity damage is most common when the indoor humidity exceeds 60% over time.

**Stage 4 - Microbial Growth**
After water intrusion, mold and bacterial spores can germinate and multiply. Microorganisms can cause mold damage and degrade indoor air quality. Some microorganisms produce antigens and allergens, which cause allergies, while others can cause infections and toxic diseases.

---

## DETERMINATION OF WATER LOSS CATEGORY

Property Restoration Contractor uses its professional expertise, onsite observations, and recognized industry standards—including the IICRC S500 Standard—to determine the appropriate Category of water loss.

The Client acknowledges and agrees that the Category of water loss is not determined solely by the source of the water, but rather by the condition of the water at the time of assessment, and may change over time due to:

- Prolonged exposure
- Contact with building materials, insulation, or flooring
- Travel through wall cavities or subfloor systems
- Development of odors, discoloration, microbial growth, or other contamination

Even if the initial water source was clean (Category 1), the Provider is authorized to reclassify the loss to Category 2 or 3 when site conditions indicate degradation or contamination.

---

## MOLD & MILDEW DISCLAIMERS

Several things can be done to help reduce mold growth and damage:
- Water can be removed
- Antimicrobial agents can be applied
- Rapid air movement can be introduced
- Relative Humidity (RH) indoors can be reduced

**I understand that the Provider:**
- Is not a mold remediation company
- Does not guarantee or warrant that it can identify or remove mold
- That a company possessing expertise in mold remediation must be hired to help ensure proper identification, testing, and removal of mold and mildew
- The Provider's services may only help, not prevent or resolve, any issues related to mold and mildew
    `
  },
  safetyResponsibilities: {
    title: 'Safety & Client Responsibilities',
    content: `
## STOP WORK - HOLD HARMLESS

In the event that the Provider is prevented from performing its recommended mitigation and remediation procedures and/or drying equipment is removed prematurely, I agree to release and hold the Provider harmless and indemnify the Provider against any claims, actions, and liabilities that may result from such incomplete procedures.

## DRYING EQUIPMENT

I understand that high-velocity air movers ("fans") and dehumidifiers will be installed to increase the rate of drying.

**The Client represents and warrants that they:**
- Will not allow children to play with this equipment
- Will not turn off the equipment without first calling the Provider
- Will not leave windows open unless expressly instructed to do so
- Will minimize entering the affected rooms, especially those where carpet is being dried

## HEALTH AND SAFETY

To ensure the health and safety of the Client and the Provider's employees:

- If dehumidifiers or fans are moved, these units shall be shut off and unplugged
- Take care when walking near the tackless strip, as the exposed tackless strip presents a danger
- Take extreme care when walking on, around, or from wet flooring materials

## AIRBORNE CONTAMINANTS

The Provider's mitigation efforts can sometimes cause preexisting contaminants to become airborne. The Provider highly recommends that all persons coming into contact with the Property during mitigation wear Protective Personal Equipment (PPE).

The Provider recommends that all occupants of the Property seek alternative work or living arrangements while mitigation efforts are underway.

**If the Property remains occupied**, the Client shall take reasonable care to protect any occupants from health hazards including but not limited to: Asbestos, Lead, Mold, etc.

## SITE HAZARDS

Active mitigation and remediation work sites can present many dangerous conditions. The Client agrees to release, indemnify, and hold the Provider harmless for any personal injuries or damage to the health and well-being of all those who enter the Property during and after the mitigation process.

## EQUIPMENT RESPONSIBILITY

The Client represents and warrants that:
- They are personally liable for any damage to, loss of, or theft of the Provider's equipment while in their care and custody
- They shall take reasonable precautions to ensure that the Provider's equipment is not lost, stolen, or damaged
- Equipment shall be deemed lost or stolen if not returned within 24 hours of Provider's request

**If the Provider's equipment is lost, stolen, or damaged, the Client hereby agrees to pay for the total replacement cost and all consequential losses.**

---

## CLIENT RESPONSIBILITIES

### Services
The Client acknowledges that due to the emergency nature of services, the Provider is incapable of providing a detailed, written estimate prior to completion of work. Services will commence immediately upon signing.

### Unrelated Conditions
The Provider is not responsible for detecting, addressing, correcting, or repairing conditions unrelated to the event that necessitated services.

### Special/Fragile/Valuable Items
The Client agrees to take full responsibility for special, fragile, or valuable items including but not limited to: Jewelry, Cash, Weapons, and Medications.

### Environmental Conditions
The Client understands that certain amounts of mold and bacteria are normal in an indoor environment, and the Provider makes no representations or guarantees that it can, will, or has left the Property sterile.

### Pre-existing Contaminants
The Provider is not an Environmental Testing Contractor and does not guarantee that it can identify or remove pre-existing contaminants.

### Required Information
The Client shall provide the Provider with a complete history of known information regarding relevant facts about the structures and conditions present in and around the Property.

### Site Access and Security
The Client agrees to provide access to the Property to the Provider. The Client shall provide all water, electricity, and other utilities necessary for the Provider to perform its services.

### Dumpster Placement
The Client agrees to allow the Provider to place a dumpster on the driveway or street as necessary. The Provider shall not be held responsible for any damage to the driveway caused by dumpster placement.
    `
  },
  legalTerms: {
    title: 'Legal Terms & Protections',
    content: `
## LIMITATION OF LIABILITY

Client agrees to release, hold harmless, defend, and indemnify Provider from all damages, claims, or actions that arise from:

- Conditions that pre-existed the specific loss
- The premature removal of equipment or termination of services
- Any refusal to allow the Provider to perform recommended services
- Problems including but not limited to: mold, bacteria, structural damage, indoor air quality contamination, and environmental illnesses

**In no event shall Property Restoration Contractor be responsible for indirect, special, nominal, incidental, punitive, or consequential losses or damages.**

**The maximum aggregate liability shall not exceed the amount paid by the Client for the services or actual proven damages, whichever is less.**

## WARRANTIES

Property Restoration Contractor specifically disclaims any other representations, warranties, and implied warranties (either in fact or by operation of law), including but not limited to any implied warranties of merchantability and fitness for a particular purpose.

## NONPERFORMANCE AND BREACH

Any claim by the Client for faulty performance, nonperformance, or breach under this Contract shall be made in writing within **sixty (60) days** after completion of services. Failure to make such a written claim shall be deemed a waiver.

No action relating to this Contract may be brought more than **one (1) year** after the claiming party knew or should have known of the cause of action.

## FORCE MAJEURE

Performance shall be excused for strikes, lockouts, labor disputes, acts of God, governmental actions, fire, flood, pandemics, supply chain disruptions, and other causes beyond reasonable control.

## SEVERABILITY

If any provision of this Contract is found to be unenforceable, such provision shall be severable, and this Contract shall be construed as if such provision never comprised a part of this Contract.

## OVERHEAD AND PROFIT

Property Restoration Contractor shall be entitled to an addition of **Fifteen Percent (15%) overhead** and **Fifteen Percent (15%) profit** for all services rendered by subcontractors.

## MERGER CLAUSE

This Contract contains the final, complete, and exclusive statement of the Agreement between the Provider and the Client. All prior communications are merged herein and superseded.

---

## MECHANIC'S LIEN RIGHTS

**NOTICE TO CLIENT:** Property Restoration Contractor provides emergency services immediately—without requiring any deposit or upfront payment from the Client. To protect its right to be paid for these services, Provider may file a Mechanic's Lien against the property.

### Consent to Lien Filing
The Client hereby expressly consents to the filing of a Mechanic's Lien by Property Restoration Contractor against the real property where services are performed.

### Insurance Payment Delays
The Client understands that payments from insurance carriers may take several months after work is completed. These delays shall not restrict the Provider's right to file a lien within statutory time frames.

---

## GOVERNING LAW

This Contract and the rights and obligations of the parties are governed by the laws of the **Commonwealth of Virginia**. The Client consents to the jurisdiction and Venue of **Fairfax County, Virginia**.

## WAIVER OF RIGHT TO JURY TRIAL

Both parties waive their respective rights to a trial by jury with respect to any claims or causes of action related to this Contract.

## ELECTRONIC SIGNATURES

The Parties agree that this Contract may be executed using electronic signatures. Electronic signatures shall carry the same legal force and effect as handwritten signatures in accordance with applicable laws.

## ATTORNEYS' FEES

Should the need arise for legal action to collect monies due under this Contract, Property Restoration Contractor shall be entitled to reasonable legal fees and costs, and a finance charge of **1.5% per month**.
    `
  },
  scopeOfWork: {
    title: 'Attachment A: Scope of Work',
    content: `
## SCOPE OF WORK

"The Contractor agrees to perform all necessary and appropriate services related to, but not limited to, water damage restoration, mold mitigation, and any other similar services as may be required by the nature of the damage or as requested by the Client.

The scope of work shall include all labor, materials, equipment, and supervision necessary to restore the property to its pre-damage condition or to address any other specified concerns.

The Contractor shall execute the work in a professional and workmanlike manner, adhering to industry standards and applicable regulations."

---

## CLIENT ACKNOWLEDGMENT

The Client agrees that all costs related to any required supplements or additions to work or code requirements that are not covered by insurance are the sole responsibility of the Client.

**Supplemental work includes:**
- Betterment
- Owner-selected changes
- Enforcement of code or ordinances by the municipality or building department

---

## EMERGENCY WAIVER

Owner requests that Contractor provide the Work listed in this Contract without delay because of an emergency (flooding or other water event) and Owner understands that Owner is waiving Owner's right to cancel the sale under the provisions of the Virginia Home Solicitation Sales Act.

## CANCELLATION POLICY

In the event of cancellation by the Client for any reason, the Company reserves the right to retain **thirty percent (30%)** of the total contract price as a non-refundable fee to cover administrative costs, scheduling commitments, and loss of opportunity.
    `
  }
};

// Price list data
const PRICE_LIST = [
  { service: '2" Submersible Pump with Hose', code: 'WTREXTWPC', unit: 'Per Hour', price: '$91.68' },
  { service: 'Add for PPE - Heavy Duty', code: 'WTRPPE+', unit: 'Per Set', price: '$258.00' },
  { service: 'Air Mover (per 24 hour period)', code: 'WTRDRY', unit: 'Per Day', price: '$40.00-$48.31' },
  { service: 'Air Mover Axial Fan (per 24 hour period)', code: 'WTRDRY+', unit: 'Per Day', price: '$58.08' },
  { service: 'Antimicrobial Cleaning', code: 'WTRGRM', unit: 'Per Room', price: '$300-$4,500' },
  { service: 'Apply Plant Based Antimicrobial - After Hours', code: 'WTRGRMBA', unit: 'Per Room', price: '$300-$4,500' },
  { service: 'Baseboard - Detach', code: 'WTRBASED', unit: 'Per LF', price: '$2.98' },
  { service: 'Baseboard - Detach & Reset', code: 'WTRBASERS', unit: 'Per LF', price: '$2.85' },
  { service: 'Block and Pad Furniture - Hourly', code: 'WTRBLKHR', unit: 'Per Hour', price: '$77.55' },
  { service: 'Block and Pad Furniture in Room', code: 'WTRBLK', unit: 'Per Room', price: '$66.18' },
  { service: 'Cabinet - Lower (base) Unit - Detach', code: 'WTRCABLWD', unit: 'Per LF', price: '$58.15' },
  { service: 'Cabinet - Upper (wall) Unit - Detach', code: 'WTRCABUPD', unit: 'Per LF', price: '$65.52' },
  { service: 'Cabinet - Vanity Unit - Detach', code: 'WTRCABVND', unit: 'Per LF', price: '$15.53' },
  { service: 'Carbon Vapor Filter (16" x 16")', code: 'WTRFLVAP', unit: 'Per Unit', price: '$274.20' },
  { service: 'Carpet - Disengage from Tack Strip', code: '-', unit: 'Per SF', price: '$2.32' },
  { service: 'Clean & Restock Equipment', code: '-', unit: 'Per Piece', price: '$78.00' },
  { service: 'Cleaning Technician', code: 'WTRLABC', unit: 'Per Hour', price: '$41.43' },
  { service: 'Containment Barrier - Tension Post', code: 'WTRBARRP', unit: 'Per Day', price: '$3.64' },
  { service: 'Containment Barrier/Airlock', code: 'WTRBARR', unit: 'Per SF', price: '$0.76' },
  { service: 'Contamination - Air/Surface Testing', code: 'WTRBIDITM', unit: 'Per Test', price: '$998.39' },
  { service: 'Contamination - On-site ATP Testing', code: 'WTRTESTATP', unit: 'Per Unit', price: '$26.76' },
  { service: 'Content Manipulation - After Hours', code: 'CONLABA', unit: 'Per Hour', price: '$78.47' },
  { service: 'Dehumidifier - XL (per 24hr)', code: 'WTRDHM>>', unit: 'Per Day', price: '$228.00' },
  { service: 'Dehumidifier - Large (per 24hr)', code: 'WTRDHMD', unit: 'Per Day', price: '$178.00' },
  { service: 'Dishwasher - Detach', code: 'WTRDWD', unit: 'Per Unit', price: '$59.59' },
  { service: 'Drill Holes for Wall Cavity Drying', code: 'WTRWALLH', unit: 'Per Unit', price: '$3.50' },
  { service: 'Dumpster - 12 yards (1-3 tons)', code: 'DMODUMP<', unit: 'Per Load', price: '$498.33' },
  { service: 'Dumpster - 20 yards (4 tons)', code: 'DMODUMP', unit: 'Per Load', price: '$615.20' },
  { service: 'Dumpster - 30 yards (5-7 tons)', code: 'DMODUMP>', unit: 'Per Load', price: '$936.47' },
  { service: 'Dumpster - 40 yards (7-8 tons)', code: 'DMODUMP>>', unit: 'Per Load', price: '$836.80' },
  { service: 'Emergency Response - After Hours', code: 'WTRESRV', unit: 'Per Call', price: '$400-$2,500' },
  { service: 'Emergency Response - Business Hours', code: 'WTRESRVD', unit: 'Per Call', price: '$200-$2,500' },
  { service: 'Equipment Decontamination - CAT 3', code: '-', unit: 'Per Unit', price: '$78.00' },
  { service: 'Equipment Delivery and Setup', code: '-', unit: 'Per Trip', price: '$128.00' },
  { service: 'Equipment Setup, Take Down & Monitoring', code: 'WTREQ', unit: 'Per Hour', price: '$58.00' },
  { service: 'Equipment Monitoring - After Hours', code: 'WTREQA', unit: 'Per Hour', price: '$88.00' },
  { service: 'General Cleaning - Minimum Charge', code: '-', unit: 'Minimum', price: '$198-$4,800' },
  { service: 'Hang Dry Carpet in Plant', code: 'WTRHDRY', unit: 'Per SF', price: '$7.80' },
  { service: 'Hardwood Removal', code: '-', unit: 'Per SF', price: '$2.98' },
  { service: 'Haul Debris - Per Pickup Load', code: '-', unit: 'Per Load', price: '$388.00' },
  { service: 'Heat Drying - Thermal Air Mover', code: 'WTRHTAM', unit: 'Per Day', price: '$198.45' },
  { service: 'HEPA Air Scrubber Filter', code: 'WTRFHEPA', unit: 'Per Filter', price: '$228.00' },
  { service: 'HEPA Vacuuming', code: 'WTRHEPAVAC', unit: 'Per Hour', price: '$58.82' },
  { service: 'HEPA Vacuuming - Detailed', code: 'WTRHEPAVAS', unit: 'Per SF', price: '$1.98' },
  { service: 'Initial Response/Evaluation', code: '-', unit: 'Per Visit', price: '$488-$5,000' },
  { service: 'Interior Door - Detach & Reset', code: '-', unit: 'Per Unit', price: '$80.75' },
  { service: 'Lift Carpet for Drying', code: 'WTRLIFT', unit: 'Per SF', price: '$2.37' },
  { service: 'Muck-out/Flood Cleanup', code: 'WTRMUCK', unit: 'Per SF', price: '$3.71' },
  { service: 'Muck-out/Flood Cleanup - Heavy', code: 'WTRMUCK+', unit: 'Per SF', price: '$6.39' },
  { service: 'Negative Air Fan/Air Scrubber', code: 'WTRNAFAN', unit: 'Per Day', price: '$278.59' },
  { service: 'Padding - Removal', code: '-', unit: 'Per SF', price: '$1.68' },
  { service: 'Pedestal Sink - Detach', code: 'WTRSNKPD', unit: 'Per Unit', price: '$51.35' },
  { service: 'Peel & Seal Zipper', code: 'WTRBARRZ', unit: 'Per Unit', price: '$12.77' },
  { service: 'PPE Bundle (per tech per day)', code: '-', unit: 'Per Tech', price: '$114.00' },
  { service: 'Protect - Cover with Plastic', code: 'WTRPROT', unit: 'Per SF', price: '$1.28' },
  { service: 'Refrigerator - Detach', code: 'WTRRFD', unit: 'Per Unit', price: '$26.27' },
  { service: 'Rug Cleaning', code: '-', unit: 'Per Unit', price: '$281.14' },
  { service: 'Sand Exposed Framing - Floor', code: 'WTRSANDF', unit: 'Per SF', price: '$2.43' },
  { service: 'Sand Exposed Framing - Walls', code: 'WTRSANDW', unit: 'Per SF', price: '$2.29' },
  { service: 'Service Call', code: '-', unit: 'Per Call', price: '$388.00' },
  { service: 'Supervisor - Mold Specialist', code: '-', unit: 'Per Hour', price: '$83.06' },
  { service: 'Tear Out and Bag Wet Insulation', code: 'WTRINS', unit: 'Per SF', price: '$4.75' },
  { service: 'Tear Out Baseboard', code: 'WTRBASE', unit: 'Per LF', price: '$2.47' },
  { service: 'Tear Out Wet Carpet Pad', code: 'WTRPAD', unit: 'Per SF', price: '$2.51' },
  { service: 'Tear Out Wet Drywall', code: 'WTRDRYW', unit: 'Per SF', price: '$3.91' },
  { service: 'Tear Out Non-Salvageable Carpet', code: 'WTRFCC', unit: 'Per SF', price: '$1.98' },
  { service: 'Tear Out Tackless', code: 'WTRTACK', unit: 'Per LF', price: '$2.91' },
  { service: 'Tear Out Trim', code: 'WTRTRI', unit: 'Per LF', price: '$3.47' },
  { service: 'Thermal Imaging', code: 'WTRTHERM', unit: 'Per Visit', price: '$280-$1,800' },
  { service: 'Toilet - Detach', code: 'WTRTLTD', unit: 'Per Unit', price: '$98.00' },
  { service: 'Toilet - Detach - After Hours', code: 'WTRTLTDA', unit: 'Per Unit', price: '$168.00' },
  { service: 'Trash Removal - Per Truck Load', code: '-', unit: 'Per Load', price: '$489.00' },
  { service: 'Wall Cavity Drying - Injection Type', code: '-', unit: 'Per Day', price: '$182.69' },
  { service: 'Water Extraction - Hard Surface - CAT 2', code: 'WTREXTHGA', unit: 'Per SF', price: '$2.67' },
];

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
        className="w-full flex items-center justify-between p-4 md:p-5 bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'
          }`}>
            {isChecked && <Check className="w-4 h-4 text-white" />}
          </div>
          <span className="font-semibold text-slate-800 text-left">{title}</span>
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
          {/* Render markdown-style content */}
          <div className="prose prose-slate prose-sm max-w-none">
            {content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-3 first:mt-0">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-base font-semibold text-slate-800 mt-4 mb-2">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-semibold text-slate-900 my-2">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-4 text-slate-700">{line.replace('- ', '')}</li>;
              }
              if (line.startsWith('---')) {
                return <hr key={i} className="my-6 border-slate-200" />;
              }
              if (line.trim() === '') {
                return <div key={i} className="h-2" />;
              }
              // Handle bold text within lines
              const parts = line.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-slate-700 my-2 leading-relaxed">
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j} className="font-semibold text-slate-900">{part.replace(/\*\*/g, '')}</strong>;
                    }
                    return part;
                  })}
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

            {/* Initial field for price list */}
            {requiresInitial && (
              <div className="mt-4 flex items-center gap-3">
                <label className="text-sm text-slate-700">Initial here:</label>
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
          <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> A "Day" is defined as 24 hours starting at 12:00 am and ending at 11:59 pm.
              Any portion of a day is billed as a full day.
            </p>
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
  const [priceListInitial, setPriceListInitial] = useState('');
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

  const allSectionsChecked = checkedSections.size === 7; // 5 main + scope + priceList
  const hasPriceListInitial = priceListInitial.trim().length >= 2;
  const hasSignature = signature !== '';
  const hasRequiredFields = formData.name && formData.phone && formData.propertyAddress;

  const canSubmit = allSectionsChecked && hasPriceListInitial && hasSignature && hasRequiredFields;

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
          priceListInitial,
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
                {checkedSections.size} of 7 sections reviewed
              </span>
              <div className="flex items-center gap-2">
                {hasPriceListInitial && <Check className="w-4 h-4 text-emerald-500" />}
                {hasSignature && <Check className="w-4 h-4 text-emerald-500" />}
              </div>
            </div>
            <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1a73e8] transition-all duration-300"
                style={{ width: `${(checkedSections.size / 7) * 100}%` }}
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
              for each section and provide your initials for the price list before signing.
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Contract Sections */}
            <div className="space-y-3 mb-8">
              {/* Section 1: Introduction & Definitions */}
              <AccordionSection
                id="introduction"
                title={CONTRACT_SECTIONS.introduction.title}
                content={CONTRACT_SECTIONS.introduction.content}
                isOpen={openSections.has('introduction')}
                isChecked={checkedSections.has('introduction')}
                onToggle={() => toggleSection('introduction')}
                onCheck={(checked) => toggleCheck('introduction', checked)}
              />

              {/* Section 2: Payment & Insurance */}
              <AccordionSection
                id="paymentInsurance"
                title={CONTRACT_SECTIONS.paymentInsurance.title}
                content={CONTRACT_SECTIONS.paymentInsurance.content}
                isOpen={openSections.has('paymentInsurance')}
                isChecked={checkedSections.has('paymentInsurance')}
                onToggle={() => toggleSection('paymentInsurance')}
                onCheck={(checked) => toggleCheck('paymentInsurance', checked)}
              />

              {/* Section 3: Water Damage & Mold */}
              <AccordionSection
                id="waterDamageMold"
                title={CONTRACT_SECTIONS.waterDamageMold.title}
                content={CONTRACT_SECTIONS.waterDamageMold.content}
                isOpen={openSections.has('waterDamageMold')}
                isChecked={checkedSections.has('waterDamageMold')}
                onToggle={() => toggleSection('waterDamageMold')}
                onCheck={(checked) => toggleCheck('waterDamageMold', checked)}
              />

              {/* Section 4: Safety & Client Responsibilities */}
              <AccordionSection
                id="safetyResponsibilities"
                title={CONTRACT_SECTIONS.safetyResponsibilities.title}
                content={CONTRACT_SECTIONS.safetyResponsibilities.content}
                isOpen={openSections.has('safetyResponsibilities')}
                isChecked={checkedSections.has('safetyResponsibilities')}
                onToggle={() => toggleSection('safetyResponsibilities')}
                onCheck={(checked) => toggleCheck('safetyResponsibilities', checked)}
              />

              {/* Section 5: Legal Terms & Protections */}
              <AccordionSection
                id="legalTerms"
                title={CONTRACT_SECTIONS.legalTerms.title}
                content={CONTRACT_SECTIONS.legalTerms.content}
                isOpen={openSections.has('legalTerms')}
                isChecked={checkedSections.has('legalTerms')}
                onToggle={() => toggleSection('legalTerms')}
                onCheck={(checked) => toggleCheck('legalTerms', checked)}
              />

              {/* Attachment A: Scope of Work */}
              <AccordionSection
                id="scopeOfWork"
                title={CONTRACT_SECTIONS.scopeOfWork.title}
                content={CONTRACT_SECTIONS.scopeOfWork.content}
                isOpen={openSections.has('scopeOfWork')}
                isChecked={checkedSections.has('scopeOfWork')}
                onToggle={() => toggleSection('scopeOfWork')}
                onCheck={(checked) => toggleCheck('scopeOfWork', checked)}
              />

              {/* Attachment B: Price List */}
              <PriceListSection
                isOpen={openSections.has('priceList')}
                isChecked={checkedSections.has('priceList')}
                onToggle={() => toggleSection('priceList')}
                onCheck={(checked) => toggleCheck('priceList', checked)}
                initialValue={priceListInitial}
                onInitialChange={setPriceListInitial}
              />
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
                      A hold may be placed on your card while our equipment is in your care and custody.
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
                  Signature *
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
                    {!allSectionsChecked && <li>Review and check all {7 - checkedSections.size} remaining sections</li>}
                    {!hasPriceListInitial && <li>Add your initials to the Price List</li>}
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
