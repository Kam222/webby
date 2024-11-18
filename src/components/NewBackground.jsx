import { motion } from 'framer-motion';

export const NewBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Enhanced atmospheric background */}
      <div className="absolute inset-0 
        bg-gradient-to-b from-white via-gray-50/30 to-gray-100/20
        dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950
        transition-all duration-1000"
      >
        {/* Enhanced atmospheric orbs with subtle animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/2 -left-1/2 w-full h-full 
              bg-gradient-radial from-gray-100/60 via-white/10 to-transparent
              dark:from-blue-950/20 dark:via-slate-900/5 dark:to-transparent
              rotate-12 transform-gpu blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.6, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-1/2 -right-1/2 w-full h-full
              bg-gradient-radial from-gray-50/40 via-white/20 to-transparent  
              dark:from-slate-900/30 dark:via-slate-900/10 dark:to-transparent
              -rotate-12 transform-gpu blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Enhanced grain texture with animation */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay
          bg-[url('/noise.svg')] bg-repeat bg-[length:128px_128px]
          animate-subtle-drift" 
        />
      </div>
    </div>
  );
}; 