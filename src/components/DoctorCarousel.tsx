'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Doctor {
  id: number
  image: string
  alt: string
}

interface TeamMember {
  name: string
  image: string
}

interface DoctorCarouselProps {
  team?: TeamMember[]
}

// const defaultDoctors: Doctor[] = [
//   {
//     id: 1,
//     image: '/images/carusel1.png',
//     alt: 'Doctor',
//   },
//   {
//     id: 2,
//     image: '/images/carusel2.png',
//     alt: 'Doctor',
//   },
//   {
//     id: 3,
//     image: '/images/carusel3.png',
//     alt: 'Doctor',
//   },
//   {
//     id: 4,
//     image: '/images/carusel4.png',
//     alt: 'Doctor',
//   },
//   {
//     id: 5,
//     image: '/images/carusel5.png',
//     alt: 'Doctor',
//   },
// ]

const defaultDoctors: Doctor[] = [
  {
    id: 1,
    image: '/carusel/c10.jpg',
    alt: 'Professional home health care nurse providing compassionate care to patient at home',
  },
  {
    id: 2,
    image: '/carusel/c1.jpg',
    alt: 'Professional home health care nurse providing compassionate care to patient at home',
  },
  {
    id: 3,
    image: '/carusel/c3.jpg',
    alt: 'Experienced healthcare professional delivering home health care services',
  },
  {
    id: 4,
    image: '/carusel/c8.jpg',
    alt: 'Qualified home health care provider assisting patient with medical care',
  },
  {
    id: 5,
    image: '/carusel/c2.jpg',
    alt: 'Skilled nursing care professional providing home health services',
  },
  {
    id: 6,
    image: '/carusel/c4.webp',
    alt: 'Home health care team member delivering personalized healthcare at home',
  },
  {
    id: 7,
    image: '/carusel/c7.JPG',
    alt: 'Certified home health aide providing quality home care services',
  },
  {
    id: 8,
    image: '/carusel/c5.png',
    alt: 'Professional healthcare worker offering home health care assistance',
  },
  {
    id: 9,
    image: '/carusel/c6.png',
    alt: 'Compassionate home health care professional supporting patient wellness',
  },
]

export default function DoctorCarousel({ team }: DoctorCarouselProps) {
  // Use team data if provided, otherwise use default doctors
  const doctors = team
    ? team.map((member, index) => ({
        id: index + 1,
        name: member.name,
        image: member.image,
        alt: member.name,
      }))
    : defaultDoctors

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
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length
      )
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
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl mx-4 sm:mx-8 md:mx-12 lg:mx-16 shadow-2xl bg-white">
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {doctors.map((doctor, index) => (
            <div key={doctor.id} className="w-full flex-shrink-0">
              <div className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] w-full bg-white">
                <Image
                  src={doctor.image}
                  alt={doctor.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 brightness-50"
                  priority={index === 0}
                  style={{ filter: 'brightness(1.15) contrast(1.05)' }}
                />
                {/* Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {doctors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 sm:w-10 h-3 sm:h-4 bg-white scale-110 shadow-lg'
                  : 'w-3 sm:w-4 h-3 sm:h-4 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
