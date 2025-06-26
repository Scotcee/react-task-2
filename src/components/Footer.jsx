import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/Footer.css";
import footerLogo from "../assets/images/footer-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-bg">
        <div className="footer-logo">
          <div className="footer-logo-wrapper">
            <img src={footerLogo} alt="logo" />
          </div>
        </div>

        <div className="footer-information">
          <div className="footer-links">
            <h3>Information</h3>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/certifications">Certifications</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-content">
          <div className="location">
            <h3>Contacts</h3>
            <div className="address">
              <FaMapMarkerAlt className="footer-icon" />
              <p>
                1234 Sample Street, City, <br />
                Austin Texas 78704
              </p>
            </div>
            <div className="phone-number">
              <FaPhoneAlt className="footer-icon" />
              <p>512.333.2222</p>
            </div>
            <div className="email">
              <FaEnvelope className="footer-icon" />
              <p>sample.mail@email.com</p>
            </div>
          </div>
        </div>

        <div className="social-media">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
