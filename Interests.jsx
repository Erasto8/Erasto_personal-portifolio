import React from 'react'

const INTERESTS = [
  { name: 'Property Management', icon: 'fa-building', color: 'from-blue-500 to-blue-600', description: 'Managing and maintaining real estate properties' },
  { name: 'Facilities Management', icon: 'fa-cogs', color: 'from-purple-500 to-purple-600', description: 'Overseeing building operations and maintenance' },
  { name: 'Real Estate Development', icon: 'fa-city', color: 'from-green-500 to-green-600', description: 'Creating and developing property projects' },
  { name: 'Artificial Intelligence', icon: 'fa-robot', color: 'from-pink-500 to-rose-500', description: 'Exploring AI technologies and applications' },
  { name: 'Software Development', icon: 'fa-code', color: 'from-cyan-500 to-blue-500', description: 'Building innovative software solutions' },
  { name: 'Space Science', icon: 'fa-rocket', color: 'from-indigo-500 to-purple-500', description: 'Studying the universe and space exploration' },
  { name: 'Astronomy', icon: 'fa-star', color: 'from-yellow-500 to-orange-500', description: 'Observing and learning about celestial bodies' },
  { name: 'Modern Web Technologies', icon: 'fa-globe', color: 'from-teal-500 to-green-500', description: 'Keeping up with latest web development trends' },
  { name: 'Digital Innovation', icon: 'fa-lightbulb', color: 'from-amber-500 to-yellow-500', description: 'Creating innovative digital solutions' },
]

export default function Interests() {
  return (
    <section id="interests" className="py-24 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Interests</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map((interest, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-slide-up cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${interest.icon} text-2xl`}></i>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">{interest.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
