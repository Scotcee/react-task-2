import React from "react";
import "../styles/HeroBg.css";
import heroImage from "../assets/images/hero-background.png";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function HeroBg() {
  return (
    <div className="hero-bg">
      <div className="text-content">
        <div className="header">
          <h1>PROJECT</h1>
          <span>Lorum</span>
        </div>

        <div className="project-nav-icons">
          <div className="project-nav-left">
            <FiArrowLeft />
          </div>
          <div className="project-nav-arrow">
            <FiArrowRight />
          </div>
        </div>

        <div className="paging">
          <p>
            0 <span>1</span>
          </p>
          <p className="slash">/</p>
          <p>02</p>
        </div>
      </div>

      <div className="image-content">
        <img src={heroImage} alt="hero background" />
        <div className="image-button">
          <Link to="/project">
            <Button text="VIEW PROJECT" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroBg;
