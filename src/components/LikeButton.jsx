import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
  };

  return (
    <div className="like-button">
      <button
        onClick={handleLikeClick}
        style={buttonStyle}
        className="big-button"
      >
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;
