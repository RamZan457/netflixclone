import React from "react";
import "./Style.css";

export default function Second(props) {
  return (
    <section className="first second">
      <div className="secImg">
        <img src={props.sImage} alt="" />
      </div>
      <div>
        <span>{props.sHeading}</span>
        <span>{props.sPara}</span>
      </div>
    </section>
  );
}
