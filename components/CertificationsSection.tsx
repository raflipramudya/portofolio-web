'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Shield, BookOpen } from 'lucide-react'

interface Certification {
  id: string
  title: string
  issuer: string
  description: string
  icon: React.ElementType
  accent: string
  year?: string
}

const certifications: Certification[] = [
  {
    id: 'bnsp',
    title: 'Sertifikat BNSP',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    description: 'Skema LSP Software Engineer — Sertifikasi kompetensi nasional di bidang rekayasa perangkat lunak.',
    icon: Award,
    accent: '#00d4aa',
    year: '2025',
  },
  {
    id: 'cisco',
    title: 'Cybersecurity Course',
    issuer: 'Cisco Networking Academy',
    description: 'Kursus dasar keamanan siber meliputi ancaman, kerentanan, dan strategi perlindungan jaringan.',
    icon: Shield,
    accent: '#3b82f6',
    year: '2024',
  },
  {
    id: 'bimtek',
    title: 'Pre-Certification Training (Bimtek LSP)',
    issuer: 'Fakultas Ilmu Komputer, Universitas Bhayangkara Jakarta Raya',
    description: 'Pelatihan persiapan sertifikasi LSP sebagai bekal uji kompetensi di bidang Software Engineering.',
    icon: BookOpen,
    accent: '#8b5cf6',
    year: '2025',
  },
]

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = cert.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]
        shadow-card hover:border-opacity-50 transition-all duration-300
        hover:-translate-y-1 overflow-hidden"
    >
      {/* Accent bar */}
      <div
        className="h-0.5 group-hover:h-1 transition-all duration-300"
        style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(350px at 50% 0%, ${cert.accent}07, transparent)`,
        }}
      />

      <div className="p-6">
        {/* Icon */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center border
              group-hover:scale-110 transition-transform duration-200"
            style={{
              background: `${cert.accent}15`,
              borderColor: `${cert.accent}25`,
            }}
          >
            <Icon size={22} style={{ color: cert.accent }} />
          </div>
          {cert.year && (
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full border"
              style={{
                background: `${cert.accent}10`,
                color: cert.accent,
                borderColor: `${cert.accent}25`,
              }}
            >
              {cert.year}
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="font-heading font-bold text-base text-[var(--text-primary)] mb-1.5 leading-snug">
          {cert.title}
        </h3>
        <p className="text-xs font-mono mb-3" style={{ color: cert.accent }}>
          {cert.issuer}
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {cert.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-24 bg-[var(--bg-secondary)]">
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
            Certifications
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">
            Sertifikasi dan pelatihan profesional
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
