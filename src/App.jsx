import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GeotechnicalMining from "./pages/GeotechnicalMining";

// Formspree form that emails enquiries to info@kaybros.co.ke
const FORM_ENDPOINT = "https://formspree.io/f/mrpppeae";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found | KAYBROS</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="shell" style={{ padding: "120px 0", textAlign: "center" }}>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link className="button" to="/">Back to home</Link>
      </section>
    </>
  );
}

function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

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
  }, [location.pathname, location.hash]);

  // Close the enquiry pop-up with the Escape key
  useEffect(() => {
    if (!modalOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("menu-open");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("menu-open");
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
    window.setTimeout(() => setToast((current) => ({ ...current, visible: false })), 4000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const form = event.target;
    setSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Request failed");

      closeModal();
      form.reset();
      showToast("Thanks, we've received your enquiry and will be in touch soon.");
    } catch {
      showToast("Sorry, something went wrong. Please email or call us directly.");
    } finally {
      setSubmitting(false);
    }
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
            <img className="brand-mark" src="/logo/1000995788.png" alt="" />
          </Link>

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
            <Link to="/" onClick={closeMenu}>Home</Link>
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
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/geotechnical-mining" element={<GeotechnicalMining openModal={openModal} />} />
          <Route path="/projects" element={<Projects openModal={openModal} />} />
          <Route path="/about" element={<About openModal={openModal} />} />
          <Route path="/contact" element={<Contact openModal={openModal} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <div className="shell">
          <div className="footer-grid">
            <div>
              <Link className="brand" to="/" aria-label="KAYBROS home">
                <img className="brand-mark" src="/logo/1000995788.png" alt="" />
                <span className="brand-name">
                  KAYBROS <small>Quality engineering</small>
                </span>
              </Link>
              <p className="footer-blurb">
                Design. Build. Renovate. Geotechnical and mining projects, done with care.
              </p>
            </div>

            <div>
              <p className="footer-title">Explore</p>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/geotechnical-mining">Geotechnical &amp; Mining</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer-title">What we do</p>
              <ul>
                <li>Construction</li>
                <li>Renovation</li>
                <li>Roofing</li>
                <li><Link to="/geotechnical-mining">Geotechnical &amp; Mining</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer-title">Start a project</p>
              <ul>
                <li><a href="mailto:info@kaybros.co.ke">info@kaybros.co.ke</a></li>
                <li><a href="tel:+254706676062">0706 676062</a></li>
                <li>Kenya · By appointment</li>
                <li>
                  <a
                    href="https://www.instagram.com/kaybros.kenya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/p/Kaybros-Spacialmetric-Limited-KARSSEL-100064275454893/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
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
            {/* Hidden spam trap and email subject for Formspree */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />
            <input type="hidden" name="_subject" value="New enquiry from kaybros.co.ke" />

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
            <button className="button form-submit" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send enquiry"} <span>↗</span>
            </button>
          </form>
        </div>
      </div>

      <div className={`toast ${toast.visible ? "show" : ""}`} role="status" aria-live="polite">
        {toast.message}
      </div>
    </>
  );
}

export default App;