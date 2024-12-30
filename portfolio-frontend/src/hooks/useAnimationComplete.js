// src/hooks/useAnimationComplete.js
import { useState, useEffect } from 'react';

const useAnimationComplete = (duration) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return animationComplete;
};

export default useAnimationComplete;
