import React from 'react';

// IICRC Certified Badge - Premium Design
export const IICRCBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#iicrc-gradient)" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="#0d47a1" strokeWidth="0.5"/>
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="iicrc-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1565c0"/>
          <stop offset="100%" stopColor="#0d47a1"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-xs font-semibold text-blue-800 tracking-tight">IICRC Certified</span>
  </div>
);

// Lead Specialist Badge - Premium Design
export const LeadSpecialistBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.4 8.2L21 9L16 13.8L17.5 21L12 17.5L6.5 21L8 13.8L3 9L9.6 8.2L12 2Z" fill="url(#star-gradient)" stroke="#b45309" strokeWidth="0.5"/>
      <defs>
        <linearGradient id="star-gradient" x1="3" y1="2" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-xs font-semibold text-amber-800 tracking-tight">Lead Restoration Specialist</span>
  </div>
);

// Licensed & Insured Badge
export const LicensedInsuredBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5V11C4 16.5 7.5 21.5 12 23C16.5 21.5 20 16.5 20 11V5L12 2Z" fill="url(#shield-gradient)" stroke="#166534" strokeWidth="0.5"/>
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="shield-gradient" x1="4" y1="2" x2="20" y2="23" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-xs font-semibold text-green-800 tracking-tight">Licensed & Insured</span>
  </div>
);

// 15+ Years Experience Badge
export const ExperienceBadge: React.FC<{ years?: number; className?: string }> = ({ years = 15, className = '' }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#exp-gradient)" stroke="#6b21a8" strokeWidth="0.5"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">{years}+</text>
      <defs>
        <linearGradient id="exp-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9333ea"/>
          <stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-xs font-semibold text-purple-800 tracking-tight">{years}+ Years Experience</span>
  </div>
);

// Combined Author Credentials Component
interface AuthorCredentialsProps {
  iicrc?: boolean;
  leadSpecialist?: boolean;
  licensed?: boolean;
  years?: number;
  className?: string;
}

export const AuthorCredentials: React.FC<AuthorCredentialsProps> = ({
  iicrc = true,
  leadSpecialist = true,
  licensed = false,
  years,
  className = ''
}) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    {iicrc && <IICRCBadge />}
    {leadSpecialist && <LeadSpecialistBadge />}
    {licensed && <LicensedInsuredBadge />}
    {years && <ExperienceBadge years={years} />}
  </div>
);

export default AuthorCredentials;
