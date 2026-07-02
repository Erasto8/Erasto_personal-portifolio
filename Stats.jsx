import React from 'react'

const STATS = [
  { number: '15+', label: 'Buildings Surveyed' },
  { number: '12+', label: 'CV Websites Built' },
  { number: '2+', label: 'Years Field Experience' },
  { number: '100%', label: 'Client Satisfaction' },
]

export default function Stats() {
  return (
    <section id="stats" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-4 py-8 sm:px-8 sm:py-10 ${
                i < STATS.length - 1 && i % 2 === 0
                  ? 'border-r'
                  : ''
              } ${
                i < STATS.length - 2
                  ? 'md:border-r'
                  : ''
              }`}
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="stat-number text-3xl sm:text-4xl">
                {s.number}
              </div>
              <div
                className="mt-2 text-xs sm:text-sm font-medium tracking-wide uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}