'use client'

import Link from 'next/link'
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
              <img 
                src="/images/contact-hero.svg" 
                alt="Contact Healthcare Services" 
                className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            {services.map((service: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                {/* Service Image */}
                <div className="mb-4 sm:mb-6">
                  {index === 0 && (
                    <img 
                      src="/images/nursing-care.svg" 
                      alt="Skilled Nursing Care" 
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src="/images/physical-therapy.svg" 
                      alt="Physical Therapy" 
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                    />
                  )}
                  {index === 2 && (
                    <img 
                      src="/images/personal-care.svg" 
                      alt="Personal Care Assistance" 
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                    />
                  )}
                  {index === 3 && (
                    <img 
                      src="/images/medical-equipment.svg" 
                      alt="Medical Equipment & Supplies" 
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                    />
                  )}
                  {index === 4 && (
                    <img 
                      src="/images/occupational-therapy.svg" 
                      alt="Occupational Therapy" 
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                    />
                  )}
                  {index === 5 && (
                    <img 
                      src="/images/speech-therapy.svg" 
                      alt="Speech Therapy" 
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                    />
                  )}
                </div>
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-${index % 2 === 0 ? 'health' : 'primary'}-100 rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                  <div className={`text-${index % 2 === 0 ? 'health' : 'primary'}-600`}>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-health-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getServicesTranslation(locale, 'process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getServicesTranslation(locale, 'process.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                {getServicesTranslation(locale, 'coverage.features').map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-health-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{getServicesTranslation(locale, 'coverage.coverageTitle')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {getServicesTranslation(locale, 'coverage.coverageDescription')}
                </p>
                <NavigationButton href="/contact" className="btn-primary">
                  {getServicesTranslation(locale, 'coverage.checkAvailability')}
                </NavigationButton>
                
                {/* Coverage Area Image */}
                <div className="mt-6">
                  <img 
                    src="/images/hero-healthcare.svg" 
                    alt="Service Coverage Area" 
                    className="w-full max-w-xs mx-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-health-600">
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