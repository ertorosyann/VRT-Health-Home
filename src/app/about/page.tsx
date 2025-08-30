'use client'

import { useLanguage } from '@/lib/useLanguage'
import { getAboutTranslation } from '@/lib/translations/about'
import { type Locale } from '@/lib/i18n'
import Image from 'next/image'
import CTAButtons from '@/components/CTAButtons'
import DoctorCarousel from '@/components/DoctorCarousel'

export default function About() {
  const { currentLocale } = useLanguage()
  const locale = currentLocale as Locale
  
  const team = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Medical Director',
      bio: 'Dr. Williams brings over 15 years of experience in home healthcare, specializing in geriatric care and chronic disease management.',
      image: '/images/doctor 1.jpg',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director of Nursing',
      bio: 'Michael leads our nursing team with expertise in home health nursing and patient care coordination.',
      image: '/images/doctor2.jpg',
    },
    {
      name: 'Lisa Chen',
      role: 'Physical Therapy Manager',
      bio: 'Lisa specializes in home-based physical therapy and rehabilitation programs for patients of all ages.',
      image: '/images/avatar2.jpg',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Operations Officer',
      bio: 'Dr. Wilson oversees our daily operations and ensures the highest standards of care delivery across all services.',
      image: '/images/avatar3.jpg',
    },
  ]

  const values = [
    {
      title: getAboutTranslation(locale, 'values.compassion.title'),
      description: getAboutTranslation(locale, 'values.compassion.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: getAboutTranslation(locale, 'values.excellence.title'),
      description: getAboutTranslation(locale, 'values.excellence.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: getAboutTranslation(locale, 'values.integrity.title'),
      description: getAboutTranslation(locale, 'values.integrity.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: getAboutTranslation(locale, 'values.innovation.title'),
      description: getAboutTranslation(locale, 'values.innovation.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/doctor6.jpg"
            alt="Healthcare Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-health-50/80 to-primary-50/80"></div> */}
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left px-4 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 bg-gradient-to-r from-health-600 to-primary-600 bg-clip-text text-transparent leading-tight">
                {getAboutTranslation(locale, 'hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                {getAboutTranslation(locale, 'hero.subtitle')}
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {getAboutTranslation(locale, 'mission.title')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-health-600 mb-3">{getAboutTranslation(locale, 'mission.mission')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {getAboutTranslation(locale, 'mission.missionText')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-600 mb-3">{getAboutTranslation(locale, 'mission.vision')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {getAboutTranslation(locale, 'mission.visionText')}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{getAboutTranslation(locale, 'mission.whyWeDo')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {getAboutTranslation(locale, 'mission.whyWeDoText')}
                </p>
                
                {/* Mission Image */}
                <div className="mt-6">
                  <div className="w-full max-w-xs mx-auto bg-gradient-to-br from-health-200 to-primary-200 rounded-xl shadow-md p-6">
                    <div className="w-16 h-16 bg-health-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-health-700 font-medium">{getAboutTranslation(locale, 'mission.qualityCare')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getAboutTranslation(locale, 'values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getAboutTranslation(locale, 'values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-health-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getAboutTranslation(locale, 'team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getAboutTranslation(locale, 'team.subtitle')}
            </p>
          </div>
          
          {/* Team Carousel */}
          <div className="mb-12">
            <DoctorCarousel team={team} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-health-600">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-health-100">{getAboutTranslation(locale, 'stats.patientsServed')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-health-100">{getAboutTranslation(locale, 'stats.healthcareProfessionals')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-health-100">{getAboutTranslation(locale, 'stats.yearsOfService')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-health-100">{getAboutTranslation(locale, 'stats.patientSatisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {getAboutTranslation(locale, 'cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {getAboutTranslation(locale, 'cta.subtitle')}
          </p>
          <CTAButtons
            primaryText={getAboutTranslation(locale, 'cta.contactUs')}
            primaryHref="/contact"
            secondaryText={getAboutTranslation(locale, 'cta.viewServices')}
            secondaryHref="/services"
          />
        </div>
      </section>
    </div>
  )
} 