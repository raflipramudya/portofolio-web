'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, ArrowDown, Terminal, MapPin } from 'lucide-react'

const terminalLines = [
  { prompt: '~', cmd: 'whoami', output: 'Rafli Pramudya Putranto' },
  { prompt: '~', cmd: 'cat role.txt', output: 'Software Developer / Web Developer' },
  { prompt: '~', cmd: 'ls skills/', output: 'PHP  Laravel  MySQL  JavaScript  Python  Git' },
  { prompt: '~', cmd: 'echo $STATUS', output: 'Ready for new opportunities ✓' },
]

function TerminalAnimation() {
  const [displayedLines, setDisplayedLines] = useState<number>(0)
  const [currentChar, setCurrentChar] = useState<number>(0)
  const [phase, setPhase] = useState<'cmd' | 'output'>('cmd')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (displayedLines >= terminalLines.length) return

    const line = terminalLines[displayedLines]
    const target = phase === 'cmd' ? line.cmd : line.output
    const speed = phase === 'cmd' ? 60 : 20

    if (currentChar < target.length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentChar((c) => c + 1)
      }, speed)
    } else {
      if (phase === 'cmd') {
        timeoutRef.current = setTimeout(() => {
          setPhase('output')
          setCurrentChar(0)
        }, 300)
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayedLines((l) => l + 1)
          setPhase('cmd')
          setCurrentChar(0)
        }, 500)
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayedLines, currentChar, phase])

  return (
    <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-1">
      {terminalLines.slice(0, displayedLines).map((line, i) => (
        <div key={i}>
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent)]">❯</span>
            <span className="text-[var(--text-secondary)]">{line.cmd}</span>
          </div>
          <div className="text-[var(--text-primary)] pl-4 opacity-80">{line.output}</div>
        </div>
      ))}

      {displayedLines < terminalLines.length && (
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent)]">❯</span>
            <span className="text-[var(--text-secondary)]">
              {phase === 'cmd'
                ? terminalLines[displayedLines].cmd.slice(0, currentChar)
                : terminalLines[displayedLines].cmd}
            </span>
            {phase === 'cmd' && (
              <span className="inline-block w-2 h-4 bg-[var(--accent)] opacity-80 animate-pulse" />
            )}
          </div>
          {phase === 'output' && (
            <div className="text-[var(--text-primary)] pl-4 opacity-80">
              {terminalLines[displayedLines].output.slice(0, currentChar)}
              <span className="inline-block w-2 h-4 bg-[var(--accent)] opacity-80 animate-pulse align-bottom" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function ProfileAvatar() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer rotating ring */}
      <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-[var(--accent)]/20 animate-spin-slow" />

      {/* Dashed ring */}
      <div
        className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[var(--accent)]/30"
        style={{ animation: 'spin 12s linear infinite reverse' }}
      />

      {/* Glow ring */}
      <div className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-[var(--accent)]/40 shadow-[0_0_40px_rgba(0,212,170,0.2)]" />

      {/* Avatar container with real profile photo */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden
        border-2 border-[var(--accent)]/50
        shadow-[0_0_40px_rgba(0,212,170,0.25)]"
      >
        <Image
          src="/profile/profile.jpg"
          alt="Rafli Pramudya Putranto — Software Developer"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 640px) 176px, 208px"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/10 to-transparent pointer-events-none" />
      </div>

      {/* Floating badge: Available */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 -right-2 px-3 py-1.5 rounded-full
          bg-[var(--bg-card)] border border-[var(--accent)]/30
          shadow-[0_4px_20px_rgba(0,0,0,0.3)]
          flex items-center gap-2 text-xs font-medium font-mono"
      >
        <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
        <span className="text-[var(--accent)]">Available</span>
      </motion.div>

      {/* Floating badge: Laravel */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-8 -left-4 px-3 py-1.5 rounded-full
          bg-[var(--bg-card)] border border-[var(--border-color)]
          shadow-[0_4px_20px_rgba(0,0,0,0.3)]
          flex items-center gap-2 text-xs font-medium font-mono
          text-[var(--text-secondary)]"
      >
        🚀 <span>Laravel Dev</span>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden
        bg-[var(--bg-primary)]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full
        bg-[var(--accent)]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full
        bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                bg-[var(--accent)]/10 border border-[var(--accent)]/20
                text-[var(--accent)] text-sm font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              Open to Work — Software Developer
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-3
                text-[var(--text-primary)]"
            >
              Rafli Pramudya{' '}
              <span className="gradient-text">Putranto</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-lg sm:text-xl text-[var(--accent)] mb-4 font-medium"
            >
              {'<'} Software Developer / Web Developer {' />'}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-6 font-mono"
            >
              <MapPin size={14} className="text-[var(--accent)]" />
              Bekasi City, Indonesia
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Fresh graduate Informatika dengan pengalaman membangun{' '}
              <span className="text-[var(--text-primary)] font-medium">aplikasi digital archiving</span>{' '}
              dari awal hingga deployment. Menguasai{' '}
              <span className="text-[var(--accent)] font-mono">PHP, Laravel, MySQL</span>{' '}
              dan antusias berkontribusi sebagai Software Developer.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                id="hero-see-projects"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl font-semibold text-base
                  bg-[var(--bg-card)] text-[var(--text-primary)]
                  border border-[var(--border-color)] hover:border-[var(--accent)]/40
                  hover:bg-[var(--accent)]/5
                  transition-all duration-200 shadow-card"
              >
                Lihat Proyek
              </motion.button>

              <motion.a
                id="hero-download-cv"
                href="/cv/Rafli-Pramudya-Putranto-CV.pdf"
                download
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base
                  bg-[var(--accent)] text-[#050b18]
                  hover:bg-[var(--accent-dim)]
                  transition-all duration-200
                  shadow-[0_0_25px_rgba(0,212,170,0.35)] hover:shadow-[0_0_40px_rgba(0,212,170,0.55)]"
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ProfileAvatar />
            </motion.div>

            {/* Terminal widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-sm"
            >
              <div className="rounded-xl overflow-hidden border border-[var(--border-color)]
                shadow-[0_8px_40px_rgba(0,0,0,0.4)] bg-[var(--bg-card)]"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <Terminal size={12} className="text-[var(--text-muted)]" />
                    <span className="font-mono text-xs text-[var(--text-muted)]">bash — rafli@portfolio</span>
                  </div>
                </div>
                {/* Terminal body */}
                <div className="p-4 min-h-[140px]">
                  <TerminalAnimation />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--text-muted)] font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-[var(--accent)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
