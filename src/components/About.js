import React from "react";
import Pic from "../assets/headshot.jpg";
import "./about.css";

export default function about() {
  return (
    <div
      className="about
    Container"
    >
      <div>
        <h2>Tejas Cousik</h2>
        <img id="pic" src={Pic} alt="headshot" />
      </div>
      <div>
        <h3>github.com/tcousik</h3>
        <h3>LinkedIn Link</h3>
        <h3>Phone and Email</h3>
        <p>Bio</p>
      </div>
    </div>
  );
}
