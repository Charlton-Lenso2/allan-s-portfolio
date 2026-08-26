import "./Footer.css";
import useReveal from "../hooks/useReveal";

function Footer() {
  const footerRef = useReveal();

  return (
    <>
      <div className="footer reveal" ref={footerRef}>
        <div className="name">Allan Skonce</div>
        <div className="first">
          <h3>Contact Designer</h3>
          <br />
          <br />
          <p>
            Open to new projects and collaborations. <br />
            Let&apos;s create work with purpose.
          </p>
        </div>
        <div className="second">
          <h3>Product Designing</h3>
          <br />
          <br />
          <p>
            Digital and product experiences shaped by <br />
            simple, intentional design decisions.
          </p>
        </div>

        <div className="iconsection">
          <a
            href="https://www.linkedin.com/in/allan-kundai-skonce-3086b0228"
            target="_blank"
            className="icon-linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:allanskonce@gmail.com" className="icon-email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>&copy; Allan Skonce | 2026</p>
      </div>
    </>
  );
}

export default Footer;
