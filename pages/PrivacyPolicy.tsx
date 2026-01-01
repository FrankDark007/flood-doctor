import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Privacy Policy" description="Flood Doctor privacy policy and data protection information." />
      
      <div className="pt-8 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy-policy/' }]} />
            <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-6">Privacy Policy</h1>
            
            <div className="prose prose-blue text-gray-600 max-w-none">
                <p className="mb-6 font-medium text-gray-500">Last Updated: October 24, 2023</p>
                <p className="mb-6">
                    At Flood Doctor ("we", "us", "our"), we respect your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website flood.doctor.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Information We Collect</h2>
                <p className="mb-4">
                    We collect information you provide directly to us, such as when you fill out a "Request Service" form, call our emergency line, or sign up for updates. This may include:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Property address and damage details</li>
                    <li>Insurance information (if provided for claims)</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Respond to your emergency service requests immediately.</li>
                    <li>Communicate with you regarding your restoration project.</li>
                    <li>Process insurance claims on your behalf (sharing relevant data with your carrier).</li>
                    <li>Improve our website and services.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Data Security</h2>
                <p className="mb-6">
                    We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Contact Us</h2>
                <p className="mb-6">
                    If you have questions about this policy, please contact us at privacy@flood.doctor.
                </p>
            </div>
          </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;