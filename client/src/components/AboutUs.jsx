import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              Welcome to our website! At [Spiritual Healing by Dhanesh or Logo
              Name can be use ], we are dedicated to providing you with the
              highest quality holistic healthcare options. One of the effective
              modalities we offer is Craniosacral Therapy (CST). In this
              article, we will delve into the intricacies of CST, exploring its
              principles, benefits, and how it can enhance your overall
              well-being.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
