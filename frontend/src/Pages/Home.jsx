import React from "react";
import {
  Header,
  HeroSection,
  Newsletter,
  BlogPreviewSection,
} from "../components";

const Home = () => {
  return (
    <div>
      <Newsletter />
      <Header />
      <HeroSection />
      <BlogPreviewSection />
    </div>
  );
};

export default Home;
