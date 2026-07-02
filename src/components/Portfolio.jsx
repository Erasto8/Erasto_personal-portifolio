import React from 'react'

const PORTFOLIO = [
  {
    img: 'https://placehold.co/600x380/e4e4e7/a1a1aa?text=Commercial',
    title: 'Commercial Plaza Inspection',
    desc: 'Identified structural cracks and drainage issues before purchase.',
  },
  {
    img: 'https://placehold.co/600x380/e4e4e7/a1a1aa?text=Residential',
    title: 'Residential Survey',
    desc: 'Discovered roof leakage early — saved client 20% in repair costs.',
  },
  {
    img: 'https://placehold.co/600x380/e4e4e7/a1a1aa?text=CV+Website',
    title: 'Online CV for Client',
    desc: 'Designed and deployed a modern CV site that increased interview calls.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12 text-2xl sm:text-3xl font-bold tracking-tight">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PORTFOLIO.map((p) => (
            <div key={p.title} className="card overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ willChange: 'transform' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div className="p-5">
                <h3
                  className="font-semibold text-sm mb-1.5"
                  style={{ color: 'var(--text)' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}