import React, { createContext, useContext, useState, useRef, useCallback } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: '', type: 'success', show: false })
  const timerRef = useRef(null)

  const showToast = useCallback((message, type = 'success') => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setToast({ message, type, show: true })
    timerRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, show: false }))
    }, 4000)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className={`toast-notification ${toast.type} ${toast.show ? 'show' : ''}`}>
        {toast.message}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
