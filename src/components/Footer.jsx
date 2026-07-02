import React from 'react'

const FOOTER_LINKS = [
  { name: 'Home', href: '#home', icon: 'fa-home' },
  { name: 'About', href: '#about', icon: 'fa-user' },
  { name: 'Education', href: '#education', icon: 'fa-graduation-cap' },
  { name: 'Skills', href: '#skills', icon: 'fa-code' },
  { name: 'Projects', href: '#featured-project', icon: 'fa-rocket' },
  { name: 'Contact', href: '#contact', icon: 'fa-envelope' },
]

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/erasto-sanga-2a20572b9', icon: 'fab fa-linkedin-in', color: 'hover:bg-blue-600' },
  { name: 'GitHub', href: 'https://github.com/erastosanga', icon: 'fab fa-github', color: 'hover:bg-gray-700' },
  { name: 'WhatsApp', href: 'https://wa.me/255763010996', icon: 'fab fa-whatsapp', color: 'hover:bg-green-500' },
  { name: 'Email', href: 'mailto:naftaerasto9@gmail.com', icon: 'fas fa-envelope', color: 'hover:bg-primary' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentPurple">Erasto Sanga</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Building Surveyor & Software Developer passionate about creating innovative solutions at the intersection of Real Estate and Technology.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <i className="fas fa-map-marker-alt text-primary"></i>
              <span>Dar es Salaam, Tanzania</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <i className={`fas ${link.icon} text-sm`}></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Erasto Sanga. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Designed with <i className="fas fa-heart text-red-500 animate-pulse"></i> by Erasto Sanga
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
