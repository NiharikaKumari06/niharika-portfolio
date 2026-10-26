import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  const timelineData = [
    {
      company: 'Aplus Technology Solutions Pvt Ltd',
      role: 'Business Analyst & Data Analyst',
      duration: 'Aug 2024 – Present',
      location: 'Faridabad / NCR, India',
      type: 'Full-time',
      summary: 'Leading government tender compliance workflows, automated sales ETL analytics, and multi-OEM hardware/software alignment.',
      points: [
        'Headed comprehensive GeM Tender Analysis protocols and verified complex Technical Compliance matrices.',
        'Managed high-level OEM Coordination frameworks ensuring tight data alignment across hardware deliverables.',
        'Engineered specialized automated ETL pipelines to handle large-scale cross-border Sales Analytics.',
        'Automated reporting flows, decreasing delivery turn-around times significantly.'
      ],
      skills: ['GeM Tender Analysis', 'Python', 'ETL Pipelines', 'PostgreSQL', 'Sales Analytics', 'OEM Coordination']
    },
    {
      company: 'National Informatics Centre (NIC)',
      role: 'Data Analyst Intern',
      duration: 'Feb 2024 – Jun 2024',
      location: 'Delhi NCR, India',
      type: 'Internship',
      summary: 'Focused on high-capacity relational database structuring, data sanitization scripts, and automated stakeholder reporting pipelines.',
      points: [
        'Optimized highly production-critical IMDB database parsing layers using optimized chunking transformations.',
        'Designed extensive functional structures inside relational PostgreSQL setups for data cleanup cycles.',
        'Structured automated report creation sequences to feed analytical insight layers directly to core leads.'
      ],
      skills: ['Python', 'PostgreSQL', 'Pandas', 'SQLAlchemy', 'Data Normalization', 'Relational Schemas']
    }
  ];

  return (
    <section id="experience" className="py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wider uppercase mb-3 border border-brand-500/20">
            <FiBriefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Demonstrated track record of delivering measurable value in analytical, government compliance, and data engineering capacities.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {timelineData.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 p-2 sm:p-2.5 rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 border-4 border-slate-50 dark:border-darkBg group-hover:scale-110 transition-transform">
                <FiBriefcase className="w-4 h-4" />
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-brand-600 dark:text-brand-400 mt-1">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      <FiCalendar className="w-3.5 h-3.5 text-brand-500" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 text-slate-400">
                      <FiMapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Key Deliverables & Responsibilities:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-2.5 leading-relaxed">
                        <FiCheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Competency Badges */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}