import React from "react";
import AboutCard from "../../Components/AboutCard/AboutCard";
import MainScreen from "../../Components/MainScreen/MainScreen";
import about from "../../Data/about";

const AboutPage = () => {
  const data = () => {
    return about;
  };
  return (
    <>
      <MainScreen title="About Us" />
      <div className="Cards">
        {data().map((data) => (
          <AboutCard title={data.title} loc={data.location} key={data.key} />
        ))}
      </div>
    </>
  );
};

export default AboutPage;
