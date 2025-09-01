import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Complete SDET Automation Testing Course - 35 Days Training',
  description: 'Master SDET skills with our comprehensive 35-day automation testing course. Learn Selenium WebDriver, Java, Manual Testing, API Testing with hands-on practice challenges and interview preparation.',
  keywords: 'SDET course, automation testing, selenium webdriver, java programming, manual testing, API testing, test automation, software testing training, selenium tutorial, QA automation',
  authors: [{ name: 'Praful Pawar', url: 'https://github.com/Anurag-tester' }],
  creator: 'Praful Pawar',
  publisher: 'SDET Mastery',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testmaster-h65zt3ual-anurag-patels-projects-41254f00.vercel.app',
    title: 'Complete SDET Automation Testing Course - 35 Days Training',
    description: 'Master SDET skills with our comprehensive 35-day automation testing course. Learn Selenium WebDriver, Java, Manual Testing, API Testing with hands-on practice challenges.',
    siteName: 'SDET Mastery Course',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete SDET Automation Testing Course - 35 Days Training',
    description: 'Master SDET skills with our comprehensive 35-day automation testing course. Learn Selenium WebDriver, Java, Manual Testing, API Testing.',
    creator: '@PrafulPawar',
  },
  alternates: {
    canonical: 'https://testmaster-h65zt3ual-anurag-patels-projects-41254f00.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="655a859ee70dde7f" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        <div id="__next">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}