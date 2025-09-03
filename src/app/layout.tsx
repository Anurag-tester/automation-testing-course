import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://testmaster-iota.vercel.app'),
  title: 'SDET Mastery - #1 Automation Testing Bootcamp | Get Job-Ready Fast ⚡',
  description: '🚀 Transform into a SDET Expert! Complete automation testing mastery with Selenium, Java, API Testing + 22 practice challenges. Thousands already landed jobs. Start your high-paying tech career today!',
  keywords: 'SDET bootcamp, automation testing jobs, selenium webdriver career, java programming jobs, SDET certification, automation testing bootcamp, software testing career, QA automation jobs, SDET training, get hired fast, tech career change, automation testing mastery',
  authors: [{ name: 'Praful Pawar', url: 'https://github.com/Anurag-tester' }],
  creator: 'Praful Pawar',
  publisher: 'SDET Mastery',
  applicationName: 'SDET Mastery Course',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testmaster-iota.vercel.app',
    title: 'SDET Mastery - #1 Automation Testing Bootcamp | Get Job-Ready Fast ⚡',
    description: '🚀 Join thousands who landed high-paying SDET jobs! Complete automation testing mastery: Selenium + Java + API Testing + Real projects. Start your tech career transformation now!',
    siteName: 'SDET Mastery',
    images: [{
      url: '/apple-touch-icon.png',
      width: 180,
      height: 180,
      alt: 'SDET Mastery - Complete Automation Testing Course'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDET Mastery - #1 Automation Testing Bootcamp ⚡',
    description: '🚀 Join thousands landing high-paying SDET jobs! Complete automation mastery + real projects. Transform your career today!',
    creator: '@PrafulPawar',
  },
  alternates: {
    canonical: 'https://testmaster-iota.vercel.app',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google655a859ee70dde7f',
  },
  category: 'education',
  classification: 'Education, Technology, Programming, Software Testing',
  other: {
    'google-site-verification': 'google655a859ee70dde7f',
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && { 'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION }),
    ...(process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION && { 'p:domain_verify': process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION }),
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
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

        <meta name="application-name" content="SDET Mastery" />
        <meta name="apple-mobile-web-app-title" content="SDET Mastery" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="author" content="Praful Pawar" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <style dangerouslySetInnerHTML={{
          __html: `*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.text-center{text-align:center}.bg-white{background-color:#fff}.text-gray-900{color:#111827}.text-gray-600{color:#4b5563}.animate-spin{animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.rounded-full{border-radius:9999px}.border-2{border-width:2px}.border-blue-600{border-color:#2563eb}.w-8{width:2rem}.h-8{height:2rem}.border-t-transparent{border-top-color:transparent}`
        }} />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JJXLG5C"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5JJXLG5C');`}
        </Script>
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NSR19DVC2M" strategy="afterInteractive" />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
            gtag('config', 'G-NSR19DVC2M');`}
        </Script>
        
        {children}
        <CookieConsent />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}