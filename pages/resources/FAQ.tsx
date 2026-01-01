import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const FAQ: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Frequently Asked Questions" description="Answers about water damage restoration costs, timing, and insurance." />
      
      <div className="pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'FAQ', path: '/resources/faq/' }]} />
           <h1 className="text-4xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h1>
           <p className="text-xl text-gray-600">Common questions about the restoration process.</p>
        </div>
      </div>

      <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Response</h2>
              <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-2">How fast can you get here?</h3>
                      <p className="text-gray-600">We dispatch teams immediately and typically arrive within 60 minutes for emergency calls in Northern Virginia.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-2">Are you available on weekends?</h3>
                      <p className="text-gray-600">Yes. We operate 24 hours a day, 7 days a week, 365 days a year, including all holidays.</p>
                  </div>
              </div>
          </section>

          <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Insurance & Billing</h2>
              <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-2">Do I need to pay upfront?</h3>
                      <p className="text-gray-600">For most insurance claims, we bill your insurance company directly. You are typically only responsible for your deductible.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-2">Will you help with the claim?</h3>
                      <p className="text-gray-600">Absolutely. We document all damage with photos and moisture readings and communicate directly with your adjuster to ensure the claim is handled correctly.</p>
                  </div>
              </div>
          </section>

      </div>
    </main>
  );
};

export default FAQ;