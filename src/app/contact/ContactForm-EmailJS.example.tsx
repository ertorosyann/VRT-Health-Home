// EXAMPLE: EmailJS Implementation
// This is an alternative approach if you want emails to appear FROM the user's email
// To use this:
// 1. Sign up at https://www.emailjs.com
// 2. Install: npm install @emailjs/browser
// 3. Replace ContactForm.tsx with this code
// 4. Add your EmailJS credentials to .env.local

'use client'

import { useState } from 'react'
// import emailjs from '@emailjs/browser'

export default function ContactFormEmailJS() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    medicareNumber: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // EmailJS sends email directly from client
      // Email will appear FROM the user's email address
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      // Uncomment when EmailJS is set up:
      // await emailjs.send(
      //   serviceId,
      //   templateId,
      //   {
      //     from_name: `${formData.firstName} ${formData.lastName}`,
      //     from_email: formData.email,
      //     to_email: 'ertorosyann@gmail.com',
      //     phone: formData.phone,
      //     medicare_number: formData.medicareNumber,
      //     service: formData.service,
      //     message: formData.message,
      //   },
      //   publicKey
      // )

      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          medicareNumber: '',
          service: '',
          message: '',
        })
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
        Send Us a Message
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
        {/* Form fields same as current ContactForm.tsx */}
        {/* ... */}
      </form>
    </div>
  )
}

