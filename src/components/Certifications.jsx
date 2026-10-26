import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

export default function Certifications() {
  const certs = [
    {
      title: 'Python Developer Certification',
      issuer: 'One Tick Technology',
      domain: 'Software Engineering',
      desc: 'Hands-on validation in core Python, OOP, algorithm design, and data parsing.'
    },
    {
      title: 'Microsoft Azure Certified Cloud Architecture',
      issuer: 'Honeywell ICT Academy',
      domain: 'Cloud Infrastructure',
      desc: 'Foundational cloud services, architectural scalability, and enterprise virtualization.'
    },
    {
      title: 'Microsoft Office Advanced Solutions Expert',
      issuer: 'NSIC',
      domain: 'Data Processing & Analytics',
      desc: 'Advanced operational spreadsheet modeling, macros, and business reporting matrices.'
    },
    {
      title: 'TCS iON Career Edge Framework Certification',
      issuer: 'Young Professional Track',
      domain: 'Professional Competency',
      desc: 'Business communication, agile workplace practices, and analytical problem-solving.'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wider uppercase mb-3 border border-brand-500/20">
            <FiAward className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications & Training
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Industry-recognized credentials certifying technical proficiency and professional competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className="p-6 bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-500/10 text-brand-600 dark:text-brand-400 w-fit rounded-2xl text-xl shadow-inner border border-brand-500/20">
                    <FiAward />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {c.domain}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {c.issuer}
                  </p>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <FiCheckCircle className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}