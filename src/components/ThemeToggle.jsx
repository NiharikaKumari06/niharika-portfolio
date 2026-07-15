import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-200
                 text-ink-600 transition-colors hover:border-accent-400 hover:text-accent-600
                 dark:border-white/15 dark:text-ink-200 dark:hover:border-accent-400 dark:hover:text-accent-400
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
