import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const handleClick = () => {
    if (!rolling) {
      setRolling(true);
      setTimeout(() => {
        const newDiceValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newDiceValue);
        setRolling(false);
      }, 1000);
    }
  };

  return (
    <div className="dice">
      <div className={`dice ${rolling ? 'rolling' : ''}`} onClick={handleClick}>
        {rolling ? (
          <img
            src={require('../assets/images/dice-empty.png').default}
            alt="Rolling..."
          />
        ) : (
          <img
            src={require(`../assets/images/dice${diceValue}.png`).default}
            alt={`Dice ${diceValue}`}
          />
        )}
      </div>
    </div>
  );
};

export default Dice;
