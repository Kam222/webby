import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-2xl mx-auto px-8 py-24">
        <nav className="text-left mb-16 font-mono text-sm tracking-[0.3px] pl-8 pt-24">
          <Link to="/" className="text-gray-900 dark:text-gray-200 mr-8 transition-colors duration-300">
            home
          </Link>
          <Link to="/cv" className="text-gray-500 dark:text-gray-400 mr-8 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
            cv
          </Link>
          <Link to="/posts" className="text-gray-500 dark:text-gray-400 mr-8 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
            posts
          </Link>
          <Link to="/books" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
            books
          </Link>
        </nav>

        {/* Rest of your home page content */}
      </div>
    </div>
  );
}

export default Home; 