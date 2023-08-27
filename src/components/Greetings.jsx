import React from 'react';

const Greetings = ({ lang, children }) => {
  const greetingsMap = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="greetings">
      <p>{greetingsMap[lang]} {children}</p>
    </div>
  );
};

export default Greetings;
