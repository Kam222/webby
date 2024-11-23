import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TypewriterText = ({ text, className, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef(null);
  const hasAnimated = useRef(false);
  const pulseCount = useRef(0);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    setShowCursor(true);
    
    if (hasAnimated.current) {
      setDisplayedText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= text.length) {
        const currentChar = text[currentIndex - 1];
        const delay = getCharacterDelay(currentChar, currentIndex, text);
        
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex += 1;
          if (currentIndex > text.length) {
            setIsComplete(true);
            hasAnimated.current = true;
            onComplete?.();
          } else {
            typeText();
          }
        }, delay);
      }
    };

    typeText();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, onComplete]);

  const getCharacterDelay = (char, index, text) => {
    if (!char) return 40;
    if ('.,:;!?'.includes(char)) return 100;
    if (char === char.toUpperCase() && char !== ' ') return 80;
    if (index === 0 || text[index - 1] === ' ') return 60;
    return 40;
  };

  return (
    <motion.h1 
      className={className}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <AnimatePresence>
        {!isComplete && showCursor && (
          <motion.span
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: [1, 0] }}
            onAnimationComplete={() => {
              pulseCount.current += 1;
              if (isComplete && pulseCount.current >= 3) {
                setShowCursor(false);
              }
            }}
            transition={{ 
              duration: 0.35,
              repeat: 2,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="inline-block ml-[1px] -mb-[1px] w-[2px] h-[1.1em] bg-current opacity-50"
          />
        )}
      </AnimatePresence>
    </motion.h1>
  );
};

export default TypewriterText; 