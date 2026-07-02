import React from 'react'

const EDUCATION = [
  {
    icon: 'fa-university',
    title: 'Ardhi University',
    degree: 'Bachelor of Real Estate',
    status: 'Current Student',
    years: '2022 – Present',
    logo: '/assets/images/mimis57/aru.jpg',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'University of Dar es Salaam',
    degree: 'Department of Mathematics',
    status: 'Completed This Month',
    years: '2024',
    logo: '/assets/images/mimis57/udsm.jpg',
    color: 'from-purple-500 to-purple-600',
    courses: [
      'Windows Operating System',
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Internet Basics',
      'Artificial Intelligence Tools',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentPurple">Journey</span>
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-24 bg-gradient-to-r from-primary to-accentPurple rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accentPurple rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accentPurple rounded-full border-4 border-white dark:border-slate-800 shadow-glow hidden lg:block z-10"></div>

                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700/60 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      {/* Logo */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        <img
                          src={edu.logo}
                          alt={edu.title}
                          className="w-16 h-16 object-contain rounded-xl"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = `<i class="fas ${edu.icon} text-3xl"></i>`
                          }}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{edu.title}</h3>
                          {edu.status === 'Current Student' && (
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-semibold text-primary mb-2">{edu.degree}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.years}</p>

                        {edu.courses && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Completed Courses:</p>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
