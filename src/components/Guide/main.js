import React from "react";
import { Link } from "react-router-dom";

export default function Guide() {
  return (
    <div className="title">
      <h5>GUIDE</h5>
      <h6>
        Ear training is used by musicians to improve their ability to identify
        intervals, chords, scales, etc. This is a valuable skill because it
        allows musicians to perform without having to rely on any written
        material. Most formally taught musicians undergo ear training as part of
        their curriculum. This reference guide will describe the various...
      </h6>
      <Link to="/interval-guide">
        <button className="answerBtn">Intervals</button>
      </Link>
      <Link to="/chord-guide">
        <button className="answerBtn">Chords</button>
      </Link>
      <Link to="/scale-guide">
        <button className="answerBtn">Scales</button>
      </Link>
    </div>
  );
}
