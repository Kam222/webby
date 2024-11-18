import { motion } from 'framer-motion';

export const SectionNav = ({ sections, activeSection, sectionProgress }) => {
  return (
    <nav className="space-y-3">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className={`
            group relative px-4 py-2
            ${activeSection === section.id ? 'text-blue-600' : 'text-gray-500'}
          `}
        >
          {/* Progress indicator */}
          {activeSection === section.id && (
            <motion.div 
              className="absolute left-0 top-0 w-[2px] h-full bg-blue-600/30"
              layoutId="activeSection"
            />
          )}
          
          <div className="space-y-1">
            <div className="font-['Berkeley_Mono'] text-[10px] uppercase tracking-wider opacity-60">
              {section.type}
            </div>
            <div className="font-serif text-sm">
              {section.title}
            </div>
          </div>
        </motion.div>
      ))}
    </nav>
  );
}; 