import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden
      bg-gradient-to-b from-white via-gray-50/30 to-gray-100/20
      dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950
      transition-all duration-700">
      <ThemeToggle />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};
