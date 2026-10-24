import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";

const PROJECTS = [
  {
    category: " altra modern Residential",
    title: "Altra Modern Residential",
    description: "A modern residential project designed for contemporary living.",
    location: "voi",
    image: "/images/alt1.png",
    gallery: ["/images/alt1.png", "/images/alt4.png", "/images/alt3.webp", "/images/alt4.webp"],
  },
  {
    category: "Residential",
    title: "Kwale 4 Bedroom Mansionette",
    description: "A spacious 4-bedroom mansionette designed for comfort and style.",
    location: "Kwale",
    image: "/images/kwale1.webp",
    gallery: ["/images/kwale1.webp", "/images/kwale2.webp", "/images/kwale3.webp", "/images/kwale4.webp", "/images/kwale5.webp", "/images/kwale6.webp", "/images/kwale7.webp", "/images/kwale8.webp"],
  },

  {
    category: "bedsiter unit",
    title: "Bedsitter units",
    description: "A set of bedsitter units designed for efficient living and modern aesthetics.",
    location: "VOI",
    image: "/images/bs1.webp",
    gallery: ["/images/bs1.webp", "/images/bs2.webp", "/images/bs3.webp", "/images/bs4.webp", "/images/bs5.webp", "/images/bs6.webp"],
  },
  {
    category: "Residential",
    title: "Residential 3bedroom mansionette",
    description: "A 3-bedroom mansionette designed for comfortable family living.",
    location: "TAVETA",
    image: "/images/ma2.webp",
    gallery: ["/images/ma1.webp", "/images/ma2.webp", "/images/ma3.webp", "/images/ma4.webp" ],
  },
   {
    Category: "residential",
    title: "Residential 3bedroom Bungalow",
    description: "A 3-bedroom bungalow designed for comfortable family living.",
    location: "Machakos",
    image: "/images/B7.webp",
    gallery: ["/images/B1.webp", "/images/B2.webp", "/images/B3.webp", "/images/B4.webp", "/images/B5.webp", "/images/B6.webp", "/images/B7.webp", "/images/B8.webp", "/images/B9.webp", ],
   },

  {
    category: "Residential",
    title: "Modern residential home",
    description: "A contemporary 4-bedroom residential home designed for comfort and style.",
    image: "/images/serene2.webp",
    gallery: ["/images/serene1.webp", "/images/serene2.webp"],
  },
  {
    category: "Commercial",
    title: "Guitar House BnB",
    description: "A guest house designed for comfort, with a focus on modern aesthetics and functionality.",
    image: "/images/guiter1.webp",
    gallery: ["/images/guiter1.webp", "/images/guiter2.webp"],
  },
  {
    category: "Education",
    title: "Interactive learning environment",
    description: "Modern lecture halls designed to enhance student engagement and facilitate effective learning.",
    image: "/images/hall2.webp",
    gallery: ["/images/hall2.webp", "/images/hall1.webp"],
  },
  {
    category: "Structures",
    title: "Car Shade Fabrication and Installation",
    description: "Durable car shades, fabricated and installed to provide protection for vehicles.",
    image: "/images/shade2.webp",
    gallery: ["/images/shade1.webp", "/images/shade2.webp", "/images/shade4.webp", "/images/shade5.webp"],
  },
  {
    category: "Residential",
    title: "Residential Bungalow",
    description: "A bungalow project featuring roofing designed to protect the property and complement its architecture.",
    image: "/images/bungalow5.webp",
    gallery: ["/images/bungalow1.webp", "/images/bungalow2.webp", "/images/bungalow3.webp", "/images/bungalow4.webp", "/images/bungalow5.webp", "/images/bungalow6.webp"],
  },
  {
    category: "Interiors",
    title: "Contemporary Interior Design",
    description: "Modern interior design that combines functionality with aesthetic appeal.",
    image: "/images/interior1.webp",
    gallery: ["/images/interior1.webp", "/images/interior2.webp", "/images/interior3.webp", "/images/interior4.webp", "/images/interior5.webp", "/images/interior6.webp"],
  },
  {
    category: "one bedroom units",
    title: "modern one bedroom units",
    description: "Modern One bedroom with specious balcony",
    image: "/images/1b.webp",
    gallery: ["images/1b.webp"]

  }
];

function getCardStyle(index, activeIndex) {
  const offset = index - activeIndex;
  const distance = Math.abs(offset);
  const direction = Math.sign(offset);

  return {
    zIndex: PROJECTS.length - distance,
    transform: `translateX(${offset * 68}px) translateY(${distance * 8 + 46 - (offset === 0 ? 26 : 0)}px) translateZ(${offset === 0 ? 100 : -60 * distance}px) rotateY(${offset === 0 ? 0 : direction * 40}deg) rotateX(${offset === 0 ? -2 : 2}deg) scale(${offset === 0 ? 1.05 : 1})`,
  };
}

function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [viewerProject, setViewerProject] = useState(null);
  const [viewerImage, setViewerImage] = useState(0);
  const projectsSectionRef = useRef(null);
  const fanRef = useRef(null);
  const gestureLocked = useRef(false);
  const touchStartY = useRef(null);
  const viewerTouchStartX = useRef(null);

  const selectProject = (index) => {
    setActiveProject(Math.max(0, Math.min(PROJECTS.length - 1, index)));
  };

  const navigateToProject = useCallback((index) => {
    const nextIndex = Math.max(0, Math.min(PROJECTS.length - 1, index));
    setActiveProject(nextIndex);

    if (!window.matchMedia("(max-width: 768px)").matches) return;

    const stack = fanRef.current?.querySelector(".project-fan-stack");
    const card = stack?.querySelectorAll(".project-fan-card")[nextIndex];
    if (!stack || !card) return;

    const stackBounds = stack.getBoundingClientRect();
    const cardBounds = card.getBoundingClientRect();
    const centerOffset = cardBounds.left + cardBounds.width / 2 - stackBounds.left - stackBounds.width / 2;
    stack.scrollTo({
      left: stack.scrollLeft + centerOffset,
      behavior: "instant",
    });
  }, []);

  const openViewer = (project, event) => {
    event.stopPropagation();
    setViewerProject(project);
    setViewerImage(0);
  };

  const closeViewer = () => setViewerProject(null);

  useEffect(() => {
    if (viewerProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") navigateToProject(activeProject + 1);
      if (event.key === "ArrowLeft") navigateToProject(activeProject - 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, navigateToProject, viewerProject]);

  useEffect(() => {
    const section = projectsSectionRef.current;
    if (!section || viewerProject) return undefined;

   const isProjectsInView = () => {
  if (window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  const fan = fanRef.current;
  if (!fan) return false;

  const bounds = fan.getBoundingClientRect();
  const tolerance = 40; // slack for the card scale and 3D tilt

  // Lock only when the whole card stack is on screen
  return bounds.top >= -tolerance && bounds.bottom <= window.innerHeight + tolerance;
};

  

  const advanceWithScroll = (event, distance) => {
    if (!isProjectsInView() || distance === 0) return;

    const direction = distance > 0 ? 1 : -1;
    const nextProject = activeProject + direction;

    // At the first project (scrolling up) or last project (scrolling down):
    // don't block, so the page scrolls normally
    if (nextProject < 0 || nextProject >= PROJECTS.length) return;

    // Everywhere in between: always block page scroll, even during cooldown
    event.preventDefault();

    if (gestureLocked.current) return;
    gestureLocked.current = true;
    selectProject(nextProject);
    window.setTimeout(() => {
      gestureLocked.current = false;
    }, 550);
  };

    const handleWheel = (event) => advanceWithScroll(event, event.deltaY);
    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };
    const handleTouchMove = (event) => {
      if (touchStartY.current === null) return;
      advanceWithScroll(event, touchStartY.current - event.touches[0].clientY);
    };
    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeProject, viewerProject]);

  useEffect(() => {
    if (!viewerProject) return undefined;

    const handleViewerKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") {
        setViewerImage((current) => (current + 1) % viewerProject.gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setViewerImage((current) => (current - 1 + viewerProject.gallery.length) % viewerProject.gallery.length);
      }
    };

    window.addEventListener("keydown", handleViewerKeyDown);
    document.body.classList.add("menu-open");
    return () => {
      window.removeEventListener("keydown", handleViewerKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [viewerProject]);

  useEffect(() => {
    if (!viewerProject) return;

    const gallery = viewerProject.gallery;
    const previousImage = new Image();
    const nextImage = new Image();
    previousImage.src = gallery[(viewerImage - 1 + gallery.length) % gallery.length];
    nextImage.src = gallery[(viewerImage + 1) % gallery.length];
  }, [viewerImage, viewerProject]);

  return (
    <>
      <section id="projects" ref={projectsSectionRef}>
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <h2 className="projects-heading"> Our Projects </h2>
            </div>
          </div>
          <div className="project-fan reveal" ref={fanRef} aria-label="Selected projects">
            <div
              className="project-fan-stack"
              onScroll={(event) => {
                if (!window.matchMedia("(max-width: 768px)").matches) return;
                const cards = [...event.currentTarget.querySelectorAll(".project-fan-card")];
                const center = event.currentTarget.getBoundingClientRect().left + event.currentTarget.clientWidth / 2;
                const nearestIndex = cards.reduce((nearest, card, index) => {
                  const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2;
                  return Math.abs(cardCenter - center) < Math.abs(cards[nearest].getBoundingClientRect().left + cards[nearest].clientWidth / 2 - center)
                    ? index
                    : nearest;
                }, 0);
                selectProject(nearestIndex);
              }}
              onPointerDown={(event) => {
                if (window.matchMedia("(max-width: 768px)").matches) return;
                setDragStart({ x: event.clientX, y: event.clientY });
              }}
              onPointerUp={(event) => {
                if (window.matchMedia("(max-width: 768px)").matches) return;
                if (dragStart === null) return;
                const horizontalDistance = dragStart.x - event.clientX;
                const verticalDistance = dragStart.y - event.clientY;
                if (Math.abs(verticalDistance) > Math.max(40, Math.abs(horizontalDistance))) {
                  selectProject(activeProject + (verticalDistance > 0 ? 1 : -1));
                } else if (Math.abs(horizontalDistance) > 40) {
                  selectProject(activeProject + (horizontalDistance > 0 ? 1 : -1));
                }
                setDragStart(null);
              }}
              onPointerCancel={() => setDragStart(null)}
            >
              {PROJECTS.map((project, index) => (
                <article
                  className={`project-fan-card ${index === activeProject ? "active" : ""}`}
                  key={project.title}
                  style={getCardStyle(index, activeProject)}
                  onClick={() => selectProject(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") selectProject(index);
                  }}
                  role="button"
                  tabIndex="0"
                  aria-label={`View ${project.title}`}
                >
                  <img className="project-fan-image" src={project.image} alt={`${project.title} project`} loading={index === activeProject ? "eager" : "lazy"} />
                  <span className="project-fan-shade" />
                  <span className="project-fan-info">
                    <strong>{project.title}</strong>
                    <button className="project-fan-more" type="button" onClick={(event) => openViewer(project, event)}>
                      See more <span aria-hidden="true">&rarr;</span>
                    </button>
                  </span>
                </article>
              ))}
            </div>
            <div className="project-fan-controls" aria-label="Project navigation">
              <button type="button" onClick={() => navigateToProject(activeProject - 1)} disabled={activeProject === 0} aria-label="Previous project">
                <span aria-hidden="true">&lsaquo;</span>
              </button>
              <div className="project-fan-dots">
                {PROJECTS.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    className={index === activeProject ? "active" : ""}
                    onClick={() => navigateToProject(index)}
                    aria-label={`Go to ${project.title}`}
                    aria-current={index === activeProject ? "step" : undefined}
                  />
                ))}
              </div>
              <span className="project-fan-count">
                {String(activeProject + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
              </span>
              <button type="button" onClick={() => navigateToProject(activeProject + 1)} disabled={activeProject === PROJECTS.length - 1} aria-label="Next project">
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </div>
            <p className="project-fan-hint">Scroll or click a card to explore</p>
          </div>
          <div className="projects-note reveal">
            <p>Real estate, geotechnical &amp; mining projects, delivered with care.</p>
            <Link className="button outline" to="/contact">
              Discuss your brief <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {viewerProject && (
        <div className="project-viewer" role="dialog" aria-modal="true" aria-label={`${viewerProject.title} gallery`} onClick={closeViewer}>
          <div className="project-viewer-card" onClick={(event) => event.stopPropagation()}>
            <div className="project-viewer-head">
              <div>
                <h2>{viewerProject.title}</h2>
                <p className="project-viewer-description">{viewerProject.description}</p>
                <div className="project-viewer-meta" aria-label="Project details">
                  {viewerProject.category && <span>Category: {viewerProject.category}</span>}
                  {viewerProject.location && <span>Location: {viewerProject.location}</span>}
                </div>
              </div>
              <div className="project-viewer-actions">
                <span className="project-viewer-count" aria-live="polite">
                  {viewerImage + 1} / {viewerProject.gallery.length}
                </span>
                <button className="project-viewer-close" type="button" onClick={closeViewer} aria-label="Close image viewer">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div
              className="project-viewer-main"
              onTouchStart={(event) => {
                viewerTouchStartX.current = event.touches[0].clientX;
              }}
              onTouchEnd={(event) => {
                if (viewerTouchStartX.current === null) return;
                const distance = viewerTouchStartX.current - event.changedTouches[0].clientX;
                const galleryLength = viewerProject.gallery.length;
                if (distance > 50) setViewerImage((current) => (current + 1) % galleryLength);
                if (distance < -50) setViewerImage((current) => (current - 1 + galleryLength) % galleryLength);
                viewerTouchStartX.current = null;
              }}
            >
              <button className="project-viewer-arrow" type="button" onClick={() => setViewerImage((viewerImage - 1 + viewerProject.gallery.length) % viewerProject.gallery.length)} aria-label="Previous image">
                <span aria-hidden="true">&lsaquo;</span>
              </button>
              <img key={viewerImage} src={viewerProject.gallery[viewerImage]} alt={`${viewerProject.title} view ${viewerImage + 1}`} />
              <button className="project-viewer-arrow" type="button" onClick={() => setViewerImage((viewerImage + 1) % viewerProject.gallery.length)} aria-label="Next image">
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </div>
            <div className="project-viewer-thumbs">
              {viewerProject.gallery.map((image, index) => (
                <button className={index === viewerImage ? "active" : ""} type="button" key={image} onClick={() => setViewerImage(index)} aria-label={`Show image ${index + 1}`}>
                  <img src={image} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}


    </>
  );
}

export default Projects;