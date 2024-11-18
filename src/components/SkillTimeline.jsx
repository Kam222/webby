import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const SkillTimeline = ({ category, entries }) => (
  <div className="space-y-4">
    <h3 className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
      <Clock size={16} />
      {category}
    </h3>
    <div className="space-y-3">
      {entries.map((entry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4 items-start"
        >
          <div className="font-mono text-sm text-gray-500">{entry.year}</div>
          <div className="flex-1">
            <div className="text-gray-700 dark:text-gray-300">{entry.event}</div>
            <div className="text-sm text-gray-500">
              Confidence: {(entry.confidence * 100).toFixed(0)}%
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);