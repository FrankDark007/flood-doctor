import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

const WaterHeaterFloodingGuide: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the warning signs that my water heater is about to fail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Critical warning signs include rusty or discolored water, rumbling or popping noises, moisture or small puddles around the base, age over 10 years, rusty tank surface or corrosion, fluctuating water temperature, and visible mineral buildup on the tank. If you notice any of these signs, schedule a professional inspection immediately."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do immediately if my water heater starts leaking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Turn off the water supply at the cold water shutoff valve on top of the tank. Turn off the power supply—flip the circuit breaker for electric units or set the gas valve to pilot for gas units. Turn off the gas supply completely if you smell gas. Remove nearby items and begin water extraction. Call emergency water damage restoration at 703-665-0505 for professional assistance."
        }
      },
      {
        "@type": "Question",
        "name": "How much water can a failed water heater release?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard residential water heater holds 30-80 gallons. A catastrophic tank rupture can release the entire contents within minutes, plus continuous flow from the supply line if not shut off quickly. This can result in hundreds of gallons flooding your home, causing severe damage to floors, walls, ceilings (if located in attic or upper floor), and belongings."
        }
      },
      {
        "@type": "Question",
        "name": "Does homeowners insurance cover water heater flooding damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most homeowners insurance covers sudden and accidental water heater failures, including tank ruptures and valve failures. However, damage from gradual leaks due to poor maintenance is typically excluded. The water heater itself may not be covered, but resulting damage to your home and belongings usually is. Always document damage immediately and contact your insurance provider."
        }
      },
      {
        "@type": "Question",
        "name": "Where should water heaters be installed to minimize flood damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basements are ideal for water heater installation in Northern Virginia homes, as leaks drain to lower levels with minimal structural damage. Garage installations also limit damage potential. Avoid attic installations when possible—a leak can cause catastrophic ceiling and multi-floor damage. Always install on a drain pan with a proper drainage system regardless of location."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I have my water heater inspected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional inspection annually for units over 5 years old, or every 2 years for newer units. Monthly visual checks for leaks, corrosion, and proper operation. Flush the tank annually to remove sediment buildup. Test the temperature-pressure relief valve annually. Northern Virginia's hard water makes regular maintenance especially important."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor",
    "image": "https://flooddoctor.com/logo.png",
    "@id": "https://flooddoctor.com",
    "url": "https://flooddoctor.com",
    "telephone": "703-665-0505",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Northern Virginia",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8816,
      "longitude": -77.1045
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/flooddoctor",
      "https://www.instagram.com/flooddoctor"
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [faqSchema, localBusinessSchema]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Heater Failure & Flooding: Prevention and Emergency Response | Northern Virginia"
        description="Comprehensive guide to water heater failures and flooding in Northern Virginia. Learn warning signs, failure types, emergency response, and prevention strategies. 24/7 service: 703-665-0505"
        structuredData={combinedSchema}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-[#1a73e8] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Emergency Preparedness
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Water Heater Failure & Flooding: Prevention and Emergency Response Guide for Northern Virginia
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
            <time dateTime="2026-01-01">January 1, 2026</time>
            <span>•</span>
            <span>15 min read</span>
          </div>

          {/* Emergency CTA Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Water Heater Emergency?</h2>
                <p className="text-lg">Immediate response for flooding and water damage in Northern Virginia</p>
              </div>
              <a
                href="tel:703-665-0505"
                className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors shadow-md"
              >
                Call: 703-665-0505
              </a>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p className="text-xl text-gray-700 mb-4">
            Your water heater works silently in your basement, garage, or closet—until it doesn't. When a water heater fails catastrophically, it can release 30-80 gallons in minutes, flooding your home with water that damages floors, walls, ceilings, and everything in its path. For Northern Virginia homeowners, where many homes feature finished basements and multi-level construction, a water heater failure represents one of the most destructive and expensive emergency scenarios.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Unlike slow plumbing leaks that provide warning signs, water heater failures often occur suddenly—a corroded tank ruptures during the night, a faulty temperature-pressure relief valve fails during peak usage, or sediment buildup finally causes catastrophic structural failure. Understanding the warning signs, failure mechanisms, and proper emergency response can mean the difference between minor cleanup and tens of thousands of dollars in restoration costs.
          </p>
          <p className="text-lg text-gray-700">
            This comprehensive guide addresses water heater flooding from every angle: recognizing failure before it happens, understanding common failure types, responding effectively during emergencies, and implementing prevention strategies that protect your Northern Virginia home. Whether you're facing an active emergency or want to prevent future disasters, this guide provides the critical information you need.
          </p>
        </section>

        {/* Understanding Water Heater Failures */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Understanding Water Heater Failures: Types and Causes
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Water heaters fail in several distinct ways, each with different warning signs and flooding potential. Recognizing these failure types helps you identify risks and take preventive action.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tank Rupture (Catastrophic Failure)</h3>
              <p className="text-gray-700 mb-4">
                The most destructive water heater failure occurs when the tank itself ruptures, releasing the entire 30-80 gallon contents instantly. Tank ruptures typically result from internal corrosion that weakens the steel tank until pressure causes catastrophic failure.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Primary Causes:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Internal corrosion from sacrificial anode rod depletion</li>
                  <li>Sediment buildup creating hot spots that weaken tank bottom</li>
                  <li>Age-related metal fatigue (most tanks fail after 10-15 years)</li>
                  <li>Manufacturing defects in tank lining</li>
                  <li>Excessive pressure from malfunctioning relief valve</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Warning Signs:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Rusty or discolored water from hot water taps</li>
                  <li>Visible rust on tank exterior</li>
                  <li>Small moisture or puddles around tank base</li>
                  <li>Age approaching or exceeding 10 years</li>
                  <li>Metallic taste in hot water</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Valve Failure (Gradual to Moderate)</h3>
              <p className="text-gray-700 mb-4">
                Temperature-pressure relief (TPR) valves and drain valves can fail, causing leaks ranging from slow drips to steady streams. While less dramatic than tank rupture, valve failures can still release hundreds of gallons if not addressed promptly.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Common Valve Issues:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>TPR valve stuck open or failing to seal properly</li>
                  <li>Corroded drain valve at tank bottom</li>
                  <li>Failed cold water inlet valve</li>
                  <li>Expansion tank valve failure</li>
                  <li>Mineral buildup preventing proper valve seating</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Warning Signs:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Water dripping from TPR valve discharge pipe</li>
                  <li>Moisture around valve connections</li>
                  <li>Mineral deposits around valve openings</li>
                  <li>Hissing sounds from relief valve</li>
                  <li>Inconsistent water pressure</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Connection and Fitting Leaks</h3>
              <p className="text-gray-700 mb-4">
                Threaded connections, pipe fittings, and flex hoses can fail due to corrosion, vibration, or improper installation. Northern Virginia's hard water accelerates corrosion at connection points, making these failures particularly common in our region.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Vulnerable Points:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Cold water inlet connection at tank top</li>
                  <li>Hot water outlet connection</li>
                  <li>Flex hoses (common failure point after 5-7 years)</li>
                  <li>Threaded pipe connections weakened by corrosion</li>
                  <li>Poorly installed or over-tightened fittings</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Internal Component Failure</h3>
              <p className="text-gray-700 mb-4">
                Heating elements (electric), dip tubes, and internal baffles can corrode and fail, causing leaks from unexpected locations or allowing sediment to damage the tank bottom.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Common Issues:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Electric heating element gasket failure</li>
                  <li>Corroded dip tube breaking apart</li>
                  <li>Sacrificial anode rod completely depleted</li>
                  <li>Thermostat malfunction causing overheating</li>
                  <li>Sediment accumulation damaging tank bottom</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Warning Signs */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Critical Warning Signs: When Your Water Heater Is Failing
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Recognizing these warning signs can prevent catastrophic failure. If you observe multiple indicators, schedule immediate professional inspection or consider preemptive replacement.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-red-500 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">Rusty or Discolored Water</h3>
              </div>
              <p className="text-gray-700">
                Brown, red, or rust-colored water from hot taps indicates internal tank corrosion. This is often the final warning before catastrophic failure. Test by running hot water into a white bucket—clear rust color means tank corrosion, not pipe rust.
              </p>
            </div>

            <div className="bg-white border-2 border-red-500 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">Strange Noises</h3>
              </div>
              <p className="text-gray-700">
                Rumbling, popping, or banging sounds indicate sediment buildup on tank bottom. As water heats, it must bubble through sediment, creating noise and hot spots that accelerate tank deterioration. More common in Northern Virginia due to hard water.
              </p>
            </div>

            <div className="bg-white border-2 border-orange-500 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">Moisture or Puddles</h3>
              </div>
              <p className="text-gray-700">
                Any moisture around the water heater base, connections, or floor requires immediate investigation. Small leaks worsen rapidly. Check if water appears during heating cycles—this often indicates pressure-related leaks that will escalate.
              </p>
            </div>

            <div className="bg-white border-2 border-orange-500 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900">Age Over 10 Years</h3>
              </div>
              <p className="text-gray-700">
                Most residential water heaters last 8-12 years. Check the serial number for manufacture date. Units over 10 years old should be considered high-risk and monitored closely or replaced preemptively.
              </p>
            </div>

            <div className="bg-white border-2 border-yellow-500 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900">Visible Corrosion</h3>
              </div>
              <p className="text-gray-700">
                Rust on tank exterior, connections, or pressure relief valve indicates advanced corrosion. External rust often mirrors internal deterioration. Inspect tank bottom closely—this area fails first due to sediment and corrosion.
              </p>
            </div>

            <div className="bg-white border-2 border-yellow-500 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-3">
                  6
                </div>
                <h3 className="text-xl font-bold text-gray-900">Temperature Fluctuations</h3>
              </div>
              <p className="text-gray-700">
                Inconsistent water temperature, running out of hot water faster than normal, or scalding hot water indicates failing heating elements, thermostat issues, or sediment buildup reducing tank capacity.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Expert Recommendation</h3>
            <p className="text-lg mb-4">
              "If your water heater shows multiple warning signs or is approaching 10 years old, replacement is more cost-effective than waiting for failure. A planned replacement costs $1,200-$2,500. Emergency replacement during active flooding adds $500-$1,500 in rush charges, plus potentially $5,000-$20,000 in water damage restoration."
            </p>
            <p className="text-sm italic">
              — Flood Doctor Restoration Specialists
            </p>
          </div>
        </section>

        {/* Location Matters */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Location Matters: How Water Heater Placement Affects Flood Damage
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Where your water heater is installed dramatically impacts the extent and cost of flood damage. Northern Virginia homes have water heaters in various locations, each with distinct risk profiles.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Basement Installation (Lowest Risk)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Advantages:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Water drains to lowest point naturally</li>
                    <li>Typically less finished space to damage</li>
                    <li>Easier water extraction and cleanup</li>
                    <li>No ceiling damage to floors above</li>
                    <li>Lower overall restoration costs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Considerations:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Finished basements suffer higher damage costs</li>
                    <li>HVAC systems often located in basement</li>
                    <li>Electrical panels may be at risk</li>
                    <li>Storage and belongings in basement affected</li>
                    <li>Requires sump pump for water removal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Main Floor/Garage Installation (Moderate Risk)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Advantages:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Easy access for maintenance</li>
                    <li>No basement to flood</li>
                    <li>Garage installations minimize interior damage</li>
                    <li>Often on concrete slab (easier cleanup)</li>
                    <li>Leaks are immediately visible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Risks:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Water spreads across main floor</li>
                    <li>Affects living spaces and belongings</li>
                    <li>Hardwood floors at risk (expensive damage)</li>
                    <li>Can seep into wall cavities</li>
                    <li>May affect multiple rooms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Attic/Upper Floor Installation (Highest Risk)
              </h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-red-900 mb-2">CRITICAL WARNING:</h4>
                <p className="text-gray-700">
                  Attic water heater failures are catastrophically expensive. Water cascades through ceilings, walls, and multiple floors, causing exponential damage. A single attic tank failure can require $20,000-$50,000+ in restoration work.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Why So Dangerous:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Water saturates ceiling drywall (often collapses)</li>
                    <li>Flows down wall cavities to lower floors</li>
                    <li>Damages insulation (requires replacement)</li>
                    <li>Affects electrical systems in ceiling</li>
                    <li>Destroys multiple ceiling surfaces</li>
                    <li>Often goes unnoticed until major damage occurs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Required Protections:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Overflow drain pan (mandatory)</li>
                    <li>Pan with drain line to exterior or drain</li>
                    <li>Water leak detector with alarm</li>
                    <li>Automatic shutoff valve</li>
                    <li>More frequent inspections</li>
                    <li>Consider relocating to lower floor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Northern Virginia Building Considerations</h3>
            <p className="text-gray-700 mb-3">
              Many Northern Virginia townhomes and condos have water heaters on upper floors or in closets due to space constraints. If your water heater is located anywhere except the basement or garage, invest in comprehensive protection systems including drain pans, leak detectors, and automatic shutoff valves.
            </p>
            <p className="text-gray-700">
              Homeowners in Arlington, Alexandria, and older Fairfax County neighborhoods often have basement installations, while newer construction in Loudoun and Prince William counties may have attic or upper-floor units. Know your configuration and plan accordingly.
            </p>
          </div>
        </section>

        {/* Emergency Response */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Emergency Response: What to Do When Your Water Heater Floods
          </h2>

          <div className="bg-red-100 border-2 border-red-600 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Immediate Actions (First 10 Minutes)
            </h3>
            <p className="text-gray-800 mb-4 font-semibold">
              Time is critical. Every minute of delay increases water damage exponentially. Follow these steps in order:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                <div className="flex items-start">
                  <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Turn Off Water Supply</h4>
                    <p className="text-gray-700">
                      Locate the cold water shutoff valve at the top of the water heater and turn it clockwise to close. If you can't access it or it's stuck, shut off the main water supply to your home immediately. This stops additional water from entering the tank.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                <div className="flex items-start">
                  <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Turn Off Power Supply</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Electric water heaters:</strong> Go to your electrical panel and flip the circuit breaker labeled "water heater" to OFF position. Do not touch the water heater or standing water before doing this.
                    </p>
                    <p className="text-gray-700">
                      <strong>Gas water heaters:</strong> Turn the gas control valve to "PILOT" or "OFF." If you smell gas, turn off the gas supply valve completely and evacuate—call the gas company from outside.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                <div className="flex items-start">
                  <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Emergency Restoration</h4>
                    <p className="text-gray-700">
                      Contact professional water damage restoration immediately: <a href="tel:703-665-0505" className="text-[#1a73e8] font-bold hover:underline">703-665-0505</a>. Don't wait to "see how bad it is"—professionals can arrive quickly and prevent secondary damage that worsens by the hour.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                <div className="flex items-start">
                  <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Protect and Document</h4>
                    <p className="text-gray-700">
                      Move furniture, electronics, and valuables away from water. Take photos and videos of the water heater, leak source, standing water, and all affected areas. Document water levels and damage for insurance claims. Do not discard the failed water heater until insurance inspects it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                <div className="flex items-start">
                  <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Begin Water Removal (If Safe)</h4>
                    <p className="text-gray-700">
                      If water levels are manageable (under 2 inches) and no electrical hazards exist, start removing water with towels, mops, or wet-dry vacuum. For larger floods or any safety concerns, wait for professional crews with industrial extraction equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Next Steps (First 24 Hours)</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-[#1a73e8] mb-3 text-lg">Professional Water Extraction</h4>
              <p className="text-gray-700 mb-3">
                Industrial water extractors remove water 50-100 times faster than shop vacuums. Professional crews extract thousands of gallons in hours, then use moisture meters to locate hidden water in walls, floors, and subfloors.
              </p>
              <p className="text-gray-700 text-sm italic">
                Average cost: $500-$2,500 depending on water volume and affected area
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-[#1a73e8] mb-3 text-lg">Structural Drying</h4>
              <p className="text-gray-700 mb-3">
                Commercial dehumidifiers and air movers create controlled drying environment. Moisture meters monitor progress. Typical drying time: 3-7 days for standard flooding, longer for attic or multi-floor scenarios.
              </p>
              <p className="text-gray-700 text-sm italic">
                Equipment rental: $200-$500+ depending on scope and duration
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-[#1a73e8] mb-3 text-lg">Mold Prevention</h4>
              <p className="text-gray-700 mb-3">
                Antimicrobial treatment prevents mold growth. Critical in Northern Virginia's humid climate where mold begins within 24-48 hours. Affected materials like drywall or insulation may require removal.
              </p>
              <p className="text-gray-700 text-sm italic">
                Mold prevention: included in restoration; remediation if delayed: $1,500-$5,000+
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-[#1a73e8] mb-3 text-lg">Insurance Coordination</h4>
              <p className="text-gray-700 mb-3">
                Contact your insurance company within 24 hours. Provide documentation (photos, videos, receipts). Professional restoration companies work directly with insurance adjusters and provide detailed documentation.
              </p>
              <p className="text-gray-700 text-sm italic">
                Typical insurance coverage: damage costs minus deductible ($500-$2,500)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What NOT to Do During Water Heater Flooding</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't enter standing water if electrical systems are active—risk of electrocution</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't attempt to drain a hot water heater—scalding water can cause severe burns</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't delay calling professionals to "save money"—delays increase damage and costs exponentially</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't use household fans instead of commercial drying equipment—insufficient airflow allows mold growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't discard the failed water heater before insurance inspection—may void claim</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">✗</span>
                <span>Don't ignore ceiling damage from upper-floor leaks—water continues spreading inside walls</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Prevention and Maintenance */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Prevention and Maintenance: Protecting Your Home from Water Heater Failure
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Regular maintenance extends water heater life and provides early warning of impending failure. Northern Virginia's hard water makes maintenance especially critical.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-[#1a73e8] rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Maintenance Schedule</h3>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-[#1a73e8] mb-4">Monthly Inspections</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Visual inspection for moisture, rust, or corrosion around tank and connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Check for unusual noises during heating cycles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Test water temperature at taps (should be 120-140°F)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Inspect drain pan (if installed) for water accumulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Check TPR valve discharge pipe for moisture or mineral deposits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-[#1a73e8] mb-4">Annual Maintenance</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span><strong>Flush tank to remove sediment:</strong> Attach hose to drain valve, drain 2-3 gallons until water runs clear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span><strong>Test TPR valve:</strong> Lift lever briefly, ensure water flows and stops cleanly (replace if it doesn't)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span><strong>Inspect anode rod:</strong> Professional task—rod should be replaced when 50% depleted (every 3-5 years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span><strong>Check expansion tank:</strong> Tap tank—should sound hollow, not heavy (indicates air bladder failure)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span><strong>Professional inspection:</strong> Recommended for units over 5 years old</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-[#1a73e8] mb-4">Every 3-5 Years</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Replace sacrificial anode rod (critical for tank longevity)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Replace flex hoses at connections (common failure point)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Deep sediment flush (may require professional service)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">□</span>
                    <span>Consider replacement if unit is 8+ years old with any issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Critical Upgrades for Northern Virginia Homes</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-[#1a73e8] rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Drain Pan Installation</h4>
              <p className="text-gray-700 mb-3">
                Essential protection: metal or plastic pan under water heater catches leaks before they damage floors. Pan must include drain line routed to floor drain, exterior, or visible location.
              </p>
              <p className="text-sm text-gray-600 italic">Cost: $50-$150 DIY, $200-$400 professional installation</p>
            </div>

            <div className="bg-white border-2 border-[#1a73e8] rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Water Leak Detector</h4>
              <p className="text-gray-700 mb-3">
                Battery or Wi-Fi enabled water detectors sound alarm at first sign of moisture. Smart versions send phone alerts. Place sensor in drain pan or on floor near water heater.
              </p>
              <p className="text-sm text-gray-600 italic">Cost: $15-$50 basic, $50-$150 Wi-Fi enabled</p>
            </div>

            <div className="bg-white border-2 border-[#1a73e8] rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Automatic Shutoff Valve</h4>
              <p className="text-gray-700 mb-3">
                Electronic valve detects leaks and automatically shuts off water supply. Invaluable for vacation properties or attic installations. Some models integrate with smart home systems.
              </p>
              <p className="text-sm text-gray-600 italic">Cost: $200-$500+ depending on features</p>
            </div>

            <div className="bg-white border-2 border-[#1a73e8] rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Expansion Tank</h4>
              <p className="text-gray-700 mb-3">
                Reduces pressure stress on water heater tank by accommodating thermal expansion. Required by code in many jurisdictions. Extends water heater life and reduces leak risk.
              </p>
              <p className="text-sm text-gray-600 italic">Cost: $100-$300 installed</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hard Water Considerations for Northern Virginia</h3>
            <p className="text-gray-700 mb-3">
              Northern Virginia's moderately hard to hard water (150-250 mg/L calcium carbonate) accelerates sediment buildup and corrosion. Homeowners should flush tanks more frequently (every 6 months instead of annually) and consider water softener installation.
            </p>
            <p className="text-gray-700">
              Sediment buildup from hard water reduces efficiency (costing $100-$200 annually in extra energy), shortens tank life by 2-4 years, and increases catastrophic failure risk. Regular flushing is not optional in our region—it's essential.
            </p>
          </div>
        </section>

        {/* Insurance Coverage */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Insurance Coverage for Water Heater Flooding
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Understanding your homeowners insurance coverage for water heater failures can prevent financial disaster. Most policies cover sudden failures but have important limitations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Typically Covered</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Sudden tank rupture:</strong> Catastrophic failures from internal corrosion or pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Valve failures:</strong> TPR valve or other component sudden failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Resulting damage:</strong> Floors, walls, ceilings, and belongings damaged by water</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Emergency mitigation:</strong> Costs to prevent further damage (water extraction, drying)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Professional restoration:</strong> Structural repairs and restoration services</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Typically NOT Covered</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span><strong>Gradual leaks:</strong> Slow leaks from poor maintenance or normal wear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span><strong>Water heater replacement:</strong> The appliance itself usually not covered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span><strong>Maintenance-related failures:</strong> Failures from lack of proper maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span><strong>Mold from delays:</strong> Mold growth from failure to mitigate promptly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span><strong>Improvements or upgrades:</strong> Policy covers restoration to pre-loss condition only</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Filing a Successful Insurance Claim</h3>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Document immediately:</strong> Photos and videos of leak source, water damage, and affected items before any cleanup</li>
              <li><strong>2. Notify within 24 hours:</strong> Contact insurance company promptly; delays can complicate claims</li>
              <li><strong>3. Mitigate damage:</strong> Your policy requires reasonable steps to prevent further damage (professional restoration)</li>
              <li><strong>4. Preserve evidence:</strong> Keep failed water heater and damaged components for adjuster inspection</li>
              <li><strong>5. Detailed inventory:</strong> List all damaged items with purchase dates and estimated values</li>
              <li><strong>6. Save all receipts:</strong> Emergency services, equipment rentals, temporary housing, replacement items</li>
              <li><strong>7. Professional documentation:</strong> Restoration companies provide detailed reports supporting your claim</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Policy Review Recommendations</h3>
            <p className="text-gray-700 mb-4">
              Review your homeowners insurance policy annually, especially if you've finished your basement, installed valuable flooring, or added expensive belongings. Consider these coverage enhancements:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Equipment breakdown coverage:</strong> Covers sudden mechanical failures including water heaters ($50-$100/year)</li>
              <li>• <strong>Water backup coverage:</strong> Additional protection for water damage events ($100-$200/year)</li>
              <li>• <strong>Increased personal property limits:</strong> If you have valuable belongings in basement or lower levels</li>
              <li>• <strong>Replacement cost coverage:</strong> Pays to replace items at current prices, not depreciated value</li>
            </ul>
          </div>
        </section>

        {/* Professional Restoration Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Professional Water Damage Restoration Process
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Understanding what professional restoration entails helps you make informed decisions during emergencies and appreciate the value of expert intervention.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border-l-4 border-[#1a73e8] rounded-r-lg p-6 shadow-sm">
              <div className="flex items-start mb-3">
                <div className="bg-[#1a73e8] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Contact & Dispatch (0-30 minutes)</h3>
                  <p className="text-gray-700">
                    24/7 emergency line receives your call, assesses situation urgency, and dispatches certified technicians. Average Northern Virginia response time: under 60 minutes. Technicians arrive with water extraction equipment, moisture meters, and safety gear.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#1a73e8] rounded-r-lg p-6 shadow-sm">
              <div className="flex items-start mb-3">
                <div className="bg-[#1a73e8] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Damage Assessment (30-60 minutes)</h3>
                  <p className="text-gray-700 mb-3">
                    Comprehensive inspection identifies all affected areas, including hidden water damage. Thermal imaging cameras detect moisture in walls and ceilings. Moisture meters measure saturation levels in floors, drywall, and structural elements.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Water damage is classified by IICRC standards: Class 1 (minimal), Class 2 (significant), Class 3 (greatest amount), Class 4 (specialty drying)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#1a73e8] rounded-r-lg p-6 shadow-sm">
              <div className="flex items-start mb-3">
                <div className="bg-[#1a73e8] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Water Extraction (1-4 hours)</h3>
                  <p className="text-gray-700 mb-3">
                    Industrial-grade submersible pumps and truck-mounted extractors remove standing water. Extraction removes 99% of water—far more than household equipment. Immediate extraction prevents secondary damage and reduces drying time.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                    <li>Submersible pumps: 3,000-5,000 gallons per hour capacity</li>
                    <li>Truck-mounted extractors: continuous operation for large floods</li>
                    <li>Specialty equipment for carpets, hardwood, and upholstery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#1a73e8] rounded-r-lg p-6 shadow-sm">
              <div className="flex items-start mb-3">
                <div className="bg-[#1a73e8] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Drying & Dehumidification (3-7 days)</h3>
                  <p className="text-gray-700 mb-3">
                    Commercial air movers and dehumidifiers create optimal drying conditions. Equipment runs continuously, monitored daily with moisture readings. Technicians adjust equipment placement and settings based on drying progress.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                    <li>High-velocity air movers: increase evaporation rate exponentially</li>
                    <li>Commercial dehumidifiers: remove 100+ pints of moisture per day</li>
                    <li>Daily moisture readings: document drying progress for insurance</li>
                    <li>Structural drying: walls, floors, and hidden cavities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#1a73e8] rounded-r-lg p-6 shadow-sm">
              <div className="flex items-start mb-3">
                <div className="bg-[#1a73e8] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cleaning & Sanitizing</h3>
                  <p className="text-gray-700 mb-3">
                    Antimicrobial treatments prevent mold and bacterial growth. Affected surfaces cleaned with professional-grade solutions. HEPA air scrubbers remove airborne contaminants and prevent cross-contamination.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Critical in Northern Virginia's humid climate where mold growth begins within 24-48 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#1a73e8] rounded-r-lg p-6 shadow-sm">
              <div className="flex items-start mb-3">
                <div className="bg-[#1a73e8] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Restoration & Repairs</h3>
                  <p className="text-gray-700 mb-3">
                    Final phase returns your home to pre-loss condition. May include minor repairs (replacing baseboards, painting) or major reconstruction (drywall replacement, flooring installation, ceiling repairs).
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                    <li>Drywall removal and replacement if saturated</li>
                    <li>Flooring replacement (carpet, hardwood, tile)</li>
                    <li>Insulation replacement in walls or ceilings</li>
                    <li>Paint and finishing work</li>
                    <li>Final inspection and moisture verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a73e8] text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose Professional Restoration?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6 text-left">
              <div>
                <h4 className="font-bold mb-2 text-lg">Faster Recovery</h4>
                <p className="text-sm">Industrial equipment completes in days what household equipment can't accomplish in weeks</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-lg">Complete Restoration</h4>
                <p className="text-sm">Thermal imaging and moisture meters detect hidden water homeowners miss, preventing future mold</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-lg">Insurance Support</h4>
                <p className="text-sm">Detailed documentation, direct billing, and adjuster coordination maximize claim success</p>
              </div>
            </div>
            <a
              href="tel:703-665-0505"
              className="inline-block bg-white text-[#1a73e8] font-bold text-xl px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              24/7 Emergency Service: 703-665-0505
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What are the warning signs that my water heater is about to fail?
              </h3>
              <p className="text-gray-700">
                Critical warning signs include rusty or discolored water, rumbling or popping noises, moisture or small puddles around the base, age over 10 years, rusty tank surface or corrosion, fluctuating water temperature, and visible mineral buildup on the tank. If you notice any of these signs, schedule a professional inspection immediately.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What should I do immediately if my water heater starts leaking?
              </h3>
              <p className="text-gray-700">
                Turn off the water supply at the cold water shutoff valve on top of the tank. Turn off the power supply—flip the circuit breaker for electric units or set the gas valve to pilot for gas units. Turn off the gas supply completely if you smell gas. Remove nearby items and begin water extraction. Call emergency water damage restoration at <a href="tel:703-665-0505" className="text-[#1a73e8] font-bold hover:underline">703-665-0505</a> for professional assistance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much water can a failed water heater release?
              </h3>
              <p className="text-gray-700">
                A standard residential water heater holds 30-80 gallons. A catastrophic tank rupture can release the entire contents within minutes, plus continuous flow from the supply line if not shut off quickly. This can result in hundreds of gallons flooding your home, causing severe damage to floors, walls, ceilings (if located in attic or upper floor), and belongings.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Does homeowners insurance cover water heater flooding damage?
              </h3>
              <p className="text-gray-700">
                Most homeowners insurance covers sudden and accidental water heater failures, including tank ruptures and valve failures. However, damage from gradual leaks due to poor maintenance is typically excluded. The water heater itself may not be covered, but resulting damage to your home and belongings usually is. Always document damage immediately and contact your insurance provider.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Where should water heaters be installed to minimize flood damage?
              </h3>
              <p className="text-gray-700">
                Basements are ideal for water heater installation in Northern Virginia homes, as leaks drain to lower levels with minimal structural damage. Garage installations also limit damage potential. Avoid attic installations when possible—a leak can cause catastrophic ceiling and multi-floor damage. Always install on a drain pan with a proper drainage system regardless of location.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How often should I have my water heater inspected?
              </h3>
              <p className="text-gray-700">
                Professional inspection annually for units over 5 years old, or every 2 years for newer units. Monthly visual checks for leaks, corrosion, and proper operation. Flush the tank annually to remove sediment buildup. Test the temperature-pressure relief valve annually. Northern Virginia's hard water makes regular maintenance especially important.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does water heater flooding restoration cost in Northern Virginia?
              </h3>
              <p className="text-gray-700">
                Costs vary dramatically by damage extent and location. Minor basement flooding with quick response: $1,500-$3,500. Moderate damage with structural drying: $3,500-$8,000. Extensive damage or attic location requiring ceiling replacement and multi-floor restoration: $10,000-$30,000+. Quick professional response significantly reduces costs by preventing secondary damage and mold growth.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Should I replace my water heater before it fails?
              </h3>
              <p className="text-gray-700">
                Yes, if your water heater is 8-10 years old or showing warning signs, preemptive replacement is cost-effective. Planned replacement costs $1,200-$2,500. Emergency replacement during active flooding costs $1,700-$4,000 plus water damage restoration ($3,000-$20,000+). The total cost of catastrophic failure is 5-10 times higher than planned replacement.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-[#1a73e8]">
            Protecting Your Northern Virginia Home from Water Heater Disasters
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Water heater failures represent one of the most preventable yet potentially devastating home emergencies. The combination of proactive maintenance, strategic upgrades, appropriate insurance coverage, and rapid emergency response creates comprehensive protection for your Northern Virginia home.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Don't wait for warning signs to multiply or your water heater to reach critical age. Monthly inspections take minutes but provide early detection of developing problems. Annual professional maintenance costs $150-$300 but can prevent $10,000-$50,000 in flood damage. Strategic upgrades like drain pans, leak detectors, and automatic shutoff valves provide 24/7 protection even when you're away.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            When failure occurs despite your best efforts, immediate professional intervention makes the difference between manageable restoration and catastrophic damage. Every hour of delay allows water to spread, penetrate deeper into structural elements, and create conditions for mold growth. Professional restoration teams respond within minutes, bring industrial equipment that household tools can't match, and provide insurance documentation that maximizes claim success.
          </p>
          <p className="text-lg text-gray-700">
            Water heater flooding is not a matter of if, but when. Take action today: inspect your water heater, verify your insurance coverage includes sudden water damage, install protective equipment, and program our emergency number into your phone. When seconds count and water is flooding your home, you'll be prepared.
          </p>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-lg shadow-xl mb-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Northern Virginia's Water Damage Restoration Experts</h2>
            <p className="text-xl mb-2">24/7 Emergency Response • IICRC Certified • Licensed & Insured</p>
            <p className="text-lg text-gray-300">Serving Arlington • Alexandria • Fairfax • Loudoun • Prince William</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">&lt; 60 min</div>
              <div className="text-sm">Average Emergency Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">24/7</div>
              <div className="text-sm">Emergency Service Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">15+</div>
              <div className="text-sm">Years Serving Northern Virginia</div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:703-665-0505"
              className="inline-block bg-[#1a73e8] text-white px-12 py-5 rounded-lg font-bold text-2xl hover:bg-blue-700 transition-colors shadow-lg"
            >
              Call Now: 703-665-0505
            </a>
            <p className="mt-4 text-sm text-gray-300">
              Free emergency inspection • Direct insurance billing • Complete restoration services
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Water heaters hold 30-80 gallons and can flood your home within minutes during catastrophic failure</li>
            <li>• Replace water heaters proactively at 8-10 years old—planned replacement costs far less than emergency flooding</li>
            <li>• Rusty water, strange noises, and moisture around tank are critical warning signs requiring immediate action</li>
            <li>• Attic water heater failures cause 5-10 times more damage than basement installations</li>
            <li>• Turn off water supply and power immediately when discovering leaks—call professionals at 703-665-0505</li>
            <li>• Northern Virginia's hard water accelerates sediment buildup—flush tank every 6-12 months</li>
            <li>• Install drain pans, leak detectors, and automatic shutoff valves for comprehensive protection</li>
            <li>• Most insurance covers sudden failures but excludes gradual leaks from poor maintenance</li>
            <li>• Professional restoration prevents secondary damage, mold growth, and ensures complete drying</li>
            <li>• Emergency response within first hour reduces damage costs by 60-80%</li>
          </ul>
        </div>
      </article>
    </main>
  );
};

export default WaterHeaterFloodingGuide;
