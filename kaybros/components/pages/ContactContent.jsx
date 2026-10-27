"use client"
import BookButton from '@/components/BookButton'
import "../../styles/contact.css";

function Contact() {
  return (
    <>

      <section className="cta" id="contact">
        <div className="shell">
          <div className="cta-card reveal">
            <h1>Ready to build something that lasts?</h1>
            <button type="button" className="button light js-contact" onClick={() => window.dispatchEvent(new Event("open-modal"))}>
              Get in touch <span>↗</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;