import "./ContactSection.css";
import useReveal from "../../hooks/useReveal";

function ContactSection() {
  const introRef = useReveal();
  const formRef = useReveal();

  return (
    <section className="contactSection" aria-labelledby="contact-title">
      <div className="contactLayout">
        <header className="contactIntro reveal" ref={introRef}>
          <p className="contactEyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s make<br />something work.</h2>
          <p className="contactCopy">I am open to product design projects, brand collaborations, and thoughtful conversations about ideas that need a clear visual direction.</p>
          <div className="contactMeta">
            <p>Best for</p>
            <span>Digital products, brand identities, and visual systems.</span>
            <a href="mailto:allanskonce@gmail.com">allanskonce@gmail.com</a>
          </div>
        </header>

        <form className="contactForm reveal" ref={formRef} action="#" method="POST">
          <div className="formField">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </div>
          <div className="formField">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>
          <div className="formField">
            <label htmlFor="project">Message</label>
            <textarea id="project" name="message" rows="6" placeholder="What are you working on?" required />
          </div>
          <button className="contactSubmit" type="submit">Send message <span aria-hidden="true">&rarr;</span></button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
