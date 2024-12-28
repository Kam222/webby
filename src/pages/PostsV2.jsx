import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen } from 'lucide-react';

// Constants
const MetadataTypes = {
  STATUS: {
    SEED: { label: "seed", symbol: "○○○", color: "text-red-600 dark:text-red-400" },
    SAPLING: { label: "sapling", symbol: "●○○", color: "text-yellow-600 dark:text-yellow-400" },
    TREE: { label: "tree", symbol: "●●○", color: "text-green-600 dark:text-green-400" },
    EVERGREEN: { label: "evergreen", symbol: "●●●", color: "text-emerald-600 dark:text-emerald-400" }
  }
};

const POSTS_DATA = [
  {
    title: "where connection went",
    date: "2024-03-21",
    readingTime: "9 min",
    maturity: "SAPLING",
    tags: ["Social Media", "Information Theory", "Psychology", "Game Theory", "Digital Architecture", "Social Technology"],
    abstract: "An exploration of how digital spaces have transformed human connection and what we lost along the way",
    slug: "where-connection-went"
  },
  {
    title: "the delicate art of letting go",
    date: "2024-03-21",
    readingTime: "17 min",
    maturity: "TREE",
    tags: ["transitions", "impermanence", "relationships", "personal"],
    abstract: "within every hello, the seeds of a goodbye - reflections on impermanence and the beauty of transient connections",
    slug: "letting-go"
  },
  {
    title: "manifesto draft/notes",
    date: "2024-03-21",
    readingTime: "12 min",
    maturity: "SEED",
    tags: ["AI", "politics", "philosophy", "sociology", "governance", "technology", "policy"],
    abstract: "initial thoughts on the seamless integration of AI systems into governance structures",
    slug: "manifesto-draft"
  },
  {
    title: "diary: ideas and concepts i think of on a semi-daily basis",
    date: "2024-09-10",
    readingTime: "5 min",
    maturity: "SEED",
    tags: ["reflections", "ideas", "concepts", "personal growth", "journaling", "creativity"],
    abstract: "A collection of thoughts and ideas that emerge on a semi-daily basis, exploring various concepts and reflections.",
    slug: "diary-ideas-concepts"
  },
];

// Add new constant for design system
const GOLDEN_RATIO = 1.618;
const SPACING = {
  base: `${GOLDEN_RATIO}rem`,
  double: `${GOLDEN_RATIO * 2}rem`,
  half: `${GOLDEN_RATIO / 2}rem`,
};

const MetadataLegend = () => {
  return (
    <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-2">
        <Calendar className="w-3.5 h-3.5" />
        <span>Creation date</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-3.5 h-3.5" />
        <span>Reading time</span>
      </div>
      <div className="flex items-center gap-2">
        <BookOpen className="w-3.5 h-3.5" />
        <span>Word count</span>
      </div>
    </div>
  );
};

const GrowthStageLegend = () => {
  return (
    <div className="space-y-2">
      {Object.entries(MetadataTypes.STATUS).map(([key, value]) => (
        <div key={key} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span className="font-mono w-8">{value.symbol}</span>
          <span>{value.label}</span>
        </div>
      ))}
    </div>
  );
};

// Single PostCard component definition
const PostCard = ({ post }) => {
  return (
    <article className="relative p-8 mb-12 rounded-lg
      bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm
      border border-gray-100/20 dark:border-gray-800/20
      transform-gpu will-change-transform
      transition-all duration-300
      hover:-translate-y-1 hover:bg-white/40 dark:hover:bg-gray-900/40"
    >
      <h2 className="font-mono text-lg text-gray-900 dark:text-white mb-4
        tracking-tight leading-relaxed">
        <Link to={`/posts/${post.slug}`} 
          className="hover:text-blue-600 dark:hover:text-blue-400 
          transition-colors duration-300">
          {post.title}
        </Link>
      </h2>
      
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
        <time>{post.date}</time>
        <span>•</span>
        <span>{post.readingTime}</span>
        <span>•</span>
        <span className="font-mono">{MetadataTypes.STATUS[post.maturity]?.symbol}</span>
        <span className={MetadataTypes.STATUS[post.maturity]?.color}>
          {MetadataTypes.STATUS[post.maturity]?.label || post.maturity.toLowerCase()}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 font-mono leading-relaxed max-w-3xl mb-4">
        {post.abstract}
      </p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span 
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded-full 
              bg-gray-100 dark:bg-gray-800/50
              text-gray-600/70 dark:text-gray-400/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

const PostsV2 = () => {
  return (
    <div className="flex min-h-screen">
      <main className="ml-64 flex-1 max-w-6xl px-12 lg:pl-32 py-24">
        <h1 className="font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] 
          text-4xl font-semibold tracking-tight 
          text-[#262626] dark:text-[#E5E5E5] 
          opacity-80 hover:opacity-100
          transition-opacity duration-300
          mb-12 leading-tight">
          Digital Garden
        </h1>
        
        <div className="mb-24 space-y-6 max-w-2xl">
          <p className="font-mono text-sm text-gray-600/90 dark:text-gray-300/90 
            tracking-wide leading-relaxed">
            Welcome to my digital garden—a living collection of thoughts, essays, and explorations.
          </p>
        </div>

        <div className="grid gap-12">
          {POSTS_DATA.map((post) => (
            <PostCard 
              key={post.slug} 
              post={post}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsV2;