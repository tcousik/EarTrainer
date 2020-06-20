import shortid from "shortid";
import Unison from "../../assets/Intervals/Unison.mp3";
import Minor2nd from "../../assets/Intervals/Minor2nd.mp3";
import Major2nd from "../../assets/Intervals/Major2nd.mp3";
import Minor3rd from "../../assets/Intervals/Minor3rd.mp3";
import Major3rd from "../../assets/Intervals/Major3rd.mp3";
import Perfect4th from "../../assets/Intervals/Perfect4th.mp3";
import Tritone from "../../assets/Intervals/Tritone.mp3";
import Perfect5th from "../../assets/Intervals/Perfect5th.mp3";
import Minor6th from "../../assets/Intervals/Minor6th.mp3";
import Major6th from "../../assets/Intervals/Major6th.mp3";
import Minor7th from "../../assets/Intervals/Minor7th.mp3";
import Major7th from "../../assets/Intervals/Major7th.mp3";
import Octave from "../../assets/Intervals/Octave.mp3";
import Minor9th from "../../assets/Intervals/Minor9th.mp3";
import Major9th from "../../assets/Intervals/Major9th.mp3";

const intervalBank = [
  {
    question: "Identify the interval",
    soundURL: Unison,
    choices: [
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Unison")
      .sort(() => 0.5 - Math.random()),
    correct: "Unison",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Minor2nd,
    choices: [
      "Unison",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor 2nd")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor 2nd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Major2nd,
    choices: [
      "Unison",
      "Minor 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major 2nd")
      .sort(() => 0.5 - Math.random()),
    correct: "Major 2nd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Minor3rd,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor 3rd")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor 3rd",
    questionId: shortid.generate(),
  },

  {
    question: "Identify the interval",
    soundURL: Major3rd,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major 3rd")
      .sort(() => 0.5 - Math.random()),
    correct: "Major 3rd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Perfect4th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Perfect 4th")
      .sort(() => 0.5 - Math.random()),
    correct: "Perfect 4th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Tritone,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Tritone")
      .sort(() => 0.5 - Math.random()),
    correct: "Tritone",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Perfect5th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Perfect 5th")
      .sort(() => 0.5 - Math.random()),
    correct: "Perfect 5th",
    questionId: shortid.generate(),
  },

  {
    question: "Identify the interval",
    soundURL: Minor6th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor 6th")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Major6th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major 6th")
      .sort(() => 0.5 - Math.random()),
    correct: "Major 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Minor7th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Major 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor 7th")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor 7th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Major7th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Octave",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major 7th")
      .sort(() => 0.5 - Math.random()),
    correct: "Major 7th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Octave,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Minor 9th",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Octave")
      .sort(() => 0.5 - Math.random()),
    correct: "Octave",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Minor9th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Major 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor 9th")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor 9th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: Major9th,
    choices: [
      "Unison",
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Tritone",
      "Perfect 5th",
      "Minor 6th",
      "Major 6th",
      "Minor 7th",
      "Major 7th",
      "Octave",
      "Minor 9th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major 9th")
      .sort(() => 0.5 - Math.random()),
    correct: "Major 9th",
    questionId: shortid.generate(),
  },
];

export default () =>
  Promise.resolve(intervalBank.sort(() => 0.5 - Math.random()).slice(0, 5));
