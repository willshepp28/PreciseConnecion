import React from "react";
import {
  Hero,
  TransformWithUs,
  Services,
  BookUs,
  Faq,
} from "../../components/index";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TransformWithUs />
      <Services />
      <BookUs />
      <Faq />
    </div>
  );
};

export default Home;
