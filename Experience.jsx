import React from 'react'

const INDUSTRIAL_TRAINING = {
  company: 'National Housing Corporation (NHC)',
  location: 'Dar es Salaam, Tanzania',
  period: 'July 2024 – September 2024',
  logo: '/assets/images/mimis57/nhc.jpg',
  activities: [
    'Building Condition Surveys',
    'Preparing Bills of Quantities',
    'Real Estate Site Development Activities',
  ],
  achievements: [
    'Conducted 15+ building condition surveys for commercial and residential properties',
    'Prepared detailed technical reports using Excel and Word',
    'Assisted senior surveyors with defect analysis and client documentation',
    'Gained hands-on experience in property assessment and real estate development',
  ],
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Training</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-premium overflow-hidden animate-slide-up">
            {/* Header with logo */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <img
                    src={INDUSTRIAL_TRAINING.logo}
                    alt="NHC Logo"
                    className="w-20 h-20 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<i class="fas fa-building text-4xl text-green-600"></i>'
                    }}
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">{INDUSTRIAL_TRAINING.company}</h3>
                  <p className="text-green-100 text-lg">{INDUSTRIAL_TRAINING.location}</p>
                  <p className="text-green-200 mt-1">{INDUSTRIAL_TRAINING.period}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Activities */}
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-tasks text-green-500"></i>
                    Key Activities
                  </h4>
                  <ul className="space-y-3">
                    {INDUSTRIAL_TRAINING.activities.map((activity, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl"
                      >
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="fas fa-check text-xs"></i>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <i className="fas fa-trophy text-yellow-500"></i>
                    Achievements
                  </h4>
                  <ul className="space-y-3">
                    {INDUSTRIAL_TRAINING.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl"
                      >
                        <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="fas fa-star text-xs"></i>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills gained */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-lightbulb text-primary"></i>
                  Skills Gained
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Building Surveying', 'Technical Reporting', 'Data Analysis', 'Property Assessment', 'Team Collaboration', 'Problem Solving'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-smfont-medium rounded-full hover:shadow-glow transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
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
