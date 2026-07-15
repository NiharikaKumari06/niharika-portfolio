import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

const CERTIFICATIONS = [
  { title: 'Python Developer', issuer: 'One Tick Technology' },
  { title: 'Microsoft Azure', issuer: 'Honeywell ICT Academy' },
  { title: 'Microsoft Office', issuer: 'NSIC' },
  { title: 'TCS iON Career Edge', issuer: 'Young Professional' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <span className="eyebrow">// Certifications</span>
      <h2 className="section-title">Credentials that back it up</h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="surface-card flex flex-col items-start gap-4 p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
              <FiAward size={20} />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
