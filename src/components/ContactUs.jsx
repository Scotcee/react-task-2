import React from "react";
import "../styles/ContactUs.css";
import Button from "./Button";
import image from "../assets/images/contact-img.png";

function ContactUs() {
  return (
    <div className="wrapper">
      <div className="heading">
        <h1>Contact Us</h1>
      </div>
      <div className="form-wrapper">
        <div className="form-section">
          <form action="">
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone"></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest"></label>
              <input
                type="text"
                id="interest"
                name="interest"
                placeholder="Interested In"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message"></label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="write your message here"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <div className="image-section">
          <img src={image} alt="Contact Us" />
        </div>
      </div>
      <div className="button-wrapper">
        <Button
          className="button"
          text="Send Email"
          style={{
            backgroundColor: "#333333",
            color: "#ffffff",
            marginTop: "20px",
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
  );
}

export default ContactUs;
