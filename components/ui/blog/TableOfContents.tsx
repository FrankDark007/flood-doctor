import React from 'react';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  title = "In This Article"
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-[#1a73e8]" />
        <h2 className="text-lg font-semibold text-gray-900 m-0">{title}</h2>
      </div>
      <ul className="space-y-2 list-none p-0 m-0">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`${item.level === 3 ? 'pl-4' : ''}`}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-left w-full text-gray-700 hover:text-[#1a73e8] transition-colors text-sm leading-relaxed hover:underline cursor-pointer bg-transparent border-none p-0"
            >
              {item.level === 3 && <span className="text-gray-400 mr-2">—</span>}
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Section heading component with anchor
interface SectionHeadingProps {
  id: string;
  level?: 2 | 3;
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  level = 2,
  children,
  className = ''
}) => {
  const Tag = level === 2 ? 'h2' : 'h3';

  return (
    <Tag
      id={id}
      className={`scroll-mt-20 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default TableOfContents;
