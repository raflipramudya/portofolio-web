'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar } from 'lucide-react'

interface EducationEntry {
  id: string
  degree: string
  institution: string
  period: string
  detail?: string
  isHighlighted?: boolean
}

const educationList: EducationEntry[] = [
  {
    id: 'ubhara',
    degree: 'S.Kom, Informatika',
    institution: 'Fakultas Ilmu Komputer, Universitas Bhayangkara Jakarta Raya',
    period: '2022 – 2026',
    detail: 'IPK 3.35 · Fokus: Software Development',
    isHighlighted: true,
  },
  {
    id: 'sman2',
    degree: 'SMA / SMAN 2 Balelan',
    institution: 'SMAN 2 Balelan',
    period: '2019 – 2022',
  },
  {
    id: 'sman44',
    degree: 'SMA / SMAN 44 Bekasi',
    institution: 'SMAN 44 Bekasi',
    period: '2016 – 2019',
  },
  {
    id: 'sdn',
    degree: 'SDN Teluk Pucung VI',
    institution: 'SDN Teluk Pucung VI',
    period: '2010 – 2016',
  },
]

function EducationCard({ edu, index }: { edu: EducationEntry; index: number }) {
  const itemRef = useRef(null)
  const itemInView = useInView(itemRef, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -30 }}
      animate={itemInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative sm:pl-16 group"
    >
      {/* Timeline node */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
          flex items-center justify-center hidden sm:flex
          border-2 transition-all duration-300
          ${edu.isHighlighted
            ? 'bg-[var(--accent)]/10 border-[var(--accent)]/50 shadow-[0_0_20px_rgba(0,212,170,0.2)] group-hover:shadow-[0_0_30px_rgba(0,212,170,0.35)]'
            : 'bg-[var(--bg-card)] border-[var(--border-color)] group-hover:border-[var(--accent)]/30'
          }`}
      >
        <GraduationCap
          size={18}
          className={edu.isHighlighted ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}
        />
      </div>

      {/* Card */}
      <div
        className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300
          shadow-card hover:-translate-y-0.5
          ${edu.isHighlighted
            ? 'bg-[var(--bg-card)] border-[var(--accent)]/25 hover:border-[var(--accent)]/40'
            : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[var(--accent)]/15'
          }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            {edu.isHighlighted && (
              <span className="inline-block mb-1 px-2 py-0.5 rounded-full text-xs font-mono
                bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                Pendidikan Terakhir
              </span>
            )}
            <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)]">
              {edu.degree}
            </h3>
            {edu.institution !== edu.degree && (
              <p className={`text-sm mt-0.5 ${edu.isHighlighted ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}>
                {edu.institution}
              </p>
            )}
            {edu.detail && (
              <p className="text-xs font-mono text-[var(--text-muted)] mt-1.5">
                {edu.detail}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-sm font-mono shrink-0">
            <Calendar size={13} />
            {edu.period}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] section-heading">
            Education
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">Riwayat pendidikan formal</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/20 to-transparent hidden sm:block" />
          <div className="space-y-6">
            {educationList.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
