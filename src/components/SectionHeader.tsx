import React from "react";


interface SectionHeaderProps {

  title: string;
  highlightText: string;
  description?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({

  title,
  highlightText,
  description,
  className = "",
  theme = 'dark',
}) => {
  return (
    <div className={`text-center mb-8 animate-fadeInUp ${className}`}>
  

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
        <span className={theme === 'dark' ? 'text-white' : 'text-slate-700'}>{title} </span>
        <span className="relative inline-block">

          <span className={`relative ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>
            {highlightText}
          </span>
        </span>
      </h1>

      {description && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;