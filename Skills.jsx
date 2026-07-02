import React from 'react'

const SKILLS = [
  { name: 'HTML5', icon: 'fa-html5', level: 90 },
  { name: 'CSS3', icon: 'fa-css3-alt', level: 85 },
  { name: 'Tailwind CSS', icon: 'fa-wind', level: 88 },
  { name: 'JavaScript', icon: 'fa-js', level: 80 },
  { name: 'PHP', icon: 'fa-php', level: 75 },
  { name: 'MySQL', icon: 'fa-database', level: 78 },
  { name: 'React', icon: 'fa-react', level: 82 },
  { name: 'Microsoft Excel', icon: 'fa-file-excel', level: 95 },
  { name: 'Microsoft Word', icon: 'fa-file-word', level: 92 },
  { name: 'Microsoft PowerPoint', icon: 'fa-file-powerpoint', level: 90 },
  { name: 'Data Analysis', icon: 'fa-chart-line', level: 85 },
  { name: 'Research', icon: 'fa-search', level: 88 },
  { name: 'AI Prompt Engineering', icon: 'fa-brain', level: 80 },
  { name: 'Teamwork', icon: 'fa-users', level: 95 },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-14 text-2xl sm:text-3xl font-bold tracking-tight">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="card p-5">
              <div className="flex items-center gap-3.5 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sm shrink-0"
                  style={{
                    background: 'var(--primary)',
                    opacity: 0.9,
                    color: '#ffffff',
                  }}
                >
                  <i className={`fab ${skill.icon}`}></i>
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-semibold text-sm truncate"
                    style={{ color: 'var(--text)' }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {skill.level}%
                  </p>
                </div>
              </div>

              <div
                className="w-full h-1.5 overflow-hidden"
                style={{ background: 'var(--border)' }}
              >
                <div
                  className="h-full"
                  style={{
                    width: `${skill.level}%`,
                    background: 'var(--primary)',
                    opacity: 0.7,
                    transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
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