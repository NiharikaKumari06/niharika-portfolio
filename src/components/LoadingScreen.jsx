import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-white dark:bg-ink-950"
    >
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent-500">
        loading_portfolio.py
      </div>
      <div className="flex items-center gap-3">
        <span className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
          Niharika Kumari
        </span>
        <span className="h-6 w-[2px] animate-blink bg-accent-500" />
      </div>
      <div className="mt-2 h-1 w-40 overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
        <motion.div
          className="h-full bg-accent-500"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
