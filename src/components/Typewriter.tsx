import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  loop?: boolean;
  delay?: number;
  typingSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  loop = false, 
  delay = 2000,
  typingSpeed = 50 // New prop for controlling typing speed
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const texts = Array.isArray(text) ? text : [text];
    const currentText = texts[currentTextIndex];

    if (currentIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (loop && Array.isArray(text)) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, text, loop, delay, typingSpeed]);

  return (
    <h1 className="text-5xl font-bold">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default Typewriter;