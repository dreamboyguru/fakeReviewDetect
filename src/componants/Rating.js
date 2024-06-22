// src/Rating.js
import React from 'react';

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <svg key={index} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.435L24 9.748l-6 5.847 1.42 8.268L12 18.897l-7.42 3.966L6 15.595.001 9.748l8.332-1.726L12 .587z"/>
        </svg>
      ))}
      {halfStar && (
        <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.435L24 9.748l-6 5.847 1.42 8.268L12 18.897l-7.42 3.966L6 15.595.001 9.748l8.332-1.726L12 .587z" fillOpacity="0.5"/>
        </svg>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <svg key={index} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.435L24 9.748l-6 5.847 1.42 8.268L12 18.897l-7.42 3.966L6 15.595.001 9.748l8.332-1.726L12 .587z"/>
        </svg>
      ))}
    </div>
  );
};

export default Rating;
