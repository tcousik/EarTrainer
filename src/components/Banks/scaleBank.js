import shortid from "shortid";
import Major from "../../assets/Scales/Major.mp3";
import NatMinor from "../../assets/Scales/NatMinor.mp3";
import HarmMinor from "../../assets/Scales/HarmMinor.mp3";
import Dorian from "../../assets/Scales/Dorian.mp3";
import Lydian from "../../assets/Scales/Lydian.mp3";
import Mixolydian from "../../assets/Scales/Mixolydian.mp3";
import Phrygian from "../../assets/Scales/Phrygian.mp3";

const scaleBank = [
  {
    question: "Identify the scale:",
    soundURL: Major,
    choices: [
      "Natural Minor",
      "Harmonic Minor",
      "Dorian",
      "Lydian",
      "Mixolydian",
      "Phrygian",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major")
      .sort(() => 0.5 - Math.random()),
    correct: "Major",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the scale:",
    soundURL: NatMinor,
    choices: [
      "Major",
      "Harmonic Minor",
      "Dorian",
      "Lydian",
      "Mixolydian",
      "Phrygian",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Natural Minor")
      .sort(() => 0.5 - Math.random()),
    correct: "Natural Minor",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the scale:",
    soundURL: HarmMinor,
    choices: [
      "Major",
      "Natural Minor",
      "Dorian",
      "Lydian",
      "Mixolydian",
      "Phrygian",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Harmonic Minor")
      .sort(() => 0.5 - Math.random()),
    correct: "Harmonic Minor",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the scale:",
    soundURL: Dorian,
    choices: [
      "Major",
      "Natural Minor",
      "Harmonic Minor",
      "Lydian",
      "Mixolydian",
      "Phrygian",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Dorian")
      .sort(() => 0.5 - Math.random()),
    correct: "Dorian",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the scale:",
    soundURL: Lydian,
    choices: [
      "Major",
      "Natural Minor",
      "Harmonic Minor",
      "Dorian",
      "Mixolydian",
      "Phrygian",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Lydian")
      .sort(() => 0.5 - Math.random()),
    correct: "Lydian",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the scale:",
    soundURL: Mixolydian,
    choices: [
      "Major",
      "Natural Minor",
      "Harmonic Minor",
      "Dorian",
      "Lydian",
      "Phrygian",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Mixolydian")
      .sort(() => 0.5 - Math.random()),
    correct: "Mixolydian",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the scale:",
    soundURL: Phrygian,
    choices: [
      "Major",
      "Natural Minor",
      "Harmonic Minor",
      "Dorian",
      "Lydian",
      "Mixolydian",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Phrygian")
      .sort(() => 0.5 - Math.random()),
    correct: "Phrygian",
    questionId: shortid.generate(),
  },
];

export default () =>
  Promise.resolve(scaleBank.sort(() => 0.5 - Math.random()).slice(0, 5));
