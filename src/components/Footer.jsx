import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-ink-100 dark:border-white/10">
      <div className="section-shell !py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
              Niharika Kumari
            </p>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
              Business Analyst · Data Analyst · Python Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-300 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/niharika-kumari-72318b229"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:border-accent-400 hover:text-accent-600 dark:border-white/15 dark:text-ink-200"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://github.com/NiharikaKumari06"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:border-accent-400 hover:text-accent-600 dark:border-white/15 dark:text-ink-200"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="mailto:niharikakumari913@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 hover:border-accent-400 hover:text-accent-600 dark:border-white/15 dark:text-ink-200"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-ink-100 pt-6 text-xs text-ink-400 dark:border-white/10">
          © {year} Niharika Kumari. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
