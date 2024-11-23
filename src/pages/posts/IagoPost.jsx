import React from 'react';
import { Calendar } from 'lucide-react';
import { Layout } from '../../components/Layout';

const IagoPost = () => {
  React.useEffect(() => {
    document.title = "iago wasn't evil | khalid";
  }, []);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-8">
        <article className="font-serif pt-16 pb-24">
          <header className="mb-16">
            <h1 className="text-3xl text-gray-900 dark:text-white font-serif mb-6">
              iago wasn't evil
            </h1>
            <div className="text-sm text-gray-500 dark:text-gray-400 italic mb-8">
              notes on strategic malevolence in Shakespeare's Othello - exploring how Iago represents human social intelligence optimized purely for exploitation
            </div>

            <div className="text-xs text-gray-400 dark:text-gray-500 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <time>2024-03-21</time>
                </div>
                <span>•</span>
                <span className="font-mono">●○○</span>
                <span className="text-yellow-600 dark:text-yellow-400">sapling</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-p:leading-relaxed
            prose-p:mb-8
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            space-y-8">
            
            <p>
              the conventional reading of Othello sees Iago as a manifestation of pure evil - 
              a character who commits atrocities simply for the pleasure of causing suffering. 
              but this interpretation misses something crucial about the nature of strategic behavior 
              and social intelligence.
            </p>

            <p>
              iago isn't evil in any metaphysical sense. he's what happens when you optimize 
              purely for personal advantage within social systems, without regard for cooperative 
              norms or others' wellbeing. his actions follow a ruthless internal logic of 
              maximizing his own position through the exploitation of others' trust and vulnerabilities.
            </p>

            <p>
              in this light, iago becomes less a symbol of abstract evil and more a demonstration 
              of how social intelligence can be weaponized when completely divorced from moral 
              constraints. his masterful manipulation of othello doesn't stem from supernatural 
              malevolence, but from an acute understanding of human psychology combined with 
              a willingness to exploit it without limitation.
            </p>

            <p>
              this reading transforms iago from a two-dimensional villain into something far more 
              unsettling: a mirror reflecting the dangerous potential within human social intelligence 
              itself. his character raises uncomfortable questions about the relationship between 
              intelligence, strategy, and morality.
            </p>

            <div className="w-24 mx-auto border-t border-gray-100 dark:border-gray-800 my-12"></div>

            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              what does it mean to optimize for exploitation within social systems?
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default IagoPost;