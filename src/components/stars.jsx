import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Math.round(rating); 
  const emptyStars = 5 - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star-filled">&#9733;</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star-empty">&#9734;</span>
      ))}
    </div>
  );
};

export default StarRating;
