import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButtons from '@/components/CTAButtons'
import NavigationButton from '@/components/NavigationButton'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore VRT Health Home\'s comprehensive range of home healthcare services including nursing care, physical therapy, personal care, and medical equipment.',
  keywords: ['home healthcare services', 'nursing care', 'physical therapy', 'personal care', 'medical equipment', 'VRT health services'],
}

const services = [
  {
    title: 'Skilled Nursing Care',
    description: 'Professional nursing services provided by licensed registered nurses and licensed practical nurses.',
    features: [
      'Wound care and dressing changes',
      'Medication management and administration',
      'Vital signs monitoring',
      'Catheter care and management',
      'IV therapy and medication',
      'Disease management education',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'health',
  },
  {
    title: 'Physical Therapy',
    description: 'Specialized physical therapy services to improve mobility, strength, and function.',
    features: [
      'Post-surgery rehabilitation',
      'Balance and fall prevention',
      'Strength training exercises',
      'Pain management techniques',
      'Mobility and gait training',
      'Home exercise programs',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    title: 'Personal Care Assistance',
    description: 'Compassionate support with daily living activities and personal hygiene.',
    features: [
      'Bathing and personal hygiene',
      'Dressing and grooming assistance',
      'Mobility and transfer support',
      'Meal preparation and feeding',
      'Light housekeeping',
      'Companionship and social interaction',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'health',
  },
  {
    title: 'Medical Equipment & Supplies',
    description: 'Access to quality medical equipment and supplies for your healthcare needs.',
    features: [
      'Mobility aids (wheelchairs, walkers)',
      'Hospital beds and mattresses',
      'Oxygen equipment and supplies',
      'Monitoring devices',
      'Incontinence supplies',
      'Wound care supplies',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    title: 'Occupational Therapy',
    description: 'Therapeutic interventions to improve daily living skills and independence.',
    features: [
      'Activities of daily living training',
      'Adaptive equipment training',
      'Home safety assessments',
      'Cognitive rehabilitation',
      'Energy conservation techniques',
      'Work and leisure activities',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'health',
  },
  {
    title: 'Speech Therapy',
    description: 'Specialized speech and language therapy to improve communication and swallowing.',
    features: [
      'Speech and language disorders',
      'Swallowing difficulties',
      'Cognitive communication',
      'Voice therapy',
      'Aphasia treatment',
      'Communication device training',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'primary',
  },
]

const process = [
  {
    step: '01',
    title: 'Initial Assessment',
    description: 'We conduct a comprehensive evaluation of your healthcare needs and home environment.',
  },
  {
    step: '02',
    title: 'Care Plan Development',
    description: 'Our team creates a personalized care plan tailored to your specific requirements.',
  },
  {
    step: '03',
    title: 'Service Implementation',
    description: 'We begin providing services according to your approved care plan.',
  },
  {
    step: '04',
    title: 'Ongoing Monitoring',
    description: 'Regular assessments and adjustments to ensure optimal care outcomes.',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-50 to-primary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Healthcare Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer a comprehensive range of professional home healthcare services designed to meet your 
                specific needs and help you maintain your independence at home.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="/images/contact-hero.svg" 
                alt="Contact Healthcare Services" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                {/* Service Image */}
                <div className="mb-6">
                  {index === 0 && (
                    <img 
                      src="/images/nursing-care.svg" 
                      alt="Skilled Nursing Care" 
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src="/images/physical-therapy.svg" 
                      alt="Physical Therapy" 
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  {index === 2 && (
                    <img 
                      src="/images/personal-care.svg" 
                      alt="Personal Care Assistance" 
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  {index === 3 && (
                    <img 
                      src="/images/medical-equipment.svg" 
                      alt="Medical Equipment & Supplies" 
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  {index === 4 && (
                    <img 
                      src="/images/occupational-therapy.svg" 
                      alt="Occupational Therapy" 
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  {index === 5 && (
                    <img 
                      src="/images/speech-therapy.svg" 
                      alt="Speech Therapy" 
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                </div>
                
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-6`}>
                  <div className={`text-${service.color}-600`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-health-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Services Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it simple to get started with our home healthcare services. Here's our straightforward process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We provide our home healthcare services throughout the greater metropolitan area, 
                ensuring convenient access to quality care for you and your family.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-health-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Primary service area within 25 miles</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-health-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Extended coverage available upon request</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-health-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 emergency response available</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coverage Area</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Contact us to confirm service availability in your specific location. 
                  We're committed to serving our community with accessible, quality healthcare.
                </p>
                <NavigationButton href="/contact" className="btn-primary">
                  Check Availability
                </NavigationButton>
                
                {/* Coverage Area Image */}
                <div className="mt-6">
                  <img 
                    src="/images/hero-healthcare.svg" 
                    alt="Service Coverage Area" 
                    className="w-full max-w-xs mx-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-health-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-health-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your healthcare needs and learn how our services can help 
            you or your loved ones maintain independence at home.
          </p>
          <CTAButtons
            primaryText="Contact Us"
            primaryHref="/contact"
            secondaryText="Learn More"
            secondaryHref="/about"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          />
        </div>
      </section>
    </div>
  )
} 