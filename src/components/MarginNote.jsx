import { motion, AnimatePresence } from 'framer-motion';

export const MarginNote = ({ isVisible, content }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.aside
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed left-8 w-72"
        style={{ 
          top: 'var(--mouse-y)',
          transform: 'translateY(-50%)'
        }}
      >
        <div className="relative pr-4">
          {/* Elegant connector */}
          <motion.div 
            className="absolute left-0 top-[12px] w-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-[1px] bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" />
          </motion.div>

          <div className="space-y-4">
            {/* Core Definition */}
            <div>
              <div className="font-['Berkeley_Mono'] text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                definition
              </div>
              <div className="mt-1 font-serif text-[12px] leading-relaxed text-gray-700 dark:text-gray-300">
                {content.definition}
              </div>
            </div>

            {/* Key Insight - Highlighted */}
            <div className="relative pl-3">
              <div className="absolute left-0 top-0 h-full w-[1px] bg-blue-100 dark:bg-blue-900/30" />
              <div className="font-['Berkeley_Mono'] text-[10px] text-gray-400 dark:text-gray-500">
                key insight
              </div>
              <div className="mt-1 font-serif text-[12px] leading-normal text-gray-800 dark:text-gray-200">
                {content.note}
              </div>
            </div>

            {/* Active Exploration Section */}
            {content.exploration && (
              <div className="relative pl-3">
                <div className="absolute left-0 top-0 h-full w-[1px] bg-amber-100 dark:bg-amber-900/30" />
                <div className="font-['Berkeley_Mono'] text-[10px] text-amber-600/70 dark:text-amber-400/70">
                  exploring
                </div>
                <div className="mt-1 font-serif text-[11px] leading-relaxed text-gray-600 dark:text-gray-400">
                  {content.exploration}
                </div>
              </div>
            )}

            {/* Analysis Points */}
            <div className="space-y-2">
              {content.thoughts.map((thought, i) => (
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

            {/* Open Questions */}
            {content.questions && (
              <div className="relative pl-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="font-['Berkeley_Mono'] text-[10px] text-blue-500/70 dark:text-blue-400/70">
                  open questions
                </div>
                <div className="mt-1 space-y-1">
                  {content.questions.map((question, i) => (
                    <div 
                      key={i}
                      className="font-serif text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                      {question}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata Footer */}
            <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-800">
              <div className="font-['Berkeley_Mono'] text-[9px] text-gray-400 dark:text-gray-600">
                margin note • {content.status || 'exploring'} • updated nov 2024
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    )}
  </AnimatePresence>
);