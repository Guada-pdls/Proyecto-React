import React from "react";
import "./Button.css";

const Button = ({ content, primary }) => {
  return (
    <button className={primary ? "btn btn-primary" : "btn btn-secondary"}>
      {content}
    </button>
  );
};

export default Button;
