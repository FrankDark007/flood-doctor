import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { IICRCBadge, LeadSpecialistBadge, LicensedInsuredBadge, ExperienceBadge } from './AuthorBadges';

export interface AuthorInfo {
  name: string;
  title: string;
  credentials?: string[];
  image?: string;
  iicrc?: boolean;
  leadSpecialist?: boolean;
  licensed?: boolean;
  yearsExperience?: number;
}

// Default author for E-E-A-T signals
export const DEFAULT_AUTHOR: AuthorInfo = {
  name: "Mike Thompson",
  title: "Lead Restoration Specialist",
  credentials: ["IICRC Certified", "15+ Years Experience", "Virginia Licensed"],
  iicrc: true,
  leadSpecialist: true,
  licensed: true,
  yearsExperience: 15
};

interface ArticleAuthorProps {
  author?: AuthorInfo;
  datePublished: string;
  dateModified?: string;
  readTime?: string;
}

const ArticleAuthor: React.FC<ArticleAuthorProps> = ({
  author = DEFAULT_AUTHOR,
  datePublished,
  dateModified,
  readTime = "8 min read"
}) => {
  return (
    <div className="py-6 border-b border-gray-100 mb-8">
      <div className="flex items-center gap-4">
        {/* Author Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0 ring-2 ring-blue-100">
          {author.image ? (
            <img src={author.image} alt={author.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-primary font-bold text-xl">
              {author.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>

        {/* Author Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-gray-900 text-lg">{author.name}</span>
            <BadgeCheck size={18} className="text-primary shrink-0" />
          </div>
          <div className="text-sm text-gray-600 mb-2">
            {author.title}
          </div>
          {/* Premium Credential Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {author.iicrc && <IICRCBadge />}
            {author.yearsExperience && <ExperienceBadge years={author.yearsExperience} />}
            {author.licensed && <LicensedInsuredBadge />}
          </div>
        </div>

        {/* Date & Read Time */}
        <div className="text-right text-sm text-gray-500 shrink-0 hidden sm:block">
          <div className="font-medium text-gray-700">{dateModified ? `Updated ${dateModified}` : datePublished}</div>
          <div className="text-gray-400">{readTime}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthor;

// Schema helper for structured data
export function generateAuthorSchema(author: AuthorInfo = DEFAULT_AUTHOR) {
  return {
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.title,
    "affiliation": {
      "@type": "Organization",
      "name": "Flood Doctor"
    }
  };
}
