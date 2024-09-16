import React from 'react';
import './ExperienceItem.css'; // Make sure the path is correct

const ExperienceItem = ({ title, description, date, link }) => {
  return (
    <div className="experience-item custom-cursor">
      {/* Timeline Dot */}
      <div className="timeline-dot"></div>
      {/* Vertical Line */}
      <div className="vertical-line"></div>

      {/* Content */}
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-300 mt-1">{description}</p>
      <p className="text-gray-400 mt-1 text-sm">{date}</p>
    </div>
  );
};

export default ExperienceItem;
