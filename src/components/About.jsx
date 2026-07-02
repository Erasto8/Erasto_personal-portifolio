import React, { useRef, useEffect, useState } from 'react'

const ABOUT_TEXT = `I am a student at Ardhi University studying Real Estate. I am interested in property management, facilities management, and real estate development.

I have skills in Microsoft Excel, Microsoft Word, data analysis, research, Microsoft PowerPoint, Prompt Engineering, and teamwork.

During my industrial training, I worked on building condition surveys, preparing bills of quantities, and real estate site development activities.

I also have a strong interest in space science and astronomy.

In addition, I have a passion for designing websites, web pages, and complete digital systems using Artificial Intelligence (AI)-assisted programming.

I am interested in modern web technologies and software development, and I enjoy learning how technology can be used to solve real-world problems.

I am always ready to learn new things and gain more experience in both the real estate and technology industries.`

const STATS = [
  { number: 15, label: 'Projects Completed', suffix: '+' },
  { number: 8, label: 'Certifications Earned', suffix: '' },
  { number: 12, label: 'Technologies Used', suffix: '+' },
  { number: 100, label: 'Learning Journey', suffix: '%' },
]

function AnimatedCounter({ number, suffix }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const end = number
      const duration = 2000
      const incrementTime = duration / end
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          clearInterval(timer)
        }
      }, incrementTime)
      return () => clearInterval(timer)
    }
  }, [isVisible, number])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accentPurple rounded-3xl blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img
                  src="/assets/images/mimis57/profile.jpg"
                  alt="Erasto Sanga"
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.target.src = 'https://randomuser.me/api/portraits/men/32.jpg' }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white shadow-lg animate-float">
                <i className="fas fa-building text-3xl"></i>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-accentPurple to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <i className="fas fa-code text-3xl"></i>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentPurple">Me</span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accentPurple rounded-full"></div>
            </div>

            <div className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentPurple mb-2">
                    <AnimatedCounter number={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <span>Let's Work Together</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
