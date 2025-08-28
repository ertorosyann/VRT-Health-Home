'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { navigation, company } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/lib/useLanguage'

const Header = () => {
  const router = useRouter()
  const { currentLocale } = useLanguage()

  const navigationItems = [
    { name: navigation[currentLocale as keyof typeof navigation].home, href: '/' },
    { name: navigation[currentLocale as keyof typeof navigation].about, href: '/about' },
    { name: navigation[currentLocale as keyof typeof navigation].services, href: '/services' },
    { name: navigation[currentLocale as keyof typeof navigation].contact, href: '/contact' },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <header className="bg-health-600 shadow-sm border-b border-gray-200 min-h-[150px] flex items-center">
      <div className="container-max mx-auto w-full">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center mr-4 shadow-lg border border-white/20">
              <div className="relative">
                {/* Medical Cross */}
                <svg className="w-7 h-7 text-health-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
                {/* Heart Pulse */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-health-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
            </div>      
            
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">{company[currentLocale as keyof typeof company].name}</h1>
              <p className="text-sm text-white/90 font-medium">{company[currentLocale as keyof typeof company].tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="relative px-4 py-2 text-lg font-medium text-white hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-white/25 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Language Switcher and CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Enhanced Language Switcher Container */}
            {/* <div className="relative group">
              <div className="absolute inset-0 bg-white/10 rounded-xl blur-sm group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="relative bg-health-50/10 backdrop-blur-sm rounded-xl border border-white/20 px-4 py-2 hover:bg-white/20 transition-all duration-300"> */}
                <LanguageSwitcher />
              {/* </div>
            </div> */}
            
            {/* Enhanced CTA Button */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-health-400 via-health-500 to-health-600 rounded-xl blur-sm group-hover:blur-md transition-all duration-500 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-health-400 via-health-500 to-health-600 rounded-xl blur-md group-hover:blur-lg transition-all duration-700 opacity-30"></div>
              
              <button
                onClick={() => handleNavigation('/contact')}
                className="relative bg-gradient-to-r from-health-500 via-health-600 to-health-700 hover:from-health-600 hover:via-health-700 hover:to-health-800 text-white font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 border border-white/30 cursor-pointer flex items-center space-x-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 text-lg">{navigation[currentLocale as keyof typeof navigation].getStarted}</span>
                <div className="relative z-10 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu button - simplified for now */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-health-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-health-500"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 