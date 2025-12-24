import React from 'react';

interface AuthorBlockProps {
  name: string;
  title: string;
  avatarSrc?: string;
}

/**
 * Author Block Component
 * Based on: workspace.google.com/blog article template
 *
 * Features:
 * - Centered layout
 * - Optional avatar
 * - Name and title display
 */
const AuthorBlock: React.FC<AuthorBlockProps> = ({
  name,
  title,
  avatarSrc,
}) => {
  return (
    <div className="flex flex-col items-center gap-3 py-8 border-b border-border mb-8">
      {avatarSrc && (
        <div className="w-12 h-12 rounded-full overflow-hidden bg-subtle">
          <img src={avatarSrc} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="text-center">
        <p className="text-base font-medium text-text">{name}</p>
        <p className="text-sm text-muted">{title}</p>
      </div>
    </div>
  );
};

export default AuthorBlock;
