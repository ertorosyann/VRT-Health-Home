'use client'

import { useLanguage } from '@/lib/useLanguage'
import { locales, localeNames, localeFlags } from '@/lib/i18n'

const LanguageSwitcher = () => {
  const { currentLocale, changeLanguage } = useLanguage()

  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-white/10 rounded-xl blur-sm group-hover:bg-white/20 transition-all duration-300"></div>
      
      {/* Main select container */}
      <div className="relative bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 px-4 py-2.5 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
        <select
          value={currentLocale}
          onChange={(e) => changeLanguage(e.target.value)}
          className="appearance-none bg-transparent border-none text-sm font-semibold text-white cursor-pointer w-full pr-8 focus:outline-none"
        >
          {locales.map((locale) => (
            <option key={locale} value={locale} className="bg-health-600 text-white font-medium">
              {localeFlags[locale]} {localeNames[locale]}
            </option>
          ))}
        </select>
        
        {/* Enhanced dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
            <svg className="w-3 h-3 text-white group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageSwitcher 