import * as React from "react"

const ProgressBar = ({ value, max, className = "" }) => (
  <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
    <div 
      className={`h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-300 ${className}`}
      style={{ width: `${(value / max) * 100}%` }}
    />
  </div>
);

export { ProgressBar } 