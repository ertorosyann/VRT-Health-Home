import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - VRT HOME HEALTH CARE | Get Started Today',
  description:
    "Contact VRT HOME HEALTH CARE to learn more about our home health care services. Call us today or fill out our contact form. We're here to help you and your family.",
  keywords: [
    'contact home health care',
    'home health care phone number',
    'home health care email',
    'home health care address',
    'home health care contact',
    'get home health care',
    'home health care consultation',
    'home health care inquiry',
  ],
  openGraph: {
    title: 'Contact Us - VRT HOME HEALTH CARE | Get Started Today',
    description:
      'Contact VRT HOME HEALTH CARE to learn more about our home health care services.',
    url: 'https://vrt-hh.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vrt-hh.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
