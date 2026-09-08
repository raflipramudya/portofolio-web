# Rafli Pramudya Putranto — Portfolio Website

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion
- **Fonts:** Space Grotesk + Inter + JetBrains Mono (Google Fonts)
- **Icons:** Lucide React
- **Theme:** next-themes (Dark / Light mode)

## 📁 Project Structure

```
portfolio-web/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Global styles + Tailwind directives
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── EducationSection.tsx
│   ├── CertificationsSection.tsx
│   ├── ContactSection.tsx
│   └── ThemeToggle.tsx
├── public/
│   └── cv/               # Place your CV PDF here
│       └── Rafli-Pramudya-Putranto-CV.pdf
└── ...
```

## 🛠️ Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📋 Before Deploying — Checklist

Replace these placeholder values in the codebase:

| File | What to Change |
|------|---------------|
| `components/ContactSection.tsx` | Email, WhatsApp number, LinkedIn URL, GitHub URL |
| `components/ProjectsSection.tsx` | GitHub repo links & demo links for each project |
| `app/layout.tsx` | OpenGraph URL (line with `rafli-portfolio.vercel.app`) |
| `public/cv/` | Add your actual CV PDF file as `Rafli-Pramudya-Putranto-CV.pdf` |
| `public/` | Replace `favicon.ico` and `og-image.png` with your own assets |

## ☁️ Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Rafli Portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Click **Deploy** — no additional configuration required!

## 🎨 Customization

- **Colors:** Edit `tailwind.config.ts` and `app/globals.css` CSS variables
- **Content:** All content is in the component files under `components/`
- **Fonts:** Change font imports in `app/layout.tsx`
- **Add sections:** Create a new component in `components/` and import it in `app/page.tsx`

## 📄 License

© 2025 Rafli Pramudya Putranto. All rights reserved.
