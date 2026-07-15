import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import profileImage from '../assets/profile.jpg'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-70 [background-size:26px_26px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.span variants={item} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Available for full-time roles
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Niharika Kumari
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 h-9 font-mono text-lg text-accent-600 dark:text-accent-400 sm:text-xl"
          >
            <TypeAnimation
              sequence={[
                'Data Engineer',
                1800,
                'Business Analyst',
                1800,
                'Data Analyst',
                1800,
                'Python Developer',
                1800,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
          >
            Data professional experienced in designing, building, and maintaining scalable data
            pipelines using Python and advanced SQL — with hands-on work in GeM Tender Analysis,
            ETL/ELT development, AI-powered automation, and cross-functional reporting.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/resume.pdf" download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <FiMail /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/niharika-kumari-72318b229"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-white/15 dark:text-ink-200 dark:hover:text-accent-400"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/NiharikaKumari06"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-white/15 dark:text-ink-200 dark:hover:text-accent-400"
            >
              <FaGithub size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-sm">
          <div className="glass-card relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] p-2">
            <div className="h-full w-full overflow-hidden rounded-[1.6rem]">
              <img
                src={profileImage}
                alt="Niharika Kumari"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="glass-card absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/10 font-mono text-sm text-accent-600 dark:text-accent-400">
              02+
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">Years experience</p>
              <p className="font-mono text-xs text-ink-500 dark:text-ink-400">Analytics &amp; ETL</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
