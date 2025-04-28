import React from "react";

import Hero from "../../../components/Hero";

import WhyChooseUs from "../../../components/WhyChooseUs";
import DeliverySection from "../../../components/DeliverySection";
import OurCreativeTemplates from "../../../components/OurCreativeTemplates";
import OurMainFeatures from "@/components/OurMainFeatures";
import TestimonialSlider from "../../../components/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WhyChooseUs />
      <DeliverySection />
      <OurCreativeTemplates />
      <OurMainFeatures></OurMainFeatures>
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
};

export default Home;
