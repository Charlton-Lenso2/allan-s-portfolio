import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contactSection" aria-labelledby="contact-title">
      <div className="contactIntro">
        <div>
          <p className="contactEyebrow">Let’s work together</p>
          <h2 id="contact-title">Have a good idea?<br />Let’s make it real.</h2>
        </div>
        <p className="contactCopy">Whether it is a new identity, a digital product, or a fresh perspective, I would love to hear what you are building.</p>
      </div>

      {/* Replace the action value with your Formspree endpoint when ready. */}
      <form className="contactForm" action="#" method="POST">
        <div className="formField">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
        </div>
        <div className="formField">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
        </div>
        <div className="formField formFieldWide">
          <label htmlFor="project">Tell me about your project</label>
          <textarea id="project" name="message" rows="5" placeholder="A few details about your idea, goals, and timeline..." required />
        </div>
        <button className="contactSubmit" type="submit">Send your message <span aria-hidden="true">↗</span></button>
      </form>

      <div className="contactNotes">
        <p>Typically replies within 1–2 business days.</p>
        <a href="mailto:hello@allanskonce.com">hello@allanskonce.com</a>
      </div>
    </section>
  );
}

export default ContactSection;
