'use client'

import ContactForm from './ContactForm'
import CTAButtons from '@/components/CTAButtons'
import DirectionsButton from '@/components/DirectionsButton'
import { useLanguage } from '@/lib/useLanguage'
import { getContactTranslation } from '@/lib/translations/contact'
import { type Locale } from '@/lib/i18n'

export default function Contact() {
  const { currentLocale } = useLanguage()
  const locale = currentLocale as Locale

  const contactInfo = [
    {
      title: getContactTranslation(locale, 'contactInfo.phone'),
      content: getContactTranslation(locale, 'contactInfo.phoneNumber'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: getContactTranslation(locale, 'contactInfo.email'),
      content: getContactTranslation(locale, 'contactInfo.emailAddress'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: getContactTranslation(locale, 'contactInfo.address'),
      content: getContactTranslation(locale, 'contactInfo.addressText'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: getContactTranslation(locale, 'contactInfo.hours'),
      content: getContactTranslation(locale, 'contactInfo.hoursText'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const faqs = getContactTranslation(locale, 'faq.questions')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-50 to-primary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                {getContactTranslation(locale, 'hero.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                {getContactTranslation(locale, 'hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-0">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{getContactTranslation(locale, 'contactInfo.title')}</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {getContactTranslation(locale, 'contactInfo.subtitle')}
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-health-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <div className="text-health-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{getContactTranslation(locale, 'emergency.title')}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {getContactTranslation(locale, 'emergency.description')}
                </p>
                <div className="text-2xl font-bold text-health-600">{getContactTranslation(locale, 'emergency.phoneNumber')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getContactTranslation(locale, 'map.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getContactTranslation(locale, 'map.subtitle')}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Map */}
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.9651!2d-118.2551!3d34.1425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sGlendale%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </div>
                
                {/* Location Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{getContactTranslation(locale, 'map.locationTitle')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {getContactTranslation(locale, 'map.locationDescription')}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-health-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{getContactTranslation(locale, 'map.address')}</h4>
                        <p className="text-gray-600">123 Healthcare Ave, Suite 100<br />City, State 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-health-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{getContactTranslation(locale, 'map.businessHours')}</h4>
                        <p className="text-gray-600">{getContactTranslation(locale, 'map.businessHoursText')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-health-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{getContactTranslation(locale, 'map.phone')}</h4>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <DirectionsButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getContactTranslation(locale, 'faq.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getContactTranslation(locale, 'faq.subtitle')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-health-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getContactTranslation(locale, 'cta.title')}
          </h2>
          <p className="text-xl text-health-100 mb-8 max-w-2xl mx-auto">
            {getContactTranslation(locale, 'cta.subtitle')}
          </p>
          <CTAButtons
            primaryText={getContactTranslation(locale, 'cta.callNow')}
            primaryHref="tel:(555) 123-4567"
            secondaryText={getContactTranslation(locale, 'cta.viewServices')}
            secondaryHref="/services"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          />
        </div>
      </section>
    </div>
  )
} 