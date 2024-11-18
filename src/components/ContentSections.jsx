import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Book, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const ContentSections = ({ sections, setActiveNote, setActiveSection }) => {
  return (
    <div className="space-y-24">
      {/* Technical Development Section */}
      <Section
        id="technical"
        onInView={() => setActiveSection('technical')}
      >
        <h2 className="text-xl font-light text-gray-700 dark:text-gray-200 mb-6">
          Technical Development & Specialization
        </h2>
        <div className="space-y-6">
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <ListItem 
              onMouseEnter={() => setActiveNote('waltz')}
              text="Mastered intricate dialogue between musical interpretation and movement in Waltz and Quickstep"
            />
            <ListItem 
              onMouseEnter={() => setActiveNote('partnership')}
              text="Developed partnership with C. Schultz (~3 years), culminating in multiple national titles"
            />
            <ListItem 
              onMouseEnter={() => setActiveNote('apprenticeship')}
              text="Trained under Michael Johnson — a uniquely illuminating apprenticeship transforming understanding of movement theory and dance architecture"
            />
          </ul>
        </div>
      </Section>

      {/* Movement Theory Section */}
      <Section
        id="movement"
        onInView={() => setActiveSection('movement')}
      >
        <h2 className="text-xl font-light text-gray-700 dark:text-gray-200 mb-6">
          Movement Theory Development
        </h2>
        <div className="space-y-6">
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <ListItem 
              onMouseEnter={() => setActiveNote('timing')}
              text="Systematic deconstruction of American Smooth's jazz-influenced timing patterns, traceable to Arthur Murray - Vernon Castle lineage"
            />
            <ListItem 
              onMouseEnter={() => setActiveNote('mechanics')}
              text="Integration of classical English frame mechanics with American innovation in movement cycles"
            />
            <ListItem 
              onMouseEnter={() => setActiveNote('dynamics')}
              text="Counter-intuitive insights into metronomic and pendular swing dynamics derived from decades of champion development"
            />
          </ul>
        </div>
      </Section>

      {/* Competitive History Section */}
      <Section
        id="competitive"
        onInView={() => setActiveSection('competitive')}
      >
        <h2 className="text-xl font-light text-gray-700 dark:text-gray-200 mb-6">
          Competitive Trajectory
        </h2>
        <Card className="bg-blue-50/50 dark:bg-blue-950/20 border-none">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <Achievement
                onMouseEnter={() => setActiveNote('novice')}
                icon={<Award className="w-4 h-4 text-blue-600" />}
                text="Adult Novice Final (6th) — competed against mean experience level of 11.5 years (our experience: 2 years)"
              />
              <Achievement
                onMouseEnter={() => setActiveNote('ranking')}
                icon={<Award className="w-4 h-4 text-blue-600" />}
                text="Highest collegiate ranking nationally while both still undergraduates"
              />
              <Achievement
                onMouseEnter={() => setActiveNote('champion')}
                icon={<Award className="w-4 h-4 text-blue-600" />}
                text="Collegiate National Champions (American Smooth)"
              />
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

// Helper Components
const Section = ({ children, id, onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {children}
    </motion.section>
  );
};

const ListItem = ({ text, onMouseEnter }) => (
  <li 
    className="flex items-start gap-2 group cursor-default"
    onMouseEnter={onMouseEnter}
  >
    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
    <span className="font-serif text-[15px] leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
      {text}
    </span>
  </li>
);

const Achievement = ({ icon, text, onMouseEnter }) => (
  <div 
    className="flex items-start gap-3 group cursor-default"
    onMouseEnter={onMouseEnter}
  >
    <span className="mt-1">{icon}</span>
    <span className="font-serif text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
      {text}
    </span>
  </div>
); 