import { ArrowRight, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const metrics = [
  { value: '8+', label: 'Years building digital products' },
  { value: '42', label: 'Launches across SaaS and e-commerce' },
  { value: '96%', label: 'Client retention and referrals' },
]

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Strategy • Design • Growth</span>
          <h1>We build digital experiences that move brands forward.</h1>
          <p>
            Kaybros partners with ambitious teams to design standout brands, launch high-converting products, and turn customer attention into measurable growth.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/contact">
              Let&apos;s talk
              <ArrowRight size={18} />
            </Link>
            <Link className="secondary-btn" to="/projects">
              <PlayCircle size={18} />
              View work
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Kaybros featured work preview">
          <div className="visual-card glow-card">
            <div className="mini-card top-card">
              <span>Growth sprint</span>
              <strong>+164% pipeline</strong>
            </div>
            <div className="chart-bars">
              <span style={{ height: '28%' }} />
              <span style={{ height: '44%' }} />
              <span style={{ height: '60%' }} />
              <span style={{ height: '78%' }} />
              <span style={{ height: '96%' }} />
            </div>
            <div className="mini-card bottom-card">
              <span>Launch readiness</span>
              <strong>92% score</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container metrics-row">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-box">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
