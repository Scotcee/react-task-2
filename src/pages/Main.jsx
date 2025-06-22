import React from "react";
import "../styles/Main.css";
import HeroBg from "../components/HeroBg";
import About from "../components/About";
import MissionStatement from "../components/MissionStatement";

function Main() {
  return (
    <div>
      <HeroBg />
      <About />
      <MissionStatement />
    </div>
  );
}

export default Main;
