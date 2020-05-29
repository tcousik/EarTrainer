import shortid from "shortid";

const questionBank = [
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/bwjsbaaus2jy3vy/Unison.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Unison",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/z7ty1a76a8fqvjd/Minor%202nd.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Minor 2nd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/9e6rh4nysda81pp/Major%202nd.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Major 2nd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/bmske9bnnyqbbby/Minor%203rd.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Minor 3rd",
    questionId: shortid.generate(),
  },

  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/6109vm1cre62toq/Major%203rd.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Major 3rd",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL:
      "https://www.dropbox.com/s/0q7qdf8zj7wm657/Perfect%204th.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Perfect 4th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/m60m7pcso9n6ebb/Tritone.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Tritone",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL:
      "https://www.dropbox.com/s/01rihqvsb5xg29j/Perfect%205th.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Perfect 5th",
    questionId: shortid.generate(),
  },

  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/xz9ux35fxnlrx3n/Minor%206th.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Minor 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/dc9flldkh7aggxi/Major%206th.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Major 6th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/m3a2fpz8f3a2qt3/Minor%207th.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Minor 7th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/1izj4x1bqch3k3x/Major%207th.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Major 7th",
    questionId: shortid.generate(),
  },
  {
    question: "Identify the interval",
    soundURL: "https://www.dropbox.com/s/4fphkj649cbiw3k/Octave.mp3?dl=0",
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
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4),
    correct: "Octave",
    questionId: shortid.generate(),
  },
];

export default () =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, 4));
