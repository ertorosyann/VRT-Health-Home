'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { navigation, company } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/lib/useLanguage'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { currentLocale } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: navigation[currentLocale as keyof typeof navigation].home, href: '/' },
    { name: navigation[currentLocale as keyof typeof navigation].about, href: '/about' },
    { name: navigation[currentLocale as keyof typeof navigation].services, href: '/services' },
    { name: navigation[currentLocale as keyof typeof navigation].contact, href: '/contact' },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="bg-health-600 shadow-sm border-b border-gray-200 min-h-[120px] sm:min-h-[140px] md:min-h-[120px] lg:min-h-[150px] flex items-center relative z-50">
        <div className="container-max mx-auto w-full">
          <div className="flex justify-between items-center py-3 sm:py-4 md:py-3 lg:py-4 px-4 sm:px-6 md:px-4 lg:px-0">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 md:space-x-2 lg:space-x-2">
              <div className="w-10 h-10 sm:w-12 md:w-10 lg:w-12 bg-gradient-to-br from-white to-gray-100 rounded-lg sm:rounded-xl md:rounded-lg lg:rounded-xl flex items-center justify-center mr-3 sm:mr-4 md:mr-3 lg:mr-4 shadow-lg border border-white/20">
                <div className="relative">
                  {/* Medical Cross */}
                  <svg className="w-6 h-6 sm:w-7 md:w-6 lg:w-7 text-health-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  </svg>
                  {/* Heart Pulse */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 md:w-3 lg:w-4 bg-health-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 sm:w-2.5 md:w-2 lg:w-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
              </div>      
              
              <div>
                <h1 className="text-lg sm:text-xl md:text-lg lg:text-2xl font-bold text-white tracking-tight">{company[currentLocale as keyof typeof company].name}</h1>
                <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-white/90 font-medium">{company[currentLocale as keyof typeof company].tagline}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-3 lg:space-x-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`relative px-2 sm:px-4 md:px-2 lg:px-4 py-2 text-sm lg:text-lg font-medium transition-all duration-300 cursor-pointer group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 transform scale-95 group-hover:scale-100 ${
                      isActive 
                        ? 'bg-white/30 opacity-100' 
                        : 'bg-white/25 opacity-0 group-hover:opacity-100'
                    }`}></div>
                    <div className={`absolute bottom-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive 
                        ? 'w-full left-0' 
                        : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                    }`}></div>
                  </button>
                )
              })}
            </nav>

            {/* Language Switcher and CTA Button */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
              <LanguageSwitcher />
              
              {/* Enhanced CTA Button */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-health-400 via-health-500 to-health-600 rounded-lg sm:rounded-xl md:rounded-lg lg:rounded-xl blur-sm group-hover:blur-md transition-all duration-500 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-health-400 via-health-500 to-health-600 rounded-lg sm:rounded-xl md:rounded-lg lg:rounded-xl blur-md group-hover:blur-lg transition-all duration-700 opacity-30"></div>
                
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="relative bg-gradient-to-r from-health-500 via-health-600 to-health-700 hover:from-health-600 hover:via-health-700 hover:to-health-800 text-white font-bold px-4 sm:px-8 md:px-4 lg:px-8 py-2 sm:py-4 md:py-2 lg:py-4 rounded-lg sm:rounded-xl md:rounded-lg lg:rounded-xl shadow-xl sm:shadow-2xl md:shadow-lg lg:shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 border border-white/30 cursor-pointer flex items-center space-x-2 sm:space-x-3 md:space-x-2 lg:space-x-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="relative z-10 text-xs sm:text-base md:text-xs lg:text-base">{navigation[currentLocale as keyof typeof navigation].getStarted}</span>
                  <div className="relative z-10 w-4 h-4 sm:w-6 md:w-4 lg:w-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 sm:w-4 md:w-2 lg:w-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile menu button - now functional */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-md text-white hover:text-health-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-300"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 h-full w-full bg-gradient-to-b from-health-600 to-health-700 shadow-2xl z-50 transform transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 md:p-4 border-b border-white/20">
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-3">
              <div className="w-10 h-10 sm:w-12 md:w-10 bg-white/20 rounded-lg sm:rounded-xl md:rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 md:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-lg font-bold text-white">Menu</h2>
                <p className="text-sm sm:text-base md:text-sm text-white/70">Navigation</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 sm:p-3 md:p-2 rounded-lg sm:rounded-xl md:rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <svg className="w-6 h-6 sm:w-7 md:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex-1 px-4 sm:px-6 md:px-4 py-6 sm:py-8 md:py-6">
            <div className="space-y-3 sm:space-y-4 md:space-y-3">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full text-left p-4 sm:p-5 md:p-4 rounded-xl sm:rounded-2xl md:rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-x-1 group ${
                      isActive 
                        ? 'bg-white/25 border border-white/30' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMobileMenuOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-lg sm:text-xl md:text-lg font-medium transition-colors duration-200 ${
                        isActive 
                          ? 'text-white font-semibold' 
                          : 'text-white/90 group-hover:text-white'
                      }`}>
                        {item.name}
                      </span>
                      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-2">
                        {isActive && (
                          <div className="w-2 h-2 sm:w-3 md:w-2 bg-white rounded-full animate-pulse"></div>
                        )}
                        <svg className={`w-5 h-5 sm:w-6 md:w-5 transition-all duration-200 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-white/60 group-hover:text-white group-hover:translate-x-1'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 sm:p-6 md:p-4 border-t border-white/20 space-y-4 sm:space-y-6 md:space-y-4">
            {/* Language Switcher for Mobile */}
            <div className="rounded-xl sm:rounded-2xl md:rounded-xl p-4 sm:p-5 md:p-4">
              <LanguageSwitcher />
            </div>
            
            {/* CTA Button for Mobile */}
            <button
              onClick={() => handleNavigation('/contact')}
              className="w-full bg-gradient-to-r from-health-400 to-health-500 hover:from-health-500 hover:to-health-600 text-white font-bold py-4 sm:py-5 md:py-4 px-6 sm:px-7 md:px-6 rounded-xl sm:rounded-2xl md:rounded-xl shadow-lg sm:shadow-xl md:shadow-lg hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-2 text-base sm:text-lg md:text-base"
            >
              <span>{navigation[currentLocale as keyof typeof navigation].getStarted}</span>
              <svg className="w-5 h-5 sm:w-6 md:w-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default Header 