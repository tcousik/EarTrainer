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

const playSound = (src) => {
  let sound = new Audio(src);
  sound.play();
};

export default function IntervalGuide() {
  return (
    <div>
      <h1>Interval Guide</h1>
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
        INTERVALS
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
              <td>Unison</td>
              <td>
                <img alt="" src={UnisonPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(UnisonSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Minor 2nd</td>
              <td>
                <img alt="" src={Minor2ndPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Minor2ndSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Major 2nd</td>
              <td>
                <img alt="" src={Major2ndPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Major2ndSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Minor 3rd</td>
              <td>
                <img alt="" src={Minor3rdPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Minor3rdSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Major 3rd</td>
              <td>
                <img alt="" src={Major3rdPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Major3rdSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Perfect 4th</td>
              <td>
                <img alt="" src={Perfect4thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Perfect4thSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Tritone</td>
              <td>
                <img alt="" src={TritonePic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(TritoneSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Perfect 5th</td>
              <td>
                <img alt="" src={Perfect5thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Perfect5thSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Minor 6th</td>
              <td>
                <img alt="" src={Minor6thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Minor6thSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Major 6th</td>
              <td>
                <img alt="" src={Major6thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Major6thSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Minor 7th</td>
              <td>
                <img alt="" src={Minor7thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Minor7thSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Major 7th</td>
              <td>
                <img alt="" src={Major7thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Major7thSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Octave</td>
              <td>
                <img alt="" src={OctavePic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(OctaveSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Minor 9th</td>
              <td>
                <img alt="" src={Minor9thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Minor9thSound)}
                >
                  <span>Play</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Major 9th</td>
              <td>
                <img alt="" src={Major9thPic} />
              </td>
              <td>
                <button
                  className="audioBtn"
                  onClick={() => playSound(Major9thSound)}
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
