import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiTrendingUp, FiLayers, FiFileText, FiCheck, FiCompass, FiDatabase } from 'react-icons/fi';

export default function About() {
  const coreCompetencies = [
    {
      icon: <FiTrendingUp className="text-blue-500" />,
      title: 'Business & Data Analytics',
      desc: 'Transforming cross-functional datasets into actionable insights, executive visibility dashboards, and data-driven operational decisions.'
    },
    {
      icon: <FiFileText className="text-indigo-500" />,
      title: 'GeM Tender Analysis',
      desc: 'Analyzing high-stakes Government e-Marketplace (GeM) bids, verifying technical compliance matrices, and aligning contract specifications.'
    },
    {
      icon: <FiLayers className="text-purple-500" />,
      title: 'ETL Pipeline Design',
      desc: 'Engineering resilient Extraction, Transformation, and Load scripts in Python and PostgreSQL to ingest multi-source operational data.'
    },
    {
      icon: <FiCpu className="text-emerald-500" />,
      title: 'Backend Systems & CRM Workflows',
      desc: 'Building Python & Flask APIs, relational SQLAlchemy schemas, and multi-tier role-based access control workflows for sales teams.'
    }
  ];

  const highlights = [
    'B.Tech in Computer Science Engineering (JC Bose UST YMCA)',
    'Hands-on expertise in GeM Tender Analysis & Bid Compliance',
    'Full lifecycle relational database engineering (PostgreSQL/SQLAlchemy)',
    'Automated ETL pipelines eliminating manual spreadsheet routines',
    'Role-based CRM and sales opportunity workflow architecture'
  ];

  return (
    <section id="about" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wider uppercase mb-3 border border-brand-500/20">
            <FiCompass className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Engineered to bridge technical boundaries and business strategy efficiently.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Education & Analytical Roots
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                Computer Science Graduate with a Focus on Business-Critical Data Systems
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              With a formal B.Tech in Computer Science Engineering from JC Bose University of Science & Technology (YMCA), my technical foundation is rooted in structured problem solving, relational databases, and software design.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              In my current role at Aplus Technology Solutions and previous tenure at the National Informatics Centre (NIC), I have specialized in transforming unstructured business requirements into scalable technical workflows. My work encompasses detailed GeM tender evaluations, end-to-end ETL automation, and building centralized CRM applications that give leadership clear visibility into sales opportunities and team activities.
            </p>

            {/* Key Value Checklist */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Key Strengths & Focus Areas:
              </span>
              <div className="space-y-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <FiCheck className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Competencies Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreCompetencies.map((comp, idx) => (
              <motion.div
                key={comp.title}
                className="p-6 rounded-3xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-800/80 w-fit rounded-2xl text-xl shadow-inner border border-slate-200/50 dark:border-slate-700/50">
                  {comp.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {comp.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}