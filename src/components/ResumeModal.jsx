import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiPrinter, FiBriefcase, FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi';

export default function ResumeModal({ isOpen, onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Official Curriculum Vitae • Niharika Kumari
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="/resume.pdf"
                download="Niharika_Kumari_Resume.pdf"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-sm"
              >
                <FiDownload className="w-3.5 h-3.5" /> <span>Download PDF</span>
              </a>
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Print resume"
              >
                <FiPrinter className="w-3.5 h-3.5" /> <span>Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Container */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans print:p-0 print:text-black">
            {/* Document Header */}
            <div className="border-b-2 border-brand-600 pb-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  NIHARIKA KUMARI
                </h1>
                <p className="text-base font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                  Business Analyst | Data Analyst | Python Developer
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Faridabad, Haryana, India • Open for Strategic Technical & Analytical Roles
                </p>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 sm:text-right">
                <p>Email: <a href="mailto:niharika.kumari@example.com" className="text-brand-600 hover:underline">niharika.kumari@example.com</a></p>
                <p>Portfolio: <span className="font-medium text-slate-800 dark:text-slate-200">niharika-portfolio-theta.vercel.app</span></p>
                <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">linkedin.com/in/niharika-kumari</a></p>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Computer Science Engineering graduate specializing in Business Analysis, Data Analytics, ETL Pipeline Engineering, and Python backend systems. Proven track record in GeM tender compliance, complex bid management, relational data modeling (PostgreSQL/SQLAlchemy), and developing centralized CRM & Sales Pipeline workflows. Adept at bridging technical systems with business objectives to optimize operational efficiency and analytical visibility.
              </p>
            </div>

            {/* Technical Skills (Strictly NO React, NO Oracle APEX, NO Power BI) */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Technical Skills & Competencies
              </h2>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm space-y-2">
                <p><span className="font-bold text-slate-900 dark:text-white">Languages & Backend:</span> Python, SQL, JavaScript, HTML5, CSS3, Flask, FastAPI, SQLAlchemy ORM, REST APIs</p>
                <p><span className="font-bold text-slate-900 dark:text-white">Data Analytics & ETL:</span> ETL Pipeline Design, Data Normalization & Sanitization, Pandas, NumPy, Relational Schema Architecture</p>
                <p><span className="font-bold text-slate-900 dark:text-white">Databases & Systems:</span> PostgreSQL, MySQL, Relational Schema Design, Database Indexing & Optimization</p>
                <p><span className="font-bold text-slate-900 dark:text-white">Business Analysis:</span> GeM Tender Analysis, Technical Compliance Verification, Requirements Gathering, Process Flow Modeling</p>
                <p><span className="font-bold text-slate-900 dark:text-white">Developer Tools:</span> Git, GitHub, Excel Automation, PyMuPDF, OpenAI API & Vector Embeddings</p>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Work Experience
              </h2>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Business Analyst & Data Analyst <span className="font-normal text-slate-500">| Aplus Technology Solutions Pvt Ltd</span>
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Aug 2024 – Present</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Spearheaded comprehensive GeM (Government e-Marketplace) tender analysis and mapped technical compliance matrices for enterprise procurement.</li>
                    <li>Engineered and maintained automated ETL data pipelines in Python and PostgreSQL to analyze cross-border sales and inventory streams.</li>
                    <li>Managed high-level OEM coordination to align hardware and software specifications with contract requirements.</li>
                    <li>Automated recurring reporting workflows, reducing manual turnaround time significantly.</li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Data Analyst Intern <span className="font-normal text-slate-500">| National Informatics Centre (NIC)</span>
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Feb 2024 – Jun 2024</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Engineered robust chunked data ingestion pipelines to parse and normalize large-scale IMDB relational datasets.</li>
                    <li>Designed relational constraints, schema structures, and indexing strategies in PostgreSQL for data cleanup cycles.</li>
                    <li>Automated analytical insight summaries and structured validation reports directly for core project leads.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Featured Projects
              </h2>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    CRM & Sales Pipeline Management System <span className="text-xs font-normal text-slate-500">(Python, Flask, PostgreSQL, SQLAlchemy, HTML, CSS, JavaScript)</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Developed and enhanced a CRM application to help sales teams manage customer information, sales opportunities, pipeline stages, activities, and follow-ups through a centralized system. Built backend API endpoints, database schemas, salesperson-wise assignment, and role-based access control with Admin/Director/MD authorization for opportunity reassignments.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    TenderMatch AI <span className="text-xs font-normal text-slate-500">(Python, FastAPI, PostgreSQL, OpenAI API, PyMuPDF)</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    AI-powered tender document analysis platform that extracts technical specifications from PDF and DOCX files and matches them with complex product datasets using semantic vector analysis.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Samsung Sellout Automation <span className="text-xs font-normal text-slate-500">(Python, Pandas, PostgreSQL, Excel Automation)</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Automated strategic operational platform executing analytics over localized purchase registries, stock inventories, return logs, and granular profitability arrays.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    IMDB ETL Pipeline <span className="text-xs font-normal text-slate-500">(Python, Pandas, SQLAlchemy, PostgreSQL)</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Large-scale analytical execution workflow engineered during the NIC internship footprint, focusing on data extraction and highly reliable sanitization transforms.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Customer Insights Reporting <span className="text-xs font-normal text-slate-500">(SQL, Excel, Python)</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Corporate business intelligence pipeline pulling actionable analytical values out of raw relational sales parameters via interactive interface panels.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Education
                </h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">B.Tech in Computer Science Engineering</p>
                    <p className="text-slate-500">JC Bose UST (YMCA), Faridabad • 2021 – 2024</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Diploma in Computer Science Engineering</p>
                    <p className="text-slate-500">BSF Polytechnic • 2018 – 2021</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Certifications
                </h2>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <p>• <b>Python Developer Certification</b> — One Tick Technology</p>
                  <p>• <b>Microsoft Azure Certified Cloud Architecture</b> — Honeywell ICT Academy</p>
                  <p>• <b>Microsoft Office Advanced Solutions Expert</b> — NSIC</p>
                  <p>• <b>TCS iON Career Edge Framework Certification</b> — Young Professional Track</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
