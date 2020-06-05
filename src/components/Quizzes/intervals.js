import React from "react";
import intervalBank from "../Banks/intervalBank";
import QuestionBox from "../questionBox";
import Result from "../result";
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
      responses: this.state.responses < 4 ? this.state.responses + 1 : 4,
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
    return (
      <div className="container">
        <div className="title">Intervals</div>
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
