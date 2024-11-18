import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Brain, GitBranch, Scale, Clock, AlertTriangle, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Layout } from '../components/Layout';
import { MarginNote } from '../components/MarginNote';
import { ResearchThread } from '../components/ResearchThread';
import { SkillTimeline } from '../components/SkillTimeline';
import concepts from '../data/concepts';

const IagoPost = () => {
  const [activeNote, setActiveNote] = useState(null);
  const [mouseY, setMouseY] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = (e) => {
    setMouseY(e.clientY);
  };

  const ConceptTerm = ({ term, onMouseEnter }) => (
    <span
      onMouseEnter={onMouseEnter}
      className="italic font-serif text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-default select-none"
    >
      {term}
    </span>
  );

  return (
    <Layout>
      <div 
        className="max-w-4xl mx-auto p-8 font-serif leading-relaxed"
        onMouseMove={handleScroll}
      >
        {/* Epistemic status banner */}
        <div className="mb-16 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-sm font-mono uppercase text-gray-500 dark:text-gray-400 mb-2">
            Epistemic Status
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This represents my evolving understanding of AI systems' interaction with legal and institutional frameworks...
          </p>
        </div>

        {/* Your existing content with concept terms */}
        <article className="relative">
          <div className="text-lg space-y-6 text-gray-800 dark:text-gray-200">
            <p>
              <ConceptTerm 
                term="seamlessness"
                onMouseEnter={() => setActiveNote('seamlessness')}
              /> — AI and technological systems...
            </p>

            {/* Keep ALL your existing paragraphs */}
            
            {/* Research Threads section */}
            <section className="mt-24 mb-16">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Research Threads</h2>
              <div className="space-y-8">
                <ResearchThread
                  title="AI Systems & Legal Constraints"
                  status="active"
                  confidence={0.8}
                  years="2022-present"
                  description="Investigating how machine learning systems interpret and operationalize legal and ethical constraints..."
                  relatedWork="Christiano's work on debate (2018) and Armstrong & Mindermann's research on value learning (2018)"
                  keyProjects={[
                    {
                      title: "LLM Legal Reasoning Analysis",
                      description: "Developed novel methodology for analyzing how language models handle legal constraints...",
                      confidence: "high",
                      impact: "Published in APSR; methodology adopted by two major AI labs",
                      methodology: "Hybrid approach combining traditional NLP metrics with novel legal reasoning frameworks...",
                      limitations: "Current limitations in measuring counterfactual reasoning capabilities...",
                      link: "github.com/mahamud/llm-legal-analysis"
                    }
                  ]}
                />
              </div>
            </section>

            {/* Technical Evolution section */}
            <section className="mb-16">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Technical Evolution</h2>
              <div className="space-y-4">
                <SkillTimeline
                  category="AI & ML Systems"
                  entries={[
                    { year: 2021, event: "Basic ML implementations; focus on classical algorithms", confidence: 0.7 },
                    { year: 2022, event: "Advanced NLP work at MIT GDL Lab; transformer architectures", confidence: 0.85 },
                    { year: 2023, event: "AI alignment research; causal inference in ML systems", confidence: 0.8 },
                    { year: 2024, event: "Large-scale distributed AI systems; governance frameworks", confidence: 0.75 }
                  ]}
                />

                <SkillTimeline
                  category="Legal & Policy Analysis"
                  entries={[
                    { year: 2021, event: "Constitutional law research with Prof. Johnson", confidence: 0.7 },
                    { year: 2022, event: "AI policy analysis at UNOPS", confidence: 0.8 },
                    { year: 2023, event: "Computational law projects; smart contract analysis", confidence: 0.75 },
                    { year: 2024, event: "AI governance frameworks; regulatory design", confidence: 0.8 }
                  ]}
                />
              </div>
            </section>

            {/* Margin notes */}
            {activeNote && concepts[activeNote] && (
              <MarginNote 
                content={concepts[activeNote]}
                mouseY={mouseY}
              />
            )}
          </div>
        </article>

        {/* Enhanced footer */}
        <footer className="text-sm text-gray-500 dark:text-gray-400 space-y-2 mt-16">
          <div>
            Contact: maham089@umn.edu | 
            <a href="https://github.com/mahamud" className="underline ml-2">GitHub</a>
          </div>
          <div>
            See also: 
            <a href="/methodology" className="underline ml-2">Research Methodology</a> | 
            <a href="/reading-list" className="underline ml-2">Annotated Reading List</a> |
            <a href="/ai-governance" className="underline ml-2">AI Governance Writing</a>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default IagoPost;