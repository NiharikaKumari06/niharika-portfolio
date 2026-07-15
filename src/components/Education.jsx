import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'

const EDUCATION = [
  {
    degree: 'B.Tech Computer Science Engineering',
    school: 'JC Bose University of Science & Technology (YMCA)',
    duration: '2021 – 2024',
  },
  {
    degree: 'Diploma Computer Science Engineering',
    school: 'BSF Polytechnic',
    duration: '2018 – 2021',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <span className="eyebrow">// Education</span>
      <h2 className="section-title">Academic foundation</h2>

      <div className="relative mt-14 space-y-8 border-l border-ink-200 pl-8 dark:border-white/10 sm:pl-10">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-white shadow-[0_0_0_5px_rgba(37,99,235,0.15)] sm:-left-[49px]">
              <FiBookOpen size={14} />
            </span>
            <div className="surface-card p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {edu.degree}
                </h3>
                <span className="tag-pill">{edu.duration}</span>
              </div>
              <p className="mt-1 text-accent-600 dark:text-accent-400">{edu.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
