import React from "react";
import "./Style.css";

export default function First(props) {
  return (
    <div>
      <section className="first">
        <div>
          <span>{props.fHeading}</span>
          <span>{props.fPara}</span>
        </div>
        <div className="secImg">
          <img src={props.fImage} alt="First_image" />
          <video src={props.fVideo} autoplay loop muted></video>
        </div>
      </section>
    </div>
  );
}
