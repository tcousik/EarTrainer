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
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const playSound = (src) => {
  let sound = new Audio(src);
  sound.play();
};

export default function IntervalGuide() {
  return (
    <div className="guideContainer">
      <h1 className="guideTitle">Chords Guide</h1>
      <h3 className="description">
        A chord is a set of several notes that are played together. There are
        numerous chords in Western music but the most common chords are triads
        (3 notes) and seventh chords (4 notes). The chords are named based on
        the intervals that comprise that chord.
      </h3>
      <h3 className="description">
        For example, a chord containing the notes C, E, and G, is a triad known
        as C major. The key interval is between C and E. Since C to E is a major
        third, C-E-G is a major chord. C-E♭-G would be called a minor chord.
        Adding B♭ to this chord turns it into a dominant seventh chord because
        B♭ is the seventh note in a C major scale. This section will introduce
        all the chords with audio examples.
      </h3>
      <div className="guideStuff">
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor</h2>
            <button className="guideBtn" onClick={() => playSound(MinorSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={MinorPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Major</h2>
            <button className="guideBtn" onClick={() => playSound(MajorSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={MajorPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Diminished</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(DiminishedSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={DiminishedPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Augmented</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(AugmentedSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={AugmentedPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Suspended 2nd</h2>
            <button className="guideBtn" onClick={() => playSound(Sus2ndSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Sus2ndPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Suspended 4th</h2>
            <button className="guideBtn" onClick={() => playSound(Sus4thSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Sus4thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor 6th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Minor6thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Minor6thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Major 6th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Major6thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Major6thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Dominant 7th</h2>
            <button className="guideBtn" onClick={() => playSound(Dom7thSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Dom7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor 7th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Minor7thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Minor7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Major 7th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Major7thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Major7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Diminished 7th</h2>
            <button className="guideBtn" onClick={() => playSound(Dim7thSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Dim7thPic} className="chordPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor Major 7th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(MinorMajorSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={MinorMajorPic} className="chordPics" alt="" />
        </div>
      </div>
    </div>
  );
}
