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
      <h1 className="guideTitle">Scales Guide</h1>
      <h3 className="description">
        A scale is a series of notes that revolve around one note known as the
        root. There are a few commonly used scales in Western music, and each
        scale is comprised of a varying set of intervals. Every scale provides a
        different mood or feeling to a song.
      </h3>
      <h3 className="description">
        For example, a major scale will sound cheerful while a natural minor
        scale might evoke melancholy. Different genres use certain scales more
        frequently, while the music of other cultures uses totally different
        scales. This section will introduce some scales with audio examples.
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
