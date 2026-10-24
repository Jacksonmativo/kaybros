import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/geotechnical-mining.css";

const PROJECTS = [
  {
    title: "Drilling & ground investigation",
    description:
      "Rotary drilling and sampling to understand subsurface conditions, with samples collected and logged on site by our geologists.",
    images: ["/images/geo3.webp", "/images/geo7.webp", "/images/geo9.webp"],
  },
  {
    title: "Topographic survey & setting out",
    description:
      "Total station surveying to map terrain and set out levels and alignments ahead of earthworks and construction.",
    images: ["/images/geo2.webp", "/images/geo1.webp"],
  },
  {
    title: "Stone and reinforcement works",
    description:
      "Site works combining rock placement and steel reinforcement, supported by excavation equipment and an on-site crew.",
    images: ["/images/geo4.webp"],
  },
  {
    title: "Gabion retaining walls",
    description:
      "Stepped gabion walls built to retain slopes and manage erosion, with stone-filled wire baskets placed to design.",
    images: ["/images/geo5.webp", "/images/geo8.webp", "/images/gab1.webp","/images/gab2.webp"],
  },
  {
    title: "Quarry & mining operations",
    description:
      "Support for active quarry works, including haulage and extraction at the rock face.",
    images: ["/images/geo6.webp"],
  },
];

function CutoutImage({ src, alt = "" }) {
  return (
    <div className="gm-feature-image-cutout-wrap">
      <svg
        className="gm-feature-image-cutout-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="kaybros-cutout" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0 H0.9 A0.1,0.1 0 0 1 1,0.1 V0.6 A0.11,0.11 0 0 1 0.89,0.71 H0.71 A0.175,0.175 0 0 0 0.535,0.885 A0.115,0.115 0 0 1 0.42,1 H0.1 A0.1,0.1 0 0 1 0,0.9 V0.78 A0.066,0.066 0 0 1 0.066,0.714 H0.3 A0.157,0.157 0 0 0 0.3,0.4 H0.1 A0.1,0.1 0 0 1 0,0.3 V0.1 A0.1,0.1 0 0 1 0.1,0 Z" />
            <path d="M0.04,0.457 H0.3 A0.1,0.1 0 0 1 0.3,0.657 H0.04 A0.04,0.04 0 0 1 0,0.617 V0.497 A0.04,0.04 0 0 1 0.04,0.457 Z" />
            <path d="M0.71,0.77 H0.96 A0.04,0.04 0 0 1 1,0.81 V0.96 A0.04,0.04 0 0 1 0.96,1 H0.71 A0.115,0.115 0 0 1 0.71,0.77 Z" />
          </clipPath>
        </defs>
      </svg>

      <img className="gm-feature-image-cutout-img" src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function GeotechnicalMining({ openModal }) {
  const [activeImageIndices, setActiveImageIndices] = useState(() => PROJECTS.map(() => 0));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndices((current) =>
        current.map((activeIndex, projectIndex) => {
          const imageCount = PROJECTS[projectIndex].images.length;
          return imageCount > 1 ? (activeIndex + 1) % imageCount : 0;
        })
      );
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="geotechnical-page">
      <section className="gm-hero">
        <div className="shell gm-hero-grid">
          <div>
            <h1>Geotechnical &amp; Mining</h1>
            <p className="lead">We carry out drilling, sampling, and topographic surveys to show you what lies beneath a site. We also build gabion walls and support quarry operations across Kenya.</p>
            <button className="button" onClick={openModal}>
              Start a project
            </button>
          </div>
          <CutoutImage src="/images/geo3.webp" alt="Drilling and ground investigation" />
        </div>
      </section>

      {/* ...scope section unchanged... */}

      <section className="gm-samples">
        <div className="shell">
          <div className="section-head">
            <div>
              <h2>Projects</h2>
            </div>
            <Link className="button outline" to="/projects">
              View all projects <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="gm-samples-grid">
            {PROJECTS.map((project, projectIndex) => (
              <article className="gm-sample" key={project.title}>
                <div className={`gm-sample-images${project.images.length > 1 ? " is-rotating" : ""}`}>
                  {project.images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} ${i + 1}`}
                      className={i === activeImageIndices[projectIndex] ? "is-active" : ""}
                      aria-hidden={i !== activeImageIndices[projectIndex]}
                    />
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ...contact section unchanged... */}
    </div>
  );
}

export default GeotechnicalMining;