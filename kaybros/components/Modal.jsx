'use client'
import { useEffect, useState } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/mrpppeae'

export default function Modal() {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const handler = () => { setOpen(true); document.body.classList.add('menu-open') }
    window.addEventListener('open-modal', handler)
    return () => window.removeEventListener('open-modal', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  const close = () => { setOpen(false); document.body.classList.remove('menu-open') }

  const showToast = (msg) => {
    setToast({ visible: true, message: msg })
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (!res.ok) throw new Error()
      close()
      e.target.reset()
      showToast("Thanks, we've received your enquiry and will be in touch soon.")
    } catch {
      showToast('Sorry, something went wrong. Please email or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div
        className={`modal ${open ? 'open' : ''}`}
        aria-hidden={!open}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div className="modal-head">
            <h2 id="modalTitle" style={{ fontSize: '2rem', marginTop: '12px' }}>Tell us about your project.</h2>
            <button type="button" className="close" aria-label="Close form" onClick={close}>×</button>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="_subject" value="New enquiry from kaybros.co.ke" />
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" required type="email" placeholder="you@example.com" /></label>
            <label>Project details<textarea name="details" required placeholder="What are you planning to build, renovate or improve?" /></label>
            <button className="button form-submit" type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send enquiry'} <span>↗</span>
            </button>
          </form>
        </div>
      </div>
      <div className={`toast ${toast.visible ? 'show' : ''}`} role="status" aria-live="polite">
        {toast.message}
      </div>
    </>
  )
}
