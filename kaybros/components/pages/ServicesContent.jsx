"use client"
import BookButton from '@/components/BookButton'
import Link from 'next/link'
import "../../styles/services.css";

function Services() {
  const services = [
    {
      title: "Construction",
      description: "End-to-end builds managed with clear planning, skilled trades and dependable site supervision.",
      image: "/images/kwale6.webp",
      alt: "Residential construction project completed by KAYBROS in Kwale, Kenya",
    },
    {
      title: "Geotechnical & mining",
      description: "Ground assessment and mining project support to help teams make informed decisions on site.",
      image: "/images/geo3.webp",
      alt: "Drilling rig on a ground investigation site in Kenya",
      to: "/geotechnical-mining",
    },
    {
      title: "Renovation",
      description: "Thoughtful upgrades that improve how your home or business looks, works and lasts.",
      image: "/images/interior2.webp",
      alt: "Renovated modern interior finished by KAYBROS",
    },
    {
      title: "Roofing",
      description: "Quality roofing solutions that protect your property and finish the build properly.",
      image: "/images/bungalow2.webp",
      alt: "Bungalow with a finished roof installed by KAYBROS",
    },
  ];

  return (
    <section className="services-page" id="services">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <h2>What We Do</h2>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.alt} loading="lazy" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.to && (
                  <Link className="service-detail-link" href={service.to}>
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note reveal">
          <p>Have a project in mind? Let&apos;s talk through the brief.</p>
          <button type="button" className="button outline" onClick={() => window.dispatchEvent(new Event("open-modal"))}>
            Start a project <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;