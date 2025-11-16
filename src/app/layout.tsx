import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData, {
  organizationSchema,
  localBusinessSchema,
  medicalBusinessSchema,
} from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vrt-hh.com'),
  title: {
    default:
      'VRT HOME HEALTH CARE - Professional Home Healthcare Services | Home Care & Health Care',
    template: '%s | VRT HOME HEALTH CARE',
  },
  description:
    'VRT HOME HEALTH CARE provides professional, compassionate home healthcare services including skilled nursing, physical therapy, occupational therapy, speech therapy, and personal care. Trusted home care services in your area.',
  keywords: [
    'home care',
    'health care',
    'home healthcare',
    'home health services',
    'home health care services',
    'home nursing care',
    'skilled nursing at home',
    'home health agency',
    'in-home care services',
    'elderly home care',
    'senior home care',
    'home health aide',
    'physical therapy at home',
    'occupational therapy home care',
    'speech therapy home care',
    'medical home care',
    'professional home care',
    'home health care provider',
    'VRT health',
    'VRT home health care',
    'healthcare at home',
    'home care services',
    'home health nursing',
    'private home care',
    'home health care near me',
  ],
  authors: [{ name: 'VRT HOME HEALTH CARE' }],
  creator: 'VRT HOME HEALTH CARE',
  publisher: 'VRT HOME HEALTH CARE',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vrt-hh.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vrt-hh.com',
    title:
      'VRT HOME HEALTH CARE - Professional Home Healthcare Services | Home Care & Health Care',
    description:
      'VRT HOME HEALTH CARE provides professional, compassionate home healthcare services including skilled nursing, physical therapy, occupational therapy, speech therapy, and personal care. Trusted home care services in your area.',
    siteName: 'VRT HOME HEALTH CARE',
    images: [
      {
        url: 'https://vrt-hh.com/images/hero-healthcare.svg',
        width: 1200,
        height: 630,
        alt: 'VRT HOME HEALTH CARE - Professional Home Healthcare Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRT HOME HEALTH CARE - Professional Home Healthcare Services',
    description:
      'Professional home healthcare services including skilled nursing, physical therapy, and personal care.',
    images: ['https://vrt-hh.com/images/hero-healthcare.svg'],
  },
  category: 'healthcare',
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
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
      <body className={`${inter.className} ${robotoCondensed.variable}`}>
        <StructuredData data={organizationSchema} id="organization-schema" />
        <StructuredData data={localBusinessSchema} id="local-business-schema" />
        <StructuredData
          data={medicalBusinessSchema}
          id="medical-business-schema"
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
