import React, { useEffect, useRef, useState } from 'react';
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
      {/* Document Meta - Left Margin Only */}
      <div className="fixed left-0 top-0 w-48 h-full border-r border-gray-100/10 dark:border-gray-800/50">
        {/* Existing Meta Info */}
        <div className="pt-32 p-8 space-y-6 font-söhne-mono text-[10px] tracking-widest uppercase">
          <div className="space-y-2">
            <div className="text-gray-400/60 dark:text-gray-500/60">Document</div>
            <div className="text-gray-600 dark:text-gray-400">Curriculum Vitae</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-gray-400/60 dark:text-gray-500/60">Status</div>
            <div className="text-gray-600 dark:text-gray-400">Live Document</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-48 max-w-[1400px] px-16 py-16">
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

                {/* Details Column */}
                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Developed statistical models of climate finance flows (n = 48 African nations, 2010–2020); uncovered severe underinvestment (1.7% of total global renewable energy investments)
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Architected PostgreSQL database tracking green industrialization initiatives (n = 50 case studies); achieved 97% data completeness
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Impact: Findings directly incorporated into Kenya's COP29 negotiation strategy [causal attribution uncertain]
                    </li>
                  </ul>
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

                {/* Details Column */}
                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Engineered distributed crawler architecture (Python/Scrapy) with adaptive backoff using response latency fingerprinting and dynamic rate adjustment. Implemented intelligent proxy management (15 residential endpoints, 99.3% uptime) with session-based rotation and success rate optimization. [confidence: 0.98]
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Developed production NLP pipeline integrating domain-specific tokenization & sentiment analysis, supporting research published in APSR (2023). Pipeline processed >40k documents while maintaining consistent cross-validation performance (κ>0.75)
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Delivered technical seminar (n=40min) on LLM applications in computational social science; focused on prompt engineering for zero-shot classification & few-shot learning in political text analysis [engagement metrics: 94% attendance retention; confidence: medium/low]
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NSF Experience */}
            <div className="group">
              <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
                {/* Timeline Column */}
                <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Jun – Aug 2022</span>
                  </div>
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
                
                {/* Role Column */}
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    National Science Foundation
                  </h3>
                  <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                    Summer Research Fellow
                  </div>
                </div>

                {/* Details Column */}
                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Built hierarchical regression models testing principal-agent dynamics in development funding flows. Key finding: donor intervention explains r²=0.67 of variance in aid misallocation relative to optimal distribution model (defined by local development indicators; income/health/education composite). Effect size = -0.58 for stability metrics (p&lt;0.01)
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Conducted longitudinal analysis of NATO expansion patterns (1990–99)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* After the existing Experience section, before Academic Discourse */}
        <section className="mb-24">
          <div className="flex items-baseline mb-12">
            <h2 className="font-söhne-mono text-sm tracking-widest uppercase text-gray-900 dark:text-gray-100">
              Part-Time Experience
            </h2>
            <div className="ml-8 h-px flex-1 bg-gray-200/50 dark:bg-gray-800/50" />
          </div>

          {/* Part-Time Experience Items */}
          <div className="space-y-16">
            {/* ABA Experience */}
            <div className="group">
              <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
                <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Jan – Apr 2023</span>
                  </div>
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Washington, DC</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    American Bar Association
                  </h3>
                  <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                    Death Penalty Project Intern
                  </div>
                </div>

                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Constructed comprehensive case-law dataset examining defense counsel guidelines adherence (n=160; SCOTUS n=72, state appellate n=88)
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Developed categorical taxonomy of guideline application patterns: effective implementation, procedural misapplication, complete omission
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Primary finding: stark heterogeneity in how courts interpret 'reasonable performance' standard across jurisdictions, particularly in capital cases with limited defense resources
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Raw data manually extracted from Westlaw/LexisNexis, with double-entry verification protocol for case holding classification
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UNOPS Experience */}
            <div className="group">
              <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
                <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Jul – Dec 2022</span>
                  </div>
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Remote</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    United Nations Office for Project Services
                  </h3>
                  <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                    Consultant
                  </div>
                </div>

                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Analyzed gendered violence/water-access correlations in Somalia through mixed-methods approach combining field interviews (n=34; hierarchical sampling across EU/diplomatic/NGO domain experts) + GIS mapping of historical water access incidents
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Developed novel value-chain framework quantifying gender-specific risk factors in water collection (d=0.45 higher risk for female collectors &gt;2km from source)
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Findings integrated into EU Gender Action Plan III interventions; framework adopted by 3 regional WASH programs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ICG Experience */}
            <div className="group">
              <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
                <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Jan – May 2021</span>
                  </div>
                  <div className="flex">
                    <span className="w-3 text-center opacity-40 -ml-3">·</span>
                    <span>Remote</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    International Crisis Group
                  </h3>
                  <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                    Intern
                  </div>
                </div>

                <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Generated policy reports for African Union, EU, UN and bilateral security partners
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Aggregated OSINT from social media, news networks, and regional reporting (n&gt;500 weekly)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* After Part-Time Experience section */}

        {/* Academic Contributions Section */}
        <section className="mb-24">
          <div className="flex items-baseline mb-12">
            <h2 className="font-söhne-mono text-sm tracking-widest uppercase text-gray-900 dark:text-gray-100">
              Academic Contributions
            </h2>
            <div className="ml-8 h-px flex-1 bg-gray-200/50 dark:bg-gray-800/50" />
          </div>

          {/* Presentations Subsection */}
          <div className="space-y-16 mb-20">
            <div className="font-söhne-mono text-xs text-gray-500/60 dark:text-gray-400/60 uppercase tracking-widest">
              Presentations & Talks
            </div>

            <div className="space-y-12">
              {/* SCURRC Presentation */}
              <div className="grid grid-cols-[2.5fr_4fr] gap-8">
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    Testing CNN Effect Through Computational Sentiment Analysis: Evidence from Somalia Coverage
                  </h3>
                  <div className="font-söhne-mono text-xs space-y-2">
                    <div className="text-gray-500 dark:text-gray-400">
                      <span className="text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mr-2">
                        Venue
                      </span>
                      SCURRC, Pepperdine University
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="w-3 text-center opacity-40 -ml-3">·</span>
                        <span>Nov 2022</span>
                      </div>
                      <span className="opacity-40">·</span>
                      <span>Malibu, CA</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  Oral presentation examining causal pathways between media coverage of terrorism & policy responses
                  <span className="block mt-2 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
                    [confidence: medium • methodology: mixed-methods • n=147 media events • causal strength: weak/suggestive]
                  </span>
                </div>
              </div>

              {/* MIT GOV/Lab Presentation */}
              <div className="grid grid-cols-[2.5fr_4fr] gap-8">
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    LLM Applications in Computational Social Science
                  </h3>
                  <div className="font-söhne-mono text-xs space-y-2">
                    <div className="text-gray-500 dark:text-gray-400">
                      <span className="text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mr-2">
                        Venue
                      </span>
                      MIT GOV/Lab Faculty Seminar
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="w-3 text-center opacity-40 -ml-3">·</span>
                        <span>Sep 2023</span>
                      </div>
                      <span className="opacity-40">·</span>
                      <span>Cambridge, MA</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  Technical seminar on prompt engineering for zero-shot classification & few-shot learning in political text analysis 
                  <span className="block mt-2 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
                    [confidence: medium/low • engagement: 94% retention • replication: untested • limitations: small sample size]
                  </span>
                </div>
              </div>

              {/* MIT MSRP Presentation */}
              <div className="grid grid-cols-[2.5fr_4fr] gap-8">
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    Comparative Analysis of Modern NLP Approaches
                  </h3>
                  <div className="font-söhne-mono text-xs space-y-2">
                    <div className="text-gray-500 dark:text-gray-400">
                      <span className="text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mr-2">
                        Venue
                      </span>
                      MIT Summer Research Symposium
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="w-3 text-center opacity-40 -ml-3">·</span>
                        <span>Aug 2023</span>
                      </div>
                      <span className="opacity-40">·</span>
                      <span>Cambridge, MA</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  Poster presentation quantifying performance differences across architectures (GPT-3, BERT & Classical Bayesian Methods) in text classification tasks
                  <span className="block mt-2 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
                    [confidence: high • n=1247 samples • p&lt;0.01 • methodology: robust • key limitation: domain-specific findings]
                  </span>
                </div>
              </div>

              {/* UMN Research Presentation */}
              <div className="grid grid-cols-[2.5fr_4fr] gap-8">
                <div>
                  <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                    Web APIs as Social Microscopes: Systematic Observation of Digital Social Behavior
                  </h3>
                  <div className="font-söhne-mono text-xs space-y-2">
                    <div className="text-gray-500 dark:text-gray-400">
                      <span className="text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mr-2">
                        Venue
                      </span>
                      Distinguished Undergraduate Research Symposium
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="w-3 text-center opacity-40 -ml-3">·</span>
                        <span>Apr 2023</span>
                      </div>
                      <span className="opacity-40">·</span>
                      <span>University of Minnesota</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                  Methodological presentation on leveraging programmatic web data collection for systematic social science research, demonstrating sentiment analysis methods across Twitter and NYT APIs
                  <span className="block mt-2 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
                    [confidence: medium • data quality: variable • API reliability: declining • generalizability: limited]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Publications Subsection */}
          <div className="space-y-16">
            <div className="font-söhne-mono text-xs text-gray-500/60 dark:text-gray-400/60 uppercase tracking-widest">
              Publications & Commentary
            </div>

            <div className="space-y-12">
              {/* Publications Subsection */}
              <div className="space-y-16">
                <div className="font-söhne-mono text-xs text-gray-500/60 dark:text-gray-400/60 uppercase tracking-widest">
                  Early Writing: Adventures in Being Wrong™ [2021-2022]
                </div>

                <div className="space-y-12">
                  {/* Meta-Commentary Block */}
                  <div className="text-sm text-gray-600/90 dark:text-gray-400/90 font-söhne-mono border-l-2 border-gray-200/10 dark:border-gray-800/30 pl-4 py-2 mb-8">
                    Two op-eds from my "I can fix international institutions" phase¹. Keeping these here as both comedy and cautionary tale.
                    <div className="mt-4 text-xs text-gray-500/80 dark:text-gray-500/80">
                      ¹Future me will probably find current me equally amusing
                    </div>
                  </div>

                  {/* Somalia Article */}
                  <div className="grid grid-cols-[2.5fr_4fr] gap-8">
                    <div>
                      <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                        Somalia's Misadvised Foreign Policy
                      </h3>
                      <div className="font-söhne-mono text-xs space-y-2">
                        <div className="text-gray-500 dark:text-gray-400">
                          <span className="text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mr-2">
                            Published in
                          </span>
                          The Standard
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <span className="w-3 text-center opacity-40 -ml-3">·</span>
                            <span>2021</span>
                          </div>
                          <span className="opacity-40">·</span>
                          <span>Nairobi, KE</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                      Wrote confidently about state formation while barely understanding states². Classic Dunning-Kruger speedrun.
                      <span className="block mt-2 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
                        [confidence at time of writing: extremely high • current confidence in analysis: oh no • redeeming quality: accidentally stumbled onto some interesting patterns]
                      </span>
                    </div>
                  </div>

                  {/* International Courts Article */}
                  <div className="grid grid-cols-[2.5fr_4fr] gap-8">
                    <div>
                      <h3 className="font-spectral text-lg text-gray-900 dark:text-gray-100 mb-2">
                        International Courts: The Future of Justice or Neo-Colonial Tools?
                      </h3>
                      <div className="font-söhne-mono text-xs space-y-2">
                        <div className="text-gray-500 dark:text-gray-400">
                          <span className="text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest mr-2">
                            Published in
                          </span>
                          The Standard
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <span className="w-3 text-center opacity-40 -ml-3">·</span>
                            <span>2022</span>
                          </div>
                          <span className="opacity-40">·</span>
                          <span>Nairobi, KE</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                      Peak "I've just discovered TWAIL and will now solve colonialism"³. Managed to critique reductionism while being thoroughly reductionist.
                      <span className="block mt-2 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
                        [current status: still embarrassingly proud of some passages • key learning: maybe fixing global institutions is slightly harder than expected]
                      </span>
                    </div>
                  </div>

                  {/* Meta Analysis Footer */}
                  <div className="mt-8 pt-8 border-t border-gray-200/10 dark:border-gray-800/30 font-söhne-mono text-xs text-gray-500 dark:text-gray-400">
                    <div className="space-y-4">
                      <div>
                        ²Looking Back (While Still Probably Being Wrong):
                        <ul className="mt-2 ml-4 space-y-1 text-gray-400 dark:text-gray-500">
                          <li>• Past me: "I understand everything about institutional design!"</li>
                          <li>• Current me: "Institutions are complex adaptive systems maybe?"</li>
                          <li>• Future me: [probably laughing at current me's takes]</li>
                        </ul>
                      </div>
                      <div>
                        ³Why Keep These Listed:
                        <ul className="mt-2 ml-4 space-y-1 text-gray-400 dark:text-gray-500">
                          <li>• Intellectual sunk cost fallacy (spent too much time writing them)</li>
                          <li>• Good reminder that certainty often correlates inversely with understanding</li>
                          <li>• I'm increasingly a fan of failing/growing in public and these are valuable artifacts of my first attempts at public writing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                      Causal inference frameworks (Pearl's do-calculus, potential outcomes) with emphasis on instrumental variables & regression discontinuity
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Hierarchical Bayesian modeling for heterogeneous treatment effects
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-[0.5em] w-2 h-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                      Panel methods with focus on synthetic control & difference-in-differences
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

        {/* Education Section - Refined Conclusion */}
        <section className="mb-32">
          <div className="flex items-baseline mb-12">
            <h2 className="font-söhne-mono text-sm tracking-widest uppercase text-gray-900 dark:text-gray-100">
              Education
            </h2>
            <div className="ml-8 h-px flex-1 bg-gray-200/50 dark:bg-gray-800/50" />
          </div>

          <div className="grid grid-cols-[1fr_1.5fr_2.5fr] gap-12">
            {/* Timeline Column */}
            <div className="font-söhne-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <div className="flex items-center">
                <span className="w-3 text-center opacity-40 -ml-3">·</span>
                <span>2020 – 2024</span>
              </div>
              <div className="flex items-center">
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
            </div>

            {/* Subtle Visual Element */}
            <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
              <div className="h-full flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-gray-200/30 dark:from-gray-800/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Artistic Practice Section - Redesigned with golden ratio proportions */}
        <section className="mb-32">
          <div className="flex items-baseline mb-16">
            <h2 className="font-söhne-mono text-sm tracking-widest uppercase text-gray-900 dark:text-gray-100">
              Artistic Practice
            </h2>
            <div className="ml-8 h-px flex-1 bg-gray-200/50 dark:bg-gray-800/50" />
          </div>

          <div className="space-y-24">
            {/* Core Achievement Block */}
            <div className="grid grid-cols-[1fr_2fr] gap-16">
              <div>
                <h3 className="font-spectral text-2xl text-gray-900 dark:text-gray-100 mb-4">
                  Classical Ballroom Dance
                </h3>
                <div className="font-söhne-mono text-sm text-gray-500 dark:text-gray-400">
                  International Standard & American Smooth Division
                </div>
                
                {/* National Championship - Featured Achievement */}
                <div className="mt-8 pl-6 border-l-2 border-emerald-500/20">
                  <div className="text-base text-gray-900 dark:text-gray-100 font-spectral">
                    USADANCE National Champion 2024
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Collegiate Gold Smooth Division
                    <a href="https://www.youtube.com/watch?v=WEwSBMS5ftE"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="font-söhne-mono text-xs ml-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200">
                      [View Personal Favorite Rendition]
                    </a>
                  </div>
                </div>
              </div>

              {/* Competitive Trajectory - Right Column */}
              <div className="pl-8 border-l border-gray-100/10 dark:border-gray-800/50">
                <div className="prose prose-sm dark:prose-invert">
                  <p className="text-gray-600 dark:text-gray-300">
                    In partnership with C. Schultz, achieved the highest collegiate ranking nationally as undergraduates, 
                    advanced to the Adult Novice Final (6th place) against competitors with an average of 11.5 years experience,
                    and secured 1st place in gold as national collegiate champions -all within two years.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Development Grid with improved hierarchy */}
            <div className="grid grid-cols-3 gap-12">
              {/* Pedagogical Lineage */}
              <div className="space-y-4">
                <h4 className="font-spectral text-base text-gray-900 dark:text-gray-100">
                  Technical Training
                </h4>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Had the opportunity to train under M. Oleszweski, developing understanding of his unique synthesis of 
                  classical English technique, American jazz influences, classical ballet and mechanical precision.
                </div>
              </div>

              {/* Kinesthetic Theory */}
              <div className="space-y-4">
                <h4 className="font-spectral text-base text-gray-900 dark:text-gray-100">
                  Kinesthetic Theory
                </h4>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                    Identification of isomorphic principles across dance forms (e.g., ballet's épaulement mapping to ballroom's contra-body movement)
                  </li>
                </ul>
              </div>

              {/* Rhythmic Architecture */}
              <div className="space-y-4">
                <h4 className="font-spectral text-base text-gray-900 dark:text-gray-100">
                  Rhythmic Architecture
                </h4>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                    Studied polyrhythmic layering and phrasal architecture, exploring how multiple rhythmic patterns create depth in movement narratives
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                    Developing sensitivity to rubato moments in Waltz's triple meter, exploring 2-against-3 patterns in Foxtrot's broken time
                  </li>
                </ul>
              </div>
            </div>

            {/* Competition Results Grid */}
            <div className="grid grid-cols-2 gap-16">
              {/* Recent Competitions */}
              <div className="space-y-8">
                <div className="font-söhne-mono text-xs text-gray-400/60 dark:text-gray-500/60 uppercase tracking-widest">
                  Other Competition Results
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="font-spectral text-sm text-gray-900 dark:text-gray-100">
                      Badger Classic Triple Crown 2023
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="relative pl-6">
                        <span className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                        Gold & Novice Smooth Champion
                      </li>
                      <li className="relative pl-6">
                        <span className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                        Silver Standard Champion
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="font-spectral text-sm text-gray-900 dark:text-gray-100">
                      Dance Fest 2024
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="relative pl-6">
                        <span className="absolute left-0 top-[0.5em] w-1.5 h-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50" />
                        Gold Smooth & Standard Champion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References - Moved to header area */}
        <div className="absolute top-8 right-16 font-söhne-mono text-xs text-gray-400 dark:text-gray-500">
          References Available Upon Request
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

