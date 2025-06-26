import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import aboutImage1 from "../assets/images/about-image1.png";
import aboutImage2 from "../assets/images/about-image2.png";
import aboutImage3 from "../assets/images/about-image3.png";

function About() {
  return (
    <div>
      <div className="bg-cover">
        <div className="image-section">
          <div className="image-container">
            <div className="image-flex">
              <div className="image1 image-hover">
                <img src={aboutImage3} alt="" />
                <div className="overlay"></div>
              </div>
              <div className="image3 image-hover">
                <img src={aboutImage2} alt="" />
                <div className="overlay"></div>
              </div>
            </div>
            <div className="about-image2 image-hover">
              <img src={aboutImage1} alt="" />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
        <div className="text-section">
          <div className="header">
            <h1>About</h1>
          </div>
          <div className="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="readmore-button">
            <Link to="/project">
              <Button text="read more" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
