'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CTAButtons from '@/components/CTAButtons'
import NavigationButton from '@/components/NavigationButton'
import { useLanguage } from '@/lib/useLanguage'
import { getServicesTranslation } from '@/lib/translations/services'
import { type Locale } from '@/lib/i18n'

export default function Services() {
  const { currentLocale } = useLanguage()
  const locale = currentLocale as Locale

  const services = getServicesTranslation(locale, 'services')
  const process = getServicesTranslation(locale, 'process.steps')

  // Map service titles to IDs for navigation
  const getServiceId = (title: string): string => {
    const titleLower = title.toLowerCase()
    if (
      titleLower.includes('skilled nurse') ||
      titleLower.includes('nursing')
    ) {
      return 'nursing-care'
    }
    if (
      titleLower.includes('physical therapist') ||
      titleLower.includes('physical therapy')
    ) {
      return 'physical-therapy'
    }
    if (
      titleLower.includes('occupational therapist') ||
      titleLower.includes('occupational therapy')
    ) {
      return 'occupational-therapy'
    }
    if (
      titleLower.includes('speech therapist') ||
      titleLower.includes('speech therapy')
    ) {
      return 'speech-therapy'
    }
    if (titleLower.includes('dietician') || titleLower.includes('dietitian')) {
      return 'dietician'
    }
    if (
      titleLower.includes('medical social') ||
      titleLower.includes('social service')
    ) {
      return 'medical-social-services'
    }
    if (
      titleLower.includes('home health aide') ||
      titleLower.includes('personal care')
    ) {
      return 'personal-care'
    }
    if (titleLower.includes('medical equipment')) {
      return 'medical-equipment'
    }
    return `service-${title.toLowerCase().replace(/\s+/g, '-')}`
  }

  // Handle hash navigation on page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1)
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 300)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-50 to-primary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                {getServicesTranslation(locale, 'hero.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                {getServicesTranslation(locale, 'hero.subtitle')}
              </p>
            </div>
            <div className="text-center order-first lg:order-last mb-6 sm:mb-8 lg:mb-0 px-4 sm:px-0">
              <Image
                src="/carusel/c4.webp"
                alt="Contact Healthcare Services"
                width={600}
                height={400}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-br from-health-50 to-primary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-6 sm:gap-8 px-4 sm:px-0">
            {services.map((service: any, index: number) => {
              const serviceId = getServiceId(service.title)
              // Create varying sizes: some cards span 2 columns, some span 1, some span 2 rows
              const getGridClasses = () => {
                const patterns = [
                  'lg:col-span-2 lg:row-span-1', // index 0: wide
                  'lg:col-span-1 lg:row-span-2', // index 1: tall
                  'lg:col-span-1 lg:row-span-1', // index 2: small
                  'lg:col-span-2 lg:row-span-1', // index 3: wide
                  'lg:col-span-1 lg:row-span-1', // index 4: small
                  'lg:col-span-1 lg:row-span-2', // index 5: tall
                  'lg:col-span-2 lg:row-span-1', // index 6: wide
                ]
                return (
                  patterns[index % patterns.length] ||
                  'lg:col-span-1 lg:row-span-1'
                )
              }

              const gridClasses = getGridClasses()
              const isTall = gridClasses.includes('row-span-2')
              const isWide = gridClasses.includes('col-span-2')

              // Adjust padding and image height based on card size
              const paddingClass = isTall
                ? 'p-4 sm:p-6 md:p-10'
                : isWide
                ? 'p-4 sm:p-6 md:p-8'
                : 'p-4 sm:p-6 md:p-8'
              const imageHeightClass = isTall
                ? 'h-40 sm:h-48 md:h-64'
                : isWide
                ? 'h-32 sm:h-40 md:h-56'
                : 'h-32 sm:h-40 md:h-48'

              return (
                <div
                  key={index}
                  id={serviceId}
                  className={`bg-[#e6fbfc] rounded-xl sm:rounded-2xl ${paddingClass} hover:shadow-lg transition-shadow duration-300 scroll-mt-20 ${gridClasses}`}
                >
                  {/* Service Image */}
                  <div className="mb-4 sm:mb-6">
                    {index === 0 && (
                      <Image
                        src="/images/skilled-nurses-service.png"
                        alt="Skilled Nursing Care"
                        width={600}
                        height={400}
                        className={`w-full ${imageHeightClass} object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4`}
                      />
                    )}
                    {index === 1 && (
                      <Image
                        src="/images/physical-therapy.png"
                        alt="Physical Therapy"
                        width={600}
                        height={400}
                        className={`w-full ${imageHeightClass} object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4`}
                      />
                    )}
                    {index === 2 && (
                      <Image
                        src="/images/occupational-therapist.png"
                        alt="Personal Care Assistance"
                        width={600}
                        height={400}
                        className={`w-full ${imageHeightClass} object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4`}
                      />
                    )}
                    {index === 3 && (
                      <Image
                        src="/services-img/speech.png"
                        alt="Speech Therapy"
                        width={600}
                        height={400}
                        className={`w-full ${imageHeightClass} object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4`}
                      />
                    )}
                    {index === 4 && (
                      <Image
                        src="/images/dietician.png"
                        alt="Occupational Therapy"
                        width={600}
                        height={400}
                        className={`w-full ${imageHeightClass} object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4`}
                      />
                    )}
                    {index === 5 && (
                      <Image
                        src="/images/medical-social.png"
                        alt="Speech Therapy"
                        width={600}
                        height={400}
                        className={`w-full ${imageHeightClass} object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4`}
                      />
                    )}
                    {index === 6 && (
                      <Image
                        src="/images/home-health-aides.png"
                        alt="Home Health Aide"
                        width={600}
                        height={400}
                        className={`w-full ${imageHeightClass} object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4`}
                      />
                    )}
                  </div>

                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-${
                      index % 2 === 0 ? 'health' : 'primary'
                    }-100 rounded-full flex items-center justify-center mb-4 sm:mb-6`}
                  >
                    <div
                      className={`text-${
                        index % 2 === 0 ? 'health' : 'primary'
                      }-600`}
                    >
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map(
                      (feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-health-500 mr-3 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who Needs Home Care */}
      <section className="section-padding bg-gradient-to-br from-health-20 to-primary-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/who-we-need.png')",
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-health-800 mb-4 ml-auto">
              {getServicesTranslation(locale, 'whoNeedsCare.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl ml-auto">
              {getServicesTranslation(locale, 'whoNeedsCare.subtitle')
                .split(' meet ')
                .map((part: string, index: number, array: string[]) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <>
                        {' meet'}
                        <br />
                      </>
                    )}
                  </span>
                ))}
            </p>
          </div>

          <div className="max-w-4xl ml-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-4">
                    {getServicesTranslation(
                      locale,
                      'whoNeedsCare.criteria'
                    ).map((criterion: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-health-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-health-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-health-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-health-800 mb-4">
                    Important Note
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {getServicesTranslation(locale, 'whoNeedsCare.note')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getServicesTranslation(locale, 'paymentOptions.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {getServicesTranslation(locale, 'paymentOptions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getServicesTranslation(locale, 'paymentOptions.options').map(
              (option: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-health-600">
                      {option.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {option.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-health-100 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-health-800 mb-3">
                Requirement
              </h4>
              <p className="text-gray-700">
                {getServicesTranslation(locale, 'paymentOptions.requirement')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="section-padding bg-gray-50"
        style={{
          backgroundImage: "url('/services-img/how-it-works.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container-max">
          <div className="text-center mb-16 bg-white/40 rounded-2xl p-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getServicesTranslation(locale, 'process.title')}
            </h2>
            <p className="text-xl font-medium text-gray-900 max-w-3xl mx-auto">
              {getServicesTranslation(locale, 'process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[rgb(2,199,197)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {getServicesTranslation(locale, 'coverage.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {getServicesTranslation(locale, 'coverage.subtitle')}
              </p>
              <div className="space-y-4">
                {getServicesTranslation(locale, 'coverage.features').map(
                  (feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-health-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div
              className="bg-gray-50 rounded-2xl p-8"
              style={{
                backgroundImage: "url('/services-img/area.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="text-center bg-white/60 rounded-2xl p-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {getServicesTranslation(locale, 'coverage.coverageTitle')}
                </h3>
                <p className="font-medium text-gray-900 leading-relaxed mb-4">
                  {getServicesTranslation(
                    locale,
                    'coverage.coverageDescription'
                  )}
                </p>
                <NavigationButton href="/contact" className="btn-primary">
                  {getServicesTranslation(locale, 'coverage.checkAvailability')}
                </NavigationButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[rgb(2,199,197)]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getServicesTranslation(locale, 'cta.title')}
          </h2>
          <p className="text-xl text-health-100 mb-8 max-w-2xl mx-auto">
            {getServicesTranslation(locale, 'cta.subtitle')}
          </p>
          <CTAButtons
            primaryText={getServicesTranslation(locale, 'cta.contactUs')}
            primaryHref="/contact"
            secondaryText={getServicesTranslation(locale, 'cta.learnMore')}
            secondaryHref="/about"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          />
        </div>
      </section>
    </div>
  )
}
