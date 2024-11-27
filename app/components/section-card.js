import React from 'react';

const SectionCard = ({ title, children }) => {
  return (
    <div className="bg-white text-blue-725 p-6 rounded-lg shadow-lg mb-8 w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children} 
      </div>
    </div>
  );
};

export default SectionCard;
