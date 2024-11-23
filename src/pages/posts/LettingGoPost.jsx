import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeToggle } from '../../components/ThemeToggle';

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

const BlogImage = ({ src, alt, caption }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <FadeInSection delay={0.15}>
      <motion.figure 
        className="my-12 relative max-w-[500px] xl:max-w-[400px] mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ 
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <div className="relative overflow-hidden rounded-lg">
          <motion.div
            animate={imageLoaded ? { 
              scale: 1,
              opacity: 1,
              filter: "blur(0px)"
            } : { 
              scale: 1.1,
              opacity: 0,
              filter: "blur(8px)"
            }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              src={`/images/${src}`}
              alt={alt}
              className="w-full h-auto object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </div>
        {caption && (
          <motion.figcaption 
            className="text-center mt-3 text-[13px] 
              text-gray-400/60 dark:text-gray-500/60 
              font-spectral italic tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {caption}
          </motion.figcaption>
        )}
      </motion.figure>
    </FadeInSection>
  );
};

const LargeBlogImage = ({ src, alt, caption }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <figure ref={ref} className="my-16 -mx-[20vw] relative">
      <div className="relative overflow-hidden rounded-lg">
        <motion.div
          style={{ y }}
          className="will-change-transform"
        >
          <div className="relative">
            <img
              src={`/images/${src}`}
              alt={alt}
              className="w-full aspect-[3/2] object-cover rounded-lg
                shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]"
            />
            <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
          </div>
        </motion.div>
      </div>
      {caption && (
        <figcaption className="text-center mt-4
          text-[13px] text-gray-400/60 dark:text-gray-500/60 
          font-spectral italic tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const SubtleText = ({ children }) => (
  <p className="text-center font-spectral text-lg text-gray-500 dark:text-gray-400 my-16 italic leading-relaxed">
    {children}
  </p>
);

const AuthoredQuote = ({ children, author, date }) => (
  <FadeInSection delay={0.2}>
    <motion.figure 
      className="my-16 relative max-w-[650px] mx-auto px-8"
      whileInView={{ 
        opacity: [0.5, 1],
        y: [20, 0]
      }}
      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      <div 
        className="absolute top-0 left-16 right-16 h-[1px] opacity-40
          bg-gradient-to-r from-transparent via-gray-300 to-transparent
          dark:via-gray-600"
      />
      
      <blockquote className="relative pt-8 pb-6">
        <p className="font-gt-alpina text-[20px] leading-[1.8] tracking-[-0.01em]
          text-gray-700/90 dark:text-gray-200/90
          font-normal italic text-center">
          "{children}"
        </p>
        
        <div className="mt-6 flex flex-col items-center gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[13px] tracking-wider
              text-gray-400/70 dark:text-gray-500/70">
              —
            </span>
            <span className="font-mono text-[13px] tracking-wider font-medium
              text-gray-600 dark:text-gray-300">
              M. Olszewski
            </span>
          </div>
          <div className="font-mono text-[11px] tracking-wider
            text-gray-400/50 dark:text-gray-500/50">
            {date}
          </div>
        </div>
      </blockquote>

      <div 
        className="absolute bottom-0 left-16 right-16 h-[1px] opacity-40
          bg-gradient-to-r from-transparent via-gray-300 to-transparent
          dark:via-gray-600"
      />
    </motion.figure>
  </FadeInSection>
);

const MaturityDots = () => (
  <div className="flex items-center gap-2 text-gray-400/40 dark:text-gray-500/40 
    transition-opacity duration-300 hover:text-gray-500/60 dark:hover:text-gray-400/60">
    <span className="font-sohne-mono tracking-wider text-[11px]">●●○</span>
  </div>
);

const DateGroup = () => (
  <div className="flex flex-col gap-0.5">
    <time className="block font-sohne-mono text-[12px] text-gray-600 dark:text-gray-400">
      Nov 5, 2024
    </time>
    <span className="block font-sohne-mono text-[11px] text-gray-500/60 dark:text-gray-400/60">
      Last updated
    </span>
  </div>
);

const MetadataBar = () => (
  <div className="flex items-center gap-4 px-4 py-2.5 bg-black/[0.02] dark:bg-white/[0.02] 
    rounded-md font-sohne-mono text-[12px] text-gray-500/60 dark:text-gray-400/60
    transition-all duration-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]">
    <span className="lowercase">musings</span>
    <span className="text-gray-300 dark:text-gray-600">•</span>
    <span className="font-sohne-mono tracking-wider text-[10px] text-gray-400/40 dark:text-gray-500/40">●●○</span>
    <span className="text-gray-300 dark:text-gray-600">•</span>
    <span>17 min read</span>
  </div>
);

const MarginProgress = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStartedReading, setHasStartedReading] = useState(false);
  const timeoutRef = useRef(null);
  const wasComplete = useRef(false);
  
  useEffect(() => {
    let initialScroll = true;
    
    const updateReadingProgress = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - viewportHeight;
      const progress = (scrolled / totalHeight) * 100;
      
      if (initialScroll && scrolled > 100) {
        initialScroll = false;
        setHasStartedReading(true);
      }

      setReadingProgress(progress);
      setIsVisible(true);
      
      if (progress >= 99.5 && !wasComplete.current) {
        setIsComplete(true);
        wasComplete.current = true;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsVisible(false), 1500);
        return;
      } else if (progress < 95) {
        setIsComplete(false);
        wasComplete.current = false;
      }
      
      if (hasStartedReading && progress > 5) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsVisible(false), 3000);
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hasStartedReading]);

  if (!hasStartedReading) return null;

  return (
    <motion.div 
      className={`fixed right-8 top-1/2 -translate-y-1/2 hidden xl:block
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-[2px]'}`}
    >
      <div className="relative w-5 h-5">
        <motion.div 
          className="absolute inset-0 rounded-full"
          animate={isComplete ? {
            scale: [1, 1.15],
            opacity: [1, 0]
          } : {
            scale: 1,
            opacity: 1
          }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{
            background: `conic-gradient(
              from 0deg,
              var(--text-primary) ${readingProgress}%,
              transparent ${readingProgress}%
            )`
          }}
        >
          <div className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-950" />
        </motion.div>

        {isComplete && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
            }}
            transition={{ 
              delay: 0.3,
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <motion.div
              className="w-5 h-5 rounded-full border-2 
                dark:border-gray-200/90 
                border-gray-400/90"
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: [0.8, 1],
                opacity: [0, 1]
              }}
              transition={{ 
                duration: 0.4,
                delay: 0.4,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <motion.div 
                className="w-full h-full rounded-full 
                  dark:bg-gray-200/90
                  bg-gray-600/90"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.6,
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1]
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const LettingGoPost = () => {
  useEffect(() => {
    document.title = "the delicate art of letting go | khalid";
  }, []);
  
  return (
    <div className="min-h-screen relative 
      transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
      bg-gradient-to-b from-[#FCFCFC] via-[#FAFAFA] to-[#F8F8F8]
      dark:from-[var(--bg-primary)] dark:via-[var(--bg-secondary)] dark:to-[hsl(222,47%,12%)]">
      
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
                the delicate art of letting go
              </h1>
            </div>
            
            <p className="font-spectral text-[17px] leading-[1.6] 
              text-gray-500/80 dark:text-gray-400/80 italic font-light
              tracking-wide mb-4">
              within every hello, the seeds of a goodbye
            </p>

            <div className="mb-3">
              <MetadataBar />
            </div>

            <div className="mb-8">
              <DateGroup />
            </div>
          </header>

          <LargeBlogImage
            src="monkbythesea.jpeg"
            alt="The Monk by the Sea painting"
            caption="The Monk by the Sea, Caspar David Friedrich"
          />

          <div className="prose-container">
            <FadeInSection>
              <Subtitle id="quiet-arrivals">i. quiet arrivals</Subtitle>
              
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                October unravels gently. The air cools, the light shifts—changes you don't track until they're already here. 
                Leaves don't drift so much as drop. Deliberate, unhurried, final.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                Life moves like that: slow cycles of holding on and releasing. I've been thinking about this as I prepare 
                to leave Minneapolis. Departures force a certain introspection. How should one think about endings? We imagine 
                we'll know—graduations, one last hug at the airport—but most endings are sunsets. One minute, the world is 
                golden; the next, it's gone, and you're standing in the dark, wondering how you missed it.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                Yesterday, I watched a leaf fall—slow, certain. I wondered if it knew that morning would be its last connected 
                to all it had ever known. There's something unsettling in how many goodbyes slip by in the most ordinary of moments. 
                How often do we stand at the precipice of an ending, unaware? The last time you opened up to each other, the last 
                shared laugh, the final quiet drive, the last photo together. The last moment you meant to tell them they mattered—but 
                didn't. Moments rarely register as important until you're looking back, searching for the precise second it all changed.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                There's no perfect English word for it, but <span className="italic">物の哀れ mono no aware</span>—the pathos of 
                things—captures something close. It's the awareness of fragility, not with despair but reverence. Understanding that 
                their impermanence is what imbues them with meaning. It's a quiet tenderness that doesn't need healing, just 
                acknowledgment. It sits with you like an old friend, reminding you to stay present—not because you can hold the 
                moment, but because you can't.
              </p>
            </FadeInSection>

            <FadeInSection>
              <Quote>
                Not because you can hold the moment, but because you can't.
              </Quote>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                I've been thinking about this a lot lately, especially with people. There are people whom I've already seen for the last time, and I didn't know it. Think about that. Their faces, voices, little quirks that I loved about them—all now just memory. It's on my mind as I approach these last ten weeks. Time isn't distant anymore; it's compressing, running out. I want to be intentional, to make each hour fuller, more deliberate, as if that might help them last longer.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                But I know how this works: soon enough, it'll be October 2026, and I'll be looking back at this, wondering if I did enough, or if they blurred past me in the usual way.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                Maybe I should freeze this moment. I'll take a photo, a small token for my future self, sitting here, thinking about this. 
                <BlogImage 
                  src="101924lh.jpeg"
                  alt="A moment captured"
                  caption="10/19/24-LH"
                />
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                As I was saying, I want to do better. Make time for people, not just in passing, but something deliberate. I want to look back and think, <span className="italic">Glad we did that. I didn't let things slip by.</span> I want them to know I love them. Capture these days—photos, writing—not as if it could stop time, but as a way to hold it, even briefly.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                But goodbyes are funny things. You expect a kind of lightness, but each tightens the grip of what remains—the music they made me listen to, the books they placed in my hands, insisting, <span className="italic">‘This is for you.’</span> We treat these gestures as minor, but they're anything but. They're encoded—information transfers of their worldview, their inner life, compressed into objects. The book gathers dust on a shelf until the day I finally realize it wasn't a casual recommendation. It was a fragment of their identity, something that made their heart beat a little faster, and they hoped, maybe, it would do the same for you, and in that, share a part of themselves they couldn't quite express in words.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                I used to overlook this: a song or book—it seemed trivial. Now I understand it as emotional data encoded in art, preserved for future retrieval. Each of these transfers is an act of subtle self-preservation. A way to inscribe something essential from them into you, without either of you being fully aware. When you finally open that book or press play on the playlist, you're not just consuming content—you're receiving an invitation into their world, refracted through your own perspective.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                These small exchanges add up. It's easy to think they fade into irrelevance, but they don't. The book waits. The music waits. Each gesture exists in latency, a quiet potential waiting to unfold. And when it resurfaces, it's not just the object—it's the person behind it, the shared history, the exact emotional resonance you didn't realize had been sitting deep inside you.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                We embed ourselves in one another like this, in ways so subtle they go unnoticed. It isn't about legacy or memory; it's a diffusion of influence. It's how people continue on—stored in the neural architecture of others. A book handed off isn't a casual act; it's a piece of their internal model, externalized and offered to you. When you finally open it, you're updating your own mind with theirs, even if they're long gone.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                We don't notice it at the time. That's the catch. The last time you saw them didn't feel final. The goodbye wasn't significant. 
                It was another day, another interaction. But later, you realize that moment holds more weight than you gave it credit for. 
                This isn't nostalgia; it's deeper. It's realizing that what seems transient is actually foundational.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                Goodbyes carry this quiet inheritance. You walk away carrying pieces of their world, fragments of their mind encoded in trivial 
                objects and shared moments. And over time, those fragments reassemble themselves in your thoughts, guiding you in ways you never 
                consciously attribute to them. It's not linear—there's no neat timeline. These things pulse in and out of relevance, sometimes 
                long after they're gone.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                There's a kind of transcendence in this. The more connections you leave, the more of you exists in the world, not as a static 
                memory, but as living thought embedded in someone else's cognition. It's not about being remembered. It's about being part of 
                the ongoing process of someone else's life, altering their path, nudging their decisions, their worldview. You exist not as a 
                name or face but as an effect.
              </p>
            </FadeInSection>

            <FadeInSection>
              <Quote>
                Do you ever pause to wonder if a moment is the last time you'll experience something?
              </Quote>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 italic text-center font-normal">
                every now and then the universe shows off
              </p>
            </FadeInSection>

            <FadeInSection>
              <Subtitle id="objects-in-motion">ii: objects in motion</Subtitle>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                I spent a lot of my childhood bouncing between different corners of Australia, Africa, Europe, and North America. I've realized 
                the transit wasn't just between places but between selves. There's an odd disorientation that settles into you when your life 
                isn't measured in years but in departures...
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                At first, I thought that was a kind of superpower. Look at me, I thought, I can adapt to anything. Like some kind of chameleon, 
                blending into new environments, new social circles, new norms. I think this is why I bond really quickly with international school 
                kids, because they (we) all know how to wear that mask. We thrived on the illusion of rootlessness, feeling like it set us apart. 
                That we weren't bound by the constraints of nationality, or even history, the way others were. We could reinvent, restart.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                There was a certain pride in that. We'd all feel it, a camaraderie, when an adult asked, "..and where are you from?"—the question 
                that never quite fit. It was like a game. Our eyes would inevitably find each other across the classroom. I'd see them, across 
                the room, eyebrows raised, half-smiling, silent wagers being placed, waiting for my answer. Would it be the short version, or 
                the long one? As I answered, I felt their gaze—warm, expectant.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                But when I reflect on it now, there's a crack in the narrative. The idea that we could effortlessly move through these worlds, 
                that our adaptability was synonymous with strength—it was a useful story, but maybe it was also a defense mechanism. The ability 
                to leave isn't a skill; it's a habit. And habits can be destructive when they're used to avoid pain. What if all this time, 
                I've been conflating resilience with detachment? What if I didn't become more resilient with every move, but just more efficient 
                at shutting parts of myself off?
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                That raises an uncomfortable question: how much of my "adaptability" is just a more sophisticated way of running from attachment? 
                The exchanges of that knowing look every time someone asks where we were from, but there was something darker beneath it. Maybe 
                we weren't just being clever when we gave half-answers; maybe we didn't know anymore. Maybe the real answer was something like, 
                <span className="italic">I'm from wherever I'm not currently standing.</span>
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                I think about the memories we made, all the people we promised ourselves we'd stay close to. We were good at pretending the 
                distance didn't matter, as if modern technology had somehow erased geography itself. But it didn't. The connections thinned, 
                like a thread pulled taut across time zones, and eventually, it snapped.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                It's a strange kind of loneliness, realizing that the people who knew you best—really knew you—are scattered across a world 
                that you're no longer a part of. You enter someone's life, but always mid-chapter. You learn how to read the room, make 
                connections fast, but you're always conscious of the fact that you won't be around for the ending. And maybe they know it too, 
                whether they realize it or not.
              </p>
            </FadeInSection>

            <FadeInSection>
              <Quote>
                When was the last time you felt something you didn't want to end too soon?
              </Quote>
            </FadeInSection>

            <FadeInSection>
              <Subtitle id="folding-and-unfolding">iii: folding and unfolding</Subtitle>
            </FadeInSection>

            <FadeInSection>
              <AuthoredQuote author="M.O." date="February 16, 2023">
                Movement is nothing more than the endless process of folding and unfolding.
              </AuthoredQuote>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                Someday soon, it will be the last goodbye. But when it happens, it won't announce itself—no grand gesture, no epiphany. 
                It will slip past, unnoticed, and they rarely come when we're ready. They arrive unmarked, and only later, in hindsight, 
                do we realize something ended. We imagine that we will recognize these moments, that they will be saturated with meaning, 
                but life has no obligation to give us closure. Most endings, like most deaths, are quiet.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                This used to make me really sad—that we're always losing things we don't realize. But now I understand that this quiet loss 
                is just a feature of time. It is the way things are meant to be. Time doesn't ask for our permission to move forward; it 
                simply moves, indifferent to whether we are ready to go. This reframe has been helpful: time doesn't just take from us; it 
                also gives. It spreads us into the world, distributes us into a thousand different futures. What I am—the sum total of every 
                thought, every feeling, every interaction will continue to unfold, in lives we'll never see. Every choice ripples outward, 
                a pulse of causality.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                Goodbyes are fundamentally misunderstood. We think of them as endings, sharp delineations where one phase of life closes and 
                another begins, as if the self can be cut cleanly from its context and stored away in the past. But the human experience 
                doesn't really work like that. Time doesn't move in straight lines, and neither do we. The story continues without you, and 
                that's not a sad thing—it's beautiful. The moments you shared, the things you left behind—they will keep living, keep evolving, 
                long after you are gone. The people you love will move on, and that's the natural order of things. That's what life does. 
                It moves. It carries forward everything we thought we needed to cling to, but it does so without us.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                The goodbye is not an end, nor a severing. It is a transition, a quiet diffusion of the self into the future. We don't need 
                to be held onto. We only need to have been. It's not the preservation of ourselves that gives meaning to what we've shared; 
                it's the act of having shared it in the first place.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                So I guess that's what this essay boils down to, learning how to say goodbye, not just to people, but to pieces of yourself 
                and to the moments we shared that carved meaning into these years for me. I think I've realized there's no clean end, no final 
                closure. Even with the people you love the most—perhaps especially with them—the goodbye isn't all it's made out to be. They 
                don't just fade into some quiet memory bank; they stay with you, a constant, quiet presence shaping who you are, who you'll become. 
                So I know I won't truly be leaving them behind, and they won't leave me either.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p className="font-spectral text-[1.125rem] leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 font-normal">
                If there was to be any kind of takeaway, it might be that: to say goodbye correctly is an act of trust—trust in the sufficiency 
                of what has been shared, trust that you shall persist in each other's lives maybe not in the most obvious ways, but through a 
                slow, subtle unfolding of time into the endless recursion of existence.
              </p>
            </FadeInSection>

            <FadeInSection>
              <div className="flex justify-center items-center">
                <p className="font-gt-alpina text-[1.35rem] leading-[1.8] my-16 
                  text-gray-800/90 dark:text-gray-200/90 
                  italic text-center font-normal whitespace-nowrap
                  tracking-[-0.01em]">
                  There's no ending, just a quiet unfolding—an echo that lingers, soft but ever-present.
                </p>
              </div>
            </FadeInSection>

          </div> {/* End of prose-container */}
        </div>
      </article>

      <MarginProgress />
    </div>
  );
};

export default LettingGoPost;