import "./AboutSection.css";
import aboutimage from "../../assets/WhatsApp Image 2026-08-26 at 21.23.34.jpeg";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

function AboutSection() {
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <>
      <div className="aboutsection">
        <div className="abouttext reveal" ref={textRef}>
          <h1>ABOUT ME</h1> <br /> <br />
          <p>
            Hi, I&apos;m Allan K. Skonce, a Graphic Designer focused on creating
            visual identities and designs that help brands communicate clearly
            and stand out.
          </p>
          <br />
          <br />
          <p>
            I enjoy turning ideas into purposeful visuals, from brand identities
            and marketing materials to social media content and print design. My
            approach combines creativity with strategy, ensuring that every
            design has a clear purpose rather than simply looking good.
          </p>
          <br />
          <br />
          <p>
            I&apos;m constantly developing my craft, exploring new ways to solve
            visual problems and expanding my understanding of digital and
            product experiences. I believe good design should be simple,
            intentional, memorable, and meaningful.
          </p> <br /> <br />
          <p className="aboutFocus">
            Currently focused on: Branding • Graphic Design • Print Design •
            Social Media Design • UI/UX
          </p>
          <Link to="/about">
            <button className="abtbtn">About</button>
          </Link>
        </div>
        <div className="aboutimage reveal" ref={imageRef}>
          <img src={aboutimage} alt="allan's photo" />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
