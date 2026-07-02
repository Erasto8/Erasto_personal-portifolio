import React, { useState } from 'react'
import { useToast } from '../context/ToastContext.jsx'

const CONTACT_INFO = [
  { icon: 'fa-phone-alt', label: 'Phone', value: '+255 763 010 996', link: 'tel:+255763010996', color: 'from-green-500 to-emerald-600' },
  { icon: 'fa-envelope', label: 'Email', value: 'naftaerasto9@gmail.com', link: 'mailto:naftaerasto9@gmail.com', color: 'from-blue-500 to-blue-600' },
  { icon: 'fa-map-marker-alt', label: 'Location', value: 'Dar es Salaam, Tanzania', link: null, color: 'from-red-500 to-rose-600' },
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', value: 'Chat with me', link: 'https://wa.me/255763010996', color: 'from-green-400 to-green-500' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'Connect', link: 'https://linkedin.com/in/erasto-sanga-2a20572b9', color: 'from-blue-600 to-blue-700' },
  { icon: 'fab fa-github', label: 'GitHub', value: 'Follow', link: 'https://github.com/erastosanga', color: 'from-gray-700 to-gray-800' },
]

export default function Contact() {
  const showToast = useToast()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const formData = new FormData()
    formData.append('access_key', 'c1c2b0ff-5723-4ca4-94cb-4af40f911721')
    formData.append('subject', 'New inquiry from Erasto website')
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('message', form.message)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const data = await res.json()
      if (data.success) {
        showToast('✅ Message sent successfully! I will reply within 24 hours.', 'success')
        setForm({ name: '', email: '', message: '' })
      } else {
        showToast('❌ Failed to send. Please use WhatsApp or email directly.', 'error')
      }
    } catch {
      showToast('❌ Network error. Try WhatsApp or email.', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentPurple">Touch</span>
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-24 bg-gradient-to-r from-primary to-accentPurple rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_INFO.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-3`}>
                    <i className={`${info.icon} text-xl`}></i>
                  </div>
                  <h4 className="font-semibold mb-1">{info.label}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    <i className="fas fa-user mr-2"></i>Your Name
                  </label>
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g., John Mtambo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    <i className="fas fa-envelope mr-2"></i>Email Address
                  </label>
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    <i className="fas fa-comment-dots mr-2"></i>Your Message
                  </label>
                  <textarea
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 px-6 rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <i className="fas fa-spinner fa-pulse"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-400 text-center">
                  <i className="fas fa-lock mr-1"></i> Your information is secure. I'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}