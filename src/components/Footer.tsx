'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { navigation, company } from '@/lib/i18n'
import { useLanguage } from '@/lib/useLanguage'
import Image from 'next/image'
import Map from './Map'
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
    copyright: '© 2024 VRT HOME HEALTH CARE. All rights reserved.',
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
    <footer className="bg-white text-gray-900">
      {/* Social Media Banner */}
      <div className="bg-gradient-to-r from-health-500 to-health-600 py-4">
        <div className="container-max mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {t.followUs}
            </h3>
            <div className="flex space-x-4">
              {[
                { name: 'YouTube', href: '#', icon: 'youtube', color: 'hover:text-red-500' },
                { name: 'Instagram', href: '#', icon: 'instagram', color: 'hover:text-pink-500' },
                { name: 'Telegram', href: '#', icon: 'telegram', color: 'hover:text-blue-400' },
                { name: 'LinkedIn', href: '#', icon: 'linkedin', color: 'hover:text-blue-600' },
                { name: 'Facebook', href: '#', icon: 'facebook', color: 'hover:text-blue-500' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'youtube' && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    )}
                    {social.icon === 'instagram' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.297.807-2.026.807s-1.536-.317-2.026-.807c-.49-.49-.807-1.297-.807-2.026s.317-1.536.807-2.026c.49-.49 1.297-.807 2.026-.807s1.536.317 2.026.807c.49.49.807 1.297.807 2.026s-.317 1.536-.807 2.026z" />
                    )}
                    {social.icon === 'telegram' && (
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    )}
                    {social.icon === 'linkedin' && (
                      <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c0 1.146-.928 2.064-2.064 2.064-1.136 0-2.064-.918-2.064-2.064S3.3 4.668 4.436 4.668c1.136 0 2.064.918 2.064 2.064zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
                    )}
                    {social.icon === 'facebook' && (
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <div className="container-max mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Branding */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start mb-6">
                <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-32 lg:h-28 rounded-xl flex items-center justify-center mb-4">
                  <Image 
                    src="/images/logo.webp" 
                    alt="VRT HOME HEALTH CARE Logo" 
                    width={148} 
                    height={78} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center lg:text-left">
                  {company[currentLocale as keyof typeof company].name}
                </h3>
                <p className="text-gray-600 text-sm text-center lg:text-left">
                  Professional Care at Home
                </p>
              </div>
            </div>

            {/* Our Services */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 mb-6">OUR SERVICES</h3>
              <ul className="space-y-3">
                {[
                  { name: t.nursingCare, href: '/services' },
                  { name: t.physicalTherapy, href: '/services' },
                  { name: t.personalCare, href: '/services' },
                  { name: t.medicalEquipment, href: '/services' },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-gray-600 hover:text-health-600 transition-colors duration-200 text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 mb-6">CONTACT</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">Email:</p>
                  <p className="text-gray-900 font-medium">info@vrthealth.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone:</p>
                  <p className="text-gray-900 font-medium">+1 (818) 484-7508</p>
                </div>
              </div>
            </div>

            {/* Our Location */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 mb-6">OUR LOCATION</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Map />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-600 text-sm font-medium">
                    600 W Broadway<br />
                    Glendale, CA 91204
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6">
        <div className="container-max mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              {t.copyright}
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200">
                {t.privacyPolicy}
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200">
                {t.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 