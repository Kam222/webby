import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkIcon } from 'lucide-react';

const MethodNote = ({ title, children }) => (
  <div className="text-sm text-gray-600 dark:text-gray-300 border-l-2 border-gray-200 pl-4 my-2">
    <div className="font-mono text-xs text-gray-400 mb-1">[Note on {title}]</div>
    {children}
  </div>
);

export const ResearchThread = ({ title, status, confidence, years, description, keyProjects, relatedWork }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <div className="mb-4">
        <h3 className="text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="flex gap-4 text-sm text-gray-500 mb-4">
          <span>Status: {status}</span>
          <span>Confidence: {confidence}</span>
          <span>{years}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        
        {relatedWork && (
          <MethodNote title="intellectual lineage">
            This work builds upon {relatedWork}
          </MethodNote>
        )}
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-6"
          >
            {keyProjects.map((project, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <h4 className="text-lg text-gray-900 dark:text-white mb-2">
                  {project.title}
                  {project.link && (
                    <a href={project.link} className="ml-2 text-blue-600 text-sm hover:underline">
                      <LinkIcon size={14} className="inline" />
                    </a>
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                
                {project.methodology && (
                  <MethodNote title="methodology">
                    {project.methodology}
                  </MethodNote>
                )}
                
                {project.limitations && (
                  <MethodNote title="limitations">
                    {project.limitations}
                  </MethodNote>
                )}
                
                <div className="flex gap-4 text-sm text-gray-500 mt-2">
                  <span>Confidence: {project.confidence}</span>
                  <span>Impact: {project.impact}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        {isExpanded ? "Show less" : "Show details"}
      </button>
    </div>
  );
}; 