import React from 'react';
import { Calendar } from 'lucide-react';
import { useEffect } from 'react';

const IagoPost = () => {
  useEffect(() => {
    document.title = 'iago wasn't evil | khalid';
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-2xl mx-auto px-8">
        <article className="font-serif pt-16 pb-24">
          <header className="mb-16">
            <h1 className="text-2xl text-gray-900 dark:text-white font-serif mb-6">
              iago wasn't evil
            </h1>
            <div className="text-sm text-gray-500 dark:text-gray-400 italic mb-8">
              notes on strategic malevolence in Shakespeare's Othello
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
              my guess is that Iago represents something much more unsettling than just a sociopath 
              or being malcontent: I think he is what you get when human intelligence optimizes purely 
              for total social domination, without all the evolutionary rewards for cooperation and 
              reciprocity that typically govern human behavior
            </p>

            <p>
              his "motivations" are just post-hoc rationalizations - what I think must truly driving 
              him is this like, completely pure computational pleasure of perfect strategic execution
            </p>

            <div className="w-24 mx-auto border-t border-gray-100 dark:border-gray-800 my-12"></div>

            <p>
              what I thought about is how the whole time he doesn't even make the slightest mistake 
              in managing his overlapping, multiply-held deceptions, how he maintains perfect models 
              of every other character's beliefs and desires, calculating how to exploit the weakness 
              in these people's character, and how he can spin multiple strategic threads simultaneously 
              without ever tangling them
            </p>

            <p>
              this isn't just a smart dude - it's sort of this evolutionary optimization that has 
              pretty much reached perfection within its domain. what makes him such a force in the 
              writing is that he represents an example most humans instinctively recoil from: that 
              our social intelligence, pushed to its logical extreme, can produce a mind that treats 
              all human interaction as pure game theory and calculation deriving its sole satisfaction 
              from flawless strategic execution
            </p>

            <div className="w-24 mx-auto border-t border-gray-100 dark:border-gray-800 my-12"></div>

            <p>
              for example my friends and I were discussing this guy deciding which girl in his life 
              both of whom he liked and they liked him too, using spreadsheets
            </p>

            <p>
              Iago is just a variation in human that emerges rarely precisely because human society 
              has evolved strong countermeasures against that kind of pure social predators - yet it 
              probably remains viable at low frequencies
            </p>

            <p>
              the horror of Iago isn't that he's inhuman, but that he represents human social 
              intelligence that is fully optimized for exploitation - a mirror showing us what we 
              could become if we lost all the hedonic rewards for genuine human connection or at 
              least that's my guess
            </p>

            <div className="w-24 mx-auto border-t border-gray-100 dark:border-gray-800 my-12"></div>

            <p>
              as for backstory, using this explanation I'd wager he doesn't need one. but if he did, 
              maybe something like: a childhood not marked by trauma but by an early recognition of 
              how different he was. perhaps he had moments where he discovered that while others 
              derived genuine pleasure from friendship and love, he experienced a deeper thrill from 
              perfectly predicting and manipulating social dynamics
            </p>

            <p>
              a military career would've given him an amazing lab to start testing and refining these 
              abilities - a hierarchical structure filled with complex social dynamics, status 
              competitions, and opportunities for strategic manipulation. by the time we meet him in 
              Othello, he's near perfected it
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
              from William Shakespeare's Othello (c. 1603)
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default IagoPost; 