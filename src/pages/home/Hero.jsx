import "./Hero.css";
import React from "react";
import hero from "../../assets/hero.jpeg";

function Hero() {
  return (
    <div className="hero">
      <div className="firstText">
        <h3 className="allan">ALLAN SKONCE</h3>
        <h1 className="product">PRODUCT</h1>
      </div>
      <div className="heroImage">
        <div
          className="hi"
        >
          Hi
        </div>
        <img src={hero} alt="Allan's photo" />
      </div>
      <div className="secondText">
        <h1 className="designer">DESIGNER</h1>
        <h5 className="desc">
          Lorem ipsum dolor sit amet consectetur <br /> Lorem ipsum dolor sit!
        </h5>
      </div>
    </div>
  );
}

export default Hero;
