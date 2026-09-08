'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillGroup {
  category: string
  icon: string
  accent: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: '💻',
    accent: '#00d4aa',
    skills: ['PHP', 'JavaScript', 'Python'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '🏗️',
    accent: '#3b82f6',
    skills: ['Laravel', 'Bootstrap'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    accent: '#f59e0b',
    skills: ['MySQL'],
  },
  {
    category: 'Version Control',
    icon: '🔀',
    accent: '#f97316',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Concepts & Methodology',
    icon: '📐',
    accent: '#8b5cf6',
    skills: ['RESTful API', 'SDLC (Waterfall)', 'Agile'],
  },
  {
    category: 'Other',
    icon: '⚙️',
    accent: '#ec4899',
    skills: ['CSS'],
  },
]

function SkillBadge({ skill, accent }: { skill: string; accent: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-mono font-medium
        border cursor-default transition-all duration-200"
      style={{
        background: `${accent}12`,
        color: accent,
        borderColor: `${accent}28`,
      }}
    >
      {skill}
    </motion.span>
  )
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]
        shadow-card hover:border-opacity-50 transition-all duration-300
        hover:-translate-y-0.5"
      style={{ ['--g-accent' as string]: group.accent }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl text-xl flex items-center justify-center
            border transition-all duration-200 group-hover:scale-110"
          style={{
            background: `${group.accent}15`,
            borderColor: `${group.accent}25`,
          }}
        >
          {group.icon}
        </div>
        <div>
          <h3 className="font-heading font-semibold text-[var(--text-primary)] text-sm">
            {group.category}
          </h3>
          <div
            className="text-xs font-mono mt-0.5"
            style={{ color: group.accent }}
          >
            {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.06 }}
          >
            <SkillBadge skill={skill} accent={group.accent} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 bg-[var(--bg-secondary)]">
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
            Skills
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">
            Teknologi dan tools yang saya kuasai
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
