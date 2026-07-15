import { motion } from 'framer-motion'
import {
  FiBarChart2,
  FiDatabase,
  FiFileText,
  FiCpu,
  FiRepeat,
  FiCode,
  FiTarget,
} from 'react-icons/fi'

const CARDS = [
  { icon: FiBarChart2, title: 'Business Analysis', desc: 'Translating stakeholder needs into clear, actionable requirements.' },
  { icon: FiDatabase, title: 'Data Analytics', desc: 'Turning raw data into decisions with Pandas, SQL, and dashboards.' },
  { icon: FiFileText, title: 'GeM Tender Analysis', desc: 'Technical compliance review and bid preparation for government tenders.' },
  { icon: FiRepeat, title: 'ETL Engineering', desc: 'Building reliable pipelines that clean, transform, and load data.' },
  { icon: FiCpu, title: 'AI Automation', desc: 'Applying LLMs and NLP to automate document-heavy workflows.' },
  { icon: FiTarget, title: 'Reporting Automation', desc: 'Automated, repeatable reporting that saves hours every cycle.' },
  { icon: FiCode, title: 'Python Development', desc: 'Writing production scripts and APIs with FastAPI and Pandas.' },
  { icon: FiTarget, title: 'Problem Solving', desc: 'Breaking down ambiguous problems into structured, testable steps.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="section-shell">
      <span className="eyebrow">// About</span>
      <h2 className="section-title">Grounded in data, built for business impact</h2>
      <p className="mt-5 max-w-2xl text-ink-600 dark:text-ink-300">
        B.Tech Computer Science Engineering graduate with hands-on experience across business
        analysis, data analytics, and AI-driven automation — turning messy, real-world data into
        decisions that stakeholders can act on.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CARDS.map(({ icon: Icon, title, desc }) => (
          <motion.div key={title} variants={item} className="surface-card p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
