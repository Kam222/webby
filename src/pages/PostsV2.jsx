import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import { useEffect } from 'react';

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
    title: "the delicate art of letting go",
    date: "2024-03-21",
    readingTime: "17 min",
    maturity: "TREE",
    tags: ["transitions", "impermanence", "relationships", "personal"],
    abstract: "within every hello, the seeds of a goodbye - reflections on impermanence and the beauty of transient connections",
    slug: "letting-go"
  },
  {
    title: "iago wasn't evil",
    date: "2024-03-21",
    readingTime: "5 min",
    maturity: "SAPLING",
    tags: ["psychology", "literature", "shakespeare", "game-theory"],
    abstract: "notes on strategic malevolence in Shakespeare's Othello - exploring how Iago represents human social intelligence optimized purely for exploitation",
    slug: "iago-wasnt-evil"
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
];

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

const PostCard = ({ post }) => {
  const status = MetadataTypes.STATUS[post.maturity];
  return (
    <article className="pb-12 mb-12 border-b border-gray-100 dark:border-gray-800">
      <h2 className="font-mono text-base text-gray-900 dark:text-white mb-3">
        <Link to={`/posts/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {post.title}
        </Link>
      </h2>
      
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
        <time>{post.date}</time>
        <span>•</span>
        <span>{post.readingTime}</span>
        <span>•</span>
        <span className="font-mono">{status?.symbol}</span>
        <span className={status?.color}>
          {status?.label || post.maturity.toLowerCase()}
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
  useEffect(() => {
    document.title = 'posts | khalid';
  }, []);
  
  return (
    <div className="flex min-h-screen">
      {/* Simplified sidebar with only growth stage */}
      <nav className="w-48 fixed h-screen pt-24 pl-6">
        <div className="space-y-8 font-mono text-sm">
          {/* Only Growth Stage section */}
          <div>
            <h3 className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Growth Stage</h3>
            <GrowthStageLegend />
          </div>
        </div>
      </nav>

      {/* Main content - wider with more natural stretch */}
      <main className="ml-48 flex-1 max-w-5xl px-16 py-16">
        <h1 className="font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] text-[32px] font-semibold tracking-[-0.5px] text-gray-900 dark:text-white mb-6">
          Digital Garden
        </h1>
        
        <div className="mb-16 space-y-4">
          <p className="font-mono text-xs text-gray-600/70 dark:text-gray-300/70 tracking-[0.2px] leading-[1.7]">
            Welcome to my digital garden—a living collection of thoughts, essays, and explorations.
          </p>
          
          <p className="font-mono text-xs text-gray-600/70 dark:text-gray-300/70 tracking-[0.2px] leading-[1.7]">
            Like any garden, you'll find ideas in various stages of growth: some are tender seedlings just breaking through the soil, 
            others are well-tended saplings, and a few have grown into sturdy trees with deep roots.
          </p>
          
          <p className="font-mono text-xs text-gray-600/70 dark:text-gray-300/70 tracking-[0.2px] leading-[1.7]">
            Not every seed will flourish, but each one contributes to this evolving ecosystem of interconnected thoughts.
          </p>
        </div>

        <div className="space-y-12">
          {POSTS_DATA.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-[11px] text-gray-400 dark:text-gray-500 font-mono mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          created: 2024-03-15 • last modified: 2024-03-21
        </div>
      </main>
    </div>
  );
};

export default PostsV2;