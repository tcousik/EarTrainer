import React, { useState } from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
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
          <VolumeUpIcon />
        </button>
      </div>
      <div>
        {answer.map((text) => (
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
