import React from 'react'

const LANGUAGES = [
  { name: 'Swahili', level: 'Native', icon: 'fa-comments' },
  { name: 'English', level: 'Fluent', icon: 'fa-globe' },
]

export default function Languages() {
  return (
    <section id="languages">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-10 text-2xl sm:text-3xl font-bold tracking-tight">
          Languages
        </h2>

        <div className="flex flex-col gap-3">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.name}
              className="card flex items-center gap-4 px-5 py-4"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0"
                style={{
                  background: 'rgba(37, 99, 235, 0.08)',
                  color: 'var(--primary)',
                }}
              >
                <i className={`fas ${lang.icon}`}></i>
              </div>
              <div className="text-left flex-1 min-w-0">
                <div
                  className="font-semibold text-sm"
                  style={{ color: 'var(--text)' }}
                >
                  {lang.name}
                </div>
              </div>
              <span
                className="text-xs font-medium tracking-wide uppercase shrink-0"
                style={{ color: 'var(--text-muted)' }}
              >
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}