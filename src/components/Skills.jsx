import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 65 },
      { name: 'HTML', level: 75 },
      { name: 'CSS', level: 70 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    category: 'Data Analytics & ETL',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 80 },
      { name: 'ETL / ELT Pipeline Design', level: 90 },
      { name: 'Data Validation', level: 85 },
      { name: 'PyMuPDF / pdfplumber', level: 80 },
    ],
  },
  {
    category: 'Artificial Intelligence',
    skills: [
      { name: 'OpenAI API', level: 80 },
      { name: 'Embeddings', level: 75 },
      { name: 'NLP', level: 75 },
    ],
  },
  {
    category: 'Automation & Backend',
    skills: [
      { name: 'FastAPI', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'SQLAlchemy ORM', level: 85 },
      { name: 'BeautifulSoup', level: 70 },
    ],
  },
  {
    category: 'Visualization',
    skills: [
      { name: 'Power BI', level: 70 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Seaborn', level: 70 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Excel / openpyxl', level: 90 },
      { name: 'Git', level: 75 },
      { name: 'VS Code', level: 85 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-ink-700 dark:text-ink-200">{name}</span>
        <span className="font-mono text-xs text-ink-400 dark:text-ink-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-accent-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <span className="eyebrow">// Skills</span>
      <h2 className="section-title">The toolkit behind the work</h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="surface-card p-6"
          >
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
              {group.category}
            </h3>
            <div className="mt-5 space-y-4">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
