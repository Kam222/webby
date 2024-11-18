import React from 'react';
import { Calendar } from 'lucide-react';

const ManifestoPost = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-mono leading-relaxed">
      {/* Metadata header */}
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-16">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <time>2024-03-21</time>
        </div>
        <span>•</span>
        <span className="font-mono">○○○</span>
        <span className="text-red-600 dark:text-red-400">seed</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl text-gray-900 dark:text-white mb-8">
        Digital Garden: A Manifesto
      </h1>

      {/* Content */}
      <div className="space-y-8 text-gray-600 dark:text-gray-300">
        <p>
          This is a digital garden—a space for growing ideas. Unlike traditional blogs 
          with their temporal streams of posts, this is a space organized by the natural 
          evolution of thoughts and research.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl text-gray-900 dark:text-white mt-12 mb-4">Growth Stages</h2>
          <p>
            Ideas here grow through distinct stages, marked by their maturity:
          </p>
          <ul className="space-y-4 list-none pl-0">
            <li>
              <span className="font-mono text-red-600 dark:text-red-400">○○○ seed</span>
              <span className="ml-3">Raw thoughts, questions, and initial explorations</span>
            </li>
            <li>
              <span className="font-mono text-yellow-600 dark:text-yellow-400">●○○ sapling</span>
              <span className="ml-3">Developing ideas with some structure and evidence</span>
            </li>
            <li>
              <span className="font-mono text-green-600 dark:text-green-400">●●○ tree</span>
              <span className="ml-3">Well-developed thoughts with substantial backing</span>
            </li>
            <li>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">●●● evergreen</span>
              <span className="ml-3">Foundational pieces that have stood the test of time</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-gray-900 dark:text-white mt-12 mb-4">Philosophy</h2>
          <p>
            This garden embraces imperfection and continuous growth. Notes evolve over time, 
            accumulating new connections and insights. Some thoughts may start as seeds and 
            never fully mature—that's part of the process.
          </p>
          <p>
            The goal is not to present polished, final thoughts, but to document the journey 
            of learning and discovery. Links between notes form naturally as ideas connect 
            and influence each other.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-gray-900 dark:text-white mt-12 mb-4">Navigation</h2>
          <p>
            Feel free to explore in any direction. Follow your curiosity through the 
            interconnected paths of notes. Each piece shows its growth stage, helping 
            you gauge its maturity and development.
          </p>
        </section>
      </div>

      {/* Creation date footer */}
      <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
        created: 2024-03-21 • last modified: 2024-03-21
      </div>
    </div>
  );
};

export default ManifestoPost; 