import React from "react";
import Pic from "../assets/headshot.jpg";
import "./about.css";

export default function about() {
  return (
    <div className="aboutContainer">
      <div className="nameAndPic">
        <h2>Tejas Cousik</h2>
        <img id="pic" src={Pic} alt="headshot" />
      </div>
      <div className="contactInfo">
        <a href="http://www.github.com/tcousik">Github</a>
        <a href="http://www.linkedin.com/in/tcousik">LinkedIn</a>
        <h3>github.com/tcousik LinkedIn Link</h3>
        <h3>tcousik0@gmail.com (812)369-5600</h3>
        <h3>Flatiron School</h3>
      </div>
    </div>
  );
}
