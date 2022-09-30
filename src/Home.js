import React from "react";
import styled from "styled-components";

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Mahesh's Store",
  };

  return (
    <div>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
