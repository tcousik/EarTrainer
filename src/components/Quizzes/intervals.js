import React from "react";
import intervalBank from "../Banks/intervalBank";
import QuestionBox from "../QuestionBox";
import Result from "../Result";
import "../../index.css";

export default class Interval extends React.Component {
  state = {
    questions: [],
    score: 0,
    responses: 0,
  };

  fetchIntervals = () => {
    intervalBank().then((interval) => {
      this.setState({
        questions: interval,
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
    this.fetchIntervals();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.fetchIntervals();
  }

  render() {
    if (this.state.responses < 5) {
      return (
        <div>
          <div className="container">
            <div className="title">Intervals</div>
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
        <Result score={this.state.score} tryAgain={this.tryAgain} />
      </div>
    );
  }
}
