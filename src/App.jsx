import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Stars } from 'lucide-react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import PostsV2 from './pages/PostsV2';
import { MarginNote } from './components/MarginNote';
import concepts from './data/concepts';
import CVPage from './pages/CVPage';
import { AtmosphericBackground } from './components/AtmosphericBackground';
import { ThemeToggle } from './components/ThemeToggle';
import ManifestoDraft from './pages/posts/ManifestoDraft.jsx';
import IagoPost from './pages/posts/IagoPost.jsx';
import LettingGoPost from './pages/posts/LettingGoPost.jsx';
import SeamlessnessPost from './pages/posts/SeamlessnessPost';
import Research from './pages/Research';
import ContactTrigger from './components/ContactTrigger';
import TypewriterText from './components/TypewriterText';
import WhereConnectionWentPost from './pages/posts/WhereConnectionWentPost'; 

// Enhanced theme system with reading modes
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('--bg-primary', 'hsl(222, 47%, 8%)');
      root.style.setProperty('--bg-secondary', 'hsl(222, 47%, 10%)');
      
      root.style.setProperty('--text-primary', 'hsl(220, 25%, 98%)');
      root.style.setProperty('--text-secondary', 'hsl(220, 20%, 85%)');
      root.style.setProperty('--text-tertiary', 'hsl(220, 15%, 65%)');
      
      root.style.setProperty('--accent-primary', 'hsl(220, 95%, 85%)');
      root.style.setProperty('--accent-secondary', 'hsl(220, 90%, 75%)');
      
      root.style.setProperty('--hover-bg', 'hsl(222, 47%, 15%)');
      
      root.style.setProperty('--glow-sm', '0 0 15px hsla(220, 100%, 90%, 0.1)');
      root.style.setProperty('--glow-md', '0 0 20px hsla(220, 100%, 90%, 0.15)');
    } else {
      root.classList.remove('dark');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--text-tertiary');
      root.style.removeProperty('--accent-primary');
      root.style.removeProperty('--accent-secondary');
      root.style.removeProperty('--hover-bg');
      root.style.removeProperty('--glow-sm');
      root.style.removeProperty('--glow-md');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

// Keep the existing ConceptText component definition in App.jsx
const ConceptText = ({ text, concept }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = (e) => {
    document.documentElement.style.setProperty('--mouse-y', `${e.target.getBoundingClientRect().top}px`);
    setIsHovered(true);
  };
  
  return (
    <span 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`
        relative
        border-b
        border-gray-200 dark:border-gray-700
        border-dotted
        transition-all duration-300
        cursor-help
        ${isHovered ? 'text-blue-600 dark:text-blue-400 border-blue-400' : ''}
      `}>
        <span className="cursor-default select-none">
          {text}
        </span>
        <motion.span
          className="absolute -inset-x-1 -inset-y-0.5 bg-gray-50 dark:bg-gray-800/50 rounded-sm -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </span>
      
      <MarginNote isVisible={isHovered} content={concept} />
    </span>
  );
};

// Add this line to export ConceptText
export { ConceptText };

// Then, create a Books component
const Books = () => (
  <div className="relative max-w-4xl mx-auto px-12 py-16 lg:pl-32">
    <div className="prose dark:prose-invert">
      <h1 className="font-mono text-2xl">Books</h1>
      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
        Coming soon...
      </p>
    </div>
  </div>
);

function App() {
  const [theme, setTheme] = useTheme();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const currentPath = location.pathname;

  // Parallax effect for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dynamic background position based on scroll
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '20%']);

  // Move useEffect outside of Route
  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'khalid ali';
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative 
      transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
      bg-gradient-to-b from-[#FCFCFC] via-[#FAFAFA] to-[#F8F8F8]
      dark:from-[var(--bg-primary)] dark:via-[var(--bg-secondary)] dark:to-[hsl(222,47%,12%)]">
      {/* Refined base gradient - more paper-like in light, deeper in dark */}
      <div className="fixed inset-0 
        bg-gradient-to-b from-[#FCFCFC] via-[#FAFAFA] to-[#F8F8F8]
        dark:from-[#0A0F1E] dark:via-[#0C1124] dark:to-[#0E1329]
        transition-colors duration-700"
      />

      {/* Atmospheric Elements Container */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Warm Orb */}
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

        {/* Cool Orb */}
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

      {/* Subtle grain texture */}
      <div 
        className="fixed inset-0 opacity-[0.08] mix-blend-overlay
          bg-[url('/noise.svg')] bg-repeat bg-[length:128px_128px]
          pointer-events-none" 
      />

      {/* Content */}
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 z-50">
          {/* Even more gradual fade with multiple stops */}
          <div className="absolute inset-0 
            bg-gradient-to-b
            from-[#FAFAF9]/60 
            via-[#FAFAF9]/55 via-[#FAFAF9]/45 
            to-[#FAFAF9]/0
            dark:from-[#0A0F1E]/60 
            dark:via-[#0A0F1E]/55 dark:via-[#0A0F1E]/45 
            dark:to-[#0A0F1E]/0
            backdrop-blur-[20px]" 
          />
          
          <nav className="relative max-w-4xl mx-auto px-12 lg:pl-32 h-[60px] flex items-center">
            <div className="flex items-center space-x-8 font-mono text-sm tracking-[0.3px]">
              <Link 
                to="/" 
                className={`text-[#262626]/80 dark:text-[#E5E5E5]/80 hover:text-[#262626] dark:hover:text-[#E5E5E5] transition-colors duration-300
                  ${currentPath === '/' ? 'text-[#262626] dark:text-[#E5E5E5]' : ''}`}>
                home
              </Link>
              <Link 
                to="/cv" 
                className={`text-[#262626]/80 dark:text-[#E5E5E5]/80 hover:text-[#262626] dark:hover:text-[#E5E5E5] transition-colors duration-300
                  ${currentPath === '/cv' ? 'text-[#262626] dark:text-[#E5E5E5]' : ''}`}>
                cv
              </Link>
              <Link 
                to="/posts" 
                className={`text-[#262626]/80 dark:text-[#E5E5E5]/80 hover:text-[#262626] dark:hover:text-[#E5E5E5] transition-colors duration-300
                  ${currentPath === '/posts' ? 'text-[#262626] dark:text-[#E5E5E5]' : ''}`}>
                posts
              </Link>
              <Link 
                to="/books" 
                className={`text-[#262626]/80 dark:text-[#E5E5E5]/80 hover:text-[#262626] dark:hover:text-[#E5E5E5] transition-colors duration-300
                  ${currentPath === '/books' ? 'text-[#262626] dark:text-[#E5E5E5]' : ''}`}>
                books
              </Link>
            </div>
            <div className="ml-auto">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </nav>
        </div>

        <div className="pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <Routes location={location}>
                <Route path="/" element={
                  <div className="relative max-w-4xl mx-auto px-12 py-16 lg:pl-32">
                    <main className="space-y-8">
                      <div className="mb-[30px]">
                        <h1 className="font-[-apple-system,BlinkMacSystemFont,'Inter',sans-serif] text-[32px] font-semibold tracking-[-0.5px] text-gray-900 dark:text-white">
                          Hi, I'm Khalid.
                        </h1>
                      </div>
                      
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.2, 0.65, 0.3, 0.9]
                        }}
                      >
                        <p className="font-mono text-sm text-gray-600 dark:text-gray-300 tracking-[0.2px] leading-[1.7]">
                          I'm a researcher, programmer, artist, and writer.
                        </p>

                        <p className="font-mono text-sm text-gray-600 dark:text-gray-300 tracking-[0.2px] leading-[1.7]">
                          Lately, I've been thinking a lot about{' '}
                          <ConceptText text="legal architectures" concept={concepts.legalArchitectures} />,{' '}
                          <ConceptText text="governance entropy" concept={concepts.governanceEntropy} />,{' '}
                          <ConceptText text="decision boundaries" concept={concepts.decisionBoundaries} />, and{' '}
                          <ConceptText text="transitions" concept={concepts.transitions} />.
                        </p>

                        <p className="font-mono text-sm text-gray-600 dark:text-gray-300 tracking-[0.2px] leading-[1.7]">
                          Depending on when you're reading this, I'm working on developing frameworks for compute attribution in AI systems, 
                          examining how technical and legal definitions of computational resource usage can be reconciled in ways that are 
                          both meaningful and enforceable.
                        </p>

                        <p className="font-mono text-sm text-gray-600 dark:text-gray-300 tracking-[0.2px] leading-[1.7]">
                          Prior to this, I was a student at the University of Minnesota where I studied politics, philosophy and econ.
                        </p>

                        <p className="font-mono text-sm text-gray-600 dark:text-gray-300 tracking-[0.2px] leading-[1.7]">
                          Feel free to poke around this website, which serves as a sampling of what I am currently reading, writing, and thinking about.
                        </p>

                        <p className="font-mono text-sm text-gray-600 dark:text-gray-300 tracking-[0.2px] leading-[1.7]">
                          If what you find interests you, <ContactTrigger />
                        </p>
                      </motion.div>
                    </main>
                  </div>
                } />
                <Route path="/posts" element={<PostsV2 />} />
                <Route path="/posts/iago-wasnt-evil" element={<IagoPost />} />
                <Route path="/cv" element={<CVPage />} />
                <Route path="/books" element={<Books />} />
                <Route path="/posts/manifesto-draft" element={<ManifestoDraft />} />
                <Route path="/posts/letting-go" element={<LettingGoPost />} />
                <Route path="/posts/seamlessness-post" element={<SeamlessnessPost />} />
                <Route path="/posts/where-connection-went" element={<WhereConnectionWentPost />} />
                <Route path="/research" element={<Research />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;