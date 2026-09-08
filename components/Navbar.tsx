'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X, Code2 } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-color)] shadow-lg shadow-black/10'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-all duration-200">
                <Code2 size={16} className="text-[var(--accent)]" />
              </div>
              <span className="font-heading font-bold text-base text-[var(--text-primary)] hidden sm:block">
                <span className="text-[var(--accent)]">Rafli</span> Pramudya
              </span>
            </motion.a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Download CV */}
              <motion.a
                id="navbar-download-cv"
                href="/cv/Rafli_Pramudya_Putranto_CV.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-[var(--accent)] text-navy-900 font-semibold text-sm
                  hover:bg-[var(--accent-dim)] transition-all duration-200
                  shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]"
              >
                <Download size={14} />
                <span>Download CV</span>
              </motion.a>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center
                  text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                  hover:bg-white/5 border border-[var(--border-color)]
                  transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 lg:hidden
              bg-[var(--bg-primary)]/95 backdrop-blur-xl
              border-b border-[var(--border-color)]
              shadow-xl shadow-black/20"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium
                    text-[var(--text-secondary)] hover:text-[var(--accent)]
                    hover:bg-[var(--accent)]/10 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-[var(--border-color)]">
                <a
                  href="/cv/Rafli_Pramudya_Putranto_CV.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg
                    bg-[var(--accent)]/10 text-[var(--accent)] font-semibold text-sm
                    border border-[var(--accent)]/20 hover:bg-[var(--accent)]/20
                    transition-all duration-200"
                >
                  <Download size={14} />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
