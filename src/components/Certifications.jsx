import React from 'react'

const CERTS = [
  { title: '📐 OSHA Safety', year: '2025' },
  { title: '📊 Advanced Excel', year: '2024' },
  { title: '🏗️ Defect Diagnosis', year: 'NCC 2025' },
  { title: '💻 Web Dev Basics', year: '2025' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gradient-to-br from-amber-50 to-amber-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4 font-bold text-2xl sm:text-3xl">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((c) => (
            <div className="md:col-span-1" key={c.title}>
              <div className="card bg-white rounded-xl p-3 shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300">
                <h5 className="font-semibold">{c.title}</h5>
                <p>{c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
