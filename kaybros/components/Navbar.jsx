'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => { setMenuOpen(false); document.body.classList.remove('menu-open') }

  return (
    <header>
      <div className="shell nav">
        <Link className="brand" href="/" aria-label="KAYBROS home" onClick={close}>
          <img className="brand-mark" src="/logo/1000995788.png" alt="KAYBROS logo" />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => { const next = !menuOpen; setMenuOpen(next); document.body.classList.toggle('menu-open', next) }}
        >
          ☰
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/geotechnical-mining" onClick={close}>Geotechnical &amp; Mining</Link>
          <Link href="/projects" onClick={close}>Projects</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/contact" className="nav-cta" onClick={close}>Start a project <span>↗</span></Link>
        </nav>
      </div>
    </header>
  )
}
