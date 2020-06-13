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

const playSound = (src) => {
  let sound = new Audio(src);
  sound.play();
};

export default function IntervalGuide() {
  return (
    <div>
      <h1>Scales Guide</h1>
      <h3>
        An interval refers to the distance between two notes. Intervals are the
        most basic part of ear training. In Western music, there are 13 notes in
        an octave. Therefore, there are 13 commonly studied intervals and a
        couple rare ones that go beyond the octave. Each interval has a quantity
        and a quality. The quantity refers to the general distance between the
        notes, while the quality is more specific about that distance.
      </h3>

      <h3>
        For example, the quantity of the interval between a C and an E♭ is 3 or
        a 3rd while the quality is minor. So the interval is known as a minor
        3rd. The interval between a C and E, however, is known as a major 3rd.
        This section will introduce all the intervals with audio examples.
      </h3>

      <div className="title">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PIC</th>
              <th>SOUND</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Major</td>
              <td>
                <img className="scalePics" alt="" src={MajorPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(MajorSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Natural Minor</td>
              <td>
                <img className="scalePics" alt="" src={NatMinorPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(NatMinorSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Harmonic Minor</td>
              <td>
                <img className="scalePics" alt="" src={HarmMinorPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(HarmMinorSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Lydian</td>
              <td>
                <img className="scalePics" alt="" src={LydianPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(LydianSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Mixolydian</td>
              <td>
                <img className="scalePics" alt="" src={MixolydianPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(MixolydianSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Dorian</td>
              <td>
                <img className="scalePics" alt="" src={DorianPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(DorianSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Phrygian</td>
              <td>
                <img className="scalePics" alt="" src={PhrygianPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(PhrygianSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
