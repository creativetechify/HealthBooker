import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Spiritual Healing <br />
          by Dr.Dhanesh Kumar Muchal
        </h1>
        <p>
          Welcome to our website! , we are dedicated to providing you with the
          highest quality holistic healthcare options. One of the effective
          modalities we offer is Craniosacral Therapy (CST). In this article, we
          will delve into the intricacies of CST, exploring its principles,
          benefits, and how it can enhance your overall well-being.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
