import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiCheckCircle, FiLayers, FiShield, FiTrendingUp, 
  FiUserCheck, FiDatabase, FiServer, FiActivity, FiExternalLink, FiGithub 
} from 'react-icons/fi';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const isCRM = project?.id === 'crm-system';

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

        {/* Modal Dialog */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/50">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                {project.category || 'Enterprise Solution'}
              </span>
              {project.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Featured System
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-700 dark:text-slate-300">
            {/* Title & Overview */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {project.desc}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                Technology Stack & Architecture
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Business Value & My Role Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.businessValue && (
                <div className="p-5 rounded-2xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/40 space-y-2">
                  <div className="flex items-center space-x-2 text-brand-700 dark:text-brand-300 font-bold text-sm">
                    <FiTrendingUp className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    <span>Business Value & Strategic Impact</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.businessValue}
                  </p>
                </div>
              )}

              {project.myRole && (
                <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-2">
                  <div className="flex items-center space-x-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm">
                    <FiUserCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>My Role & Engineering Contributions</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.myRole}
                  </p>
                </div>
              )}
            </div>

            {/* If CRM, display interactive pipeline visualizer and role matrix */}
            {isCRM && (
              <div className="space-y-6 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
                      <FiActivity className="text-brand-600" /> Opportunity Pipeline Stage Progression
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">Standardized Sales Lifecycle</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {[
                      { step: '01', name: 'New Lead', desc: 'Customer capture & intake' },
                      { step: '02', name: 'Qualified', desc: 'Requirements verification' },
                      { step: '03', name: 'Proposal', desc: 'Commercial quotation' },
                      { step: '04', name: 'Negotiation', desc: 'Terms & discount checks' },
                      { step: '05', name: 'Closed Won', desc: 'Order & account onboarding' }
                    ].map((st) => (
                      <div key={st.step} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center">
                        <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase">{st.step}</span>
                        <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">{st.name}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50 space-y-3">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
                    <FiShield className="text-brand-600" /> Role-Based Access & Opportunity Reassignment Governance
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Sales Representative</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                        Manage assigned leads, schedule customer activities, log call notes, and update own opportunity stages.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Sales Manager</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                        Review team performance metrics, inspect follow-up adherence, and initiate opportunity reallocations.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-brand-600 dark:text-brand-400">Admin / Director / MD</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                        Authorized approval required for high-stakes account reassignments, audit trails, and system governance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                Core Implemented Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800"
                  >
                    <FiCheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture / Database Schema Highlights */}
            {isCRM && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                  Backend API & Database Schema Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex space-x-3">
                    <FiDatabase className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">PostgreSQL & SQLAlchemy Models</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Relational entities for Customers, Sales Opportunities, Pipeline Stages, Activities, Users, and Roles with integrity constraints.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex space-x-3">
                    <FiServer className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Flask RESTful Endpoints</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Modular controller routes for pipeline updates, assignment actions, authorized reassignments, and metrics aggregation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 sm:px-8 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>
                {project.internalOnly 
                  ? 'Internal Enterprise Application • Architecture & Code Verified' 
                  : 'Portfolio Project • Verified Implementation'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <FiGithub /> <span>Repository</span>
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-sm"
                >
                  <FiExternalLink /> <span>Live Demo</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
