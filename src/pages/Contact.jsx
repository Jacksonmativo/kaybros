import "../styles/contact.css";

function Contact({ openModal }) {
  return (
    <section className="cta" id="contact">
      <div className="shell">
        <div className="cta-card reveal">
          <h2>Ready to build something that lasts?</h2>
          <button type="button" className="button light js-contact" onClick={openModal}>
            Get in touch <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;