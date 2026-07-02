import React from 'react'

const SERVICES = [
  {
    icon: 'fa-building',
    title: 'Building Condition Surveys',
    description: 'Comprehensive assessments and detailed defect reports to protect your investment decisions.',
    href: '#contact',
    label: 'Request',
    external: false,
  },
  {
    icon: 'fa-laptop-code',
    title: 'Online CV Websites',
    description: 'Modern, mobile-optimized personal websites that make a lasting first impression.',
    href: 'https://mimis57-onlinecv.co.tz',
    label: 'Order Now',
    external: true,
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12 text-2xl sm:text-3xl font-bold tracking-tight">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service) => (
            <div key={service.title} className="card p-6 flex flex-col">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm mb-5"
                style={{
                  background: 'rgba(37, 99, 235, 0.08)',
                  color: 'var(--primary)',
                }}
              >
                <i className={`fas ${service.icon}`}></i>
              </div>

              <h3
                className="font-semibold text-base mb-2"
                style={{ color: 'var(--text)' }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'var(--text-muted)' }}
              >
                {service.description}
              </p>

              {service.external ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex items-center gap-2 self-start text-sm"
                >
                  {service.label}
                  <i className="fas fa-arrow-up-right-from-square text-xs opacity-60"></i>
                </a>
              ) : (
                <a
                  href={service.href}
                  className="btn-primary inline-flex items-center gap-2 self-start text-sm"
                >
                  {service.label}
                  <i className="fas fa-arrow-right text-xs opacity-60"></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}