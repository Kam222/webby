import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative group p-2 rounded-md 
        hover:bg-gray-100 dark:hover:bg-gray-800/40
        transition-all duration-300 ease-out"
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-[18px] h-[18px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {theme === 'light' ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
              transition={{ 
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="relative flex items-center justify-center"
            >
              <Sun className="w-[18px] h-[18px] text-gray-600/90" strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -30 }}
              transition={{ 
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="relative flex items-center justify-center"
            >
              <Moon className="w-[18px] h-[18px] text-blue-400/90 dark:text-blue-300/90" strokeWidth={2} />
              <motion.div
                className="absolute inset-0 bg-blue-400/20 dark:bg-blue-300/20 rounded-full blur-md"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};