import React, { useEffect } from 'react';
import { ChevronRight, Phone, Menu } from 'lucide-react';
import { CityData } from './types';

import CityHero from './CityHero';
import CityEmergencyBanner from './CityEmergencyBanner';
import CityProximity from './CityProximity';
import CityServices from './CityServices';
import CityMap from './CityMap';
import CityTestimonials from './CityTestimonials';
import CityFAQ from './CityFAQ';

interface CityPageLayoutProps {
  cityData: CityData;
}

const CityPageLayout: React.FC<CityPageLayoutProps> = ({ cityData }) => {
  
  // Inject JSON-LD Schema on mount
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Flood Doctor - ${cityData.name}`,
      "image": cityData.heroImage,
      "@id": `https://flooddoctor.com/service-areas/${cityData.slug}`,
      "url": `https://flooddoctor.com/service-areas/${cityData.slug}`,
      "telephone": cityData.phoneNumber,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityData.officeLocation.split(',')[0],
        "addressLocality": cityData.name,
        "addressRegion": cityData.state,
        "postalCode": cityData.zipCodes[0],
        "addressCountry": "US"
      },
      "areaServed": cityData.zipCodes.map(zip => ({
        "@type": "GeoShape",
        "postalCode": zip
      })),
      "priceRange": "$$"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [cityData]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-slate-900">
            <span className="text-[#1a73e8]">Flood</span>Doctor
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-[#1a73e8]">Services</a>
            <a href="#" className="hover:text-[#1a73e8]">Why Us</a>
            <a href="#" className="hover:text-[#1a73e8]">Reviews</a>
            <a href="#" className="text-[#1a73e8] font-bold">Service Areas</a>
          </nav>

          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>

          <a href={`tel:${cityData.phoneNumber}`} className="hidden md:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-full font-bold text-sm transition-colors">
            <Phone className="w-4 h-4" />
            {cityData.phoneNumber}
          </a>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-xs md:text-sm text-slate-500">
          <a href="#" className="hover:text-[#1a73e8]">Home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:text-[#1a73e8]">Service Areas</a>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold text-slate-800">{cityData.name}, {cityData.state}</span>
        </div>
      </div>

      <main className="flex-grow">
        <CityHero city={cityData} />
        <CityEmergencyBanner city={cityData} />
        <CityProximity city={cityData} />
        <CityServices city={cityData} />
        <CityMap city={cityData} />
        <CityTestimonials city={cityData} />
        <CityFAQ city={cityData} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-2xl text-white mb-4">
              <span className="text-[#1a73e8]">Flood</span>Doctor
            </div>
            <p className="max-w-sm text-slate-400 mb-6">
              Premier water damage restoration services serving Northern Virginia. 
              Rapid response, insurance approved, and community focused.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1a73e8] transition-colors cursor-pointer">FB</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1a73e8] transition-colors cursor-pointer">TW</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1a73e8] transition-colors cursor-pointer">IG</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Water Extraction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mold Remediation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sewage Cleanup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Storm Damage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Flood Doctor. All rights reserved. Serving {cityData.name} and surrounding areas.
        </div>
      </footer>
    </div>
  );
};

export default CityPageLayout;