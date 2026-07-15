import { motion } from 'framer-motion'
import { FiLock } from 'react-icons/fi'

const PROJECTS = [
  {
    title: 'Tender AI Product Matching System',
    description:
      'End-to-end data pipeline that ingests tender documents (PDF/DOCX), extracts technical specifications via NLP, and matches them against structured product datasets using a dual keyword + embedding-based scoring algorithm.',
    features: [
      'PDF & DOCX Ingestion',
      'NLP Spec Extraction',
      'Embedding-Based Matching',
      'PostgreSQL Schema Design',
      'HTML/CSS/JS Reporting Layer',
      'PDF & Excel Export',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'PyMuPDF', 'pdfplumber', 'SQLAlchemy'],
  },
  {
    title: 'Sales Data ETL Pipeline',
    description:
      'ETL workflows that extract, clean, validate, and transform raw CSV sales data at scale, with optimized SQL queries and integrity-enforced loads into PostgreSQL.',
    features: [
      'CSV Extraction & Cleaning',
      'Data Validation',
      'Query Optimization',
      'Integrity-Enforced Loading',
    ],
    tech: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'SQLAlchemy'],
  },
  {
    title: 'Aplus Sellout Report Automation',
    description:
      'Flask-based tool that converts raw Sales Voucher Excel exports into Aplus Sellout Reports, replacing a fully manual process. Reverse-engineered the transformation logic from input/output sample pairs and built row-level validation to catch mismatches automatically.',
    features: [
      'Multi-Unit Sales Explosion',
      'Live Excel Tax Formulas',
      'Row-Level Mismatch Flagging',
      'Browser Upload/Download Flow',
    ],
    tech: ['Python', 'Pandas', 'openpyxl', 'Flask'],
  },
  {
    title: 'IMDB Dataset ETL Optimization',
    description:
      'Large-scale ETL optimization project completed during the NIC internship — cleaning, transforming, and integrating IMDB datasets into PostgreSQL to support downstream analytical reporting.',
    features: [],
    tech: ['Python', 'Pandas', 'SQLAlchemy', 'PostgreSQL'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <span className="eyebrow">// Projects</span>
      <h2 className="section-title">Things I've built and shipped</h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: (idx % 2) * 0.1 }}
            className="surface-card flex flex-col p-6 sm:p-7"
          >
            <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {project.description}
            </p>

            {project.features.length > 0 && (
              <ul className="mt-4 grid grid-cols-2 gap-y-1.5 gap-x-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-ink-500 dark:text-ink-400">
                    <span className="h-1 w-1 rounded-full bg-accent-500" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-ink-400 dark:text-ink-500">
              <FiLock size={12} />
              Built for an employer — code is not publicly available
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
