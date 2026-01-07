import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import EmergencyPageLayout from '../generated-layouts/emergency-page/EmergencyPageLayout';

/**
 * Emergency PWA Page
 *
 * Mobile-first emergency landing page optimized for crisis situations.
 * Max-width 480px for focused, distraction-free emergency experience.
 *
 * Features:
 * - Large tap targets for call/text actions
 * - Emergency checklist for immediate steps
 * - Callback request form
 * - Trust signals
 */

const EmergencyPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "Flood Doctor Emergency Water Damage Response",
    "description": "24/7 emergency water damage restoration. 60-minute response guaranteed. Call (877) 497-0007.",
    "telephone": "+1-877-497-0007",
    "url": "https://flood.doctor/emergency/",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.9013,
        "longitude": -77.2654
      },
      "geoRadius": "50 mi"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+1-877-497-0007",
        "contactType": "emergency",
        "availableLanguage": ["English", "Spanish"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Flood Doctor",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8466D Tyco Rd",
        "addressLocality": "Vienna",
        "addressRegion": "VA",
        "postalCode": "22182",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <PageMeta
        title="Water Emergency? Call Now | 60-Min Response | Flood Doctor"
        description="24/7 water damage emergency response. 60-minute arrival guaranteed. Call (877) 497-0007 now. Serving Northern Virginia, DC, and Maryland."
        structuredData={structuredData}
      />
      <EmergencyPageLayout />
    </>
  );
};

export default EmergencyPage;
