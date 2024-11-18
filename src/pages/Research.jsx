import React from 'react';
import { Layout } from '../components/Layout';
import { ResearchThread } from '../components/ResearchThread';
import { MethodNote } from '../components/MethodNote';

export default function Research() {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto px-8 py-16 font-serif">
        {/* Epistemic status banner */}
        <div className="mb-16 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-sm font-mono uppercase text-gray-500 dark:text-gray-400 mb-2">
            Epistemic Status
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This represents my evolving understanding of AI systems' interaction with legal and institutional frameworks...
          </p>
        </div>

        {/* Research Threads section */}
        <section className="mb-16">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-8">Research Threads</h2>
          
          <div className="space-y-8">
            <ResearchThread
              title="AI Systems & Legal Constraints"
              status="active"
              confidence={0.8}
              years="2022-present"
              description="Investigating how machine learning systems interpret and operationalize legal and ethical constraints..."
              relatedWork="Christiano's work on debate (2018) and Armstrong & Mindermann's research on value learning (2018)"
              keyProjects={[/* Your projects data */]}
            />
            
            {/* Add more ResearchThread components */}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
          {/* Your footer content */}
        </footer>
      </div>
    </Layout>
  );
} 