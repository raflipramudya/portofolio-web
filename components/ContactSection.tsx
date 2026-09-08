'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Linkedin, Github, Download, Send, Code2 } from 'lucide-react'

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'raflipramudya1110@gmail.com',
    href: 'mailto:raflipramudya1110@gmail.com',
    icon: Mail,
    accent: '#00d4aa',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+62 858-9965-9256',
    href: 'https://wa.me/6285899659256',
    icon: Phone,
    accent: '#25d366',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/raflipramudyap/',
    href: 'https://linkedin.com/in/raflipramudyap/',
    icon: Linkedin,
    accent: '#0a66c2',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/raflipramudya',
    href: 'https://github.com/raflipramudya',
    icon: Github,
    accent: '#e2e8f0',
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full
        bg-[var(--accent)]/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[var(--text-primary)] section-heading">
            Contact
          </h2>
          <p className="text-[var(--text-secondary)] mt-4">
            Mari terhubung dan diskusikan peluang bersama
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card relative overflow-hidden">
              {/* Glow decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--accent)]/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                    <Send size={18} className="text-[var(--accent)]" />
                  </div>
                  <span className="font-mono text-sm text-[var(--accent)]">// Open to Work</span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[var(--text-primary)] mb-3">
                  Tertarik Bekerja Sama?
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  Saya sedang mencari kesempatan sebagai{' '}
                  <strong className="text-[var(--text-primary)]">Software Developer / Web Developer</strong>.
                  Jangan ragu untuk menghubungi saya melalui kontak di bawah ini!
                </p>

                {/* Download CV CTA */}
                <motion.a
                  id="contact-download-cv"
                  href="/cv/Rafli_Pramudya_Putranto_CV.pdf"
                  download
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                    font-semibold text-[#050b18] bg-[var(--accent)]
                    hover:bg-[var(--accent-dim)] transition-all duration-200
                    shadow-[0_0_25px_rgba(0,212,170,0.35)] hover:shadow-[0_0_40px_rgba(0,212,170,0.55)]"
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
              </div>
            </div>

            {/* Tech stack note */}
            <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] font-mono text-xs text-[var(--text-muted)]">
              <span className="text-[var(--accent)]">// </span>
              Portfolio ini dibangun dengan{' '}
              <span className="text-[var(--text-secondary)]">Next.js 14</span> +{' '}
              <span className="text-[var(--text-secondary)]">TypeScript</span> +{' '}
              <span className="text-[var(--text-secondary)]">Tailwind CSS</span> +{' '}
              <span className="text-[var(--text-secondary)]">Framer Motion</span>
            </div>
          </motion.div>

          {/* Right: Contact links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.id}
                  id={`contact-${link.id}`}
                  href={link.href}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-5 rounded-xl
                    bg-[var(--bg-card)] border border-[var(--border-color)]
                    hover:border-opacity-50 transition-all duration-200
                    group shadow-card"
                  style={{ ['--link-accent' as string]: link.accent }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border
                      group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                    style={{
                      background: `${link.accent}15`,
                      borderColor: `${link.accent}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: link.accent }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[var(--text-muted)] font-mono mb-0.5">
                      {link.label}
                    </div>
                    <div
                      className="text-sm font-medium truncate transition-colors duration-200"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                    style={{ color: link.accent }}
                  >
                    →
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-[var(--border-color)]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
              <Code2 size={14} className="text-[var(--accent)]" />
              <span>Dibangun dengan ❤️ oleh</span>
              <span className="text-[var(--accent)] font-medium">Rafli Pramudya Putranto</span>
            </div>
            <span className="text-[var(--text-muted)] text-sm font-mono">
              © {new Date().getFullYear()} · All rights reserved
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
