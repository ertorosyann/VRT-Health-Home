import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Health Care Services - Skilled Nursing, Physical Therapy & More',
  description:
    'Comprehensive home health care services including skilled nursing, physical therapy, occupational therapy, speech therapy, personal care, and medical social services. Professional care in the comfort of your home.',
  keywords: [
    'home health care services',
    'skilled nursing services',
    'home physical therapy',
    'occupational therapy home care',
    'speech therapy services',
    'home health aide services',
    'personal care services',
    'medical social services',
    'home health care programs',
    'in-home care services',
    'home health care near me',
    'home health services',
  ],
  openGraph: {
    title:
      'Home Health Care Services - Skilled Nursing, Physical Therapy & More',
    description:
      'Comprehensive home health care services including skilled nursing, physical therapy, occupational therapy, and more.',
    url: 'https://vrt-hh.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vrt-hh.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
