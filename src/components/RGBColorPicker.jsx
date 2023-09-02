import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, newValue) => {
    // Asegurarse de que el valor esté dentro del rango válido (0-255)
    newValue = Math.min(255, Math.max(0, newValue));

    // Actualizar el valor del color correspondiente
    if (color === 'r') {
      setRValue(newValue);
    } else if (color === 'g') {
      setGValue(newValue);
    } else if (color === 'b') {
      setBValue(newValue);
    }
  };

  const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={handleColorChange}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={handleColorChange}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={handleColorChange}
      />
      <p>RGB Color: {rgbColor}</p>
      <div
        className="color-box"
        style={{ backgroundColor: rgbColor }}
      ></div>
    </div>
  );
};

export default RGBColorPicker;
