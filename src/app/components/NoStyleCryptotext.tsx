"use client";
import React, { useState, useRef } from 'react';

interface CryptoTextProps {
  text: string;
  className?: string;
}

const CryptoText: React.FC<CryptoTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const handleMouseEnter = () => {
    let iterations = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) return char;
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join('')
      );

      iterations += 1 / 3;

      if (iterations >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 40);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span
      className={``}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
};

export default CryptoText;
