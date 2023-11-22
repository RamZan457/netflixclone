// Footer.js
import React from "react";
import footerItems from "./assets/content_options";
import "./Style.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="questions">
          <a href="/">Questions? Contact us.</a>
        </div>
        <div className="footer">
          {Object.values(footerItems).map((section, index) => (
            <div key={index} className="footer-item">
              {section.map((item, i) => (
                <a key={i} href="/">
                  {item}
                </a>
              ))}
            </div>
          ))}
          <div className="languages">
            <select name="lan" id="lan">
              <option value="English">English</option>
            </select>
            <p>Netflix Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
