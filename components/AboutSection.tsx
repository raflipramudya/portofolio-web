'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Languages, Heart } from 'lucide-react'

const softSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Continuous Learning',
  'Responsibility',
]

const languages = [
  { name: 'Bahasa Indonesia', level: 'Native', percent: 100 },
  { name: 'English', level: 'Passive (Reading & Listening)', percent: 65 },
]

const interests = [
  'Software Development',
  'Web Development',
  'Computer Vision',
  'Database Architecture',
  'SDLC & Agile',
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] section-heading">
        {children}
      </h2>
    </div>
  )
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export { FadeInSection, SectionTitle }

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Main about text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                <User size={18} className="text-[var(--accent)]" />
              </div>
              <span className="font-mono text-sm text-[var(--accent)]">// Professional Summary</span>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              Saya adalah <strong className="text-[var(--text-primary)]">Fresh Graduate Informatika</strong> dari
              Fakultas Ilmu Komputer, Universitas Bhayangkara Jakarta Raya (IPK 3.35) dengan fokus utama di bidang{' '}
              <strong className="text-[var(--accent)]">Software Development</strong>.
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              Saya memiliki pengalaman magang yang nyata dalam membangun{' '}
              <strong className="text-[var(--text-primary)]">aplikasi digital archiving berbasis web</strong> untuk
              Kementerian Kebudayaan — Museum Nasional Indonesia, mulai dari tahap perencanaan, desain UI/database,
              hingga deployment ke end-user secara langsung.
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              Saya menguasai <span className="font-mono text-[var(--accent)]">PHP</span>,{' '}
              <span className="font-mono text-[var(--accent)]">Laravel</span>, dan{' '}
              <span className="font-mono text-[var(--accent)]">MySQL</span>, dengan pemahaman kuat tentang{' '}
              <strong className="text-[var(--text-primary)]">RESTful API</strong> dan{' '}
              <strong className="text-[var(--text-primary)]">SDLC</strong>. Selain itu, saya juga memiliki proyek
              mandiri di bidang web development dan computer vision.
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              Saya antusias untuk terus berkembang, berkolaborasi lintas tim, dan berkontribusi sebagai{' '}
              <strong className="text-[var(--text-primary)]">Software Developer / Web Developer</strong> di
              lingkungan yang dinamis.
            </p>

            {/* Soft skills */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={16} className="text-[var(--accent)]" />
                <span className="font-mono text-sm text-[var(--text-muted)]">// Soft Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium font-mono
                      bg-[var(--bg-card)] text-[var(--text-secondary)]
                      border border-[var(--border-color)]
                      hover:border-[var(--accent)]/40 hover:text-[var(--accent)]
                      transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Languages + Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Languages */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                  <Languages size={16} className="text-[var(--accent)]" />
                </div>
                <span className="font-heading font-semibold text-[var(--text-primary)]">Languages</span>
              </div>

              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[var(--text-primary)]">{lang.name}</span>
                      <span className="font-mono text-xs text-[var(--accent)]">{lang.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percent}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-[var(--accent)]">// Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium
                      bg-[var(--accent)]/10 text-[var(--accent)]
                      border border-[var(--accent)]/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Experience */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-[var(--accent)]">// Other Experience</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] mt-1 flex-shrink-0">▸</span>
                  Program KKN di Kelurahan Mustika Jaya, Kabupaten Bekasi — fokus penguatan peran TI dalam pembangunan daerah.
                </li>
                <li className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] mt-1 flex-shrink-0">▸</span>
                  Relawan di event konser musik.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
