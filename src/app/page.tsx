'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/useLanguage'
import { getHomeTranslation } from '@/lib/translations/home'
import { getMainTranslation } from '@/lib/translations/main'
import { type Locale } from '@/lib/i18n'
import DoctorCarousel from '@/components/DoctorCarousel'

export default function HomePage() {
  const { currentLocale } = useLanguage()
  const locale = currentLocale as Locale

  return (
    <div className="min-h-screen">
      {/* Title Section - First after header */}
      <section className="relative bg-white py-8 sm:py-12 md:py-16">
        <div className="container-max text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight animate-fade-in-up">
            {getHomeTranslation(locale, 'hero.title')}{' '}
            <span className="text-health-600">
              {getHomeTranslation(locale, 'hero.titleHighlight')}
            </span>
          </h1>
        </div>
      </section>

      {/* Doctor Carousel Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative z-10">
          <DoctorCarousel />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {getHomeTranslation(locale, 'coreValues.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getHomeTranslation(locale, 'coreValues.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {getHomeTranslation(locale, 'coreValues.values').map(
              (value: any, index: number) => (
                <div
                  key={index}
                  className="text-center group transform transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-gradient-to-br from-white to-health-50/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-health-100/50">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-health-500 to-health-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-health-600 group-hover:to-health-700 transition-all duration-300 shadow-lg animate-pulse-glow">
                      <span className="text-3xl sm:text-4xl font-bold text-white">
                        {value.word.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-health-600 mb-4 sm:mb-6">
                      {value.word}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Mission Statement Section with Buttons and Feature Cards */}
      <section className="relative bg-white overflow-hidden py-2 sm:py-4 md:py-8">
        {/* Background in two corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-health-100/70 to-health-200/50 rounded-br-3xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#268685]/30 to-[#268685]/50 rounded-tl-3xl z-0"></div>
        <div className="relative z-10">
          <div className="text-center pb-6 sm:pb-8 px-4 overflow-x-visible">
            <div className="max-w-5xl mx-auto overflow-x-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 sm:mb-12 overflow-x-visible">
                {/* Left side - Text content */}
                <div className="text-center lg:text-left animate-fade-in-up -ml-2 lg:-ml-4">
                  <p
                    className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                    style={{ animationDelay: '0.2s' }}
                  >
                    {getHomeTranslation(locale, 'hero.subtitle')}
                  </p>
                  <div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <Link
                      href="/contact"
                      className="btn-primary text-center py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      {getHomeTranslation(locale, 'hero.getStarted')}
                    </Link>
                    <Link
                      href="/services"
                      className="btn-secondary text-center py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {getHomeTranslation(locale, 'hero.learnMore')}
                    </Link>
                  </div>
                </div>

                {/* Mobile Stats - Horizontal scrollable cards */}
                <div
                  className="lg:hidden mt-6 sm:mt-8 animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-health-500 to-health-600 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col items-center justify-center animate-pulse-glow transform hover:scale-105 transition-transform">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        24/7
                      </div>
                      <div className="text-xs sm:text-sm text-white/90 font-medium text-center">
                        {getHomeTranslation(
                          locale,
                          'featureCards.available247'
                        )}
                      </div>
                    </div>
                    <div
                      className="bg-gradient-to-br from-health-500 to-health-600 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col items-center justify-center animate-pulse-glow transform hover:scale-105 transition-transform"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-white/90 font-medium text-center">
                        {getHomeTranslation(locale, 'featureCards.licensed100')}
                      </div>
                    </div>
                    <div
                      className="bg-gradient-to-br from-health-500 to-health-600 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col items-center justify-center animate-pulse-glow transform hover:scale-105 transition-transform"
                      style={{ animationDelay: '1s' }}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        ACHC
                      </div>
                      <div className="text-xs sm:text-sm text-white/90 font-medium text-center">
                        {getHomeTranslation(
                          locale,
                          'featureCards.achcAccredited'
                        )}
                      </div>
                    </div>
                    <div
                      className="bg-gradient-to-br from-health-500 to-health-600 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col items-center justify-center animate-pulse-glow transform hover:scale-105 transition-transform"
                      style={{ animationDelay: '1.5s' }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        ✓
                      </div>
                      <div className="text-xs sm:text-sm text-white/90 font-medium text-center">
                        {getHomeTranslation(locale, 'featureCards.trusted')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop - Right side - Decorative image with stats */}
                <div
                  className="relative hidden lg:block animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="relative w-full h-80 rounded-3xl bg-gradient-to-br from-health-100 to-primary-100 p-8 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src="/images/hero-healthcare.svg"
                        alt="Healthcare"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative z-10 grid grid-cols-2 gap-6 h-full">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center animate-pulse-glow">
                        <div className="text-3xl sm:text-4xl font-bold text-health-600 mb-2">
                          24/7
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">
                          {getHomeTranslation(
                            locale,
                            'featureCards.available247'
                          )}
                        </div>
                      </div>
                      <div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center animate-pulse-glow"
                        style={{ animationDelay: '0.5s' }}
                      >
                        <div className="text-3xl sm:text-4xl font-bold text-health-600 mb-2">
                          100%
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">
                          {getHomeTranslation(
                            locale,
                            'featureCards.licensed100'
                          )}
                        </div>
                      </div>
                      <div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center animate-pulse-glow"
                        style={{ animationDelay: '1s' }}
                      >
                        <div className="text-3xl sm:text-4xl font-bold text-health-600 mb-2">
                          ACHC
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">
                          {getHomeTranslation(
                            locale,
                            'featureCards.achcAccredited'
                          )}
                        </div>
                      </div>
                      <div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center animate-pulse-glow"
                        style={{ animationDelay: '1.5s' }}
                      >
                        <div className="text-3xl sm:text-4xl font-bold text-health-600 mb-2">
                          ✓
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">
                          {getHomeTranslation(locale, 'featureCards.trusted')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Compact and Attractive */}
      <section
        className="section-padding"
        style={{
          backgroundImage: 'url(/images/hands.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container-max">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8 sm:mb-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse-glow">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-health-600"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                {getHomeTranslation(locale, 'whyChoose.title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {getHomeTranslation(locale, 'whyChoose.items').map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start p-4 sm:p-5 rounded-xl bg-gradient-to-br from-health-50 to-primary-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-health-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-health-50/30">
        <div className="container-max">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {getMainTranslation(locale, 'footer.ourServices')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getHomeTranslation(locale, 'features.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-0">
            {/* Nursing Care */}
            <div className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-health-500 hover:bg-gradient-to-br hover:from-health-600 hover:to-health-700 hover:text-white transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-health-100 to-health-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-white group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-lg p-2">
                <Image
                  src="/images/nursing-care.svg"
                  alt="Nursing Care"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                {getMainTranslation(locale, 'footer.nursingCare')}
              </h3>
            </div>

            {/* Physical Therapy */}
            <div
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-health-500 hover:bg-gradient-to-br hover:from-health-600 hover:to-health-700 hover:text-white transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-health-100 to-health-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-white group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-lg p-2">
                <Image
                  src="/images/physical-therapy.svg"
                  alt="Physical Therapy"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                {getMainTranslation(locale, 'footer.physicalTherapy')}
              </h3>
            </div>

            {/* Occupational Therapy */}
            <div
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-health-500 hover:bg-gradient-to-br hover:from-health-600 hover:to-health-700 hover:text-white transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-health-100 to-health-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-white group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-lg p-2">
                <Image
                  src="/images/occupational-therapy.svg"
                  alt="Occupational Therapy"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                {getMainTranslation(locale, 'footer.occupationalTherapy')}
              </h3>
            </div>

            {/* Speech Therapy */}
            <div
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-health-500 hover:bg-gradient-to-br hover:from-health-600 hover:to-health-700 hover:text-white transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-health-100 to-health-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-white group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-lg p-2">
                <Image
                  src="/images/speech-therapy.svg"
                  alt="Speech Therapy"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                {getMainTranslation(locale, 'footer.speechTherapy')}
              </h3>
            </div>

            {/* Personal Care */}
            <div
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-health-500 hover:bg-gradient-to-br hover:from-health-600 hover:to-health-700 hover:text-white transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-health-100 to-health-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-white group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-lg p-2">
                <Image
                  src="/images/personal-care.svg"
                  alt="Personal Care"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                {getMainTranslation(locale, 'footer.personalCare')}
              </h3>
            </div>

            {/* Dietician */}
            <div
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-health-500 hover:bg-gradient-to-br hover:from-health-600 hover:to-health-700 hover:text-white transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-health-100 to-health-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-white group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-lg p-2">
                <Image
                  src="/images/medical-equipment.svg"
                  alt="Dietician"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                {getMainTranslation(locale, 'footer.dietician')}
              </h3>
            </div>

            {/* Medical Social Services */}
            <div
              className="text-center p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-health-500 hover:bg-gradient-to-br hover:from-health-600 hover:to-health-700 hover:text-white transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-health-100 to-health-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-white group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-lg p-2">
                <Image
                  src="/images/medical-equipment.svg"
                  alt="Medical Social Services"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                {getMainTranslation(locale, 'footer.medicalSocialServices')}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Priority & Accreditation Section - Side by Side */}
      <section className="section-padding bg-gradient-to-br from-health-50/50 via-white to-[#268685]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-8 px-4 sm:px-6">
            {/* Priority Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 border border-health-100/50 animate-fade-in-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10 animate-float">
                <Image
                  src="/images/medical-equipment.svg"
                  alt="Medical Equipment"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                  {getHomeTranslation(locale, 'prioritySection.title')}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mt-24 mb:mt-0">
                  {getHomeTranslation(locale, 'prioritySection.description')}
                </p>
              </div>
            </div>

            {/* Accreditation & Licensing Section */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 border border-health-100/50 animate-fade-in-up">
              <div className="text-center mb-8 sm:mb-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-health-500 to-health-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {getHomeTranslation(locale, 'accreditation.title')}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                  {getHomeTranslation(locale, 'accreditation.subtitle')}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* ACHC Accredited */}
                <div className="flex items-center p-5 sm:p-6 bg-gradient-to-r from-health-50 to-primary-50 rounded-xl border-l-4 border-health-600 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgb(2,199,197)] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                    {getHomeTranslation(locale, 'accreditation.achcAccredited')}
                  </p>
                </div>

                {/* CDPH Licensed & ACHC Accredited */}
                <div className="flex items-start sm:items-center p-5 sm:p-6 bg-gradient-to-r from-health-50 to-primary-50 rounded-xl border-l-4 border-health-600 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgb(2,199,197)] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2">
                      {getHomeTranslation(
                        locale,
                        'accreditation.licensedAndAccredited'
                      )}
                    </p>
                    <a
                      href={getHomeTranslation(
                        locale,
                        'accreditation.cdphLink'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-health-600 hover:text-health-700 font-medium text-xs sm:text-sm inline-flex items-center mt-1 group"
                    >
                      {getHomeTranslation(
                        locale,
                        'accreditation.learnMoreCDPH'
                      )}
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-white via-health-50/30 to-primary-50/30">
        <div className="container-max">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {getMainTranslation(locale, 'testimonials.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getMainTranslation(locale, 'testimonials.subtitle')}
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {getHomeTranslation(locale, 'testimonials.items').map(
              (testimonial: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-health-100/50 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-health-600 opacity-20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Star Rating */}
                  <div className="flex mb-4 sm:mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    {testimonial.content}
                  </p>

                  {/* Profile Section */}
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4 flex-shrink-0 overflow-hidden ring-2 ring-health-200">
                      <Image
                        src={testimonial.image || '/images/avatar2.jpg'}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-health-600 via-health-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 animate-float">
            <Image
              src="/images/team-photo.svg"
              alt="Team"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="absolute bottom-10 right-10 w-32 h-32 animate-float"
            style={{ animationDelay: '2s' }}
          >
            <Image
              src="/images/hero-healthcare.svg"
              alt="Healthcare"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="container-max text-center px-4 relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {getHomeTranslation(locale, 'cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              {getHomeTranslation(locale, 'cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-health-600 hover:bg-gray-50 font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                {getHomeTranslation(locale, 'cta.contactUs')}
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {getHomeTranslation(locale, 'cta.viewServices')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
