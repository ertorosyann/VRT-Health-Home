import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vrthealthhome.com'),
  title: {
    default: 'VRT Health Home - Professional Home Healthcare Services',
    template: '%s | VRT Health Home'
  },
  description: 'VRT Health Home provides professional, compassionate home healthcare services. Our experienced team delivers personalized care in the comfort of your home.',
  keywords: ['home healthcare', 'home health services', 'VRT health', 'professional care', 'home nursing', 'healthcare at home'],
  authors: [{ name: 'VRT Health Home' }],
  creator: 'VRT Health Home',
  publisher: 'VRT Health Home',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vrthealthhome.com',
    title: 'VRT Health Home - Professional Home Healthcare Services',
    description: 'VRT Health Home provides professional, compassionate home healthcare services. Our experienced team delivers personalized care in the comfort of your home.',
    siteName: 'VRT Health Home',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRT Health Home - Professional Home Healthcare Services',
    description: 'VRT Health Home provides professional, compassionate home healthcare services.',
  },
  category: 'healthcare',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
