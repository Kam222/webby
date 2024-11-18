import { motion } from 'framer-motion';

export const AbstractBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Test with a very obvious change first */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900" />
      
      {/* Add one very visible element */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full" />
      </motion.div>
    </div>
  );
};