import React from 'react'

export default function Connect() {
  return (
    <section id="connect" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4 font-bold text-2xl sm:text-3xl">Connect</h2>
        <div className="flex justify-center gap-3 mb-4 flex-wrap">
          <a href="https://www.linkedin.com/in/erasto-sanga-2a20572b9" className="bg-slate-900 text-white py-2 px-4 rounded-full hover:bg-slate-800 transition-colors duration-300" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://wa.me/255763010996" className="bg-slate-900 text-white py-2 px-4 rounded-full hover:bg-slate-800 transition-colors duration-300" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="#contact" className="bg-slate-900 text-white py-2 px-4 rounded-full hover:bg-slate-800 transition-colors duration-300">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
        <div className="map-container">
          <iframe
            title="Dar es Salaam location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126898.77012629785!2d39.21071706901962!3d-6.792354432210251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b2f4e6b1b3f%3A0x2c2b5f6e2c8a9d4!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
