'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Doctor {
  id: number
  name: string
  specialty: string
  image: string
  alt: string
}

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

interface DoctorCarouselProps {
  team?: TeamMember[]
}

const defaultDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "/images/doctor 1.jpg",
    alt: "Doctor Sarah Johnson"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "/images/doctor2.jpg",
    alt: "Doctor Michael Chen"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "/images/avatar2.jpg",
    alt: "Doctor Emily Rodriguez"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Surgeon",
    image: "/images/avatar3.jpg",
    alt: "Doctor James Wilson"
  },
]

export default function DoctorCarousel({ team }: DoctorCarouselProps) {
  // Use team data if provided, otherwise use default doctors
  const doctors = team ? team.map((member, index) => ({
    id: index + 1,
    name: member.name,
    specialty: member.role,
    image: member.image,
    alt: member.name
  })) : defaultDoctors

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Add custom CSS for animations
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length)
      setTimeout(() => setIsAnimating(false), 700)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length)
      setTimeout(() => setIsAnimating(false), 700)
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true)
      setCurrentIndex(index)
      setTimeout(() => setIsAnimating(false), 700)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // Change slide every 3 seconds for faster transitions

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-50 via-white to-primary-50 opacity-30"></div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-all duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {doctors.map((doctor, index) => (
            <div key={doctor.id} className="w-full flex-shrink-0">
              <div className="relative h-[70vh] w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={index === 0}
                />
                {/* Enhanced Overlay with doctor info */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent transition-opacity duration-700">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full md:w-2/3 p-6 md:p-12 text-white animate-fade-in">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{doctor.name}</h3>
                      <p className="text-lg md:text-xl text-gray-200 mb-4">{doctor.specialty}</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm">4.9 (120 reviews)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">Available Today</span>
                        </div>
                      </div>
                      
                      {/* Additional Doctor Information */}
                      <div className="space-y-3">
                        <p className="text-gray-200 text-sm leading-relaxed max-w-md">
                          Experienced medical professional with over 10 years of practice. Specializing in advanced diagnostic procedures and patient care.
                        </p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-300">Board Certified</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-300">10+ Years Experience</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {doctors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {doctors.length}
      </div>
    </div>
  )
}
