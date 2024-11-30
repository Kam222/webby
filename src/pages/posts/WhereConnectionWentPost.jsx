import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footnotes, FootnoteReference } from '@/components/post/Footnotes';

// Reuse components from LettingGoPost
const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px"
  });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0,
          y: 20,
          filter: "blur(2px)"
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.9,
            ease: [0.23, 1, 0.32, 1],
            delay: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const Subtitle = ({ children, id }) => (
  <FadeInSection delay={0.1}>
    <h2 
      id={id}
      className="font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] 
        text-[28px] font-semibold tracking-[-0.5px] mt-16 mb-6 
        text-gray-900 dark:text-gray-100 leading-tight
        relative"
    >
      <motion.span
        className="absolute -left-4 opacity-0"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 8
        }}
      >
        ›
      </motion.span>
      {children}
    </h2>
  </FadeInSection>
);

const Quote = ({ children }) => (
  <FadeInSection delay={0.2}>
    <motion.figure 
      className="my-16 relative max-w-[650px] mx-auto"
      whileInView={{ 
        scale: [0.98, 1],
        opacity: [0.5, 1] 
      }}
      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      <div 
        className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r 
        from-transparent via-gray-200/40 to-transparent 
        dark:via-gray-700/40" 
      />
      
      <blockquote className="relative py-10">
        <span className="absolute top-6 left-0 text-gray-100/60 dark:text-gray-800/40 
          font-gt-alpina text-5xl leading-none select-none">
          "
        </span>
        
        <div className="relative px-12">
          <p className="font-gt-alpina text-[19px] italic leading-[1.7] 
            text-gray-700/90 dark:text-gray-300/90 tracking-[-0.01em]
            ml-4">
            {children}
          </p>
          
          <span className="absolute -bottom-4 right-0 text-gray-100/60 dark:text-gray-800/40 
            font-gt-alpina text-5xl leading-none select-none rotate-180">
            "
          </span>
        </div>
      </blockquote>

      <div 
        className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r 
        from-transparent via-gray-200/40 to-transparent 
        dark:via-gray-700/40"
      />
    </motion.figure>
  </FadeInSection>
);

const MetadataBar = () => (
  <div className="flex items-center gap-4 px-4 py-2.5 bg-black/[0.02] dark:bg-white/[0.02] 
    rounded-md font-sohne-mono text-[12px] text-gray-500/60 dark:text-gray-400/60
    transition-all duration-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]">
    <span className="lowercase">messy notes</span>
    <span className="text-gray-300 dark:text-gray-600">•</span>
    <span className="font-sohne-mono tracking-wider text-[10px] text-gray-400/40 dark:text-gray-500/40">●○○</span>
    <span className="text-gray-300 dark:text-gray-600">•</span>
    <span>9 min read</span>
  </div>
);

const DateGroup = () => (
  <div className="flex flex-col gap-0.5">
    <time className="block font-sohne-mono text-[12px] text-gray-600 dark:text-gray-400">
      Nov 29, 2024
    </time>
    <span className="block font-sohne-mono text-[11px] text-gray-500/60 dark:text-gray-400/60">
      last updated
    </span>
  </div>
);

const WhereConnectionWentPost = () => {
  useEffect(() => {
    document.title = "where connection went | khalid";
  }, []);
  
  return (
    <div className="min-h-screen relative 
      transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
      bg-gradient-to-b from-[#FCFCFC] via-[#FAFAFA] to-[#F8F8F8]
      dark:from-[var(--bg-primary)] dark:via-[var(--bg-secondary)] dark:to-[hsl(222,47%,12%)]">
      
      {/* Background elements from LettingGoPost */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0.3 }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/4 -left-1/4 
            w-[900px] h-[900px]
            bg-gradient-radial from-amber-100/30 via-orange-50/20 to-transparent
            dark:from-amber-900/20 dark:via-orange-900/10 dark:to-transparent
            rounded-full
            blur-3xl"
        />

        <motion.div 
          initial={{ scale: 0.95, opacity: 0.3 }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/4 -right-1/4 
            w-[900px] h-[900px]
            bg-gradient-radial from-sky-100/30 via-indigo-50/20 to-transparent
            dark:from-sky-900/20 dark:via-indigo-900/10 dark:to-transparent
            rounded-full
            blur-3xl"
        />
      </div>

      <div 
        className="fixed inset-0 opacity-[0.08] mix-blend-overlay
          bg-[url('/noise.svg')] bg-repeat bg-[length:128px_128px]
          pointer-events-none" 
      />

      <article className="relative max-w-4xl mx-auto px-8 py-24">
        <div className="prose prose-lg dark:prose-invert 
          prose-headings:font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif]
          prose-p:font-spectral prose-p:text-gray-800/90 dark:prose-p:text-gray-200/90
          prose-a:text-blue-600 dark:prose-a:text-blue-400
          prose-strong:text-gray-900 dark:prose-strong:text-gray-100
          prose-blockquote:border-gray-200 dark:prose-blockquote:border-gray-800
          prose-code:text-gray-900 dark:prose-code:text-gray-100
          prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900
          prose-hr:border-gray-200 dark:prose-hr:border-gray-800
          transition-colors duration-300">
          
          <header>
            <div className="mb-3">
              <h1 className="font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] text-[44px] 
                font-semibold tracking-[-0.5px] leading-[1.1] 
                text-gray-900 dark:text-gray-100">
                where connection went
              </h1>
            </div>
            
            <p className="font-spectral text-[17px] leading-[1.6] 
              text-gray-500/80 dark:text-gray-400/80 italic font-light
              tracking-wide mb-4">
              re: technology, how do we fix our ability to receive fulfilling social reward?
            </p>

            <div className="mb-3">
              <MetadataBar />
            </div>

            <div className="mb-8">
              <DateGroup />
            </div>
          </header>

          <div className="prose-container">
            <FadeInSection>
        <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
          puzzle: despite billions $ + decades of attempts, no social platform provides <i>sustainably</i> <FootnoteReference id="goodharts_law" />satisfying social rewards. the graveyard is large (rip <i>clubhouse, houseparty, among us, vine, google+</i>) <FootnoteReference id="timeline_metrics" /> plenty create initial satisfaction but they inevitably degrade. <strong>why?</strong> <FootnoteReference id="core_mechanism" />
        </p>
        <FadeInSection>
          <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
            the easy answers don't quite satisfy<FootnoteReference id="unsolvable"></FootnoteReference>:
          </p>
          <p className="font-spectral text-[1.125rem] leading-[1.8] mb-2 text-gray-800 dark:text-gray-200 font-normal">
            <span className="font-spectral"><em>"just build better algorithms!"</em></span> → falls apart due to game theoretic equilibria. can't solve the fundamental information density problem, not convinced any amount of ml can create intimacy from likes. 
          </p>
          <p className="font-spectral text-[1.125rem] leading-[1.8] mb-2 text-gray-800 dark:text-gray-200 font-normal">
            <span className="font-spectral"><em>"focus on irl relationships!"</em></span> → fails due to network effects and reward flattening. 
          </p>
          <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
            <span className="font-spectral"><em>"add friction/limits!"</em></span> → users optimize around limits. competitors remove them. can't self-regulate. 
          </p>
          <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
            we know there's a very obvious mismatch between our evolved social reward circuitry and artificial constraints of digital interaction spaces.
          </p>
        </FadeInSection>
      </FadeInSection>
      <FadeInSection></FadeInSection>

<FadeInSection>
        <div className="space-y-8 my-12">
          <p className="font-spectral text-[1.125rem] leading-[1.8] text-gray-800 dark:text-gray-200">
            thinking about this in information theoretic terms:
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-6">
            <div className="flex items-baseline space-x-4">
              <span className="w-48 font-mono text-gray-700 dark:text-gray-300">like on twitter</span>
              <span className="text-gray-500 dark:text-gray-400">=</span>
              <span className="font-mono text-gray-700 dark:text-gray-300">~1 bit</span>
            </div>
            
            <div className="flex items-baseline space-x-4">
              <span className="w-48 font-mono text-gray-700 dark:text-gray-300">genuine smile</span>
              <span className="text-gray-500 dark:text-gray-400">=</span>
              <span className="font-mono text-gray-700 dark:text-gray-300">10-15 bits</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 italic">(timing/intensity/micro-expressions)</span>
            </div>
            
            <div className="flex items-baseline space-x-4">
              <span className="w-48 font-mono text-gray-700 dark:text-gray-300">conversation</span>
              <span className="text-gray-500 dark:text-gray-400">=</span>
              <span className="font-mono text-gray-700 dark:text-gray-300">100s-1000s bits</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="space-y-8 my-12">
          <p className="font-spectral text-[1.125rem] leading-[1.8] text-gray-800 dark:text-gray-200">
            as john salvatier noted in <a href="http://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail" className="text-blue-600 hover:underline">reality has a surprising amount of detail</a>  <FootnoteReference id="johnsalvatier2017" />, seemingly simple interactions contain so much more information than we consciously process and this might help explain why digital approximations often feel hollow—they're missing countless subtle signals we've evolved to expect. this clicked for me when thinking about gifts as a lens into information density gradients. compare:
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="space-y-8 my-12">
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-6">
            <div className="flex items-baseline space-x-4">
              <span className="w-48 font-mono text-gray-700 dark:text-gray-300">$50 gift card</span>
              <span className="text-gray-500 dark:text-gray-400">=</span>
              <span className="font-mono text-gray-700 dark:text-gray-300">1 bit</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 italic">("remembered")</span>
            </div>
            
            <div className="flex items-baseline space-x-4">
              <span className="w-48 font-mono text-gray-700 dark:text-gray-300">specific book on interest</span>
              <span className="text-gray-500 dark:text-gray-400">=</span>
              <span className="font-mono text-gray-700 dark:text-gray-300">~100 bits</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 italic">("i listened")</span>
            </div>
            
            <div className="flex items-baseline space-x-4">
              <span className="w-48 font-mono text-gray-700 dark:text-gray-300">candid photo album</span>
              <span className="text-gray-500 dark:text-gray-400">=</span>
              <span className="font-mono text-gray-700 dark:text-gray-300">10k+ bits</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 italic">("present for small moments and i care")</span>
            </div>
          </div>
        </div>
      </FadeInSection>

<FadeInSection>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    covid era as a natural experiment:
    <p className="font-spectral text-[1.125rem] leading-[1.8] text-gray-800 dark:text-gray-200">
           the pandemic was an interesting test of some of this. looking back there were a lot of things that didn't quite fit the models we had:
          </p>
    <ul className="list-disc pl-5">
      <li>
        zoom felt <a href="https://tmb.apaopen.org/pub/nonverbal-overload/release/2" target="_blank" rel="noopener noreferrer" className="text-blue-600">worse</a> despite less total interaction. <FootnoteReference id="lockdown_experiment" />
      </li>
      <li>
        gaming communities <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10572799/" target="_blank" rel="noopener noreferrer" className="text-blue-600">reported</a> <em>increased</em> satisfaction.
      </li>
      <li>
        video calls are theoretically higher bandwidth but felt worse (anecdotal).
      </li>
    </ul>
  </p>
</FadeInSection>

<FadeInSection>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    contradiction? or reveals something about what matters. personal anecdote: during isolation, I discovered something unexpected: long phone calls while walking became my deepest form of connection. not quick catch-ups rushed between meetings or classes, but 3-5 hour conversations with family and friends (including ones I'd struggled to meaningfully connect with due to geographic distance). what's counterintuitive isn't that these calls worked – they worked better than pre-pandemic interactions. without the pressure of limited time or the distractions of a physical setting, conversations reached surprising depths. key differences:
  </p>
  <ul className="list-disc pl-5 mb-8">
    <li>removal of visual attention demands</li>
    <li>parallel physical activity</li>
    <li>time zone differences creating unusual interaction windows</li>
    <li>forced removal of usual social alternatives</li>
  </ul>
</FadeInSection>

<FadeInSection>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    platforms seem to misunderstand how human connection works. they focus on delivering discrete high-intensity moments for connection—comments, facetimes, livestreams, etc. but if we think to prehistoric humans, connection came from simply being around each other, and as a result, our evolved reward circuitry would expect a continuous low-bandwidth presence. existing in the same space, sharing the quiet moments, feeling plugged into each other's lives. this isn’t about dopamine hits vs. “real” interactions. specifically, i mean: social bonds via ambient presence, not scheduled intensity. feeling connected to our people, so maybe connection strength is better modeled as an integral over time rather than a sum of peak moments.
  </p>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
we could think about connection strength as an integral over time? something like:

    <br />
    <span className="font-mono text-gray-900 dark:text-gray-100">
      connection_strength = (∆U/∆t)dt
    </span>
    <br />
    where ∆U = reduction in uncertainty about other's mental state..
  </p>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    connection then isn't about the intensity of individual interactions, but the continuous reduction of uncertainty about each other over time. it's not how much you learn in any moment, but how that understanding accumulates.
  </p>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    somewhat unrelated, but personally i’ve felt that a good litmus test for what deep relationships should aspire to isn't shared experiences or time spent, but building an accurate model of someone's inner world. like “perfect information” but for emotional states. my closest relationships are the ones where i can predict reactions, navigate complex emotions safely, and understand unspoken thoughts. this is why close friends can savage each other, but less close friends and acquaintances would never insult each other. this might explain our deep attachments to fictional characters and even favorite youtubers. we literally know their inner worlds better than most people in our actual lives. younger me felt closer to rand al'thor than many irl classmates for exactly this reason.
  </p>
  <FadeInSection>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    the framework explains:
  </p>
  <ul className="list-disc pl-5 mb-8 font-spectral text-[1.125rem] leading-[1.8] text-gray-800 dark:text-gray-200">
    <li>why parasocial relationships feel real (high ∆U through exposure)</li>
    <li>why intense short interactions don't create lasting closeness (insufficient integration)</li>
    <li>why walking calls > video (lower cog load = better processing of subtle signals)</li>
  </ul>
</FadeInSection>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    it’s like the difference between processed food and real nutrition. current platforms provide "empty social calories"—immediate reward without satisfaction.
  </p>
</FadeInSection>

<FadeInSection>
  <h2 className="font-spectral text-[1.5rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    the future
  </h2>
</FadeInSection>

<FadeInSection>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
I think bereal was the most interesting social app of the last 5 yrs and I used it almost daily in 2022-23. skeptics correctly predicted it's failure, but they were wrong about it being the newest photos app wrapper. it was the first social product that got tens of millions of people to share normal moements over highlights. the app eventually died, but it proved something important: people are hungry for authentic digital connection. we just haven't built the right thing yet, and i think we're getting closer.
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    the misalignment in current social platforms isn't technological but neurological—we've built systems optimized for dopaminergic spike-based engagement (maybe read connection?) when our social reward circuitry evolved for tonic, not phasic, activation patterns. Cf. <a href="https://pubmed.ncbi.nlm.nih.gov/18662717/" target="_blank" rel="noopener noreferrer" className="text-blue-600">dunbar's</a> work on grooming behavior in primates → sustained low-intensity social bonding creates stronger neural coupling than intermittent high-intensity interactions. bereal's accidental insight: by forcing synchronous, mundane sharing, it approximates the background presence that characterizes natural social groups. but this is just touching the surface of a deeper principle about human-computer interaction... (add more here?)
  </p>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    watching how gen-z uses tech gives us clues: we oft keep facetimes running while studying just to feel present and connected analagous to how primates maintain cohesion through awareness rather than direct interaction. similarly, the rise of virtual coworking points the same way. See <a href="https://focusmate.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">focusmate.com</a>, <a href="https://cofocus.one" target="_blank" rel="noopener noreferrer" className="text-blue-600">cofocus.one</a>, <a href="https://timeivy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">timeivy.com</a>. our current social platforms are operating in a local maxima that fails to account for deep structure in human sociality, however the uptick of these examples suggests strong selection pressure for tools that better match our evolved social architectures.
  </p>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    key questions to revisit:
  </p>
  <ul className="list-disc pl-5 mb-8 font-spectral text-[1.125rem] leading-[1.8] text-gray-800 dark:text-gray-200">
    <li>what's the minimum information density threshold for satisfaction?</li>
    <li>how to measure/optimize context preservation?</li>
    <li>is "perfect" digital social reward theoretically possible?</li>
  </ul>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    random thought to come back to: spacing effects seem important. but mechanics seem unclear
    connection to memory consolidation? spaced repetition? 
    <br /><br />
    feels like we're finally starting to understand core principles. next wave of social tech might actually work with rather than against evolved architecture.
    <br /><br />
    question: what would "human-aligned" social platform primitives look like? start from first principles rather than engagement metrics.
  </p>
</FadeInSection>

<FadeInSection>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    other thoughts:
  </p>
  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    we can think about connection strength as an integral over time? something like:
    <br />
    <span className="font-mono text-gray-900 dark:text-gray-100">
      S(t) = ∫ q(t) · v(t) dt
    </span>
    <br />
    where q(t) is quality of interaction and v(t) is... vulnerability? authenticity? something like that. how "real" the interaction feels.
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    breaking down q(t) further: 
    <br />
    <span className="font-mono text-gray-900 dark:text-gray-100">
      q(t) = b(t) · (1 - l(t)) · m(t)
    </span>
    <br />
    where:
    <ul className="list-disc pl-5 mb-8">
      <li><span className="font-semibold">b(t)</span>: bandwidth (bits/sec)</li>
      <li><span className="font-semibold">l(t)</span>: cognitive load (0 to 1)</li>
      <li><span className="font-semibold">m(t)</span>: shared context</li>
    </ul>
    this feels right intuitively... high bandwidth doesn't help if cognitive load is too high (hello zoom fatigue) or if you're missing context.
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    interesting implication: you can accumulate more connection with low bandwidth + low load over time vs high bandwidth + high load in bursts. matches the walking calls observation.
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    thinking about bandwidth based on miller's ±7 stuff <FootnoteReference id="miller1956" />.
    <br />
    text: maybe 2-5 bits/sec
    <br />
    voice: ~20-40 bits/sec  (speech rate ~150 wpm × ~6 bits per word)
    <br />
    video: theoretically 50-100+ (facial expressions + body language + voice)
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    but raw bandwidth is reductive. there's probably a utilization function.
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    <span className="font-mono text-gray-900 dark:text-gray-100">
      u(b) = min(b, k·(1-l(t)))
    </span>
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    where k is how much we can actually process (~40-60 bits/sec?).
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
  this might explain why voice feels better than video (at least for me) which initially seemed counterintuitive. the raw bandwidth is higher with video (~50-100 bits/sec). probably relates to attention economics: video demands constant visual processing overhead while voice allows you full focus on the conversation's content. mirrors findings from blind musical auditions and voice-only negotiations outperforming face-to-face interaction <FootnoteReference id="goldin2000" /> <FootnoteReference id="mehrabian1971" />. i suspect this effect is amplified for those of us with adhd-type attention allocation - the high task-switching penalties make purely auditory input more efficient, though i acknowledge this is mostly personal observation mapped onto known mechanisms <FootnoteReference id="callstudy" />. the rapid growth of podcasts (~135m monthly listeners above 12 yrs in 2024) <FootnoteReference id="edison2024" /> could suggest that perhaps we're collectively discovering that voice hits a sweet spot in the attention-bandwidth trade-off, for complex information processing. though one wonders if podcast listeners skew toward certain cognitive styles...
</p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    the vulnerability/authenticity thing 
    <br />
    <span className="font-mono text-gray-900 dark:text-gray-100">
      v(t) = v0 · (1 + ln(1 + T))
    </span>
    <br />
    where T is cumulative "real" interaction time. 
    <br />
    logarithmic because deep connections keep growing but with diminishing returns?
  </p>

  <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
    this actually explains a decent amount:
    <ul className="list-disc pl-5 mb-8">
      <li>why bereal felt different (synchronized context, lower cognitive load, higher authenticity)</li>
      <li>why discord communities are great (sustained low-bandwidth presence, strong context)</li>
      <li>why instagram feels empty (high bandwidth but low authenticity, poor context preservation)</li>
      </ul>
          </p>
        </FadeInSection>

        {/* Add Footnotes inside a FadeInSection to match the style */}
        <FadeInSection>
          <Footnotes />
        </FadeInSection>
      </div>
    </div>
  </article>
</div>
  );
};

export default WhereConnectionWentPost;