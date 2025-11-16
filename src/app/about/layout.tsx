import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - VRT HOME HEALTH CARE | Our Mission & Team',
  description:
    'Learn about VRT HOME HEALTH CARE - our mission, values, and experienced healthcare team. We provide compassionate, professional home healthcare services with a commitment to excellence.',
  keywords: [
    'about home health care',
    'home health care company',
    'home health care team',
    'home health care mission',
    'home health care values',
    'healthcare professionals',
    'home care agency about',
    'VRT health care about',
  ],
  openGraph: {
    title: 'About Us - VRT HOME HEALTH CARE | Our Mission & Team',
    description:
      'Learn about VRT HOME HEALTH CARE - our mission, values, and experienced healthcare team.',
    url: 'https://vrt-hh.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vrt-hh.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
