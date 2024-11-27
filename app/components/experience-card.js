import React from 'react';

const Card = ({ title, description, date, link }) => {
  return (
    <div className="bg-blue-725 text-white p-4 rounded-lg shadow-lg mb-4 max-w-md">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-gray-500 mt-2 text-sm">{date}</p>
      {link && (
        <a href={link} className="text-blue-600 mt-2 inline-block hover:underline">
          Learn more
        </a>
      )}
    </div>
  );
};

export default Card;
