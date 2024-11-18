import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ theme, setTheme }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="w-8 h-8 flex items-center justify-center"
  >
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={theme}
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 20, opacity: 0 }}
        transition={{ 
          duration: 0.3,
          ease: [0.23, 1, 0.32, 1]
        }}
        className="w-[18px] h-[18px] text-black/90 dark:text-white/90"
      >
        {theme === 'dark' ? (
          <Moon strokeWidth={1.5} size={18} />
        ) : (
          <Sun strokeWidth={1.5} size={18} />
        )}
      </motion.div>
    </AnimatePresence>
  </button>
);