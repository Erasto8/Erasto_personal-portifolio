import React from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import FreelanceExperience from './components/FreelanceExperience.jsx'
import FeaturedProject from './components/FeaturedProject.jsx'
import Skills from './components/Skills.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <FreelanceExperience />
          <FeaturedProject />
          <Skills />
          <Interests />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </ToastProvider>
    </ThemeProvider>
  )
}