import React from 'react';
import { Award, Shield, Star, BadgeCheck, Building2, Leaf, Trophy, Heart, Landmark, FileCheck, ClipboardCheck, Scale, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/* ─── Types ─── */
interface CardItem {
  icon: React.ReactNode;
  category: 'Award' | 'Association' | 'Certification';
  subcategory: string;
  title: string;
  description: string;
  accentColor: string;
}

/* ─── Data ─── */
const ALL_CARDS: CardItem[] = [
  {
    icon: <Star size={28} strokeWidth={1.5} />,
    category: 'Award',
    subcategory: '2010 – 2024',
    title: "Angi's Super Service Provider",
    description: "Awarded the Angi's Super Service Provider award every single year since joining the Angi's List family of quality service providers.",
    accentColor: '#fbbc04',
  },
  {
    icon: <Award size={28} strokeWidth={1.5} />,
    category: 'Award',
    subcategory: '2011 & 2015',
    title: 'Crawford Connection Golden Hammer',
    description: 'Distinguished Excellence in Achievement Award for ranking in the top 200 of more than 4,000 contractors in the U.S. and Canada.',
    accentColor: '#ea4335',
  },
  {
    icon: <Heart size={28} strokeWidth={1.5} />,
    category: 'Award',
    subcategory: '2010 – 2024',
    title: 'Best of Houzz – Service',
    description: "Best of Houzz is the people's choice award. Submitted and awarded the Houzz Customer Service Award for fourteen years in a row.",
    accentColor: '#34a853',
  },
  {
    icon: <Shield size={28} strokeWidth={1.5} />,
    category: 'Award',
    subcategory: '2010 – 2025',
    title: 'DKI Diamond Claims Award',
    description: 'Presented to DKI Restoration Contractors who excel in providing a high level of service, reporting, and assistance relative to property loss claims.',
    accentColor: '#1a73e8',
  },
  {
    icon: <Trophy size={28} strokeWidth={1.5} />,
    category: 'Award',
    subcategory: '2010 – 2024',
    title: 'Best of HomeAdvisor',
    description: 'Named a recipient for fourteen years in a row, honoring top-notch professionals providing extraordinary quality, service, and value.',
    accentColor: '#fbbc04',
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    category: 'Association',
    subcategory: '2000 – 2025',
    title: 'Northern Virginia Chamber of Commerce',
    description: 'Outstanding Corporate Citizenship Awards honoree — celebrating businesses that champion community good in the greater Washington area.',
    accentColor: '#34a853',
  },
  {
    icon: <BadgeCheck size={28} strokeWidth={1.5} />,
    category: 'Association',
    subcategory: '2000 – 2025',
    title: 'Restoration Industry Association',
    description: 'Innovation in Restoration award recipient for residential and commercial restoration projects, including remediation of structures and contents.',
    accentColor: '#1a73e8',
  },
  {
    icon: <Landmark size={28} strokeWidth={1.5} />,
    category: 'Association',
    subcategory: '2004 – 2025',
    title: 'Fairfax County Chamber of Commerce',
    description: 'Outstanding Corporate Citizenship Awards honoree — celebrating individuals and businesses serving as champions for good.',
    accentColor: '#ea4335',
  },
  {
    icon: <Leaf size={28} strokeWidth={1.5} />,
    category: 'Certification',
    subcategory: 'Active',
    title: 'EPA Lead-Safe Certified',
    description: 'Certified by the U.S. Environmental Protection Agency as a Lead-Safe firm, ensuring safe practices in properties with lead-based materials.',
    accentColor: '#34a853',
  },
];

/* ─── Card Component ─── */
const Card: React.FC<{ item: CardItem; index: number }> = ({ item, index }) => (
  <div
    className="group bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    style={{
      boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
      animationDelay: `${index * 80}ms`,
    }}
  >
    {/* Colored accent bar */}
    <div className="h-1 w-full" style={{ background: item.accentColor }} />

    {/* Icon area */}
    <div className="pt-7 px-7 pb-3">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${item.accentColor}12` }}
      >
        <div style={{ color: item.accentColor }}>
          {item.icon}
        </div>
      </div>
    </div>

    {/* Content area */}
    <div className="px-7 pb-7 flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
          style={{ background: `${item.accentColor}12`, color: item.accentColor }}
        >
          {item.category}
        </span>
        <span className="text-[11px] text-[#80868b]">
          {item.subcategory}
        </span>
      </div>

      <h3 className="text-[18px] font-semibold text-[#202124] leading-[26px] mb-2">
        {item.title}
      </h3>

      <p className="text-[14px] text-[#5f6368] leading-[22px] flex-1">
        {item.description}
      </p>
    </div>
  </div>
);

/* ─── Stat Card ─── */
const StatCard: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => (
  <div className="text-center group">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8f0fe] mb-4 transition-transform duration-300 group-hover:scale-110">
      <div className="text-[#1a73e8]">{icon}</div>
    </div>
    <div className="text-[36px] lg:text-[44px] font-bold text-[#202124] leading-none tracking-tight">
      {value}
    </div>
    <div className="text-[13px] text-[#5f6368] mt-2 font-medium uppercase tracking-wider">
      {label}
    </div>
  </div>
);

/* ─── License Item ─── */
const LicenseItem: React.FC<{ icon: React.ReactNode; title: string; org: string; details?: string[]; license?: string }> = ({ icon, title, org, details, license }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f8f9fa] transition-colors duration-200">
    <div className="w-11 h-11 rounded-xl bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
      <div className="text-[#1a73e8]">{icon}</div>
    </div>
    <div className="min-w-0">
      <h4 className="text-[15px] font-semibold text-[#202124] leading-tight">{title}</h4>
      <p className="text-[13px] text-[#5f6368] mt-0.5">{org}</p>
      {details && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {details.map((d) => (
            <span key={d} className="text-[12px] text-[#3c4043] bg-[#f1f3f4] px-2 py-0.5 rounded-md">{d}</span>
          ))}
        </div>
      )}
      {license && (
        <p className="text-[12px] text-[#80868b] mt-1.5">
          License <span className="text-[#1a73e8] font-semibold">{license}</span>
        </p>
      )}
    </div>
  </div>
);

/* ─── Cert Badge ─── */
const CertBadge: React.FC<{ name: string; code: string }> = ({ name, code }) => (
  <div className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#f8f9fa] transition-colors duration-200 group">
    <span className="text-[13px] text-[#3c4043] group-hover:text-[#202124] transition-colors">{name}</span>
    <span className="text-[12px] font-bold text-[#1a73e8] bg-[#e8f0fe] px-2 py-0.5 rounded-md ml-2 flex-shrink-0">{code}</span>
  </div>
);


/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */
const AwardsAssociations: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Awards & Associations | Flood Doctor"
        description="Flood Doctor's industry awards, certifications, and professional associations. IICRC certified, BBB A+ rated, 14-time HomeAdvisor award winner."
        canonicalPath="/awards/"
      />

      <main id="main-content">

        {/* ─── Hero Section ─── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-[#f8faff] to-white pt-20 pb-16 lg:pt-28 lg:pb-20">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1a73e8]/[0.04] rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#34a853]/[0.04] rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbbc04]/[0.02] rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-1.5 text-[13px] text-[#5f6368] mb-8">
              <Link to="/" className="hover:text-[#1a73e8] transition-colors">Home</Link>
              <ChevronRight size={14} className="text-[#dadce0]" />
              <span className="text-[#202124] font-medium">Awards & Associations</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#dadce0] rounded-full px-4 py-2 mb-8 shadow-sm">
              <Trophy size={16} className="text-[#fbbc04]" />
              <span className="text-[13px] font-semibold text-[#3c4043]">25+ Years of Industry Recognition</span>
            </div>

            <h1 className="text-[40px] lg:text-[56px] font-bold text-[#202124] tracking-tight leading-[1.1] mb-6">
              Awards &{' '}
              <span className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] bg-clip-text text-transparent">
                Associations
              </span>
            </h1>
            <p className="text-[17px] lg:text-[19px] text-[#5f6368] leading-relaxed max-w-2xl mx-auto">
              Industry recognition that reflects our commitment to excellence in water damage restoration, customer service, and community leadership.
            </p>
          </div>
        </section>

        {/* ─── Awards & Associations Cards Grid ─── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-[#dadce0] to-transparent" />
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#80868b]">
                Awards & Memberships
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#dadce0] to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ALL_CARDS.map((card, i) => (
                <Card key={card.title} item={card} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Stats Strip ─── */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard value="14+" label="Years of Awards" icon={<Trophy size={20} strokeWidth={1.8} />} />
              <StatCard value="4.9" label="Average Rating" icon={<Star size={20} strokeWidth={1.8} />} />
              <StatCard value="500+" label="Verified Reviews" icon={<Heart size={20} strokeWidth={1.8} />} />
              <StatCard value="24/7" label="Emergency Response" icon={<Phone size={20} strokeWidth={1.8} />} />
            </div>
          </div>
        </section>

        {/* ─── Licenses & Certifications ─── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section heading */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#e8f0fe] rounded-full px-4 py-1.5 mb-6">
                <BadgeCheck size={16} className="text-[#1a73e8]" />
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#1a73e8]">Fully Licensed & Certified</span>
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] tracking-tight">
                Licenses & Certifications
              </h2>
              <p className="text-[16px] text-[#5f6368] mt-3 max-w-2xl mx-auto">
                Licensed across Virginia, Maryland, and Washington D.C. with industry-leading professional certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Licenses Column */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e8eaed] shadow-sm">
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#f1f3f4]">
                  <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] flex items-center justify-center">
                    <FileCheck size={16} className="text-[#1a73e8]" />
                  </div>
                  <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-[#202124]">
                    Licenses
                  </h3>
                  <span className="ml-auto text-[12px] text-[#5f6368] bg-[#f1f3f4] px-2 py-0.5 rounded-full font-medium">4 active</span>
                </div>

                <div className="space-y-1">
                  <LicenseItem
                    icon={<FileCheck size={18} strokeWidth={1.6} />}
                    title="Class-A Contractor | DPOR"
                    org="Virginia Dept. of Professional & Occupational Regulation"
                    details={['Commercial Building (CBC)', 'Residential Building (RBC)']}
                    license="27-05155505"
                  />
                  <LicenseItem
                    icon={<Leaf size={18} strokeWidth={1.6} />}
                    title="Responsible Land Disturber"
                    org="Virginia Dept. of Environmental Quality"
                    license="RLD05374"
                  />
                  <LicenseItem
                    icon={<Landmark size={18} strokeWidth={1.6} />}
                    title="Washington, D.C. | DLCP"
                    org="DC Dept. of Licensing & Consumer Protection"
                    details={['Class-A General Contractor']}
                  />
                  <LicenseItem
                    icon={<Scale size={18} strokeWidth={1.6} />}
                    title="Maryland Home Improvement"
                    org="Maryland MHIC"
                  />
                </div>
              </div>

              {/* Certifications Column */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#e8eaed] shadow-sm">
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#f1f3f4]">
                  <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] flex items-center justify-center">
                    <BadgeCheck size={16} className="text-[#1a73e8]" />
                  </div>
                  <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-[#202124]">
                    Certifications
                  </h3>
                  <span className="ml-auto text-[12px] text-[#5f6368] bg-[#f1f3f4] px-2 py-0.5 rounded-full font-medium">11 active</span>
                </div>

                {/* IICRC */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3 px-3">
                    <div className="w-9 h-9 rounded-lg bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
                      <BadgeCheck size={18} strokeWidth={1.6} className="text-[#1a73e8]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#202124]">IICRC Certified Firm</h4>
                      <p className="text-[12px] text-[#80868b]">Institute of Inspection, Cleaning & Restoration</p>
                    </div>
                  </div>
                  <div className="ml-3 space-y-0.5">
                    {[
                      { name: 'Water Damage Restoration', code: 'WRT' },
                      { name: 'Fire and Smoke Restoration', code: 'FSRT' },
                      { name: 'Commercial Drying Specialist', code: 'CDS' },
                      { name: 'Applied Structural Drying', code: 'ASD' },
                      { name: 'Odor Control Technician', code: 'OCT' },
                      { name: 'Health and Safety Technician', code: 'HST' },
                      { name: 'Applied Microbial Remediation', code: 'AMRT' },
                    ].map((cert) => (
                      <CertBadge key={cert.code} name={cert.name} code={cert.code} />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#f1f3f4] mx-3 mb-6" />

                {/* RIA */}
                <div>
                  <div className="flex items-center gap-3 mb-3 px-3">
                    <div className="w-9 h-9 rounded-lg bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck size={18} strokeWidth={1.6} className="text-[#1a73e8]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#202124]">Restoration Industry Association</h4>
                    </div>
                  </div>
                  <div className="ml-3 space-y-0.5">
                    {[
                      { name: 'Certified Restorer\u00AE', code: 'CR' },
                      { name: 'Water Loss Specialist', code: 'WLS' },
                      { name: 'Contents Loss Specialist', code: 'CLS' },
                      { name: 'Certified Mold Professional', code: 'CMP' },
                    ].map((cert) => (
                      <CertBadge key={cert.code} name={cert.name} code={cert.code} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="relative py-20 lg:py-24 bg-[#1a73e8] overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/[0.05] rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/[0.05] rounded-full" />
          </div>

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <Star size={14} className="text-[#fbbc04]" />
              <span className="text-[13px] font-semibold text-white/90">Trusted by 500+ homeowners</span>
            </div>
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white tracking-tight mb-4">
              Experience award-winning service
            </h2>
            <p className="text-[17px] text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
              Our IICRC-certified teams are standing by 24/7. Get a response in under 60 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/request/" variant="primary" className="bg-white !text-[#1a73e8] hover:bg-gray-50 font-semibold px-8 py-3.5 text-[16px] shadow-lg shadow-black/10">
                Request Service
              </Button>
              <Button href="tel:8774970007" variant="outline" className="!border-white/30 !text-white hover:!bg-white/10 font-semibold px-8 py-3.5 text-[16px]">
                (877) 497-0007
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AwardsAssociations;
