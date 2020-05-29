import shortid from "shortid";

const questionBank = [
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/9e6rh4nysda81pp/Major%202nd.mp3?dl=0",
    choices: ["Major 2nd", "Major 3rd", "Perfect 4th", "Perfect 5th"],
    correct: "Major 3rd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/6109vm1cre62toq/Major%203rd.mp3?dl=0",
    choices: ["Major 2nd", "Major 3rd", "Perfect 4th", "Perfect 5th"],
    correct: "Perfect 4th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "",
    choices: ["Major 2nd", "Major 3rd", "Perfect 4th", "Perfect 5th"],
    correct: "Perfect 5th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "",
    choices: ["Major 2nd", "Major 3rd", "Perfect 4th", "Perfect 5th"],
    correct: "Octave",
    questionId: shortid.generate(),
  },

  {
    question: "Identify the interval",
    soundURL: "",
    choices: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 2nd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "",
    choices: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 3rd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "",
    choices: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "",
    choices: ["Minor 2nd", "Minor 3rd", "Minor 6th", "Minor 7th"],
    correct: "Minor 7th",
    questionId: shortid.generate(),
  },
];

export default () =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, 4));
