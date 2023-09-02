import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const backgroundColor = `rgb(${color === 'r' ? value : 0}, ${color === 'g' ? value : 0}, ${color === 'b' ? value : 0})`;

  return (
    <div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(color, e.target.value)}
        min="0"
        max="255"
      />
      <div className="color-box" style={{ backgroundColor }}></div>
    </div>
  );
};

export default SingleColorPicker;
