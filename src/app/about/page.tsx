import type { Metadata } from 'next'
import CTAButtons from '@/components/CTAButtons'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about VRT Health Home - our mission, values, and commitment to providing exceptional home healthcare services.',
  keywords: ['about VRT health', 'home healthcare company', 'healthcare mission', 'VRT health team'],
}

const values = [
  {
    title: 'Compassion',
    description: 'We treat every patient with kindness, empathy, and respect, understanding that healthcare is deeply personal.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards of care through continuous training, certification, and quality assurance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all aspects of our business.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We embrace new technologies and methods to improve patient care and outcomes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Dr. Sarah Williams',
    role: 'Medical Director',
    bio: 'Dr. Williams brings over 15 years of experience in home healthcare, specializing in geriatric care and chronic disease management.',
    image: '/images/doctor 1.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Director of Nursing',
    bio: 'Michael leads our nursing team with expertise in home health nursing and patient care coordination.',
    image: '/images/doctor2.jpg',
  },
  {
    name: 'Lisa Chen',
    role: 'Physical Therapy Manager',
    bio: 'Lisa specializes in home-based physical therapy and rehabilitation programs for patients of all ages.',
    image: '/images/avatar2.jpg',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Chief Operations Officer',
    bio: 'Dr. Wilson oversees our daily operations and ensures the highest standards of care delivery across all services.',
    image: '/images/avatar3.jpg',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-50 to-primary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About VRT Health Home
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are dedicated to providing exceptional home healthcare services that allow our patients 
                to maintain their independence and quality of life in the comfort of their own homes.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="w-full h-80 bg-gradient-to-br from-health-100 to-primary-100 rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-health-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-health-600">Professional Healthcare</h3>
                    <p className="text-gray-600 mt-2">Compassionate care at home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-health-600 mb-3">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide compassionate, professional healthcare services that enhance the quality of life 
                    for our patients and their families, enabling them to live independently at home with dignity and respect.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-600 mb-3">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading provider of home healthcare services, recognized for our commitment to excellence, 
                    innovation, and patient-centered care that transforms the healthcare experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Do What We Do</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every person deserves to receive quality healthcare in the place they feel most comfortable - their home. 
                  We believe that home healthcare not only improves physical outcomes but also enhances emotional well-being 
                  and maintains family connections.
                </p>
                
                {/* Mission Image */}
                <div className="mt-6">
                  <div className="w-full max-w-xs mx-auto bg-gradient-to-br from-health-200 to-primary-200 rounded-xl shadow-md p-6">
                    <div className="w-16 h-16 bg-health-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-health-700 font-medium">Quality Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the way we care for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-health-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of healthcare expertise and a shared commitment 
              to providing exceptional patient care.
            </p>
          </div>
          
          {/* Team Photo */}
          <div className="mb-12 text-center">
            <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-health-50 to-primary-50 rounded-2xl shadow-lg p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-health-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-health-700">{member.name.split(' ')[0]}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-health-600 mb-2">Our Dedicated Team</h3>
              <p className="text-gray-600">Working together to provide exceptional healthcare</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-health-100 to-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                    
                  />
                  <div className="hidden w-full h-full bg-health-200 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-health-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-health-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-health-600">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-health-100">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-health-100">Healthcare Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-health-100">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-health-100">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience Our Care?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help you or your loved ones 
            receive quality healthcare at home.
          </p>
          <CTAButtons
            primaryText="Contact Us"
            primaryHref="/contact"
            secondaryText="View Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </div>
  )
} 