import React from 'react';

const Rating = ({ children }) => {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  const filledArray = Array(filledStars).fill('★');
  const emptyArray = Array(emptyStars).fill('☆');

  return (
    <div className="rating">
      {filledArray.concat(emptyArray).map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
