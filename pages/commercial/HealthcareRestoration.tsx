import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  Award,
  CheckCircle,
  Phone,
  AlertCircle,
  Zap,
  FileCheck,
  Users,
  ChevronDown
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';

interface Service {
  title: string;
  description: string;
  details: string[];
}

const HealthcareRestoration: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Immediate deployment to minimize downtime and protect patient care operations"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Protocols",
      description: "Certified processes ensuring patient data security during restoration"
    },
    {
      icon: Users,
      title: "Minimal Disruption",
      description: "Work schedules coordinated around patient care and facility operations"
    },
    {
      icon: FileCheck,
      title: "Complete Documentation",
      description: "Detailed reporting for insurance, compliance, and regulatory requirements"
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Medical-grade antimicrobial treatments and air filtration systems"
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "IICRC certified technicians with healthcare facility experience"
    }
  ];

  const services: Service[] = [
    {
      title: "Emergency Water Extraction",
      description: "Rapid response for flooding, pipe bursts, and water damage events",
      details: [
        "Immediate water removal within 60 minutes",
        "Sterile containment protocols for medical areas",
        "Protection of medical equipment and supplies",
        "Coordination with facilities management teams"
      ]
    },
    {
      title: "Structural Drying & Dehumidification",
      description: "Medical-grade drying to prevent mold and maintain air quality",
      details: [
        "HEPA-filtered commercial dehumidifiers",
        "Air quality monitoring and documentation",
        "Moisture mapping and thermal imaging",
        "Negative air pressure containment when needed"
      ]
    },
    {
      title: "Mold Remediation",
      description: "Healthcare-compliant mold removal and prevention",
      details: [
        "EPA and OSHA compliant procedures",
        "Containment barriers to isolate affected areas",
        "Medical-grade antimicrobial treatments",
        "Post-remediation air quality testing"
      ]
    },
    {
      title: "Sewage & Biohazard Cleanup",
      description: "Category 3 water damage requiring specialized protocols",
      details: [
        "OSHA bloodborne pathogen certified technicians",
        "Complete sanitization and disinfection",
        "Proper disposal of contaminated materials",
        "Hospital-grade cleaning protocols"
      ]
    },
    {
      title: "Contents Restoration",
      description: "Specialized handling of medical equipment and office contents",
      details: [
        "Inventory documentation with photos",
        "Pack-out and secure storage when necessary",
        "Electronic equipment drying and restoration",
        "Coordination with medical equipment vendors"
      ]
    },
    {
      title: "Reconstruction Services",
      description: "Full restoration to return your facility to operation",
      details: [
        "Licensed and insured general contractors",
        "Healthcare-grade materials and finishes",
        "Infection control during construction",
        "Project management from start to finish"
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to a healthcare facility emergency?",
      answer: "We provide 24/7 emergency response with technicians on-site within 60-90 minutes throughout Northern Virginia. For healthcare facilities, we prioritize immediate deployment to minimize impact on patient care."
    },
    {
      question: "Are your technicians HIPAA trained?",
      answer: "Yes, all technicians working in healthcare environments receive HIPAA compliance training and follow strict protocols to protect patient privacy and confidential information during restoration work."
    },
    {
      question: "Can you work around our patient care schedules?",
      answer: "Absolutely. We coordinate work schedules with your facilities team to minimize disruption. This includes off-hours work, phased restoration, and careful planning around critical care areas."
    },
    {
      question: "What certifications do you maintain for healthcare work?",
      answer: "Our team holds IICRC certifications in Water Damage Restoration, Applied Microbial Remediation, and Structural Drying. We also maintain OSHA compliance and follow CDC guidelines for healthcare environments."
    },
    {
      question: "Do you provide documentation for regulatory compliance?",
      answer: "Yes, we provide comprehensive documentation including moisture readings, air quality reports, photographic evidence, and detailed scope of work reports required for insurance claims and regulatory compliance."
    },
    {
      question: "What types of healthcare facilities do you serve?",
      answer: "We serve hospitals, urgent care centers, medical offices, dental practices, surgical centers, nursing homes, assisted living facilities, and other healthcare properties throughout Northern Virginia."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://flood.doctor",
    "url": "https://flood.doctor",
    "telephone": "877-497-0007",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Northern Virginia",
      "addressRegion": "VA",
      "postalCode": "22030",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8816,
      "longitude": -77.1668
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.8816,
        "longitude": -77.1668
      },
      "geoRadius": "50000"
    },
    "description": "24/7 healthcare facility water damage restoration and emergency services in Northern Virginia. HIPAA compliant, IICRC certified."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const combinedSchema = [localBusinessSchema, faqSchema];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Healthcare Water Damage Restoration Northern Virginia"
        description="24/7 HIPAA-compliant water damage restoration for hospitals, clinics, and medical facilities in Northern Virginia. IICRC certified, minimal disruption to patient care."
        structuredData={combinedSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">HIPAA Compliant | IICRC Certified</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Healthcare Facility Water Damage Restoration
              </h1>
              <p className="text-xl mb-8 text-blue-50">
                Protecting patient care environments with 24/7 emergency response, certified protocols, and minimal operational disruption across Northern Virginia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:877-497-0007"
                  className="inline-flex items-center justify-center bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  877-497-0007
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">60-Minute Response Time</h3>
                      <p className="text-blue-50 text-sm">Emergency teams deployed immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Zero Patient Data Exposure</h3>
                      <p className="text-blue-50 text-sm">HIPAA-trained technicians and protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Continuous Operations Support</h3>
                      <p className="text-blue-50 text-sm">Work around patient care schedules</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge/Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Healthcare facilities face unique risks when water damage occurs. Beyond property concerns, you must maintain patient safety, protect sensitive medical equipment, ensure regulatory compliance, and minimize disruption to critical care operations.
              </p>
              <p className="text-gray-600">
                Standard restoration approaches don't account for infection control, patient privacy, medical equipment sensitivity, or the 24/7 operational demands of healthcare environments.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#1a73e8] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Flood Doctor delivers healthcare-specific restoration protocols combining rapid response, medical-grade processes, and operational coordination to protect both your facility and patient care continuity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1a73e8] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">HIPAA-compliant technicians and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1a73e8] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Infection control and containment protocols</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#1a73e8] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Coordinated scheduling around patient care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Healthcare Facilities Trust Flood Doctor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise designed for the unique demands of medical environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#1a73e8]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#1a73e8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Restoration Services
            </h2>
            <p className="text-xl text-gray-600">
              Full-spectrum solutions for medical facility water damage emergencies
            </p>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                      openAccordion === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <ul className="space-y-3 pt-5">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#1a73e8] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Meeting the highest standards for healthcare facility restoration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a73e8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#1a73e8]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600 text-sm">
                Staff trained in patient privacy and data protection protocols
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a73e8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-[#1a73e8]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">IICRC Certified</h3>
              <p className="text-gray-600 text-sm">
                Water damage restoration and applied microbial remediation
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a73e8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-10 h-10 text-[#1a73e8]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">OSHA Standards</h3>
              <p className="text-gray-600 text-sm">
                Bloodborne pathogen and hazardous materials certified
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a73e8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#1a73e8]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">EPA Guidelines</h3>
              <p className="text-gray-600 text-sm">
                Mold remediation following EPA and CDC recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Case Study: Regional Medical Center
            </h2>
            <p className="text-xl text-gray-300">
              Emergency restoration with zero patient care disruption
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">45min</div>
                <div className="text-gray-300">On-Site Response</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">3 Days</div>
                <div className="text-gray-300">Full Restoration</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">0</div>
                <div className="text-gray-300">Patient Transfers</div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-xl font-semibold mb-4">Challenge</h3>
              <p className="text-gray-300 mb-6">
                A major pipe burst flooded two floors of a 150-bed regional medical center including patient rooms, nursing stations, and a surgical prep area. The facility required immediate response while maintaining full patient care operations.
              </p>
              <h3 className="text-xl font-semibold mb-4">Solution</h3>
              <p className="text-gray-300 mb-6">
                Our team deployed within 45 minutes with specialized equipment and HIPAA-trained technicians. We established containment barriers, coordinated with nursing staff for patient safety, and worked in shifts to complete restoration in 72 hours. All work was performed during off-peak hours in occupied areas.
              </p>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-lg italic mb-3">
                  "Flood Doctor's team understood the urgency and sensitivity of working in a healthcare environment. Their coordination with our staff was exceptional, and they completed the restoration without impacting a single patient."
                </p>
                <p className="text-sm text-gray-400">
                  — Facilities Director, Regional Medical Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about healthcare facility restoration
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-gray-700 pt-5">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1a73e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            24/7 Emergency Response for Healthcare Facilities
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Every minute counts when water damage threatens patient care. Our specialized teams are ready to deploy immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:877-497-0007"
              className="inline-flex items-center justify-center bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 877-497-0007
            </a>
            <Link
              to="/services/commercial/"
              className="inline-flex items-center text-white hover:text-blue-100 transition-colors"
            >
              View All Commercial Services
              <ChevronDown className="w-5 h-5 ml-2 transform -rotate-90" />
            </Link>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            IICRC Certified | HIPAA Compliant | Licensed & Insured
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Related Commercial Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/services/commercial/" className="text-[#1a73e8] hover:underline">
              Commercial Water Damage Restoration
            </Link>
            <Link to="/services/commercial/cleanup-services/" className="text-[#1a73e8] hover:underline">
              Commercial Mold Remediation
            </Link>
            <Link to="/services/commercial/restoration-services/" className="text-[#1a73e8] hover:underline">
              24/7 Emergency Services
            </Link>
            <Link to="/services/commercial/specialty-services/" className="text-[#1a73e8] hover:underline">
              Office Building Restoration
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HealthcareRestoration;
