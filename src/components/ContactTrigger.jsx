import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, Phone, Check, Copy } from 'lucide-react';

const ContactTrigger = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const timeoutRef = useRef(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  const handleCopy = async (text, type) => {
    await navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  
  return (
    <span className="relative inline-block">
      <span 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative font-mono text-sm text-gray-600/90 dark:text-gray-300/90 tracking-[0.2px] leading-[1.7] cursor-pointer"
      >
        let's talk
        <motion.span 
          className="absolute -inset-x-2 -inset-y-1 bg-gray-100/80 dark:bg-gray-800/30 rounded-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="inline-block ml-1 text-gray-400 dark:text-gray-500"
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-0 mt-1 w-24 p-1 bg-white/80 dark:bg-[#0A0F1E]/80 rounded-lg shadow-sm dark:shadow-2xl border border-gray-200/10 dark:border-gray-700/20 backdrop-blur-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="space-y-0.5">
              <div className="group flex items-center justify-between px-1 py-1 text-sm text-gray-600/90 dark:text-gray-300/90 hover:bg-gray-100/80 dark:hover:bg-gray-800/30 rounded-md transition-all duration-200">
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                  <span className="font-mono text-[12px]">email</span>
                </div>
                <button
                  onClick={() => handleCopy('khalidalimm.2@gmail.com', 'email')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1"
                >
                  {copiedEmail ? (
                    <Check className="w-3 h-3 text-green-500" />
                  ) : (
                    <Copy className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
              </div>
              
              <a
                href="https://calendly.com/khalidam/mtng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-1 py-1 text-sm text-gray-600/90 dark:text-gray-300/90 hover:bg-gray-100/80 dark:hover:bg-gray-800/30 rounded-md transition-all duration-200"
              >
                <Calendar className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                <span className="font-mono text-[12px]">meet</span>
              </a>

              <div className="group flex items-center justify-between px-1 py-1 text-sm text-gray-600/90 dark:text-gray-300/90 hover:bg-gray-100/80 dark:hover:bg-gray-800/30 rounded-md transition-all duration-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                  <span className="font-mono text-[12px]">call</span>
                </div>
                <button
                  onClick={() => handleCopy('+17633278945', 'phone')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1"
                >
                  {copiedPhone ? (
                    <Check className="w-3 h-3 text-green-500" />
                  ) : (
                    <Copy className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default ContactTrigger; 