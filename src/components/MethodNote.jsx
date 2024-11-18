import React from 'react';

export const MethodNote = ({ title, children }) => (
  <div className="text-sm text-gray-600 dark:text-gray-300 border-l-2 border-gray-200 pl-4 my-2">
    <div className="font-mono text-xs text-gray-400 mb-1">[Note on {title}]</div>
    {children}
  </div>
); 