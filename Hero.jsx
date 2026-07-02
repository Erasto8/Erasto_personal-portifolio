import React, { useRef, useState, useEffect } from 'react'
import { useToast } from '../context/ToastContext.jsx'

const TYPING_TEXTS = [
  'Real Estate Student',
  'Freelance Web Developer',
  'AI-Assisted Software Developer',
  'Property & Facilities Management Enthusiast',
]

export default function Hero() {
  const imgRef = useRef(null)
  const showToast = useToast()
  const [typingIndex, setTypingIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = TYPING_TEXTS[typingIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTypingIndex((prev) => (prev + 1) % TYPING_TEXTS.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, typingIndex])

  const handleImgError = (e) => {
    e.target.src = 'https://randomuser.me/api/portraits/men/32.jpg'
  }

  const handleDownloadCv = (e) => {
    e.preventDefault()
    const profileImgSrc = imgRef.current?.src || 'https://randomuser.me/api/portraits/men/32.jpg'

    const cvHTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Erasto Sanga - CV</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background: #f0f4f8;
    padding: 2rem;
    color: #1e293b;
  }
  .cv-container {
    max-width: 1100px;
    margin: 0 auto;
    background: white;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  }
  .cv-header {
    background: linear-gradient(135deg, #0ea5e9, #3b82f6);
    padding: 2rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .cv-header img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid white;
    object-fit: cover;
    object-position: top center;
  }
  .cv-header-text h1 { font-size: 2.5rem; margin-bottom: 0.25rem; }
  .cv-header-text p { font-size: 1.1rem; opacity: 0.9; }
  .cv-body {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    padding: 2rem;
  }
  .sidebar {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 1.5rem;
  }
  .sidebar h3 {
    color: #0ea5e9;
    margin: 1rem 0 0.5rem;
    border-left: 4px solid #f59e0b;
    padding-left: 0.75rem;
  }
  .main h3 {
    color: #0f172a;
    margin: 1.5rem 0 0.75rem;
    border-bottom: 3px solid #0ea5e9;
    display: inline-block;
  }
  .skill-badge {
    background: #e0f2fe;
    padding: 0.3rem 0.8rem;
    border-radius: 2rem;
    display: inline-block;
    margin: 0.2rem;
    font-size: 0.8rem;
  }
  .job { margin-bottom: 1rem; }
  .job-title { font-weight: 700; color: #0284c7; }
  .date { color: #f59e0b; font-size: 0.8rem; }
  ul { margin-left: 1.2rem; margin-top: 0.3rem; }
  @media print {
    body { padding: 0; background: white; }
    .cv-container { box-shadow: none; border-radius: 0; }
  }
</style>
</head>
<body>
<div class="cv-container">
  <div class="cv-header">
    <img src="${profileImgSrc}" alt="Erasto Sanga">
    <div class="cv-header-text">
      <h1>Erasto Sanga</h1>
      <p>Building Surveyor & Online CV Builder</p>
      <p>📞 +255 763 010 996 | ✉️ naftaerasto9@gmail.com | 📍 Dar es Salaam, Tanzania</p>
    </div>
  </div>
  <div class="cv-body">
    <div class="sidebar">
      <h3>📌 Core Skills</h3>
      <div><span class="skill-badge">Building Condition Surveys</span> <span class="skill-badge">Defect Diagnosis</span> <span class="skill-badge">Advanced Excel</span> <span class="skill-badge">Technical Report Writing</span> <span class="skill-badge">Leadership</span> <span class="skill-badge">Web Development</span></div>
      <h3>📜 Certifications</h3>
      <p>✔️ OSHA Safety (2025)<br>✔️ Advanced Excel (2024)<br>✔️ Defect Diagnosis – NCC (2025)<br>✔️ Web Development Basics (2025)</p>
      <h3>🌍 Languages</h3>
      <p>Swahili (Native) | English (Fluent)</p>
    </div>
    <div class="main">
      <h3>👤 Professional Profile</h3>
      <p>Detail-oriented Building Surveyor with industrial training at National Housing Corporation (NHC). Skilled in condition surveys, defect diagnosis, technical reporting, and building modern CV websites that boost career opportunities.</p>
      <h3>🎓 Education</h3>
      <p><strong>Ardhi University (ARU)</strong> – BSc. Property & Facilities Management (2022–Present)</p>
      <p><strong>Mawelewele Secondary School</strong> – Advanced Certificate (PCB) 2020–2022</p>
      <p><strong>Ipogoro Secondary School</strong> – Ordinary Level 2016–2019</p>
      <h3>💼 Industrial Experience</h3>
      <div class="job">
        <div class="job-title">National Housing Corporation (NHC) – Dar es Salaam</div>
        <div class="date">July 2024 – September 2024</div>
        <ul><li>Conducted 15+ building condition surveys for commercial and residential properties.</li><li>Prepared detailed technical reports using Excel and Word.</li><li>Assisted senior surveyors with defect analysis and client documentation.</li></ul>
      </div>
      <h3>🏆 Key Projects</h3>
      <ul><li>Commercial Plaza Inspection – identified structural cracks & drainage issues.</li><li>Residential Condition Survey – saved client 20% in repair costs.</li><li>Online CV websites for 12+ clients, increasing their interview rates.</li></ul>
      <p style="margin-top:1rem; font-size:0.8rem;">References available upon request. Contact me for professional building surveys or a custom CV website.</p>
    </div>
  </div>
</div>
<script>window.onload = () => setTimeout(() => window.print(), 300);</script>
</body>
</html>`

    const win = window.open('', '_blank')
    if (!win) {
      showToast('Please allow pop-ups to download CV.', 'error')
      return
    }
    win.document.write(cvHTML)
    win.document.close()
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accentPurple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accentPurple">Erasto Sanga</span>
              </h1>
              <div className="flex items-center space-x-2 text-2xl sm:text-3xl font-light text-gray-300">
                <span>I'm a</span>
                <span className="text-primary font-semibold">{displayText}</span>
                <span className="animate-blink">|</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
                Passionate about bridging the gap between Real Estate and Technology. I combine property management expertise with modern web development skills to create innovative digital solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={handleDownloadCv} className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-download"></i>
                  Download CV
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <a href="#portfolio" className="group px-8 py-4 border-2 border-primary/50 text-primary font-semibold rounded-full hover:bg-primary/10 transition-all duration-300 hover:shadow-glow">
                <span className="flex items-center gap-2">
                  <i className="fas fa-eye"></i>
                  View Projects
                </span>
              </a>
              <a href="#contact" className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                <span className="flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i>
                  Contact Me
                </span>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://linkedin.com/in/erasto-sanga-2a20572b9" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://github.com/erastosanga" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gray-700 hover:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:naftaerasto9@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://wa.me/255763010996" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-green-500 hover:border-green-500 transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          <div className="text-center lg:text-right animate-slide-in-right">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accentPurple rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-premium animate-float">
                <img
                  ref={imgRef}
                  src="/assets/images/mimis57/profile.jpg"
                  alt="Erasto Sanga"
                  className="w-full h-full object-cover object-top"
                  onError={handleImgError}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
                <span className="text-sm font-semibold">Available for Hire</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold">🚀 Building the Future</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors duration-300">
          <span className="text-sm mb-2">Scroll Down</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  )
}