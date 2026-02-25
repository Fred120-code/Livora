"use client";

import About from "./About/page";
import Contact from "./Contact/page";
import Faqs from "./Faqs/page";
import Hero from "./Hero/page";
import MarqueeSlider1 from "./MarqueeSlider1/page";
import OurExpertise from "./Our-Expertise/page";
import Testimonial from "./Testimonial/page";
import WorkBanner from "./WorK-Banner/page";

const Index = () => {
  return (
    <>
      <Hero />
      <MarqueeSlider1 />
      <About />
      <WorkBanner />
      <OurExpertise />
      <Testimonial />
      <Faqs />
      <Contact />
    </>
  );
};

export default Index;
