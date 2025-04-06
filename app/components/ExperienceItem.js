import React from 'react';
import './ExperienceItem.css'; 

const ExperienceItem = ({ title, description, date, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="experience-item"
      onClick={handleClick}
    >
      <div className="timeline-dot"></div>
      <div className="vertical-line"></div>

      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 mt-1">{description}</p>
      <p className="text-gray-400 mt-1 text-sm">{date}</p>
    </div>
  );
};

export default ExperienceItem;