import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiCheckSquare, FiCpu } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Core Languages',
      icon: <FiCode className="text-brand-500" />,
      items: [
        { name: 'Python', level: 92, highlight: 'Primary Language' },
        { name: 'SQL', level: 90, highlight: 'Complex Queries & Modeling' },
        { name: 'JavaScript', level: 75, highlight: 'Frontend Interactivity' },
        { name: 'HTML5 & CSS3', level: 85, highlight: 'Responsive UI Design' }
      ]
    },
    {
      title: 'Backend & Framework Engineering',
      icon: <FiServer className="text-indigo-500" />,
      items: [
        { name: 'Flask', level: 88, highlight: 'CRM & API Routing' },
        { name: 'SQLAlchemy ORM', level: 86, highlight: 'Relational DB Layer' },
        { name: 'FastAPI', level: 82, highlight: 'High-Performance APIs' },
        { name: 'RESTful API Design', level: 88, highlight: 'Contract-First Endpoints' }
      ]
    },
    {
      title: 'Data Analytics & ETL Pipelines',
      icon: <FiDatabase className="text-purple-500" />,
      items: [
        { name: 'Pandas & NumPy', level: 92, highlight: 'Data Transformation' },
        { name: 'ETL Pipeline Design', level: 90, highlight: 'End-to-End Ingestion' },
        { name: 'PostgreSQL & MySQL', level: 88, highlight: 'Schema Architecture' },
        { name: 'Data Normalization', level: 86, highlight: 'Constraint Enforcement' }
      ]
    },
    {
      title: 'Business Analysis & Applied AI',
      icon: <FiCheckSquare className="text-emerald-500" />,
      items: [
        { name: 'GeM Tender Analysis', level: 94, highlight: 'Bid Compliance Matrices' },
        { name: 'Requirements Engineering', level: 90, highlight: 'BRD & Flow Architecture' },
        { name: 'OpenAI API & Embeddings', level: 82, highlight: 'Semantic Matching' },
        { name: 'Git & Version Control', level: 88, highlight: 'Team Collaboration' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wider uppercase mb-3 border border-brand-500/20">
            <FiCpu className="w-3.5 h-3.5" />
            <span>Core Competencies & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical & Analytical Skills
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Hands-on technical proficiency across backend development, ETL engineering, relational database modeling, and business analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-baseline text-xs font-semibold">
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-800 dark:text-slate-200 font-bold">{skill.name}</span>
                        <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                          ({skill.highlight})
                        </span>
                      </div>
                      <span className="text-brand-600 dark:text-brand-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden p-0.5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-600 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Core Focus Area */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-50/60 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/40 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <span className="font-bold text-brand-700 dark:text-brand-400">Core Engineering Philosophy:</span> Prioritizing maintainable Python architectures, rigorous relational data normalization in PostgreSQL, and verified government bid compliance workflows.
          </p>
        </div>
      </div>
    </section>
  );
}