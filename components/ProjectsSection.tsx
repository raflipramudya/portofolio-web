'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Layers } from 'lucide-react'

interface Project {
  id: string
  title: string
  badge?: string
  description: string
  techStack: string[]
  githubUrl: string
  demoUrl: string
  accent: string
  icon: string
}

const projects: Project[] = [
  {
    id: 'digital-archiving',
    title: 'Digital Archiving System with SHA-256 Security Algorithm',
    badge: 'Skripsi / Final Project',
    description:
      'Aplikasi digital archiving berbasis web menggunakan metode SDLC Waterfall, mengimplementasikan algoritma SHA-256 untuk menjaga integritas dan keaslian dokumen digital. Dilengkapi fitur audit retensi dan manajemen arsip multi-unit.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'SHA-256'],
    githubUrl: '#',
    demoUrl: '#',
    accent: '#00d4aa',
    icon: '🗃️',
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    description:
      'Platform e-commerce dengan antarmuka modern dan alur transaksi lengkap dari keranjang belanja hingga checkout. Dilengkapi fitur manajemen produk, kategori, dan riwayat pesanan.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
    githubUrl: '#',
    demoUrl: '#',
    accent: '#3b82f6',
    icon: '🛒',
  },
  {
    id: 'car-rental',
    title: 'Car Rental Booking System with Linear Regression',
    description:
      'Sistem booking rental mobil yang mengimplementasikan algoritma linear regression untuk estimasi harga sewa dan prediksi permintaan berdasarkan data historis, membantu manajemen pengambilan keputusan.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Python', 'Linear Regression'],
    githubUrl: '#',
    demoUrl: '#',
    accent: '#8b5cf6',
    icon: '🚗',
  },
  {
    id: 'gesture-game',
    title: 'Hand Gesture Recognition Game',
    description:
      'Game interaktif berbasis hand tracking menggunakan computer vision. Pemain mengontrol karakter dalam game menggunakan gerakan tangan secara real-time tanpa sentuhan fisik pada perangkat.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Pygame'],
    githubUrl: '#',
    demoUrl: '#',
    accent: '#f59e0b',
    icon: '✋',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]
        shadow-card hover:border-opacity-60 transition-all duration-300
        hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1
        overflow-hidden flex flex-col"
      style={{
        ['--card-accent' as string]: project.accent,
      }}
    >
      {/* Accent top border */}
      <div
        className="h-0.5 transition-all duration-300 group-hover:h-1"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(400px at 50% 0%, ${project.accent}08, transparent)`,
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                border transition-all duration-200 group-hover:scale-110"
              style={{
                background: `${project.accent}15`,
                borderColor: `${project.accent}30`,
              }}
            >
              {project.icon}
            </div>
            {project.badge && (
              <span
                className="px-2.5 py-1 rounded-full text-xs font-medium font-mono border"
                style={{
                  background: `${project.accent}15`,
                  color: project.accent,
                  borderColor: `${project.accent}30`,
                }}
              >
                {project.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              id={`project-github-${project.id}`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center
                text-[var(--text-muted)] hover:text-[var(--text-primary)]
                bg-[var(--bg-secondary)] hover:bg-[var(--bg-primary)]
                border border-[var(--border-color)]
                transition-all duration-200"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={14} />
            </motion.a>
            <motion.a
              id={`project-demo-${project.id}`}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center
                text-[var(--text-muted)] hover:text-[var(--text-primary)]
                bg-[var(--bg-secondary)] hover:bg-[var(--bg-primary)]
                border border-[var(--border-color)]
                transition-all duration-200"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)] mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="pt-4 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-1.5 mb-3">
            <Layers size={12} style={{ color: project.accent }} />
            <span className="font-mono text-xs text-[var(--text-muted)]">Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono border"
                style={{
                  background: `${project.accent}10`,
                  color: project.accent,
                  borderColor: `${project.accent}25`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)]">
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
            Projects
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">
            Proyek unggulan yang telah saya bangun
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-[var(--text-muted)] text-sm font-mono mt-8"
        >
          {'// '}Link GitHub & Demo akan diperbarui setelah repositori dipublikasikan
        </motion.p>
      </div>
    </section>
  )
}
