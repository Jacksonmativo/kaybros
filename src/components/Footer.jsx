import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <img src="/logo/kaybros-logo.png" alt="Kaybros logo" />
            <span>Kaybros</span>
          </Link>
          <p className="footer-copy">
            We help startups and brands turn bold ideas into product experiences people remember.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="contact-list">
            <li><Mail size={16} /> hello@kaybros.co</li>
            <li><Phone size={16} /> +1 (415) 555-0188</li>
            <li><MapPin size={16} /> 241 Mission Street, San Francisco</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Kaybros Studio. All rights reserved.</p>
        <Link to="/contact" className="inline-link">
          Start a project <ArrowRight size={14} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
