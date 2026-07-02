import React from 'react'

const ONLINECV_PROJECT = {
  name: 'OnlineCV Generator',
  description: 'Engineered a dynamic online CV generation platform with three professional templates',
  status: 'Completed',
  templates: [
    { name: 'Classic', description: 'Traditional professional layout' },
    { name: 'Professional', description: 'Modern corporate design' },
    { name: 'Executive', description: 'Premium executive style' },
  ],
  features: [
    'Secure Payment Integration',
    'PDF Export',
    'Responsive Design',
    'PHP Backend',
    'JavaScript Frontend',
    'Tailwind CSS',
    'MySQL Database',
  ],
  techStack: [
    { name: 'PHP', icon: 'fa-php', color: 'from-purple-500 to-indigo-500' },
    { name: 'JavaScript', icon: 'fa-js', color: 'from-yellow-400 to-yellow-500' },
    { name: 'Tailwind CSS', icon: 'fa-wind', color: 'from-cyan-500 to-blue-500' },
    { name: 'MySQL', icon: 'fa-database', color: 'from-blue-600 to-blue-700' },
  ],
  links: {
    demo: '#',
    github: '#',
  },
}

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentPurple">Project</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accentPurple rounded-full mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-premium overflow-hidden border border-white/20 animate-slide-up">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-primary to-accentPurple p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      {ONLINECV_PROJECT.status}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2">{ONLINECV_PROJECT.name}</h3>
                  <p className="text-white/80 text-lg">{ONLINECV_PROJECT.description}</p>
                </div>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
                  <i className="fas fa-file-alt text-4xl"></i>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              {/* Templates */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-layer-group text-primary"></i>
                  Professional Templates
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {ONLINECV_PROJECT.templates.map((template, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white mb-3">
                        <i className="fas fa-file-invoice text-xl"></i>
                      </div>
                      <h5 className="font-semibold mb-1">{template.name}</h5>
                      <p className="text-sm text-gray-300">{template.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-star text-secondary"></i>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {ONLINECV_PROJECT.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-white/5 rounded-lg"
                    >
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-check text-xs"></i>
                      </span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-code text-accentPurple"></i>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {ONLINECV_PROJECT.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300 cursor-default"
                    >
                      <i className={`fab ${tech.icon}`}></i>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a
                  href={ONLINECV_PROJECT.links.demo}
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>Live Demo</span>
                </a>
                <a
                  href={ONLINECV_PROJECT.links.github}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub Repository</span>
                </a>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
                  <i className="fas fa-info-circle"></i>
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
