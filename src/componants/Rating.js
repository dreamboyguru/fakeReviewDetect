import React from 'react';

const Rating = ({ rating, maxRating }) => {
    const percentage = (rating / maxRating) * 100;
    const width = `${percentage}%`;

    return (
        <div className="relative w-full h-4 rounded border-2 border-red-800" aria-label={`Rated ${rating} out of ${maxRating}`} role="img">
            <span className="absolute top-0 left-0 h-full bg-yellow-400 rounded" style={{ width }}></span>
        </div>
    );
};

export default Rating;
