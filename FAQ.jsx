import React, { useState } from 'react'

const FAQS = [
  {
    q: '📋 How long does a survey take?',
    a: 'A survey takes 1 week and one week for the final technical project.',
  },
  {
    q: '📍 Do you travel outside Dar es Salaam?',
    a: 'Yes, I travel, but expenses occur and are a must.',
  },
  {
    q: '💻 How much does a CV website cost?',
    a: 'Professional CV — Tsh. 3,500, Modern CV — Tsh. 4,999, Executive CV — Tsh. 5,999. See the pricing section above for what each package includes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i))

  return (
    <section className="faq-section bg-gradient-to-br from-yellow-50 to-yellow-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4 font-bold text-2xl sm:text-3xl">FAQ</h2>
        <div className="mx-auto max-w-3xl">
          {FAQS.map((item, i) => (
            <div className={`faq-item bg-white rounded-xl p-3 mb-2 shadow-card ${openIndex === i ? 'active' : ''}`} key={item.q}>
              <button
                className="faq-question flex justify-between items-center w-full text-left no-underline bg-transparent border-0 cursor-pointer py-2"
                onClick={() => toggle(i)}
              >
                <span className="font-medium">{item.q}</span> <span>{openIndex === i ? '▲' : '▼'}</span>
              </button>
              {openIndex === i && <div className="faq-answer mt-2 text-gray-700">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
