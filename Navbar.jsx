import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const handleNavClick = () => setOpen(false)

  return (
    <>
      <nav className="navbar fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <a
              className="font-bold text-white text-lg tracking-tight"
              href="#home"
            >
              Erasto
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    className="nav-link"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                id="themeToggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
              >
                <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
              </button>

              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}
        onClick={handleNavClick}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 lg:hidden border-b transition-all duration-300 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{
          background: 'var(--bg-elevated)',
          borderColor: 'var(--border)',
        }}
      >
        <ul className="max-w-6xl mx-auto px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                className="block px-3 py-2.5 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                href={item.href}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}