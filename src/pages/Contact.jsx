import { Helmet } from "react-helmet-async";
import "../styles/contact.css";

function Contact({ openModal }) {
  return (
    <>
      <Helmet>
        <title>Contact Us | KAYBROS Construction & Engineering Kenya</title>
        <meta
          name="description"
          content="Get in touch with KAYBROS Spacialmetric Limited to discuss your construction, roofing, geotechnical or mining project in Kenya. Book a consultation today."
        />
        <link rel="canonical" href="https://kaybros.co.ke/contact" />
      </Helmet>

      <section className="cta" id="contact">
        <div className="shell">
          <div className="cta-card reveal">
            <h1>Ready to build something that lasts?</h1>
            <button type="button" className="button light js-contact" onClick={openModal}>
              Get in touch <span>↗</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;