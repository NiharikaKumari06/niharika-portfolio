import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiArrowRight, FiFileText, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Accents & Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-brand-500/10 dark:bg-brand-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-emerald-500/5 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            className="lg:col-span-7 space-y-7 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-brand-500/10 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400 font-semibold text-xs sm:text-sm border border-brand-500/20 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Business Analyst, Data Analyst & Python Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Niharika <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-500 dark:from-brand-400 dark:via-indigo-400 dark:to-brand-300">Kumari</span>
              </h1>
            </div>

            {/* Rotating Title */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 min-h-[44px] flex items-center justify-center lg:justify-start">
              <span className="mr-2 text-brand-600 dark:text-brand-400">Specializing in</span>
              <TypeAnimation
                sequence={[
                  'Business Analysis',
                  2200,
                  'Data Analytics & Modeling',
                  2200,
                  'Python & Flask Development',
                  2200,
                  'GeM Tender Compliance',
                  2200,
                  'ETL Pipeline Engineering',
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="underline decoration-brand-500/40 decoration-4 underline-offset-4"
              />
            </div>

            {/* Recruiter-tailored Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Computer Science graduate bridging technical systems and business strategy. Experienced in GeM tender compliance, scalable ETL pipeline design, relational PostgreSQL databases, and enterprise CRM workflow architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all shadow-md shadow-brand-600/25 hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Projects</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              <a
                id="btn-download-resume"
                href="/resume.pdf"
                download="Niharika_Kumari_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                <FiDownload className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                id="btn-preview-cv"
                onClick={() => setIsResumeModalOpen(true)}
                className="cursor-pointer inline-flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors"
                title="Preview full resume in browser"
              >
                <FiFileText className="w-4 h-4" />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 text-slate-500 dark:text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <FiLinkedin className="w-5 h-5" /> <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <FiGithub className="w-5 h-5" /> <span>GitHub</span>
              </a>
              <a
                href="#contact"
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <FiMail className="w-5 h-5" /> <span>Contact Direct</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Visual Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-600 to-indigo-600 opacity-20 blur-2xl transform rotate-2" />

              {/* Central Card */}
              <div className="relative rounded-3xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl space-y-6">
                {/* Monogram Badge */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-700 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow-lg shadow-brand-600/30">
                    NK
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Niharika Kumari
                    </h2>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                      B.Tech Computer Science Engineering
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <FiMapPin className="w-3 h-3 text-brand-500" /> Faridabad, Haryana, India
                    </p>
                  </div>
                </div>

                {/* Key Roles Highlights */}
                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <FiBriefcase className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">
                        Business & Data Analyst
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                        Aplus Technology Solutions (Aug 2024 – Present)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <FiAward className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">
                        Data Analyst Intern Alum
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                        National Informatics Centre (NIC, Feb – Jun 2024)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Core Competencies Quick Pills */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Primary Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'ETL Pipelines', 'GeM Bids', 'FastAPI'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/40 dark:border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
}