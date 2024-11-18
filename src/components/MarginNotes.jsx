import { motion, AnimatePresence } from 'framer-motion';
import { Info, Book, Quote } from 'lucide-react';

// Define margin notes data structure
const marginNotes = {
  waltz: {
    type: 'key insight',
    note: 'Musical interpretation in Waltz requires understanding of both explicit tempo and implicit rhythmic structures.',
    exploration: 'Investigating the relationship between physical momentum and musical phrasing.',
    thoughts: [
      'Pendular motion creates natural accent points',
      'Musical interpretation affects weight transfer timing',
      'Frame mechanics must adapt to tempo changes'
    ]
  },
  partnership: {
    type: 'development',
    note: 'Partnership longevity enables deeper technical exploration and refinement.',
    thoughts: [
      'Shared movement vocabulary development',
      'Synchronized timing adaptations',
      'Mutual understanding of balance points'
    ]
  },
  apprenticeship: {
    type: 'methodology',
    note: "Johnson's teaching methodology emphasizes systematic deconstruction of movement principles.",
    exploration: 'Applying these pedagogical insights to other domains.',
    thoughts: [
      'Breaking complex movements into atomic units',
      'Building progressive complexity through layering',
      'Understanding causality chains in technique'
    ]
  }
  // Add more notes as needed
};

export const MarginNotes = ({ activeNote, mouseY }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {activeNote && marginNotes[activeNote] && (
          <motion.div
            key={activeNote}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Key Insight Section */}
            <div className="relative pl-3">
              <div className="absolute left-0 top-0 h-full w-[1px] bg-blue-100 dark:bg-blue-900/30" />
              <div className="font-['Berkeley_Mono'] text-[10px] text-gray-400 dark:text-gray-500">
                {marginNotes[activeNote].type}
              </div>
              <div className="mt-1 font-serif text-[12px] leading-normal text-gray-800 dark:text-gray-200">
                {marginNotes[activeNote].note}
              </div>
            </div>

            {/* Active Exploration Section */}
            {marginNotes[activeNote].exploration && (
              <div className="relative pl-3">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-amber-100 dark:bg-amber-900/30" />
                <div className="font-['Berkeley_Mono'] text-[10px] text-amber-600/70 dark:text-amber-400/70">
                  exploring
                </div>
                <div className="mt-1 font-serif text-[11px] leading-relaxed text-gray-600 dark:text-gray-400">
                  {marginNotes[activeNote].exploration}
                </div>
              </div>
            )}

            {/* Analysis Points */}
            <div className="space-y-2">
              {marginNotes[activeNote].thoughts.map((thought, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -2 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  className="relative pl-4"
                >
                  <span className="absolute left-0 top-[5px] h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="font-serif text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    {thought}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 