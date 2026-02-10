import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Droplets,
  Waves,
  Home,
  AlertTriangle,
  Wind,
  Flame,
  ThermometerSnowflake,
  LucideIcon
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import { CityConfig } from '../../config/cities';
import MoldIcon from '../../components/icons/MoldIcon';

interface ServiceConfig {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  icon: LucideIcon;
  heroDescription: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const serviceConfigs: Record<string, ServiceConfig> = {
  'water-damage-restoration': {
    slug: 'water-damage-restoration',
    title: 'Water Damage Restoration',
    metaTitle: 'Water Damage Restoration',
    description: 'Professional water damage restoration services including emergency extraction, structural drying, and complete restoration.',
    icon: Droplets,
    heroDescription: 'When water damage strikes, every minute counts. Our IICRC-certified technicians provide rapid water extraction, structural drying, and complete restoration to get your home back to normal.',
    benefits: [
      'Emergency water extraction with industrial-grade equipment',
      'Complete structural drying with commercial dehumidifiers',
      'Moisture mapping and monitoring throughout the process',
      'Mold prevention treatments to protect your home',
      'Direct insurance billing and claim assistance',
      'Full reconstruction and restoration services',
    ],
    process: [
      { step: '1', title: 'Emergency Response', description: 'We arrive within our guaranteed response time, fully equipped to begin water extraction immediately.' },
      { step: '2', title: 'Water Extraction', description: 'Industrial pumps and extractors remove standing water 10x faster than consumer equipment.' },
      { step: '3', title: 'Structural Drying', description: 'Commercial dehumidifiers and air movers dry your structure to prevent mold and further damage.' },
      { step: '4', title: 'Restoration', description: 'We repair and restore damaged materials, returning your home to pre-damage condition.' },
    ],
    faqs: [
      { question: 'How quickly can you respond to water damage?', answer: 'We guarantee rapid response times and are available 24/7 for emergencies.' },
      { question: 'Do you work with insurance companies?', answer: 'Yes, we work directly with all major insurance companies and can bill them directly.' },
      { question: 'How long does water damage restoration take?', answer: 'Most residential projects take 3-5 days for drying, with full restoration varying by scope.' },
    ],
  },
  'flood-cleanup': {
    slug: 'flood-cleanup',
    title: 'Flood Cleanup',
    metaTitle: 'Flood Cleanup Services',
    description: 'Rapid flood cleanup and water removal services for homes and businesses.',
    icon: Waves,
    heroDescription: 'Flooding can devastate your property in hours. Our flood cleanup specialists respond immediately with powerful extraction equipment to minimize damage and start the restoration process.',
    benefits: [
      'Rapid water extraction from flooded areas',
      'Sewage and contaminated water handling',
      'Salvage and content restoration',
      'Antimicrobial treatments to prevent bacteria growth',
      'Complete structural drying and dehumidification',
      'Insurance documentation and claim support',
    ],
    process: [
      { step: '1', title: 'Assessment', description: 'We evaluate flood damage extent and create a restoration plan.' },
      { step: '2', title: 'Water Removal', description: 'Powerful submersible pumps remove standing water quickly.' },
      { step: '3', title: 'Cleaning & Sanitizing', description: 'All affected areas are cleaned and treated with antimicrobials.' },
      { step: '4', title: 'Drying & Restoration', description: 'Complete drying followed by repairs and restoration.' },
    ],
    faqs: [
      { question: 'Is flood water dangerous?', answer: 'Yes, flood water often contains sewage, bacteria, and contaminants. Professional cleanup is essential for safety.' },
      { question: 'Will my insurance cover flood damage?', answer: 'Standard homeowners insurance typically doesn\'t cover flooding. You need separate flood insurance.' },
    ],
  },
  'mold-remediation': {
    slug: 'mold-remediation',
    title: 'Mold Remediation',
    metaTitle: 'Mold Remediation & Removal',
    description: 'Professional mold inspection, removal, and prevention services.',
    icon: MoldIcon as unknown as LucideIcon,
    heroDescription: 'Mold can spread rapidly after water damage, causing health issues and structural damage. Our certified mold remediation specialists safely remove mold and prevent its return.',
    benefits: [
      'Comprehensive mold inspection and testing',
      'Safe containment to prevent spore spread',
      'Complete mold removal using IICRC protocols',
      'HEPA air filtration throughout the process',
      'Antimicrobial treatments to prevent regrowth',
      'Post-remediation clearance testing',
    ],
    process: [
      { step: '1', title: 'Inspection', description: 'Thorough inspection to identify all mold growth and moisture sources.' },
      { step: '2', title: 'Containment', description: 'Affected areas are sealed to prevent cross-contamination.' },
      { step: '3', title: 'Removal', description: 'Mold is safely removed following IICRC S520 standards.' },
      { step: '4', title: 'Prevention', description: 'Moisture issues are addressed and preventive treatments applied.' },
    ],
    faqs: [
      { question: 'How do I know if I have mold?', answer: 'Signs include musty odors, visible growth, and allergy symptoms. We offer professional testing.' },
      { question: 'Is mold dangerous?', answer: 'Some molds produce mycotoxins that can cause health issues, especially for sensitive individuals.' },
    ],
  },
  'basement-flooding': {
    slug: 'basement-flooding',
    title: 'Basement Flooding',
    metaTitle: 'Basement Flooding Restoration',
    description: 'Specialized basement water damage restoration and waterproofing services.',
    icon: Home,
    heroDescription: 'Basement flooding requires specialized expertise. We handle everything from emergency water extraction to complete basement restoration, including finished basement recovery.',
    benefits: [
      'Rapid basement water extraction',
      'Sump pump repair and installation',
      'Foundation moisture assessment',
      'Finished basement restoration',
      'Waterproofing recommendations',
      'Mold prevention in damp environments',
    ],
    process: [
      { step: '1', title: 'Water Removal', description: 'Powerful pumps remove water from your flooded basement.' },
      { step: '2', title: 'Content Salvage', description: 'We carefully remove and assess salvageable items.' },
      { step: '3', title: 'Drying', description: 'Commercial equipment dries the basement structure completely.' },
      { step: '4', title: 'Restoration', description: 'Damaged materials are repaired or replaced.' },
    ],
    faqs: [
      { question: 'Can my finished basement be saved?', answer: 'In most cases, yes. Quick response is key to saving finished basements.' },
      { question: 'What causes basement flooding?', answer: 'Common causes include sump pump failure, heavy rain, foundation cracks, and plumbing issues.' },
    ],
  },
  'sewage-cleanup': {
    slug: 'sewage-cleanup',
    title: 'Sewage Cleanup',
    metaTitle: 'Sewage Cleanup & Sanitization',
    description: 'Safe sewage backup cleanup with complete sanitization.',
    icon: AlertTriangle,
    heroDescription: 'Sewage backups pose serious health risks. Our certified technicians safely remove sewage, sanitize affected areas, and restore your property to safe, livable conditions.',
    benefits: [
      'Safe removal of sewage and contaminated materials',
      'Complete sanitization and disinfection',
      'Odor elimination treatments',
      'Personal protective equipment for all technicians',
      'Proper disposal of biohazardous materials',
      'Insurance claim documentation',
    ],
    process: [
      { step: '1', title: 'Safety First', description: 'We assess hazards and establish safety protocols.' },
      { step: '2', title: 'Extraction', description: 'Sewage and contaminated water are safely removed.' },
      { step: '3', title: 'Sanitization', description: 'All affected areas are thoroughly cleaned and disinfected.' },
      { step: '4', title: 'Restoration', description: 'Damaged materials are replaced and the area is restored.' },
    ],
    faqs: [
      { question: 'Is sewage cleanup dangerous to do myself?', answer: 'Yes, sewage contains harmful bacteria and pathogens. Professional cleanup is strongly recommended.' },
      { question: 'How long does sewage cleanup take?', answer: 'Typically 2-4 days depending on the extent of contamination.' },
    ],
  },
  'storm-damage': {
    slug: 'storm-damage',
    title: 'Storm Damage Restoration',
    metaTitle: 'Storm Damage Restoration',
    description: 'Complete storm and weather damage restoration services.',
    icon: Wind,
    heroDescription: 'Storms can cause extensive damage to your property. We provide comprehensive storm damage restoration including water damage, roof tarping, debris removal, and complete repairs.',
    benefits: [
      'Emergency tarping and board-up services',
      'Water intrusion cleanup and drying',
      'Wind and debris damage repair',
      'Tree and limb removal coordination',
      'Complete reconstruction services',
      'Insurance claim assistance',
    ],
    process: [
      { step: '1', title: 'Emergency Response', description: 'We secure your property with tarps and board-ups.' },
      { step: '2', title: 'Damage Assessment', description: 'Comprehensive evaluation of all storm damage.' },
      { step: '3', title: 'Mitigation', description: 'Prevent further damage with immediate repairs.' },
      { step: '4', title: 'Restoration', description: 'Complete repair and restoration of your property.' },
    ],
    faqs: [
      { question: 'Should I wait for my insurance adjuster before cleanup?', answer: 'No, document the damage with photos/video, then begin mitigation to prevent further damage.' },
      { question: 'Do you handle both interior and exterior damage?', answer: 'Yes, we provide complete storm damage restoration services.' },
    ],
  },
  'fire-damage': {
    slug: 'fire-damage',
    title: 'Fire & Smoke Damage Restoration',
    metaTitle: 'Fire & Smoke Damage Restoration',
    description: 'Complete fire damage restoration, smoke removal, and odor elimination.',
    icon: Flame,
    heroDescription: 'Fire damage affects your property in multiple ways—from structural damage to smoke and soot. We provide complete fire damage restoration including cleanup, odor removal, and reconstruction.',
    benefits: [
      'Emergency board-up and securing',
      'Smoke and soot removal from all surfaces',
      'Odor elimination using thermal fogging',
      'Content cleaning and restoration',
      'Structural repairs and reconstruction',
      'Complete restoration to pre-loss condition',
    ],
    process: [
      { step: '1', title: 'Secure Property', description: 'Board-up and tarping to protect from elements.' },
      { step: '2', title: 'Assessment', description: 'Evaluate all fire, smoke, and water damage.' },
      { step: '3', title: 'Cleanup', description: 'Remove smoke, soot, and damaged materials.' },
      { step: '4', title: 'Restoration', description: 'Complete repairs and reconstruction.' },
    ],
    faqs: [
      { question: 'How do you remove smoke odor?', answer: 'We use thermal fogging, ozone treatments, and hydroxyl generators to eliminate odors.' },
      { question: 'Can smoke-damaged items be saved?', answer: 'Many items can be restored with professional cleaning. We assess each item.' },
    ],
  },
  'burst-pipes': {
    slug: 'burst-pipes',
    title: 'Burst Pipe Restoration',
    metaTitle: 'Burst & Frozen Pipe Restoration',
    description: 'Emergency burst and frozen pipe water damage restoration.',
    icon: ThermometerSnowflake,
    heroDescription: 'A burst pipe can release hundreds of gallons of water in minutes. Our emergency team responds rapidly to stop the damage, extract water, and restore your property.',
    benefits: [
      'Rapid emergency response',
      'Water shut-off and pipe repair coordination',
      'Complete water extraction',
      'Structural drying to prevent mold',
      'Damaged material restoration',
      'Prevention advice for future protection',
    ],
    process: [
      { step: '1', title: 'Emergency Call', description: 'We guide you to shut off water while en route.' },
      { step: '2', title: 'Water Extraction', description: 'Immediate extraction to minimize damage.' },
      { step: '3', title: 'Drying', description: 'Complete structural drying with monitoring.' },
      { step: '4', title: 'Restoration', description: 'Repair all water-damaged materials.' },
    ],
    faqs: [
      { question: 'What should I do when a pipe bursts?', answer: 'Shut off the main water supply immediately, then call us for emergency service.' },
      { question: 'How can I prevent frozen pipes?', answer: 'Insulate pipes, keep heat on, and let faucets drip during extreme cold.' },
    ],
  },
};

interface CityServiceDetailProps {
  city: CityConfig;
  serviceSlug: string;
}

const CityServiceDetail: React.FC<CityServiceDetailProps> = ({ city, serviceSlug }) => {
  const service = serviceConfigs[serviceSlug];

  if (!service) {
    return <div>Service not found</div>;
  }

  const Icon = service.icon;

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${service.metaTitle} in ${city.name}, ${city.state} | Flood Doctor`}
        description={`${service.description} Serving ${city.name}, ${city.state}. ${city.responseTime} response. Call (877) 497-0007.`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">{city.name}, {city.state}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title} in {city.name}, {city.state}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {service.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:8774970007"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-6 h-6" />
                (877) 497-0007
              </a>
              <Link
                to="/contact/"
                className="hidden md:inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/20"
              >
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span>{city.responseTime} Response in {city.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9★ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {service.title} Services for {city.name} Homes
              </h2>
              <p className="text-gray-600 mb-8">
                {service.description} Our {city.name} team responds quickly to minimize damage
                and restore your property.
              </p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">
                How fast can you respond in {city.name}?
              </h3>
              <p className="text-gray-600">
                Our {city.name} response time is {city.responseTime}. We're available 24/7
                for emergencies throughout {city.name} and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need {service.title} in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to respond 24/7. Call now for immediate service.
          </p>
          <a
            href="tel:8774970007"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all"
          >
            <Phone className="w-7 h-7" />
            (877) 497-0007
          </a>
        </div>
      </section>
    </main>
  );
};

export default CityServiceDetail;
export { serviceConfigs };
