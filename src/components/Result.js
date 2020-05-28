import React from "react";

const Result = ({ score, tryAgain }) => (
  <div className="score-board">
    <div className="score">You answered {score} / 4 questions correctly.</div>
    <button className="playBtn" onClick={tryAgain}>
      Try again
    </button>
  </div>
);

export default Result;
