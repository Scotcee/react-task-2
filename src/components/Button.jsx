import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "../styles/Button.css";

function Button({ text, onClick, style = {} }) {
  return (
    <button className="custom-button" onClick={onClick} style={style}>
      {text.toUpperCase()} <FiArrowRight className="button-icon" />
    </button>
  );
}

export default Button;
