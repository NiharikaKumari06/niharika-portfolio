import React from 'react';
import { FiLinkedin, FiGithub, FiMail, FiDownload, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-12 bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="w-7 h-7 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-black shadow-md shadow-brand-600/30">
                NK
              </span>
              <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Niharika Kumari
              </p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Business Analyst • Data Analyst • Python Developer
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              title="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              download="Niharika_Kumari_Resume.pdf"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              title="Download Resume"
            >
              <FiDownload className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white transition-all ml-2"
              title="Back to Top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
          <p>&copy; {currentYear} Niharika Kumari. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS • Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}