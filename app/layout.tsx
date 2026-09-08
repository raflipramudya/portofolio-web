import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portofolio-web-rafli12.vercel.app'),
  title: 'Rafli Pramudya Putranto — Software Developer',
  description:
    'Fresh graduate Informatika dengan fokus Software Development. Berpengalaman membangun aplikasi web dari perencanaan hingga deployment. Menguasai PHP, Laravel, MySQL, dan RESTful API.',
  keywords: [
    'Rafli Pramudya Putranto',
    'Software Developer',
    'Web Developer',
    'Laravel Developer',
    'PHP Developer',
    'Portfolio',
    'Fresh Graduate',
    'Universitas Bhayangkara Jakarta Raya',
  ],
  authors: [{ name: 'Rafli Pramudya Putranto' }],
  creator: 'Rafli Pramudya Putranto',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://rafli-portfolio.vercel.app',
    title: 'Rafli Pramudya Putranto — Software Developer',
    description:
      'Fresh graduate Informatika dengan fokus Software Development. Berpengalaman membangun aplikasi web dari perencanaan hingga deployment.',
    siteName: 'Rafli Pramudya Putranto Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rafli Pramudya Putranto — Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafli Pramudya Putranto — Software Developer',
    description:
      'Fresh graduate Informatika dengan fokus Software Development.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
