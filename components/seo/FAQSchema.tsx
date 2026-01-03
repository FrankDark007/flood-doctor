/**
 * FAQSchema Component
 *
 * FAQ JSON-LD schema that generates dynamic FAQs using franchise data.
 * Supports custom FAQs and provides sensible defaults for water damage restoration.
 *
 * Usage:
 *   <FAQSchema />
 *   <FAQSchema customFAQs={[{ question: '...', answer: '...' }]} />
 */

import { useEffect, useMemo } from 'react';
import { useFranchiseContext } from '@/contexts/FranchiseContext';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  /** Custom FAQs to use instead of or in addition to defaults */
  customFAQs?: FAQItem[];
  /** Whether to include default FAQs along with custom ones */
  includeDefaults?: boolean;
  /** Maximum number of FAQs to include in schema */
  maxFAQs?: number;
}

export default function FAQSchema({
  customFAQs,
  includeDefaults = true,
  maxFAQs = 10,
}: FAQSchemaProps = {}) {
  const franchise = useFranchiseContext();

  // Build default FAQs dynamically using franchise data
  const defaultFAQs = useMemo<FAQItem[]>(() => {
    const city = franchise.city;
    const phone = franchise.phone;
    // V3: serviceArea is now { primary: [], secondary: [] } - flatten to array
    const serviceAreaFlat = [
      ...franchise.serviceArea.primary,
      ...franchise.serviceArea.secondary,
    ];
    const neighborhoods = serviceAreaFlat.slice(1, 4).join(', ');
    const serviceAreaList = serviceAreaFlat.join(', ');

    return [
      {
        question: `How fast can Flood Doctor respond to water damage emergencies in ${city}?`,
        answer: `We provide 60-minute emergency response for water damage in ${city} and surrounding areas including ${neighborhoods}. Our crews are available 24/7, 365 days a year. Call ${phone} for immediate assistance.`,
      },
      {
        question: `Does Flood Doctor work with insurance companies for water damage claims in ${city}?`,
        answer: `Yes, we work directly with all major insurance companies and can bill them directly for water damage restoration in ${city}. We document everything thoroughly for your claim, including moisture readings, photos, and detailed reports. Our team has over 20 years of experience navigating insurance claims.`,
      },
      {
        question: `What areas does Flood Doctor serve near ${city}?`,
        answer: `Flood Doctor serves ${city} and the entire Northern Virginia region, including ${serviceAreaList}. We also provide emergency water damage restoration services in Washington DC and parts of Maryland.`,
      },
      {
        question: `What types of water damage does Flood Doctor handle in ${city}?`,
        answer: `We handle all types of water damage in ${city}: burst pipes, flooding, sewage backup, appliance leaks, roof leaks, storm damage, and more. Our IICRC-certified technicians are trained to address Category 1 (clean water), Category 2 (gray water), and Category 3 (black water/sewage) damage.`,
      },
    ];
  }, [franchise]);

  // Combine custom FAQs with defaults if needed
  const allFAQs = useMemo(() => {
    if (customFAQs && !includeDefaults) {
      return customFAQs.slice(0, maxFAQs);
    }
    if (customFAQs && includeDefaults) {
      return [...customFAQs, ...defaultFAQs].slice(0, maxFAQs);
    }
    return defaultFAQs.slice(0, maxFAQs);
  }, [customFAQs, includeDefaults, defaultFAQs, maxFAQs]);

  // Build the FAQ schema
  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allFAQs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
    [allFAQs]
  );

  useEffect(() => {
    // Create or update the JSON-LD script
    const scriptId = 'faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.textContent = '';
      }
    };
  }, [schema]);

  return null;
}

/**
 * Export named for consistency
 */
export { FAQSchema };

/**
 * Export type for use in other components
 */
export type { FAQItem };
