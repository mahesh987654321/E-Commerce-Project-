import React from "react";
import styled from "styled-components";
import About from "./About";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Mahesh's Store",
  };

  return (
    <div>
      <HeroSection myData={data} /> <About myData={data} />
    </div>
  );
};

export default Home;
