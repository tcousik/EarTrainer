import shortid from "shortid";
import Minor from "../../assets/Chords/Minor.mp3";
import Major from "../../assets/Chords/Major.mp3";
import Diminished from "../../assets/Chords/Diminished.mp3";
import Augmented from "../../assets/Chords/Augmented.mp3";
import Sus2nd from "../../assets/Chords/Sus2nd.mp3";
import Sus4th from "../../assets/Chords/Sus4th.mp3";
import Minor6th from "../../assets/Chords/Minor6th.mp3";
import Major6th from "../../assets/Chords/Major6th.mp3";
import Dom7th from "../../assets/Chords/Dom7th.mp3";
import Major7th from "../../assets/Chords/Major7th.mp3";
import Minor7th from "../../assets/Chords/Minor7th.mp3";
import MinorMajor from "../../assets/Chords/MinorMajor.mp3";
import Dim7th from "../../assets/Chords/Dim7th.mp3";

const chordBank = [
  {
    question: "Identify the chord",
    soundURL: Minor,
    choices: [
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Major,
    choices: [
      "Minor",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major")
      .sort(() => 0.5 - Math.random()),
    correct: "Major",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Augmented,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Augmented")
      .sort(() => 0.5 - Math.random()),
    correct: "Augmented",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Diminished,
    choices: [
      "Minor",
      "Major",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Diminished")
      .sort(() => 0.5 - Math.random()),
    correct: "Diminished",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Sus2nd,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Suspended 2nd")
      .sort(() => 0.5 - Math.random()),
    correct: "Suspended 2nd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Sus4th,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Suspended 4th")
      .sort(() => 0.5 - Math.random()),
    correct: "Suspended 4th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Minor6th,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor 6th")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Major6th,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major 6th")
      .sort(() => 0.5 - Math.random()),
    correct: "Major 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Dom7th,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Dominant 7th")
      .sort(() => 0.5 - Math.random()),
    correct: "Dominant 7th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Major7th,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Minor 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Major 7th")
      .sort(() => 0.5 - Math.random()),
    correct: "Major 7th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Minor7th,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor Major",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor 7th")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor 7th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: MinorMajor,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Diminished 7th",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Minor Major")
      .sort(() => 0.5 - Math.random()),
    correct: "Minor Major",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the chord",
    soundURL: Dim7th,
    choices: [
      "Minor",
      "Major",
      "Diminished",
      "Augmented",
      "Suspended 2nd",
      "Suspended 4th",
      "Minor 6th",
      "Major 6th",
      "Dominant 7th",
      "Major 7th",
      "Minor 7th",
      "Minor Major",
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .concat("Diminished 7th")
      .sort(() => 0.5 - Math.random()),
    correct: "Diminished 7th",
    questionId: shortid.generate(),
  },
];

export default () =>
  Promise.resolve(chordBank.sort(() => 0.5 - Math.random()).slice(0, 5));
