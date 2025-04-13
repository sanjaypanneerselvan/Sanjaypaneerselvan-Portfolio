import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top when rocket is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Circle calculations
  const radius = 24; // Slightly larger to perfectly frame the rocket
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed bottom-8 right-8 w-16 h-16 z-50">
      {/* Circular Progress - perfectly aligned with rocket */}
      <svg 
        className="w-full h-full absolute top-0 left-0" 
        viewBox="0 0 60 60" // Larger viewBox to accommodate rocket
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Background track */}
        <circle 
          className="text-gray-700/50" 
          strokeWidth="4" 
          stroke="currentColor" 
          fill="transparent" 
          r={radius} 
          cx="30" 
          cy="30" 
        />
        {/* Progress indicator */}
        <circle 
          className="text-violet-400" 
          strokeWidth="4" 
          strokeDasharray={circumference} 
          strokeDashoffset={offset} 
          strokeLinecap="round" 
          stroke="currentColor" 
          fill="transparent" 
          r={radius} 
          cx="30" 
          cy="30" 
        />
      </svg>

      {/* Rocket Button - perfectly centered with click handler */}
      <button 
        onClick={scrollToTop}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-violet-400"
        aria-label="Scroll to top"
      >
        <Rocket size={24} className="text-white" />
      </button>
    </div>
  );
};

export default ScrollProgress;