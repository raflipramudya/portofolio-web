'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const experience = {
  company: 'Kementerian Kebudayaan — Museum Nasional Indonesia',
  division: 'Divisi Data & Informasi',
  period: 'Jun 2025 – Des 2025',
  type: 'Magang',
  location: 'Jakarta, Indonesia',
  techStack: ['PHP', 'Laravel', 'MySQL', 'Git'],
  responsibilities: [
    'Merancang dan membangun aplikasi digital archiving berbasis web untuk menggantikan sistem penyimpanan manual berbasis Google Drive di museum-museum budaya seluruh Indonesia.',
    'Merancang alur kerja pengumpulan arsip bulanan agar tim dapat memantau unit/pihak yang belum menyerahkan arsip tepat waktu.',
    'Membangun fitur audit status retensi arsip untuk mengidentifikasi arsip yang sudah/belum memasuki masa retensi.',
    'Terlibat penuh dalam siklus pengembangan aplikasi — desain UI, desain database, dan deployment ke pengguna akhir — sambil berkolaborasi lintas tim dan menyusun dokumentasi teknis.',
    'Berhasil menyelesaikan proyek 100% sesuai target bersama tim.',
  ],
}

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] section-heading">
            Experience
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">Pengalaman kerja & magang</p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent hidden sm:block" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative sm:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 w-12 h-12 rounded-full
              bg-[var(--accent)]/10 border-2 border-[var(--accent)]/40
              flex items-center justify-center
              shadow-[0_0_20px_rgba(0,212,170,0.2)]
              hidden sm:flex"
            >
              <Briefcase size={18} className="text-[var(--accent)]" />
            </div>

            {/* Card */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]
              shadow-card hover:border-[var(--accent)]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Card top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[var(--accent)] via-blue-400 to-violet-500" />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs px-2 py-1 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                        {experience.type}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mt-2">
                      {experience.company}
                    </h3>
                    <p className="text-[var(--accent)] font-medium text-sm mt-1">
                      {experience.division}
                    </p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm font-mono">
                      <Calendar size={13} />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                      <MapPin size={13} />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {experience.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[var(--accent)] mt-0.5 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="pt-5 border-t border-[var(--border-color)]">
                  <span className="font-mono text-xs text-[var(--text-muted)] mr-3">Tech Stack:</span>
                  <div className="inline-flex flex-wrap gap-2 mt-2">
                    {experience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono font-medium
                          bg-[var(--bg-secondary)] text-[var(--accent)]
                          border border-[var(--accent)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
