import shortid from "shortid";

const questionBank = [
  {
    question: "Identify the interval",
    answers: ["Major 3rd", "Perfect 4th", "Perfect 5th", "Octave"],
    correct: "Major 3rd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    answers: ["Major 3rd", "Perfect 4th", "Perfect 5th", "Octave"],
    correct: "Perfect 4th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    answers: ["Major 3rd", "Perfect 4th", "Perfect 5th", "Octave"],
    correct: "Perfect 5th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    answers: ["Major 3rd", "Perfect 4th", "Perfect 5th", "Octave"],
    correct: "Octave",
    questionId: shortid.generate(),
  },

  {
    question: "Identify the interval",
    answers: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 2nd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    answers: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 3rd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    answers: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    answers: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 7th",
    questionId: shortid.generate(),
  },
];

export default (n = 4) =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, n));
