'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/useLanguage'
import { getHomeTranslation } from '@/lib/translations/home'
import { type Locale } from '@/lib/i18n'
import DoctorCarousel from '@/components/DoctorCarousel'

export default function HomePage() {
  const { currentLocale } = useLanguage()
  const locale = currentLocale as Locale

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-health-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                {getHomeTranslation(locale, 'hero.title')}{' '}
                <span className="text-health-600">{getHomeTranslation(locale, 'hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                {getHomeTranslation(locale, 'hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary text-center py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg">
                  {getHomeTranslation(locale, 'hero.getStarted')}
                </Link>
                <Link href="/services" className="btn-secondary text-center py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg">
                  {getHomeTranslation(locale, 'hero.learnMore')}
                </Link>
              </div>
            </div>
            <div className="relative order-first lg:order-last mb-8 lg:mb-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{getHomeTranslation(locale, 'whyChoose.title')}</h3>
                  <ul className="text-left space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                    {getHomeTranslation(locale, 'whyChoose.items').map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-health-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Carousel Section */}
      <section className="bg-white">
        <div className="text-center py-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified medical professionals is dedicated to providing exceptional healthcare services with compassion and expertise.
          </p>
        </div>
        
        <DoctorCarousel />
      </section>

      {/* Emergency CTA Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="container-max text-center px-4 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Need a doctor for checkup?{' '}
            <span className="text-health-600">Call for an emergency services!</span>
          </h2>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our All Department
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat sunt culpa officia deserunt mollit anim est laborum.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* Cardiology */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Cardiology</h3>
            </div>

            {/* Ophthalmology */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Gynecology</h3>
            </div>

            {/* Gynecology */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Gynecology</h3>
            </div>

            {/* Dental Care */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Dental Care</h3>
            </div>

            {/* Plastic Surgery */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Plastic Surgery</h3>
            </div>

            {/* Pediatrics */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Pediatrics</h3>
            </div>

            {/* Gastrology */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Gastrology</h3>
            </div>

            {/* Neurology */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:bg-health-600 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors duration-300">
                <svg className="w-8 h-8 text-health-600 group-hover:text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Neurology</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Care Providers Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Professional Care Provider
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* Doctor 1 */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-health-600 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/images/avatar2.jpg" alt="Doctor 1" width={80} height={80} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chriss Taylor</h3>
              <p className="text-sm text-health-600">Internal Medicine</p>
            </div>

                       {/* Doctor 2 */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-health-600 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/images/avatar3.jpg" alt="Doctor 1" width={80} height={80} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trikien Munaska</h3>
              <p className="text-sm text-health-600">Internal Medicine</p>
            </div>

            {/* Doctor 3 */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-health-600 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/images/avatar2.jpg" alt="Doctor 1" width={80} height={80} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trikien Munaska</h3>
              <p className="text-sm text-health-600">Internal Medicine</p>
            </div>

            {/* Doctor 4 */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-health-600 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/images/avatar3.jpg" alt="Doctor 1" width={80} height={80} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Khabian Jerry</h3>
              <p className="text-sm text-health-600">Internal Medicine</p>
            </div>

            {/* Doctor 5 */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-health-600 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/images/avatar3.jpg" alt="Doctor 1" width={80} height={80} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chriss Taylor</h3>
              <p className="text-sm text-health-600">Internal Medicine</p>
            </div>

            {/* Doctor 6 */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-health-600 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/images/avatar3.jpg" alt="Doctor 1" width={80} height={80} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jonshon Aliven</h3>
              <p className="text-sm text-health-600">Internal Medicine</p>
            </div>

            {/* Doctor 7 */}
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-health-600 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/images/avatar3.jpg" alt="Doctor 1" width={80} height={80} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trikien Munaska</h3>
              <p className="text-sm text-health-600">Internal Medicine</p>
            </div>

            {/* Join Our Team CTA */}
            <div className="text-center p-6 rounded-xl bg-health-600 text-white border border-health-600 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold mb-3">Join our team</h3>
              <p className="text-sm text-health-100 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Stats Section */}
      <section className="section-padding bg-health-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container-max relative z-10">
          <div className="bg-white rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  We always ready for a challenge.
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-health-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-900">+00 568 467 46</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-900">medicust@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </h3>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-12 h-12 bg-health-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-3xl font-bold text-gray-900">8648+</span>
                    </div>
                    <p className="text-sm text-gray-600">Satisfied Clients</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-12 h-12 bg-health-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="text-3xl font-bold text-gray-900">57658+</span>
                    </div>
                    <p className="text-sm text-gray-600">World Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Patient Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat sunt culpa officia deserunt mollit anim est laborum.
            </p>
          </div>
          
          <div className="relative px-4 sm:px-0">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mx-12">
              {getHomeTranslation(locale, 'testimonials.items').map((testimonial: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                  {/* Profile Section */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4">
                    <svg className="w-8 h-8 text-health-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900 leading-relaxed">
                      Duis aute irure dolor in reprehe voluptate velit esse cillum dolo sunt culpa officia.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-health-600">
        <div className="container-max text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {getHomeTranslation(locale, 'cta.title')}
          </h2>
          <p className="text-lg sm:text-xl text-health-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {getHomeTranslation(locale, 'cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" className="bg-white text-health-600 hover:bg-gray-100 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg">
              {getHomeTranslation(locale, 'cta.contactUs')}
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-health-600 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg">
              {getHomeTranslation(locale, 'cta.viewServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
