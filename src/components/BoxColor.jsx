import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  const hexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return (
    <div className="box-color" style={{ backgroundColor: bgColor }}>
      <p>RGB: {r}, {g}, {b}</p>
      <p>Hex: {hexColor}</p>
    </div>
  );
};

export default BoxColor;
