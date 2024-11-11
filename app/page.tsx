"use client";

import { useEffect } from "react";

import Hero from "@/components/Hero";
import FixedMenu from "@/components/FixedMenu";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      new locomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
