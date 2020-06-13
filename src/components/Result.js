import React from "react";

const Result = ({ score, tryAgain }) => (
  <div className="score-board">
    <div className="score">You answered {score} / 5 questions correctly.</div>
    <button className="replayBtn" onClick={tryAgain}>
      Try again
    </button>
  </div>
);

export default Result;
