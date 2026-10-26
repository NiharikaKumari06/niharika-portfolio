import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiEye, FiCheckCircle, FiShield, FiTrendingUp, FiLayers, FiDatabase } from 'react-icons/fi';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const projectList = [
    {
      id: 'crm-system',
      title: 'CRM & Sales Pipeline Management System',
      category: 'Enterprise & CRM',
      featured: true,
      desc: 'Developed and enhanced a CRM application to help sales teams manage customer information, sales opportunities, pipeline stages, activities, and follow-ups through a centralized system.',
      features: [
        'Customer Management',
        'Sales Opportunity Management',
        'Sales Pipeline and Opportunity Status Tracking',
        'Salesperson-wise Customer and Opportunity Assignment',
        'Activity and Follow-up Management',
        'Role-Based Access Control',
        'Opportunity Reassignment with Admin, Director, and Managing Director authorization',
        'Backend API Development and Database Integration',
        'Dashboard and Sales Reporting'
      ],
      tech: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'HTML', 'CSS', 'JavaScript'],
      myRole: 'Worked on backend development, database integration, and CRM workflow implementation. Contributed to sales opportunity management and role-based authorization to ensure that sensitive operations could only be performed by authorized users.',
      businessValue: 'The system centralizes sales information, improves visibility into sales opportunities, supports follow-up management, and helps management track sales team activities.',
      internalOnly: true,
      github: '',
      live: ''
    },
    {
      id: 'tendermatch-ai',
      title: 'TenderMatch AI',
      category: 'AI & Automation',
      featured: false,
      desc: 'AI-powered tender document analysis platform that extracts technical specifications from PDF and DOCX files and matches them with complex product datasets using semantic vector analysis.',
      features: [
        'Automated PDF/DOCX Parsing',
        'NLP Engine Specification Matching',
        'Dynamic Compliance Matrix Generation'
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'PyMuPDF'],
      myRole: 'Architected tender document parsing engine using PyMuPDF and designed OpenAI vector embeddings comparison pipelines against tender technical clauses.',
      businessValue: 'Significantly reduced tender compliance verification turnaround time from days to minutes while eliminating human cross-referencing errors.',
      internalOnly: false,
      github: '',
      live: ''
    },
    {
      id: 'samsung-sellout',
      title: 'Samsung Sellout Automation',
      category: 'Data & ETL Pipelines',
      featured: false,
      desc: 'Automated strategic operational platform executing analytics over localized purchase registries, stock inventories, return logs, and granular profitability arrays.',
      features: [
        'Excel Batch Processing Engine',
        'Robust ETL Automation',
        'Profitability Trend Analytics'
      ],
      tech: ['Python', 'Pandas', 'PostgreSQL', 'Excel Automation'],
      myRole: 'Engineered Python data transformations and automated ingestion pipelines for multi-location inventory reconciliation and profitability tracking.',
      businessValue: 'Delivered executive-level sales visibility and eliminated manual Excel consolidation routines for multi-store retail logistics.',
      internalOnly: true,
      github: '',
      live: ''
    },
    {
      id: 'imdb-etl',
      title: 'IMDB ETL Pipeline',
      category: 'Data & ETL Pipelines',
      featured: false,
      desc: 'Large-scale analytical execution workflow engineered during the NIC internship footprint, focusing on data extraction and highly reliable sanitization transforms.',
      features: [
        'Data Normalization & Cleaning',
        'Relational Constraints Injection',
        'High Capacity Storage Structuring'
      ],
      tech: ['Python', 'Pandas', 'SQLAlchemy', 'PostgreSQL'],
      myRole: 'Developed chunk-based data processing scripts using Pandas and SQLAlchemy with strict relational constraint validation in PostgreSQL.',
      businessValue: 'Structured large datasets into optimized, queryable relational schemas suitable for rapid analytical reporting.',
      internalOnly: false,
      github: '',
      live: ''
    },
    {
      id: 'customer-insights',
      title: 'Customer Insights Reporting',
      category: 'Data & ETL Pipelines',
      featured: false,
      desc: 'Corporate business intelligence pipeline pulling actionable analytical values out of raw relational sales parameters via interactive interface panels.',
      features: [
        'Cohorts Pattern Identification',
        'Executive Dashboarding Engine',
        'SQL Performance Optimizations'
      ],
      tech: ['SQL', 'Excel', 'Python'],
      myRole: 'Crafted complex analytical SQL queries, cohort segmentation queries, and automated spreadsheet report generation.',
      businessValue: 'Empowered commercial leadership with clear retention trends, customer acquisition metrics, and revenue attribution insights.',
      internalOnly: true,
      github: '',
      live: ''
    }
  ];

  const categories = ['All', 'Enterprise & CRM', 'AI & Automation', 'Data & ETL Pipelines'];

  const filteredProjects = activeFilter === 'All'
    ? projectList
    : projectList.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wider uppercase mb-3 border border-brand-500/20">
            <FiLayers className="w-3.5 h-3.5" />
            <span>Engineering & Analytics Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Enterprise systems, high-throughput ETL data pipelines, tender compliance software, and automated business workflows.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat} {cat === 'All' && `(${projectList.length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => {
              const isCRM = proj.id === 'crm-system';
              return (
                <motion.div
                  key={proj.id}
                  layout
                  className={`flex flex-col rounded-3xl bg-white dark:bg-darkCard border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl group relative ${
                    isCRM
                      ? 'md:col-span-2 lg:col-span-2 border-brand-500/40 dark:border-brand-500/30 ring-1 ring-brand-500/20'
                      : 'border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  {/* Top Banner / Header Area */}
                  <div
                    className={`p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border-b border-slate-100 dark:border-slate-800/60 ${
                      isCRM
                        ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950 text-white min-h-[170px]'
                        : 'bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white min-h-[150px]'
                    }`}
                  >
                    {/* Background Index Watermark */}
                    <div className="absolute top-2 right-4 text-white/5 text-8xl sm:text-9xl font-black select-none pointer-events-none">
                      0{idx + 1}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/10 text-white rounded-md backdrop-blur-md border border-white/10">
                          {proj.category}
                        </span>
                        {isCRM && (
                          <span className="inline-flex items-center space-x-1 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-md backdrop-blur-md border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Featured System</span>
                          </span>
                        )}
                      </div>

                      {isCRM && (
                        <div className="text-[11px] font-medium text-slate-300/80 flex items-center gap-1">
                          <FiShield className="w-3.5 h-3.5 text-brand-400" />
                          <span>RBAC Authorization</span>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 pt-4">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-brand-300 transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {proj.desc}
                      </p>

                      {/* Key Features Preview */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                          Key Capabilities:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.features.slice(0, isCRM ? 6 : 3).map((f) => (
                            <span
                              key={f}
                              className="text-xs px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                            >
                              {f}
                            </span>
                          ))}
                          {proj.features.length > (isCRM ? 6 : 3) && (
                            <span className="text-xs px-2 py-1 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold">
                              +{proj.features.length - (isCRM ? 6 : 3)} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Role & Value Snippet for CRM */}
                      {isCRM && (
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 space-y-1">
                          <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                            My Role:
                          </span>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal line-clamp-2">
                            {proj.myRole}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer Actions & Tech Tags */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/5 dark:bg-brand-500/10 px-2 py-0.5 rounded-md"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          type="button"
                          id={`btn-details-${proj.id}`}
                          onClick={() => setSelectedProject(proj)}
                          className="relative z-10 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white transition-all duration-200 shadow-sm shadow-brand-600/20 active:scale-95 cursor-pointer"
                        >
                          <FiEye className="w-3.5 h-3.5" />
                          <span>View Details</span>
                        </button>

                        <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
                          {proj.github && proj.github !== '#' && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                              title="Source Repository"
                            >
                              <FiGithub className="w-4 h-4" />
                            </a>
                          )}

                          {proj.live && proj.live !== '#' && (
                            <a
                              href={proj.live}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                              title="Live Application"
                            >
                              <FiExternalLink className="w-4 h-4" />
                            </a>
                          )}

                          {(!proj.github || proj.github === '#') && (!proj.live || proj.live === '#') && (
                            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                              Enterprise System
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}