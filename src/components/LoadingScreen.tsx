import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust timing to match your 3-second loading time
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-violet-900 via-indigo-900 to-violet-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Rocket
            size={64}
            className="text-violet-400 animate-bounce"
          />
        </div>
        <div className="w-48 h-2 bg-violet-900 rounded-full overflow-hidden mb-2">
          <div
            className="w-full h-full bg-violet-400 transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-violet-200 text-sm">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;