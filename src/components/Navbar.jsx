import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

export default function Navbar({ darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-darkBg/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Monogram */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-500 dark:from-brand-400 dark:to-indigo-400 flex items-center gap-1.5"
            >
              <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-black shadow-md shadow-brand-600/30">
                NK
              </span>
              <span className="hidden sm:inline font-bold text-slate-900 dark:text-white">
                Niharika Kumari
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download="Niharika_Kumari_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Shell Controls */}
          <div className="flex items-center md:hidden space-x-3">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-darkBg/95 backdrop-blur-md transition-all shadow-xl">
          <div className="px-4 pt-2 pb-5 space-y-1 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                download="Niharika_Kumari_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 text-white shadow-md"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}