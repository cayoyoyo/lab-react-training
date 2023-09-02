import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const uniqueCountries = [
    ...new Set(profiles.map((profile) => profile.country)),
  ];

  return (
    <div className="facebook">
      <div className="country-buttons">
        {uniqueCountries.map((country, index) => (
          <button
            key={index}
            onClick={() => handleCountryClick(country)}
            className={`button ${selectedCountry === country ? 'active' : ''}`}
          >
            {country}
          </button>
        ))}
      </div><br></br>
      {profiles.map((profile, index) => (
        <div
          className={`profile-card ${
            selectedCountry === profile.country ? 'country-highlighted' : ''
          }`}
          key={index}
        >
          <div className="profile-image-container">
            <img
              src={profile.img}
              alt={`Profile ${index}`}
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <p>
              <strong>First Name:</strong> {profile.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {profile.lastName}
            </p>
            <p>
              <strong>Country:</strong> {profile.country}
            </p>
            <p>
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
