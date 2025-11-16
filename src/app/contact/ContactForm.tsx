'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/useLanguage'
import { getContactTranslation } from '@/lib/translations/contact'
import { type Locale } from '@/lib/i18n'

export default function ContactForm() {
  const { currentLocale } = useLanguage()
  const locale = currentLocale as Locale

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    medicareNumber: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)

  // Email validation function
  const validateEmail = (email: string): boolean => {
    if (!email) return true // Email is optional, so empty is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validate email in real-time
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address')
      } else {
        setEmailError(null)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    // Validate email before submission
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form immediately after success
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        medicareNumber: '',
        service: '',
        message: '',
      })
      setEmailError(null)

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'An error occurred. Please try again later.'
      )
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {getContactTranslation(locale, 'form.title')}
      </h2>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-health-50 border border-health-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-health-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-health-800 font-medium">
              Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </span>
          </div>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-red-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-red-800 font-medium">{submitError}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {getContactTranslation(locale, 'form.firstName')}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {getContactTranslation(locale, 'form.lastName')}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {getContactTranslation(locale, 'form.dateOfBirth')}
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            required
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            max={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {getContactTranslation(locale, 'form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200 ${
                emailError
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300'
              }`}
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-600">{emailError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {getContactTranslation(locale, 'form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="medicareNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {getContactTranslation(locale, 'form.medicareNumber')}
          </label>
          <input
            type="text"
            id="medicareNumber"
            name="medicareNumber"
            required
            value={formData.medicareNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {getContactTranslation(locale, 'form.service')}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">
              {getContactTranslation(locale, 'form.selectService')}
            </option>
            <option value="nursing">Skilled Nursing Care</option>
            <option value="physical-therapy">Physical Therapy</option>
            <option value="personal-care">Personal Care Assistance</option>
            <option value="medical-equipment">
              Medical Equipment & Supplies
            </option>
            <option value="occupational-therapy">Occupational Therapy</option>
            <option value="speech-therapy">Speech Therapy</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {getContactTranslation(locale, 'form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your healthcare needs or ask any questions..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-500 focus:border-transparent transition-colors duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? getContactTranslation(locale, 'form.sending')
            : getContactTranslation(locale, 'form.sendMessage')}
        </button>
      </form>
    </div>
  )
}
