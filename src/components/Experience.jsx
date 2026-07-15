import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

const EXPERIENCE = [
  {
    company: 'Aplus Technology Solutions Pvt Ltd',
    role: 'Data Analyst',
    duration: 'Aug 2024 – Present',
    points: [
      'Analysed and validated large volumes of GeM tender data into clean, analysis-ready datasets',
      'Collaborated with cross-functional stakeholders on requirements and structured reporting',
      'Identified process improvements that reduced manual data-handling effort',
      'Built an end-to-end pipeline matching tender specs to products via NLP + OpenAI embeddings',
      'Engineered PDF/DOCX parsing with PyMuPDF and pdfplumber into structured JSON',
      'Designed PostgreSQL schemas with SQLAlchemy ORM for tender history and product metadata',
      'Built Python/Pandas ETL workflows to clean and validate raw CSV sales data at scale',
      'Automated Sellout report generation with Flask, Pandas, and openpyxl, replacing manual work',
    ],
  },
  {
    company: 'National Information Centre (NIC)',
    role: 'Data Analyst Intern',
    duration: 'Feb 2024 – Jun 2024',
    points: [
      'Built and optimized ETL operations on large datasets to improve quality and performance',
      'Cleaned and pre-processed raw data at scale using Python and Pandas',
      'Integrated multiple heterogeneous datasets into PostgreSQL using SQLAlchemy',
      'Supported downstream analytical reporting on the IMDB dataset',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <span className="eyebrow">// Experience</span>
      <h2 className="section-title">Where the work happened</h2>

      <div className="relative mt-14 space-y-12 border-l border-ink-200 pl-8 dark:border-white/10 sm:pl-10">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-white shadow-[0_0_0_5px_rgba(37,99,235,0.15)] sm:-left-[49px]">
              <FiBriefcase size={14} />
            </span>

            <div className="surface-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="tag-pill">{exp.duration}</span>
              </div>
              <p className="mt-1 font-medium text-accent-600 dark:text-accent-400">{exp.company}</p>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
