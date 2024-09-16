import React from 'react';
import './ProjectCard.css';
import 'styles/globals.css'

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="group bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 relative custom-cursor">
      {/* Image - Hidden on hover */}
      <img src={image} alt={title} className="w-full h-32 object-cover group-hover:opacity-0 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
        {/* Initial hidden expanded content, visible on hover */}
        <p className="text-gray-700 mt-2 text-sm truncate">{description}</p>
        <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white">
          <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
          <p className="text-gray-700 mt-2 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
