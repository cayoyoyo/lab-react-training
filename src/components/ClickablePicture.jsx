import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="clickable-picture">
      <img
        src={isClicked ? imgClicked : img}
        alt="Click Me"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ClickablePicture;