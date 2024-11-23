import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrolled / height) * 100);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-100/20 dark:bg-gray-800/20 z-50">
      <div 
        className="h-full bg-gray-400/40 dark:bg-gray-500/40 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

const BlogPreview = ({ formattedContent }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <ReadingProgress />
      <div className="max-w-[680px] mx-auto px-4">
        <article className="pt-4">
          {/* Preview content will be rendered here */}
          <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </article>
      </div>
    </div>
  );
};

const MarkdownFormatter = () => {
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [readTime, setReadTime] = useState('');
  const [category, setCategory] = useState('');
  const [maturityLevel, setMaturityLevel] = useState(2);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [showPreview, setShowPreview] = useState(false);

  const formatContent = () => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    return `
      <header>
        <div className="mb-3">
          <h1 className="font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] text-[44px] 
            font-semibold tracking-[-0.5px] leading-[1.1] 
            text-gray-900 dark:text-gray-100">
            ${title}
          </h1>
        </div>
        
        <p className="font-spectral text-[17px] leading-[1.6] 
          text-gray-500/80 dark:text-gray-400/80 italic font-light
          tracking-wide mb-4">
          ${subtitle}
        </p>

        <div className="flex items-center gap-4 px-4 py-2.5 bg-black/[0.02] dark:bg-white/[0.02] 
          rounded-md font-sohne-mono text-[12px] text-gray-500/60 dark:text-gray-400/60
          transition-all duration-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]">
          <span className="lowercase">${category}</span>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <span className="font-sohne-mono tracking-wider text-[10px] text-gray-400/40 dark:text-gray-500/40">
            ${'●'.repeat(maturityLevel)}${'○'.repeat(3-maturityLevel)}
          </span>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <span>${readTime} min read</span>
        </div>

        <div className="flex flex-col gap-0.5 mt-4">
          <time className="block font-sohne-mono text-[12px] text-gray-600 dark:text-gray-400">
            ${formattedDate}
          </time>
          <span className="block font-sohne-mono text-[11px] text-gray-500/60 dark:text-gray-400/60">
            Last updated
          </span>
        </div>
      </header>

      <div className="prose-container mt-8">
        ${input}
      </div>
    `;
  };

  const generateMarkdown = () => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    return `---
title: "${title}"
subtitle: "${subtitle}"
date: "${formattedDate}"
category: "${category.toLowerCase()}"
readTime: "${readTime}"
maturityLevel: ${maturityLevel}
---

${formatContent()}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <FadeInSection>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Blog Post Formatter
          </h2>
          
          <div className="space-y-4">
            {/* Form inputs */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subtitle
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full p-2 border rounded font-spectral dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Other form fields... */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border rounded font-sohne-mono dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Read Time (minutes)
                </label>
                <input
                  type="number"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full p-2 border rounded font-sohne-mono dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Content (Markdown)
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={10}
                className="w-full p-2 border rounded font-spectral text-sm dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
              >
                {showPreview ? 'Show Markdown' : 'Show Preview'}
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {showPreview ? 'Preview' : 'Formatted Markdown'}
          </h3>
          
          {showPreview ? (
            <BlogPreview formattedContent={formatContent()} />
          ) : (
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{generateMarkdown()}</code>
            </pre>
          )}
        </div>
      </FadeInSection>
    </div>
  );
};

export default MarkdownFormatter;