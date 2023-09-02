import React from 'react';

const NumbersTable = ({ limit }) => {
  const generateNumberList = (limit) => {
    const numberList = [];
    for (let i = 1; i <= limit; i++) {
      const isEven = i % 2 === 0;
      const numberStyle = isEven
        ? {
            backgroundColor: 'red',
            color: 'white',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            
          }
        : {
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
          };

      numberList.push(
        <li key={i} style={numberStyle}>
          {i}
        </li>
      );
    }
    return numberList;
  };

  return (
    <div className="numbers-table">
      <ul className="numbers-list">{generateNumberList(limit)}</ul>
    </div>
  );
};

export default NumbersTable;
