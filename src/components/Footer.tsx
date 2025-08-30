'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { navigation, company } from '@/lib/i18n'
import { useLanguage } from '@/lib/useLanguage'

const Footer = () => {
  const router = useRouter()
  const { currentLocale } = useLanguage()
  
  const t = {
    quickLinks: 'Quick Links',
    services: 'Services',
    nursingCare: 'Nursing Care',
    physicalTherapy: 'Physical Therapy',
    personalCare: 'Personal Care',
    medicalEquipment: 'Medical Equipment',
    copyright: '© 2024 VRT Health Home. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    getInTouch: 'Get in Touch',
    followUs: 'Follow Us',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    visitUs: 'Visit Us',
  }

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <div className="container-max mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 sm:py-14 md:py-16 lg:py-20">
            {/* Top Section - Company Info & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-12 lg:mb-12">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-14 bg-gradient-to-br from-health-500 to-health-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl">V</span>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-white">
                      {company[currentLocale as keyof typeof company].name}
                    </h3>
                    <p className="text-health-300 text-sm sm:text-base md:text-lg lg:text-base font-medium">
                      Professional Care at Home
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed max-w-2xl">
                  {company[currentLocale as keyof typeof company].description}
                </p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 md:p-5 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 md:w-14 lg:w-10 bg-health-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 md:w-7 lg:w-5 text-health-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-sm text-gray-400">{t.callUs}</p>
                      <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-base">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 sm:p-4 md:p-5 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 md:w-14 lg:w-10 bg-health-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 md:w-7 lg:w-5 text-health-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-sm text-gray-400">{t.emailUs}</p>
                      <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-base">info@vrthealth.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-12 lg:mb-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-lg font-semibold mb-4 text-white flex items-center">
                  <div className="w-2 h-2 sm:w-3 md:w-4 lg:w-2 bg-health-400 rounded-full mr-3"></div>
                  {t.quickLinks}
                </h3>
                <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                  {[
                    { name: navigation[currentLocale as keyof typeof navigation].home, href: '/' },
                    { name: navigation[currentLocale as keyof typeof navigation].about, href: '/about' },
                    { name: navigation[currentLocale as keyof typeof navigation].services, href: '/services' },
                    { name: navigation[currentLocale as keyof typeof navigation].contact, href: '/contact' },
                  ].map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer text-left group flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                      >
                        <svg className="w-4 h-4 sm:w-5 md:w-6 lg:w-4 text-health-400 group-hover:text-health-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm sm:text-base md:text-lg lg:text-base group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-lg font-semibold mb-4 text-white flex items-center">
                  <div className="w-2 h-2 sm:w-3 md:w-4 lg:w-2 bg-health-400 rounded-full mr-3"></div>
                  {t.services}
                </h3>
                <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                  {[
                    { name: t.nursingCare, icon: '🏥' },
                    { name: t.physicalTherapy, icon: '💪' },
                    { name: t.personalCare, icon: '👥' },
                    { name: t.medicalEquipment, icon: '🩺' },
                  ].map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation('/services')}
                        className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer text-left group flex items-center space-x-3 sm:space-x-4 md:space-x-5"
                      >
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-lg group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-base group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-lg font-semibold mb-4 text-white flex items-center">
                  <div className="w-2 h-2 sm:w-3 md:w-4 lg:w-2 bg-health-400 rounded-full mr-3"></div>
                  {t.followUs}
                </h3>
                <div className="flex space-x-4 sm:space-x-5 md:space-x-6">
                  {[
                    { name: 'Facebook', href: '#', icon: 'facebook', color: 'hover:text-blue-400' },
                    { name: 'Twitter', href: '#', icon: 'twitter', color: 'hover:text-blue-300' },
                    { name: 'LinkedIn', href: '#', icon: 'linkedin', color: 'hover:text-blue-500' },
                    { name: 'Instagram', href: '#', icon: 'instagram', color: 'hover:text-pink-400' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 sm:w-14 md:w-16 lg:w-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                      aria-label={social.name}
                    >
                      <svg className="h-6 w-6 sm:h-7 md:h-8 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === 'facebook' && (
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        )}
                        {social.icon === 'twitter' && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {social.icon === 'linkedin' && (
                          <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c0 1.146-.928 2.064-2.064 2.064-1.136 0-2.064-.918-2.064-2.064S3.3 4.668 4.436 4.668c1.136 0 2.064.918 2.064 2.064zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
                        )}
                        {social.icon === 'instagram' && (
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.297.807-2.026.807s-1.536-.317-2.026-.807c-.49-.49-.807-1.297-.807-2.026s.317-1.536.807-2.026c.49-.49 1.297-.807 2.026-.807s1.536.317 2.026.807c.49.49.807 1.297.807 2.026s-.317 1.536-.807 2.026z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/50 py-6 sm:py-7 md:py-8 lg:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-sm text-center sm:text-left">
                {t.copyright}
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8">
                <Link href="#" className="text-gray-400 hover:text-white text-sm sm:text-base md:text-lg lg:text-sm transition-colors duration-200 hover:scale-105 transform">
                  {t.privacyPolicy}
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm sm:text-base md:text-lg lg:text-sm transition-colors duration-200 hover:scale-105 transform">
                  {t.termsOfService}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 