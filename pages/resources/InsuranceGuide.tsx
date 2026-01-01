import React, { useState } from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { 
  PhoneIncoming, 
  Camera, 
  FileCheck, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

const InsuranceGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      title: "1. Report the Loss",
      icon: PhoneIncoming,
      content: "Contact your insurance carrier’s 24-hour claims hotline immediately. Provide the date/time of loss and ask for your Claim Number. You do not need to wait for an adjuster to start emergency mitigation (stopping the water).",
      action: "Tip: Write down your Claim # and Adjuster's Name immediately."
    },
    {
      title: "2. Emergency Mitigation",
      icon: FileCheck,
      content: "Your policy requires you to 'mitigate' (prevent) further damage. This is where Flood Doctor steps in to extract water, remove wet drywall, and set up drying equipment. This phase is typically covered under 'Emergency Services'.",
      action: "We bill your carrier directly for this phase."
    },
    {
      title: "3. Documentation & Scope",
      icon: Camera,
      content: "We take hundreds of photos and create a moisture map of your property. An adjuster will visit to inspect the damage. We meet them on-site to ensure they see the full extent of the issue, including hidden moisture behind walls.",
      action: "Do not throw away damaged items until the adjuster sees them."
    },
    {
      title: "4. Estimates & Approval",
      icon: FileText,
      content: "We submit a detailed line-item estimate using Xactimate (the industry standard software). We negotiate directly with your desk adjuster to agree on the scope and price of repairs.",
      action: "We handle the technical negotiations for you."
    }
  ];

  const faqs = [
    {
      question: "Will my insurance rates go up?",
      answer: "Not necessarily. Water damage is often considered a 'sudden and accidental' non-negligent loss. However, rate changes depend on your specific carrier and claim history."
    },
    {
      question: "Do I have to use the vendor my insurance recommends?",
      answer: "No. You have the legal right to hire the restoration contractor of your choice. Insurance carriers often recommend 'preferred vendors' to save themselves money, but they work for the insurance company, not you. Flood Doctor works for you."
    },
    {
      question: "What is my deductible?",
      answer: "Your deductible is the portion of the claim you are responsible for paying. For example, if repairs cost $10,000 and your deductible is $1,000, the insurance pays $9,000. You pay the $1,000 directly to Flood Doctor."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Insurance Claims Guide" 
        description="Step-by-step guide to handling property insurance claims for water damage in Northern Virginia." 
      />
      
      {/* 1. Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Insurance Guide', path: '#' }]} />
           
           <div className="max-w-3xl mt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                 <HelpCircle size={14} /> Homeowner Resource
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
                 Navigating the Claims Process
              </h1>
              <p className="font-sans text-xl text-muted leading-relaxed">
                 Dealing with insurance can be the most stressful part of a disaster. We speak their language (Xactimate) and advocate for you to ensure you get the coverage you deserve.
              </p>
           </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Main Content */}
          <div className="lg:col-span-8">
              
              {/* Timeline Section */}
              <div className="relative mb-24">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100"></div>

                  <div className="space-y-12">
                      {steps.map((step, index) => (
                          <div key={index} className="relative flex gap-8 group">
                              {/* Icon Bubble */}
                              <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                  <step.icon size={20} />
                              </div>
                              
                              {/* Content */}
                              <div className="pt-1">
                                  <h3 className="font-display text-2xl font-medium text-text mb-3">
                                      {step.title}
                                  </h3>
                                  <p className="font-sans text-muted leading-relaxed mb-4 text-lg">
                                      {step.content}
                                  </p>
                                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 inline-flex items-start gap-3">
                                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                      <span className="text-sm font-medium text-text">{step.action}</span>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Dos and Don'ts Grid */}
              <h2 className="font-display text-3xl font-medium text-text mb-8">Critical Dos & Don'ts</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-20">
                  {/* Dos */}
                  <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
                      <div className="flex items-center gap-3 mb-6">
                          <CheckCircle2 className="text-green-600" size={28} />
                          <h3 className="font-bold text-green-800 text-lg">DO</h3>
                      </div>
                      <ul className="space-y-4">
                          {[
                            "Report the loss immediately",
                            "Take photos of the source of damage",
                            "Keep all receipts for hotels/meals",
                            "Authorize emergency mitigation to stop damage"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-green-900">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Don'ts */}
                  <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
                       <div className="flex items-center gap-3 mb-6">
                          <XCircle className="text-red-600" size={28} />
                          <h3 className="font-bold text-red-800 text-lg">DON'T</h3>
                      </div>
                      <ul className="space-y-4">
                          {[
                            "Throw away damaged items before inspection",
                            "Start permanent repairs (drywall) until dry",
                            "Paint over water stains without testing",
                            "Wait for an adjuster to stop the water"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-red-900">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-20">
                  <GoogleStyleFAQ 
                    data={faqs} 
                    title="Common Insurance Questions" 
                    className="border-none p-0"
                  />
              </div>

          </div>

          {/* RIGHT: Sticky Sidebar */}
          <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                  {/* Callout Card */}
                  <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                      
                      <h3 className="font-display text-xl font-medium mb-4 relative z-10">Confused by your policy?</h3>
                      <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                          We work with all major carriers (State Farm, Allstate, USAA, etc.) every day. We can help you file your claim.
                      </p>
                      
                      <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                          Call for Advice
                      </Button>
                      
                      <div className="mt-6 pt-6 border-t border-white/20">
                          <div className="flex items-center gap-3">
                              <div className="bg-white/20 p-2 rounded-lg">
                                  <FileText size={16} />
                              </div>
                              <div>
                                  <div className="text-xs text-blue-200 uppercase tracking-wide font-bold">We use Xactimate</div>
                                  <div className="text-xs text-white">The industry standard pricing tool</div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Document Download (Mock) */}
                  <div className="bg-white border border-gray-200 rounded-[24px] p-6 hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                              <FileText size={20} />
                          </div>
                          <div>
                              <div className="font-medium text-text group-hover:text-primary transition-colors">Download Checklist</div>
                              <div className="text-xs text-muted">PDF • 1.2 MB</div>
                          </div>
                          <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-primary" />
                      </div>
                  </div>

              </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default InsuranceGuide;