import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-darkBg z-[9999] flex flex-col items-center justify-center text-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-16 h-16 border-4 border-brand-600 rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.h2 
          className="mt-6 text-xl font-bold tracking-widest text-brand-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          NIHARIKA KUMARI
        </motion.h2>
        <span className="text-xs text-slate-400 mt-2 font-medium tracking-wide">Loading Portfolio...</span>
      </div>
    </motion.div>
  );
}