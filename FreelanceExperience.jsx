import React from 'react'

const FREELANCE_EXPERIENCE = {
  position: 'Freelance Web Developer',
  status: 'Current',
  description: 'Developed two major web projects from concept to deployment, focusing on functionality, user experience, and payment integration.',
  responsibilities: [
    'Designed responsive web applications using HTML, CSS, Tailwind CSS, JavaScript, PHP, and MySQL',
    'Integrated secure payment systems for e-commerce functionality',
    'Implemented automated PDF generation for document management',
    'Built modern user interfaces with focus on accessibility and user experience',
    'Applied AI-assisted programming techniques to improve development efficiency',
    'Collaborated with clients to understand requirements and deliver solutions',
  ],
  technologies: [
    { name: 'HTML5', icon: 'fa-html5', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: 'fa-css3-alt', color: 'from-blue-500 to-blue-600' },
    { name: 'Tailwind CSS', icon: 'fa-wind', color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', icon: 'fa-js', color: 'from-yellow-400 to-yellow-500' },
    { name: 'PHP', icon: 'fa-php', color: 'from-purple-500 to-indigo-500' },
    { name: 'MySQL', icon: 'fa-database', color: 'from-blue-600 to-blue-700' },
    { name: 'React', icon: 'fa-react', color: 'from-cyan-400 to-blue-500' },
  ],
}

export default function FreelanceExperience() {
  return (
    <section id="freelance-experience" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-premium overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{FREELANCE_EXPERIENCE.position}</h3>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                      {FREELANCE_EXPERIENCE.status}
                    </span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <i className="fas fa-laptop-code text-3xl"></i>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                {FREELANCE_EXPERIENCE.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-briefcase text-purple-500"></i>
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {FREELANCE_EXPERIENCE.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
                    >
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-code text-xs"></i>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-layer-group text-indigo-500"></i>
                  Technologies Used
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {FREELANCE_EXPERIENCE.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-xl hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-default"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white mb-3 mx-auto`}>
                        <i className={`fab ${tech.icon} text-xl`}></i>
                      </div>
                      <p className="text-center font-medium text-slate-900 dark:text-white text-sm">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
