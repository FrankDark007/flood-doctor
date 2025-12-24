import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Hero from '../../components/sections/Hero';
import SupportChatCard from '../../components/ui/illustrations/SupportChatCard';
import DailyUpdateIllustration from '../../components/ui/illustrations/DailyUpdateIllustration';
import InsuranceCoordinationIllustration from '../../components/ui/illustrations/InsuranceCoordinationIllustration';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import Button from '../../components/ui/Button';

const COMMUNICATION_FAQ = [
    {
        question: "How often will I get updates?",
        answer: "You will receive a documented update at least once every 24 hours while drying is active. For emergency dispatch, we provide live ETA updates until the crew arrives."
    },
    {
        question: "Do I have to talk to my insurance adjuster?",
        answer: "We handle the technical negotiations and documentation directly with your adjuster. You will need to file the initial claim, but we take over the burden of proof for the restoration scope."
    },
    {
        question: "Can I text my project manager?",
        answer: "Yes. Every project is assigned a dedicated Project Manager with a direct line. You can call or text them for quick questions without navigating a call center."
    },
    {
        question: "What if I have a question after hours?",
        answer: "Our main line (877) 497-0007 is staffed 24/7/365. For non-emergency questions on active jobs, you can text your PM and they will respond first thing in the morning."
    }
];

const Communication: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Communication & Support" 
        description="We keep you informed every step of the way. Direct access to project managers, daily updates, and seamless insurance coordination." 
      />
      
      <div className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Communication', path: '/resources/communication/' }]} />
            
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center mt-8">
                 <div className="lg:col-span-5 mb-12 lg:mb-0">
                    <h1 className="text-[40px] md:text-5xl lg:text-[3.5rem] font-semibold text-gray-900 mb-6 tracking-[-0.02em] leading-[1.05]">
                        No More Guessing Games
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Water damage is stressful enough without chasing contractors for answers. We prioritize proactive, clear communication from dispatch to final sign-off.
                    </p>
                    <div className="hidden md:flex flex-col sm:flex-row gap-4">
                        <Button to="/request/" variant="primary" className="h-12 px-8 text-base">Request Service</Button>
                    </div>
                 </div>
                 <div className="lg:col-span-7 flex justify-center lg:justify-end">
                    <SupportChatCard />
                 </div>
            </div>
        </div>
      </div>

      {/* Feature 1: Direct Access */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                  <h2 className="text-3xl font-semibold text-gray-900 mb-4">Direct Access to Your Team</h2>
                  <p className="text-lg text-gray-600">You won't be stuck in a phone tree. You get the direct mobile number of your Project Manager.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Project Manager</h3>
                      <p className="text-gray-600">One point of contact responsible for your entire restoration.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Text & Call Support</h3>
                      <p className="text-gray-600">Quick question? Send a text. Need to discuss details? Give us a call.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Dispatch Center</h3>
                      <p className="text-gray-600">For emergencies, our headquarters is always online to deploy resources.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature 2: Daily Updates */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
                  <div className="order-2 lg:order-1">
                      <DailyUpdateIllustration />
                  </div>
                  <div className="order-1 lg:order-2 mb-12 lg:mb-0">
                      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Proactive Daily Updates</h2>
                      <p className="text-lg text-gray-600 mb-6">
                          You shouldn't have to ask "is it dry yet?" We send you a summary every day drying equipment is running.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                              <span className="text-gray-700"><strong>Drying Progress:</strong> See how humidity and moisture levels are dropping.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                              <span className="text-gray-700"><strong>Equipment Status:</strong> Know what is running and when it might come out.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                              <span className="text-gray-700"><strong>Next Steps:</strong> Clear expectations for the next 24 hours.</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature 3: Insurance Coordination */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
                  <div className="mb-12 lg:mb-0">
                      <h2 className="text-3xl font-semibold text-gray-900 mb-6">We Speak "Insurance" For You</h2>
                      <p className="text-lg text-gray-600 mb-6">
                          Restoration claims are complex. We bridge the gap between technical data and insurance requirements.
                      </p>
                      <p className="text-gray-600 mb-6">
                          We send photos, moisture maps, and drying logs directly to your adjuster using Xactimate—the industry standard software they use. This speeds up approval and ensures nothing is missed.
                      </p>
                      <div className="hidden md:block">
                        <Button to="/resources/insurance-guide/" variant="secondary">View Insurance Guide</Button>
                      </div>
                  </div>
                  <div>
                      <InsuranceCoordinationIllustration />
                  </div>
              </div>
          </div>
      </section>

      <GoogleStyleFAQ data={COMMUNICATION_FAQ} title="Communication FAQ" />
    </main>
  );
};

export default Communication;