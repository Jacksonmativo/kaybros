import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GeotechnicalMining from "./pages/GeotechnicalMining";

function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("menu-open");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("menu-open");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
    setToastVisible(true);
    event.target.reset();
    window.setTimeout(() => setToastVisible(false), 4000);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <>
      <header>
        <div className="shell nav">
          <Link className="brand" to="/" aria-label="KAYBROS home">
            <img className="brand-mark" src="/logo/1000995788.png" alt="" /></Link>

          <button
            className="menu-toggle"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => {
              const next = !menuOpen;
              setMenuOpen(next);
              document.body.classList.toggle("menu-open", next);
            }}
          >
            ☰
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            <Link to="/home" onClick={closeMenu}>Home</Link>
            <Link to="/geotechnical-mining" onClick={closeMenu}>Geotechnical &amp; Mining</Link>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="nav-cta" onClick={closeMenu}>
              Start a project <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>

      <main id="top">
        <Routes>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/home" element={<Home openModal={openModal} />} />
          <Route path="/geotechnical-mining" element={<GeotechnicalMining openModal={openModal} />} />
        
          <Route path="/services" element={<Services openModal={openModal} />} />
          <Route path="/projects" element={<Projects openModal={openModal} />} />
          <Route path="/about" element={<About openModal={openModal} />} />
          <Route path="/contact" element={<Contact openModal={openModal} />} />
        </Routes>
      </main>

      <footer>
        <div className="shell">
          <div className="footer-grid">
            <div>
              <Link className="brand" to="/" aria-label="KAYBROS pnge">
                <img className="brand-mark" src="/logo/1000995788.png" alt="" />
                <span className="brand-name">
                  KAYBROS <small>Quality engineering</small>
                </span>
              </Link>
              <p className="footer-blurb">
                Design. Build. Renovate.Geotechnical and mining projects, done
                with care.
              </p>
            </div>

            <div>
              <p className="footer-title">Explore</p>
              <ul>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            
              </ul>
            </div>

            <div>
              <p className="footer-title">Services</p>
              <ul>
                <li><Link to="/services">Construction</Link></li>
                <li><Link to="/services">Structural Engineering</Link></li>
                <li><Link to="/services">Roofing</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer-title">Start a project</p>
              <ul>
                <li><a href="mailto:hello@kaybroskenya.com">hello@kaybro.com</a></li>
                <li><a href="tel:+254700000000">0706 676062</a></li>
                <li>Kenya · By appointment</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 KAYBROS. All rights reserved.</span>
            
          </div>
        </div>
      </footer>

      {/* Modal — stays in App.jsx because multiple pages trigger it */}
      <div
        className={`modal ${modalOpen ? "open" : ""}`}
        aria-hidden={!modalOpen}
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div className="modal-head">
            <div>
              
              <h2 id="modalTitle" style={{ fontSize: "2rem", marginTop: "12px" }}>
                Tell us about your project.
              </h2>
            </div>
            <button type="button" className="close" aria-label="Close form" onClick={closeModal}>
              ×
            </button>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" required type="email" placeholder="you@example.com" />
            </label>
            <label>
              Project details
              <textarea
                name="details"
                required
                placeholder="What are you planning to build, renovate or improve?"
              />
            </label>
            <button className="button form-submit" type="submit">
              Send enquiry <span>↗</span>
            </button>
          </form>
        </div>
      </div>

      <div className={`toast ${toastVisible ? "show" : ""}`}>
        Thanks — your enquiry is ready to send.
      </div>
    </>
  );
}

export default App;