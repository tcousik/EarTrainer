import React from "react";
import "./guide.css";
import MajorPic from "../../assets/Scales/major.png";
import MajorSound from "../../assets/Scales/Major.mp3";
import NatMinorPic from "../../assets/Scales/natminor.png";
import NatMinorSound from "../../assets/Scales/NatMinor.mp3";
import HarmMinorPic from "../../assets/Scales/harmminor.png";
import HarmMinorSound from "../../assets/Scales/HarmMinor.mp3";
import LydianPic from "../../assets/Scales/lydian.png";
import LydianSound from "../../assets/Scales/Lydian.mp3";
import MixolydianPic from "../../assets/Scales/mixolydian.png";
import MixolydianSound from "../../assets/Scales/Mixolydian.mp3";
import DorianPic from "../../assets/Scales/dorian.png";
import DorianSound from "../../assets/Scales/Dorian.mp3";
import PhrygianPic from "../../assets/Scales/phrygian.png";
import PhrygianSound from "../../assets/Scales/Phrygian.mp3";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const playSound = (src) => {
  let sound = new Audio(src);
  sound.play();
};

export default function IntervalGuide() {
  return (
    <div className="guideContainer">
      <h1 className="tit">Scales Guide</h1>
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
            <h2>Major</h2>
            <button className="guideBtn" onClick={() => playSound(MajorSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={MajorPic} className="scalePics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Natural Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(NatMinorSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={NatMinorPic} className="scalePics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Harmonic Minor</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(HarmMinorSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={HarmMinorPic} className="scalePics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Lydian</h2>
            <button className="guideBtn" onClick={() => playSound(LydianSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={LydianPic} className="scalePics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Mixolydian</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(MixolydianSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={MixolydianPic} className="scalePics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Dorian</h2>
            <button className="guideBtn" onClick={() => playSound(DorianSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={DorianPic} className="scalePics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Phrygian</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(PhrygianSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={PhrygianPic} className="scalePics" alt="" />
        </div>
      </div>
    </div>
  );
}
