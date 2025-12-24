import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const Terms: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Terms of Service" description="Terms and conditions for using Flood Doctor services and website." />
      
      <div className="pt-8 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Terms of Service', path: '/terms/' }]} />
            <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-6">Terms of Service</h1>
            
            <div className="prose prose-blue text-gray-600 max-w-none">
                <p className="mb-6 font-medium text-gray-500">Last Updated: October 24, 2023</p>
                <p className="mb-6">
                    Please read these Terms of Service ("Terms") carefully before using the flood.doctor website operated by Flood Doctor.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-6">
                    By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Emergency Services Response</h2>
                <p className="mb-6">
                    Our "60-minute response" time is an estimate based on normal traffic and weather conditions in Northern Virginia. While we strive to meet this target for every emergency call, severe weather events (hurricanes, regional flooding) or high call volumes may impact arrival times. We do not guarantee specific arrival times.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. Intellectual Property</h2>
                <p className="mb-6">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Flood Doctor and its licensors.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Limitation of Liability</h2>
                <p className="mb-6">
                    In no event shall Flood Doctor, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>
            </div>
          </div>
      </div>
    </main>
  );
};

export default Terms;