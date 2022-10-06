import { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext, useProduceContext } from "./context/productcontex";

const About = () => {
  const myName = useProduceContext();

  const data = {
    name: "Ecommerce",
  };

  return (
    <div>
      {myName}
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
