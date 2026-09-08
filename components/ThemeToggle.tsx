'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-transparent" aria-hidden="true" />
    )
  }

  return (
    <button
      id="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 rounded-lg flex items-center justify-center
        text-[var(--text-secondary)] hover:text-[var(--accent)]
        hover:bg-[var(--accent)]/10
        border border-[var(--border-color)] hover:border-[var(--accent)]/30
        transition-all duration-200"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={16} className="transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Moon size={16} className="transition-transform duration-200" />
      )}
    </button>
  )
}
