import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen, ArrowUpRight } from 'lucide-react';

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
  }
];

const PostsNew = () => {
  return (
    <div className="flex">
      {/* Left margin - minimal */}
      <div className="w-32 fixed h-screen border-r border-gray-100 dark:border-gray-800">
        <div className="p-4">
          <div className="text-xs text-gray-400">Maturity</div>
          <div className="mt-2 space-y-1">
            <div className="text-xs text-gray-500">○○○ Seed</div>
            <div className="text-xs text-gray-500">●○○ Developing</div>
            <div className="text-xs text-gray-500">●●○ Stable</div>
            <div className="text-xs text-gray-500">●●● Mature</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 ml-32">
        <div className="max-w-6xl mx-auto p-8">
          <div className="grid grid-cols-[2fr_1fr] gap-16">
            {/* Posts column */}
            <div>
              <div className="space-y-12">
                {POSTS_DATA.map(post => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="sticky top-8">
              <div className="mb-12">
                <h1 className="font-serif text-2xl text-gray-900 dark:text-white mb-3">
                  Digital Garden
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  A growing collection of essays and research notes. Some are seeds, 
                  others are flourishing trees, all part of an interconnected ecosystem 
                  of ideas.
                </p>
              </div>

              <div className="space-y-6">
                <FilterSection title="Type" items={["Essay", "Research", "Note"]} />
                <FilterSection title="Category" items={["Literature", "Psychology", "Philosophy", "Digital"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCard = ({ post }) => {
  return (
    <motion.article 
      className="group p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
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

      <h2 className="font-serif text-xl text-gray-900 dark:text-white mb-3">
        <Link to={`/posts/${post.slug}`} className="flex items-center gap-2">
          {post.title}
          <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100" />
        </Link>
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {post.abstract}
      </p>

      <div className="flex flex-wrap gap-2">
        {post.categories.map(category => (
          <span 
            key={category}
            className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
          >
            {category}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const FilterSection = ({ title, items }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
      <div className="space-y-1">
        {items.map(item => (
          <button
            key={item}
            className="w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostsNew; 