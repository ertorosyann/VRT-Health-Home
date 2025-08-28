'use client'

import { useState, useEffect } from 'react'
import { locales } from './i18n'

export const useLanguage = () => {
  const [currentLocale, setCurrentLocale] = useState('en')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get language from localStorage
    const savedLocale = localStorage.getItem('selectedLanguage')
    if (savedLocale && locales.includes(savedLocale as any)) {
      setCurrentLocale(savedLocale)
    } else {
      // Default to English if no language is saved
      localStorage.setItem('selectedLanguage', 'en')
      setCurrentLocale('en')
    }
    setIsLoaded(true)
  }, [])

  const changeLanguage = (newLocale: string) => {
    if (locales.includes(newLocale as any)) {
      localStorage.setItem('selectedLanguage', newLocale)
      setCurrentLocale(newLocale)
      // Reload the page to apply the new language
      window.location.reload()
    }
  }

  return {
    currentLocale,
    changeLanguage,
    isLoaded
  }
} 