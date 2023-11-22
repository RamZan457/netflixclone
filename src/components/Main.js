import React from "react";
import "./Style.css";
import { main } from "./assets/content_options";
import Input from "./small/Input";

export default function Main() {
  return (
    <div>
      <div className="main">
        <div className="box"></div>
        <div className="hero">
          <span> {main.heading}</span>
          <span>{main.fPara}</span>
          <span>{main.sPara}</span>
          <Input />
        </div>
      </div>
    </div>
  );
}
