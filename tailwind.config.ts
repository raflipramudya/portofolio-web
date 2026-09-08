/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark base palette
        navy: {
          950: '#050b18',
          900: '#0a0f1e',
          800: '#0d1528',
          700: '#111d35',
          600: '#162140',
        },
        // Electric teal accent
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          glow: '#00d4aa',
        },
        accent: {
          DEFAULT: '#00d4aa',
          dim: '#00b894',
          muted: 'rgba(0, 212, 170, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 170, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 170, 0.6)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00d4aa' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0, 212, 170, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 212, 170, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 212, 170, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
