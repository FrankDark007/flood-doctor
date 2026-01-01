import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Hero from '../components/sections/Hero';
import { 
  Heart, 
  Briefcase, 
  Zap, 
  GraduationCap, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Button from '../components/ui/Button';

const Careers: React.FC = () => {
  const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "100% covered medical, dental, and vision premiums for employees." },
    { icon: Zap, title: "Performance Bonuses", desc: "Monthly profit sharing based on team efficiency and client satisfaction." },
    { icon: Briefcase, title: "Clear Growth Path", desc: "Defined milestones to move from Apprentice to Lead to Project Manager." },
    { icon: GraduationCap, title: "Paid Certification", desc: "We cover all costs for your IICRC WRT, AMRT, and ASD certifications." }
  ];

  const jobs = [
    {
      title: "Lead Water Technician",
      location: "Arlington, VA",
      type: "Full-time",
      exp: "3+ years",
      desc: "Lead residential restoration projects, manage crew safety, and document losses via iPad."
    },
    {
      title: "Restoration Project Manager",
      location: "Fairfax, VA",
      type: "Full-time",
      exp: "5+ years",
      desc: "Oversee large loss projects, negotiate with adjusters using Xactimate, and ensure QC."
    },
    {
      title: "Mitigation Apprentice",
      location: "Ashburn, VA",
      type: "Entry Level",
      exp: "0-1 years",
      desc: "Learn the trade from the ground up. Paid training provided. Valid driver's license required."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Careers at Flood Doctor" 
        description="Join the Flood Doctor team. We are looking for certified restoration technicians in Northern Virginia." 
      />
      
      {/* 1. Hero: Impact Statement */}
      <Hero 
        title="Do work that matters." 
        subtitle="Join a team that helps people rebuild their lives after disaster strikes. We're looking for problem solvers, not just laborers."
      />

      {/* 2. Benefits Grid */}
      <div className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
             <div className="max-w-3xl mb-16">
                 <h2 className="font-display text-3xl font-medium text-text mb-4">Why build your career here?</h2>
                 <p className="font-sans text-xl text-muted leading-relaxed">
                     Restoration is hard work. We believe in compensating our team fairly, protecting their health, and investing in their future skills.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {benefits.map((b, i) => (
                     <div key={i} className="bg-subtle p-8 rounded-[32px] hover:bg-white hover:shadow-google transition-all duration-300 border border-transparent hover:border-gray-100 group">
                         <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                             <b.icon size={24} />
                         </div>
                         <h3 className="font-display text-xl font-medium text-text mb-3">{b.title}</h3>
                         <p className="font-sans text-muted leading-relaxed">{b.desc}</p>
                     </div>
                 ))}
             </div>
          </div>
      </div>

      {/* 3. Culture / Training Highlight */}
      <div className="py-20 bg-[#1a73e8] text-white">
         <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                     <ShieldCheck size={16} />
                     <span>IICRC Certified Firm</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-medium mb-6 leading-tight">
                     We invest in your expertise.
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
                     We don't just send you out with a fan. Every technician undergoes our "Flood Doctor Academy" training, learning the science of psychrometry and structural drying before leading a job.
                  </p>
                  <Button href="/about/" variant="secondary" className="border-none bg-white text-primary hover:bg-blue-50">
                     Learn about our standards
                  </Button>
               </div>
               
               {/* Visual: Training Card */}
               <div className="relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary font-bold text-2xl">
                           A+
                        </div>
                        <div>
                           <div className="font-medium text-xl">Training Program</div>
                           <div className="text-blue-200">Industry-leading curriculum</div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        {['Water Restoration Technician (WRT)', 'Applied Structural Drying (ASD)', 'Applied Microbial Remediation (AMRT)'].map((cert, i) => (
                           <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                              <CheckCircle2 className="text-green-300 shrink-0" />
                              <span className="font-medium">{cert}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. Open Positions (Table Style) */}
      <div id="openings" className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
           <h2 className="font-display text-3xl font-medium text-text mb-12">Open Positions</h2>
           
           <div className="border border-gray-200 rounded-[32px] overflow-hidden">
              {jobs.map((job, i) => (
                 <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border-b border-gray-100 last:border-0 hover:bg-subtle transition-colors">
                    <div className="max-w-2xl">
                       <h3 className="font-display text-xl font-medium text-text mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                       </h3>
                       <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                          <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                          <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
                          <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.exp}</span>
                       </div>
                       <p className="text-muted leading-relaxed">
                          {job.desc}
                       </p>
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-8 shrink-0">
                       <Button href="mailto:careers@flood.doctor" variant="outline" className="rounded-full px-8">
                          Apply Now
                       </Button>
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-12 text-center bg-gray-50 rounded-3xl p-12">
              <h3 className="font-display text-xl font-medium text-text mb-2">Don't see your role?</h3>
              <p className="text-muted mb-6">We are always open to meeting talented people.</p>
              <a href="mailto:careers@flood.doctor" className="text-primary font-medium hover:underline flex items-center justify-center gap-2">
                 Email us your resume <ArrowRight size={16} />
              </a>
           </div>

        </div>
      </div>
    </main>
  );
};

export default Careers;