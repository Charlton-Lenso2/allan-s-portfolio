import "./AboutSection.css";
import aboutimage from "../../assets/hero.jpeg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <>
      <div className="aboutsection">
        <div className="abouttext">
          <h1>ABOUT ME</h1> <br /> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            nihil doloremque repellendus. Eum fugit maxime, natus repudiandae
            earum consectetur fuga asperiores sunt id pariatur quidem nam. Minus
            et quia vitae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam eius voluptatibus sequi assumenda facilis sit magnam
            eos nihil ut dolor placeat temporibus quam libero neque corrupti,
            veniam corporis incidunt molestias? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quia maxime vero ut quos velit
            doloremque, ab corrupti beatae veritatis nesciunt pariatur placeat
            hic laborum, architecto nostrum dolorum eligendi sunt asperiores.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            nihil doloremque repellendus. Eum fugit maxime, natus repudiandae
            earum consectetur fuga asperiores sunt id pariatur quidem nam. Minus
            et quia vitae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam eius voluptatibus sequi assumenda facilis sit magnam
            eos nihil ut dolor placeat temporibus quam libero neque corrupti,
            veniam corporis incidunt molestias? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quia maxime vero ut quos velit
            doloremque, ab corrupti beatae veritatis nesciunt pariatur placeat
            hic laborum, architecto nostrum dolorum eligendi sunt asperiores.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dicta, voluptate aliquam dolore doloremque eius sed. Tempora,
            debitis, unde ratione laboriosam dignissimos rem corporis esse
          </p> <br /> <br />
          <Link to="/about">
            <button className="abtbtn">About</button>
          </Link>
        </div>
        <div className="aboutimage">
          <img src={aboutimage} alt="allan's photo" />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
