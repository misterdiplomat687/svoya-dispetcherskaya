import React from 'react';

interface SectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'brand';
}

const Section: React.FC<SectionProps> = ({ 
  className = '', 
  id, 
  children, 
  background = 'white' 
}) => {
  const bgStyles = {
    white: "bg-white",
    gray: "bg-slate-50",
    brand: "bg-brand-900 text-white"
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section;