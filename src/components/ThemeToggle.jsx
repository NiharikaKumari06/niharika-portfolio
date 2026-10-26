import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-105 transition-all duration-200 shadow-sm"
      aria-label="Toggle structural display mode"
    >
      {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  );
}