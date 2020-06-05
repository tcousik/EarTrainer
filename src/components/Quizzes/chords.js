import React from "react";
import chordBank from "../Banks/chordBank";
import QuestionBox from "../questionBox";
import Result from "../result";
import "../../index.css";

export default class Chord extends React.Component {
  state = {
    questions: [],
    score: 0,
    responses: 0,
  };

  fetchChords = () => {
    chordBank().then((chord) => {
      this.setState({
        questions: chord,
      });
    });
  };

  evaluate = (response, correct) => {
    if (response === correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 4 ? this.state.responses + 1 : 4,
    });
  };

  tryAgain = () => {
    this.fetchChords();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.fetchChords();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Chords</div>
        {this.state.responses < 4 &&
          this.state.questions.map(
            ({ question, soundURL, choices, correct, questionId }) => (
              <QuestionBox
                question={question}
                soundURL={soundURL}
                choices={choices}
                key={questionId}
                chosen={(answer) => this.evaluate(answer, correct)}
              />
            )
          )}

        {this.state.responses === 4 ? (
          <Result score={this.state.score} tryAgain={this.tryAgain} />
        ) : null}
      </div>
    );
  }
}
