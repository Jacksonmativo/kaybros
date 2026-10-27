import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/" aria-label="KAYBROS home">
              <img className="brand-mark" src="/logo/1000995788.png" alt="" />
              <span className="brand-name">KAYBROS <small>Quality engineering</small></span>
            </Link>
            <p className="footer-blurb">Design. Build. Renovate. Geotechnical and mining projects, done with care.</p>
          </div>
          <div>
            <p className="footer-title">Explore</p>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/geotechnical-mining">Geotechnical &amp; Mining</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-title">What we do</p>
            <ul>
              <li>Construction</li><li>Renovation</li><li>Roofing</li>
              <li><Link href="/geotechnical-mining">Geotechnical &amp; Mining</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-title">Start a project</p>
            <ul>
              <li><a href="mailto:info@kaybros.co.ke">info@kaybros.co.ke</a></li>
              <li><a href="tel:+254706676062">0706 676062</a></li>
              <li>Kenya · By appointment</li>
              <li><a href="https://www.instagram.com/kaybros.kenya/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/p/Kaybros-Spacialmetric-Limited-KARSSEL-100064275454893/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 KAYBROS. All rights reserved.</span></div>
      </div>
    </footer>
  )
}
