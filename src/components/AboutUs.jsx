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
              Craniosacral Therapy is a gentle, non-invasive approach that can
              have profound effects on your overall well-being. By working with
              the subtle movements of the craniosacral system, CST supports the
              body's natural healing abilities, promotes relaxation, and
              enhances physical and emotional balance. If you're seeking a
              holistic therapy to complement your health and wellness journey,
              Craniosacral Therapy may be an excellent choice for you. Reach out
              to CST today to book a session and experience the benefits
              firsthand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
