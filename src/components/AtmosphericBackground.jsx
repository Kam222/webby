import { motion } from 'framer-motion';

export const AtmosphericBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 
        bg-gradient-to-b from-white via-gray-50/30 to-gray-100/20
        dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950
        transition-colors duration-700"
      />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left orb */}
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4
            bg-gradient-radial from-blue-50/40 via-transparent to-transparent
            dark:from-blue-950/30 dark:via-transparent dark:to-transparent
            blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Bottom right orb */}
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4
            bg-gradient-radial from-purple-50/40 via-transparent to-transparent
            dark:from-purple-950/30 dark:via-transparent dark:to-transparent
            blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay
          bg-[url('/noise.svg')] bg-repeat bg-[length:128px_128px]
          animate-subtle-drift pointer-events-none" 
      />
    </div>
  );
}; 