import React, { useEffect } from 'react'

export default function Modal({ title, icon, onClose = () => {}, children }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="custom-modal-backdrop" onClick={onClose}>
      <div className="custom-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="m-0 font-semibold text-sm tracking-tight">
              <i className={`fas ${icon} mr-2 opacity-80`}></i>
              {title}
            </h3>
            <button
              type="button"
              className="bg-transparent border-0 text-white cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200 text-base leading-none p-1"
              aria-label="Close"
              onClick={onClose}
            >
              <i className="fas fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div
            className="px-6 pb-5 pt-0 flex justify-end"
          >
            <button
              className="btn-primary text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}