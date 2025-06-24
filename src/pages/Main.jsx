import React from "react";
import "../styles/Main.css";
import HeroBg from "../components/HeroBg";
import About from "../components/About";
import MissionStatement from "../components/MissionStatement";
import OurProjects from "../components/OurProjects";
import ContactUs from "../components/ContactUs";

function Main() {
  return (
    <div>
      <HeroBg />
      <About />
      <MissionStatement />
      <OurProjects />
      <ContactUs />
    </div>
  );
}

export default Main;
