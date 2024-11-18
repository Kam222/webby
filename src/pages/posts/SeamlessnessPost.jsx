import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Brain, GitBranch, Scale, Clock, AlertTriangle, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-16 font-serif">
      {/* Epistemic Status Banner */}
      <div className="mb-16 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <h3 className="text-sm font-mono uppercase text-gray-500 dark:text-gray-400 mb-2">Epistemic Status</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          This is my attempt at radical transparency in intellectual development. Most career narratives are post-hoc rationalizations; 
          I aim instead for a longitudinal study of intellectual growth, with clear markers of uncertainty and development. Claims about 
          impact and causality should be viewed skeptically (see methodology notes). Last updated: 2024-03-15.
        </p>
      </div>

      {/* Research Threads */}
      <section className="mb-16">
        <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Research Threads</h2>
        
        <div className="space-y-8">
          <ResearchThread
            title="Computational Social Science & AI Governance"
            status="active"
            confidence={0.8}
            years="2022-present"
            description="Investigating how machine learning systems interpret and operationalize constraints, with a focus on legal and ethical boundaries."
            keyProjects={[
              {
                title: "MIT GDL Lab Research",
                description: "Developed novel NLP pipelines for analyzing policy documents. Key finding: 19% improvement in classification accuracy through hybrid architectures.",
                confidence: "high",
                impact: "Published in APSR",
                code: "github.com/mahamud/gdl-nlp"
              },
              {
                title: "Climate Finance Analysis",
                description: "Statistical modeling of renewable energy investment patterns across Africa (n=48 nations). Revealed systematic underinvestment patterns.",
                confidence: "medium",
                impact: "Influenced COP29 strategy",
                methodology: "Mixed-methods approach combining regression analysis with qualitative case studies."
              }
            ]}
          />

          <ResearchThread
            title="International Development & Aid Effectiveness"
            status="active"
            confidence={0.7}
            years="2021-present"
            description="Examining principal-agent problems in development aid allocation, with focus on West Africa."
            keyProjects={[
              {
                title: "NSF Summer Research",
                description: "Multi-level regression analysis of aid programs (n=342) demonstrating significant donor intervention effects.",
                confidence: "high",
                impact: "67% variance explained",
                methodology: "Bayesian hierarchical models"
              }
            ]}
          />

          {/* Additional research threads... */}
        </div>
      </section>

      {/* Technical Skills Evolution */}
      <section className="mb-16">
        <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Technical Evolution</h2>
        
        <div className="space-y-4">
          <SkillTimeline
            category="Programming & Analysis"
            entries={[
              { year: 2021, event: "First exposure to Python - basic scripting", confidence: 0.6 },
              { year: 2022, event: "Developed web crawlers & NLP pipelines", confidence: 0.8 },
              { year: 2023, event: "Advanced ML implementations, statistical modeling", confidence: 0.85 },
              { year: 2024, event: "Full-stack development, distributed systems", confidence: 0.75 }
            ]}
          />

          <SkillTimeline
            category="Research Methods"
            entries={[
              { year: 2021, event: "Basic quantitative analysis", confidence: 0.7 },
              { year: 2022, event: "Mixed methods research design", confidence: 0.8 },
              { year: 2023, event: "Causal inference, experimental design", confidence: 0.85 },
              { year: 2024, event: "Advanced econometrics, ML applications", confidence: 0.75 }
            ]}
          />
        </div>
      </section>

      {/* Intellectual Growth */}
      <section className="mb-16">
        <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Intellectual Development</h2>
        
        <div className="space-y-6">
          <Period
            years="2020-2021"
            title="Foundation Building"
            description="Initial exposure to political science research methods and philosophical inquiry. Key influence: Historical institutionalism."
            keyReadings={[
              "North - Institutions, Institutional Change and Economic Performance",
              "Acemoglu & Robinson - Why Nations Fail"
            ]}
            confidence={0.9}
          />

          <Period
            years="2022-2023"
            title="Computational Turn"
            description="Shift towards quantitative methods and computational social science. Growing interest in AI governance."
            keyReadings={[
              "Russel - Human Compatible",
              "Pearl - Causality"
            ]}
            confidence={0.85}
          />

          <Period
            years="2023-2024"
            title="Synthesis & Integration"
            description="Developing integrated framework combining institutional analysis with computational methods."
            keyReadings={[
              "Gwern - Scaling Hypothesis",
              "Christiano - Challenges to Tech Forecasting"
            ]}
            confidence={0.7}
          />
        </div>
      </section>

      {/* Footer with links */}
      <footer className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <div>Contact: maham089@umn.edu | <a href="https://github.com/mahamud" className="underline">GitHub</a></div>
        <div>See also: <a href="/research-methodology" className="underline">Research Methodology Notes</a> | <a href="/reading-list" className="underline">Complete Reading List</a></div>
      </footer>
    </div>
  );
};

// Subcomponents would be defined here...

export default Portfolio;