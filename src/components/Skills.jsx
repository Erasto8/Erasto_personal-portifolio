import React, { useEffect, useRef, useState } from 'react'

const SKILLS = [
  { name: 'HTML5', icon: 'fab fa-html5', level: 90 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', level: 85 },
  { name: 'Tailwind CSS', icon: 'fas fa-wind', level: 88 },
  { name: 'JavaScript', icon: 'fab fa-js', level: 80 },
  { name: 'PHP', icon: 'fab fa-php', level: 75 },
  { name: 'MySQL', icon: 'fas fa-database', level: 78 },
  { name: 'React', icon: 'fab fa-react', level: 82 },
  { name: 'Microsoft Excel', icon: 'fas fa-file-excel', level: 95 },
  { name: 'Microsoft Word', icon: 'fas fa-file-word', level: 92 },
  { name: 'Microsoft PowerPoint', icon: 'fas fa-file-powerpoint', level: 90 },
  { name: 'Data Analysis', icon: 'fas fa-chart-line', level: 85 },
  { name: 'Research', icon: 'fas fa-search', level: 88 },
  { name: 'AI Prompt Engineering', icon: 'fas fa-brain', level: 80 },
  { name: 'Teamwork', icon: 'fas fa-users', level: 95 },
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentPurple">Skills</span>
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-accentPurple"></div>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
            A blend of web development, data, and professional tools I use to build and deliver quality work.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {SKILLS.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-slate-100 dark:border-slate-700/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accentPurple flex items-center justify-center text-white text-lg shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className={skill.icon}></i>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white truncate">
                    {skill.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{skill.level}%</p>
                </div>
              </div>

              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accentPurple"
                  style={{
                    width: visible ? `${skill.level}%` : '0%',
                    transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: `${index * 60}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
