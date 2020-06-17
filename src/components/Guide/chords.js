import React from "react";
import "./guide.css";
import MinorPic from "../../assets/Chords/minor.png";
import MinorSound from "../../assets/Chords/Minor.mp3";
import MajorPic from "../../assets/Chords/major.png";
import MajorSound from "../../assets/Chords/Major.mp3";
import DiminishedPic from "../../assets/Chords/diminished.png";
import DiminishedSound from "../../assets/Chords/Diminished.mp3";
import AugmentedPic from "../../assets/Chords/augmented.png";
import AugmentedSound from "../../assets/Chords/Augmented.mp3";
import Sus2ndPic from "../../assets/Chords/sus2nd.png";
import Sus2ndSound from "../../assets/Chords/Sus2nd.mp3";
import Sus4thPic from "../../assets/Chords/sus4th.png";
import Sus4thSound from "../../assets/Chords/Sus4th.mp3";
import Minor6thPic from "../../assets/Chords/minor6th.png";
import Minor6thSound from "../../assets/Chords/Minor6th.mp3";
import Major6thPic from "../../assets/Chords/major6th.png";
import Major6thSound from "../../assets/Chords/Major6th.mp3";
import Dom7thPic from "../../assets/Chords/dom7th.png";
import Dom7thSound from "../../assets/Chords/Dom7th.mp3";
import Minor7thPic from "../../assets/Chords/minor7th.png";
import Minor7thSound from "../../assets/Chords/Minor7th.mp3";
import Major7thPic from "../../assets/Chords/major7th.png";
import Major7thSound from "../../assets/Chords/Major7th.mp3";
import Dim7thPic from "../../assets/Chords/dim7th.png";
import Dim7thSound from "../../assets/Chords/Dim7th.mp3";
import MinorMajorPic from "../../assets/Chords/minorMajor.png";
import MinorMajorSound from "../../assets/Chords/MinorMajor.mp3";

const playSound = (src) => {
  let sound = new Audio(src);
  sound.play();
};

export default function IntervalGuide() {
  return (
    <div className="guideContainer">
      <h1 className="tit">Chords Guide</h1>
      <h3 className="description">
        An interval refers to the distance between two notes. Intervals are the
        most basic part of ear training. In Western music, there are 13 notes in
        an octave. Therefore, there are 13 commonly studied intervals and a
        couple rare ones that go beyond the octave. Each interval has a quantity
        and a quality. The quantity refers to the general distance between the
        notes, while the quality is more specific about that distance.
      </h3>
      <h3 className="description">
        For example, the quantity of the interval between a C and an E♭ is 3 or
        a 3rd while the quality is minor. So the interval is known as a minor
        3rd. The interval between a C and E, however, is known as a major 3rd.
        This section will introduce all the intervals with audio examples.
      </h3>
      <div className="guideStuff">
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button className="guideBtn" onClick={() => playSound(MinorSound)}>
              Listen
            </button>
          </div>
          <img src={MinorPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button className="guideBtn" onClick={() => playSound(MajorSound)}>
              Listen
            </button>
          </div>
          <img src={MajorPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(DiminishedSound)}
            >
              Listen
            </button>
          </div>
          <img src={DiminishedPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(AugmentedSound)}
            >
              Listen
            </button>
          </div>
          <img src={AugmentedPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button className="guideBtn" onClick={() => playSound(Sus2ndSound)}>
              Listen
            </button>
          </div>
          <img src={Sus2ndPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button className="guideBtn" onClick={() => playSound(Sus4thSound)}>
              Listen
            </button>
          </div>
          <img src={Sus4thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Minor6thSound)}
            >
              Listen
            </button>
          </div>
          <img src={Minor6thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Major6thSound)}
            >
              Listen
            </button>
          </div>
          <img src={Major6thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button className="guideBtn" onClick={() => playSound(Dom7thSound)}>
              Listen
            </button>
          </div>
          <img src={Dom7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Minor7thSound)}
            >
              Listen
            </button>
          </div>
          <img src={Minor7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Major7thSound)}
            >
              Listen
            </button>
          </div>
          <img src={Major7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button className="guideBtn" onClick={() => playSound(Dim7thSound)}>
              Listen
            </button>
          </div>
          <img src={Dim7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(MinorMajorSound)}
            >
              Listen
            </button>
          </div>
          <img src={MinorMajorPic} className="chordPics" alt="" />
        </div>
      </div>
    </div>
  );
}
