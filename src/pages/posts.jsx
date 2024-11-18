import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen, ArrowUpRight, Filter, GitBranch } from 'lucide-react';

// Enhanced post data
const POSTS_DATA = [
  {
    title: "Iago: A Study in Strategic Malevolence",
    date: "2024-03-15",
    lastModified: "2024-03-20",
    status: "published",
    type: "Essay",
    categories: ["Literature", "Psychology"],
    confidence: "high",
    maturity: "DEVELOPING",
    wordCount: "2,400",
    readingTime: "12",
    abstract: "An analysis of Iago as an evolutionary strategy for social predation, examining the cognitive architecture and game theoretic implications of perfect strategic deception.",
    slug: "iago-strategic-malevolence"
  },
  {
    title: "On the Nature of Digital Gardens",
    date: "2024-03-15",
    type: "Essay",
    maturity: "SEED",
    categories: ["Philosophy", "Digital"],
    abstract: "Exploring the philosophy and practice of digital gardens as spaces for growing ideas...",
    slug: "digital-gardens-nature"
  },
  // Add more posts as needed
];

// Add these constants right after the imports
const MetadataTypes = {
  MATURITY: {
    SEED: { label: "Seed", symbol: "○○○" },
    DEVELOPING: { label: "Developing", symbol: "●○○" },
    STABLE: { label: "Stable", symbol: "●●○" },
    MATURE: { label: "Mature", symbol: "●●●" }
  }
};

const types = [
  { name: "Essay", count: 2 },
  { name: "Research", count: 1 },
  { name: "Note", count: 3 }
];

const categories = [
  { name: "Literature", count: 1 },
  { name: "Psychology", count: 1 },
  { name: "Philosophy", count: 1 },
  { name: "Digital", count: 1 }
];

const Posts = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  
  return (
    <div className="flex min-h-screen bg-transparent pt-[100px]">
      <nav className="fixed top-[100px] left-0 w-48 h-[calc(100vh-100px)] border-r border-gray-100 dark:border-gray-800/50 py-8 overflow-y-auto z-10">
        <div className="px-4 space-y-6">
          <div className="space-y-2">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">
              Maturity
            </div>
            {Object.entries(MetadataTypes.MATURITY).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2 text-xs text-gray-500">
                <span className="font-mono">{value.symbol}</span>
                <span>{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1 ml-48">
        <div className="max-w-screen-xl mx-auto px-16">
          <div className="grid grid-cols-[2fr_1fr] gap-16">
            <div>
              <div className="flex items-start justify-between mb-12">
                <div>
                  <h1 className="font-serif text-3xl text-gray-900 dark:text-white mb-3">
                    Digital Garden
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl">
                    A growing collection of essays and research notes. Some are seeds, 
                    others are flourishing trees, all part of an interconnected ecosystem 
                    of ideas.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {POSTS_DATA.map(post => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

            <div className="sticky top-[100px]">
              <div className="space-y-8">
                <FilterSection
                  title="Type"
                  items={types}
                  selected={selectedFilters.type}
                  onChange={(type) => setSelectedFilters(prev => ({ ...prev, type }))}
                />
                <FilterSection
                  title="Category"
                  items={categories}
                  selected={selectedFilters.category}
                  onChange={(category) => setSelectedFilters(prev => ({ ...prev, category }))}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const FilterSection = ({ title, items, selected, onChange }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
      <div className="space-y-2">
        {items.map(item => (
          <button
            key={item.name}
            onClick={() => onChange(item.name)}
            className={`
              flex items-center justify-between w-full px-3 py-2 text-sm rounded-md
              ${selected === item.name 
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'}
            `}
          >
            <span>{item.name}</span>
            <span className="text-xs text-gray-400">({item.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.article 
      className="group relative p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <time>{post.date}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{post.readingTime} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} />
            <span>{post.wordCount} words</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-serif text-xl text-gray-900 dark:text-white mb-3">
          <Link to={`/posts/${post.slug}`} className="flex items-center gap-2">
            {post.title}
            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {post.abstract}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map(category => (
          <span 
            key={category}
            className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600"
          >
            {category}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default Posts;