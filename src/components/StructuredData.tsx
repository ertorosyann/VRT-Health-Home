'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  data: object
  id?: string
}

export default function StructuredData({
  data,
  id = 'structured-data',
}: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById(id)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [data, id])

  return null
}

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VRT HOME HEALTH CARE',
  url: 'https://vrt-hh.com',
  logo: 'https://vrt-hh.com/images/logo.jpg',
  description:
    'Professional home healthcare services providing skilled nursing, physical therapy, occupational therapy, speech therapy, and personal care services.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+1 (818) 484-5806',
    email: 'vrtcare@gmail.com',
  },
  sameAs: [
    // Add social media links when available
    // 'https://www.facebook.com/vrt-hh',
    // 'https://www.linkedin.com/company/vrt-hh',
  ],
}

// LocalBusiness Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://vrt-hh.com',
  name: 'VRT HOME HEALTH CARE',
  image: 'https://vrt-hh.com/images/logo.jpg',
  description:
    'Professional home healthcare services providing skilled nursing, physical therapy, occupational therapy, speech therapy, and personal care services.',
  url: 'https://vrt-hh.com',
  telephone: '+1 (818) 484-5806', // Update with actual phone number
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '34.146601',
    longitude: '-118.266612',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
}

// MedicalBusiness Schema (more specific for healthcare)
export const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://vrt-hh.com',
  name: 'VRT HOME HEALTH CARE',
  image: 'https://vrt-hh.com/images/hero-healthcare.svg',
  description:
    'Professional home healthcare services providing skilled nursing, physical therapy, occupational therapy, speech therapy, and personal care services.',
  url: 'https://vrt-hh.com',
  telephone: '+1 (818) 484-5806',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  medicalSpecialty: [
    'Home Health Care',
    'Skilled Nursing',
    'Physical Therapy',
    'Occupational Therapy',
    'Speech Therapy',
    'Personal Care',
    'Medical Social Services',
  ],
}

// Service Schema
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Home Health Care Services',
  provider: {
    '@type': 'MedicalBusiness',
    name: 'VRT HOME HEALTH CARE',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Home Health Care Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Skilled Nursing Care',
          description:
            'Professional nursing care services provided in the comfort of your home',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Physical Therapy',
          description:
            'Physical therapy services for rehabilitation and mobility improvement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Occupational Therapy',
          description:
            'Occupational therapy to help with daily living activities',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Speech Therapy',
          description: 'Speech and language therapy services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Care Services',
          description:
            'Assistance with daily living activities and personal care',
        },
      },
    ],
  },
}

// Breadcrumb Schema
export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
