import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor" />
    </span>
  );
};

export default Typewriter;
