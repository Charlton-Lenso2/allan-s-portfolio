import { Link } from "react-router-dom";
import portrait from "../assets/WhatsApp Image 2026-08-26 at 21.21.04 (1).jpeg";
import AutoCarousel from "./AutoCarousel";
import useReveal from "../hooks/useReveal";
import "./About.css";

const certImages = Object.values(
  import.meta.glob("../assets/port assets/Certs/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  }),
);

function About() {
  const introRef = useReveal();
  const portraitRef = useReveal();
  const storyRef = useReveal();
  const capabilitiesRef = useReveal();
  const certificatesRef = useReveal();
  const closingRef = useReveal();

  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutPageIntro reveal" ref={introRef}>
          <p className="pageEyebrow">About Allan</p>
          <h1>
            Design with
            <br />a point of view.
          </h1>
          <p className="aboutPageLead">
            Allan Skonce is a multidisciplinary designer creating considered
            identities, digital experiences, and visual systems that help ideas
            connect with people.
          </p>
        </div>
        <img
          className="aboutPortrait reveal"
          ref={portraitRef}
          src={portrait}
          alt="Allan Skonce"
        />
      </section>

      <section className="aboutStory reveal" ref={storyRef}>
        <p className="pageEyebrow">The approach</p>
        <div>
          <h2>
            Good design should feel simple, even when the thinking behind it is
            not.
          </h2>
          <p>
            Every project starts by getting close to the real question. From
            there, strategy, words, layout, and detail come together to create
            work that is clear, useful, and unmistakably yours.
          </p>
          <p>
            From early concepts through to the final touchpoints, the focus
            stays on building an experience people can understand and remember.
          </p>
        </div>
      </section>

      <section className="aboutCapabilities">
        <p className="pageEyebrow">What I do</p>
        <div className="capabilityList reveal" ref={capabilitiesRef}>
          <div>
            <span>01</span>
            <h3>Brand identity</h3>
            <p>
              Distinct visual identities, guidelines, and launch-ready assets.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Digital design</h3>
            <p>Interfaces and product experiences built around real people.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Visual communication</h3>
            <p>
              Campaigns, editorial pieces, and graphics that make a message
              land.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutCertificates reveal" ref={certificatesRef}>
        <p className="pageEyebrow">Certifications</p>
        <AutoCarousel
          images={certImages}
          className="certificatesCarousel"
          imageClassName="certImage"
        />
      </section>

      <section className="aboutClosing reveal" ref={closingRef}>
        <p>Have a project in mind?</p>
        <Link to="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default About;
