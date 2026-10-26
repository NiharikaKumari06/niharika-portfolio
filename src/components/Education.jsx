import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

export default function Education() {
  const eduData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'JC Bose University of Science & Technology (YMCA)',
      location: 'Faridabad, Haryana, India',
      timeline: '2021 – 2024',
      badge: 'Undergraduate Degree',
      highlights: 'Core focus on Relational Database Management Systems, Data Structures & Algorithms, Software Engineering Methodologies, and Python Backend Development.'
    },
    {
      degree: 'Diploma in Computer Science Engineering',
      institution: 'BSF Polytechnic',
      location: 'India',
      timeline: '2018 – 2021',
      badge: 'Technical Diploma',
      highlights: 'Fundamental grounding in Computer Science, Database Fundamentals, Programming Logic, and Computer Networking.'
    }
  ];

  return (
    <section id="education" className="py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wider uppercase mb-3 border border-brand-500/20">
            <FiBookOpen className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal technical education providing a strong foundation in computer science and systems architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {eduData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              className="p-6 sm:p-8 bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative overflow-hidden group flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/5 rounded-bl-full group-hover:bg-brand-600/10 transition-colors pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-md border border-brand-500/20">
                    {edu.badge}
                  </span>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <FiCalendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{edu.timeline}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <FiMapPin className="w-3 h-3" /> {edu.location}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                  {edu.highlights}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <FiAward className="text-brand-600 dark:text-brand-400" />
                <span>Verified Academic Credential</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}