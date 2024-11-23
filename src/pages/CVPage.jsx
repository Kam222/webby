import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Mail, Phone, ChevronRight, MapPin } from 'lucide-react';

const Portfolio = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const headerOpacity = useTransform(scrollYProgress, 
    [0, 0.1], 
    [1, 0.6]
  );

  useEffect(() => {
    document.title = 'cv | khalid';
  }, []);
  
  return (
    <div className="relative min-h-screen bg-[#FAFAF9] dark:bg-[#0A0F1E]">
      {/* Document Meta - Far Left */}
      <div className="fixed left-0 top-0 w-48 h-full border-r border-gray-100/10 dark:border-gray-800/50">
        <div className="pt-32 p-8 space-y-6 font-söhne-mono text-[10px] tracking-widest uppercase">
          <div className="space-y-2">
            <div className="text-gray-400/60 dark:text-gray-500/60">Document</div>
            <div className="text-gray-600 dark:text-gray-400">Curriculum Vitae</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-gray-400/60 dark:text-gray-500/60">Version</div>
            <div className="text-gray-600 dark:text-gray-400">3.2.1</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-gray-400/60 dark:text-gray-500/60">Last Updated</div>
            <div className="text-gray-600 dark:text-gray-400">2024-03-15</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-gray-400/60 dark:text-gray-500/60">Status</div>
            <div className="text-gray-600 dark:text-gray-400">Live Document</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-48 mr-16 max-w-[1400px] px-16 py-16">
        {/* Professional Identity Block */}
        <header className="mb-24">
          {/* Name */}
          <h1 className="font-gt-alpina text-4xl tracking-[-0.02em] text-gray-900 dark:text-gray-100 mb-6">
            Khalid Ali
          </h1>

          {/* Essential Information - Two Column Grid */}
          <div className="max-w-xl grid grid-cols-[1fr_auto] gap-x-12 items-baseline">
            {/* Contact Info */}
            <div className="space-y-1.5 font-söhne-mono text-xs">
              <a href="mailto:maham089@umn.edu" 
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 
                  dark:hover:text-gray-200 flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2.5 opacity-40" />
                maham089@umn.edu
              </a>
              <a href="tel:7633278945" 
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 
                  dark:hover:text-gray-200 flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2.5 opacity-40" />
                763-327-8945
              </a>
            </div>

            {/* Citizenship */}
            <div className="font-söhne-mono text-xs text-right">
              <div className="text-gray-400/60 dark:text-gray-500/60 uppercase tracking-wider mb-1">
                Citizenship
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                USA • Australia • Kenya
              </div>
            </div>
          </div>
        </header>

        {/* Experience Section - Three Column Layout */}
        <section className="mb-24">
          <div className="flex items-baseline mb-12">
            <h2 className="font-söhne-mono text-sm tracking-widest uppercase text-gray-900 dark:text-gray-100">
              Experience
            </h2>
            <div className="ml-8 h-px flex-1 bg-gray-200/50 dark:bg-gray-800/50" />
          </div>

          {/* Experience Items */}
          <div className="space-y-16">
            {/* First Experience */}
            <div className="group">
              <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
                {/* Timeline Column */}
                <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Jun – Oct 2024</span>
                  </div>
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Nairobi, KE</span>
                  </div>
                </div>
                
                {/* Role Column */}
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    Office of the Special Presidential Envoy for Climate Change
                  </h3>
                  <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                    Researcher
                  </div>
                </div>

                {/* Details Column with Sidenotes */}
                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <div className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Developed statistical models of climate finance flows (n = 48 African nations, 2010–2020); uncovered severe underinvestment (1.7% of total global renewable energy investments)
                    </div>
                    <div className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Architected PostgreSQL database tracking green industrialization initiatives (n = 50 case studies); achieved 97% data completeness
                    </div>
                    <div className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Impact: Findings directly incorporated into Kenya's COP29 negotiation strategy [causal attribution uncertain]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MIT Experience */}
            <div className="group">
              <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
                {/* Timeline Column */}
                <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Jun – Aug 2023</span>
                  </div>
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Cambridge, MA</span>
                  </div>
                </div>
                
                {/* Role Column */}
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    MIT Governance Lab
                  </h3>
                  <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                    Undergraduate Researcher
                  </div>
                </div>

                {/* Details Column with Sidenotes */}
                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <div className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Engineered distributed crawler architecture (Python/Scrapy) with adaptive backoff using response latency fingerprinting and dynamic rate adjustment. Implemented intelligent proxy management (15 residential endpoints, 99.3% uptime) with session-based rotation and success rate optimization. [confidence: 0.98]
                    </div>
                    <div className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Developed production NLP pipeline integrating domain-specific tokenization & sentiment analysis, supporting research published in APSR (2023). Pipeline processed >40k documents while maintaining consistent cross-validation performance (κ>0.75)
                    </div>
                    <div className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Delivered technical seminar (n=40min) on LLM applications in computational social science; focused on prompt engineering for zero-shot classification & few-shot learning in political text analysis [engagement metrics: 94% attendance retention; confidence: medium/low]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NSF Experience */}
            <div className="group">
              <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
                {/* Timeline Column */}
                <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  {/* Timeline details here */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Competencies Section */}
        <section className="mb-24">
          <div className="flex items-baseline mb-12">
            <h2 className="font-söhne-mono text-sm tracking-widest uppercase text-gray-900 dark:text-gray-100">
              Technical Competencies
            </h2>
            <div className="ml-8 h-px flex-1 bg-gray-200/50 dark:bg-gray-800/50" />
          </div>

          <div className="space-y-16">
            {/* Computational Methods */}
            <div className="grid grid-cols-[2.5fr_4fr] gap-8">
              <div>
                <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-4">
                  Computational Methods
                </h3>
                <div className="font-söhne-mono text-xs text-gray-500/60 dark:text-gray-400/60">
                  Primary focus areas in quantitative research & analysis
                </div>
              </div>
              
              <div className="space-y-8 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                {/* Statistical Computing */}
                <div>
                  <div className="font-söhne-mono text-xs text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mb-3">
                    Statistical Computing
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-spectral text-sm text-gray-900 dark:text-gray-100">Python</span>
                      <span className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">Primary Development Environment</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-spectral text-sm text-gray-900 dark:text-gray-100">R</span>
                      <span className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">Statistical Analysis & Visualization</span>
                    </div>
                  </div>
                </div>

                {/* Research Methods */}
                <div>
                  <div className="font-söhne-mono text-xs text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mb-3">
                    Quantitative Methods
                  </div>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Hierarchical modeling & causal inference frameworks
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Regression analysis with emphasis on panel data methods
                    </li>
                  </ul>
                </div>

                {/* NLP & ML */}
                <div>
                  <div className="font-söhne-mono text-xs text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mb-3">
                    Natural Language Processing
                  </div>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Advanced text processing pipelines integrating domain-specific tokenization
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      LLM prompt engineering for zero-shot & few-shot learning tasks
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research Infrastructure */}
            <div className="grid grid-cols-[2.5fr_4fr] gap-8">
              <div>
                <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-4">
                  Research Infrastructure
                </h3>
                <div className="font-söhne-mono text-xs text-gray-500/60 dark:text-gray-400/60">
                  Systems & tools for empirical research
                </div>
              </div>
              
              <div className="space-y-8 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                {/* Development Tools */}
                <div>
                  <div className="font-söhne-mono text-xs text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mb-3">
                    Development Environment
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-spectral text-sm text-gray-900 dark:text-gray-100">Git & Version Control</span>
                      <span className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">Research Reproducibility</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-spectral text-sm text-gray-900 dark:text-gray-100">SQL & Database Design</span>
                      <span className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">Data Architecture</span>
                    </div>
                  </div>
                </div>

                {/* Documentation */}
                <div>
                  <div className="font-söhne-mono text-xs text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mb-3">
                    Research Documentation
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-spectral text-sm text-gray-900 dark:text-gray-100">LaTeX & Technical Writing</span>
                      <span className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">Academic Publishing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Subtly Optimized */}
        <section className="mb-24">
          <div className="flex items-baseline mb-12">
            <h2 className="font-söhne-mono text-sm tracking-widest uppercase text-gray-900 dark:text-gray-100">
              Education
            </h2>
            <div className="ml-8 h-px flex-1 bg-gray-200/50 dark:bg-gray-800/50" />
          </div>

          <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
            {/* Timeline Column */}
            <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <div className="flex">
                <span className="w-3 text-center opacity-40 -ml-3">·</span>
                <span>2020 – 2024</span>
              </div>
              <div className="flex">
                <span className="w-3 text-center opacity-40 -ml-3">·</span>
                <span>Minneapolis, MN</span>
              </div>
            </div>
            
            {/* Institution Column */}
            <div>
              <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                University of Minnesota
              </h3>
              <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                Philosophy, Politics & Economics
              </div>
              <div className="mt-2 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
                Emphasis: Logic & Quantitative Methods
              </div>
            </div>

            {/* Details Column - Subtly Signaling Relevant Skills */}
            <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <div className="relative pl-6">
                  <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                  Specialized in formal logic and epistemology, with focus on computational approaches to reasoning systems
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                  Advanced research methods combining statistical inference, causal analysis, and systematic uncertainty quantification
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                  Thesis examined algorithmic decision-making in institutional contexts, synthesizing normative theory and empirical methods
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                  Interdisciplinary coursework in decision theory, game theory, and formal modeling of complex systems
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
