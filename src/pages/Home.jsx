import { Helmet } from "react-helmet-async";
import "../styles/home.css";
import Services from "./Services";
import {
  CalendarDays,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

function Home({ openModal }) {
  return (
    <>
      <Helmet>
        <title>KAYBROS | Construction, Civil Engineering & Mining in Kenya</title>
        <meta
          name="description"
          content="KAYBROS Spacialmetric Limited delivers construction, renovation, roofing, geotechnical and mining support across Kenya, with over 10 years of expertise."
        />
        <link rel="canonical" href="https://kaybros.co.ke/" />
      </Helmet>

      <section className="hero">
        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="/images/hero1.webp"
              alt="Modern home built by KAYBROS"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Welcome to KAYBROS Spacialmetric Limited</span>
            <h1>
              We build spaces that <span className="accent">stand strong</span>
            </h1>
            <p className="lead">
              Design, construction, geotechnical and mining support across Kenya, under one team.
            </p>

            <div className="hero-actions">
              <button className="button" type="button" onClick={openModal}>
                <CalendarDays size={18} aria-hidden="true" />
                Book a consultation
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="hero-badge">
          <ShieldCheck size={38} strokeWidth={1.6} aria-hidden="true" />
          <div>
            <strong>10+</strong>
            <span>Years of expertise</span>
          </div>
        </div>

        <div className="hero-wave" aria-hidden="true">
          {["back", "mid", "front"].map((layer) => (
            <svg
              key={layer}
              className={`wave wave-${layer}`}
              viewBox="0 0 2880 200"
              preserveAspectRatio="none"
            >
              <path d="M0,100 C240,40 480,40 720,100 C960,160 1200,160 1440,100 C1680,40 1920,40 2160,100 C2400,160 2640,160 2880,100 L2880,200 L0,200 Z" />
            </svg>
          ))}
        </div>
      </section>

      <Services openModal={openModal} />
    </>
  );
}

export default Home;