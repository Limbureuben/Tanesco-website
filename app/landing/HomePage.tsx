import React from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CTABand from "../components/CTABand";
import Pricing from "../components/Pricing";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Overview />
        <Services />
        <CTABand />
        <Pricing />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}