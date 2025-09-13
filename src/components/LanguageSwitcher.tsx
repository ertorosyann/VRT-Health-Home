'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/useLanguage'
import { locales, localeNames, localeFlags } from '@/lib/i18n'

const LanguageSwitcher = () => {
  const { currentLocale, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (locale: string) => {
    changeLanguage(locale)
    setIsOpen(false)
  }

  const currentLanguage = localeNames[currentLocale as keyof typeof localeNames]
  const currentFlag = localeFlags[currentLocale as keyof typeof localeFlags]

  return (
    <div className="relative flex items-center " ref={dropdownRef}>
      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 px-4 py-2.5 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 " 
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Content */}
        <div className="flex items-center space-x-2">
          <span className="text-lg">{currentFlag}</span>
          <span className="text-sm font-semibold text-white">{currentLanguage}</span>
          
          {/* Animated arrow */}
          <svg 
            className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu - Opens ABOVE on mobile, BELOW on tablet+ */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 md:bottom-auto md:top-full md:mt-2 md:mb-0 w-48 bg-white rounded-xl border border-gray-200 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          {/* Dropdown arrow pointing DOWN to the button on mobile, UP on tablet+ */}
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45 md:bottom-auto md:-top-2 md:border-t md:border-l md:border-r-0 md:border-b-0"></div>
          
          {/* Language options */}
          <div className="py-2">
            {locales.map((locale) => {
              const isActive = locale === currentLocale
              const languageName = localeNames[locale as keyof typeof localeNames]
              const flag = localeFlags[locale as keyof typeof localeFlags]
              
              return (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 group ${
                    isActive 
                      ? 'bg-health-100 text-health-700' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {/* Flag */}
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {flag}
                  </span>
                  
                  {/* Language name */}
                  <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                    {languageName}
                  </span>
                  
                  {/* Checkmark for active language */}
                  {isActive && (
                    <div className="ml-auto">
                      <svg className="w-5 h-5 text-health-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Hover effect */}
                  {!isActive && (
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher 