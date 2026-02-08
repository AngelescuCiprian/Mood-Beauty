import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Team />
      <Gallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
