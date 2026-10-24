import { Link } from "react-router-dom";
import EcoDiagram from "../components/EcoDiagram";
import "../styles/about.css";

function About() {
  return (
    <>
      <section className="eco-section">
        <div className="shell eco-grid">
          <div className="eco-copy reveal">
            
            <h2>
              Building and mining with<br></br> <span className="eco-heading-accent">respect for the land</span>
            </h2>
            <p className="lead">
              Every site we work on is part of a living landscape. We plan, build and mine in ways
              that protect the ground, the water and the communities around it, so that what we
              leave behind lasts.
            </p>
          </div>

          <EcoDiagram />
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="shell">
          <div className="mission-vision-grid">
            <article className="mission-vision-item reveal">
              <span className="mission-vision-label">Our mission</span>
              <h3>Deliver dependable work that lasts.</h3>
              <p>
                We bring construction, civil engineering, geotechnical and mining
                expertise together to deliver safe, well-planned projects with care
                for clients, communities and the land.
              </p>
            </article>

            <article className="mission-vision-item reveal">
              <span className="mission-vision-label">Our vision</span>
              <h3>Shape stronger places for the future.</h3>
              <p>
                We aim to be a trusted Kenyan partner for building and ground
                development, known for thoughtful decisions, quality delivery and
                lasting value in every project.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="shell about-grid">
          <div className="about-collage reveal">
            <div className="collage-main">
              <img
                src="/images/kwale3.webp"
                alt="Modern residential home exterior"
              />
            </div>
            <div className="collage-small">
              <img
                src="/images/kwale1.webp"
                alt="Construction team reviewing site work"
              />
            </div>
            <div className="collage-tag">
              40+<br />active sites
            </div>
          </div>

          <div className="reveal">
            <h2>Building confidence into every phase.</h2>
            <p className="lead">
              We believe strong projects start with clear decisions, dependable teams and
              practical execution. That is why clients trust us to manage the detail without
              losing sight of the bigger picture.
            </p>

            <ul className="check-list">
              <li>Transparent planning and pricing</li>
              <li>Skilled trades and on-site supervision</li>
              <li>Hands-on project coordination</li>
              <li>Quality materials and finish standards</li>
            </ul>

            <Link className="button js-contact" to="/contact">
              Talk to our team <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;