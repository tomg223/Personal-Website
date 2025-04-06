import React from 'react';

const ResumeButton = ({ resumeUrl }) => {
  return (
    <div className="mt-4 mb-6">
      <a 
        href={resumeUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
      >
        <svg 
          xmlns="tailwindcss-and-nextjs-portfolio-starter 3/public/Thomas_Gansa_ResumeWeb.pdf" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
        View/Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;