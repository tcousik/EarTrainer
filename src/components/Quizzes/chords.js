import React from "react";
import chordBank from "../Banks/chordBank";
import QuestionBox from "../QuestionBox";
import Result from "../Result";
import "../../index.css";

export default class Chord extends React.Component {
  state = {
    questions: [],
    score: 0,
    responses: 0,
    guide: "chords-guide",
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
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
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
    if (this.state.responses < 5) {
      return (
        <div>
          <div className="container">
            <div className="title">Chords</div>
            {this.state.responses < 5 &&
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
          </div>
        </div>
      );
    }
    return (
      <div className="result">
        <Result
          score={this.state.score}
          guide={this.state.guide}
          tryAgain={this.tryAgain}
        />
      </div>
    );
  }
}
