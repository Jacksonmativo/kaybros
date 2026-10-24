import { Link } from "react-router-dom";
import "../styles/services.css";

function Services({ openModal }) {
  const services = [
    {
      
      title: "Construction",
      description: "End-to-end builds managed with clear planning, skilled trades and dependable site supervision.",
      image: "/images/kwale6.webp",
    },
    {
      
      title: "Geotechnical & mining",
      description: "Ground assessment and mining project support to help teams make informed decisions on site.",
      image: "/images/geo3.webp",
      to: "/geotechnical-mining",
    },
    {
     
      title: "Renovation",
      description: "Thoughtful upgrades that improve how your home or business looks, works and lasts.",
      image: "/images/interior2.webp",
    },
    {
     
      title: "Roofing",
      description: "Quality roofing solutions that protect your property and finish the build properly.",
      image: "/images/bungalow2.webp",
    },
  ];

  return (
    <section className="services-page" id="services">
      <div className="shell">
        <div className="section-head reveal">
          <div>
  
            <h1>What we Do</h1>
          </div>
          
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.to && (
                  <Link className="service-detail-link" to={service.to}>
                    Explore project  <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note reveal">
          <p>Have a project in mind? Let&apos;s talk through the brief.</p>
          <button type="button" className="button outline" onClick={openModal}>
            Start a project <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;