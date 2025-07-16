import type { Metadata } from 'next'
import { Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/Animation/LoadingScreen'

// Brutalist Sans for heading & UI
const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Geist Mono for technical sections
const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'designeer — Design. Code. Experience.',
  description:
    'Designeer adalah studio desain dan pengembangan web modern yang menggabungkan brutalist aesthetic dengan UX yang kuat. Kami membuat website fungsional dan penuh karakter.',
  authors: [{ name: 'designeer', url: 'https://designeer.studio' }],
  keywords: [
    'desain web',
    'brutalist website',
    'UI/UX',
    'pengembangan web',
    'web development',
    'creative studio',
    'portofolio',
  ],
  metadataBase: new URL('https://designeer.studio'),
  openGraph: {
    title: 'designeer — Design. Code. Experience.',
    description:
      'Web design studio dengan gaya brutalism modern, fokus pada pengalaman dan estetika yang kuat.',
    url: 'https://designeer.studio',
    siteName: 'designeer',
    type: 'website',
  },
  robots: { index: true, follow: true },
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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LoadingScreen/>
        <main>{children}</main>
      </body>
    </html>
  )
}
