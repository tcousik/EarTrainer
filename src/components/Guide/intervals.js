import React from "react";
import "./guide.css";
import UnisonPic from "../../assets/Intervals/unison.png";
import UnisonSound from "../../assets/Intervals/Unison.mp3";
import Minor2ndPic from "../../assets/Intervals/minor2nd.png";
import Minor2ndSound from "../../assets/Intervals/Minor2nd.mp3";
import Major2ndPic from "../../assets/Intervals/major2nd.png";
import Major2ndSound from "../../assets/Intervals/Major2nd.mp3";
import Minor3rdPic from "../../assets/Intervals/minor3rd.png";
import Minor3rdSound from "../../assets/Intervals/Minor3rd.mp3";
import Major3rdPic from "../../assets/Intervals/major3rd.png";
import Major3rdSound from "../../assets/Intervals/Major3rd.mp3";
import Perfect4thPic from "../../assets/Intervals/perfect4th.png";
import Perfect4thSound from "../../assets/Intervals/Perfect4th.mp3";
import TritonePic from "../../assets/Intervals/tritone.png";
import TritoneSound from "../../assets/Intervals/Tritone.mp3";
import Perfect5thPic from "../../assets/Intervals/perfect5th.png";
import Perfect5thSound from "../../assets/Intervals/Perfect5th.mp3";
import Minor6thPic from "../../assets/Intervals/minor6th.png";
import Minor6thSound from "../../assets/Intervals/Minor6th.mp3";
import Major6thPic from "../../assets/Intervals/major6th.png";
import Major6thSound from "../../assets/Intervals/Major6th.mp3";
import Minor7thPic from "../../assets/Intervals/minor7th.png";
import Minor7thSound from "../../assets/Intervals/Minor7th.mp3";
import Major7thPic from "../../assets/Intervals/major7th.png";
import Major7thSound from "../../assets/Intervals/Major7th.mp3";
import OctavePic from "../../assets/Intervals/octave.png";
import OctaveSound from "../../assets/Intervals/Octave.mp3";
import Minor9thPic from "../../assets/Intervals/minor9th.png";
import Minor9thSound from "../../assets/Intervals/Minor9th.mp3";
import Major9thPic from "../../assets/Intervals/major9th.png";
import Major9thSound from "../../assets/Intervals/Major9th.mp3";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const playSound = (src) => {
  let sound = new Audio(src);
  sound.play();
};

export default function IntervalGuide() {
  return (
    <div className="guideContainer">
      <h1 className="guideTitle">Intervals Guide</h1>
      <h3 className="description">
        An interval refers to the distance between two notes. Interval training
        is the most basic part of ear training. In Western music, there are 13
        notes in an octave. Therefore, there are 13 commonly studied intervals
        and a few additional ones that go beyond the octave. Each interval has a
        quantity and a quality. The quantity refers to the general distance
        between the notes, while the quality is more specific about that
        distance.
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
            <h2>Unison</h2>
            <button className="guideBtn" onClick={() => playSound(UnisonSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={UnisonPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor 2nd</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Minor2ndSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Minor2ndPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Major 2nd</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Major2ndSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Major2ndPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor 3rd</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Minor3rdSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Minor3rdPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Major 3rd</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Major3rdSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Major3rdPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Perfect 4th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Perfect4thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Perfect4thPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Tritone</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(TritoneSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={TritonePic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Perfect 5th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Perfect5thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Perfect5thPic} className="intPics" alt="" />
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
          <img src={Minor6thPic} className="intPics" alt="" />
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
          <img src={Major6thPic} className="intPics" alt="" />
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
          <img src={Minor7thPic} className="intPics" alt="" />
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
          <img src={Major7thPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Octave</h2>
            <button className="guideBtn" onClick={() => playSound(OctaveSound)}>
              <VolumeUpIcon />
            </button>
          </div>
          <img src={OctavePic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Minor 9th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Minor9thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Minor9thPic} className="intPics" alt="" />
        </div>
        <div className="guideBox">
          <div className="questionSpace">
            <h2>Major 9th</h2>
            <button
              className="guideBtn"
              onClick={() => playSound(Major9thSound)}
            >
              <VolumeUpIcon />
            </button>
          </div>
          <img src={Major9thPic} className="intPics" alt="" />
        </div>
      </div>
    </div>
  );
}
