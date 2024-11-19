import React, { useEffect } from 'react';
import { Clock, Mail, Phone } from 'lucide-react';

const Portfolio = () => {
  useEffect(() => {
    document.title = 'cv | khalid';
  }, []);
  
  return (
    <div className="max-w-3xl mx-auto px-8 py-12 font-serif relative">
      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <Clock className="w-3 h-3" />
          <span>Last verified 2024-03-15</span>
        </div>
        <span className="font-mono">v3.2.1</span>
      </div>

      <header className="mb-12">
        <h1 className="text-3xl font-normal text-gray-800 dark:text-gray-200 tracking-tight mb-6">Khalid Ali</h1>
        <div className="flex items-center space-x-12 text-sm text-gray-500 dark:text-gray-400">
          <a href="mailto:khalidalim.cv@" className="flex items-center hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            <span>maham089@umn.edu</span>
          </a>
          <a href="tel:7633278945" className="flex items-center hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span>763-327-8945</span>
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="font-mono text-sm tracking-wider text-gray-800 dark:text-gray-100 mb-8 pb-3 border-b border-gray-100 dark:border-gray-800">
          Experience
        </h2>
        
        <div className="space-y-20">
          <div className="group">
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              Office of the Special Presidential Envoy for Climate Change
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Research Assistant • Jun – Aug 2024 • Nairobi, KE</div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Developed statistical models of climate finance flows (n = 48 African nations, 2010–2020); uncovered severe underinvestment (1.7% of total global renewable energy investments)</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Architected PostgreSQL database tracking green industrialization initiatives (n = 50 case studies); achieved 97% data completeness</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Impact: Findings directly incorporated into Kenya's COP29 negotiation strategy [causal attribution uncertain]</span>
              </li>
            </ul>
          </div>

          <div className="group">
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              MIT GOV Lab
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Undergraduate Researcher • Jun – Aug 2023 • Cambridge, MA</div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Engineered distributed crawler architecture (Python/Scrapy) with adaptive backoff using response latency fingerprinting and dynamic rate adjustment. Implemented intelligent proxy management (15 residential endpoints, 99.3% uptime) with session-based rotation and success rate optimization. [confidence: 0.98]</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Developed production NLP pipeline integrating domain-specific tokenization & sentiment analysis, supporting research published in APSR (2023). Pipeline processed >40k documents while maintaining consistent cross-validation performance (κ>0.75)</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Delivered technical seminar (n=40min) on LLM applications in computational social science; focused on prompt engineering for zero-shot classification & few-shot learning in political text analysis [engagement metrics: 94% attendance retention; confidence: medium/low]</span>
              </li>
            </ul>
          </div>

          <div className="group">
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              National Science Foundation
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Summer Research Fellow • Jun – Aug 2022 • Los Angeles, CA</div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Built hierarchical regression models testing principal-agent dynamics in development funding flows. Key finding: donor intervention explains r^2=0.67 of variance in aid misallocation relative to optimal distribution model (defined by local development indicators; income/health/education composite). Effect size = -0.58 for stability metrics (p&lt;0.01)</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Conducted longitudinal analysis of NATO expansion patterns (1990–99)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="font-mono text-base text-gray-800 dark:text-gray-100 mb-12 pb-2 border-b border-gray-100 dark:border-gray-800">
          Part-Time Experience
        </h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">American Bar Association</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Death Penalty Project Intern • Jan – Apr 2023 • Washington, DC</div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Constructed comprehensive case-law dataset examining defense counsel guidelines adherence (n=160; SCOTUS n=72, state appellate n=88)</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Developed categorical taxonomy of guideline application patterns: effective implementation, procedural misapplication, complete omission</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Primary finding: stark heterogeneity in how courts interpret 'reasonable performance' standard across jurisdictions, particularly in capital cases with limited defense resources</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Raw data manually extracted from Westlaw/LexisNexis, with double-entry verification protocol for case holding classification</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">United Nations Office for Project Services</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Consultant • Jul – Dec 2022 • Remote</div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Analyzed gendered violence/water-access correlations in Somalia through mixed-methods approach combining field interviews (n=34; hierarchical sampling across EU/diplomatic/NGO domain experts) + GIS mapping of historical water access incidents</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Developed novel value-chain framework quantifying gender-specific risk factors in water collection (d=0.45 higher risk for female collectors >2km from source)</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Findings integrated into EU Gender Action Plan III interventions; framework adopted by 3 regional WASH programs</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">International Crisis Group</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Intern • Jan – May 2021 • Remote</div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Generated policy reports for African Union, EU, UN and bilateral security partners</span>
              </li>
              <li className="flex space-x-2">
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Aggregated OSINT from social media, news networks, and regional reporting (n>500 weekly)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="font-mono text-base text-gray-800 dark:text-gray-100 mb-12 pb-2 border-b border-gray-100 dark:border-gray-800">
          Presentations & Talks
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100">Terrorism's Mediation Effects on Foreign Policy Formation</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Pepperdine University • November 2023</div>
            <p className="text-gray-600 dark:text-gray-300">Oral presentation examining causal pathways between media coverage of terrorism & policy responses</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100">LLM Applications in Computational Social Science</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">MIT GOV/Lab, Cambridge • September 2023</div>
            <p className="text-gray-600 dark:text-gray-300">Technical seminar on prompt engineering for zero-shot classification & few-shot learning in political text analysis [engagement: 94% retention]</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100">Comparative Analysis of Modern NLP Approaches</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">MIT Summer Research Program, Cambridge • August 2023</div>
            <p className="text-gray-600 dark:text-gray-300">Poster presentation quantifying performance differences across architectures (GPT-3, BERT & Classical Bayesian Methods) in text classification tasks</p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="font-mono text-base text-gray-800 dark:text-gray-100 mb-12 pb-2 border-b border-gray-100 dark:border-gray-800">
          Technical Competencies
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-4 flex items-center">
              <span>Programming</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">[ordered by proficiency]</span>
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
              <p>Primary: Python </p>
              <p>Secondary: R, JavaScript, SQL, LaTeX</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-4 flex items-center">
              <span>Data Science & ~ML</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2"></span>
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
              <p>Statistical Methods: Hierarchical modeling, causal inference, regression analysis</p>
              <p>NLP: Text tokenization, VADER sentiment analysis, prompt engineering (zero-shot/few-shot learning)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="font-mono text-base text-gray-800 dark:text-gray-100 mb-12 pb-2 border-b border-gray-100 dark:border-gray-800">
          Languages
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-4 flex items-center">
              <span>Active Languages</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">[weekly use]</span>
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
              <p>English (L1) • Swahili (L2/C2) • Somali (L2/C2)</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-4 flex items-center">
              <span>Limited Working Proficiency</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">[occasional use]</span>
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
              <p>Arabic (L2/B1) [Saudi dialect] • Chinese (L2/A2)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="font-mono text-base text-gray-800 dark:text-gray-100 mb-12 pb-2 border-b border-gray-100 dark:border-gray-800">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100">Philosophy, Politics & Economics</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">University of Minnesota • 2020–2024</div>
            <p className="text-gray-600 dark:text-gray-300">Focus: Philosophy of Science, Computational Social Science</p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .dark {
          --text-primary: rgb(229, 231, 235);
          --text-secondary: rgb(156, 163, 175);
          --text-tertiary: rgb(107, 114, 128);
        }
        
        p, li {
          line-height: 1.75;
          letter-spacing: -0.011em;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
