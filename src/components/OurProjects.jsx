import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../styles/OurProjects.css";
import Button from "./Button";

function OurProjects() {
  return (
    <div>
      <div className="bg-cover-white">
        <div className="projects-heading">
          <h1>Our Projects</h1>
        </div>

        <div className="first-box">
          <div className="image1">
            <div className="hero">
              <h1>
                Sample <br /> Project
              </h1>
            </div>
            <div className="link">
              <Link to="/project">
                VIEW MORE <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>

          <div className="image2"></div>
        </div>

        <div className="second-box">
          <div className="image3"></div>
          <div className="image4"></div>
          <div className="image5"></div>
        </div>
        <div className="button-container">
          <Button
            className="button"
            text="All Projects"
            onClick={() => console.log("View All Projects clicked")}
            style={{
              backgroundColor: "#333333",
              color: "#ffffff",
              padding: "15px 30px",
              fontSize: "0.7rem",
              fontWeight: 300,
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
