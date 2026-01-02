import React from 'react';
import { BadgeCheck } from 'lucide-react';

export interface AuthorInfo {
  name: string;
  title: string;
  credentials?: string[];
  image?: string;
}

// Default author for E-E-A-T signals
export const DEFAULT_AUTHOR: AuthorInfo = {
  name: "Mike Thompson",
  title: "Lead Restoration Specialist",
  credentials: ["IICRC Certified", "15+ Years Experience", "Virginia Licensed"]
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
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 mb-8">
      {/* Author Avatar */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0">
        {author.image ? (
          <img src={author.image} alt={author.name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="text-primary font-bold text-lg">
            {author.name.split(' ').map(n => n[0]).join('')}
          </span>
        )}
      </div>

      {/* Author Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-gray-900">{author.name}</span>
          <BadgeCheck size={16} className="text-primary shrink-0" />
        </div>
        <div className="text-sm text-gray-500">
          {author.title}
          {author.credentials && author.credentials.length > 0 && (
            <span className="hidden sm:inline"> · {author.credentials[0]}</span>
          )}
        </div>
      </div>

      {/* Date & Read Time */}
      <div className="text-right text-sm text-gray-500 shrink-0">
        <div>{dateModified ? `Updated ${dateModified}` : datePublished}</div>
        <div className="text-gray-400">{readTime}</div>
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
