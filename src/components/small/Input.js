import React from "react";
import "../Style.css";

export default function Input() {
  return (
    <div>
      <div className="hero-buttons">
        <input type="text" placeholder="Email Address" />
        <button className="btn btn-red">Get Started &gt;</button>
      </div>
    </div>
  );
}
