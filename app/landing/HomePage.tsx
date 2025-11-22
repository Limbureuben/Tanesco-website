"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import AboutSection from "../../components/landing/AboutSection";
import ServicesSection from "../../components/landing/ServicesSection";
import Testimonials from "../../components/landing/Testimonials";
import ContactSection from "../../components/landing/ContactSection";
import ProjectsSection from "../../components/landing/ProjectsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}