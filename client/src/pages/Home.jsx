import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Hero1 from "../components/Hero1";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero1 />
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
