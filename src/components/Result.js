import React from "react";
import { Link } from "react-router-dom";

const Result = ({ score, tryAgain, guide }) => {
  if (score === 0) {
    return (
      <div className="score-board">
        <div className="score">
          You answered 0 questions correctly. Please refer to the guide to
          practice.
        </div>
        <Link to={`/${guide}`}>
          <button className="replayBtn">Guide</button>
        </Link>
      </div>
    );
  } else if (score < 5) {
    return (
      <div className="score-board">
        <div className="score">
          You answered {score} / 5 questions correctly.
        </div>
        <button className="replayBtn" onClick={tryAgain}>
          Try again
        </button>
      </div>
    );
  } else if (score === 5) {
    return (
      <div className="score-board">
        <div className="score">
          You answered all 5 questions correctly. Well done!
        </div>
        <button className="replayBtn" onClick={tryAgain}>
          Try again
        </button>
      </div>
    );
  }
};

export default Result;
