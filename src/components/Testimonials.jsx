import React from 'react'

const TESTIMONIALS = [
  { quote: 'Thorough survey saved us from costly purchase.', author: 'John M.' },
  { quote: 'CV website got me offers within a week!', author: 'Sarah K.' },
  { quote: 'Professional and detailed reports.', author: 'NHC Supervisor' },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12 text-2xl sm:text-3xl font-bold tracking-tight">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="card relative p-6 pb-5">
              <span
                className="absolute top-4 left-5 text-5xl leading-none select-none font-serif"
                style={{ color: 'var(--primary)', opacity: 0.08 }}
              >
                &ldquo;
              </span>
              <blockquote className="relative z-10 text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {t.quote}
              </blockquote>
              <figcaption
                className="relative z-10 text-xs font-semibold tracking-wide uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}