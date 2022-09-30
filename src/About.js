import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Ecommerce",
  };
  return (
    <div>
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
