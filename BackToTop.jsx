import React, { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      id="backToTop"
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white border-none cursor-pointer transition-all duration-300 z-50 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={scrollTop}
    >
      ↑
    </button>
  )
}
