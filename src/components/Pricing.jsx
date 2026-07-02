import React from 'react'

const TIERS = [
  {
    name: 'Professional',
    price: 'Tsh. 3,500',
    features: ['Clean single-page CV site', 'Mobile-friendly layout', 'Contact & WhatsApp links'],
    featured: false,
  },
  {
    name: 'Modern',
    price: 'Tsh. 4,999',
    features: ['Everything in Professional', 'Custom color theme', 'Portfolio & testimonials section'],
    featured: true,
  },
  {
    name: 'Executive',
    price: 'Tsh. 5,999',
    features: ['Everything in Modern', 'Downloadable CV (PDF)', 'Priority delivery & revisions'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-3 text-2xl sm:text-3xl font-bold tracking-tight">
          CV Website Pricing
        </h2>
        <p
          className="text-center text-sm mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          Choose the package that fits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`card pricing-card ${tier.featured ? 'featured' : ''}`}
            >
              {tier.featured && (
                <span className="badge-pop">Most Popular</span>
              )}

              <h3
                className="font-semibold text-sm tracking-wide uppercase mb-1"
                style={{ color: 'var(--text-muted)' }}
              >
                {tier.name}
              </h3>

              <div className="price">{tier.price}</div>

              <ul>
                {tier.features.map((f) => (
                  <li key={f}>
                    <i className="fas fa-check"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://mimis57-onlinecv.co.tz"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 w-full text-sm"
              >
                Order Now
                <i className="fas fa-arrow-up-right-from-square text-xs opacity-60"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}