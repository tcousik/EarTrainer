import React from "react";
import { Link } from "react-router-dom";

export default class Guide extends React.Component {
  state = {
    displayedComponent: "Main",
  };
  render() {
    return (
      <div>
        <h3 className="title">Music Theory Guide</h3>
        <h3>
          Ear training is used by musicians to improve their ability to identify
          intervals, chords, scales, etc. This is a valuable skill because it
          allows musicians to perform without having to rely on any written
          material. Most formally taught musicians undergo ear training as part
          of their curriculum. This reference guide will describe the various...
        </h3>
        <button className="answerBtn">Intervals</button>
        <button className="answerBtn">Chords</button>
        <button className="answerBtn">Scales </button>
      </div>
    );
  }
}
