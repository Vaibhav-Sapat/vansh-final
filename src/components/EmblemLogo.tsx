import React, { useState } from 'react';

interface EmblemLogoProps {
  className?: string;
  alt?: string;
}

export const EmblemLogo: React.FC<EmblemLogoProps> = ({
  className = 'w-full h-full object-contain',
  alt = 'PageTurner Books Emblem'
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  // Use relative path or BASE_URL for GitHub Pages compatibility
  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || './';
  const emblemSrc = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}pageturner-emblem.png`;

  if (hasError) {
    // Elegant SVG fallback with golden book and ribbon matching PageTurner identity
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={alt}
      >
        <rect width="100" height="100" rx="20" fill="#400710" />
        <path
          d="M20 72C20 62 32 58 50 62C68 58 80 62 80 72V34C80 24 68 20 50 24C32 20 20 24 20 34V72Z"
          fill="#5c1d24"
          stroke="#ffe088"
          strokeWidth="2.5"
        />
        {/* Spine Divider */}
        <line x1="50" y1="24" x2="50" y2="72" stroke="#ffe088" strokeWidth="2.5" />
        {/* Book Pages Texture Lines */}
        <line x1="28" y1="36" x2="44" y2="38" stroke="#ffe088" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="28" y1="44" x2="44" y2="46" stroke="#ffe088" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="28" y1="52" x2="44" y2="54" stroke="#ffe088" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="56" y1="38" x2="72" y2="36" stroke="#ffe088" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="56" y1="46" x2="72" y2="44" stroke="#ffe088" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="56" y1="54" x2="72" y2="52" stroke="#ffe088" strokeWidth="1.5" strokeOpacity="0.8" />
        {/* Bookmark Ribbon */}
        <path d="M50 24V48L46 44L42 48V24" fill="#e9c349" />
        {/* Star */}
        <circle cx="50" cy="16" r="3" fill="#ffe088" />
      </svg>
    );
  }

  return (
    <img
      src={emblemSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};
