import React, { useState } from "react";
import shortid from "shortid";

const playSound = (src) => {
  let sound = new Audio(src);
  sound.play();
};

const QuestionBox = ({ question, soundURL, choices, chosen }) => {
  const [answer, setAnswer] = useState(choices);

  return (
    <div className="questionBox">
      <div className="questionSpace">
        <div className="question">{question}</div>
        <button className="audioBtn" onClick={() => playSound(soundURL)}>
          X
        </button>
      </div>
      <div className="cont">
        {answer.map((text, index) => (
          <button
            key={shortid.generate()}
            className="answerBtn"
            onClick={() => {
              setAnswer([text]);
              chosen(text);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
