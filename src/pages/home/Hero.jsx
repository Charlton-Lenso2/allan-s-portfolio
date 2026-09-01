import { useEffect, useState } from "react";
import "./Hero.css";
import photoOne from "../../assets/WhatsApp Image 2026-08-26 at 21.21.04 (1).jpeg";
import photoTwo from "../../assets/WhatsApp Image 2026-08-26 at 21.21.04.jpeg";
import photoThree from "../../assets/WhatsApp Image 2026-08-26 at 21.23.34.jpeg";

const PHOTOS = [
  { src: photoOne, alt: "Allan leaning against a colorful painted wall" },
  { src: photoTwo, alt: "Allan working on a laptop during a study session" },
  { src: photoThree, alt: "Allan in a shirt and tie checking his watch" },
];

const ROTATE_MS = 4000;

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((current) => (current + 1) % PHOTOS.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero">
      <div className="firstText">
        <h3 className="allan">ALLAN SKONCE</h3>
        <h1 className="product">GRAPHIC</h1>
      </div>
      <div className="heroImage">
        <div className="heroFrame">
          {PHOTOS.map((photo, index) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={index === active ? photo.alt : ""}
              aria-hidden={index === active ? undefined : "true"}
              className={index === active ? "heroPhoto active" : "heroPhoto"}
            />
          ))}
        </div>
      </div>
      <div className="secondText">
        <h1 className="designer">DESIGNER</h1>
        <h5 className="desc">
          Visual identities and designs that help brands communicate clearly
          and stand out.
        </h5>
      </div>
    </div>
  );
}

export default Hero;