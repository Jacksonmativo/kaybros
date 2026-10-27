'use client'
import { CalendarDays, ChevronRight } from 'lucide-react'

export default function BookButton({ className = 'button', label = 'Book a consultation' }) {
  return (
    <button
      className={className}
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-modal'))}
    >
      <CalendarDays size={18} aria-hidden="true" />
      {label}
      <ChevronRight size={16} aria-hidden="true" />
    </button>
  )
}
