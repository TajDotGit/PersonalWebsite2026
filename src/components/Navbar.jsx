import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/work',    label: 'Work'    },
  { to: '/writing', label: 'Writing' },
  { to: '/about',   label: 'About'   },
]

// Sun icon — shown in dark mode (click to switch to light)
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true">
      <circle cx="8" cy="8" r="3.2" />
      {/* 8 radiating lines at 45° intervals */}
      <line x1="8" y1="1" x2="8" y2="3" />
      <line x1="8" y1="13" x2="8" y2="15" />
      <line x1="1" y1="8" x2="3" y2="8" />
      <line x1="13" y1="8" x2="15" y2="8" />
      <line x1="3.05" y1="3.05" x2="4.46" y2="4.46" />
      <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" />
      <line x1="12.95" y1="3.05" x2="11.54" y2="4.46" />
      <line x1="4.46" y1="11.54" x2="3.05" y2="12.95" />
    </svg>
  )
}

// Moon icon — shown in light mode (click to switch to dark)
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    // Passive listener: tells browser this handler never calls preventDefault
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'relative flex items-center justify-between',
        'px-6 md:px-16 h-16 md:h-20',
        'transition-all duration-300',
        scrolled
          ? 'bg-background border-b border-border'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* TI Monogram — gold, always */}
      <Link
        to="/"
        className="font-display text-xl font-semibold text-accent hover:text-accent-hover transition-colors duration-200 tracking-tight"
        aria-label="Taj Ikhlaas — home"
      >
        TI
      </Link>

      {/* Center: "Taj Ikhlaas" — absolute to true horizontal center */}
      <Link
        to="/"
        className="absolute left-1/2 -translate-x-1/2 font-display text-lg text-text-primary hover:text-accent transition-colors duration-200 tracking-tight hidden min-[480px]:block whitespace-nowrap"
        aria-label="Taj Ikhlaas — home"
      >
        Taj Ikhlaas
      </Link>

      {/* Navigation links + theme toggle */}
      <nav aria-label="Main navigation" className="flex items-center">
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  [
                    'font-body text-xs small-caps transition-colors duration-200',
                    // Active stays gold; hover now goes red (not muted-text)
                    isActive
                      ? 'text-accent'
                      : 'text-text-muted hover:text-accent-red',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme toggle — sun in dark mode, moon in light mode */}
        <motion.button
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="ml-7 text-accent hover:text-accent-hover transition-colors duration-200 focus:outline-none flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15 }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </motion.button>
      </nav>
    </motion.header>
  )
}
