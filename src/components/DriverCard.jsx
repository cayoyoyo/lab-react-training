import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <div className="driver-image">
        <img src={img} alt={name} />
      </div>
      <div className="driver-details">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
